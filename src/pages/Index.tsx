import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import ProductShowcase from '@/components/ProductShowcase';
import HeritageSection from '@/components/HeritageSection';
import Footer from '@/components/Footer';

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
      
      <div className={`min-h-screen bg-deep-black transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        <main>
          <HeroSection heroImage={heroImage} />
          <FeaturedCollections collections={collections} />
          <ProductShowcase products={products} />
          <HeritageSection heritageImage={heritageCraftsman} />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
