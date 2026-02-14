import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, IndianRupee, Calendar, Clock, ExternalLink, Filter } from 'lucide-react';
import { jobListings, jobCategories } from '../data/jobs';

const JobBoard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [filterType, setFilterType] = useState('all');

    const filteredJobs = jobListings.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || job.category === filterCategory;
        const matchesType = filterType === 'all' || job.type === filterType;
        return matchesSearch && matchesCategory && matchesType;
    });

    const getTypeColor = (type) => {
        switch (type) {
            case 'Government': return 'bg-green-100 text-green-700 border-green-300';
            case 'Private': return 'bg-blue-100 text-blue-700 border-blue-300';
            case 'Self-Employment': return 'bg-purple-100 text-purple-700 border-purple-300';
            default: return 'bg-gray-100 text-gray-700 border-gray-300';
        }
    };

    const isDeadlineNear = (deadline) => {
        const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
        return daysLeft <= 7;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary to-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Job Board</h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Find the latest job opportunities for computer course graduates
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
                                placeholder="Search jobs, companies, location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                            {jobCategories.map(cat => (
                                <option key={cat.value} value={cat.value}>{cat.label}</option>
                            ))}
                        </select>

                        {/* Type Filter */}
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                            <option value="all">All Types</option>
                            <option value="Government">Government</option>
                            <option value="Private">Private</option>
                            <option value="Self-Employment">Self Employment</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <p className="text-gray-600 mb-6">{filteredJobs.length} jobs found</p>

                {filteredJobs.length > 0 ? (
                    <div className="space-y-6">
                        {filteredJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                    {/* Left: Main Info */}
                                    <div className="lg:col-span-3">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-black text-gray-900 mb-2">{job.title}</h3>
                                                <p className="text-gray-700 font-semibold">{job.company}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getTypeColor(job.type)}`}>
                                                {job.type}
                                            </span>
                                        </div>

                                        {/* Quick Info */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                                            <span className="flex items-center gap-1 text-gray-600">
                                                <MapPin size={16} className="text-primary" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1 text-gray-600">
                                                <Briefcase size={16} className="text-primary" />
                                                {job.experience}
                                            </span>
                                            <span className="flex items-center gap-1 font-semibold text-green-600">
                                                <IndianRupee size={16} />
                                                {job.salary}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-700 mb-4">{job.description}</p>

                                        {/* Requirements */}
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Requirements:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {job.requirements.map((req, i) => (
                                                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs">
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Actions */}
                                    <div className="lg:col-span-1 flex flex-col justify-between">
                                        {/* Deadline */}
                                        <div className="mb-4">
                                            <div className={`p-3 rounded-xl text-center ${isDeadlineNear(job.deadline) ? 'bg-red-50 border border-red-200' : 'bg-gray-50'
                                                }`}>
                                                <p className="text-xs text-gray-600 mb-1">Apply Before</p>
                                                <p className="font-bold text-gray-900 flex items-center justify-center gap-1">
                                                    <Calendar size={16} />
                                                    {new Date(job.deadline).toLocaleDateString('en-IN')}
                                                </p>
                                                {isDeadlineNear(job.deadline) && (
                                                    <p className="text-xs text-red-600 font-semibold mt-1">⚠️ Closing Soon!</p>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                                                <Clock size={12} />
                                                Posted: {new Date(job.postedDate).toLocaleDateString('en-IN')}
                                            </p>
                                        </div>

                                        {/* Apply Button */}
                                        <a
                                            href="/contact"
                                            className="w-full px-4 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                            Apply Now
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                    </div>
                )}
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-center text-white">
                    <h2 className="text-3xl font-black mb-4">Want to Post a Job?</h2>
                    <p className="text-blue-100 mb-6">
                        Companies can post job openings to hire skilled KCC graduates
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                        Contact Us to Post Jobs
                    </a>
                </div>
            </section>
        </div>
    );
};

export default JobBoard;
