const ResearchSection = () => {
  return (
    <section id="research" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-display font-semibold tracking-widest uppercase text-accent mb-3">
            Deep Dive
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Multi-Agent Research
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Multi-Agent Cooperative Systems
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our research focuses on autonomous decentralized agents and the information exchange between them. We work on agent interaction policies that lead to more collaborative systems. The main methods are built on graph network (GNN) architectures, which provide a well-suited base for "networking" for multi-agent teams and swarms.
              </p>
              <p>
                We are also working on developing data-driven approaches that find optimal solutions to hard coordination problems involving resource allocation, path-finding, or graph optimization. Our solutions enable fast online decision-making, as typically required in robotics applications.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              MARL Frameworks
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Traditional multi-agent reinforcement learning (MARL) frameworks lack the ability to accommodate information exchange between agents by typically constraining agents to exchange "general" parameters. This enforced homogeneity limits cases where the task would benefit from heterogeneous behaviors.
              </p>
              <p>
                We focus on improving "free exchange" and heterogeneity in MARL policies using Graph Neural Networks as a base for training and information exchange. We have been in research since 2004 and focus on leveraging GNN for differentiable inter-agent communication since 2013.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Perspective Multi-Player Games
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The multi-agent platform for building complex multi-player gaming systems where players each have their own rules. Perspective games model multi-agent systems in which agents can view only the parts of the system that they own. We study richer and more realistic settings including games with more than two players, zero-sum games among coalitions, and non-zero-sum games with Nash equilibrium.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Extinct Animals — Who is Next?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              An AI-based system that knows the current condition of animal species and can predict with accuracy when an animal goes extinct and what to do. As time is running out for many species, we try to find ways to stop extinction with the help of the open-source community via various AI projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
