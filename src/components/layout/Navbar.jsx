import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Pill, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Compounding Services', path: '/services' },
        { name: 'Prescribers', path: '/prescribers' },
        { name: 'Patients', path: '/patients' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-white shadow-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center group">
                            <img src="/src/assets/CarePack_Pharmacy_Logo.svg" alt="Carepack Pharmacy" className="h-7 sm:h-7 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-600 hover:text-primary font-medium transition-colors duration-200 relative group text-sm uppercase tracking-wide"
                            >
                                {link.name}
                                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </Link>
                        ))}
                        <motion.a
                            href="tel:+13865320220"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md shadow-primary/20 flex items-center space-x-2"
                        >
                            <Phone className="w-4 h-4" />
                            <span>(386) 532-0220</span>
                        </motion.a>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none p-2 rounded-md hover:bg-gray-50"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-4 mt-4 border-t border-gray-100">
                                    <a
                                        href="tel:+13865320220"
                                        className="block w-full text-center bg-primary text-white px-5 py-3 rounded-xl font-semibold shadow-md active:scale-95 transition-transform"
                                    >
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
