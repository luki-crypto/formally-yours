import React, { useState } from "react";
import { motion } from "framer-motion";
import SuitCard from "../components/collection/SuitCard";

const boysSuits = [
  {
    name: "Boys Peter Petrol",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/1311a8b9a_PeterPetrol_0013_2000x.jpg",
    image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/f65801782_PeterPetrol_0036_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys James Navy",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/9c2ab1b96_BoysJamesNavySuit.jpg",
    image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/fffbd6a98_BoysJamesNavySuit2.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Lucas Stone Jacket",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/044cc28b1_Boys_Lucas_Stone_Jacket_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Lucas Stone WC",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/b3fe24e5d_Boys_Lucas_Stone_WC_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Lucas Blue Jacket",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/c29be72f4_Boys_Lucas_Blue_Jacket_01_2000x.jpg",
    image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/c29be72f4_Boys_Lucas_Blue_Jacket_01_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Lucas Blue WC",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/c8dcba2dd_Boys_Lucas_Blue_Waistcoat_2000x.jpg",
    image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/c8dcba2dd_Boys_Lucas_Blue_Waistcoat_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Lucas Sage Jacket",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/0b06addb3_Lucas_Sage_01_J_897a0d97-582e-4e62-aee2-018d5bbf9532_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Lucas Sage WC",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/89a79068f_Lucas_Sage_01_W_aab4e38d-f107-43e2-80c0-1b518d0f379c_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Albert Sky Jacket",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/0be61a127_Boys_Albert_Sky_Jacket_01_2000x.jpg",
    image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/0be61a127_Boys_Albert_Sky_Jacket_01_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Albert Sky WC",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/b17012a54_Albert_Blue_01_W_fb38765f-75bf-4578-a918-2e0c2820344d_2000x.jpg",
    image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/b17012a54_Albert_Blue_01_W_fb38765f-75bf-4578-a918-2e0c2820344d_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Albert Sage WC",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/e45d90aa6_Albert_Sage_01_W_2000x.jpg",
    image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/e45d90aa6_Albert_Sage_01_W_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Albert Stone WC",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/206e4ae66_Albert_Stone_01_W_2000x.jpg",
    image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/206e4ae66_Albert_Stone_01_W_2000x.jpg",
    category: "Benetti",
  },
  {
    name: "Boys Albert Silver WC",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/bef0c903c_Boys_Albert_Silver_WC_2000x.jpg",
    image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/bef0c903c_Boys_Albert_Silver_WC_2000x.jpg",
    category: "Benetti",
  },
];

const filterCategories = ["All", "Suits", "Jackets", "Waistcoats"];

export default function BoysCollection() {
  const [filter, setFilter] = useState("All");

  const filteredSuits = boysSuits.filter((suit) => {
    if (filter === "All") return true;
    if (filter === "Suits") return !suit.name.includes("Jacket") && !suit.name.includes("WC");
    if (filter === "Jackets") return suit.name.includes("Jacket");
    if (filter === "Waistcoats") return suit.name.includes("WC");
    return true;
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#1B2A4A] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#6BA3D6] text-sm font-medium tracking-[0.3em] uppercase mb-3">
                By Benetti
              </p>
              <h1 className="font-display text-white text-4xl sm:text-5xl mb-4">
                Boys Collection
              </h1>
              <p className="text-white/50 max-w-md leading-relaxed">
                Stylish suits for the young gentlemen. Perfect for communions, 
                weddings, and all special occasions.
              </p>
            </motion.div>
          </div>
          <div className="h-64 lg:h-auto">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6980293d42b7c3a9f9488efe/b4bf9a6d2_Benetti_Boyswear_2026_1600x.jpg"
              alt="Boys collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#1B2A4A] text-white"
                    : "bg-[#F5F7FA] text-[#1B2A4A] hover:bg-[#E8ECF1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredSuits.map((suit, i) => (
              <SuitCard
                key={suit.name}
                name={suit.name}
                image={suit.image}
                image2={suit.image2}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle banner */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden h-[400px]">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6980293d42b7c3a9f9488efe/fd4ba7e99_Boys_Suits_By_Benetti_Menswear_eb9af068-36a8-40d7-b0a8-4602e2f9bdc2_1600x.jpg"
              alt="Boys lifestyle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 to-transparent flex items-end p-8 sm:p-12">
              <div>
                <h3 className="font-display text-white text-2xl sm:text-3xl mb-2">
                  Made for Every Moment
                </h3>
                <p className="text-white/70 max-w-md">
                  From page boy duties to first communions, our boys' range has every occasion covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}