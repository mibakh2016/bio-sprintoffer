const Expertise = () => {
  return (
    <div className="min-h-screen bg-primary">
      <div className="container pt-24">
        <h1 className="text-4xl font-bold text-primary-foreground mb-8">Our Expertise</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
            <h2 className="text-xl font-semibold text-primary-foreground mb-4">AI Architecture</h2>
            <p className="text-primary-foreground/70">
              Designing scalable and robust AI systems tailored to your specific business needs.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
            <h2 className="text-xl font-semibold text-primary-foreground mb-4">Machine Learning</h2>
            <p className="text-primary-foreground/70">
              Implementing state-of-the-art machine learning models to drive predictive insights.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
            <h2 className="text-xl font-semibold text-primary-foreground mb-4">Data Strategy</h2>
            <p className="text-primary-foreground/70">
              Transforming raw data into actionable intelligence through advanced analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
