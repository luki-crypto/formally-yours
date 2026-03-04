import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#1B2A4A]">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6980293d42b7c3a9f9488efe/63eb87d5c_MarcoDB04_800x.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl mb-6">
          Your Perfect Suit Awaits
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Visit our Killarney store for expert fitting and personalised service. 
          Package deals available for wedding parties.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 bg-[#6BA3D6] hover:bg-[#5A92C5] text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm"
          >
            Get In Touch
          </Link>
          <a
            href="tel:0646637693"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <Phone className="w-4 h-4" />
            064 663 7693
          </a>
        </div>
      </div>
    </section>
  );
}