"use client";

import { 
  ShieldCheck, 
  Truck, 
  Users, 
  Award, 
  Activity, 
  CheckCircle2,
  Heart
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Founded", value: "2024" },
  { label: "Verified Sellers", value: "250+" },
  { label: "Medicines", value: "10k+" },
  { label: "Cities Covered", value: "50+" },
];

const values = [
  {
    title: "Unmatched Quality",
    description: "Every medication on our platform undergoes a rigorous 3-step verification process by medical experts.",
    icon: ShieldCheck,
    color: "bg-teal-500",
  },
  {
    title: "Swift Delivery",
    description: "Our logistics network ensures life-saving medications reach you in record time, safely and securely.",
    icon: Truck,
    color: "bg-blue-500",
  },
  {
    title: "Patient First",
    description: "We design every feature with the patient in mind, ensuring accessibility and affordability for all.",
    icon: Heart,
    color: "bg-red-500",
  },
  {
    title: "Professional Network",
    description: "Connecting you with the most trusted pharmacies and healthcare providers across the country.",
    icon: Users,
    color: "bg-purple-500",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-zinc-950">
        <div className="container relative z-10 px-4 md:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white font-heading leading-tight">
              Revolutionizing <br />
              <span className="text-teal-400">Healthcare Delivery.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
              MediStore is more than an online pharmacy. We are a technology-driven healthcare ecosystem dedicated to making authentic medications accessible to everyone, everywhere.
            </p>
          </div>
        </div>
        
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-b border-zinc-100">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2 text-center md:text-left">
                <p className="text-4xl md:text-5xl font-black text-zinc-900 font-heading">{stat.value}</p>
                <p className="text-sm font-bold text-teal-600 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-zinc-50">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[60px] bg-teal-600 overflow-hidden shadow-2xl rotate-3">
                <Image 
                  src="/images/medical_hero_banner_1776588021141.png"
                  alt="Our Mission"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white rounded-[40px] shadow-2xl p-8 -rotate-6 hidden md:flex flex-col justify-center gap-4">
                 <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
                    <Activity className="h-6 w-6" />
                 </div>
                 <p className="font-bold text-zinc-900 leading-tight">Improving lives through technology.</p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 font-heading">Our Mission</h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  To provide a seamless, secure, and transparent platform that bridges the gap between patients and verified medical providers, ensuring no one is ever more than a click away from the care they need.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   "Direct from verified pharmacies",
                   "Real-time inventory tracking",
                   "Expert medical consultation",
                   "Fastest delivery guarantee"
                 ].map((item) => (
                   <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <span className="font-bold text-zinc-700 text-sm">{item}</span>
                   </div>
                 ))}
              </div>

              <Button size="lg" className="bg-zinc-900 hover:bg-zinc-800 h-14 px-8 rounded-2xl font-bold">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 font-heading">Our Core Values</h2>
            <p className="text-zinc-500 text-lg font-medium">The principles that guide every decision we make at MediStore.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="group p-8 rounded-[40px] bg-zinc-50 hover:bg-white border border-transparent hover:border-zinc-100 hover:shadow-2xl transition-all duration-500">
                <div className={`h-14 w-14 rounded-2xl ${value.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 font-heading">{value.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 container px-4 md:px-8">
        <div className="bg-teal-600 rounded-[60px] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-heading relative z-10">
            Be Part of the <br /> Healthcare Future.
          </h2>
          <p className="text-teal-50 text-xl max-w-2xl mx-auto opacity-90 relative z-10">
            Whether you're a patient looking for care or a pharmacy looking to grow, MediStore is here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 h-16 px-12 rounded-full font-bold text-lg">
              Start Shopping
            </Button>
            <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white h-16 px-12 rounded-full font-bold text-lg border-none">
              Join as a Seller
            </Button>
          </div>
          
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
             <div className="absolute bottom-10 right-10 w-64 h-64 border-8 border-white rounded-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
