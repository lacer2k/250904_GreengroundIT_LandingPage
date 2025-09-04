import React from 'react';

const LogoPlaceholder: React.FC<{ name: string }> = ({ name }) => (
    <div className="text-gray-400 text-2xl font-semibold filter grayscale opacity-60 hover:opacity-100 hover:filter-none transition-all duration-300">
        {name}
    </div>
);

const SocialProof: React.FC = () => {
    return (
        <section className="bg-charcoal py-20 sm:py-28">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
                    Recommended by those who create, invest, and build
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16">
                    <LogoPlaceholder name="Podcast" />
                    <LogoPlaceholder name="YouTube" />
                    <LogoPlaceholder name="LinkedIn" />
                    <LogoPlaceholder name="Mastodon" />
                </div>
                <div className="max-w-3xl mx-auto">
                    <blockquote className="font-serif text-2xl md:text-3xl italic text-off-white relative px-8">
                        <span className="absolute -top-4 left-0 text-8xl text-soft-gold opacity-20">“</span>
                        Greenground cuts through the noise and leaves the substance.
                        <span className="absolute -bottom-8 right-0 text-8xl text-soft-gold opacity-20">”</span>
                    </blockquote>
                    <p className="mt-6 text-gray-300">— Founder, SaaS EU</p>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;