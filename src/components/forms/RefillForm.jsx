import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RefillForm = () => {
    const [rxFields, setRxFields] = useState(['', '', '', '']);
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);

    const addRxField = () => setRxFields([...rxFields, '']);
    
    const handleRxChange = (index, value) => {
        const newFields = [...rxFields];
        newFields[index] = value;
        setRxFields(newFields);
    };

    const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "14076441025"; 

    const onSubmit = async (data) => {
        const filteredRx = rxFields.filter(val => val.trim() !== '');
        if (filteredRx.length === 0) {
            alert("No Rx Numbers were requested.");
            return;
        }
        
        const payload = {
            formType: "Refill Request",
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            rxNumbers: filteredRx.join(', ')
        };

        try {
            const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;
            if (webhookUrl && webhookUrl !== "https://hook.us1.make.com/your-webhook-url-here") {
                await fetch(webhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });
            } else {
                console.warn("Make.com Webhook URL is not configured. Form data:", payload);
                // Simulate network delay for UI feedback if webhook isn't setup yet
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            setIsSuccess(true);
            reset();
            setRxFields(['', '', '', '']);
            setTimeout(() => setIsSuccess(false), 3000);
        } catch (error) {
            console.error("Error submitting refill form:", error);
            alert("There was an error submitting your request. Please try again.");
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-soft-lg p-8 md:p-12 border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Refill Request</h3>
            <div className="h-0.5 w-full bg-gray-100 mb-8" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center">
                        <label className="md:w-1/3 text-gray-700 font-medium mb-1 md:mb-0 md:text-right md:pr-6">Last Name</label>
                        <div className="md:w-2/3">
                            <input
                                {...register("lastName", { required: "Last name is required." })}
                                className={`w-full px-4 py-2 rounded-lg border ${errors.lastName ? 'border-amber-200 bg-amber-50/30' : 'border-gray-300'} focus:border-primary outline-none transition-all`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center">
                        <label className="md:w-1/3 text-gray-700 font-medium mb-1 md:mb-0 md:text-right md:pr-6">First Name</label>
                        <div className="md:w-2/3">
                            <input
                                {...register("firstName", { required: "First name is required." })}
                                className={`w-full px-4 py-2 rounded-lg border ${errors.firstName ? 'border-amber-200 bg-amber-50/30' : 'border-gray-300'} focus:border-primary outline-none transition-all`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center">
                        <label className="md:w-1/3 text-gray-700 font-medium mb-1 md:mb-0 md:text-right md:pr-6">Phone Number</label>
                        <div className="md:w-2/3">
                            <input
                                {...register("phone", { required: "Phone number is required." })}
                                placeholder="(xxx) xxx-xxxx"
                                className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? 'border-amber-200 bg-amber-50/30' : 'border-gray-300'} focus:border-primary outline-none transition-all`}
                            />
                        </div>
                    </div>

                    {rxFields.map((val, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:items-center">
                            <label className="md:w-1/3 text-gray-700 font-medium mb-1 md:mb-0 md:text-right md:pr-6">Rx #</label>
                            <div className="md:w-2/3">
                                <input
                                    value={val}
                                    onChange={(e) => handleRxChange(idx, e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary outline-none transition-all"
                                />
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-end pr-0 md:pr-0">
                        <div className="md:w-2/3 flex justify-start">
                            <button 
                                type="button"
                                onClick={addRxField}
                                className="text-sm bg-gray-50 border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition-colors text-gray-600"
                            >
                                Add more prescriptions
                            </button>
                        </div>
                    </div>
                </div>

                {/* Validation Warnings (matching image style) */}
                {(errors.lastName || errors.firstName || errors.phone) && (
                    <div className="bg-amber-50 p-4 rounded border border-amber-100 space-y-1">
                        {errors.lastName && <p className="text-amber-800 text-sm">{errors.lastName.message}</p>}
                        {errors.firstName && <p className="text-amber-800 text-sm">{errors.firstName.message}</p>}
                        {errors.phone && <p className="text-amber-800 text-sm">{errors.phone.message}</p>}
                    </div>
                )}

                <div className="pt-8 border-t border-gray-100 flex items-center justify-center space-x-6">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#004B7F] hover:bg-[#003a63] text-white px-10 py-2.5 rounded shadow-md font-medium transition-all"
                    >
                        {isSubmitting ? "Processing..." : "Continue"}
                    </motion.button>
                    <Link to="/patients" className="text-sky-600 hover:text-sky-700 font-medium">
                        Cancel
                    </Link>
                </div>
            </form>

            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center border border-green-100"
                    >
                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                        <p className="text-sm font-medium">Refill request received successfully!</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RefillForm;
