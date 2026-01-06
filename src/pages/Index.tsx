import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import ProductShowcase from '@/components/ProductShowcase';
import HeritageSection from '@/components/HeritageSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingAssistant from '@/components/FloatingAssistant';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import { GarlandDesign, CornerGarland, FloralDivider } from '@/components/GarlandDesign';

// Import images
import heroImage from '@/assets/hero-jewellery.jpg';
import collectionNecklaces from '@/assets/collection-necklaces.jpg';
import collectionRings from '@/assets/collection-rings.jpg';
import collectionBracelets from '@/assets/collection-bracelets.jpg';
import heritageCraftsman from '@/assets/heritage-craftsman.jpg';
import productEarrings from '@/assets/product-earrings.jpg';
import productEmeraldRing from '@/assets/product-emerald-ring.jpg';
import productSapphirePendant from '@/assets/product-sapphire-pendant.jpg';
import productBracelet from '@/assets/product-bracelet.jpg';

const collections = [
  {
    id: 1,
    name: 'Lumière',
    description: 'A radiant collection inspired by the play of light on precious diamonds.',
    image: collectionNecklaces,
  },
  {
    id: 2,
    name: 'Eternité',
    description: 'Timeless rings symbolizing everlasting love and commitment.',
    image: collectionRings,
  },
  {
    id: 3,
    name: 'Opulence',
    description: 'Statement bracelets crafted with exceptional artistry.',
    image: collectionBracelets,
  },
];

const products = [
  {
    id: 1,
    name: 'Cascade Earrings',
    category: 'Earrings',
    price: '€24,500',
    image: productEarrings,
    material: '18K White Gold, Diamonds',
  },
  {
    id: 2,
    name: 'Verdure Ring',
    category: 'Rings',
    price: '€68,000',
    image: productEmeraldRing,
    material: '18K Yellow Gold, Colombian Emerald',
  },
  {
    id: 3,
    name: 'Azure Pendant',
    category: 'Necklaces',
    price: '€42,000',
    image: productSapphirePendant,
    material: '18K Gold, Ceylon Sapphire',
  },
  {
    id: 4,
    name: 'Éclat Bracelet',
    category: 'Bracelets',
    price: '€35,800',
    image: productBracelet,
    material: 'Platinum, Diamonds',
  },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <AnnouncementBanner />
        <Navbar />
        
        <main className="relative">
          {/* Top garland decoration */}
          <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
            <GarlandDesign position="top" />
          </div>
          
          {/* Corner garlands */}
          <CornerGarland corner="top-left" size={150} />
          <CornerGarland corner="top-right" size={150} />
          
          <HeroSection heroImage={heroImage} />
          
          {/* Decorative divider */}
          <FloralDivider />
          
          <FeaturedCollections collections={collections} />
          
          {/* Decorative divider */}
          <FloralDivider />
          
          <ProductShowcase products={products} />
          
          {/* Decorative divider */}
          <FloralDivider />
          
          <Testimonials />
          
          {/* Decorative divider */}
          <FloralDivider />
          
          <HeritageSection heritageImage={heritageCraftsman} />
          
          {/* Bottom corner garlands */}
          <CornerGarland corner="bottom-left" size={120} />
          <CornerGarland corner="bottom-right" size={120} />
        </main>
        
        <Footer />
        <FloatingAssistant />
      </div>
    </>
  );
};

export default Index;
