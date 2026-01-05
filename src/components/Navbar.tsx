import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, User, Heart, Diamond, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCategories = [
    { 
      name: 'Gold Jewellery', 
      href: '#gold',
      icon: Sparkles,
      subcategories: ['Necklaces', 'Rings', 'Earrings', 'Bracelets']
    },
    { 
      name: 'Diamond Collection', 
      href: '#diamonds',
      icon: Diamond,
      subcategories: ['Solitaire', 'Studded', 'Engagement Rings']
    },
    { 
      name: 'Silver Artistry', 
      href: '#silver',
      subcategories: ['Traditional', 'Contemporary', 'Temple Jewellery']
    },
    { 
      name: 'Bridal Collection', 
      href: '#bridal',
      subcategories: ['Complete Sets', 'Mangalsutra', 'Bangles']
    },
    { 
      name: 'Heritage', 
      href: '#heritage',
      subcategories: ['Antique', 'Vintage', 'Kundan']
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-gold text-white text-xs py-2 animate-fade-in">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="font-body tracking-widest">✨ NEW COLLECTION LAUNCH</span>
            <span className="hidden md:inline font-body">|</span>
            <span className="hidden md:inline font-body tracking-wide">Free Shipping on Orders Above ₹50,000</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity font-body">Track Order</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:opacity-80 transition-opacity font-body hidden md:inline">Store Locator</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-elegant border-b border-gold/20'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#"
              className="relative group transition-all duration-500 hover:scale-105 animate-fade-in"
            >
              <div className="flex items-center gap-3">
                {/* Logo with animated gold shimmer */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 group-hover:animate-shine rounded-full" />
                  <img
                    src={Logo}
                    alt="Meenakshi Jewellers"
                    className="h-12 w-12 lg:h-14 lg:w-14 object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] relative z-10"
                  />
                  {/* Rotating gold ring effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-gold/0 group-hover:border-gold/50 group-hover:scale-110 transition-all duration-700 group-hover:animate-diamond-rotate" />
                  <div className="absolute inset-0 rounded-full border border-gold-light/0 group-hover:border-gold-light/30 group-hover:scale-125 transition-all duration-1000 group-hover:animate-glow-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl lg:text-2xl tracking-wider text-foreground bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text group-hover:text-transparent transition-all duration-500 animate-gold-wave bg-[length:200%_auto]">
                    MEENAKSHI
                  </span>
                  <span className="font-body text-xs tracking-[0.3em] text-gold -mt-1 group-hover:tracking-[0.35em] transition-all duration-300">
                    JEWELLERS
                  </span>
                </div>
              </div>
              {/* Enhanced sparkle effects */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-twinkle" />
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gold-light rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-twinkle" style={{ animationDelay: '0.3s' }} />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {navCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.name}
                    className="relative group"
                    onMouseEnter={() => setActiveCategory(category.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <a
                      href={category.href}
                      className="flex items-center gap-2 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                    >
                      {Icon && <Icon className="w-4 h-4 text-gold group-hover:animate-sparkle" />}
                      <span className="font-body text-sm tracking-widest text-foreground hover:text-gold transition-colors duration-300">
                        {category.name}
                      </span>
                    </a>
                    {/* Gold underline with liquid effect */}
                    <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gold via-gold-light to-gold group-hover:w-full group-hover:left-0 transition-all duration-500 group-hover:animate-liquid-gold" />
                    
                    {/* Dropdown Menu */}
                    {activeCategory === category.name && category.subcategories && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-56 bg-white/95 backdrop-blur-xl rounded-lg shadow-gold-lg border border-gold/20 overflow-hidden animate-fade-in">
                        <div className="py-3">
                          {category.subcategories.map((sub, idx) => (
                            <a
                              key={sub}
                              href={`${category.href}/${sub.toLowerCase().replace(' ', '-')}`}
                              className="block px-6 py-3 font-body text-sm text-foreground hover:bg-gradient-white-gold hover:text-gold transition-all duration-300 border-l-2 border-transparent hover:border-gold"
                              style={{ animationDelay: `${idx * 0.05}s` }}
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                {sub}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              <button className="hidden lg:flex p-2.5 text-foreground hover:text-gold transition-all duration-300 hover:scale-110 hover:bg-ivory rounded-full group relative">
                <Search className="w-5 h-5" />
                <span className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/40 transition-all duration-300" />
              </button>
              <button className="hidden lg:flex p-2.5 text-foreground hover:text-gold transition-all duration-300 hover:scale-110 hover:bg-ivory rounded-full group relative">
                <Heart className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-rose-gold rounded-full animate-twinkle" />
                <span className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/40 transition-all duration-300" />
              </button>
              <button className="hidden lg:flex p-2.5 text-foreground hover:text-gold transition-all duration-300 hover:scale-110 hover:bg-ivory rounded-full group relative">
                <User className="w-5 h-5" />
                <span className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/40 transition-all duration-300" />
              </button>
              <button className="relative p-2.5 text-foreground hover:text-gold transition-all duration-300 hover:scale-110 hover:bg-ivory rounded-full group">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full animate-glow-pulse" />
                <span className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/40 transition-all duration-300" />
              </button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden animate-fade-in">
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-elegant overflow-y-auto">
            <div className="p-6 space-y-6 mt-32">
              {navCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={category.name} className="space-y-3">
                    <a
                      href={category.href}
                      className="flex items-center gap-3 text-lg font-body text-foreground hover:text-gold transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {Icon && <Icon className="w-5 h-5 text-gold" />}
                      {category.name}
                    </a>
                    {category.subcategories && (
                      <div className="ml-8 space-y-2">
                        {category.subcategories.map((sub) => (
                          <a
                            key={sub}
                            href={`${category.href}/${sub.toLowerCase().replace(' ', '-')}`}
                            className="block text-sm font-body text-muted-foreground hover:text-gold transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
