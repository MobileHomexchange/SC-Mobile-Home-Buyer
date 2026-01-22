import React, { useState } from 'react';
import { X, Calculator, TrendingUp, ShieldCheck, ArrowRight, Loader2, DollarSign } from 'lucide-react';
import { apiService } from '../services/apiService.ts';
import { ValuationResult } from '../types.ts';

interface MHEvaluatorProps {
  isOpen: boolean;
  onClose: () => void;
  onConvert: (data: any) => void;
}

export const MHEvaluator: React.FC<MHEvaluatorProps> = ({ isOpen, onClose, onConvert }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ValuationResult | null>(null);
  const [formData, setFormData] = useState({
    year: 2015,
    size: 'single' as 'single' | 'double',
    condition: 'good',
    location: 'Charleston, SC'
  });

  const handleCalculate = async () => {
    setLoading(true);
    try {
      const valResult = await apiService.calculateValuation(formData);
      setResult(valResult as ValuationResult);
      setStep(2);
    } catch (err) {
      alert("Valuation engine is busy. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-blue-950/95 backdrop-blur-xl">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="bg-gray-900 p-8 text-white flex justify-between items-start">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest mb-4">
              <TrendingUp className="w-3 h-3 mr-1" />
              Carolinas Market Data v4.2
            </div>
            <h2 className="text-3xl font-black tracking-tight leading-none">Instant Evaluator</h2>
          </div>
          <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          {step === 1 ? (
            <div className="space-y-6">
              <p className="text-gray-600 font-medium">Provide basic details for an instant market estimation.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Model Year</label>
                  <input 
                    type="number" 
                    value={formData.year} 
                    onChange={e => setFormData({...formData, year: parseInt(e.target.value)})}
                    className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Home Configuration</label>
                  <select 
                    value={formData.size}
                    onChange={e => setFormData({...formData, size: e.target.value as any})}
                    className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl font-bold"
                  >
                    <option value="single">Single Wide</option>
                    <option value="double">Double Wide</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Current Condition</label>
                <select 
                  value={formData.condition}
                  onChange={e => setFormData({...formData, condition: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl font-bold"
                >
                  <option value="excellent">Excellent / Like New</option>
                  <option value="good">Good / Normal Wear</option>
                  <option value="fair">Fair / Needs Work</option>
                </select>
              </div>

              <button 
                onClick={handleCalculate}
                disabled={loading}
                className="w-full py-5 bg-blue-900 text-white font-black rounded-2xl shadow-xl hover:bg-blue-800 transition-all flex items-center justify-center text-lg"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Run Valuation <ArrowRight className="ml-2 w-6 h-6" /></>}
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 text-center mb-8">
                <p className="text-blue-900 font-black uppercase tracking-widest text-xs mb-2">Estimated Market Value Range</p>
                <div className="flex items-center justify-center text-5xl font-black text-blue-950 tracking-tighter mb-4">
                  <DollarSign className="w-8 h-8 text-amber-500" />
                  {result?.low_range.toLocaleString()} - {result?.high_range.toLocaleString()}
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="flex items-center text-green-600 text-xs font-bold bg-green-50 px-3 py-1 rounded-full border border-green-100">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    {result?.confidence_score}% Confidence
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 text-sm text-center font-medium">
                  This estimation is based on recent local sales. To get a <span className="text-blue-900 font-black">Guaranteed Price Offer</span> from our specialist team, click below.
                </p>
                <button 
                  onClick={() => onConvert(formData)}
                  className="w-full py-5 bg-amber-600 text-white font-black rounded-2xl shadow-xl hover:bg-amber-700 transition-all flex items-center justify-center text-lg"
                >
                  Claim Guaranteed Offer <ArrowRight className="ml-2 w-6 h-6" />
                </button>
                <button 
                  onClick={() => setStep(1)}
                  className="w-full py-3 text-gray-400 font-bold hover:text-gray-600 transition-colors text-sm"
                >
                  Edit Property Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};