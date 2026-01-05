import { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  material: string;
}

interface ProductShowcaseProps {
  products: Product[];
}

const ProductShowcase = ({ products }: ProductShowcaseProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-charcoal"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 delay-200 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="font-body text-sm tracking-luxury text-gold mb-4">
            SIGNATURE PIECES
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground tracking-wide">
            Exquisite Creations
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product Card */}
              <div className="relative bg-muted/30 backdrop-blur-sm border border-gold/10 overflow-hidden transition-all duration-500 group-hover:border-gold/30 group-hover:shadow-gold">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Glow overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold)/0.1),transparent)] transition-opacity duration-300 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Glass overlay with details */}
                  <div
                    className={`absolute inset-0 flex items-end p-4 transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="w-full p-3 bg-deep-black/80 backdrop-blur-md border border-gold/20">
                      <p className="font-body text-xs tracking-wide text-gold mb-1">
                        {product.material}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        Available for viewing
                      </p>
                    </div>
                  </div>
                  
                  {/* Wishlist button */}
                  <button
                    className={`absolute top-4 right-4 p-2 bg-deep-black/60 backdrop-blur-sm border border-gold/20 text-foreground hover:text-gold transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5 text-center">
                  <p className="font-body text-xs tracking-widest text-muted-foreground mb-2 uppercase">
                    {product.category}
                  </p>
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-gold">
                    {product.price}
                  </p>
                </div>

                {/* Bottom gold line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>

              {/* Sparkle effect */}
              <div
                className={`absolute -top-1 -right-1 w-3 h-3 transition-opacity duration-300 ${
                  hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <svg viewBox="0 0 24 24" fill="hsl(var(--gold))" className="animate-sparkle">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 border border-gold/30 text-foreground font-display tracking-wide hover:border-gold/60 transition-all duration-500">
            <span>View All Pieces</span>
            <span className="animate-[pulse_1.5s_ease-in-out_infinite]">→</span>
            <div className="absolute inset-0 bg-gold/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
