import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { events, eventTypes } from '../data/events';

const EventsSection = () => {
    const [selectedType, setSelectedType] = useState('all');

    const filteredEvents = selectedType === 'all'
        ? events.slice(0, 4)
        : events.filter(e => e.type.toLowerCase() === selectedType).slice(0, 4);

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Upcoming</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
                        Events & Workshops
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Join our workshops, seminars, and free sessions to enhance your skills
                    </p>
                </div>

                {/* Type Filter */}
                <div className="flex justify-center gap-2 mb-8 flex-wrap">
                    {eventTypes.map((type) => (
                        <button
                            key={type.slug}
                            onClick={() => setSelectedType(type.slug)}
                            className={`px-4 py-2 rounded-xl transition-all ${selectedType === type.slug
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {type.name}
                        </button>
                    ))}
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {filteredEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg transition-all group"
                        >
                            <div className="flex flex-col sm:flex-row">
                                {/* Image */}
                                <div className="sm:w-1/3 h-48 sm:h-auto">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${event.type === 'Workshop' ? 'bg-blue-100 text-blue-700' :
                                            event.type === 'Seminar' ? 'bg-purple-100 text-purple-700' :
                                                event.type === 'Exam' ? 'bg-red-100 text-red-700' :
                                                    'bg-green-100 text-green-700'
                                        }`}>
                                        {event.type}
                                    </span>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {event.title}
                                    </h3>

                                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                                        <p className="flex items-center gap-2">
                                            <Calendar size={16} className="text-primary" />
                                            {new Date(event.date).toLocaleDateString('en-IN', {
                                                weekday: 'short',
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Clock size={16} className="text-primary" />
                                            {event.time}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <MapPin size={16} className="text-primary" />
                                            {event.venue}
                                        </p>
                                        {event.seats && (
                                            <p className="flex items-center gap-2">
                                                <Users size={16} className="text-primary" />
                                                <span className={event.seatsLeft < 10 ? 'text-red-600 font-semibold' : ''}>
                                                    {event.seatsLeft} seats left
                                                </span>
                                            </p>
                                        )}
                                    </div>

                                    {event.registrationOpen && (
                                        <button className="text-primary font-semibold hover:gap-2 flex items-center gap-1 transition-all">
                                            Register Now
                                            <ArrowRight size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <a
                        href="/blog"
                        className="inline-block px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                    >
                        View All Events
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
