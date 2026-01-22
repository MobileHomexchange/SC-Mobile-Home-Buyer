import React from 'react';
import { Mail, Phone, MapPin, Facebook, Clock } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <Logo variant="light" className="h-12" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              We are specialized property solutions experts helping Carolinas mobile home owners navigate successful transitions with our unique Guaranteed Price model.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-[#f37021]">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-bold">
              <li><a href="#" className="hover:text-[#f37021] transition-colors">Home Dashboard</a></li>
              <li><a href="#how-it-works" className="hover:text-[#f37021] transition-colors">Specialist Process</a></li>
              <li><a href="#blog" className="hover:text-[#f37021] transition-colors">Resources</a></li>
              <li><a href="#contact" className="hover:text-[#f37021] transition-colors">Contact Specialists</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-[#f37021]">Community</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://facebook.com/groups/yourgroup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 bg-[#005c5c] hover:bg-[#004242] text-white text-[10px] font-black rounded-xl transition-all uppercase tracking-widest shadow-lg"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Join Our SC/NC Group
                </a>
              </li>
              <li className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                Connect with local buyers and sellers in our private Carolinas community.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-[#f37021]">Availability</h3>
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full border-2 border-[#f37021] flex items-center justify-center flex-shrink-0 mr-4 bg-white/5">
                <Clock className="w-6 h-6 text-[#f37021]" />
              </div>
              <div>
                <h4 className="text-sm text-white font-black uppercase tracking-wider">Hours</h4>
                <p className="text-xs text-gray-400 font-bold mt-1">9AM - 5PM | Mon-Sat</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 text-[#f37021]">Specialist Hub</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-bold">
              <li>
                <a href="tel:8033205445" className="flex items-center group cursor-pointer hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-3 text-[#f37021]" /> 
                  803-320-5445
                </a>
              </li>
              <li>
                <a href="mailto:info@faithmhs.com" className="flex items-center group cursor-pointer hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-[#f37021]" /> 
                  info@faithmhs.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-[#f37021]" /> 
                Serving All Carolinas Counties
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 font-black uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} scmobilehomebuyer.com. A Faith MHS Integrated Platform.</p>
          <p className="flex items-center">
            Created by <span className="text-[#f37021] ml-1.5 hover:text-white transition-colors cursor-default">KOcreations</span>
          </p>
        </div>
      </div>
    </footer>
  );
};