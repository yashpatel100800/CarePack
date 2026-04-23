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
        <div className="relative bg-white overflow-hidden pt-24 pb-8 lg:pt-24 lg:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between relative">
                    
                    {/* Text Column with SVG Overlay */}
                    <div className="relative z-20 bg-white lg:w-[45%] pb-12 lg:pb-0">
                        {/* The overlapping SVG Slant */}
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-[-100px] h-[calc(100%+200px)] w-48 text-white transform translate-x-1/2 pointer-events-none"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <main className="sm:text-center lg:text-left relative z-10 lg:pr-8">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                                <span className="block xl:inline">Personalized Medicine</span>{' '}
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary xl:inline">
                                    Tailored to You
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed font-light">
                                We specialize in custom compounding solutions for patients and prescribers. Experience the difference of premium medication made just for your unique body.
                            </p>
                        </main>
                    </div>

                    {/* Image Column Fixed Aspect Ratio */}
                    <div className="relative z-10 lg:w-[55%] flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[32rem] sm:max-w-[36rem] lg:max-w-full xl:w-[48rem] aspect-[4/3] overflow-hidden rounded-3xl shadow-xl lg:rounded-2xl">
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
            </div>
        </div>
    );
};

export default Hero;
