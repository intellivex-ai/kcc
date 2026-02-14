import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Briefcase, MapPin, Mail, Linkedin, GraduationCap } from 'lucide-react';
import { alumniData } from '../data/alumni';

const AlumniNetwork = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCourse, setFilterCourse] = useState('all');
    const [filterBatch, setFilterBatch] = useState('all');

    const courses = [...new Set(alumniData.map(a => a.course))];
    const batches = [...new Set(alumniData.map(a => a.batch))].sort().reverse();

    const filteredAlumni = alumniData.filter(alumni => {
        const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumni.currentRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumni.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCourse = filterCourse === 'all' || alumni.course === filterCourse;
        const matchesBatch = filterBatch === 'all' || alumni.batch === filterBatch;
        return matchesSearch && matchesCourse && matchesBatch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary to-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Alumni Network</h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Connect with our successful alumni community
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name, role, company..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                        </div>

                        {/* Course Filter */}
                        <select
                            value={filterCourse}
                            onChange={(e) => setFilterCourse(e.target.value)}
                            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                            <option value="all">All Courses</option>
                            {courses.map(course => (
                                <option key={course} value={course}>{course}</option>
                            ))}
                        </select>

                        {/* Batch Filter */}
                        <select
                            value={filterBatch}
                            onChange={(e) => setFilterBatch(e.target.value)}
                            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                            <option value="all">All Batches</option>
                            {batches.map(batch => (
                                <option key={batch} value={batch}>{batch}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            {/* Alumni Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <p className="text-gray-600 mb-6">{filteredAlumni.length} alumni found</p>

                {filteredAlumni.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredAlumni.map((alumni, index) => (
                            <motion.div
                                key={alumni.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                            >
                                {/* Profile Image */}
                                <div className="bg-gradient-to-br from-primary to-blue-600 p-6 text-center">
                                    <img
                                        src={alumni.image}
                                        alt={alumni.name}
                                        className="w-24 h-24 rounded-full mx-auto bg-white p-2 mb-3"
                                    />
                                    <h3 className="text-xl font-black text-white mb-1">{alumni.name}</h3>
                                    <p className="text-blue-100 text-sm">Batch of {alumni.batch}</p>
                                </div>

                                {/* Details */}
                                <div className="p-4">
                                    {/* Course */}
                                    <div className="flex items-center gap-2 mb-3 text-sm">
                                        <GraduationCap size={16} className="text-primary shrink-0" />
                                        <span className="text-gray-700 font-semibold">{alumni.course}</span>
                                    </div>

                                    {/* Current Role */}
                                    <div className="flex items-start gap-2 mb-2 text-sm">
                                        <Briefcase size={16} className="text-gray-400 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-gray-900">{alumni.currentRole}</p>
                                            <p className="text-gray-600">{alumni.company}</p>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                                        <MapPin size={16} className="shrink-0" />
                                        <span>{alumni.location}</span>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-sm text-gray-600 italic mb-4 line-clamp-2">
                                        "{alumni.bio}"
                                    </p>

                                    {/* Contact Icons */}
                                    <div className="flex gap-2 pt-3 border-t">
                                        <a
                                            href={`mailto:${alumni.email}`}
                                            className="flex-1 p-2 bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-colors flex items-center justify-center"
                                        >
                                            <Mail size={18} />
                                        </a>
                                        <a
                                            href={alumni.linkedIn}
                                            className="flex-1 p-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition-colors flex items-center justify-center"
                                        >
                                            <Linkedin size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">No alumni found matching your criteria.</p>
                    </div>
                )}
            </section>

            {/* Join Network CTA */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-center text-white">
                    <h2 className="text-3xl font-black mb-4">Are You a KCC Alumni?</h2>
                    <p className="text-blue-100 mb-6">
                        Join our alumni network and stay connected with fellow graduates
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                        Register as Alumni
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AlumniNetwork;
