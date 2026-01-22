import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, DollarSign, Bell } from 'lucide-react';
import { apiService } from '../services/apiService.ts';
import { Deal } from '../types.ts';

interface DealGalleryProps {
  onJoinBuyerList?: () => void;
}

const FALLBACK_DEALS: Deal[] = [
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
      { type: 'image', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', alt: "Living space", room: 'living-room' },
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

export const DealGallery: React.FC<DealGalleryProps> = ({ onJoinBuyerList }) => {
  const [deals, setDeals] = useState<Deal[]>(FALLBACK_DEALS);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  useEffect(() => {
    const syncInventory = async () => {
      const liveDeals = await apiService.fetchActiveDeals();
      if (liveDeals && liveDeals.length > 0) {
        setDeals(liveDeals as Deal[]);
      }
    };
    syncInventory();
  }, []);

  const openModal = (deal: Deal, index = 0) => {
    setSelectedDeal(deal);
    setSelectedMediaIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedDeal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="deals" className="py-24 bg-white" aria-labelledby="deals-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">For Sale</h2>
          <h2 id="deals-title" className="mt-2 text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Available Inventory</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Synced live with our Carolinas Transaction Platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group flex flex-col h-full hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={deal.media[0].thumbnail || deal.media[0].url} 
                  alt={deal.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 cursor-pointer"
                  onClick={() => openModal(deal)}
                />
                <div className={`absolute top-4 right-4 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                  deal.status === 'Sold' ? 'bg-green-500 text-white' : 'bg-amber-500 text-white'
                }`}>
                  {deal.status}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-extrabold text-gray-900 leading-tight">{deal.title}</h3>
                  <div className="text-amber-600 font-black flex items-center shrink-0">
                    <DollarSign className="w-4 h-4" />
                    {deal.price}
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-[#005c5c]" />
                  {deal.location}
                </div>
                <button
                  onClick={() => openModal(deal)}
                  className="mt-auto w-full py-4 bg-[#005c5c] text-white font-black rounded-xl hover:bg-amber-600 transition-all uppercase tracking-widest text-xs"
                >
                  View Live Deal
                </button>
              </div>
            </div>
          ))}
          
          <div className="bg-[#002e2e] rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white shadow-xl border border-[#004242]">
            <Bell className="w-12 h-12 text-amber-500 mb-6" />
            <h3 className="text-2xl font-black mb-4">Deal Waitlist</h3>
            <p className="text-blue-100 mb-8 text-sm">Join our priority buyer list to see deals before they hit the market.</p>
            <button onClick={onJoinBuyerList} className="w-full py-4 bg-white text-[#002e2e] font-black rounded-xl hover:bg-gray-100 uppercase tracking-widest text-xs">
              Join List
            </button>
          </div>
        </div>
      </div>

      {selectedDeal && (
        <div className="fixed inset-0 bg-black/95 z-[110] flex items-center justify-center p-0 md:p-6 animate-in fade-in">
          <div className="relative w-full max-w-6xl bg-white md:rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            <div className="p-6 border-b flex justify-between items-center">
              <div>
                <h3 className="text-xl font-black text-[#002e2e]">{selectedDeal.title}</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{selectedDeal.location}</p>
              </div>
              <button onClick={closeModal} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden h-[70vh]">
              <div className="flex-grow bg-black relative flex items-center justify-center">
                <img src={selectedDeal.media[selectedMediaIndex].url} className="w-full h-full object-contain" alt="" />
              </div>
              <div className="w-full md:w-80 p-6 border-l bg-gray-50 overflow-y-auto">
                <h4 className="font-black text-[#002e2e] uppercase tracking-widest text-[10px] mb-4">Property Audit</h4>
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-sm"><span className="text-gray-400 font-bold">Bedrooms</span><span className="font-black text-[#002e2e]">{selectedDeal.details.bedrooms}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-400 font-bold">Bathrooms</span><span className="font-black text-[#002e2e]">{selectedDeal.details.bathrooms}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-400 font-bold">Year</span><span className="font-black text-[#002e2e]">{selectedDeal.details.year}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-400 font-bold">Park Info</span><span className="font-black text-[#002e2e]">{selectedDeal.details.park}</span></div>
                </div>
                <button onClick={closeModal} className="w-full py-4 bg-amber-600 text-white font-black rounded-xl shadow-lg hover:bg-amber-700 transition-all uppercase tracking-widest text-xs">
                  Request Similar Deal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};