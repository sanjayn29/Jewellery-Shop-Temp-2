import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Collection {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface FeaturedCollectionsProps {
  collections: Collection[];
}

const FeaturedCollections = ({ collections }: FeaturedCollectionsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="collections"
      className="relative py-32 bg-deep-black"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold))_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className={`w-16 h-px bg-gold mx-auto mb-6 transition-transform duration-1000 delay-200 origin-center ${
              isInView ? 'scale-x-100' : 'scale-x-0'
            }`}
          />
          <p className="font-body text-sm tracking-luxury text-gold mb-4">
            CURATED EXCELLENCE
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground tracking-wide">
            Featured Collections
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`group relative transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                {/* Image */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Gold border effect */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
                
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-2">
                      {collection.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                      {collection.description}
                    </p>
                    
                    {/* Explore link */}
                    <div className="flex items-center space-x-2 text-gold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="font-body text-sm tracking-widest">
                        EXPLORE
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
