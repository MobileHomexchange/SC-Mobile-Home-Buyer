
/**
 * Unified API Service for scmobilehomebuyer.com
 */

export const apiService = {
  // 1. CRM: Lead Submission
  submitLead: async (leadData: any) => {
    try {
      console.log("[API] Syncing lead to CRM...", leadData);
      return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 1000));
    } catch (error) {
      console.error("[API] CRM Submission failed", error);
      throw error;
    }
  },

  // 2. Transaction: Fetch Live Deals
  fetchActiveDeals: async () => {
    try {
      // Mock data for the inventory gallery
      return [
        {
          id: 1,
          title: "Double Wide on Private Land",
          location: "Charleston, SC",
          price: "$45,000",
          status: "Sold",
          description: "Beautiful 3BR/2BA double wide. This property moved fast after we completed a full interior refresh.",
          tags: ["Double Wide", "Private Land", "Renovated"],
          media: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=1200&q=80', room: 'overview' },
          ],
          details: { bedrooms: 3, bathrooms: 2, year: 2018, size: "28x56", condition: "Excellent", park: "Private Land" }
        },
        {
          id: 2,
          title: "Move-in Ready Single Wide",
          location: "Raleigh, NC",
          price: "$28,500",
          status: "Available",
          description: "Well-maintained single wide in a premium family community. Close to all amenities.",
          tags: ["Single Wide", "Park Community", "Clean Title"],
          media: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80', room: 'overview' },
          ],
          details: { bedrooms: 2, bathrooms: 1, year: 2012, size: "14x70", condition: "Good", park: "Heritage Oaks" }
        }
      ];
    } catch (error) {
      console.error("[API] Deal fetch failed", error);
      return [];
    }
  },

  // 3. Valuation: Calculate Instant Market Estimation
  // Added to fix the property missing error in MHEvaluator.tsx
  calculateValuation: async (details: any) => {
    try {
      console.log("[API] Calculating valuation...", details);
      // Simulate API call with mock data based on recent Carolinas market trends
      return new Promise((resolve) => setTimeout(() => resolve({
        low_range: 21500,
        high_range: 36200,
        confidence_score: 89
      }), 1200));
    } catch (error) {
      console.error("[API] Valuation engine error", error);
      throw error;
    }
  }
};
