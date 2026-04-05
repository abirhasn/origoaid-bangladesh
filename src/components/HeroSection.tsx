import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Bangladesh landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 backdrop-blur-sm border border-primary/30">
            <Heart size={14} className="text-primary-foreground" />
            Bangladesh's Own Crowdfunding Platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Empowering Dreams,{" "}
            <span className="text-primary">One Campaign</span> at a Time
          </h1>

          <p className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
            OrigoAid connects changemakers across Bangladesh with supporters worldwide.
            Fund education, healthcare, startups, and community projects that matter.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#campaigns">
              <Button size="lg" className="gap-2 text-base px-8">
                Explore Campaigns <ArrowRight size={18} />
              </Button>
            </a>
            <Link to="/start-campaign">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Start Fundraising
              </Button>
            </Link>
          </div>

          <div className="flex gap-8 pt-6">
            {[
              { value: "৳12.5M+", label: "Raised" },
              { value: "850+", label: "Campaigns" },
              { value: "25K+", label: "Donors" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
