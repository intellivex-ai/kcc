import React from 'react';
import { User, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                    Trusted by the community of Rajatalab for over a decade.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Director Message */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="flex-1">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-secondary rounded-2xl transform translate-x-3 translate-y-3"></div>
                            {/* Placeholder for Director Image - using a generic avatar if no image */}
                            <div className="relative bg-gray-200 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden flex items-center justify-center border-4 border-white shadow-xl">
                                <User size={100} className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Director's Message</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Mr. Naveen Kumar</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            "Our mission at Kusum Computer Centre is to bridge the digital divide in rural areas. We believe that access to technology and government services is a fundamental right. Through our CSC and education initiatives, we are committed to empowering every citizen of Rajatalab."
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                                <span className="block font-bold text-primary">10+ Years</span>
                                <span className="text-xs text-gray-500">Service Excellence</span>
                            </div>
                            <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                                <span className="block font-bold text-primary">5000+</span>
                                <span className="text-xs text-gray-500">Happy Customers</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Affiliations */}
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
                    >
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">CSC Center</h3>
                        <p className="text-gray-600 text-sm">
                            Authorized Common Service Centre (CSC) for delivering government-to-citizen (G2C) services.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                            <Award size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">AGIS Affiliated</h3>
                        <p className="text-gray-600 text-sm">
                            Affiliated with Aryvart Global Institute of Science (AGIS) for high-quality computer education.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
                    >
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-600">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png" alt="Digital India" className="w-10 grayscale opacity-80" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Digital India</h3>
                        <p className="text-gray-600 text-sm">
                            Proud partner in the Digital India initiative, enabling digital literacy and access.
                        </p>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default About;
