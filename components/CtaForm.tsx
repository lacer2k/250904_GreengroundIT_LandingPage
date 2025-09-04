import React, { useState, forwardRef } from 'react';
import { submitLead } from '../services/api';
import { LeadPayload } from '../types';

const LoadingSpinner: React.FC = () => (
  <svg className="animate-spin h-5 w-5 text-charcoal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const CtaForm = forwardRef<HTMLDivElement>((props, ref) => {
    const [formData, setFormData] = useState<LeadPayload>({
        name: '',
        surname: '',
        email: '',
        phone_number: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
         if (error) setError(null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.surname || !formData.email) {
            setError('First name, last name, and email are required.');
            return;
        }
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await submitLead(formData);
            setSuccess(true);
            setFormData({ name: '', surname: '', email: '', phone_number: '' });
        } catch (err: unknown) {
            if (err instanceof Error && err.message.toLowerCase().includes('duplicate')) {
                 setError('This email is already subscribed.');
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-emerald py-20 sm:py-28" ref={ref}>
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">Always stay one step ahead</h2>
                    <p className="mt-4 text-lg text-charcoal/80">Subscribe to receive the most useful updates (no spam, promised).</p>
                </div>

                <div className="mt-12 max-w-xl mx-auto">
                    {success ? (
                        <div className="bg-forest-green/80 border border-forest-green text-off-white px-4 py-3 rounded-lg text-center" role="alert">
                            <strong className="font-bold">Welcome to Greenground! </strong>
                            <span className="block sm:inline">Check your inbox.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" name="name" placeholder="First Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-off-white/80 border border-transparent text-charcoal placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-charcoal focus:outline-none transition" />
                                <input type="text" name="surname" placeholder="Last Name" value={formData.surname} onChange={handleChange} className="w-full px-4 py-3 bg-off-white/80 border border-transparent text-charcoal placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-charcoal focus:outline-none transition" />
                            </div>
                            <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-off-white/80 border border-transparent text-charcoal placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-charcoal focus:outline-none transition" />
                            <input type="tel" name="phone_number" placeholder="Phone (optional)" value={formData.phone_number} onChange={handleChange} className="w-full px-4 py-3 bg-off-white/80 border border-transparent text-charcoal placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-charcoal focus:outline-none transition" />
                            
                            {error && <p className="text-red-800 text-sm text-center font-semibold">{error}</p>}

                            <button type="submit" disabled={loading} className="w-full flex items-center justify-center px-8 py-4 bg-charcoal text-off-white rounded-full font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-charcoal transition-all duration-300 disabled:bg-gray-600">
                                {loading ? <LoadingSpinner /> : 'Submit and Subscribe'}
                            </button>
                            <p className="text-xs text-center text-charcoal/70 pt-2">By confirming, you agree to our Privacy Policy. You can unsubscribe at any time.</p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
});

CtaForm.displayName = 'CtaForm';

export default CtaForm;