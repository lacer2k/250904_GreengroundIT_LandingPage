import React from 'react';

const CheckIcon = () => (
    <svg className="w-8 h-8 text-soft-gold mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const PenIcon = () => (
    <svg className="w-8 h-8 text-soft-gold mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>
);

const LayersIcon = () => (
    <svg className="w-8 h-8 text-soft-gold mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9h16M4 12h16M4 15h16" /></svg>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <CheckIcon />,
      title: 'Curated, not chaotic',
      description: 'A thoughtful selection of what truly matters.',
    },
    {
      icon: <PenIcon />,
      title: 'Authoritative voice',
      description: 'Analysis, context, and style: no hype, just substance.',
    },
    {
      icon: <LayersIcon />,
      title: 'Fluid formats',
      description: 'Text, audio, and video: follow your preferred way.',
    },
  ];

  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-off-white">Why Greenground</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center hover:border-soft-gold transition-colors duration-300">
              {feature.icon}
              <h3 className="text-xl font-semibold text-off-white mb-2">{feature.title}</h3>
              <p className="text-base text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;