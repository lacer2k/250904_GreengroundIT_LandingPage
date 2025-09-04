import React from 'react';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header className="bg-charcoal/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-off-white font-serif">
          Greenground
        </div>
        <button 
          onClick={onCtaClick}
          className="px-5 py-2 bg-emerald text-charcoal rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all duration-300"
        >
          Subscribe Now
        </button>
      </div>
    </header>
  );
};

export default Header;