import React, { useState } from "react";
import { motion } from "framer-motion";
import SuitCard from "../components/collection/SuitCard";

const suits = [
  // Benetti Suits
  { name: "James Navy Suit", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/f85347edf_JamesNavy_5Button_0014_2000x.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/cc562b709_JamesNavy_5Button_0038_2000x.jpg", category: "Benetti", brand: "Benetti" },
  { name: "James Black Suit", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/482b8d48f_JamesBlack_5Button_0018_2000x.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/53d155612_JamesBlack_5Button_0049_3b929982-63e0-4631-ac26-3b867496fac4_2000x.jpg", category: "Benetti", brand: "Benetti" },
  { name: "Albert Stone", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/e44e8c2ae_stone2.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/8a27dc6e1_stone1.jpg", category: "Benetti", brand: "Benetti" },
  { name: "Albert Sage", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/c199401ad_sage2.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/c8ab18d8b_sage1.jpg", category: "Benetti", brand: "Benetti" },
  
  { name: "Johnny Charcoal", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/2a01060b2_johnnycharcoal1.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/1d75a9ff9_johnnycharcoal2.jpg", category: "Benetti", brand: "Benetti" },
  { name: "Peter Petrol", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/438342c20_peter-petrol-fixe.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/20c9ac889_peterpetrol-2.jpg", category: "Benetti", brand: "Benetti" },

  // Skopes Suits
  { name: "Hardcourt Navy", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/dc77d1247_mm1097_full_suit_01_1_1.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/5c5301c68_mm1097_01.jpg", category: "Skopes", brand: "Skopes" },
  { name: "Hardcourt Grey", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/f0e3f2be4_mm1090_full_suit_01_a_1_1.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/d291c04ec_mm1090_01_a_1.jpg", category: "Skopes", brand: "Skopes" },
  { name: "Hardcourt Silver", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/f6a4b06e9_mm3393_full_suit_01_1_1.jpg", image2: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/c71399b96_mm3393_01_2.jpg", category: "Skopes", brand: "Skopes" },
];

const waistcoats = [
  { name: "Jeff Sky", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/dcacef9c8_Jeff_Blue_01_0e13718d-b6bc-4ae4-b256-29397109b2bf_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Jeff Blush", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/e8ea50afb_Jeff_Blush_01_54b9930b-fb85-428a-9732-caded7682f24_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Jeff Sage", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/31e4b2e2c_Jeff_Sage_01_cff4efad-1f00-41c2-bb74-0136f3118159_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Jeff Stone", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/ec8837d66_Jeff_Stone_01_0264a9ca-68f1-4aac-a4fd-a9fe037a01e0_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Albert Blush", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/97e253f08_Alber_Blush_01_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Albert Sky", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/bb683e7f1_Albert_Blue_01_1600x.jpg", category: "Waistcoats", brand: "Benetti" },

  { name: "Albert Silver", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/74565849d_Albert_Silver_01_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Edmund Sky", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/08b5d7c26_Edmund_Blue_01_2000x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Edmund Silver", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/d8b61f324_Edmund_Silver_01_0b30de3f-6173-40f8-9947-73047715d6f7_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Edmund Stone", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/bcd645641_Edmund_Stone_01_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "George Sky", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/3b7c8f4f5_George_Blue_01_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "George Silver", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/19d638834_George_Silver_01_f0993cd6-4fc3-4124-8eb1-637aef673df6_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "George Stone", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/1c689df90_George_Stone_01_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Phillip Blue", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/ff65e15f5_Philip_Blue_01_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Phillip Stone", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/dd704c222_Philip_Stone_01_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Austin", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/36741b9e8_Austin_Navy_01_2000x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Austin Double Breasted", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/f2b26e207_Austin_Navy_01_B_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Austin Notch", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/7814b994a_Austin_Navy_C_01_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Satin Black", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/3dc7cc806_Satin_Black_01_2000x.jpg", category: "Waistcoats", brand: "Benetti" },
  { name: "Satin Black DB", image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/4b2e0ae95_Satin_Black_B_01_1600x.jpg", category: "Waistcoats", brand: "Benetti" },
];

const productCategories = ["All", "Suits", "Waistcoats"];
const brands = ["All", "Benetti", "Skopes"];

export default function MensCollection() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [brandFilter, setBrandFilter] = useState("All");

  const allItems = [...suits, ...waistcoats];
  const filtered = allItems.filter((item) => {
    const matchesCategory = categoryFilter === "All" || 
      (categoryFilter === "Suits" && (item.category === "Benetti" || item.category === "Skopes")) ||
      (categoryFilter === "Waistcoats" && item.category === "Waistcoats");
    const matchesBrand = brandFilter === "All" || item.brand === brandFilter;
    return matchesCategory && matchesBrand;
  });

  return (
    <div>
      {/* Hero banner */}
      <section className="bg-[#1B2A4A] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#6BA3D6] text-sm font-medium tracking-[0.3em] uppercase mb-3">
              Premium Brands
            </p>
            <h1 className="font-display text-white text-4xl sm:text-5xl mb-4">
              Men's Collection
            </h1>
            <p className="text-white/50 max-w-lg mx-auto">
              Browse our curated selection of premium suits for weddings, formal events, and everyday elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-sm font-medium text-[#1B2A4A] mr-2">Category:</span>
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    categoryFilter === cat
                      ? "bg-[#1B2A4A] text-white"
                      : "bg-[#F5F7FA] text-[#1B2A4A] hover:bg-[#E8ECF1]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Brand Filter */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-sm font-medium text-[#1B2A4A] mr-2">Brand:</span>
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setBrandFilter(brand)}
                  className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    brandFilter === brand
                      ? "bg-[#1B2A4A] text-white"
                      : "bg-[#F5F7FA] text-[#1B2A4A] hover:bg-[#E8ECF1]"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filtered.map((suit, i) => (
              <SuitCard
                key={suit.name}
                name={suit.name}
                image={suit.image}
                image2={suit.image2}
                category={suit.category}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}