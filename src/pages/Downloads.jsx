import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Search, FileText, Filter } from 'lucide-react';
import { downloads, downloadCategories } from '../data/downloads';

const Downloads = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDownloads = downloads.filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
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
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Download Center</h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Access course syllabuses, sample papers, study materials, and important documents
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    {/* Search */}
                    <div className="relative mb-4">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search downloads..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {downloadCategories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setSelectedCategory(cat.slug)}
                                className={`px-4 py-2 rounded-xl whitespace-nowrap flex items-center gap-2 transition-all ${selectedCategory === cat.slug
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Downloads Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {filteredDownloads.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredDownloads.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all group"
                            >
                                <div className="flex gap-4">
                                    {/* Icon */}
                                    <div className="w-16 h-16 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <FileText size={32} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <span className="px-2 py-1 bg-gray-100 rounded-md">{item.fileType}</span>
                                            <span>{item.fileSize}</span>
                                            <span>{item.downloads.toLocaleString()} downloads</span>
                                        </div>

                                        <a
                                            href={item.downloadUrl}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                                        >
                                            <Download size={16} />
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">No downloads found matching your criteria.</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Downloads;
