import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-[#1B2A4A]">
      <div className="absolute inset-0">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6980293d42b7c3a9f9488efe/59624b280_Marco_Indigo_with_Albert_Silver_01_800x.jpg"
          alt="Formal suits"
          className="w-full h-full object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A] via-[#1B2A4A]/80 to-transparent" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-[#6BA3D6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Killarney's Premier Suit Specialists
          </p>
          <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
            Dress for Every
            <br />
            Occasion
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
            Wedding suits, formal wear, and tuxedo hire. Package deals available for wedding parties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={createPageUrl("MensCollection")}
              className="inline-flex items-center justify-center gap-2 bg-[#6BA3D6] hover:bg-[#5A92C5] text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm"
            >
              View Collection <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm"
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}