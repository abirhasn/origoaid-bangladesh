import CampaignCard from "./CampaignCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const campaigns = [
  {
    title: "Clean Water for Sylhet Villages",
    description: "Providing safe drinking water to 500 families in remote areas of Sylhet through tube well installations.",
    image: "https://images.unsplash.com/photo-1594398901394-4e34939a02eb?w=600&h=400&fit=crop",
    raised: 285000,
    goal: 500000,
    daysLeft: 18,
    category: "Community",
  },
  {
    title: "Girls' Education Fund - Rangpur",
    description: "Supporting 200 girls in Rangpur with scholarships, books, and school supplies for a full academic year.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    raised: 420000,
    goal: 600000,
    daysLeft: 25,
    category: "Education",
  },
  {
    title: "Mobile Health Clinic - Char Areas",
    description: "A floating medical clinic bringing healthcare to flood-prone char communities in the Brahmaputra.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
    raised: 780000,
    goal: 1200000,
    daysLeft: 32,
    category: "Healthcare",
  },
  {
    title: "Tech Skills for Youth - Dhaka",
    description: "Free coding bootcamp for 100 underprivileged youth in Dhaka to build careers in technology.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    raised: 150000,
    goal: 350000,
    daysLeft: 40,
    category: "Startup",
  },
  {
    title: "Flood Relief - Northern Bangladesh",
    description: "Emergency relief and rehabilitation for families affected by monsoon floods in northern districts.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
    raised: 950000,
    goal: 1000000,
    daysLeft: 5,
    category: "Emergency",
  },
  {
    title: "Organic Farming Co-op - Khulna",
    description: "Establishing an organic farming cooperative for 50 small farmers in the Khulna region.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop",
    raised: 88000,
    goal: 400000,
    daysLeft: 45,
    category: "Agriculture",
  },
];

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
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.title} {...campaign} />
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
