import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Search, TrendingUp, ChevronRight, ChevronLeft, Loader2, DollarSign, AlertCircle } from 'lucide-react';

interface BuyerApplicationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuyerApplication: React.FC<BuyerApplicationProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    locations: [] as string[],
    homeType: 'any',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1);
      setError('');
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const validateStep = () => {
    setError('');
    if (step === 1) {
      if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
        setError('Contact details are required.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) setStep(s => s + 1);
  };

  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const toggleLocation = (loc: string) => {
    setFormData(prev => ({
      ...prev,
      locations: prev.locations.includes(loc) 
        ? prev.locations.filter(l => l !== loc) 
        : [...prev.locations, loc]
    }));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-950/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="buyer-app-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        <div className="bg-blue-50 px-8 py-6 border-b flex justify-between items-center">
          <div>
            <h2 id="buyer-app-title" className="text-2xl font-black text-blue-900 tracking-tight flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
              Priority Buyer List
            </h2>
            <p className="text-xs font-bold text-blue-600/60 uppercase tracking-widest mt-1">Get First Access to Carolinas Deals</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-blue-100 rounded-full transition-colors" aria-label="Close">
            <X className="w-6 h-6 text-blue-900" />
          </button>
        </div>

        {!isSuccess && (
          <div className="flex w-full h-1.5 bg-gray-100">
            <div 
              className="h-full bg-blue-600 transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
              role="progressbar"
            ></div>
          </div>
        )}

        <div className="p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" /> {error}
            </div>
          )}

          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">You're In!</h3>
              <p className="text-gray-600 text-lg mb-8">
                Your profile is synced. We will alert you the moment a home matching your criteria hits our "Upside Promise" desk.
              </p>
              <button onClick={onClose} className="px-8 py-4 bg-blue-900 text-white font-bold rounded-xl shadow-lg hover:bg-blue-800 transition-all">
                Close & Browse
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <p className="font-bold text-blue-900">1. Contact Information</p>
                  <input 
                    type="text" required placeholder="Full Name" 
                    className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl focus:ring-blue-600"
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="tel" required placeholder="Phone Number" 
                      className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl focus:ring-blue-600"
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                    <input 
                      type="email" required placeholder="Email Address" 
                      className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl focus:ring-blue-600"
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <p className="font-bold text-blue-900">2. Preferences</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="text" placeholder="Max Budget" 
                        className="w-full pl-10 pr-5 py-4 bg-gray-50 border-gray-200 rounded-xl"
                        value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}
                      />
                    </div>
                    <select 
                      className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl"
                      value={formData.homeType} onChange={e => setFormData({...formData, homeType: e.target.value})}
                    >
                      <option value="any">Any Home Type</option>
                      <option value="single">Single Wide</option>
                      <option value="double">Double Wide</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <p className="font-bold text-blue-900">3. Target Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {['Charleston', 'Columbia', 'Charlotte', 'Raleigh', 'Wilmington'].map(loc => (
                      <button
                        key={loc} type="button"
                        onClick={() => toggleLocation(loc)}
                        className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                          formData.locations.includes(loc)
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 flex gap-4">
                {step > 1 && (
                  <button type="button" onClick={handleBack} className="px-6 py-4 border-2 border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50">Back</button>
                )}
                
                {step < 3 ? (
                  <button type="button" onClick={handleNext} className="flex-1 py-4 bg-blue-900 text-white font-bold rounded-xl shadow-lg hover:bg-blue-800">Next</button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className="flex-1 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 disabled:opacity-50">
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Join List'}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};