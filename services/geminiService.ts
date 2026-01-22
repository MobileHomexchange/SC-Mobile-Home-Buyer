import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client directly with process.env.API_KEY using named parameters
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the virtual assistant for "scmobilehomebuyer.com", a specialized mobile home solutions company based in the Carolinas.
Your tone is professional, empathetic, and knowledgeable about manufactured housing.

Strict Rules on Terminology:
- NEVER use the term "real estate" or "real estate agent". 
- Use "Mobile Home Specialist" or "Manufactured Home Solutions".
- Refer to properties as "mobile homes", "manufactured homes", or "properties".
- Refer to the closing process as "title transfer" or "the transfer process".

Key Business Logic:
- We operate in South Carolina (SC) and North Carolina (NC).
- We specialize in mobile homes on land AND in parks (leased land).
- We guarantee a purchase price for mobile homes.
- UNIQUE MODEL: If we find a buyer who will pay more for the home than our guaranteed price, the seller keeps 100% of that extra profit. We are compensated by the end-buyer, not the seller.
- We buy "As-Is" and can complete the title transfer in as little as 7 days.
- We handle all manufactured-home-specific paperwork (DMV titles, park management approvals).

If a user asks for a specific price, explain that we need to analyze their home's details first. Encourage them to fill out the form or call.
`;

export const sendMessageToGemini = async (history: string[], message: string): Promise<string> => {
  try {
    // Convert history strings to the Content format expected by the GenerateContent API
    const historyParts = history.map(line => {
      const [role, ...textParts] = line.split(': ');
      return {
        role: role.toLowerCase() === 'user' ? 'user' : 'model',
        parts: [{ text: textParts.join(': ') }]
      };
    });

    // Use gemini-3-pro-preview for complex reasoning tasks involving legal and property transfer logic
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        ...historyParts,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        // Apply system instructions via config as recommended in current guidelines
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    // Extract text directly from the response object property (not a method call)
    return response.text || "I'm sorry, I didn't quite get that. Could you tell me more about your mobile home?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again or call us!";
  }
};