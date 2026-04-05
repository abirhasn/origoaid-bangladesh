import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const categories = ["Education", "Healthcare", "Community", "Startup", "Agriculture", "Emergency", "Environment", "Technology"];

const StartCampaign = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    goal: "",
    duration: "",
    location: "",
    description: "",
    organizer: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Campaign Submitted!",
      description: "Your campaign is under review. We'll notify you once it's approved.",
    });
    setTimeout(() => navigate("/"), 2000);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Start Your Campaign
            </h1>
            <p className="text-muted-foreground mt-2">
              Tell us about your cause and start raising funds today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 sm:p-8 rounded-xl border border-border">
            <div className="space-y-2">
              <Label htmlFor="title">Campaign Title</Label>
              <Input
                id="title"
                placeholder="Give your campaign a clear, compelling title"
                value={formData.title}
                onChange={(e) => updateField("title", e.target.value)}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select onValueChange={(v) => updateField("category", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat.toLowerCase()}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g. Dhaka, Sylhet"
                  value={formData.location}
                  onChange={(e) => updateField("location", e.target.value)}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="goal">Fundraising Goal (৳)</Label>
                <Input
                  id="goal"
                  type="number"
                  placeholder="e.g. 500000"
                  value={formData.goal}
                  onChange={(e) => updateField("goal", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (days)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="e.g. 30"
                  value={formData.duration}
                  onChange={(e) => updateField("duration", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organizer">Organizer Name</Label>
              <Input
                id="organizer"
                placeholder="Your name or organization"
                value={formData.organizer}
                onChange={(e) => updateField("organizer", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Campaign Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your campaign, its goals, and how the funds will be used..."
                rows={6}
                value={formData.description}
                onChange={(e) => updateField("description", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Campaign Image</Label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload size={32} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PNG, JPG up to 5MB
                </p>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full text-base gap-2">
              Submit Campaign <ArrowRight size={18} />
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StartCampaign;
