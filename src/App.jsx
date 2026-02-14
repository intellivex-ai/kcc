import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Education = lazy(() => import('./pages/Education'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Downloads = lazy(() => import('./pages/Downloads'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const Scholarships = lazy(() => import('./pages/Scholarships'));
const CourseComparison = lazy(() => import('./pages/CourseComparison'));
const OnlineAdmission = lazy(() => import('./pages/OnlineAdmission'));
const ResultsChecker = lazy(() => import('./pages/ResultsChecker'));
const AlumniNetwork = lazy(() => import('./pages/AlumniNetwork'));
const ReferralProgram = lazy(() => import('./pages/ReferralProgram'));
const JobBoard = lazy(() => import('./pages/JobBoard'));
const OnlineBooking = lazy(() => import('./pages/OnlineBooking'));
const StudentPortal = lazy(() => import('./pages/StudentPortal'));
const PaymentGateway = lazy(() => import('./pages/PaymentGateway'));

import CustomCursor from './components/CustomCursor';
import LiveChat from './components/LiveChat';
import NotificationSystem from './components/NotificationSystem';
import OfferBanner from './components/OfferBanner';

function App() {
  return (
    <Router>
      <CustomCursor />
      <LiveChat />
      <OfferBanner />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 font-semibold">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/education" element={<Education />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/compare" element={<CourseComparison />} />
              <Route path="/admission" element={<OnlineAdmission />} />
              <Route path="/results" element={<ResultsChecker />} />
              <Route path="/alumni" element={<AlumniNetwork />} />
              <Route path="/referral" element={<ReferralProgram />} />
              <Route path="/jobs" element={<JobBoard />} />
              <Route path="/booking" element={<OnlineBooking />} />
              <Route path="/portal" element={<StudentPortal />} />
              <Route path="/payment" element={<PaymentGateway />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Chatbot />
        <NotificationSystem />
      </div>
    </Router>
  );
}

export default App;
