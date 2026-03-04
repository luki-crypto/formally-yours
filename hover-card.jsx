import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Murphy",
    rating: 5,
    text: "Excellent service from Alan and his team. My son looked amazing for his debs in his suit from Formally Yours. Great selection and very helpful staff!",
    date: "2 months ago"
  },
  {
    name: "John O'Sullivan",
    rating: 5,
    text: "Brilliant experience from start to finish. Got fitted for my wedding suit here and couldn't be happier. Alan really knows his stuff and made sure everything was perfect.",
    date: "3 months ago"
  },
  {
    name: "Emma Doyle",
    rating: 5,
    text: "Highly recommend! Got our full wedding party sorted here. Great quality suits, reasonable prices, and fantastic customer service. Thank you!",
    date: "4 months ago"
  },
  {
    name: "Michael Collins",
    rating: 5,
    text: "Best suit shop in Killarney by far. Alan went above and beyond to help me find the perfect suit for a special occasion. Will definitely be back!",
    date: "5 months ago"
  },
  {
    name: "Katie Ryan",
    rating: 5,
    text: "My partner hired his groomsmen suits here and they all looked incredible. Professional service and beautiful quality. Would highly recommend to anyone!",
    date: "6 months ago"
  },
  {
    name: "David McCarthy",
    rating: 5,
    text: "Outstanding service! Got my son's communion suit here and the staff were so patient and helpful. Great experience all round.",
    date: "7 months ago"
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-20 px-4 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6BA3D6] text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-[#1B2A4A] text-3xl sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-[#1B2A4A] font-medium">5.0 on Google</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-[#6BA3D6]/30 mb-4" />
              
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-[#1B2A4A] text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-[#1B2A4A] font-medium text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.date}</p>
                </div>
                <img 
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png" 
                  alt="Google" 
                  className="h-4 opacity-60"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=formally+yours+killarney"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#6BA3D6] hover:text-[#1B2A4A] transition-colors text-sm font-medium"
          >
            Read more reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}