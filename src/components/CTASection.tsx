import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-10 sm:p-16 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
              <Megaphone size={28} className="text-primary-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
              Have a Cause? Start Your Campaign Today
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Whether it's for education, health, community development, or disaster relief — 
              OrigoAid gives you the tools to rally support from across Bangladesh and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-base px-8"
              >
                Start a Campaign <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-base px-8 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
