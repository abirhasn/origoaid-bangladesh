import { Search, HeartHandshake, Wallet, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse verified campaigns from communities across Bangladesh.",
  },
  {
    icon: HeartHandshake,
    title: "Support",
    description: "Choose a cause close to your heart and make a secure donation.",
  },
  {
    icon: Wallet,
    title: "Fund",
    description: "Funds go directly to campaign organizers via trusted payment channels.",
  },
  {
    icon: PartyPopper,
    title: "Impact",
    description: "Track progress and see the real-world impact of your contribution.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Simple Steps to Make a Difference
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <step.icon
                  size={28}
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                />
              </div>
              <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
