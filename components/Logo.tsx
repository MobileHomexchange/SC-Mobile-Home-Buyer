import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-20", variant = 'dark' }) => {
  const teal = "#006363";
  const orange = "#f37021";
  const textColor = variant === 'light' ? 'white' : '#006363';

  return (
    <div className={`flex items-center ${className}`}>
      {/* 
        Horizontal clipping fix: 
        We use a much wider viewBox (1400px) to accommodate the full "scmobilehomebuyer.com" text 
        without it running off the edge of the SVG coordinate system.
      */}
      <svg 
        viewBox="0 0 1400 450" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="1" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Graphic Elements Group */}
        <g filter="url(#logoShadow)">
          {/* Palm Trees - Improved pathing based on logo image */}
          <g stroke={teal} strokeWidth="12" strokeLinecap="round">
            {/* Tall Tree */}
            <path d="M420 280C420 280 400 200 440 140C450 125 490 110 490 110" />
            <path d="M440 140C440 140 390 155 360 120" strokeWidth="10" />
            <path d="M440 140C440 140 430 90 470 75" strokeWidth="10" />
            <path d="M440 140C440 140 485 155 520 145" strokeWidth="10" />
            
            {/* Short Tree */}
            <path d="M370 280C370 280 350 220 395 180C410 165 440 160 440 160" strokeWidth="10" />
            <path d="M395 180C395 180 360 195 340 170" strokeWidth="8" />
            <path d="M395 180C395 180 380 145 420 130" strokeWidth="8" />
          </g>

          {/* Ground Swish */}
          <path d="M300 285C450 270 750 270 950 285C800 305 450 305 300 285Z" fill={teal} />
          <path d="M350 295C480 290 780 290 900 295" stroke={teal} strokeWidth="4" strokeLinecap="round"/>

          {/* Mobile Home */}
          <rect x="520" y="165" width="280" height="110" fill="white" stroke={teal} strokeWidth="4" />
          <path d="M520 165L660 130L800 165" stroke={teal} strokeWidth="5" fill="white" />
          {/* Orange Door/Section */}
          <rect x="710" y="165" width="90" height="110" fill={orange} />
          {/* Windows */}
          <rect x="575" y="200" width="70" height="45" fill="none" stroke={orange} strokeWidth="5" />
          <line x1="610" y1="200" x2="610" y2="245" stroke={orange} strokeWidth="4" />
          <line x1="575" y1="222.5" x2="645" y2="222.5" stroke={orange} strokeWidth="4" />
        </g>

        {/* Main Text Label - Standardized to lowercase as requested */}
        <text 
          x="100" 
          y="380" 
          style={{ font: 'italic 900 100px Inter, sans-serif', letterSpacing: '-3px' }}
        >
          <tspan fill={orange}>sc</tspan>
          <tspan fill={textColor}>mobilehomebuyer</tspan>
          <tspan fill={orange} dx="5">.com</tspan>
        </text>
      </svg>
    </div>
  );
};
