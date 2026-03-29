const projects = [
  {
    title: "Personalized Smart Assistants",
    tag: "Biotech",
    description:
      'Built an AI assistant offering a "Pandora" like on-demand food discovery, recommendation, and delivery in "one click" personalized by person and location. (Launched, funded)',
  },
  {
    title: "Decentralized Cap Market Platform",
    tag: "Distributed Systems",
    description:
      "Building one of the first-of-its-kind platforms where a company equity is split into digital shares and offered up to buyers via the app-based \"smart\" exchange. (Stealth)",
  },
  {
    title: "Specialized Health K-Engines",
    tag: "Biotech",
    description:
      "Developing vertical search and recommendation knowledge engines for specific health conditions. They can power the specialized AIs. (Custom-built inference engines)",
  },
  {
    title: "CryptoAlpha",
    tag: "Crypto",
    description:
      "Built an AI tool to derive price signals for major digital assets by tracking price actions on 62 exchanges, monitoring major networks and social media. AI bot helped predict trade spikes and price.",
  },
  {
    title: "Art Value Predictive Engine",
    tag: "ML",
    description:
      'Prototyped a platform that uses ML and statistical modeling to deliver intelligence for art investment. The AI creates instant automatic art valuations for the "blue-chip" artworks.',
  },
  {
    title: "Cross-Border Payment Network",
    tag: "FinTech",
    description:
      "Payment processing system for $2 trillion/Y in cross-border payments. Introduced an open payment network for 13M businesses as an alternative to SWIFT.",
  },
  {
    title: "Predixo - Predictive Engine",
    tag: "Web Data",
    description:
      "A web-wide platform for data monitoring and prediction to help users detect automatically new events before they become visible. Certain assets were acquired by GE (became GE Predix).",
  },
  {
    title: "I-Virtual",
    tag: "Social Network",
    description:
      'Reinventing online social networking with smart "multi-faceted" personal profiles, specialized models and inference engines.',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-display font-semibold tracking-widest uppercase text-accent mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A track record of shipping AI-powered products across biotech, fintech, and distributed systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <span className="self-start text-xs font-display font-semibold tracking-wider uppercase bg-accent/10 text-accent px-3 py-1 rounded-full mb-4">
                {project.tag}
              </span>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
