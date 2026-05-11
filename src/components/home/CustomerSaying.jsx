import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldPlus } from 'lucide-react';

const CustomerSaying = () => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">Patient Stories</h2>
                    <p className="text-lg text-gray-600">Hear from our community about how CarePack Pharmacy's guided care approach has simplified their health journeys.</p>
                </motion.div>

                {/* Bento Grid Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
                    {/* Large Featured Testimonial */}
                    <motion.article 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 md:col-span-8 bg-white/80 backdrop-blur-md border border-white shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none"></div>
                        <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10" fill="currentColor" />
                        
                        <div className="flex-1 space-y-6 relative z-10 pl-4 md:pl-12 pt-4">
                            <div className="flex text-orange-400 gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <blockquote className="text-xl md:text-2xl italic text-gray-900 leading-snug">
                                "The medication synchronization program changed my life. I no longer have to make multiple trips to the pharmacy each month. The staff is incredibly knowledgeable and always takes the time to explain my new prescriptions in a way I can actually understand."
                            </blockquote>
                            <div className="flex items-center gap-4 pt-6 mt-4">
                                <div className="w-14 h-14 rounded-full bg-blue-100 text-primary flex items-center justify-center text-xl font-bold shadow-inner border border-white">
                                    MT
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-primary">Marcus T.</div>
                                    <div className="text-sm text-gray-500">Patient for 3 years</div>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Standard Testimonial 1 */}
                    <motion.article 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 md:col-span-4 bg-white/80 backdrop-blur-md border border-white shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full pointer-events-none"></div>
                        <div className="flex text-orange-400 gap-1 relative z-10">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <blockquote className="text-lg text-gray-800 flex-grow relative z-10 leading-relaxed group-hover:text-primary transition-colors duration-300">
                            "Fast delivery and the app makes refilling so simple. The clinical clarity they provide gives me peace of mind."
                        </blockquote>
                        <div className="flex items-center gap-4 mt-auto pt-4 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-green-100 text-secondary flex items-center justify-center font-bold text-lg shadow-inner border border-white">
                                SJ
                            </div>
                            <div>
                                <div className="font-bold text-primary">Sarah J.</div>
                                <div className="text-sm text-gray-500">Verified Patient</div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Standard Testimonial 2 */}
                    <motion.article 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 md:col-span-4 bg-white/80 backdrop-blur-md border border-white shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden group"
                    >
                        <div className="absolute -right-4 -bottom-4 text-primary/5 pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
                            <Quote className="w-32 h-32" fill="currentColor" />
                        </div>
                        <div className="flex text-orange-400 gap-1 relative z-10">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <blockquote className="text-lg text-gray-800 flex-grow relative z-10 leading-relaxed">
                            "When my insurance denied a crucial medication, the pharmacists at CarePack advocated for me and found a patient assistance program. They truly care."
                        </blockquote>
                        <div className="flex items-center gap-4 mt-auto pt-4 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center font-bold text-lg shadow-inner border border-white">
                                DL
                            </div>
                            <div>
                                <div className="font-bold text-primary">David L.</div>
                                <div className="text-sm text-gray-500">Patient for 1 year</div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Standard Testimonial 3 */}
                    <motion.article 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-span-1 md:col-span-4 bg-white/80 backdrop-blur-md border border-white shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-secondary to-primary opacity-50"></div>
                        <div className="flex text-orange-400 gap-1 relative z-10">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <blockquote className="text-lg text-gray-800 flex-grow relative z-10 leading-relaxed group-hover:text-primary transition-colors duration-300">
                            "The organization of the packaging is brilliant. For someone managing diabetes and hypertension, their sorted blister packs are a lifesaver."
                        </blockquote>
                        <div className="flex items-center gap-4 mt-auto pt-4 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-green-100 text-secondary flex items-center justify-center font-bold text-lg shadow-inner border border-white">
                                ER
                            </div>
                            <div>
                                <div className="font-bold text-primary">Elena R.</div>
                                <div className="text-sm text-gray-500">Patient for 5 years</div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Call to Action Banner */}
                    <motion.article 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="col-span-1 md:col-span-4 bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center gap-6 shadow-soft-lg relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
                        <ShieldPlus className="w-12 h-12 mb-2 relative z-10 drop-shadow-md text-white" />
                        <h3 className="text-2xl font-semibold text-white relative z-10 tracking-tight">Experience Guided Care</h3>
                        <p className="text-base text-blue-100 relative z-10">Transfer your prescriptions today and see the difference a dedicated pharmacy team makes.</p>
                        <button className="bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:bg-gray-50 transition-all duration-300 mt-auto w-full shadow-md relative z-10 overflow-hidden group">
                            <span className="relative z-10">Transfer Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </button>
                    </motion.article>
                </div>
            </div>
        </section>
    );
};

export default CustomerSaying;
