import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BoysPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#6BA3D6] text-sm font-medium tracking-[0.3em] uppercase mb-3">
              Boys Collection
            </p>
            <h2 className="font-display text-[#1B2A4A] text-3xl sm:text-4xl mb-6">
              Little Gentlemen,
              <br />
              Big Style
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              From communion suits to wedding page boys, our boys' collection by Benetti ensures 
              the younger members of the party look just as sharp as the rest.
            </p>
            <Link
              to={createPageUrl("BoysCollection")}
              className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#2A3D5F] text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm"
            >
              View <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6980293d42b7c3a9f9488efe/5a2f87a9c_Benetti_Boyswear_For_Spring_Summer_1600x.jpg"
                alt="Boys suits"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6980293d42b7c3a9f9488efe/fd4ba7e99_Boys_Suits_By_Benetti_Menswear_eb9af068-36a8-40d7-b0a8-4602e2f9bdc2_1600x.jpg"
                alt="Boys collection"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}