import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, HelpCircle, ArrowRight, Video, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [isVideoRequest, setIsVideoRequest] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    homeType: '',
    locationType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setIsVideoRequest(window.location.hash === '#video-request');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const validate = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.address) {
      setError('Please fill in all required fields.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', address: '', homeType: '', locationType: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="py-24 bg-blue-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          <div className="mb-12 lg:mb-0 text-white">
            {isVideoRequest && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500 text-blue-900 text-sm font-bold mb-6 animate-bounce">
                <Video className="w-4 h-4 mr-2" />
                Priority Video Walkthrough Request
              </div>
            )}
            <h2 className="text-4xl font-extrabold sm:text-5xl mb-8 leading-tight tracking-tight">
              {isVideoRequest ? 'Get Featured in Our Next Video' : 'Get Your Guaranteed Mobile Home Price'}
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              {isVideoRequest 
                ? "Recording a video is the fastest way to find cash buyers who will beat our guaranteed price."
                : "Specialized in SC & NC manufactured homes. Get a fair price audit in 24 hours."
              }
            </p>
            <div className="space-y-4">
              {[
                "SC & NC Licensed Specialists",
                "DMV Title Transfer Experts",
                "100% Upside Promise Protection",
                "7-Day Fast Closing Guarantee"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 text-amber-500 mr-4 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-8 border-amber-500">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Sent!</h3>
                <p className="text-gray-600">A Carolinas specialist will reach out within 24 hours.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-8 text-blue-600 font-bold flex items-center mx-auto hover:underline">
                  New request <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs flex items-center"><AlertCircle className="w-4 h-4 mr-2" />{error}</div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="name" required placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border-gray-200 bg-gray-50 focus:ring-blue-500 transition-all" aria-label="Full Name" />
                  <input type="tel" name="phone" required placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border-gray-200 bg-gray-50 focus:ring-blue-500 transition-all" aria-label="Phone Number" />
                </div>
                <input type="email" name="email" required placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border-gray-200 bg-gray-50 focus:ring-blue-500 transition-all" aria-label="Email" />
                <input type="text" name="address" required placeholder="Property Address (SC/NC)" value={formData.address} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border-gray-200 bg-gray-50 focus:ring-blue-500 transition-all" aria-label="Property Address" />
                
                <select name="homeType" value={formData.homeType} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border-gray-200 bg-gray-50 focus:ring-blue-500 transition-all" aria-label="Home Type">
                  <option value="">Home Configuration</option>
                  <option value="single">Single Wide</option>
                  <option value="double">Double Wide</option>
                  <option value="triple">Manufactured/Modular</option>
                </select>

                <textarea name="message" rows={3} placeholder="Additional Details..." value={formData.message} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border-gray-200 bg-gray-50 focus:ring-blue-500 transition-all" aria-label="Notes" />

                <button type="submit" disabled={isSubmitting} className="w-full py-5 px-6 rounded-xl shadow-lg text-xl font-bold text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-70 transition-all transform hover:scale-[1.01] active:scale-100">
                  {isSubmitting ? 'Processing...' : (isVideoRequest ? 'Request Video Audit' : 'Get Guaranteed Price')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};