import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-forest-green">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-off-white leading-tight">
          Greenground — news, stories, and ideas that foster growth
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          Every day, the best of tech, culture, and business. Elegant, critical, zero noise.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 bg-emerald text-charcoal rounded-full text-base font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
                Subscribe Now
            </button>
            <a 
                href="https://open.spotify.com/show/16XhFdfftv9kdsPLmSb50U"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-gray-600 text-off-white rounded-full text-base font-semibold hover:bg-gray-800 transition-all duration-300"
            >
                Listen to the Latest Episode
            </a>
        </div>
         <p className="mt-8 text-sm text-gray-400">
            Over 10,000 monthly readers. No spam, just value.
        </p>
      </div>
    </section>
  );
};

export default Hero;