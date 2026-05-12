import { BlogSection } from "@/components/BlogSection";
import { DiscoverPlaces } from "@/components/DiscoverPlaces";
import { ExploreCities } from "@/components/ExploreCities";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialSection } from "@/components/TestimonialSection";


export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>

      <HeroSection />
      <FeaturedCategories />
      <ProcessSection />
      <ExploreCities />
      <DiscoverPlaces />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
}
