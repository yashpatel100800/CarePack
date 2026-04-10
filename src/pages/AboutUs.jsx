import React from 'react';
import { CheckCircle, ShieldCheck, Beaker } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ─── TITLE AREA ─── */}
      <div className="bg-primary text-white pt-40 lg:pt-48 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Precision Compounding. Built Around the Patient.
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-blue-100 font-medium leading-relaxed">
            A dedicated compounding pharmacy serving Central Florida — specializing in personalized medications across multiple clinical areas for patients who need more than what commercial pharmacies can offer.
          </p>
        </div>
      </div>

      {/* ─── OUR STORY ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Story</span>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                We Solve the Problem Commercial Pharmacies Can't.
              </h2>
              <div className="mt-6 text-gray-600 space-y-6 text-lg leading-relaxed">
                <p>
                  Carepack Pharmacy was founded to solve a problem every prescriber has faced: a patient who needs a medication that doesn't exist in the right form, strength, or delivery route. Standard commercial options weren't enough — so we built something better.
                </p>
                <p>
                  From our facility in Orange City, Florida, we serve patients and prescribers across the state with non-sterile compounding across our clinical specialties. Every compound is prepared under USP 795 standards with full batch documentation, beyond-use dating, and a certificate of analysis.
                </p>
                <p>
                  We built our reputation on doing things right — transparent communication with prescribers, accurate formulations, and clinical accountability on every prescription that comes through our door.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=1600&q=85&auto=format&fit=crop"
                alt="Pharmacy Interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS / HIGHLIGHTS ─── */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
             <div className="flex flex-col">
               <span className="text-4xl font-extrabold text-primary mb-2">10+</span>
               <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Clinical Specialties</span>
             </div>
             <div className="flex flex-col">
               <span className="text-4xl font-extrabold text-primary mb-2">USP 795</span>
               <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Compliant Operations</span>
             </div>
             <div className="flex flex-col">
               <span className="text-4xl font-extrabold text-primary mb-2">CoA</span>
               <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">With Every Compound</span>
             </div>
             <div className="flex flex-col">
               <span className="text-4xl font-extrabold text-primary mb-2">Free</span>
               <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Florida Shipping</span>
             </div>
          </div>
        </div>
      </section>

      {/* ─── OUR APPROACH ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Approach</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Formulated for the Individual.<br />Not the Average Patient.
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              When a patient can't swallow a pill, needs a dose that doesn't exist off the shelf, or has an allergy to a commercial excipient — that's where Carepack begins. Every decision starts with what the patient actually needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200" alt="Patient-Centered" className="w-14 h-14 object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered</h3>
              <p className="text-gray-600">
                Every formula decision starts with the individual patient — not what's mass-market viable.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto bg-green-50 text-secondary rounded-full flex items-center justify-center mb-6">
                <Beaker className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Precision</h3>
              <p className="text-gray-600">
                USP 795 standards throughout. Documentation and testing are non-negotiable at every step.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 text-center">
              <div className="w-14 h-14 mx-auto bg-purple-50 text-primary rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Provider Partnership</h3>
              <p className="text-gray-600">
                Transparent pharmacist-to-prescriber communication. We work with your team, not around them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUALITY STANDARDS ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
             <div className="absolute inset-0 opacity-10">
                <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=1600&h=900&auto=format&fit=crop&q=80" alt="Background lab" className="w-full h-full object-cover" />
             </div>
             <div className="relative p-10 md:p-16 lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Quality Standards
                  </h2>
                  <p className="mt-4 text-xl text-blue-100 mb-8 lg:mb-0">
                    <strong className="text-white block mb-2">Every Compound Is Documented. Tested. Verified.</strong>
                    Every compound that leaves our facility meets a standard higher than the minimum required by Florida Board of Pharmacy. We document every step — because your patients deserve to know what they're getting.
                  </p>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                   <ul className="space-y-4">
                     {[
                       "USP Chapter 795 non-sterile compounding compliance",
                       "Beyond-use dating per current USP guidance (not arbitrary)",
                       "Batch records maintained for every preparation",
                       "Certificate of Analysis available on request",
                       "Pharmaceutical-grade active pharmaceutical ingredients (APIs)",
                       "Licensed Florida compounding pharmacy"
                     ].map((item, index) => (
                       <li key={index} className="flex items-start">
                         <CheckCircle className="flex-shrink-0 h-6 w-6 text-secondary mr-3" />
                         <span className="text-white font-medium">{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
