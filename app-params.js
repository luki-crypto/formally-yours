import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedSection from "../components/home/FeaturedSection";
import BoysPreview from "../components/home/BoysPreview";
import ReviewsSection from "../components/home/ReviewsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <BoysPreview />
      <ReviewsSection />
      <CTASection />
    </div>
  );
}