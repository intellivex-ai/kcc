import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, IndianRupee, Calendar, Award } from 'lucide-react';

const CourseComparison = () => {
    const [selectedCourses, setSelectedCourses] = useState(['ccc', 'olevel', 'dca']);

    const courses = {
        ccc: {
            name: 'CCC (Course on Computer Concepts)',
            fee: 3500,
            duration: '3 Months',
            eligibility: '8th Pass',
            certification: 'NIELIT Govt. Certified',
            jobRoles: ['Data Entry', 'Office Assistant', 'Computer Operator'],
            syllabus: ['MS Office', 'Internet', 'Email', 'Basic IT'],
            examPattern: 'Online MCQ',
            avgSalary: '₹15,000 - ₹25,000',
            bestFor: 'Government job aspirants',
            features: {
                govtRecognized: true,
                onlineExam: true,
                placement: true,
                certificate: true,
                studyMaterial: true,
                labAccess: true,
                projectWork: false,
                internship: false
            }
        },
        olevel: {
            name: 'O-Level',
            fee: 12000,
            duration: '12 Months',
            eligibility: '10th Pass',
            certification: 'NIELIT (Equivalent to BTECH 1st Year)',
            jobRoles: ['Jr. Programmer', 'Web Developer', 'IT Support'],
            syllabus: ['IT Tools', 'C++', 'Web Design', 'Database'],
            examPattern: 'Theory + Practical',
            avgSalary: '₹20,000 - ₹35,000',
            bestFor: 'IT career starters',
            features: {
                govtRecognized: true,
                onlineExam: false,
                placement: true,
                certificate: true,
                studyMaterial: true,
                labAccess: true,
                projectWork: true,
                internship: false
            }
        },
        dca: {
            name: 'DCA (Diploma in Computer Applications)',
            fee: 8000,
            duration: '6 Months',
            eligibility: '12th Pass',
            certification: 'KCC Diploma',
            jobRoles: ['Office Executive', 'Accountant', 'Data Analyst'],
            syllabus: ['MS Office Advanced', 'Tally', 'Internet', 'DTP'],
            examPattern: 'Theory + Practical',
            avgSalary: '₹18,000 - ₹28,000',
            bestFor: 'Office job seekers',
            features: {
                govtRecognized: false,
                onlineExam: false,
                placement: true,
                certificate: true,
                studyMaterial: true,
                labAccess: true,
                projectWork: false,
                internship: false
            }
        },
        pgdca: {
            name: 'PGDCA (Post Graduate DCA)',
            fee: 15000,
            duration: '12 Months',
            eligibility: 'Graduate',
            certification: 'KCC Post Graduate Diploma',
            jobRoles: ['System Admin', 'Software Tester', 'Database Admin'],
            syllabus: ['C++', 'Java', 'DBMS', 'Software Engineering'],
            examPattern: 'Theory + Practical + Project',
            avgSalary: '₹25,000 - ₹40,000',
            bestFor: 'Graduates seeking IT jobs',
            features: {
                govtRecognized: false,
                onlineExam: false,
                placement: true,
                certificate: true,
                studyMaterial: true,
                labAccess: true,
                projectWork: true,
                internship: true
            }
        },
        basic: {
            name: 'Basic Computer Course',
            fee: 2000,
            duration: '2 Months',
            eligibility: 'Any',
            certification: 'KCC Certificate',
            jobRoles: ['Beginners', 'Self Employment', 'CSC Operator'],
            syllabus: ['Computer Basics', 'Windows', 'MS Office', 'Internet'],
            examPattern: 'Practical Test',
            avgSalary: '₹10,000 - ₹15,000',
            bestFor: 'Complete beginners',
            features: {
                govtRecognized: false,
                onlineExam: false,
                placement: false,
                certificate: true,
                studyMaterial: true,
                labAccess: true,
                projectWork: false,
                internship: false
            }
        },
        tally: {
            name: 'Tally with GST',
            fee: 5000,
            duration: '3 Months',
            eligibility: '10th Pass',
            certification: 'KCC Certificate',
            jobRoles: ['Accountant', 'Bookkeeper', 'Tax Consultant'],
            syllabus: ['Tally Prime', 'GST', 'TDS', 'Accounting'],
            examPattern: 'Practical Test',
            avgSalary: '₹15,000 - ₹30,000',
            bestFor: 'Accounting professionals',
            features: {
                govtRecognized: false,
                onlineExam: false,
                placement: true,
                certificate: true,
                studyMaterial: true,
                labAccess: true,
                projectWork: false,
                internship: false
            }
        }
    };

    const allCourseKeys = Object.keys(courses);

    const toggleCourse = (courseKey) => {
        if (selectedCourses.includes(courseKey)) {
            if (selectedCourses.length > 1) {
                setSelectedCourses(selectedCourses.filter(c => c !== courseKey));
            }
        } else {
            if (selectedCourses.length < 3) {
                setSelectedCourses([...selectedCourses, courseKey]);
            }
        }
    };

    const featureLabels = {
        govtRecognized: 'Government Recognized',
        onlineExam: 'Online Examination',
        placement: 'Placement Assistance',
        certificate: 'Certificate Provided',
        studyMaterial: 'Study Materials',
        labAccess: '24/7 Lab Access',
        projectWork: 'Project Work',
        internship: 'Internship Opportunity'
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary to-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Course Comparison</h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Compare courses side-by-side to find the perfect fit for your career goals
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Course Selector */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Select up to 3 courses to compare:</h3>
                    <div className="flex flex-wrap gap-3">
                        {allCourseKeys.map(key => (
                            <button
                                key={key}
                                onClick={() => toggleCourse(key)}
                                className={`px-4 py-2 rounded-xl transition-all ${selectedCourses.includes(key)
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {courses[key].name.split('(')[0].trim()}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gradient-to-r from-primary to-blue-600 text-white">
                                <th className="p-4 text-left font-bold">Feature</th>
                                {selectedCourses.map(key => (
                                    <th key={key} className="p-4 text-center font-bold min-w-[200px]">
                                        {courses[key].name.split('(')[0].trim()}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Fee */}
                            <tr className="border-b border-gray-100">
                                <td className="p-4 font-semibold text-gray-700">Course Fee</td>
                                {selectedCourses.map(key => (
                                    <td key={key} className="p-4 text-center">
                                        <span className="text-primary font-bold text-lg flex items-center justify-center gap-1">
                                            <IndianRupee size={16} />
                                            {courses[key].fee.toLocaleString()}
                                        </span>
                                    </td>
                                ))}
                            </tr>

                            {/* Duration */}
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <td className="p-4 font-semibold text-gray-700">Duration</td>
                                {selectedCourses.map(key => (
                                    <td key={key} className="p-4 text-center">
                                        <span className="flex items-center justify-center gap-2">
                                            <Calendar size={16} className="text-primary" />
                                            {courses[key].duration}
                                        </span>
                                    </td>
                                ))}
                            </tr>

                            {/* Eligibility */}
                            <tr className="border-b border-gray-100">
                                <td className="p-4 font-semibold text-gray-700">Eligibility</td>
                                {selectedCourses.map(key => (
                                    <td key={key} className="p-4 text-center text-gray-600">
                                        {courses[key].eligibility}
                                    </td>
                                ))}
                            </tr>

                            {/* Certification */}
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <td className="p-4 font-semibold text-gray-700">Certification</td>
                                {selectedCourses.map(key => (
                                    <td key={key} className="p-4 text-center">
                                        <span className="flex items-center justify-center gap-2 text-sm">
                                            <Award size={16} className="text-yellow-600" />
                                            {courses[key].certification}
                                        </span>
                                    </td>
                                ))}
                            </tr>

                            {/* Avg Salary */}
                            <tr className="border-b border-gray-100">
                                <td className="p-4 font-semibold text-gray-700">Avg. Salary</td>
                                {selectedCourses.map(key => (
                                    <td key={key} className="p-4 text-center font-semibold text-green-600">
                                        {courses[key].avgSalary}
                                    </td>
                                ))}
                            </tr>

                            {/* Best For */}
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <td className="p-4 font-semibold text-gray-700">Best For</td>
                                {selectedCourses.map(key => (
                                    <td key={key} className="p-4 text-center text-gray-600 italic">
                                        {courses[key].bestFor}
                                    </td>
                                ))}
                            </tr>

                            {/* Features */}
                            {Object.keys(featureLabels).map((feature, idx) => (
                                <tr key={feature} className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                    <td className="p-4 font-semibold text-gray-700">{featureLabels[feature]}</td>
                                    {selectedCourses.map(key => (
                                        <td key={key} className="p-4 text-center">
                                            {courses[key].features[feature] ? (
                                                <Check size={24} className="text-green-600 mx-auto" />
                                            ) : (
                                                <X size={24} className="text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {selectedCourses.map(key => (
                        <a
                            key={key}
                            href="/contact"
                            className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                        >
                            Enroll in {courses[key].name.split('(')[0].trim()}
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CourseComparison;
