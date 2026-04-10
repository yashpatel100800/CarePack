import React from 'react';
import RefillForm from '../components/forms/RefillForm';
import { motion } from 'framer-motion';

const RefillPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                            Prescription Refill
                        </h1>
                        <p className="text-lg text-gray-600">
                            Quickly request a refill for your existing prescriptions at Carepack Pharmacy.
                        </p>
                    </div>
                    <RefillForm />
                </motion.div>
            </div>
        </div>
    );
};

export default RefillPage;
