import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Priya Sharma",
            course: "CCC Course",
            rating: 5,
            text: "Best computer center in Rajatalab! Got my CCC certificate and now working in government office. Naveen Sir's teaching is excellent.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
            year: "2023"
        },
        {
            id: 2,
            name: "Rahul Verma",
            course: "O-Level",
            rating: 5,
            text: "Completed O-Level from here. Very affordable fees and quality education. Highly recommended for NIELIT courses.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
            year: "2024"
        },
        {
            id: 3,
            name: "Anjali Singh",
            course: "Basic Computer",
            rating: 5,
            text: "Great atmosphere for learning. Staff is very helpful and supportive. Got job in bank after completing course here.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
            year: "2023"
        },
        {
            id: 4,
            name: "Amit Kumar",
            course: "DCA",
            rating: 5,
            text: "Excellent coaching center with modern computer lab. Naveen Sir personally guides every student. Thank you KCC!",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
            year: "2024"
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Student Reviews</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">What Our Students Say</h2>
                    <p className="text-gray-600 text-base sm:text-lg">Real experiences from our successful students</p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote size={48} className="text-primary" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full bg-gray-100"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.course} • {testimonial.year}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">Join 2000+ satisfied students!</p>
                    <a
                        href="/education"
                        className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                        Start Your Journey
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
