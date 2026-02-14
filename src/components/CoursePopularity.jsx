import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Star, Award } from 'lucide-react';

const CoursePopularity = () => {
    const popularCourses = [
        {
            name: 'CCC',
            fullName: 'Course on Computer Concepts',
            enrollments: 1247,
            growth: '+23%',
            rating: 4.8,
            trending: true,
            icon: '💻',
            badge: 'Most Popular'
        },
        {
            name: 'Tally with GST',
            fullName: 'Tally Prime with GST',
            enrollments: 892,
            growth: '+45%',
            rating: 4.9,
            trending: true,
            icon: '📊',
            badge: 'Fastest Growing'
        },
        {
            name: 'O-Level',
            fullName: 'NIELIT O-Level Certification',
            enrollments: 634,
            growth: '+18%',
            rating: 4.7,
            trending: false,
            icon: '🎓',
            badge: 'Best Value'
        },
        {
            name: 'DCA',
            fullName: 'Diploma in Computer Applications',
            enrollments: 521,
            growth: '+12%',
            rating: 4.6,
            trending: false,
            icon: '📁',
            badge: 'Recommended'
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                        📈 Trending Now
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
                        Most Popular Courses
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Join thousands of students who chose these top-rated courses
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularCourses.map((course, index) => (
                        <motion.div
                            key={course.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary hover:shadow-xl transition-all group relative overflow-hidden"
                        >
                            {/* Badge */}
                            <div className="absolute top-0 right-0 bg-secondary text-gray-900 px-3 py-1 rounded-bl-xl text-xs font-bold">
                                {course.badge}
                            </div>

                            {/* Icon */}
                            <div className="text-5xl mb-4">{course.icon}</div>

                            {/* Course Name */}
                            <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                {course.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">{course.fullName}</p>

                            {/* Stats */}
                            <div className="space-y-3">
                                {/* Enrollments */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600 flex items-center gap-2">
                                        <Users size={16} className="text-primary" />
                                        Enrolled
                                    </span>
                                    <span className="font-bold text-gray-900">{course.enrollments.toLocaleString()}</span>
                                </div>

                                {/* Growth */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600 flex items-center gap-2">
                                        <TrendingUp size={16} className="text-green-600" />
                                        Growth
                                    </span>
                                    <span className="font-bold text-green-600">{course.growth}</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600 flex items-center gap-2">
                                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                                        Rating
                                    </span>
                                    <span className="font-bold text-gray-900">{course.rating}/5.0</span>
                                </div>
                            </div>

                            {/* Trending Indicator */}
                            {course.trending && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <span className="text-xs font-bold text-primary flex items-center gap-1">
                                        🔥 Trending This Month
                                    </span>
                                </div>
                            )}

                            {/* CTA */}
                            <a
                                href="/contact"
                                className="mt-4 block w-full text-center px-4 py-2 bg-primary text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Enroll Now
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Live Counter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-8 text-white text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <Award size={24} />
                        <h3 className="text-2xl font-black">2000+ Students Enrolled This Year!</h3>
                    </div>
                    <p className="text-blue-100">Join the fastest-growing computer education center in Varanasi</p>
                </motion.div>
            </div>
        </section>
    );
};

export default CoursePopularity;
