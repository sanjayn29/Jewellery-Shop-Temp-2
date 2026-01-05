import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Rings', href: '#rings' },
    { name: 'Necklaces', href: '#necklaces' },
    { name: 'Bracelets', href: '#bracelets' },
    { name: 'Heritage', href: '#heritage' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 animate-fade-in ${
        isScrolled
          ? 'bg-deep-black/95 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a
            href="#"
            className="relative group transition-transform duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center">
              {/* Diamond icon as hallmark */}
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 mb-1 text-gold"
                fill="currentColor"
              >
                <path d="M12 2L2 9l10 13 10-13L12 2zm0 3.84L18.26 9 12 18.54 5.74 9 12 5.84z" />
              </svg>
              <span className="font-display text-lg tracking-luxury text-foreground">
                ÉLÉGANCE
              </span>
            </div>
            {/* Hallmark border effect */}
            <div className="absolute -inset-2 border border-gold/0 group-hover:border-gold/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <span className="font-body text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {link.name}
                </span>
                {/* Gold line indicator */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500" />
                {/* Gem sparkle on hover */}
                <span className="absolute -top-1 right-0 w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-sparkle" />
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:flex p-2 text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden lg:flex p-2 text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-110">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-110">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full" />
            </button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-4 border-t border-gold/10">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block font-body text-lg tracking-wide text-muted-foreground hover:text-gold transition-colors duration-300"
                style={{
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transitionDelay: `${index * 0.1}s`,
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
