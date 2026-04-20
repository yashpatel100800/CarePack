import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Printer } from 'lucide-react';

import logo from '../../assets/CarePack_Pharmacy_Logo.svg';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="bg-white p-4 rounded-2xl inline-block shadow-lg">
                                <img src={logo} alt="Carepack Pharmacy" className="h-16 md:h-20 w-auto object-contain" />
                            </div>
                        </div>
                        <p className="text-gray-100 font-medium mb-6 leading-relaxed">
                            Trusted by physicians, loved by patients, delivered with precision. Compounding medications for your unique needs.
                        </p>
                        <div className="flex space-x-4 mb-8">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors">
                                    <Icon className="h-5 w-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Compounding Services', path: '/services' },
                                { name: 'For Prescribers', path: '/prescribers' },
                                { name: 'For Patients', path: '/patients' },
                                { name: 'Contact Us', path: '/contact' },
                                { name: 'Privacy Policy', path: '/privacy' },
                                { name: 'Terms of Service', path: '/terms' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-100 font-medium hover:text-primary hover:translate-x-1 transition-all inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Clinical Focus</h3>
                        <ul className="space-y-4">
                            {[
                                'Gastroenterology',
                                'Dermatology',
                                'Pain Management',
                                'Women\'s & Men\'s Health',
                                'Pediatrics & Geriatrics',
                                'Veterinary'
                            ].map((service) => (
                                <li key={service}>
                                    <Link to="/services" className="text-gray-100 font-medium hover:text-primary hover:translate-x-1 transition-all inline-block">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start">
                                <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Carepack+Pharmacy+1039+Harley+Strickland+Blvd+Orange+City+FL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-100 hover:text-white font-medium text-sm"
                                >
                                    1039 Harley Strickland Blvd&nbsp;#700<br />
                                    Orange City, FL 32763
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                                <div className="text-gray-100 font-medium text-sm">
                                    <a href="tel:+13865320220" className="hover:text-white block">(386) 532-0220</a>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <Printer className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                                <div className="text-gray-100 font-medium text-sm">
                                    <span className="block">Fax: (386) 532-0283</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                <a href="mailto:info@carepackrx.com" className="text-gray-100 font-medium hover:text-white break-all text-sm">
                                    info@carepackrx.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Clock className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-100 font-medium text-sm">
                                    Mon-Fri: 9:00 AM - 5:00 PM<br />
                                    Sat-Sun: Closed
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm font-medium">
                    <p>&copy; {new Date().getFullYear()} Carepack Pharmacy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
