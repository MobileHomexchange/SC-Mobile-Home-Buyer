import React from 'react';
import { ClipboardList, BadgeCheck, Zap } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Specialist 3-Step Process
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlike traditional buyers, our process is tailored specifically for the unique legal and logistical needs of manufactured housing.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-100 -translate-y-1/2 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            
            {/* Step 1 */}
            <div className="group">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 transform transition group-hover:-translate-y-2 h-full flex flex-col">
                <div className="w-20 h-20 mx-auto bg-blue-900 rounded-2xl flex items-center justify-center shadow-lg mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                  <ClipboardList className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Share Mobile Home Details</h3>
                <p className="text-gray-600 text-lg flex-grow">
                  Tell us about your manufactured home's condition, location, and park situation. We specialize in all setups.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 transform transition group-hover:-translate-y-2 h-full flex flex-col">
                <div className="w-20 h-20 mx-auto bg-blue-900 rounded-2xl flex items-center justify-center shadow-lg mb-8 -rotate-3 group-hover:rotate-0 transition-transform">
                  <BadgeCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Receive Guaranteed Price</h3>
                <p className="text-gray-600 text-lg flex-grow">
                  We analyze similar mobile home sales in your specific area to determine your guaranteed floor price.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 transform transition group-hover:-translate-y-2 h-full flex flex-col">
                <div className="w-20 h-20 mx-auto bg-amber-600 rounded-2xl flex items-center justify-center shadow-lg mb-8 rotate-6 group-hover:rotate-0 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Choose Your Outcome</h3>
                <p className="text-gray-600 text-lg flex-grow">
                  Take fast cash from us in 7 days <strong>OR</strong> get a higher price through our buyer network. You keep 100% of the extra.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};