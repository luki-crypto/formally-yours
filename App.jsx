import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, Phone, MapPin, Clock, ChevronRight, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", page: "Home" },
    { name: "Men's Collection", page: "MensCollection" },
    { name: "Boys Collection", page: "BoysCollection" },
    { name: "About", page: "About" },
    { name: "Contact", page: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <style>{`
        .font-display { font-family: 'Playfair Display', serif; font-weight: 700; }
      `}</style>

      {/* Top bar */}
      <div className="bg-[#1B2A4A] text-white/80 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> 064 663 7693
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Upper High Street, Killarney
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Mon–Sat: 10am–6pm</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="flex-shrink-0">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/9b5183504_logo-formally.png" 
                alt="Formally Yours" 
                className="h-12 sm:h-14 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    currentPageName === link.page
                      ? "text-[#6BA3D6]"
                      : "text-[#1B2A4A] hover:text-[#6BA3D6]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#1B2A4A]"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <nav className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                      currentPageName === link.page
                        ? "bg-[#6BA3D6]/10 text-[#6BA3D6]"
                        : "text-[#1B2A4A] hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1B2A4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69973ceab217fb056a31ad20/9b5183504_logo-formally.png" 
                alt="Formally Yours" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/60 text-sm leading-relaxed">
                Specializing in wedding rentals and suit sales, we provide expert styling for graduations, debs, and black-tie events. Whether you're hiring or buying, ask about our exclusive wedding party packages.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-white/70 hover:text-[#6BA3D6] text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                Visit Us
              </h3>
              <div className="space-y-3 text-sm text-white/70">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#6BA3D6] flex-shrink-0" />
                  Upper High Street, Killarney, Co. Kerry, V93 YTY2
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#6BA3D6] flex-shrink-0" />
                  064 663 7693
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#6BA3D6] flex-shrink-0" />
                  087 910 6933 (Alan)
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 text-[#6BA3D6] flex-shrink-0" />
                  Mon–Sat: 10:00am – 6:00pm
                </p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                  <a
                    href="https://www.facebook.com/formallyyours.ie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#6BA3D6] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/formallyyourskillarney"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#6BA3D6] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/30 text-xs">
            © {new Date().getFullYear()} Formally Yours Killarney. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}