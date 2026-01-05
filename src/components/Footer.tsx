import { useEffect, useRef, useState } from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const footerLinks = {
    collections: ['Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Watches'],
    services: ['Bespoke Design', 'Restoration', 'Valuation', 'Cleaning'],
    about: ['Our Heritage', 'Craftsmanship', 'Sustainability', 'Press'],
  };

  const socialLinks = [
    { name: 'Instagram', icon: '◇' },
    { name: 'Pinterest', icon: '◆' },
    { name: 'Facebook', icon: '◈' },
    { name: 'Twitter', icon: '✧' },
  ];

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-cream to-ivory pt-24 pb-12 overflow-hidden border-t border-gold/20">
      {/* Ornamental top border */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/50 to-gold/70" />
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold animate-twinkle">
              <path
                fill="currentColor"
                d="M12 2L14.59 9.41L22 12L14.59 14.59L12 22L9.41 14.59L2 12L9.41 9.41L12 2Z"
              />
            </svg>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/50 to-gold/70" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div
              className={`mb-6 transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <img
                    src={Logo}
                    alt="Meenakshi Jewellers"
                    className="h-16 w-16 object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-gold/20 group-hover:scale-110 transition-all duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl tracking-wider text-foreground bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text group-hover:text-transparent transition-all duration-500">
                    MEENAKSHI
                  </span>
                  <span className="font-body text-sm tracking-[0.3em] text-gold/80 -mt-1">
                    JEWELLERS
                  </span>
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm mb-8">
              Crafting exquisite jewellery with traditional artistry and modern elegance. 
              Each piece embodies our heritage of excellence and dedication to timeless beauty.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 hover:scale-110 ${
                    isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div
            className={`transition-all duration-600 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h4 className="font-display text-sm tracking-widest text-foreground mb-6">
              COLLECTIONS
            </h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-600 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h4 className="font-display text-sm tracking-widest text-foreground mb-6">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-600 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h4 className="font-display text-sm tracking-widest text-foreground mb-6">
              MAISON
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div
          className={`border-t border-b border-gold/10 py-12 mb-12 transition-all duration-600 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="max-w-xl mx-auto text-center">
            <h4 className="font-display text-xl text-foreground mb-4">
              Join Our World
            </h4>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Receive exclusive invitations, early access to new collections, 
              and bespoke offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 bg-transparent border border-gold/30 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold/60 transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gold text-primary-foreground font-display text-sm tracking-widest hover:bg-gold-light transition-colors duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-body text-xs text-muted-foreground">
            © 2025 Maison Élégance. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-xs text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-xs text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="font-body text-xs text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Cookie Settings
            </a>
          </div>
        </div>

        {/* Engraved texture decoration */}
        <div className="absolute bottom-4 right-4 opacity-10">
          <svg viewBox="0 0 100 100" className="w-24 h-24 text-gold">
            <path
              d="M50 0 L100 50 L50 100 L0 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M50 10 L90 50 L50 90 L10 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M50 20 L80 50 L50 80 L20 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
