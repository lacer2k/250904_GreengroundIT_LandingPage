import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Subscribe.',
      description: 'Just leave your email (no frills).',
    },
    {
      step: 2,
      title: 'Receive.',
      description: 'A daily digest, plus special deep dives.',
    },
    {
      step: 3,
      title: 'Apply.',
      description: 'Useful ideas for work, investments, and creativity.',
    },
  ];

  return (
    <section className="bg-off-white text-charcoal py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Start in 30 seconds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center z-10 p-4">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald text-off-white font-bold rounded-full text-xl mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-gray-500">Note: You can unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default HowItWorks;