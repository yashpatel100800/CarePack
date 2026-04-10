import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Phone, Truck, FlaskConical, Stethoscope,
  Flower, Zap, HeartHandshake, Sparkles, Baby, Footprints, Dumbbell,
  Bandage, Smile, PawPrint, Scale, Dna
} from 'lucide-react';

const UP = (id, w = 600, h = 400) => `https://images.unsplash.com/${id}?w=${w}&h=${h}&q=85&auto=format&fit=crop`;

const specialties = [
  {
    id: "womens-hormone-therapy",
    icon: Flower,
    accent: "#be185d",
    accentBg: "bg-pink-50",
    title: "Hormone Therapy for Women",
    tagline: "Hormones calibrated to your patient.",
    photo: UP("photo-1505576399279-565b52d4ac71"),
    description: "Bio-identical hormone replacement uses hormones molecularly identical to what the body produces naturally. Compounded BHRT is dosed to each patient's lab values.",
    conditions: ["Menopause & perimenopause", "Hormonal imbalance", "Brain fog", "Hot flashes"],
    formulations: ["Estradiol topical creams", "Progesterone troches", "Combination BHRT creams"],
  },
  {
    id: "mens-hormone-therapy",
    icon: Dumbbell,
    accent: "#1d4ed8",
    accentBg: "bg-blue-50",
    title: "Hormone Therapy for Men",
    tagline: "Testosterone and beyond — dosed accurately.",
    photo: UP("photo-1571019614242-c5c5dee9f50b"),
    description: "Male hormone optimization is nuanced. Compounded preparations allow custom dosing and delivery routes that commercial products cannot provide.",
    conditions: ["Low testosterone", "Hypogonadism", "Fatigue & low energy", "Loss of muscle mass"],
    formulations: ["Testosterone gels (custom strength)", "HCG preparations", "Clomiphene compounded capsules"],
  },
  {
    id: "adrenal-thyroid",
    icon: Dna,
    accent: "#7c3aed",
    accentBg: "bg-violet-50",
    title: "Adrenal / Thyroid",
    tagline: "Precision dosing for complex endocrine needs.",
    photo: UP("photo-1584308666744-24d5c474f2ae"),
    description: "Thyroid and adrenal conditions frequently require dosing combinations and strengths that commercial products can't provide, such as desiccated thyroid combinations.",
    conditions: ["Hypothyroidism", "Hashimoto's thyroiditis", "Adrenal fatigue", "Addison's disease"],
    formulations: ["T3/T4 combinations (custom ratio)", "Slow-release T3", "Hydrocortisone custom doses"],
  },
  {
    id: "pain-management",
    icon: Zap,
    accent: "#b45309",
    accentBg: "bg-amber-50",
    title: "Pain Management",
    tagline: "Target the source. Minimize systemic exposure.",
    photo: UP("photo-1576091160550-2173dba999ef"),
    description: "Transdermal compounded analgesics deliver therapeutic concentrations at the site of pain without significant systemic absorption.",
    conditions: ["Neuropathic pain", "Fibromyalgia", "Chronic lower back pain", "Arthritis & joint pain"],
    formulations: ["Transdermal PLO gels", "Topical diclofenac", "Lidocaine/prilocaine creams"],
  },
  {
    id: "palliative-care",
    icon: HeartHandshake,
    accent: "#0f766e",
    accentBg: "bg-teal-50",
    title: "Palliative Care",
    tagline: "Comfort-focused compounding.",
    photo: UP("photo-1584515933487-779824d29309"),
    description: "Compounding provides alternative routes — rectal, buccal, sublingual, or topical — to ensure symptom management is never interrupted.",
    conditions: ["Cancer pain", "Dysphagia", "Nausea & vomiting", "Anxiety & agitation"],
    formulations: ["Rectal suppositories", "Concentrated sublinguals", "Topical morphine"],
  },
  {
    id: "dermatology",
    icon: Sparkles,
    accent: "#6d28d9",
    accentBg: "bg-purple-50",
    title: "Dermatology",
    tagline: "Formulas beyond commercial limitations.",
    photo: UP("photo-1556228578-8d89f1f0db43"),
    description: "Compounding lets dermatologists combine actives, adjust concentrations, eliminate problematic vehicles, and create custom formulations that work.",
    conditions: ["Acne vulgaris", "Rosacea", "Hyperpigmentation", "Androgenic alopecia"],
    formulations: ["Tretinoin combination formulas", "Custom minoxidil", "Hydroquinone-free formulas"],
  },
  {
    id: "pediatrics",
    icon: Baby,
    accent: "#059669",
    accentBg: "bg-emerald-50",
    title: "Pediatrics",
    tagline: "The right dose, the right flavor.",
    photo: UP("photo-1555252333-9f8e92e65df9"),
    description: "Carepack creates pediatric formulations that children actually take, in strengths calibrated to their exact weight and age.",
    conditions: ["ADHD dose adjustments", "Pediatric seizure management", "Reflux & GERD"],
    formulations: ["Flavored oral suspensions", "Chewable gummies", "Transdermal gels"],
  },
  {
    id: "podiatry",
    icon: Footprints,
    accent: "#c2410c",
    accentBg: "bg-orange-50",
    title: "Podiatry",
    tagline: "Topical precision for foot conditions.",
    photo: UP("photo-1571019613454-1cb2f99b2d8b"),
    description: "From nail fungus to neuropathic foot pain, custom formulations outperform generic commercial options by delivering high localized drug concentrations.",
    conditions: ["Onychomycosis", "Plantar fasciitis", "Peripheral neuropathy", "Heel fissures"],
    formulations: ["Antifungal combinations", "Custom salicylic acid", "Urea nail treatments"],
  },
  {
    id: "sports-medicine",
    icon: Dumbbell,
    accent: "#0369a1",
    accentBg: "bg-sky-50",
    title: "Sports Medicine",
    tagline: "Targeted therapy for recovery.",
    photo: UP("photo-1517836357463-d25dfeac3438"),
    description: "Sports medicine compounding focuses on localized anti-inflammatory and analgesic support without the GI burden.",
    conditions: ["Tendinopathy", "Acute muscle strains", "Joint inflammation", "Overuse injuries"],
    formulations: ["Topical NSAID combinations", "Custom lidocaine", "Arnica combination creams"],
  },
  {
    id: "wound-care",
    icon: Bandage,
    accent: "#be123c",
    accentBg: "bg-rose-50",
    title: "Wound Care",
    tagline: "Custom preparations for complex wounds.",
    photo: UP("photo-1583324113626-70df0f4deaab"),
    description: "Compounding allows wound care teams to use exactly the right formulation for the wound stage and patient need.",
    conditions: ["Diabetic foot ulcers", "Pressure injuries", "Post-surgical wounds", "Burns & radiation"],
    formulations: ["Bismuth tribromophenate", "Antibiotic-impregnated ointments", "Silver sulfadiazine"],
  },
  {
    id: "dentistry",
    icon: Smile,
    accent: "#0c4a6e",
    accentBg: "bg-sky-50",
    title: "Dentistry",
    tagline: "Oral and topical preparations for dental practice.",
    photo: UP("photo-1606811841689-23dfddce3e95"),
    description: "Providing custom anesthetics, mouth rinses, dry socket preparations, and periodontal treatments that commercial products can't match.",
    conditions: ["Dry socket", "TMJ pain", "Aphthous ulcers", "Dental anxiety"],
    formulations: ["Custom topical lidocaine", "Dry socket paste", "Magic mouthwash"],
  },
  {
    id: "veterinary",
    icon: PawPrint,
    accent: "#92400e",
    accentBg: "bg-yellow-50",
    title: "Veterinary",
    tagline: "Formulations animals accept — and absorb.",
    photo: UP("photo-1583337130417-3346a1be7dee"),
    description: "Carepack works with veterinarians to build formulations tailored to each species, improving compliance and therapeutic outcomes.",
    conditions: ["Feline hyperthyroidism", "Canine Cushing's", "Seizures", "Behavioral issues"],
    formulations: ["Flavored transdermal ear gels", "Flavored oral suspensions", "Chewable treats"],
  },
  {
    id: "weight-management",
    icon: Scale,
    accent: "#065f46",
    accentBg: "bg-emerald-50",
    title: "Weight Management",
    tagline: "Support for medically supervised programs.",
    photo: UP("photo-1490645935967-10de6ba17061"),
    description: "Carepack compounds within the scope of prescriber supervision to support evidence-based, medically managed weight loss.",
    conditions: ["Obesity with comorbidities", "Metabolic syndrome", "Appetite dysregulation"],
    formulations: ["Low-dose naltrexone (LDN)", "Appetite support troches", "Custom dose capsules"],
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* ─── TITLE AREA ─── */}
      <div className="bg-white border-b border-gray-200 pt-40 lg:pt-48 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Clinical Specialties
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We Compound What Commercial Pharmacies Can't.
          </p>
        </div>
      </div>

      {/* ─── GRID LAYOUT ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((spec) => (
            <div key={spec.id} className="group bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
              {/* Specific Photo Top Layer */}
              <div className="relative h-48 overflow-hidden">
                 <img src={spec.photo} alt={spec.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                      <spec.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-bold tracking-wide">{spec.title}</span>
                 </div>
              </div>
              
              {/* Content Layer */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm font-semibold mb-3" style={{ color: spec.accent }}>{spec.tagline}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {spec.description}
                </p>

                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-gray-900 flex items-center gap-1.5 mb-2">
                       <Stethoscope className="w-3.5 h-3.5 text-primary" /> Focus
                    </span>
                    <ul className="space-y-1">
                      {spec.conditions.slice(0, 3).map(c => (
                         <li key={c} className="text-xs text-gray-600 flex items-center gap-1.5">
                           <div className="w-1 h-1 rounded-full bg-gray-300" /> {c}
                         </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-gray-900 flex items-center gap-1.5 mb-2">
                       <FlaskConical className="w-3.5 h-3.5 text-primary" /> Forms
                    </span>
                    <ul className="space-y-1">
                      {spec.formulations.slice(0, 3).map(f => (
                         <li key={f} className="text-xs text-gray-600 flex items-center gap-1.5">
                           <div className="w-1 h-1 rounded-full bg-gray-300" /> {f}
                         </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
