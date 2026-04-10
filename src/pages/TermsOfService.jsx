import React from 'react';

const TermsOfService = () => {
    return (
        <div className="bg-gray-50 min-h-screen pt-40 lg:pt-48 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
                <div className="max-w-none text-gray-600 space-y-4">
                    <p className="mb-4">Last Updated: October 2023</p>
                    
                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
                    <p className="mb-4">
                        By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Medical Disclaimer</h2>
                    <p className="mb-4">
                        The content on the Carepack Pharmacy website is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider regarding any medical conditions, treatment, or medications. Never disregard professional medical advice or delay seeking it because of something you have read on this site.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Compounding Services</h2>
                    <p className="mb-4">
                        Our compounding services are provided pursuant to a valid prescription from a licensed practitioner. Compounded medications are not reviewed by the FDA for safety and efficacy. We compound medications strictly according to individual patient needs and practitioner directives.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Communication Terms</h2>
                    <p className="mb-4">
                        By providing your contact information, you consent to receive communications from Carepack Pharmacy. For SMS text messaging, standard message and data rates may apply. You may opt-out of SMS communications at any time by replying "STOP" to any message you receive from us.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
                    <p className="mb-4">
                        In no event shall Carepack Pharmacy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Carepack Pharmacy's website.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Governing Law</h2>
                    <p className="mb-4">
                        These terms and conditions are governed by and construed in accordance with the laws of the State of Florida, and you irrevocably submit to the exclusive jurisdiction of the courts in that State.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
