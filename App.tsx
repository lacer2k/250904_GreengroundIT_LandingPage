import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import FeaturedContent from './components/FeaturedContent';
import CtaForm from './components/CtaForm';

const App: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  const handleScrollToCta = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-charcoal text-off-white min-h-screen">
      <Header onCtaClick={handleScrollToCta} />
      <main>
        <Hero onCtaClick={handleScrollToCta} />
        <Features />
        <HowItWorks />
        <SocialProof />
        <FeaturedContent />
        <CtaForm ref={ctaRef} />
      </main>
      <Footer />
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal border-t border-gray-700">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400 text-sm">
        <div className="flex flex-wrap justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-off-white transition-colors">About</a>
            <a href="#" className="hover:text-off-white transition-colors">Contact</a>
            <a href="#" className="hover:text-off-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-off-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-off-white transition-colors">Terms</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Greenground — crafted with care in Milan.</p>
      </div>
    </footer>
  );
}

export default App;