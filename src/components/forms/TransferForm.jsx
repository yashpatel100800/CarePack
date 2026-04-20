import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TransferForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);

    const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "14076441025"; 

    const onSubmit = async (data) => {
        const payload = {
            formType: "Transfer Request",
            transferType: data.transferType,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            pharmacyName: data.pharmacyName,
            pharmacyPhone: data.pharmacyPhone,
            zipCode: data.zipCode,
            rxNumber: data.rxNumber
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
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            setIsSuccess(true);
            reset();
            setTimeout(() => setIsSuccess(false), 3000);
        } catch (error) {
            console.error("Error submitting transfer form:", error);
            alert("There was an error submitting your request. Please try again.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-sm text-gray-700">
                Fill out the below form to request a transfer of your medication. Have a question? Give us a ring at (407) 644-1025.
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 border border-gray-100 shadow-soft-lg rounded-3xl">
                <div className="space-y-8">
                    {/* Section: Who is this transfer for? */}
                    <div className="space-y-4">
                        <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Who is this transfer for?</label>
                        <select 
                            {...register("transferType")}
                            className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-600 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all bg-white"
                        >
                            <option>Please Select One</option>
                            <option>Myself</option>
                            <option>Child</option>
                            <option>Spouse</option>
                            <option>Other</option>
                        </select>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <input
                                {...register("firstName", { required: true })}
                                placeholder="First Name"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            />
                            <input
                                {...register("lastName", { required: true })}
                                placeholder="Last Name"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                {...register("phone", { required: true })}
                                placeholder="Phone Number"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            />
                            <input
                                {...register("email", { required: true })}
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </div>

                    {/* Section: Refill Information */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900">Refill Information</h4>
                        <p className="text-sm text-gray-600 italic">
                            Please note: If there are no refills remaining on your prescription, we will contact your doctor for a refill authorization. Please be sure to also follow-up with your doctor for maximum efficiency.
                        </p>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                            <input
                                {...register("pharmacyName", { required: true })}
                                placeholder="Pharmacy Name"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                {...register("pharmacyPhone", { required: true })}
                                placeholder="Pharmacy Phone"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            />
                            <input
                                {...register("zipCode", { required: true })}
                                placeholder="Zip Code"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            />
                            <input
                                {...register("rxNumber", { required: true })}
                                placeholder="Rx #"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-extrabold py-4 px-12 rounded-full text-sm uppercase tracking-widest transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Transfer Request"}
                    </button>
                </div>
            </form>

            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4 p-4 bg-green-50 text-green-700 border border-green-100 rounded text-center font-medium"
                    >
                        Transfer request submitted successfully.
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TransferForm;
