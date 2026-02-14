import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Services from './pages/Services';
import Education from './pages/Education';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Downloads from './pages/Downloads';
import SuccessStories from './pages/SuccessStories';
import Scholarships from './pages/Scholarships';
import CourseComparison from './pages/CourseComparison';
import OnlineAdmission from './pages/OnlineAdmission';
import ResultsChecker from './pages/ResultsChecker';
import AlumniNetwork from './pages/AlumniNetwork';
import ReferralProgram from './pages/ReferralProgram';
import JobBoard from './pages/JobBoard';
import OnlineBooking from './pages/OnlineBooking';

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
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
