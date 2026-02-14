import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ChevronRight } from 'lucide-react';

const CourseCalendar = () => {
    const upcomingBatches = [
        {
            id: 1,
            course: 'CCC Course',
            startDate: 'March 1, 2024',
            timing: '10:00 AM - 12:00 PM',
            duration: '3 Months',
            seats: '15 seats available',
            color: 'blue'
        },
        {
            id: 2,
            course: 'O-Level',
            startDate: 'March 5, 2024',
            timing: '2:00 PM - 4:00 PM',
            duration: '12 Months',
            seats: '10 seats available',
            color: 'green'
        },
        {
            id: 3,
            course: 'Basic Computer',
            startDate: 'March 10, 2024',
            timing: '9:00 AM - 11:00 AM',
            duration: '2 Months',
            seats: '20 seats available',
            color: 'purple'
        },
        {
            id: 4,
            course: 'DCA',
            startDate: 'March 15, 2024',
            timing: '11:00 AM - 1:00 PM',
            duration: '6 Months',
            seats: '12 seats available',
            color: 'orange'
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: 'bg-blue-50 text-blue-700 border-blue-500',
            green: 'bg-green-50 text-green-700 border-green-500',
            purple: 'bg-purple-50 text-purple-700 border-purple-500',
            orange: 'bg-orange-50 text-orange-700 border-orange-500'
        };
        return colors[color] || colors.blue;
    };

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Upcoming Batches</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Course Calendar</h2>
                    <p className="text-gray-600 text-base sm:text-lg">Register now for our upcoming batches</p>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {upcomingBatches.map((batch, index) => (
                        <motion.div
                            key={batch.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary"
                        >
                            {/* Course Name with Badge */}
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-black text-gray-900">{batch.course}</h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getColorClasses(batch.color)}`}>
                                    {batch.seats}
                                </span>
                            </div>

                            {/* Details */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                                        <Calendar size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Start Date</p>
                                        <p className="font-bold text-gray-900">{batch.startDate}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600">
                                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                                        <Clock size={18} className="text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Timing</p>
                                        <p className="font-bold text-gray-900">{batch.timing}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600">
                                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                                        <Users size={18} className="text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Duration</p>
                                        <p className="font-bold text-gray-900">{batch.duration}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Enroll Button */}
                            <a
                                href="/education"
                                className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                            >
                                Enroll Now
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-md">
                    <p className="text-gray-700 font-semibold mb-2">Need a different schedule?</p>
                    <p className="text-gray-600 mb-4">We offer flexible timing including weekend and evening batches.</p>
                    <a
                        href="https://wa.me/919795633704"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
                    >
                        Contact on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CourseCalendar;
