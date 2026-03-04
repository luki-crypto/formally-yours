import React from "react";
import { motion } from "framer-motion";

export default function SuitCard({ name, image, image2, category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="group"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#F5F7FA] mb-4 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        {image2 && (
          <img
            src={image2}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        )}
      </div>
      {category && (
        <p className="text-[#6BA3D6] text-xs font-medium tracking-wider uppercase mb-1">
          {category}
        </p>
      )}
      <h3 className="text-[#1B2A4A] font-medium text-sm sm:text-base">
        {name}
      </h3>
    </motion.div>
  );
}