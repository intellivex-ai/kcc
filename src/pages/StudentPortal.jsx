import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Mail, Eye, EyeOff, BookOpen, Award, Calendar, FileText, Download, Bell, Settings, LogOut } from 'lucide-react';

const StudentPortal = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        // Demo login - accept any credentials
        setIsLoggedIn(true);
    };

    // Mock student data
    const studentData = {
        name: 'Rahul Sharma',
        rollNumber: 'KCC2024001',
        course: 'CCC + O-Level',
        batch: 'Morning Batch',
        email: 'rahul@example.com',
        phone: '+91 9876543210',
        photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
        progress: 65,
        attendance: 92,
        nextClass: 'MS Excel Advanced',
        nextClassTime: 'Tomorrow, 10:00 AM'
    };

    const courses = [
        { name: 'CCC', progress: 100, status: 'Completed', grade: 'A' },
        { name: 'O-Level M1', progress: 80, status: 'In Progress', grade: '-' },
        { name: 'O-Level M2', progress: 50, status: 'In Progress', grade: '-' },
        { name: 'O-Level M3', progress: 0, status: 'Not Started', grade: '-' }
    ];

    const recentActivities = [
        { type: 'assignment', title: 'Excel Assignment Submitted', time: '2 hours ago' },
        { type: 'exam', title: 'CCC Mock Test Completed', time: '1 day ago' },
        { type: 'certificate', title: 'CCC Certificate Downloaded', time: '3 days ago' },
        { type: 'attendance', title: 'Marked Present', time: '1 day ago' }
    ];

    const documents = [
        { name: 'CCC Certificate', size: '245 KB', type: 'PDF' },
        { name: 'Fee Receipt', size: '128 KB', type: 'PDF' },
        { name: 'Study Material - Excel', size: '1.2 MB', type: 'PDF' },
        { name: 'Admit Card', size: '156 KB', type: 'PDF' }
    ];

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center py-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full mx-4"
                >
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 text-center">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <User size={40} className="text-primary" />
                            </div>
                            <h2 className="text-3xl font-black mb-2">Student Portal</h2>
                            <p className="text-blue-100">Login to access your account</p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="p-8 space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email / Roll Number</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        value={credentials.email}
                                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="Enter your email or roll number"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={credentials.password}
                                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                        className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                                    <span className="text-gray-600">Remember me</span>
                                </label>
                                <a href="#" className="text-primary font-semibold hover:underline">Forgot Password?</a>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                            >
                                Login
                            </button>

                            <div className="bg-blue-50 rounded-xl p-4 text-center">
                                <p className="text-sm text-gray-700">
                                    <strong>Demo:</strong> Use any email/password to login
                                </p>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Bar */}
            <div className="bg-white border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-black text-gray-900">Student Portal</h1>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Settings size={20} />
                        </button>
                        <button
                            onClick={() => setIsLoggedIn(false)}
                            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 font-semibold"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Card */}
                <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white mb-8">
                    <div className="flex items-center gap-6">
                        <img src={studentData.photo} alt={studentData.name} className="w-24 h-24 rounded-full bg-white p-2" />
                        <div className="flex-1">
                            <h2 className="text-3xl font-black mb-2">{studentData.name}</h2>
                            <p className="text-blue-100 mb-1">Roll Number: {studentData.rollNumber}</p>
                            <p className="text-blue-100">{studentData.course} • {studentData.batch}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-5xl font-black mb-1">{studentData.attendance}%</div>
                            <p className="text-blue-100">Attendance</p>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center justify-between mb-2">
                            <BookOpen size={24} className="text-primary" />
                            <span className="text-2xl font-black text-gray-900">{studentData.progress}%</span>
                        </div>
                        <p className="text-gray-600 font-semibold">Course Progress</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center justify-between mb-2">
                            <Award size={24} className="text-yellow-600" />
                            <span className="text-2xl font-black text-gray-900">2</span>
                        </div>
                        <p className="text-gray-600 font-semibold">Certificates</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center justify-between mb-2">
                            <Calendar size={24} className="text-green-600" />
                            <span className="text-2xl font-black text-gray-900">32</span>
                        </div>
                        <p className="text-gray-600 font-semibold">Classes Attended</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="flex items-center justify-between mb-2">
                            <FileText size={24} className="text-purple-600" />
                            <span className="text-2xl font-black text-gray-900">8</span>
                        </div>
                        <p className="text-gray-600 font-semibold">Assignments</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* My Courses */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h3 className="text-xl font-black text-gray-900 mb-4">My Courses</h3>
                            <div className="space-y-4">
                                {courses.map((course, index) => (
                                    <div key={index} className="border border-gray-200 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-bold text-gray-900">{course.name}</h4>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${course.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                    course.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-gray-100 text-gray-700'
                                                }`}>
                                                {course.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1">
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-primary h-2 rounded-full"
                                                        style={{ width: `${course.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <span className="text-sm font-bold text-gray-700">{course.progress}%</span>
                                            {course.grade !== '-' && (
                                                <span className="font-bold text-yellow-600">Grade: {course.grade}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h3 className="text-xl font-black text-gray-900 mb-4">Recent Activity</h3>
                            <div className="space-y-3">
                                {recentActivities.map((activity, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-gray-900">{activity.title}</p>
                                            <p className="text-sm text-gray-500">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Next Class */}
                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
                            <h3 className="text-lg font-black mb-4">Next Class</h3>
                            <p className="text-2xl font-black mb-2">{studentData.nextClass}</p>
                            <p className="text-green-100">{studentData.nextClassTime}</p>
                            <button className="w-full mt-4 px-4 py-2 bg-white text-green-600 rounded-xl font-bold hover:bg-green-50">
                                View Schedule
                            </button>
                        </div>

                        {/* Documents */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h3 className="text-xl font-black text-gray-900 mb-4">My Documents</h3>
                            <div className="space-y-3">
                                {documents.map((doc, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                                        <div className="flex-1">
                                            <p className="font-semibold text-gray-900 text-sm">{doc.name}</p>
                                            <p className="text-xs text-gray-500">{doc.size} • {doc.type}</p>
                                        </div>
                                        <button className="p-2 hover:bg-primary/10 rounded-lg text-primary">
                                            <Download size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentPortal;
