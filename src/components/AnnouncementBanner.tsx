import { Sparkles, TrendingUp, Award, Shield } from 'lucide-react';

const AnnouncementBanner = () => {
  const announcements = [
    { icon: Sparkles, text: "New Bridal Collection 2026 Now Available" },
    { icon: TrendingUp, text: "Up to 25% Off on Gold Jewellery" },
    { icon: Award, text: "India's Most Trusted Jeweller - 50+ Years" },
    { icon: Shield, text: "100% Certified & Hallmarked Gold" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-gold via-gold-light to-gold text-white overflow-hidden">
      <div className="relative py-3">
        {/* Animated shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
        
        {/* Scrolling announcements */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...announcements, ...announcements].map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 mx-8 font-body text-sm tracking-wide"
            >
              <item.icon className="w-4 h-4 animate-twinkle" />
              <span>{item.text}</span>
              <span className="mx-4 text-white/50">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframe animation for marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBanner;
