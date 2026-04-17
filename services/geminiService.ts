
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateListingDescription = async (details: {
  year: number;
  make: string;
  model: string;
  condition: string;
  location: string;
}): Promise<string> => {
  try {
    const prompt = `Write a 2-sentence professional wholesale description for this mobile home: 
    ${details.year} ${details.make} ${details.model} located in ${details.location}. 
    Condition is ${details.condition}. Highlight its investment potential and key features for a wholesale buyer.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });

    return response.text || "Professional listing details available upon request.";
  } catch (error) {
    console.error("AI Generation Error:", error);
    return `${details.year} ${details.make} ${details.model} in ${details.condition} condition. Ready for wholesale transition.`;
  }
};

/* Added sendMessageToGemini to support AI chat assistant */
export const sendMessageToGemini = async (history: string[], userMessage: string): Promise<string> => {
  try {
    const prompt = `Conversation history:
    ${history.join('\n')}
    
    User: ${userMessage}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: "You are a professional mobile home specialist for scmobilehomebuyer.com. You help Carolinas mobile home owners with title transfers, DMV paperwork, and 'Guaranteed Price' offers. Be concise, expert, and helpful."
      }
    });

    return response.text || "Our specialists are currently processing requests. Please contact us at 803-320-5445 for immediate help.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I am currently experiencing connection issues. Please call our team directly at 803-320-5445.";
  }
};
