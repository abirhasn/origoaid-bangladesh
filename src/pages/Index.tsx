import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCampaigns from "@/components/FeaturedCampaigns";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedCampaigns />
      <HowItWorks />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
