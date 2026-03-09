import { Search, GitBranch, Zap, ShieldCheck, Building2 } from "lucide-react";

const sprints = [
  {
    icon: GitBranch,
    title: "De-Risking Sprint",
    badge: "Primary",
    description: "A focused 2-week engagement to validate your most uncertain technical decisions with working prototypes, load tests, and architecture decision records.",
  },
  {
    icon: Building2,
    title: "Architecture Sprint",
    badge: null,
    description: "A deep, time-boxed sprint to design or restructure your system architecture — from data pipelines and model serving to API contracts and deployment topology.",
  },
];

const services = [
  {
    icon: Search,
    title: "Architecture Audit",
    description: "Deep-dive into your GenAI stack — LLM orchestration, RAG pipelines, prompt management, and infrastructure. Identify risks before they become costly.",
  },
  {
    icon: Zap,
    title: "Production Readiness",
    description: "Get your GenAI app from demo to production. Observability, guardrails, cost optimization, and scalability patterns baked into your architecture.",
  },
  {
    icon: ShieldCheck,
    title: "Team Enablement",
    description: "Upskill your engineering team on GenAI best practices — from prompt engineering to evaluation frameworks and responsible AI patterns.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-display font-semibold tracking-widest uppercase text-accent mb-3">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Reduce risk, ship faster.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every engagement is time-boxed and outcome-driven. You get clarity, not slide decks.
          </p>
        </div>

        {/* Sprint cards — featured */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {sprints.map((sprint, i) => (
            <div
              key={sprint.title}
              className="group relative rounded-xl border-2 border-accent/30 bg-card p-8 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              {sprint.badge && (
                <span className="absolute top-4 right-4 text-xs font-display font-semibold tracking-wider uppercase bg-accent/10 text-accent px-3 py-1 rounded-full">
                  {sprint.badge}
                </span>
              )}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <sprint.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {sprint.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {sprint.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting services */}
        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-card p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
