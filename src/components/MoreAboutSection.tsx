const MoreAboutSection = () => {
  return (
    <section id="more-about" className="py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-display font-semibold tracking-widest uppercase text-accent mb-3">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            More About Me
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Earlier, I was a research associate at the leading Space Research Institute of the Russian Academy of Science (IKI). As part of the informatics research team at IKI, I analyzed satellite data. For my Ph.D. dissertation topic "Optimizing data distribution strategy for large-scale networks for the better local search", I wrote a network imitation model in both Pascal and C.
            </p>
            <p>
              For my project "to automatically predict events" based on dynamic web data, I applied graph DL algorithms to analyze data change dynamics.
            </p>
            <p>
              I earned my MS in Electrical Engineering from the Russian State University of Aerospace Technologies (Electrical Engineering and Aerospace Robotics).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutSection;
