import React from 'react';
import { ArrowRight, Phone, MapPin, CheckCircle2, Sparkles, Calculator } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onApply: () => void;
  onEvaluate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApply, onEvaluate }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gray-50 overflow-hidden">
      {/* Background Image - Local File from public folder */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center"
          src="/Barley-308645_02-880x588.jpg"
          alt="Modern Carolinas Manufactured Home"
        />
        {/* No dark overlays or gradients here - ensuring maximum visibility of the house */}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl">
          {/* Light Glass-morphism Content Card - 15% opacity white for a "lively" feel */}
          <div className="bg-white/15 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-black/10 border border-white/40 animate-in fade-in slide-in-from-left-8 duration-1000">
            
            <div className="mb-10 overflow-visible">
              <Logo className="h-16 md:h-24 max-w-full" />
            </div>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f37021]/20 border border-[#f37021]/40 text-blue-950 text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles className="w-3.5 h-3.5 mr-2 text-[#f37021]" />
              Direct Carolinas Purchase Specialists
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-blue-950 tracking-tight leading-[0.95] mb-8">
              Fair Cash. <br/>
              <span className="text-[#f37021]">Fast</span> Close.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-900 mb-10 leading-relaxed font-bold">
              Get a <span className="border-b-4 border-[#f37021]">Guaranteed Price</span> for your mobile home in 24 hours. No repairs, no cleaning, and zero stress.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
              <div className="flex items-center text-xs font-black text-blue-900 uppercase tracking-widest">
                <CheckCircle2 className="w-5 h-5 mr-3 text-green-600" />
                7-Day Title Transfer
              </div>
              <div className="flex items-center text-xs font-black text-blue-900 uppercase tracking-widest">
                <CheckCircle2 className="w-5 h-5 mr-3 text-green-600" />
                As-Is Purchase
              </div>
              <div className="flex items-center text-xs font-black text-blue-900 uppercase tracking-widest">
                <CheckCircle2 className="w-5 h-5 mr-3 text-green-600" />
                DMV Specialist Team
              </div>
              <div className="flex items-center text-xs font-black text-blue-900 uppercase tracking-widest">
                <CheckCircle2 className="w-5 h-5 mr-3 text-green-600" />
                No Commissions
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={onApply}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#f37021] text-white text-lg font-black rounded-2xl shadow-xl shadow-orange-500/30 hover:bg-[#d65d18] transition-all transform hover:scale-[1.03] active:scale-95 uppercase tracking-widest"
              >
                Apply to Sell
                <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onEvaluate}
                className="inline-flex items-center justify-center px-10 py-5 bg-blue-950 text-white text-lg font-black rounded-2xl shadow-xl shadow-blue-950/20 hover:bg-blue-900 transition-all transform hover:scale-[1.03] active:scale-95 uppercase tracking-widest"
              >
                <Calculator className="w-5 h-5 mr-3 text-amber-500" />
                Value Home
              </button>
            </div>
          </div>
          
          {/* Light Contact Bar */}
          <div className="mt-12 flex flex-wrap items-center gap-8 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/30 w-fit shadow-xl shadow-black/5">
            <a href="tel:8033205445" className="flex items-center text-blue-950 hover:text-[#f37021] transition-colors font-black uppercase tracking-widest text-xs">
              <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center mr-3">
                <Phone className="w-4 h-4 text-[#f37021]" />
              </div>
              803-320-5445
            </a>
            <div className="flex items-center text-blue-950 font-black uppercase tracking-widest text-xs">
              <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center mr-3">
                <MapPin className="w-4 h-4 text-blue-900" />
              </div>
              SC & NC Experts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};