import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen pt-40 lg:pt-48 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Have questions about a prescription or our services? We're here to help.
                    </p>
                </div>

                <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                <span className="block">Get in touch</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-gray-500">
                                Our pharmacists are available to answer your questions and discuss your medication needs.
                            </p>

                            <div className="mt-8 space-y-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p className="font-medium text-gray-900">Phone</p>
                                        <p>(386) 532-0220</p>
                                        <p className="mt-1 font-medium text-gray-900">Fax</p>
                                        <p>(386) 532-0283</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p className="font-medium text-gray-900">Email</p>
                                        <p>info@carepackrx.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>1039 Harley Strickland Blvd&nbsp;#700</p>
                                        <p className="mt-1">Orange City, FL 32763</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>Monday - Friday: 9am - 5pm</p>
                                        <p className="mt-1">Saturday - Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-10 px-6 sm:px-10 lg:col-span-1">
                        <div className="bg-white">
                            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                                        Full name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="full-name"
                                            id="full-name"
                                            autoComplete="name"
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md border"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md border"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md border"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md border"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="sms-consent"
                                            name="sms-consent"
                                            type="checkbox"
                                            required
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="ml-3 text-xs text-gray-500">
                                        <label htmlFor="sms-consent" className="font-medium text-gray-700">SMS Consent</label>
                                        <p>By checking this box, I agree to receive text messages from Carepack Pharmacy related to my prescriptions and healthcare appointments at the phone number provided above. I understand I will receive approximately 1-3 messages per week. Message and data rates may apply. Reply STOP to opt-out at any time or HELP for help at (386) 532-0220. View our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>.</p>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
