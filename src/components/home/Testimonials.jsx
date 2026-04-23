import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        content: "I highly recommend Carepack Pharmacy in Orange City for anyone looking for a pharmacy that truly cares about its patients. From my experience, their level of professionalism, kindness, and attention to detail is exceptional.",
        author: "Marhejoy Larrobis",
        date: "March 2026",
        initials: "M",
        link: "https://share.google/8SR7jpG9UfG0JXoxM"
    },
    {
        content: "Carepack Pharmacy is truly exceptional. The team is incredibly knowledgeable, professional, and attentive, and they take the time to provide a personalized experience for every patient. Their service is efficient, easy, and fast, yet still very caring and friendly.",
        author: "Tara Darrow",
        date: "March 2026",
        initials: "T",
        link: "https://share.google/qF8lUeqWvRSVyvwyE"
    },
    {
        content: "I highly recommend CarePack Pharmacy! Every time I visit, I feel welcomed and well taken care of. The staff are not only friendly but also very patient and respectful. They take the time to explain the medicines clearly and make sure I understand the proper dosage and instructions. I really appreciate how they answer my questions without making me feel rushed.",
        author: "Cherrie jean Suson",
        date: "February 2026",
        initials: "C",
        link: "https://share.google/CZszm1zW6Oh4Lwhh8"
    },
];

const calculateTimeAgo = (dateString) => {
    const [monthName, year] = dateString.split(' ');
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = months.indexOf(monthName);
    
    const reviewDate = new Date(year, monthIndex);
    const currentDate = new Date(); // April 2026
    
    const diffInMonths = (currentDate.getFullYear() - reviewDate.getFullYear()) * 12 + (currentDate.getMonth() - reviewDate.getMonth());
    
    if (diffInMonths === 0) return 'this month';
    if (diffInMonths === 1) return '1 month ago';
    return `${diffInMonths} months ago`;
};

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-50 overflow-hidden md:py-24 lg:py-28 border-t border-gray-200">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <div className="flex items-center mb-4 bg-white px-5 py-2 rounded-full shadow-sm border border-gray-100">
                            <b className="text-gray-900 text-xl tracking-tight mr-2">Excellent</b>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-orange-500 fill-current mx-0.5" />
                                ))}
                            </div>
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark sm:text-5xl py-2">
                            Trusted by the Community
                        </h2>
                        <div className="flex items-center mt-4">
                            <span className="text-gray-500 text-lg mr-2">Based on</span>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-6 h-6 mr-1" />
                            <span className="font-bold text-gray-800 text-lg">Reviews</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-soft hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold text-xl shadow-inner">
                                                {testimonial.initials}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">{testimonial.author}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{calculateTimeAgo(testimonial.date)}</p>
                                            </div>
                                        </div>
                                        <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform flex-shrink-0">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 opacity-80" />
                                        </a>
                                    </div>
                                    <div className="flex items-center mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 text-orange-500 fill-current mr-0.5" />
                                        ))}
                                    </div>
                                    <blockquote className="text-gray-700 text-base leading-relaxed">
                                        "{testimonial.content}"
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
