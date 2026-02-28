import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Eye, Trash2, CheckCircle, Download } from 'lucide-react';
import { getInquiries, updateInquiry, deleteInquiry, exportToCSV } from '../../lib/admin-data';
import toast, { Toaster } from 'react-hot-toast';

const Inquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedInquiry, setSelectedInquiry] = useState(null);

    const loadInquiries = async () => {
        try {
            const data = await getInquiries();
            setInquiries(data);
        } catch (error) {
            console.error('Failed to load inquiries:', error);
            toast.error('Failed to load inquiries');
        }
    };

    useEffect(() => {
        loadInquiries();
    }, []);

    // ⚡ Bolt Performance Optimization:
    // Using useMemo instead of useState + useEffect for derived state.
    // This prevents an unnecessary double-render cycle when filters or search terms change.
    // React calculates this synchronously during render, avoiding cascading updates.
    const filteredInquiries = useMemo(() => {
        let filtered = inquiries;

        if (statusFilter !== 'all') {
            filtered = filtered.filter(inq => inq.status === statusFilter);
        }

        if (searchTerm) {
            filtered = filtered.filter(inq =>
                inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                inq.phone.includes(searchTerm)
            );
        }

        return filtered;
    }, [inquiries, statusFilter, searchTerm]);

    const handleStatusChange = async (id, newStatus) => {
        try {
            await updateInquiry(id, { status: newStatus });
            await loadInquiries();
            toast.success('Status updated!');
        } catch (error) {
            console.error('Failed to update status:', error);
            toast.error('Failed to update status');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this inquiry?')) {
            try {
                await deleteInquiry(id);
                await loadInquiries();
                toast.success('Inquiry deleted!');
            } catch (error) {
                console.error('Failed to delete inquiry:', error);
                toast.error('Failed to delete inquiry');
            }
        }
    };

    const handleExport = () => {
        exportToCSV(filteredInquiries, 'inquiries');
        toast.success('Exported to CSV!');
    };

    return (
        <div className="space-y-6">
            <Toaster position="top-right" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-gray-900">Inquiries</h1>
                    <p className="text-gray-600 mt-1">{filteredInquiries.length} total inquiries</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name, email, or phone..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                        >
                            <option value="all">All Status</option>
                            <option value="new">New</option>
                            <option value="in-progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Name</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Contact</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Subject</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredInquiries.map((inquiry) => (
                                <motion.tr
                                    key={inquiry.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <p className="font-semibold text-gray-900">{inquiry.name}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-600">{inquiry.email}</p>
                                        <p className="text-sm text-gray-500">{inquiry.phone}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-900">{inquiry.subject}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <select
                                            value={inquiry.status}
                                            onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                                            className={`px-3 py-1 rounded-full text-xs font-semibold border-0 ${inquiry.status === 'new'
                                                ? 'bg-orange-100 text-orange-700'
                                                : inquiry.status === 'in-progress'
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-green-100 text-green-700'
                                                }`}
                                        >
                                            <option value="new">New</option>
                                            <option value="in-progress">In Progress</option>
                                            <option value="resolved">Resolved</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-600">
                                            {new Date(inquiry.createdAt).toLocaleDateString()}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setSelectedInquiry(inquiry)}
                                                className="p-2 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors"
                                                title="View Details"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(inquiry.id)}
                                                className="p-2 hover:bg-red-100 rounded-lg text-red-600 transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredInquiries.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No inquiries found</p>
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedInquiry && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedInquiry(null)}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <h2 className="text-2xl font-black text-gray-900 mb-6">Inquiry Details</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Name</label>
                                <p className="text-lg text-gray-900 mt-1">{selectedInquiry.name}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Email</label>
                                <p className="text-lg text-gray-900 mt-1">{selectedInquiry.email}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Phone</label>
                                <p className="text-lg text-gray-900 mt-1">{selectedInquiry.phone}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Subject</label>
                                <p className="text-lg text-gray-900 mt-1">{selectedInquiry.subject}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Message</label>
                                <p className="text-gray-700 mt-1 leading-relaxed">{selectedInquiry.message}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Date</label>
                                <p className="text-lg text-gray-900 mt-1">
                                    {new Date(selectedInquiry.createdAt).toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setSelectedInquiry(null)}
                            className="mt-6 w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition-colors"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Inquiries;
