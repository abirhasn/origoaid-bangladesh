const stats = [
  { value: "৳12.5M+", label: "Total Raised", sub: "and counting" },
  { value: "850+", label: "Campaigns Funded", sub: "across 64 districts" },
  { value: "25,000+", label: "Generous Donors", sub: "from Bangladesh & abroad" },
  { value: "94%", label: "Success Rate", sub: "campaigns reach their goal" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm font-semibold opacity-90">{stat.label}</div>
              <div className="text-xs opacity-60 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
