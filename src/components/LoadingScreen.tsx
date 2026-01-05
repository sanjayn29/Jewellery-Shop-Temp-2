import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep-black transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Diamond Animation */}
      <div className="relative mb-12">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 w-32 h-32 animate-[spin_8s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="0.5"
              strokeDasharray="4 4"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(43, 56%, 47%)" />
                <stop offset="100%" stopColor="hsl(43, 60%, 60%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Inner diamond */}
        <div className="relative w-32 h-32 flex items-center justify-center animate-[spin_12s_linear_infinite_reverse]">
          <svg viewBox="0 0 100 100" className="w-20 h-20">
            <polygon
              points="50,5 95,50 50,95 5,50"
              fill="none"
              stroke="url(#diamondGradient)"
              strokeWidth="1"
              className="animate-[draw-line_2s_ease-out_forwards]"
              style={{ strokeDasharray: 300, strokeDashoffset: 0 }}
            />
            <polygon
              points="50,20 80,50 50,80 20,50"
              fill="url(#diamondFill)"
              opacity="0.1"
              className="animate-scale-in"
            />
            <defs>
              <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(43, 56%, 47%)" />
                <stop offset="50%" stopColor="hsl(43, 60%, 70%)" />
                <stop offset="100%" stopColor="hsl(43, 56%, 47%)" />
              </linearGradient>
              <linearGradient id="diamondFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(43, 56%, 47%)" />
                <stop offset="100%" stopColor="hsl(43, 60%, 60%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Sparkle effects */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full animate-sparkle"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${Math.cos((i * Math.PI) / 2) * 50}px, ${Math.sin((i * Math.PI) / 2) * 50}px)`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Brand name */}
      <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <h1 className="font-display text-2xl tracking-luxury text-foreground">
          MAISON ÉLÉGANCE
        </h1>
        <p className="font-body text-sm tracking-widest text-muted-foreground mt-2">
          HAUTE JOAILLERIE
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-px bg-muted relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress text */}
      <p className="mt-4 text-xs tracking-widest text-muted-foreground font-body animate-fade-in" style={{ animationDelay: '0.8s' }}>
        {progress}%
      </p>
    </div>
  );
};

export default LoadingScreen;
