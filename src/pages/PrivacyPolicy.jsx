import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 min-h-screen pt-40 lg:pt-48 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
                <div className="max-w-none text-gray-600 space-y-4">
                    <p className="mb-4">Last Updated: October 2023</p>
                    
                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        Carepack Pharmacy ("we," "our," or "us") respects your privacy and is committed to protecting your personal and medical information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
                    <p className="mb-4">
                        We collect personal information that you voluntarily provide to us when you fill out forms on our website, such as your name, contact information (email address, phone number), and prescription details. We also collect non-personal data through cookies to improve our website experience.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. SMS Communications & Consent</h2>
                    <p className="mb-4">
                        By checking the SMS consent box on our forms, you agree to receive text messages from Carepack Pharmacy related to your prescriptions, health care appointments, and refill reminders. You will receive approximately 1-3 messages per week. 
                    </p>
                    <p className="mb-4 font-semibold">
                        Message and data rates may apply. Reply <strong>STOP</strong> to opt-out at any time or <strong>HELP</strong> for help at (386) 532-0220.
                    </p>
                    <p className="mb-4">
                        Carepack Pharmacy will never share, trade, or otherwise sell your personal information, including mobile phone numbers and SMS consent data, to third parties or affiliates for marketing or promotional purposes. SMS messaging originator opt-in data and consent will be kept strictly confidential.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. HIPAA Compliance</h2>
                    <p className="mb-4">
                        We comply with the Health Insurance Portability and Accountability Act (HIPAA). All Protected Health Information (PHI) provided to us is handled securely and in accordance with federal law. A detailed Notice of Privacy Practices is available at our pharmacy.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
                    <p className="mb-4">
                        If you have questions about this Privacy Policy, please contact us at:<br /><br />
                        <strong>Carepack Pharmacy</strong><br />
                        1039 Harley Strickland Blvd #700<br />
                        Orange City, FL 32763<br />
                        Phone: (386) 532-0220<br />
                        Email: info@carepackrx.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
