import React, { useState } from 'react';
import { Menu, X, Phone, FileText, Calculator } from 'lucide-react';
import { NavItem } from '../types.ts';
import { Logo } from './Logo.tsx';

interface HeaderProps {
  onApply: () => void;
  onBuy: () => void;
  onEvaluate: () => void;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About Specialists', href: '#about' },
  { label: 'For Sale', href: '#deals' },
  { label: 'Resources', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC<HeaderProps> = ({ onApply, onBuy, onEvaluate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center min-w-0 flex-shrink">
            <a href="#" className="flex items-center h-full py-2">
              <Logo className="h-16 md:h-20 max-w-[300px] md:max-w-[400px]" />
            </a>
          </div>
          
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-[#006363] px-2 py-2 rounded-md text-sm font-bold transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <button 
              onClick={onEvaluate}
              className="text-[#006363] border-2 border-[#006363] px-5 py-2.5 rounded-full flex items-center hover:bg-[#006363] hover:text-white transition-all font-black text-xs uppercase tracking-widest"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Value Home
            </button>

            <button 
              onClick={onApply}
              className="bg-[#f37021] text-white px-6 py-3 rounded-full flex items-center hover:bg-[#d65d18] transition-colors shadow-lg font-black text-xs uppercase tracking-widest"
            >
              <FileText className="w-4 h-4 mr-2" />
              Apply
            </button>

            <a 
              href="tel:+18033205445" 
              className="text-[#006363] font-black flex items-center px-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-1 text-[#f37021]" />
              803-320-5445
            </a>
          </div>

          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#006363] focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 hover:text-[#006363]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <button 
                onClick={() => { setIsOpen(false); onEvaluate(); }}
                className="w-full text-center border-2 border-[#006363] text-[#006363] px-5 py-4 rounded-xl font-black flex items-center justify-center uppercase tracking-widest text-sm"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Value Your Home
              </button>
              <button 
                onClick={() => { setIsOpen(false); onApply(); }}
                className="w-full text-center bg-[#f37021] text-white px-5 py-4 rounded-xl font-black flex items-center justify-center uppercase tracking-widest text-sm"
              >
                <FileText className="w-4 h-4 mr-2" />
                Apply to Sell
              </button>
              <a 
                href="tel:+18033205445" 
                className="w-full text-center border-2 border-gray-100 text-gray-600 px-5 py-4 rounded-xl font-black flex items-center justify-center uppercase tracking-widest text-sm"
              >
                <Phone className="w-4 h-4 mr-2 text-[#f37021]" />
                Call 803-320-5445
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};