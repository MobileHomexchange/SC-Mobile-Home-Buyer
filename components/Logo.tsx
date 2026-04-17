
import React from 'react';

export const Logo: React.FC<{ className?: string; variant?: 'light' | 'dark' }> = ({ className = "h-8", variant = 'dark' }) => (
  <div className={`flex items-center gap-2 font-black tracking-tighter ${variant === 'light' ? 'text-white' : 'text-slate-900'} ${className}`}>
    <div className="bg-amber-500 text-white p-1 rounded-lg">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </div>
    <span className="text-xl">scmobilehomebuyer<span className={variant === 'light' ? 'text-amber-400' : 'text-amber-600'}>.com</span></span>
  </div>
);
