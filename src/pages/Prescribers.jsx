import React from 'react';
import { FileText, Phone, ShieldCheck, Clock, CheckCircle, Truck, Users, Activity } from 'lucide-react';

const Prescribers = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-primary pt-40 lg:pt-48 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                        For Prescribers
                    </h1>
                    <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
                        Partner with us to provide personalized medication solutions. Trusted by physicians, delivered with precision.
                    </p>
                </div>
            </div>

            {/* Why Prescribe With Us */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                            Why Prescribe With Us
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Personalized Therapy',
                                    desc: 'Custom Dosing Compound precise strengths not commercially available, per physician prescription and patient-specific requirements.',
                                    icon: Users
                                },
                                {
                                    title: 'Alternative Delivery Forms',
                                    desc: 'Compound medications in various forms—transdermal creams, sublingual troches, topical gels - as prescribed.',
                                    icon: Activity
                                },
                                {
                                    title: 'Adherence Support',
                                    desc: "Palatable flavors or topical / transdermal options when oral routes aren't ideal, packaging that supports correct use.",
                                    icon: CheckCircle
                                },
                                {
                                    title: 'Clinician Consults',
                                    desc: 'Rapid pharmacist consults on formulations, beyond use dating, and counseling pearls for your team.',
                                    icon: Phone
                                },
                                {
                                    title: 'Free Delivery Available',
                                    desc: 'Rush orders processed within hours. Free delivery directly to patients. We understand urgent medical needs.',
                                    icon: Truck
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                        <p className="mt-1 text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Quality Assurance */}
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <ShieldCheck className="w-6 h-6 text-secondary mr-2" />
                                Quality Assurance
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Beyond-Use Dating determined per USP standards',
                                    'Certificate of Analysis provided',
                                    'Batch documentation and testing records maintained'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* How to Prescribe */}
                        <div className="bg-primary rounded-xl p-8 text-white shadow-lg">
                            <h3 className="text-2xl font-bold mb-6">How to Prescribe</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-blue-100 text-sm uppercase tracking-wide font-semibold mb-1">Fax Prescription</p>
                                    <p className="text-2xl font-bold">386-532-0283</p>
                                    <p className="text-blue-100 text-sm mt-1">Please fax prescription and demographic details.</p>
                                </div>
                                <div className="border-t border-white/20 pt-6">
                                    <p className="text-blue-100 text-sm uppercase tracking-wide font-semibold mb-1">Call for Information</p>
                                    <p className="text-2xl font-bold">(386) 532-0220</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prescribers;
