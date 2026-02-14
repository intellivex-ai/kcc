import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Eye, Trash2, Download } from 'lucide-react';
import { getStudents, deleteStudent, exportToCSV } from '../../lib/admin-data';
import toast, { Toaster } from 'react-hot-toast';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [courseFilter, setCourseFilter] = useState('all');
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        loadStudents();
    }, []);

    useEffect(() => {
        filterStudents();
    }, [searchTerm, courseFilter, students]);

    const loadStudents = async () => {
        try {
            const data = await getStudents();
            setStudents(data);
        } catch (error) {
            console.error('Failed to load students:', error);
            toast.error('Failed to load students');
        }
    };

    const filterStudents = () => {
        let filtered = students;

        if (courseFilter !== 'all') {
            filtered = filtered.filter(std => std.course === courseFilter);
        }

        if (searchTerm) {
            filtered = filtered.filter(std =>
                std.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                std.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                std.phone.includes(searchTerm)
            );
        }

        setFilteredStudents(filtered);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            try {
                await deleteStudent(id);
                await loadStudents();
                toast.success('Student deleted!');
            } catch (error) {
                console.error('Failed to delete student:', error);
                toast.error('Failed to delete student');
            }
        }
    };

    const handleExport = () => {
        exportToCSV(filteredStudents, 'students');
        toast.success('Exported to CSV!');
    };

    // Get unique courses
    const courses = [...new Set(students.map(s => s.course))];

    return (
        <div className="space-y-6">
            <Toaster position="top-right" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-gray-900">Students</h1>
                    <p className="text-gray-600 mt-1">{filteredStudents.length} total students</p>
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

                    {/* Course Filter */}
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <select
                            value={courseFilter}
                            onChange={(e) => setCourseFilter(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                        >
                            <option value="all">All Courses</option>
                            {courses.map(course => (
                                <option key={course} value={course}>{course}</option>
                            ))}
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
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Course</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Enrolled</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredStudents.map((student) => (
                                <motion.tr
                                    key={student.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <p className="font-semibold text-gray-900">{student.name}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-600">{student.email}</p>
                                        <p className="text-sm text-gray-500">{student.phone}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                                            {student.course}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${student.status === 'active'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-600">
                                            {new Date(student.enrolledAt).toLocaleDateString()}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setSelectedStudent(student)}
                                                className="p-2 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors"
                                                title="View Details"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(student.id)}
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

                {filteredStudents.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No students found</p>
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedStudent && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedStudent(null)}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <h2 className="text-2xl font-black text-gray-900 mb-6">Student Details</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Name</label>
                                <p className="text-lg text-gray-900 mt-1">{selectedStudent.name}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Email</label>
                                <p className="text-lg text-gray-900 mt-1">{selectedStudent.email}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Phone</label>
                                <p className="text-lg text-gray-900 mt-1">{selectedStudent.phone}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Course</label>
                                <p className="text-lg text-gray-900 mt-1">{selectedStudent.course}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Date of Birth</label>
                                <p className="text-lg text-gray-900 mt-1">{selectedStudent.dob}</p>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600">Status</label>
                                <p className="text-lg text-gray-900 mt-1">{selectedStudent.status}</p>
                            </div>
                            <div className="col-span-2">
                                <label className="text-sm font-semibold text-gray-600">Address</label>
                                <p className="text-gray-700 mt-1">{selectedStudent.address}</p>
                            </div>
                            <div className="col-span-2">
                                <label className="text-sm font-semibold text-gray-600">Enrolled On</label>
                                <p className="text-lg text-gray-900 mt-1">
                                    {new Date(selectedStudent.enrolledAt).toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setSelectedStudent(null)}
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

export default Students;
