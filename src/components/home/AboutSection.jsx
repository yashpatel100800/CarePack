import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
    {
        title: 'Personalized Medicine',
        description: 'Compounded medications are specifically customized to provide the exact dose and form required for your clinical needs.',
    },
    {
        title: 'Tailored Therapy',
        description: 'Our pharmacists work directly with your provider to personalize therapy and improve healthcare outcomes.',
    },
    {
        title: 'Custom Dosages',
        description: 'We can create specific medication strengths and dosage forms that are commercially unavailable.',
    },
    {
        title: 'Pharmacy Specialties',
        description: 'Our experts specialize in various clinical areas including dermatology, pain management, and hormone therapy.',
    }
];

const AboutSection = () => {
    return (
        <div className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative">
                        <h3 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                            Why Choose Carepack?
                        </h3>
                        <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                            Mass-produced medications don't work for everyone. Standard retail pharmacies dispense generalized therapies, but true healing often requires a tailored approach. Expert compounding bridges that gap.
                        </p>

                        <dl className="mt-10 space-y-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="relative">
                                    <dt>
                                        <CheckCircle className="absolute h-6 w-6 text-primary mt-1" aria-hidden="true" />
                                        <p className="ml-10 text-xl font-bold text-gray-900">{feature.title}</p>
                                    </dt>
                                    <dd className="mt-2 ml-10 text-base text-gray-600">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="mt-12 lg:mt-0 relative" aria-hidden="true">
                        <div className="bg-white/50 backdrop-blur-sm p-4 sm:p-8 rounded-3xl border border-gray-100 shadow-soft-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                className="relative mx-auto rounded-2xl shadow-lg w-full object-cover h-auto lg:h-[600px] hover:scale-[1.02] transition-transform duration-500"
                                src="/images/compounding_pharmacist.png"
                                alt="Professional Pharmacist compounding medication in a clean lab with precision"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
