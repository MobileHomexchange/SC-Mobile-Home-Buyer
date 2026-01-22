import React from 'react';
import { ArrowRight, Phone, Sparkles, Calculator } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface HeroProps {
  onApply: () => void;
  onEvaluate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApply, onEvaluate }) => {
  // Permanent fix: Using a stable URL to ensure the background never "disappears"
  const bgImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop";

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* BACKGROUND LAYER - Forced to z-0 */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center"
          src={bgImage}
          alt="Modern Real Estate"
          style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0 }}
        />
        {/* Subtle white overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      </div>
      
      {/* CONTENT LAYER - Forced to z-10 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-3xl lg:mr-auto">
          {/* Glass Card - Moved Left as requested */}
          <div className="bg-white/30 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/50">
            
            <div className="mb-10">
              <Logo className="h-16 md:h-24 max-w-full" />
            </div>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 border border-[#f37021]/30 text-blue-950 text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles className="w-3.5 h-3.5 mr-2 text-[#f37021]" />
              Direct Carolinas Purchase Specialists
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-blue-950 tracking-tight leading-[0.95] mb-8">
              Fair Cash. <br/>
              <span className="text-[#f37021]">Fast</span> Close.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-900 mb-8 leading-relaxed font-bold">
              Get a <span className="border-b-4 border-[#f37021]">Guaranteed Price</span> for your mobile home in 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <button onClick={onApply} className="inline-flex items-center justify-center px-10 py-5 bg-[#f37021] text-white text-lg font-black rounded-2xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest">
                Apply to Sell <ArrowRight className="ml-3 h-5 w-5" />
              </button>
              
              <button onClick={onEvaluate} className="inline-flex items-center justify-center px-10 py-5 bg-blue-950 text-white text-lg font-black rounded-2xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest">
                <Calculator className="w-5 h-5 mr-3 text-amber-500" />
                Value Home
              </button>
            </div>

            <div className="pt-8 border-t border-white/30">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                     <Phone className="w-6 h-6 text-[#f37021]" />
                  </div>
                  <div>
                     <p className="text-xs font-black text-blue-900 uppercase tracking-widest mb-1">Call or Text Us 24/7</p>
                     <a href="tel:8033205445" className="text-2xl font-black text-slate-900 hover:text-[#f37021] transition-colors">
                        803-320-5445
                     </a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};