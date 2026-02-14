import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, BookOpen, Video, Code, Award } from 'lucide-react';

const CourseRoadmap = () => {
    const [selectedCourse, setSelectedCourse] = useState('ccc');

    const roadmaps = {
        ccc: {
            name: 'CCC (Course on Computer Concepts)',
            duration: '3 Months',
            weeks: [
                {
                    week: 1,
                    title: 'Computer Basics & Windows',
                    topics: ['Introduction to Computers', 'Hardware & Software', 'Windows OS', 'File Management'],
                    activities: ['Lab Practice', 'Typing Practice'],
                    completed: true
                },
                {
                    week: 2,
                    title: 'MS Word',
                    topics: ['Document Creation', 'Formatting', 'Tables & Graphics', 'Mail Merge'],
                    activities: ['Create Resume', 'Make Certificate'],
                    completed: true
                },
                {
                    week: 3,
                    title: 'MS Excel',
                    topics: ['Spreadsheet Basics', 'Formulas & Functions', 'Charts & Graphs', 'Data Analysis'],
                    activities: ['Monthly Budget', 'Sales Report'],
                    completed: false
                },
                {
                    week: 4,
                    title: 'MS PowerPoint',
                    topics: ['Slide Design', 'Animations', 'Transitions', 'Presentation Skills'],
                    activities: ['Create Presentation', 'Final Project'],
                    completed: false
                },
                {
                    week: 5,
                    title: 'Internet & Email',
                    topics: ['Web Browsing', 'Search Engines', 'Email Setup', 'Online Services'],
                    activities: ['Gmail Setup', 'Online Forms'],
                    completed: false
                },
                {
                    week: 6,
                    title: 'Digital Payment & Security',
                    topics: ['Online Banking', 'UPI', 'Cybersecurity', 'Digital India'],
                    activities: ['UPI Transaction', 'Secure Browsing'],
                    completed: false
                },
                {
                    week: 7,
                    title: 'CCC Mock Tests',
                    topics: ['Sample Papers', 'Time Management', 'Revision', 'Doubt Clearing'],
                    activities: ['Practice Tests', 'Performance Analysis'],
                    completed: false
                },
                {
                    week: 8,
                    title: 'Final Preparation',
                    topics: ['Full Syllabus Revision', 'Mock Exam', 'Tips & Tricks'],
                    activities: ['Final Mock Test', 'Exam Registration'],
                    completed: false
                }
            ]
        },
        olevel: {
            name: 'O-Level',
            duration: '12 Months',
            weeks: [
                {
                    week: 1,
                    title: 'M1: IT Tools - Basics',
                    topics: ['Computer Fundamentals', 'Windows', 'MS Office Basics'],
                    activities: ['Setup Environment', 'Practice Sessions'],
                    completed: false
                },
                {
                    week: 2,
                    title: 'M1: Advanced Office',
                    topics: ['Word Advanced', 'Excel Advanced', 'PowerPoint Pro'],
                    activities: ['Real-world Projects'],
                    completed: false
                },
                {
                    week: 3,
                    title: 'M2: Programming - C Basics',
                    topics: ['C Introduction', 'Variables & Data Types', 'Operators', 'Control Structures'],
                    activities: ['Write Simple Programs'],
                    completed: false
                },
                {
                    week: 4,
                    title: 'M2: C++ & OOP',
                    topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'File Handling'],
                    activities: ['Build Calculator', 'Student Management'],
                    completed: false
                },
                {
                    week: 5,
                    title: 'M3: Web Design - HTML/CSS',
                    topics: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox & Grid'],
                    activities: ['Build Personal Website'],
                    completed: false
                },
                {
                    week: 6,
                    title: 'M3: JavaScript & Forms',
                    topics: ['JavaScript Basics', 'DOM Manipulation', 'Form Validation'],
                    activities: ['Interactive Website'],
                    completed: false
                },
                {
                    week: 7,
                    title: 'M4: Database - SQL',
                    topics: ['Database Concepts', 'SQL Queries', 'Joins', 'Normalization'],
                    activities: ['Create Database', 'Advanced Queries'],
                    completed: false
                },
                {
                    week: 8,
                    title: 'Final Project & Exam Prep',
                    topics: ['Comprehensive Project', 'All Modules Revision', 'Mock Tests'],
                    activities: ['Submit Project', 'Final Exam'],
                    completed: false
                }
            ]
        },
        dca: {
            name: 'DCA (Diploma in Computer Applications)',
            duration: '6 Months',
            weeks: [
                {
                    week: 1,
                    title: 'Computer Fundamentals',
                    topics: ['Basics', 'OS', 'File System'],
                    activities: ['Lab Setup'],
                    completed: false
                },
                {
                    week: 2,
                    title: 'MS Office Suite',
                    topics: ['Word', 'Excel', 'PowerPoint', 'Access'],
                    activities: ['Office Projects'],
                    completed: false
                },
                {
                    week: 3,
                    title: 'Tally Prime',
                    topics: ['Accounting Basics', 'Vouchers', 'Reports'],
                    activities: ['Create Company'],
                    completed: false
                },
                {
                    week: 4,
                    title: 'Internet & DTP',
                    topics: ['Web', 'Email', 'Photoshop', 'CorelDRAW'],
                    activities: ['Design Projects'],
                    completed: false
                },
                {
                    week: 5,
                    title: 'Database Management',
                    topics: ['MS Access', 'SQL Basics', 'Reports'],
                    activities: ['Database Project'],
                    completed: false
                },
                {
                    week: 6,
                    title: 'Final Project',
                    topics: ['Comprehensive Project', 'Viva Preparation'],
                    activities: ['Submit Project', 'Exam'],
                    completed: false
                }
            ]
        }
    };

    const currentRoadmap = roadmaps[selectedCourse];

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">📚 Your Learning Path</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
                        Course Roadmap
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Week-by-week breakdown of what you'll learn in each course
                    </p>
                </div>

                {/* Course Selector */}
                <div className="flex justify-center gap-3 mb-12 flex-wrap">
                    {Object.keys(roadmaps).map(key => (
                        <button
                            key={key}
                            onClick={() => setSelectedCourse(key)}
                            className={`px-6 py-3 rounded-xl transition-all font-semibold ${selectedCourse === key
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {roadmaps[key].name.split('(')[0].trim()}
                        </button>
                    ))}
                </div>

                {/* Roadmap Info */}
                <div className="bg-white rounded-2xl p-6 mb-8 shadow-md">
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{currentRoadmap.name}</h3>
                    <p className="text-gray-600">Duration: <span className="font-semibold text-primary">{currentRoadmap.duration}</span></p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>

                    {/* Weeks */}
                    <div className="space-y-8">
                        {currentRoadmap.weeks.map((week, index) => (
                            <motion.div
                                key={week.week}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md hidden md:block z-10"></div>

                                {/* Content Card */}
                                <div className="md:ml-20 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <span className="text-sm font-bold text-primary">Week {week.week}</span>
                                            <h4 className="text-xl font-black text-gray-900 mt-1">{week.title}</h4>
                                        </div>
                                        {week.completed ? (
                                            <CheckCircle size={24} className="text-green-600 shrink-0" />
                                        ) : (
                                            <Circle size={24} className="text-gray-300 shrink-0" />
                                        )}
                                    </div>

                                    {/* Topics */}
                                    <div className="mb-4">
                                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                            <BookOpen size={16} className="text-primary" />
                                            Topics Covered
                                        </h5>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {week.topics.map((topic, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="text-primary mt-0.5">•</span>
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Activities */}
                                    <div>
                                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                            <Code size={16} className="text-secondary" />
                                            Hands-on Activities
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {week.activities.map((activity, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-blue-50 text-primary rounded-full text-xs font-semibold"
                                                >
                                                    {activity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                    >
                        Start Your Journey
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CourseRoadmap;
