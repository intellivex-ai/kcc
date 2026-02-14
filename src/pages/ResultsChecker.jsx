import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, CheckCircle, XCircle, Award } from 'lucide-react';

const ResultsChecker = () => {
    const [rollNumber, setRollNumber] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    // Mock results database
    const mockResults = {
        'CCC2024001': {
            name: 'Rahul Sharma',
            course: 'CCC',
            rollNumber: 'CCC2024001',
            examDate: '2024-01-15',
            status: 'PASS',
            grade: 'A',
            totalMarks: 100,
            obtainedMarks: 87,
            percentage: 87,
            subjects: [
                { name: 'Computer Basics', marks: 22, total: 25 },
                { name: 'MS Office', marks: 24, total: 25 },
                { name: 'Internet & Email', marks: 21, total: 25 },
                { name: 'Practical', marks: 20, total: 25 }
            ]
        },
        'OLEVEL2024002': {
            name: 'Priya Singh',
            course: 'O-Level',
            rollNumber: 'OLEVEL2024002',
            examDate: '2024-01-20',
            status: 'PASS',
            grade: 'B+',
            totalMarks: 400,
            obtainedMarks: 315,
            percentage: 78.75,
            subjects: [
                { name: 'M1 - IT Tools', marks: 82, total: 100 },
                { name: 'M2 - Programming', marks: 75, total: 100 },
                { name: 'M3 - Web Design', marks: 80, total: 100 },
                { name: 'M4 - Database', marks: 78, total: 100 }
            ]
        }
    };

    const handleCheck = () => {
        setLoading(true);
        setTimeout(() => {
            const foundResult = mockResults[rollNumber.toUpperCase()];
            setResult(foundResult || 'NOT_FOUND');
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Check Your Results</h1>
                    <p className="text-gray-600 text-lg">Enter your roll number to view exam results</p>
                </div>

                {/* Search Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={rollNumber}
                            onChange={(e) => setRollNumber(e.target.value)}
                            placeholder="Enter Roll Number (e.g., CCC2024001)"
                            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-lg"
                        />
                        <button
                            onClick={handleCheck}
                            disabled={!rollNumber || loading}
                            className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {loading ? 'Searching...' : 'Check Result'}
                            <Search size={20} />
                        </button>
                    </div>

                    <div className="mt-4 text-sm text-gray-600">
                        <p><strong>Demo Roll Numbers:</strong> CCC2024001, OLEVEL2024002</p>
                    </div>
                </div>

                {/* Results */}
                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {result === 'NOT_FOUND' ? (
                            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
                                <XCircle size={48} className="text-red-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-red-900 mb-2">Result Not Found</h3>
                                <p className="text-red-700">Please check your roll number and try again.</p>
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                {/* Header with Status */}
                                <div className={`p-6 text-white ${result.status === 'PASS' ? 'bg-gradient-to-r from-green-600 to-green-500' : 'bg-gradient-to-r from-red-600 to-red-500'
                                    }`}>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-3xl font-black mb-2">{result.name}</h2>
                                            <p className="text-green-100">Roll Number: {result.rollNumber}</p>
                                            <p className="text-green-100">Course: {result.course}</p>
                                        </div>
                                        <div className="text-center">
                                            {result.status === 'PASS' ? (
                                                <CheckCircle size={64} className="mx-auto mb-2" />
                                            ) : (
                                                <XCircle size={64} className="mx-auto mb-2" />
                                            )}
                                            <p className="text-2xl font-black">{result.status}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="p-6">
                                    {/* Overall Performance */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                        <div className="bg-blue-50 rounded-xl p-4 text-center">
                                            <p className="text-sm text-gray-600 mb-1">Total Marks</p>
                                            <p className="text-2xl font-black text-primary">{result.totalMarks}</p>
                                        </div>
                                        <div className="bg-green-50 rounded-xl p-4 text-center">
                                            <p className="text-sm text-gray-600 mb-1">Obtained</p>
                                            <p className="text-2xl font-black text-green-600">{result.obtainedMarks}</p>
                                        </div>
                                        <div className="bg-purple-50 rounded-xl p-4 text-center">
                                            <p className="text-sm text-gray-600 mb-1">Percentage</p>
                                            <p className="text-2xl font-black text-purple-600">{result.percentage}%</p>
                                        </div>
                                        <div className="bg-yellow-50 rounded-xl p-4 text-center">
                                            <p className="text-sm text-gray-600 mb-1">Grade</p>
                                            <p className="text-2xl font-black text-yellow-600">{result.grade}</p>
                                        </div>
                                    </div>

                                    {/* Subject-wise Marks */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <Award size={20} className="text-primary" />
                                            Subject-wise Performance
                                        </h3>
                                        <div className="space-y-3">
                                            {result.subjects.map((subject, index) => (
                                                <div key={index} className="bg-gray-50 rounded-xl p-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="font-semibold text-gray-900">{subject.name}</span>
                                                        <span className="font-bold text-primary">{subject.marks}/{subject.total}</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div
                                                            className="bg-primary h-2 rounded-full"
                                                            style={{ width: `${(subject.marks / subject.total) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Download Button */}
                                    <div className="mt-6 text-center">
                                        <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 flex items-center gap-2 mx-auto">
                                            <Download size={20} />
                                            Download Marksheet
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ResultsChecker;
