import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Sun, Moon, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lazy initialization for theme state
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Apply theme changes
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]); // only re-run if theme changes

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceCategories = [
    { name: 'All Services', path: '/services' },
    { name: 'Banking', path: '/services?category=Banking' },
    { name: 'Govt Services', path: '/services?category=Govt Services' },
    { name: 'Education', path: '/education' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass glass-dark py-2 shadow-lg"
          : "bg-white/50 dark:bg-black/20 backdrop-blur-sm py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-opacity-90 transition-all shadow-md">
              <span className="text-secondary font-bold text-xl">KCC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight transition-colors text-primary dark:text-white">Kusum</span>
              <span className="text-xs tracking-wider transition-colors text-gray-900 dark:text-gray-200 font-medium">Computer Centre</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "font-semibold transition-colors relative group",
                isActive('/')
                  ? "text-primary dark:text-secondary font-bold"
                  : "text-gray-900 dark:text-white hover:text-primary dark:hover:text-secondary"
              )}
            >
              Home
              {isActive('/') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary dark:bg-secondary rounded-full" />}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 font-semibold transition-colors py-2",
                  location.pathname.includes('services')
                    ? "text-primary dark:text-secondary font-bold"
                    : "text-gray-900 dark:text-white hover:text-primary dark:hover:text-secondary"
                )}
              >
                Services <ChevronDown size={14} className={cn("transition-transform", activeDropdown === 'services' ? "rotate-180" : "")} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden py-2"
                  >
                    {serviceCategories.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-secondary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-semibold transition-colors relative group",
                  isActive(link.path)
                    ? "text-primary dark:text-secondary font-bold"
                    : "text-gray-900 dark:text-white hover:text-primary dark:hover:text-secondary"
                )}
              >
                {link.name}
                {isActive(link.path) && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary dark:bg-secondary rounded-full" />}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-yellow-400 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Link to="/education" className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-primary-light transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 transform hover:-translate-y-0.5">
              <span>Apply Now</span>
              <Rocket size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-yellow-400 transition-all"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                  isActive('/')
                    ? "bg-primary/10 text-primary dark:text-secondary"
                    : "text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
                )}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="px-4 py-3">
                <div className="font-medium text-gray-900 dark:text-white mb-2">Services</div>
                <div className="pl-4 space-y-2 border-l-2 border-gray-100 dark:border-gray-700">
                  {serviceCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm text-gray-700 dark:text-gray-400 hover:text-primary dark:hover:text-secondary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    isActive(link.path)
                      ? "bg-primary/10 text-primary dark:text-secondary"
                      : "text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  to="/education"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-white px-5 py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
                >
                  Apply For Admission
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
