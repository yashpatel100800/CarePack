import { HelpCircle, Truck, CreditCard, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Patients = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-primary pt-40 lg:pt-48 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                        For Patients
                    </h1>
                    <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
                        Understanding your compounding options and how we can help you feel your best.
                    </p>
                </div>
            </div>

            {/* FAQ / Info Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Patient Resources</h2>

                        <div className="space-y-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                                        <HelpCircle className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-900">What is Compounding?</h3>
                                    <p className="mt-2 text-gray-600">
                                        Compounding is the art and science of creating personalized medications. We can adjust the strength, dosage form (capsule, cream, liquid), and flavor to meet your specific needs.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                                        <CreditCard className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-900">Insurance & Pricing</h3>
                                    <p className="mt-2 text-gray-600">
                                        We work with many insurance providers. For medications not covered, we offer competitive cash pricing. Contact us for a quote.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                                        <Truck className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-900">Shipping & Delivery</h3>
                                    <p className="mt-2 text-gray-600">
                                        We offer free local delivery and affordable shipping options throughout the state.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Manage Your Prescriptions</h3>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <RefreshCw className="h-6 w-6 text-primary mr-3" />
                                    <h4 className="text-lg font-semibold text-gray-900">Refill a Prescription</h4>
                                </div>
                                <p className="text-gray-500 mb-4">
                                    Running low? Request a refill online quickly and easily.
                                </p>
                                <Link to="/refill" className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors">
                                    Refill Now
                                </Link>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <Truck className="h-6 w-6 text-primary mr-3" />
                                    <h4 className="text-lg font-semibold text-gray-900">Transfer a Prescription</h4>
                                </div>
                                <p className="text-gray-500 mb-4">
                                    New to Carepack Pharmacy? Transfer your prescription from another pharmacy.
                                </p>
                                <Link to="/transfer" className="block w-full text-center bg-secondary hover:bg-secondary-light text-white font-bold py-2 px-4 rounded transition-colors">
                                    Transfer Now
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Patients;
