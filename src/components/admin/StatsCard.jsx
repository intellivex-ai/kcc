import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, change, trend, color = 'blue' }) => {
    const colors = {
        blue: 'from-blue-500 to-blue-600',
        green: 'from-green-500 to-green-600',
        purple: 'from-purple-500 to-purple-600',
        orange: 'from-orange-500 to-orange-600'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-gray-600 text-sm font-medium">{title}</p>
                    <h3 className="text-3xl font-black text-gray-900 mt-2">{value}</h3>

                    {change !== undefined && (
                        <div className={`flex items-center gap-1 mt-2 text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                            <span className="font-semibold">{change}%</span>
                            <span className="text-gray-500">vs last month</span>
                        </div>
                    )}
                </div>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center`}>
                    <Icon size={28} className="text-white" />
                </div>
            </div>
        </motion.div>
    );
};

export default StatsCard;
