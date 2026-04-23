import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Printer } from 'lucide-react';

import logo from '../../assets/CarePack_Pharmacy_Logo.svg';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Left Column: Brand Info (33%) */}
                    <div className="flex flex-col items-start lg:col-span-1">
                        <div className="bg-white p-4 rounded-2xl inline-block shadow-lg mb-8">
                            <img src={logo} alt="Carepack Pharmacy" className="h-16 md:h-20 w-auto object-contain" />
                        </div>
                        <p className="text-gray-100 font-medium mb-6 leading-relaxed max-w-sm">
                            Trusted by physicians, loved by patients, delivered with precision. Compounding medications for your unique needs.
                        </p>
                        {/* <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary transition-colors">
                                    <Icon className="h-5 w-5 text-white" />
                                </a>
                            ))}
                        </div> */}
                    </div>

                    {/* Right Column: Contact Info partitioned (66%) */}
                    <div className="flex flex-col lg:col-span-2">
                        <h3 className="text-xl font-bold mb-8 text-white border-b border-gray-700 pb-2 inline-block self-start">Contact Us</h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Partition: Address & Schedule */}
                            <ul className="space-y-6">
                                <li className="flex items-start group">
                                    <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Carepack+Pharmacy+1039+Harley+Strickland+Blvd+Orange+City+FL"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-100 group-hover:text-white font-medium text-base lg:text-lg transition-colors"
                                    >
                                        1039 Harley Strickland Blvd&nbsp;#700<br />
                                        Orange City, FL 32763
                                    </a>
                                </li>
                                <li className="flex items-start">
                                    <Clock className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-100 font-medium text-base lg:text-lg">
                                        Mon-Fri: 9:00 AM - 5:00 PM<br />
                                        Sat-Sun: Closed
                                    </span>
                                </li>
                            </ul>

                            {/* Right Partition: Phone, Fax, Email */}
                            <ul className="space-y-6">
                                <li className="flex items-center group">
                                    <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                                    <div className="text-gray-100 font-medium text-base lg:text-lg">
                                        <a href="tel:+13865320220" className="group-hover:text-white transition-colors block">(386) 532-0220</a>
                                    </div>
                                </li>
                                <li className="flex items-center group">
                                    <Printer className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                                    <div className="text-gray-100 font-medium text-base lg:text-lg">
                                        <span className="block group-hover:text-white transition-colors">Fax: (386) 532-0283</span>
                                    </div>
                                </li>
                                <li className="flex items-start group">
                                    <Mail className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <a href="mailto:info@carepackrx.com" className="text-gray-100 font-medium group-hover:text-white break-all text-base lg:text-lg transition-colors">
                                        info@carepackrx.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center text-gray-400 text-sm font-medium space-y-4 md:space-y-0">
                    <p>&copy; {new Date().getFullYear()} Carepack Pharmacy. All rights reserved.</p>
                    <span className="hidden md:inline-block mx-4 text-gray-700">|</span>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
