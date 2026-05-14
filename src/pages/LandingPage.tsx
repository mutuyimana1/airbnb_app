import DiscoverPlaces from "@/components/DiscoverPlaces";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialSection } from "@/components/TestimonialSection";


export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>

      <HeroSection />
      {/* <FeaturedCategories /> */}
      <DiscoverPlaces/>
      <ProcessSection />
      <TestimonialSection />
    </div>
  );
}
