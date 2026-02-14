import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, DollarSign, CheckCircle, Clock, FileText } from 'lucide-react';
import { scholarships, scholarshipTypes } from '../data/scholarships';

const Scholarships = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary to-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Scholarships & Financial Aid</h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Making quality computer education accessible to all. Explore scholarship opportunities
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Scholarships Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {scholarships.map((scholarship, index) => (
                        <motion.div
                            key={scholarship.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-primary to-blue-600 p-6 text-white">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-2xl font-black">{scholarship.title}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${scholarship.status === 'Open' ? 'bg-green-500' : 'bg-gray-500'
                                        }`}>
                                        {scholarship.status}
                                    </span>
                                </div>
                                <p className="text-blue-100 mb-3">{scholarship.provider}</p>
                                <div className="flex items-center gap-2">
                                    <DollarSign size={24} />
                                    <span className="text-2xl font-bold">{scholarship.amount}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Eligibility */}
                                <div className="mb-6">
                                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <CheckCircle size={18} className="text-green-600" />
                                        Eligibility Criteria
                                    </h4>
                                    <ul className="space-y-2">
                                        {scholarship.eligibility.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="text-primary mt-0.5">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Benefits */}
                                <div className="mb-6">
                                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <Award size={18} className="text-yellow-600" />
                                        Benefits
                                    </h4>
                                    <ul className="space-y-2">
                                        {scholarship.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="text-primary mt-0.5">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Deadline */}
                                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
                                    <div className="flex items-center gap-2 text-orange-900">
                                        <Clock size={18} />
                                        <span className="font-bold">Application Deadline:</span>
                                        <span>{scholarship.deadline}</span>
                                    </div>
                                </div>

                                {/* Documents */}
                                <div className="mb-6">
                                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <FileText size={18} className="text-blue-600" />
                                        Required Documents
                                    </h4>
                                    <ul className="space-y-1">
                                        {scholarship.documentsRequired.map((doc, i) => (
                                            <li key={i} className="text-sm text-gray-700">• {doc}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* How to Apply */}
                                <div className="bg-blue-50 rounded-xl p-4 mb-4">
                                    <h4 className="font-bold text-gray-900 mb-2">How to Apply</h4>
                                    <p className="text-sm text-gray-700">{scholarship.applicationProcess}</p>
                                </div>

                                {/* Contact */}
                                <a
                                    href={`mailto:${scholarship.contactEmail}`}
                                    className="block text-center px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Scholarships;
