import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    "/images/hero_bg_1.png",
    "/images/hero_bg_2.png",
    "/images/hero_bg_3.png"
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative bg-white overflow-hidden pt-20 lg:pt-20">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-40 xl:pb-48">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 lg:pt-12">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="block xl:inline">Personalized Medicine</span>{' '}
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary xl:inline">
                                    Tailored to You
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed font-light">
                                We specialize in custom compounding solutions for patients and prescribers. Experience the difference of premium medication made just for your unique body.
                            </p>


                           
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-1/2 bg-gray-100">
                <div className="relative w-full h-72 sm:h-80 md:h-[32rem] lg:h-full overflow-hidden">
                    <AnimatePresence>
                        <motion.img
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
                            src={heroImages[currentImage]}
                            alt="Happy family benefiting from customized compounding pharmacy wellness solutions"
                        />
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Hero;
