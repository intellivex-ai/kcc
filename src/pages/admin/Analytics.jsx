import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Mail, Users, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { getAnalytics } from '../../lib/admin-data';
import StatsCard from '../../components/admin/StatsCard';

const Analytics = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const analytics = getAnalytics();
        setStats(analytics);
    }, []);

    if (!stats) {
        return <div>Loading...</div>;
    }

    // Chart Data
    const statusData = [
        { name: 'New', value: stats.inquiriesByStatus.new, color: '#F59E0B' },
        { name: 'In Progress', value: stats.inquiriesByStatus.inProgress, color: '#3B82F6' },
        { name: 'Resolved', value: stats.inquiriesByStatus.resolved, color: '#10B981' }
    ];

    const courseData = Object.entries(stats.studentsByCourse).map(([course, count]) => ({
        course,
        students: count
    }));

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-black text-gray-900">Analytics</h1>
                <p className="text-gray-600 mt-2">Insights and metrics for your center</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Total Inquiries"
                    value={stats.totalInquiries}
                    icon={Mail}
                    color="blue"
                />
                <StatsCard
                    title="New Inquiries"
                    value={stats.newInquiries}
                    icon={TrendingUp}
                    color="orange"
                />
                <StatsCard
                    title="Total Students"
                    value={stats.totalStudents}
                    icon={Users}
                    color="green"
                />
                <StatsCard
                    title="Active Students"
                    value={stats.activeStudents}
                    icon={Activity}
                    color="purple"
                />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Inquiries by Status - Pie Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                >
                    <h2 className="text-xl font-black text-gray-900 mb-6">Inquiries Distribution</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={statusData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {statusData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4 flex justify-center gap-4">
                        {statusData.map((item) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                <span className="text-sm text-gray-600">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Students by Course - Bar Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                >
                    <h2 className="text-xl font-black text-gray-900 mb-6">Students by Course</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={courseData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="course" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="students" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white"
                >
                    <h3 className="text-lg font-bold mb-2">Inquiry Conversion</h3>
                    <p className="text-3xl font-black">
                        {stats.totalInquiries > 0
                            ? Math.round((stats.inquiriesByStatus.resolved / stats.totalInquiries) * 100)
                            : 0}%
                    </p>
                    <p className="text-blue-100 text-sm mt-2">Inquiries converted to students</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white"
                >
                    <h3 className="text-lg font-bold mb-2">Recent Activity</h3>
                    <p className="text-3xl font-black">{stats.recentInquiries}</p>
                    <p className="text-green-100 text-sm mt-2">Inquiries in last 30 days</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white"
                >
                    <h3 className="text-lg font-bold mb-2">Active Rate</h3>
                    <p className="text-3xl font-black">
                        {stats.totalStudents > 0
                            ? Math.round((stats.activeStudents / stats.totalStudents) * 100)
                            : 0}%
                    </p>
                    <p className="text-purple-100 text-sm mt-2">Students currently active</p>
                </motion.div>
            </div>

            {/* Insights */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8"
            >
                <h2 className="text-2xl font-black text-gray-900 mb-4">📊 Key Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-xl">
                        <p className="font-semibold text-gray-900">Most Popular Course</p>
                        <p className="text-2xl font-black text-blue-600 mt-1">
                            {Object.entries(stats.studentsByCourse).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'}
                        </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-xl">
                        <p className="font-semibold text-gray-900">Pending Inquiries</p>
                        <p className="text-2xl font-black text-orange-600 mt-1">
                            {stats.newInquiries + stats.inquiriesByStatus.inProgress}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Analytics;
