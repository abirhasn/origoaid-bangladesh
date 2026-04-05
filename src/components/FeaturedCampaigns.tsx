import CampaignCard from "./CampaignCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { campaignsData } from "@/data/campaigns";

const FeaturedCampaigns = () => {
  return (
    <section id="campaigns" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Featured Campaigns
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Projects That Need Your Support
          </h2>
          <p className="text-muted-foreground mt-3">
            Discover impactful campaigns from across Bangladesh and help make a difference today.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaignsData.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="gap-2">
            View All Campaigns <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
