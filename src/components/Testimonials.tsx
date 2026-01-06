import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The craftsmanship is extraordinary! My bridal set from Meenakshi Jewellers became the talk of my wedding. The gold work is exquisite and the diamonds sparkle like stars.",
    purchase: "Bridal Collection"
  },
  {
    id: 2,
    name: "Aditya Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Purchased an engagement ring here and the experience was exceptional. The staff guided us through every detail, and the quality is unmatched. Highly recommended!",
    purchase: "Diamond Engagement Ring"
  },
  {
    id: 3,
    name: "Lakshmi Iyer",
    location: "Chennai",
    rating: 5,
    text: "A legacy of trust spanning generations! My family has been buying from Meenakshi Jewellers for over 30 years. Their traditional designs are authentic and beautiful.",
    purchase: "Temple Jewellery"
  },
  {
    id: 4,
    name: "Rahul Patel",
    location: "Bangalore",
    rating: 5,
    text: "The gold coins I purchased for investment are of the highest purity. The certification process is transparent and their prices are competitive.",
    purchase: "Gold Investment"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-elegant relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold/20 rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-gold/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-body text-sm tracking-luxury text-gold mb-3 uppercase">
            💎 Customer Stories 💎
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="liquid-gold-text">What Our Clients Say</span>
          </h2>
          <p className="font-body text-lg text-charcoal max-w-2xl mx-auto">
            Trusted by thousands of families for over 50 years
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-gold-lg p-8 md:p-12 relative overflow-hidden animate-fade-in border border-gold/10">
            {/* Decorative quote */}
            <Quote className="absolute top-8 left-8 w-16 h-16 text-gold/10" />
            <Quote className="absolute bottom-8 right-8 w-16 h-16 text-gold/10 rotate-180" />

            {/* Rating */}
            <div className="flex gap-1 justify-center mb-6 relative z-10">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-gold text-gold animate-twinkle"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-center relative z-10">
              <p className="font-body text-lg md:text-xl text-charcoal leading-relaxed mb-8 italic">
                "{current.text}"
              </p>

              {/* Customer Info */}
              <div className="space-y-2">
                <p className="font-display text-2xl text-gold">{current.name}</p>
                <p className="font-body text-sm text-charcoal tracking-widest uppercase">
                  {current.location}
                </p>
                <div className="inline-block px-4 py-1.5 bg-gradient-gold rounded-full">
                  <p className="font-body text-xs text-white tracking-wide">
                    Purchased: {current.purchase}
                  </p>
                </div>
              </div>
            </blockquote>

            {/* Navigation Dots */}
            <div className="flex gap-2 justify-center mt-8 relative z-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-gradient-gold'
                      : 'w-2 h-2 bg-gold/30 hover:bg-gold/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="text-3xl font-display text-gold mb-1 animate-fade-in">50+</div>
            <div className="text-sm font-body text-charcoal tracking-widest uppercase">Years Trust</div>
          </div>
          <div className="w-px h-12 bg-gold/30" />
          <div className="text-center">
            <div className="text-3xl font-display text-gold mb-1 animate-fade-in">10,000+</div>
            <div className="text-sm font-body text-charcoal tracking-widest uppercase">Happy Customers</div>
          </div>
          <div className="w-px h-12 bg-gold/30" />
          <div className="text-center">
            <div className="text-3xl font-display text-gold mb-1 animate-fade-in">100%</div>
            <div className="text-sm font-body text-charcoal tracking-widest uppercase">Certified</div>
          </div>
          <div className="w-px h-12 bg-gold/30" />
          <div className="text-center">
            <div className="text-3xl font-display text-gold mb-1 animate-fade-in">4.9★</div>
            <div className="text-sm font-body text-charcoal tracking-widest uppercase">Google Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
