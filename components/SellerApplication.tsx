import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ChevronRight, ChevronLeft, Loader2, AlertCircle } from 'lucide-react';
import { apiService } from '../services/apiService.ts';

interface SellerApplicationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SellerApplication: React.FC<SellerApplicationProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    year: '',
    condition: 'good',
    message: ''
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
        setError('Please fill in all contact fields.');
        return false;
      }
    }
    if (step === 2 && !formData.address.trim()) {
      setError('Property address is required.');
      return false;
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
    try {
      await apiService.submitLead({
        type: 'seller',
        ...formData
      });
      setIsSuccess(true);
    } catch (err) {
      setError('Connection to CRM failed. Please check your internet and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-950/90 backdrop-blur-md overflow-y-auto" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="bg-gray-50 px-8 py-6 border-b flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-blue-900 tracking-tight">Seller Audit Application</h2>
            <div className="flex items-center mt-1">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Live CRM Sync Enabled</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><X className="w-6 h-6 text-gray-500" /></button>
        </div>

        {!isSuccess && (
          <div className="flex w-full h-1.5 bg-gray-100">
            <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>
        )}

        <div className="p-8">
          {error && <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-2" />{error}</div>}

          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Application Synced</h3>
              <p className="text-gray-600 text-lg mb-8">Your property details are in our CRM. A Carolinas specialist will contact you with your Guaranteed Price within 24 hours.</p>
              <button onClick={onClose} className="px-8 py-4 bg-blue-900 text-white font-bold rounded-xl">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <p className="text-blue-900 font-bold mb-4 uppercase tracking-widest text-xs">Step 1: Contact Detail Unification</p>
                  <input type="text" placeholder="Full Name" className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone" className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    <input type="email" placeholder="Email" className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <p className="text-blue-900 font-bold mb-4 uppercase tracking-widest text-xs">Step 2: Property Audit</p>
                  <input type="text" placeholder="Street Address, City, State" className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Year" className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl" value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} />
                    <select className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl" value={formData.condition} onChange={e => setFormData({...formData, condition: e.target.value})}>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <p className="text-blue-900 font-bold mb-4 uppercase tracking-widest text-xs">Step 3: Ecosystem Sync</p>
                  <textarea rows={4} placeholder="Additional details for CRM..." className="w-full px-5 py-4 bg-gray-50 border-gray-200 rounded-xl" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                </div>
              )}

              <div className="pt-6 flex gap-4">
                {step > 1 && <button type="button" onClick={handleBack} className="px-6 py-4 border-2 border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 flex items-center">Back</button>}
                {step < 3 ? (
                  <button type="button" onClick={handleNext} className="flex-1 py-4 bg-blue-900 text-white font-bold rounded-xl flex items-center justify-center">Next <ChevronRight className="ml-2 w-5 h-5" /></button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className="flex-1 py-4 bg-amber-600 text-white font-bold rounded-xl flex items-center justify-center">
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sync with CRM'}
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