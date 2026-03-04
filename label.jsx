import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featured = [
  { name: "James Navy Suit", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/f85347edf_JamesNavy_5Button_0014_2000x.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/cc562b709_JamesNavy_5Button_0038_2000x.jpg", category: "Benetti", brand: "Benetti" },
  { name: "James Black Suit", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/482b8d48f_JamesBlack_5Button_0018_2000x.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/53d155612_JamesBlack_5Button_0049_3b929982-63e0-4631-ac26-3b867496fac4_2000x.jpg", category: "Benetti", brand: "Benetti" },
  { name: "Albert Stone", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/e44e8c2ae_stone2.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/8a27dc6e1_stone1.jpg", category: "Benetti", brand: "Benetti" },
  { name: "Albert Sage", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/c199401ad_sage2.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/c8ab18d8b_sage1.jpg", category: "Benetti", brand: "Benetti" },
];

export default function FeaturedSection() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#6BA3D6] text-sm font-medium tracking-[0.3em] uppercase mb-3">
              Our Selection
            </p>
            <h2 className="font-display text-[#1B2A4A] text-3xl sm:text-4xl">
              Featured Suits
            </h2>
          </div>
          <Link
            to={createPageUrl("MensCollection")}
            className="hidden sm:flex items-center gap-2 text-[#6BA3D6] text-sm font-medium hover:text-[#1B2A4A] transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {item.image2 && (
                  <img
                    src={item.image2}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                )}
              </div>
              <p className="text-[#6BA3D6] text-xs font-medium tracking-wider uppercase mb-1">
                {item.category}
              </p>
              <h3 className="text-[#1B2A4A] font-medium text-sm sm:text-base">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            to={createPageUrl("MensCollection")}
            className="inline-flex items-center gap-2 text-[#6BA3D6] text-sm font-medium"
          >
            View Full Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}