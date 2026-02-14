import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blog-posts';
import { BannerAd, SidebarAd } from '../components/AdSense';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary to-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Blog & News</h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Stay updated with latest exam notifications, job opportunities, computer tips, and KCC news
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search & Filter */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex gap-2 overflow-x-auto">
                            {blogCategories.map((category) => (
                                <button
                                    key={category.slug}
                                    onClick={() => setSelectedCategory(category.slug)}
                                    className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${selectedCategory === category.slug
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.name} ({category.count})
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Banner Ad */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <BannerAd adSlot="1234567890" />
            </section>

            {/* Blog Posts Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {new Date(post.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.slice(0, 3).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                                            >
                                                <Tag size={12} />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More */}
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                                    >
                                        Read Article
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                    </div>
                )}
            </section>

            {/* Bottom Banner Ad */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <BannerAd adSlot="0987654321" />
            </section>
        </div>
    );
};

export default Blog;
