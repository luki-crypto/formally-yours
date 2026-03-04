import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1B2A4A] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#6BA3D6] text-sm font-medium tracking-[0.3em] uppercase mb-3">
              Est. 2012
            </p>
            <h1 className="font-display text-white text-4xl sm:text-5xl mb-4">
              About Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6980293d42b7c3a9f9488efe/06a5e09a9_2026-02-1915_56_39-unnamed2webp.png"
                  alt="Formally Yours Killarney shopfront"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#6BA3D6] text-sm font-medium tracking-[0.3em] uppercase mb-3">
                Our Story
              </p>
              <h2 className="font-display text-[#1B2A4A] text-3xl sm:text-4xl mb-8">
                Formally Yours
                <br />
                Killarney
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Our shop opened in February 2012. We specialised in wedding rental and suit sales. 
                  We also cater for graduations, debs, black tie balls and occasional suit wear.
                </p>
                <p>
                  Package deals available for wedding parties for hire or sales.
                </p>
                <p>
                  Stocking premium brands including Benetti Menswear, we pride ourselves on offering 
                  the finest quality suiting in Kerry. Whether you're the groom, best man, or a guest, 
                  we'll ensure you look your absolute best.
                </p>
              </div>

              {/* Info cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F5F7FA] rounded-xl p-5">
                  <MapPin className="w-5 h-5 text-[#6BA3D6] mb-2" />
                  <p className="text-[#1B2A4A] font-medium text-sm">Location</p>
                  <p className="text-gray-500 text-sm mt-1">Upper High Street, Killarney, Co. Kerry, V93 YTY2</p>
                </div>
                <div className="bg-[#F5F7FA] rounded-xl p-5">
                  <Phone className="w-5 h-5 text-[#6BA3D6] mb-2" />
                  <p className="text-[#1B2A4A] font-medium text-sm">Phone</p>
                  <div className="text-gray-500 text-sm mt-1 space-y-0.5">
                    <p>064 663 7693</p>
                    <p>087 910 6933 (Alan)</p>
                    <p>formally-yours@hotmail.com</p>
                  </div>
                </div>
                <div className="bg-[#F5F7FA] rounded-xl p-5 sm:col-span-2">
                  <Clock className="w-5 h-5 text-[#6BA3D6] mb-2" />
                  <p className="text-[#1B2A4A] font-medium text-sm">Opening Hours</p>
                  <p className="text-gray-500 text-sm mt-1">Monday – Saturday: 10:00am – 6:00pm</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden h-[400px] bg-gray-100">
            <iframe
              title="Formally Yours Killarney Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.5!2d-9.510!3d52.059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4845594c3e9bffff%3A0x7e2b0a5e5e5e5e5e!2sHigh%20St%2C%20Killarney%2C%20Co.%20Kerry!5e0!3m2!1sen!2sie!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}