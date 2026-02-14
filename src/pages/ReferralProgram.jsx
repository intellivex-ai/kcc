import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Users, IndianRupee, Share2, CheckCircle, Copy, Award } from 'lucide-react';

const ReferralProgram = () => {
    const [referralCode, setReferralCode] = useState('KCC-STUDENT-2024');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const benefits = [
        {
            icon: <IndianRupee size={32} />,
            title: '₹500 Cash Reward',
            description: 'Get ₹500 for each successful referral who enrolls'
        },
        {
            icon: <Gift size={32} />,
            title: 'Free Study Material',
            description: 'Your friend gets free study material worth ₹200'
        },
        {
            icon: <Award size={32} />,
            title: 'Bonus Rewards',
            description: 'Refer 5+ students and get special bonuses'
        }
    ];

    const howItWorks = [
        {
            step: 1,
            title: 'Share Your Code',
            description: 'Share your unique referral code with friends and family'
        },
        {
            step: 2,
            title: 'Friend Enrolls',
            description: 'They use your code during admission and get benefits'
        },
        {
            step: 3,
            title: 'You Both Win',
            description: 'Both get rewards! No limit on referrals'
        }
    ];

    const leaderboard = [
        { rank: 1, name: 'Rahul Sharma', referrals: 12, earnings: 6000 },
        { rank: 2, name: 'Priya Singh', referrals: 9, earnings: 4500 },
        { rank: 3, name: 'Amit Kumar', referrals: 7, earnings: 3500 },
        { rank: 4, name: 'Sneha Verma', referrals: 5, earnings: 2500 },
        { rank: 5, name: 'Vikash Yadav', referrals: 4, earnings: 2000 }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary to-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                            Refer & Earn Program
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Earn unlimited cash rewards by referring your friends to KCC!
                        </p>
                        <div className="flex justify-center gap-4">
                            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold">
                                🎁 ₹500 per referral
                            </span>
                            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold">
                                📚 Free benefits for friends
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Your Referral Code */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-xl p-8"
                >
                    <h2 className="text-2xl font-black text-gray-900 mb-4 text-center">Your Unique Referral Code</h2>
                    <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                        <input
                            type="text"
                            value={referralCode}
                            readOnly
                            className="flex-1 bg-transparent text-2xl font-black text-primary text-center focus:outline-none"
                        />
                        <button
                            onClick={handleCopy}
                            className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 flex items-center gap-2"
                        >
                            {copied ? (
                                <>
                                    <CheckCircle size={20} />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy size={20} />
                                    Copy Code
                                </>
                            )}
                        </button>
                    </div>
                    <div className="flex justify-center gap-3 mt-6">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2">
                            <Share2 size={16} />
                            WhatsApp
                        </button>
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                            <Share2 size={16} />
                            Facebook
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2">
                            <Share2 size={16} />
                            Email
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Benefits */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
                    Program Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-1 bg-primary/20"></div>

                        {howItWorks.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative"
                            >
                                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-black relative z-10">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
                                <p className="text-gray-600 text-center">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leaderboard */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">
                    Top Referrers This Month
                </h2>
                <p className="text-gray-600 text-center mb-8">See who's earning the most!</p>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-primary to-blue-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold">Rank</th>
                                    <th className="px-6 py-4 text-left font-bold">Name</th>
                                    <th className="px-6 py-4 text-center font-bold">Referrals</th>
                                    <th className="px-6 py-4 text-right font-bold">Earnings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboard.map((person, index) => (
                                    <tr
                                        key={person.rank}
                                        className={`border-b ${index < 3 ? 'bg-yellow-50' : ''} hover:bg-gray-50 transition-colors`}
                                    >
                                        <td className="px-6 py-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black ${person.rank === 1 ? 'bg-yellow-400 text-white' :
                                                    person.rank === 2 ? 'bg-gray-300 text-gray-800' :
                                                        person.rank === 3 ? 'bg-orange-400 text-white' :
                                                            'bg-gray-100 text-gray-600'
                                                }`}>
                                                {person.rank === 1 ? '🥇' :
                                                    person.rank === 2 ? '🥈' :
                                                        person.rank === 3 ? '🥉' :
                                                            person.rank}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900">{person.name}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-bold">
                                                {person.referrals}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right font-bold text-green-600">
                                            ₹{person.earnings.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
                    <h2 className="text-3xl font-black mb-4">Start Earning Today!</h2>
                    <p className="text-green-100 mb-6">
                        Share your code now and start earning money while helping your friends
                    </p>
                    <button
                        onClick={handleCopy}
                        className="px-8 py-3 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                    >
                        <Share2 size={20} />
                        Share Your Code Now
                    </button>
                </div>
            </section>

            {/* Terms */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="bg-gray-100 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Terms & Conditions</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Reward paid after friend successfully enrolls and pays full course fee</li>
                        <li>• Friend must use your referral code during admission</li>
                        <li>• Rewards paid via bank transfer or cash within 7 days</li>
                        <li>• No limit on number of referrals</li>
                        <li>• Both referrer and referee must be genuine students</li>
                        <li>• KCC reserves the right to modify or terminate program anytime</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ReferralProgram;
