import React from 'react';
import { Truck, HandCoins, ShieldCheck, Zap } from 'lucide-react';
import { ServiceFeature } from '../types.ts';

const features: ServiceFeature[] = [
  {
    title: "Mobile Home Specialists",
    description: "We focus exclusively on manufactured housing. We understand titles, DMV transfers, and park regulations better than anyone.",
    icon: Truck,
  },
  {
    title: "The Upside Promise",
    description: "If we can find a buyer who pays more than our guaranteed price, you keep 100% of the extra profit. We win when you win.",
    icon: HandCoins,
  },
  {
    title: "Guaranteed Price",
    description: "No waiting for bank approvals. We offer a firm, guaranteed price for your mobile home immediately.",
    icon: Zap,
  },
  {
    title: "As-Is Transfer",
    description: "Don't spend a dime on repairs. We buy mobile homes in any condition and handle the entire title transfer process for you.",
    icon: ShieldCheck,
  },
];

export const Features: React.FC = () => {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Specialized Solutions for Manufactured Housing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We simplify the process of selling your mobile home across the Carolinas.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 h-full flex-col">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-900">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-800 font-bold text-lg">{feature.title}</p>
                    <p className="text-slate-600 text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};