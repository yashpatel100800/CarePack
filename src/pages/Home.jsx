import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import AboutSection from '../components/home/AboutSection';
import Testimonials from '../components/home/Testimonials';
import CustomerSaying from '../components/home/CustomerSaying';
import TransferForm from '../components/forms/TransferForm';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Hero />
            </motion.div>

            {/* Quick Access & Delivery Checker */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 md:p-10 border border-white h-full flex flex-col md:flex-row items-center justify-between gap-6 transform hover:-translate-y-1 transition-transform duration-300">
                            <div>
                                <div className="flex items-center mb-2">
                                    <h2 className="text-2xl font-bold text-gray-900">Curbside Check-in</h2>
                                    <span className="ml-3 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">New</span>
                                </div>
                                <p className="text-gray-600">
                                    In a rush? Let us know you're here and we'll bring your prescription out to your car.
                                </p>
                            </div>
                            <motion.a
                                href="tel:+13865320220"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-gray-900/20 hover:shadow-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 flex items-center justify-center whitespace-nowrap"
                            >
                                <MapPin className="w-5 h-5 mr-2" />
                                I'm Here - Check In
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

           

            <ServicesGrid />
            <AboutSection />
            <Testimonials />
            {/* <CustomerSaying /> */}
        </div>
    );
};

export default Home;
