import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Services from './pages/Services';
import Education from './pages/Education';
import About from './pages/About';
import Contact from './pages/Contact';

import CustomCursor from './components/CustomCursor';
import LiveChat from './components/LiveChat';
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
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
