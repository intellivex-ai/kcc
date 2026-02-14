import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

const ExamCountdown = () => {
    const upcomingExams = [
        {
            id: 1,
            name: 'CCC April 2024',
            date: '2024-04-15',
            registrationDeadline: '2024-03-15',
            type: 'NIELIT CCC Exam'
        },
        {
            id: 2,
            name: 'O-Level July 2024',
            date: '2024-07-20',
            registrationDeadline: '2024-05-20',
            type: 'NIELIT O-Level Exam'
        },
        {
            id: 3,
            name: 'CCC July 2024',
            date: '2024-07-15',
            registrationDeadline: '2024-06-15',
            type: 'NIELIT CCC Exam'
        }
    ];

    const calculateTimeLeft = (targetDate) => {
        const difference = new Date(targetDate) - new Date();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return null;
    };

    const [countdowns, setCountdowns] = useState({});

    useEffect(() => {
        const timer = setInterval(() => {
            const newCountdowns = {};
            upcomingExams.forEach(exam => {
                newCountdowns[exam.id] = {
                    exam: calculateTimeLeft(exam.date),
                    registration: calculateTimeLeft(exam.registrationDeadline)
                };
            });
            setCountdowns(newCountdowns);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeBox = ({ value, label }) => (
        <div className="bg-white rounded-xl p-4 shadow-md min-w-[80px]">
            <div className="text-3xl md:text-4xl font-black text-primary text-center">
                {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-500 text-center mt-1 uppercase">{label}</div>
        </div>
    );

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Time is Ticking</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
                        Upcoming Exam Countdown
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Don't miss the registration deadlines! Track exam dates in real-time
                    </p>
                </div>

                {/* Countdown Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingExams.map((exam, index) => {
                        const countdown = countdowns[exam.id];
                        const examTime = countdown?.exam;
                        const regTime = countdown?.registration;
                        const regClosed = !regTime;

                        return (
                            <motion.div
                                key={exam.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-6 text-white shadow-xl"
                            >
                                {/* Exam Info */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-black mb-2">{exam.name}</h3>
                                    <p className="text-blue-100 text-sm">{exam.type}</p>
                                    <div className="flex items-center gap-2 mt-3 text-blue-100">
                                        <Calendar size={16} />
                                        <span className="text-sm">
                                            {new Date(exam.date).toLocaleDateString('en-IN', {
                                                weekday: 'long',
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>

                                {/* Registration Countdown */}
                                {regTime && !regClosed && (
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <AlertCircle size={16} />
                                            <span className="text-sm font-semibold">Registration Closes In:</span>
                                        </div>
                                        <div className="flex gap-2 justify-center">
                                            <TimeBox value={regTime.days} label="Days" />
                                            <TimeBox value={regTime.hours} label="Hrs" />
                                            <TimeBox value={regTime.minutes} label="Min" />
                                        </div>
                                    </div>
                                )}

                                {regClosed && (
                                    <div className="bg-red-500/20 border border-red-300 rounded-xl p-3 mb-4">
                                        <p className="text-sm font-semibold text-center">Registration Closed</p>
                                    </div>
                                )}

                                {/* Exam Countdown */}
                                {examTime && (
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Clock size={16} />
                                            <span className="text-sm font-semibold">Exam Starts In:</span>
                                        </div>
                                        <div className="flex gap-2 justify-center">
                                            <TimeBox value={examTime.days} label="Days" />
                                            <TimeBox value={examTime.hours} label="Hrs" />
                                            <TimeBox value={examTime.minutes} label="Min" />
                                        </div>
                                    </div>
                                )}

                                {!examTime && (
                                    <div className="bg-green-500/20 border border-green-300 rounded-xl p-3">
                                        <p className="text-sm font-semibold text-center">Exam Completed</p>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                    >
                        Register for Exam Preparation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExamCountdown;
