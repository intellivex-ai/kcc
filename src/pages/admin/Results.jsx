import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Trash2, Download } from 'lucide-react';
import { getResults, addResult, deleteResult, exportToCSV } from '../../lib/admin-data';
import toast, { Toaster } from 'react-hot-toast';

const Results = () => {
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        rollNumber: '',
        studentName: '',
        course: '',
        examDate: '',
        status: 'PASS',
        grade: '',
        totalMarks: '',
        obtainedMarks: '',
        percentage: '',
        subjects: []
    });

    useEffect(() => {
        loadResults();
    }, []);

    useEffect(() => {
        filterResults();
    }, [searchTerm, results]);

    const loadResults = async () => {
        try {
            const data = await getResults();
            setResults(data);
        } catch (error) {
            console.error('Failed to load results:', error);
            toast.error('Failed to load results');
        }
    };

    const filterResults = () => {
        let filtered = results;
        if (searchTerm) {
            filtered = filtered.filter(res =>
                res.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                res.roll_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                res.course.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredResults(filtered);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this result?')) {
            try {
                await deleteResult(id);
                await loadResults();
                toast.success('Result deleted!');
            } catch (error) {
                console.error('Failed to delete result:', error);
                toast.error('Failed to delete result');
            }
        }
    };

    const handleExport = () => {
        exportToCSV(filteredResults, 'results');
        toast.success('Exported to CSV!');
    };

    const handleAddResult = async (e) => {
        e.preventDefault();
        try {
            // Basic validation
            if (!formData.rollNumber || !formData.studentName || !formData.course) {
                toast.error('Please fill all required fields');
                return;
            }

            // Calculate percentage if not provided
            let percentage = formData.percentage;
            if (!percentage && formData.totalMarks && formData.obtainedMarks) {
                percentage = ((Number(formData.obtainedMarks) / Number(formData.totalMarks)) * 100).toFixed(2);
            }

            await addResult({
                ...formData,
                percentage
            });

            setIsAdding(false);
            setFormData({
                rollNumber: '',
                studentName: '',
                course: '',
                examDate: '',
                status: 'PASS',
                grade: '',
                totalMarks: '',
                obtainedMarks: '',
                percentage: '',
                subjects: []
            });
            await loadResults();
            toast.success('Result added successfully!');
        } catch (error) {
            console.error('Failed to add result:', error);
            toast.error('Failed to add result. Roll number might be duplicate.');
        }
    };

    return (
        <div className="space-y-6">
            <Toaster position="top-right" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-gray-900">Exam Results</h1>
                    <p className="text-gray-600 mt-1">{filteredResults.length} total results</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        <Download size={20} />
                        Export CSV
                    </button>
                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                    >
                        <Plus size={20} />
                        Add Result
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by student name, roll number, or course..."
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
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Roll Number</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Student Name</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Course</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Percentage</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredResults.map((result) => (
                                <motion.tr
                                    key={result.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4 font-mono text-sm font-semibold">{result.roll_number}</td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">{result.student_name}</td>
                                    <td className="px-6 py-4 text-gray-600">{result.course}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            result.status === 'PASS'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}>
                                            {result.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-900">{result.percentage}%</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(result.id)}
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
                {filteredResults.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No results found</p>
                    </div>
                )}
            </div>

            {/* Add Result Modal */}
            {isAdding && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsAdding(false)}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <h2 className="text-2xl font-black text-gray-900 mb-6">Add New Result</h2>

                        <form onSubmit={handleAddResult} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Roll Number *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.rollNumber}
                                        onChange={e => setFormData({...formData, rollNumber: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Student Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.studentName}
                                        onChange={e => setFormData({...formData, studentName: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Course *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.course}
                                        onChange={e => setFormData({...formData, course: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Exam Date *</label>
                                    <input
                                        type="date"
                                        required
                                        value={formData.examDate}
                                        onChange={e => setFormData({...formData, examDate: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Status *</label>
                                    <select
                                        value={formData.status}
                                        onChange={e => setFormData({...formData, status: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="PASS">PASS</option>
                                        <option value="FAIL">FAIL</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Grade</label>
                                    <input
                                        type="text"
                                        value={formData.grade}
                                        onChange={e => setFormData({...formData, grade: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Total Marks *</label>
                                    <input
                                        type="number"
                                        required
                                        value={formData.totalMarks}
                                        onChange={e => setFormData({...formData, totalMarks: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Obtained Marks *</label>
                                    <input
                                        type="number"
                                        required
                                        value={formData.obtainedMarks}
                                        onChange={e => setFormData({...formData, obtainedMarks: e.target.value})}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <button
                                    type="button"
                                    onClick={() => setIsAdding(false)}
                                    className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                                >
                                    Save Result
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Results;
