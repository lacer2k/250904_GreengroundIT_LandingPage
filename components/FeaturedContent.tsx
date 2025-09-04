import React from 'react';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5 ml-1"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


const FeaturedContent: React.FC = () => {
  const content = [
    'The analysis: AI and real productivity beyond the buzz.',
    'Interview: A founder who scaled in the EU without hype.',
    'Culture: Cinema and TV that explain the present.',
  ];

  return (
    <section className="bg-off-white text-charcoal py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">What You'll Find This Week</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          {content.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center">
              <span className="text-emerald mr-4 text-xl font-bold">&#10003;</span>
              <p className="text-lg text-gray-800">{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-emerald font-semibold hover:underline group">
                See all content <ArrowRightIcon className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;