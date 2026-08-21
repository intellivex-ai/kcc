import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const courses = [
  { id: 1, title: 'ADCA (Advance Diploma in Computer Applications)', category: 'Diploma', duration: '12 Months', fee: '₹12,000', badge: 'Most Popular', desc: 'Comprehensive computer training covering MS Office, Tally Prime, Web Design & C Programming.' },
  { id: 2, title: 'DCA (Diploma in Computer Applications)', category: 'Diploma', duration: '6 Months', fee: '₹6,500', badge: 'Career Focused', desc: 'Fundamentals of computers, MS Office, Internet operations, and digital communication.' },
  { id: 3, title: 'Tally Prime with GST', category: 'Accounting', duration: '3 Months', fee: '₹4,500', badge: 'Job Ready', desc: 'Complete computerized accounting, inventory management, GST compliance, and taxation.' },
  { id: 4, title: 'CCC (Course on Computer Concepts)', category: 'Govt. Prep', duration: '2 Months', fee: '₹2,500', badge: 'Govt Recognized', desc: 'NIELIT recognized basic computer certification course essential for govt job eligibility.' },
  { id: 5, title: 'Basic Computer Operations & Typing', category: 'Basic Skills', duration: '2 Months', fee: '₹2,000', badge: 'Beginner Friendly', desc: 'Hands-on practical training on computer basics, English/Hindi typing, and web browsing.' },
  { id: 6, title: 'Web Development Fundamentals', category: 'Diploma', duration: '4 Months', fee: '₹8,000', badge: 'High Demand', desc: 'Learn HTML5, CSS3, JavaScript, and responsive website building basics.' }
];

const categories = ['All', 'Diploma', 'Accounting', 'Basic Skills', 'Govt. Prep'];

const CourseCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <section id="courses" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Comprehensive Programs</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Explore Our Job-Oriented Courses</h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Master digital skills with hands-on practical training, industry recognized certifications, and expert guidance.</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                    {course.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {course.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">{course.desc}</p>
              </div>

              <div>
                <div className="flex items-center justify-between py-3 border-t border-slate-100 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <span>{course.fee}</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors duration-200"
                >
                  Enroll / Inquiry
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
