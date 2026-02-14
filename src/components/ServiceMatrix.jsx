import React, { useState } from 'react';
import { services } from '../lib/service-data';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const ServiceMatrix = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Banking', 'Govt Services', 'Education', 'Utility', 'Insurance'];

    const filteredServices = filter === 'All'
        ? services
        : services.filter(s => s.category === filter);

    return (
        <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">One Stop Solution</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4 lg:mb-6">Our Services</h2>
                    <p className="text-gray-600 text-base sm:text-lg">Access a wide range of government and digital services under one roof.</p>

                    <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mt-8 lg:mt-10">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 lg:px-6 lg:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${filter === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                                    : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                >
                    {filteredServices.map(service => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceMatrix;
