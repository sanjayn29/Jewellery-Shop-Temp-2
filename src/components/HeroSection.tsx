import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';

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
      className="relative h-screen overflow-hidden mt-32"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${parallaxY}px) scale(${1 + scrollY * 0.0001})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-cream/50 to-cream z-10" />
        <img
          src={heroImage}
          alt="Luxury diamond jewellery"
          className="w-full h-full object-cover"
        />
        {/* Soft gold glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold)/0.06),transparent)] z-10" />
        {/* Subtle shimmer overlay */}
        <div className="absolute inset-0 opacity-15 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/12 to-transparent animate-shine" />
        </div>
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full animate-float opacity-25"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        {/* Decorative sparkle line */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Sparkles className="w-4 h-4 text-gold animate-twinkle" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <Sparkles className="w-4 h-4 text-gold animate-twinkle" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Subtitle */}
        <p className="font-body text-sm tracking-luxury text-gold mb-4 animate-fade-in uppercase" style={{ animationDelay: '0.5s' }}>
          💎 Collection 2026 💎
        </p>

        {/* Main headline with liquid gold effect */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide mb-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <span className="block liquid-gold-text drop-shadow-lg">Timeless</span>
          <span className="block mt-2 italic silver-text drop-shadow-lg">Elegance</span>
        </h1>

        {/* Description */}
        <p className="font-body text-lg md:text-xl text-charcoal max-w-2xl mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: '0.9s' }}>
          Discover exquisite pieces crafted with passion, precision, and the finest gemstones from around the world. 
          <span className="block mt-2 text-gold font-medium">Where Heritage Meets Modern Luxury</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-gold hover:shadow-gold-lg text-white font-body tracking-widest transition-all duration-500 hover:scale-105 px-8 py-6 text-base relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light/0 via-gold-light/20 to-gold-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-white font-body tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-gold px-8 py-6 text-base backdrop-blur-sm bg-cream/70"
          >
            Book Appointment
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: '1.3s' }}>
          <div className="text-center">
            <div className="text-2xl font-display text-gold mb-1">50+</div>
            <div className="text-xs font-body text-charcoal tracking-widest uppercase">Years Legacy</div>
          </div>
          <div className="w-px h-8 bg-gold/30" />
          <div className="text-center">
            <div className="text-2xl font-display text-gold mb-1">10K+</div>
            <div className="text-xs font-body text-charcoal tracking-widest uppercase">Happy Customers</div>
          </div>
          <div className="w-px h-8 bg-gold/30" />
          <div className="text-center">
            <div className="text-2xl font-display text-gold mb-1">100%</div>
            <div className="text-xs font-body text-charcoal tracking-widest uppercase">Certified Gold</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="flex flex-col items-center text-charcoal animate-float">
            <span className="font-body text-xs tracking-widest mb-2 uppercase">Discover More</span>
            <ChevronDown className="w-5 h-5 text-gold animate-bounce" />
          </div>
        </div>
      </div>

      {/* Side decorative elements with gold theme */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-8 z-20 animate-fade-in" style={{ animationDelay: '1.7s' }}>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="rotate-90 origin-center">
          <span className="font-body text-xs tracking-widest text-gold uppercase">
            Haute Joaillerie
          </span>
        </div>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-8 z-20 animate-fade-in" style={{ animationDelay: '1.7s' }}>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-silver/40 to-transparent" />
        <div className="rotate-90 origin-center">
          <span className="font-body text-xs tracking-widest text-charcoal uppercase">
            Since 1976
          </span>
        </div>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-silver/40 to-transparent" />
      </div>

      {/* Bottom decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40 z-20" />
    </section>
  );
};

export default HeroSection;
