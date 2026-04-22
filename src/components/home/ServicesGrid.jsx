import { Heart, Activity, User, Dog, Stethoscope, Dumbbell } from 'lucide-react';

const services = [
    {
        title: 'Gastroenterology/Proctology',
        description: 'Specialized formulations for hemorrhoids, anal fissures, and GI-related inflammatory conditions.',
        icon: Stethoscope,
    },
    {
        title: 'Hormone Replacement',
        description: 'Customized BHRT solutions for men and women to restore balance and vitality.',
        icon: Heart,
    },
    {
        title: 'Dermatology',
        description: 'Specialized creams and gels for acne, anti-aging, scarring, and other skin conditions.',
        icon: User,
    },
    {
        title: 'Pain Management',
        description: 'Targeted topical pain relief to minimize side effects and maximize comfort.',
        icon: Activity,
    },
    {
        title: 'Veterinary',
        description: 'Custom medications for pets, including flavored chews and transdermal gels.',
        icon: Dog,
    },
    {
        title: 'Sports Medicine',
        description: 'Custom topical treatments for inflammation, muscle cramps, and rapid recovery from athletic injuries.',
        icon: Dumbbell,
    },
];

const ServicesGrid = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Expertise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Comprehensive Compounding Services
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        We work with prescribers to create medication solutions that fit your specific health needs.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div key={service.title} className="pt-6">
                                <div className="flow-root bg-white rounded-3xl px-6 pb-8 shadow-soft-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-gray-50/50">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg">
                                                <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;
