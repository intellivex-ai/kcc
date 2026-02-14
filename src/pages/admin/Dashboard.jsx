import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Users, TrendingUp, BookOpen } from 'lucide-react';
import StatsCard from '../../components/admin/StatsCard';
import { getAnalytics } from '../../lib/admin-data';

const Dashboard = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const analytics = await getAnalytics();
                setStats(analytics);
            } catch (error) {
                console.error('Failed to load analytics:', error);
                // Set empty stats on error
                setStats({
                    totalInquiries: 0,
                    newInquiries: 0,
                    totalStudents: 0,
                    activeStudents: 0,
                    recentInquiries: 0,
                    inquiriesByStatus: { new: 0, inProgress: 0, resolved: 0 },
                    studentsByCourse: {}
                });
            }
        };
        fetchAnalytics();
    }, []);

    if (!stats) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-black text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Total Inquiries"
                    value={stats.totalInquiries}
                    icon={Mail}
                    change={12}
                    trend="up"
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
                    change={-5}
                    trend="down"
                    color="green"
                />
                <StatsCard
                    title="Active Students"
                    value={stats.activeStudents}
                    icon={BookOpen}
                    color="purple"
                />
            </div>

            {/* Charts/Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Inquiries by Status */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                >
                    <h2 className="text-xl font-black text-gray-900 mb-4">Inquiries by Status</h2>
                    <div className="space-y-4">
                        <StatusBar
                            label="New"
                            value={stats.inquiriesByStatus.new}
                            total={stats.totalInquiries}
                            color="bg-orange-500"
                        />
                        <StatusBar
                            label="In Progress"
                            value={stats.inquiriesByStatus.inProgress}
                            total={stats.totalInquiries}
                            color="bg-blue-500"
                        />
                        <StatusBar
                            label="Resolved"
                            value={stats.inquiriesByStatus.resolved}
                            total={stats.totalInquiries}
                            color="bg-green-500"
                        />
                    </div>
                </motion.div>

                {/* Students by Course */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                >
                    <h2 className="text-xl font-black text-gray-900 mb-4">Students by Course</h2>
                    <div className="space-y-4">
                        {Object.entries(stats.studentsByCourse).map(([course, count]) => (
                            <StatusBar
                                key={course}
                                label={course}
                                value={count}
                                total={stats.totalStudents}
                                color="bg-purple-500"
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl shadow-lg p-8 text-white"
            >
                <h2 className="text-2xl font-black mb-2">🎉 Dashboard Overview</h2>
                <p className="text-blue-100 mb-6">
                    You have {stats.recentInquiries} new inquiries in the last 30 days.
                    Keep up the great work managing your center!
                </p>
                <div className="flex gap-4">
                    <a
                        href="/admin/inquiries"
                        className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                    >
                        View Inquiries
                    </a>
                    <a
                        href="/admin/students"
                        className="bg-white/20 backdrop-blur text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors"
                    >
                        Manage Students
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

// Status Bar Component
const StatusBar = ({ label, value, total, color }) => {
    const percentage = total > 0 ? (value / total) * 100 : 0;

    return (
        <div>
            <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">{label}</span>
                <span className="font-bold text-gray-900">{value}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`h-full ${color}`}
                />
            </div>
        </div>
    );
};

export default Dashboard;
