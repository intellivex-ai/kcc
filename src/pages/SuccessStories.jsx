import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Award, Calendar } from 'lucide-react';
import { successStories } from '../data/success-stories';

const SuccessStories = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary to-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Success Stories</h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Real stories of KCC alumni who transformed their careers through computer education
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stories Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {successStories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                        >
                            {/* Profile Header */}
                            <div className="bg-gradient-to-br from-primary to-blue-600 p-6 text-white">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-20 h-20 rounded-full bg-white p-1"
                                    />
                                    <div>
                                        <h3 className="text-2xl font-black">{story.name}</h3>
                                        <p className="text-blue-100">{story.course} ({story.year})</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-blue-100 text-sm">Before</p>
                                        <p className="font-semibold">{story.beforeRole}</p>
                                    </div>
                                    <div>
                                        <p className="text-blue-100 text-sm">After</p>
                                        <p className="font-semibold">{story.afterRole}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Achievement */}
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Award size={20} className="text-green-600" />
                                        <span className="font-bold text-green-900">Key Achievement</span>
                                    </div>
                                    <p className="text-green-800">{story.achievement}</p>
                                </div>

                                {/* Salary */}
                                <div className="flex items-center gap-2 mb-4 text-primary">
                                    <TrendingUp size={20} />
                                    <span className="text-lg font-bold">{story.salary}</span>
                                </div>

                                {/* Testimonial */}
                                <blockquote className="text-gray-700 italic mb-6">
                                    "{story.testimonial}"
                                </blockquote>

                                {/* Timeline */}
                                <div className="border-t pt-4">
                                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <Calendar size={18} />
                                        Journey Timeline
                                    </h4>
                                    <div className="space-y-2">
                                        {story.timeline.map((step, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0"></div>
                                                <div>
                                                    <p className="font-semibold text-sm text-gray-900">{step.month}</p>
                                                    <p className="text-gray-600 text-sm">{step.event}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-center text-white">
                    <h2 className="text-3xl font-black mb-4">Ready to Write Your Success Story?</h2>
                    <p className="text-blue-100 mb-6">
                        Join 2000+ students who transformed their careers with KCC
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                        Enroll Now
                    </a>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;
