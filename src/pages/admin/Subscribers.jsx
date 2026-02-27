import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Trash2, Download } from 'lucide-react';
import { getSubscribers, deleteSubscriber, exportToCSV } from '../../lib/admin-data';
import toast, { Toaster } from 'react-hot-toast';

const Subscribers = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [filteredSubscribers, setFilteredSubscribers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadSubscribers();
    }, []);

    useEffect(() => {
        filterSubscribers();
    }, [searchTerm, subscribers]);

    const loadSubscribers = async () => {
        try {
            const data = await getSubscribers();
            setSubscribers(data);
        } catch (error) {
            console.error('Failed to load subscribers:', error);
            toast.error('Failed to load subscribers');
        }
    };

    const filterSubscribers = () => {
        let filtered = subscribers;
        if (searchTerm) {
            filtered = filtered.filter(sub =>
                sub.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredSubscribers(filtered);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this subscriber?')) {
            try {
                await deleteSubscriber(id);
                await loadSubscribers();
                toast.success('Subscriber deleted!');
            } catch (error) {
                console.error('Failed to delete subscriber:', error);
                toast.error('Failed to delete subscriber');
            }
        }
    };

    const handleExport = () => {
        exportToCSV(filteredSubscribers, 'subscribers');
        toast.success('Exported to CSV!');
    };

    return (
        <div className="space-y-6">
            <Toaster position="top-right" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-gray-900">Subscribers</h1>
                    <p className="text-gray-600 mt-1">{filteredSubscribers.length} total subscribers</p>
                </div>
                <button
                    onClick={handleExport}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                >
                    <Download size={20} />
                    Export CSV
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Email</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Subscribed At</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredSubscribers.map((subscriber) => (
                                <motion.tr
                                    key={subscriber.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4 font-semibold text-gray-900">{subscriber.email}</td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {new Date(subscriber.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(subscriber.id)}
                                            className="p-2 hover:bg-red-100 rounded-lg text-red-600 transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredSubscribers.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No subscribers found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Subscribers;
