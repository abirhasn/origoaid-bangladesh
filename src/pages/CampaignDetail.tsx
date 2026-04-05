import { useParams, Link } from "react-router-dom";
import { campaignsData } from "@/data/campaigns";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2, MapPin, Users, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const CampaignDetail = () => {
  const { id } = useParams();
  const campaign = campaignsData.find((c) => c.id === id);
  const [donateAmount, setDonateAmount] = useState<number | null>(null);

  if (!campaign) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Campaign Not Found</h1>
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft size={16} /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const progress = Math.min((campaign.raised / campaign.goal) * 100, 100);
  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to campaigns
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl overflow-hidden aspect-video">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
                  {campaign.category}
                </span>
                {campaign.location && (
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin size={14} /> {campaign.location}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                {campaign.title}
              </h1>

              {campaign.organizer && (
                <p className="text-muted-foreground">
                  by <span className="font-semibold text-foreground">{campaign.organizer}</span>
                </p>
              )}

              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-foreground mb-3">About This Campaign</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {campaign.longDescription || campaign.description}
                </p>
              </div>
            </div>

            {/* Sidebar - Donation */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6 space-y-5 sticky top-24">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-2xl font-bold text-primary">
                      ৳{campaign.raised.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground self-end">
                      of ৳{campaign.goal.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  <div className="text-sm font-medium text-primary">
                    {Math.round(progress)}% funded
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-accent/50 rounded-lg p-3">
                    <Users size={18} className="mx-auto text-primary mb-1" />
                    <div className="text-lg font-bold text-foreground">{campaign.backers}</div>
                    <div className="text-xs text-muted-foreground">Backers</div>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-3">
                    <Clock size={18} className="mx-auto text-primary mb-1" />
                    <div className="text-lg font-bold text-foreground">{campaign.daysLeft}</div>
                    <div className="text-xs text-muted-foreground">Days Left</div>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-3">
                    <Calendar size={18} className="mx-auto text-primary mb-1" />
                    <div className="text-lg font-bold text-foreground">2024</div>
                    <div className="text-xs text-muted-foreground">Started</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">Select an amount (৳)</p>
                  <div className="grid grid-cols-3 gap-2">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setDonateAmount(amount)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                          donateAmount === amount
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card border-border text-foreground hover:border-primary"
                        }`}
                      >
                        ৳{amount.toLocaleString()}
                      </button>
                    ))}
                    <button
                      onClick={() => setDonateAmount(0)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium border transition-all ${
                        donateAmount === 0
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card border-border text-foreground hover:border-primary"
                      }`}
                    >
                      Custom
                    </button>
                  </div>

                  {donateAmount === 0 && (
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  )}
                </div>

                <Button size="lg" className="w-full text-base gap-2">
                  <Heart size={18} /> Donate Now
                </Button>

                <Button variant="outline" size="lg" className="w-full text-base gap-2">
                  <Share2 size={18} /> Share Campaign
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampaignDetail;
