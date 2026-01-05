import { useEffect, useRef, useState } from 'react';

interface HeritageSectionProps {
  heritageImage: string;
}

const HeritageSection = ({ heritageImage }: HeritageSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / window.innerHeight;
        setScrollY(scrollProgress * 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '1892', label: 'Year Founded' },
    { number: '130+', label: 'Years of Excellence' },
    { number: '50+', label: 'Master Artisans' },
    { number: '12', label: 'Ateliers Worldwide' },
  ];

  return (
    <section
      ref={sectionRef}
      id="heritage"
      className="relative py-32 bg-deep-black overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={heritageImage}
                alt="Master jeweller crafting"
                className="w-full h-full object-cover transition-transform duration-100"
                style={{ transform: `translateY(${scrollY}px) scale(1.1)` }}
              />
              
              {/* Ornamental frame */}
              <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
              <div className="absolute inset-8 border border-gold/20 pointer-events-none" />
              
              {/* Corner ornaments */}
              <svg className="absolute top-2 left-2 w-8 h-8 text-gold" viewBox="0 0 32 32">
                <path d="M0 16 L16 0 L16 8 L8 16 L16 24 L16 32 L0 16" fill="currentColor" opacity="0.3" />
              </svg>
              <svg className="absolute top-2 right-2 w-8 h-8 text-gold rotate-90" viewBox="0 0 32 32">
                <path d="M0 16 L16 0 L16 8 L8 16 L16 24 L16 32 L0 16" fill="currentColor" opacity="0.3" />
              </svg>
              <svg className="absolute bottom-2 left-2 w-8 h-8 text-gold -rotate-90" viewBox="0 0 32 32">
                <path d="M0 16 L16 0 L16 8 L8 16 L16 24 L16 32 L0 16" fill="currentColor" opacity="0.3" />
              </svg>
              <svg className="absolute bottom-2 right-2 w-8 h-8 text-gold rotate-180" viewBox="0 0 32 32">
                <path d="M0 16 L16 0 L16 8 L8 16 L16 24 L16 32 L0 16" fill="currentColor" opacity="0.3" />
              </svg>
            </div>

            {/* Floating badge */}
            <div
              className={`absolute -bottom-8 -right-8 lg:right-8 w-32 h-32 bg-gold flex flex-col items-center justify-center text-primary-foreground transition-all duration-700 delay-500 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <span className="font-display text-3xl">130</span>
              <span className="font-body text-xs tracking-widest">YEARS</span>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div
              className={`w-16 h-px bg-gold mb-6 transition-transform duration-1000 delay-400 origin-left ${
                isInView ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
            
            <p className="font-body text-sm tracking-luxury text-gold mb-4">
              OUR HERITAGE
            </p>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide mb-6">
              A Legacy of <br />
              <span className="italic text-gold-light">Craftsmanship</span>
            </h2>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              For over a century, Maison Élégance has been synonymous with exceptional 
              artistry and uncompromising quality. Our master jewellers, trained in 
              time-honored techniques, bring to life pieces that transcend generations.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
              Each creation begins with a vision and culminates in a masterpiece—
              meticulously handcrafted using only the finest materials and the most 
              precious stones from around the world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center lg:text-left transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <p className="font-display text-2xl md:text-3xl text-gold mb-1">
                    {stat.number}
                  </p>
                  <p className="font-body text-xs tracking-widest text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
