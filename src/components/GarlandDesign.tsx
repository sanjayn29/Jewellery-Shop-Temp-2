import React from 'react';

export const GarlandDesign = ({ position = 'top', className = '' }: { position?: 'top' | 'bottom' | 'left' | 'right'; className?: string }) => {
  return (
    <div className={`absolute ${position === 'top' ? 'top-0 left-0 right-0' : ''} ${position === 'bottom' ? 'bottom-0 left-0 right-0' : ''} ${position === 'left' ? 'left-0 top-0 bottom-0' : ''} ${position === 'right' ? 'right-0 top-0 bottom-0' : ''} pointer-events-none ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "hsl(48, 98%, 60%)", stopOpacity: 1 }} />
            <stop offset="25%" style={{ stopColor: "hsl(43, 90%, 55%)", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "hsl(40, 90%, 55%)", stopOpacity: 1 }} />
            <stop offset="75%" style={{ stopColor: "hsl(25, 95%, 53%)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "hsl(30, 100%, 50%)", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "hsl(48, 98%, 80%)", stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: "hsl(48, 98%, 80%)", stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: "hsl(48, 98%, 80%)", stopOpacity: 0 }} />
            <animate attributeName="x1" values="-100%;100%" dur="3s" repeatCount="indefinite" />
            <animate attributeName="x2" values="0%;200%" dur="3s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        
        {/* Main garland curve */}
        <path
          d="M0,30 Q50,10 100,30 T200,30 T300,30 T400,30 T500,30 T600,30 T700,30 T800,30 T900,30 T1000,30 T1100,30 T1200,30"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          className="drop-shadow-lg"
        />
        
        {/* Decorative leaves and flowers */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 100 + 50}, 30)`}>
            {/* Leaf */}
            <ellipse
              cx="0"
              cy="-5"
              rx="8"
              ry="15"
              fill="url(#goldGradient)"
              opacity="0.7"
              transform="rotate(-30)"
              className="animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
            <ellipse
              cx="0"
              cy="-5"
              rx="8"
              ry="15"
              fill="url(#goldGradient)"
              opacity="0.7"
              transform="rotate(30)"
              className="animate-float"
              style={{ animationDelay: `${i * 0.2 + 0.1}s` }}
            />
            
            {/* Flower center */}
            {i % 2 === 0 && (
              <circle
                cx="0"
                cy="0"
                r="6"
                fill="hsl(25, 95%, 53%)"
                className="animate-twinkle"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            )}
            
            {/* Flower petals */}
            {i % 2 === 0 && Array.from({ length: 6 }).map((_, j) => (
              <ellipse
                key={j}
                cx="0"
                cy="-10"
                rx="4"
                ry="8"
                fill="hsl(48, 98%, 60%)"
                opacity="0.9"
                transform={`rotate(${j * 60})`}
                className="animate-sparkle"
                style={{ animationDelay: `${i * 0.3 + j * 0.1}s` }}
              />
            ))}
            
            {/* Sparkle dots */}
            {i % 3 === 1 && (
              <circle
                cx="0"
                cy="0"
                r="3"
                fill="hsl(48, 98%, 70%)"
                className="animate-twinkle"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            )}
          </g>
        ))}
        
        {/* Shimmer overlay */}
        <rect
          x="0"
          y="0"
          width="1200"
          height="120"
          fill="url(#shimmerGradient)"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export const CornerGarland = ({ corner = 'top-left', size = 120 }: { corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; size?: number }) => {
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-x-[-1] scale-y-[-1]',
  };

  return (
    <div className={`absolute ${positions[corner]} pointer-events-none z-10`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id={`cornerGold${corner}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "hsl(48, 98%, 60%)", stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: "hsl(43, 90%, 55%)", stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: "hsl(25, 95%, 53%)", stopOpacity: 0.9 }} />
          </linearGradient>
        </defs>
        
        {/* Main arc */}
        <path
          d="M0,0 Q0,60 60,60"
          fill="none"
          stroke={`url(#cornerGold${corner})`}
          strokeWidth="2.5"
          className="drop-shadow-md"
        />
        
        {/* Decorative swirls */}
        <path
          d="M10,10 Q10,30 30,30"
          fill="none"
          stroke={`url(#cornerGold${corner})`}
          strokeWidth="2"
          opacity="0.6"
          className="animate-shimmer"
        />
        <path
          d="M20,20 Q20,35 35,35"
          fill="none"
          stroke={`url(#cornerGold${corner})`}
          strokeWidth="1.5"
          opacity="0.5"
          className="animate-shimmer"
          style={{ animationDelay: "0.5s" }}
        />
        
        {/* Leaf ornaments */}
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 12}, ${i * 12})`}>
            <ellipse
              cx="5"
              cy="5"
              rx="4"
              ry="8"
              fill={`url(#cornerGold${corner})`}
              opacity="0.7"
              transform="rotate(-45 5 5)"
              className="animate-float"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            
            {/* Small sparkle */}
            {i % 2 === 0 && (
              <circle
                cx="5"
                cy="5"
                r="2"
                fill="hsl(48, 98%, 70%)"
                className="animate-twinkle"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            )}
          </g>
        ))}
        
        {/* Central flower */}
        <g transform="translate(5, 5)">
          <circle cx="0" cy="0" r="5" fill="hsl(25, 95%, 53%)" className="animate-glow-pulse" />
          {Array.from({ length: 6 }).map((_, j) => (
            <ellipse
              key={j}
              cx="0"
              cy="-8"
              rx="3"
              ry="6"
              fill="hsl(48, 98%, 60%)"
              opacity="0.8"
              transform={`rotate(${j * 60})`}
              className="animate-sparkle"
              style={{ animationDelay: `${j * 0.15}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export const FloralDivider = () => {
  return (
    <div className="w-full py-8 flex items-center justify-center overflow-hidden">
      <svg width="600" height="60" viewBox="0 0 600 60" className="max-w-full">
        <defs>
          <linearGradient id="floralGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "hsl(48, 98%, 60%)", stopOpacity: 0.3 }} />
            <stop offset="20%" style={{ stopColor: "hsl(43, 90%, 55%)", stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: "hsl(40, 90%, 55%)", stopOpacity: 1 }} />
            <stop offset="80%" style={{ stopColor: "hsl(25, 95%, 53%)", stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: "hsl(30, 100%, 50%)", stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        
        {/* Central ornament */}
        <g transform="translate(300, 30)">
          {/* Diamond shape */}
          <path
            d="M0,-15 L10,0 L0,15 L-10,0 Z"
            fill="url(#floralGold)"
            className="animate-glow-pulse"
          />
          
          {/* Surrounding petals */}
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-20"
              rx="5"
              ry="10"
              fill="hsl(48, 98%, 60%)"
              opacity="0.7"
              transform={`rotate(${i * 45})`}
              className="animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </g>
        
        {/* Left flourish */}
        <path
          d="M100,30 Q150,15 200,30"
          fill="none"
          stroke="url(#floralGold)"
          strokeWidth="2"
          className="animate-shimmer"
        />
        <path
          d="M80,30 Q120,20 160,30"
          fill="none"
          stroke="url(#floralGold)"
          strokeWidth="1.5"
          opacity="0.6"
          className="animate-shimmer"
          style={{ animationDelay: "0.5s" }}
        />
        
        {/* Right flourish */}
        <path
          d="M400,30 Q450,15 500,30"
          fill="none"
          stroke="url(#floralGold)"
          strokeWidth="2"
          className="animate-shimmer"
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M440,30 Q480,20 520,30"
          fill="none"
          stroke="url(#floralGold)"
          strokeWidth="1.5"
          opacity="0.6"
          className="animate-shimmer"
          style={{ animationDelay: "0.8s" }}
        />
        
        {/* Decorative leaves */}
        {[220, 240, 260, 340, 360, 380].map((x, i) => (
          <g key={i} transform={`translate(${x}, 30)`}>
            <ellipse
              cx="0"
              cy="-5"
              rx="4"
              ry="8"
              fill="hsl(43, 90%, 55%)"
              opacity="0.6"
              transform={`rotate(${i % 2 === 0 ? -30 : 30})`}
              className="animate-float"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};
