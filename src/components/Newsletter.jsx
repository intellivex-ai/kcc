import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { addSubscriber } from '../lib/admin-data';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            await addSubscriber(email);
            setIsSubmitting(false);
            setIsSuccess(true);
            setEmail('');
            // Reset success message after 3 seconds
            setTimeout(() => setIsSuccess(false), 3000);
        } catch (err) {
            console.error('Failed to subscribe:', err);
            setError('Failed to subscribe. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 lg:py-20 bg-gradient-to-br from-primary via-blue-600 to-purple-600 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Mail size={32} className="text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                        Stay Updated!
                    </h2>
                    <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                        Get the latest course updates, exam notifications, government job alerts, and special offers directly in your inbox.
                    </p>

                    {/* Form */}
                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 inline-flex items-center gap-3"
                        >
                            <CheckCircle size={24} className="text-green-300" />
                            <p className="text-white font-semibold">Successfully subscribed! Check your email.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                            {error && (
                                <div className="mb-4 text-red-200 text-sm font-semibold">
                                    {error}
                                </div>
                            )}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-white/50 transition-all outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin inline-block w-5 h-5 border-2 border-primary border-t-transparent rounded-full"></span>
                                            Subscribing...
                                        </>
                                    ) : (
                                        <>
                                            Subscribe
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                            <p className="text-blue-100 text-xs mt-4">
                                No spam, unsubscribe anytime • Join our growing community
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
