"use client";

import { 
  Thermometer, 
  Droplet, 
  Baby, 
  Sparkles, 
  Heart, 
  Activity,
  ArrowRight,
  Pill,
  ShieldCheck,
  Stethoscope
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = [
  { 
    name: "Pain Relief", 
    icon: Thermometer, 
    color: "bg-red-50 text-red-600", 
    border: "border-red-100", 
    count: 24,
    description: "Medications for headaches, muscle pain, and fever relief."
  },
  { 
    name: "Cold & Flu", 
    icon: Activity, 
    color: "bg-blue-50 text-blue-600", 
    border: "border-blue-100", 
    count: 18,
    description: "Cough syrups, nasal sprays, and flu symptom management."
  },
  { 
    name: "Digestive Health", 
    icon: Droplet, 
    color: "bg-green-50 text-green-600", 
    border: "border-green-100", 
    count: 15,
    description: "Antacids, probiotics, and relief for digestive discomfort."
  },
  { 
    name: "Skin Care", 
    icon: Sparkles, 
    color: "bg-pink-50 text-pink-600", 
    border: "border-pink-100", 
    count: 32,
    description: "Dermatologically tested creams, lotions, and treatments."
  },
  { 
    name: "Children's Medicine", 
    icon: Baby, 
    color: "bg-purple-50 text-purple-600", 
    border: "border-purple-100", 
    count: 12,
    description: "Gentle and effective medications specifically for kids."
  },
  { 
    name: "Vitamins & Supplements", 
    icon: Heart, 
    color: "bg-orange-50 text-orange-600", 
    border: "border-orange-100", 
    count: 45,
    description: "Daily multivitamins, minerals, and herbal supplements."
  },
  { 
    name: "First Aid", 
    icon: ShieldCheck, 
    color: "bg-teal-50 text-teal-600", 
    border: "border-teal-100", 
    count: 20,
    description: "Bandages, antiseptics, and essential emergency supplies."
  },
  { 
    name: "Medical Devices", 
    icon: Stethoscope, 
    color: "bg-zinc-50 text-zinc-600", 
    border: "border-zinc-100", 
    count: 10,
    description: "Thermometers, BP monitors, and health tracking tools."
  },
];

export default function CategoriesPage() {
  return (
    <div className="container px-4 py-12 md:px-8">
      <div className="max-w-3xl mb-16 space-y-4">
        <h1 className="text-4xl font-extrabold text-zinc-900 font-heading">Explore Categories</h1>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Find exactly what you need by browsing our specialized healthcare categories. All products are verified for quality and safety.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            href={`/shop?category=${cat.name}`}
            className="group flex flex-col p-8 rounded-3xl bg-white border border-zinc-100 transition-all hover:shadow-2xl hover:-translate-y-2 hover:border-teal-200"
          >
            <div className={`p-5 rounded-2xl w-fit ${cat.color} group-hover:scale-110 transition-transform mb-6 shadow-sm`}>
              <cat.icon className="h-8 w-8" />
            </div>
            <div className="space-y-3 mb-6">
               <h3 className="text-xl font-bold text-zinc-900 font-heading group-hover:text-teal-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {cat.description}
              </p>
            </div>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{cat.count} Items</span>
              <div className="rounded-full bg-zinc-50 p-2 text-zinc-400 group-hover:bg-teal-600 group-hover:text-white transition-all">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Banner */}
      <div className="mt-20 rounded-[40px] bg-zinc-900 p-12 relative overflow-hidden text-center md:text-left">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="max-w-xl space-y-4">
              <h2 className="text-3xl font-bold text-white font-heading leading-tight">
                Don&apos;t see what you&apos;re looking for?
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Our inventory is updated daily. You can search our full database or contact our support team to help you find specific medications.
              </p>
           </div>
           <Link href="/shop">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 h-14 px-8 rounded-full font-bold shadow-xl shadow-teal-500/20">
                Browse Full Shop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
           </Link>
        </div>
        {/* Abstract shapes */}
        <div className="absolute -top-24 -right-24 h-64 w-64 bg-teal-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-teal-600/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
