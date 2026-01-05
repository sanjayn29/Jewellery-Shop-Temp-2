import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxY = scrollY * 0.3;
  const opacity = Math.max(0, 1 - scrollY / 500);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${parallaxY}px) scale(${1 + scrollY * 0.0001})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-deep-black/40 to-deep-black z-10" />
        <img
          src={heroImage}
          alt="Luxury diamond jewellery"
          className="w-full h-full object-cover"
        />
        {/* Soft glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold)/0.05),transparent)] z-10" />
      </div>

      {/* Content */}
      <div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        {/* Decorative line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8 animate-[scaleX_1.5s_ease-out_0.5s_forwards] origin-center scale-x-0" 
          style={{ animation: 'scaleX 1.5s ease-out 0.5s forwards' }}
        />

        {/* Subtitle */}
        <p className="font-body text-sm tracking-luxury text-gold mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          COLLECTION 2025
        </p>

        {/* Main headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wide text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <span className="block">Timeless</span>
          <span className="block mt-2 italic text-gold-light">Elegance</span>
        </h1>

        {/* Description */}
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-md mb-10 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          Discover exquisite pieces crafted with passion, precision, and the finest gemstones from around the world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button variant="gold" size="xl">
            Explore Collection
          </Button>
          <Button variant="luxury" size="xl">
            Book Appointment
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center text-muted-foreground animate-float">
            <span className="font-body text-xs tracking-widest mb-2">SCROLL</span>
            <ChevronDown className="w-4 h-4 text-gold" />
          </div>
        </div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-8 z-20 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="rotate-90 origin-center">
          <span className="font-body text-xs tracking-widest text-muted-foreground">
            HAUTE JOAILLERIE
          </span>
        </div>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-8 z-20 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="-rotate-90 origin-center">
          <span className="font-body text-xs tracking-widest text-muted-foreground">
            SINCE 1892
          </span>
        </div>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
