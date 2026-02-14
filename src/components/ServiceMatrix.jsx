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
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-gray-600">Access a wide range of government and digital services under one roof.</p>

                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
