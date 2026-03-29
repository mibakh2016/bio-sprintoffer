import { Brain, Share2, BarChart3 } from "lucide-react";

const rdAreas = [
  {
    icon: Brain,
    title: "Multi-Agent Systems",
    description:
      "Developing non-biased assistants across any specific knowledge domain with our new approach to data curation and processing.",
    bullets: [
      "Agents theory",
      "Software agents and the web",
      "Agent-based AI architectures",
    ],
  },
  {
    icon: Share2,
    title: "Knowledge Graphs",
    description:
      "Adding Semantic (ontologies, knowledge representation) to Training Data allows to build lots of powerful useful gen AI applications. Now focusing on leading this vision to its full potential.",
    bullets: [],
  },
  {
    icon: BarChart3,
    title: "Reinforcement Learning",
    description:
      "We work on proprietary MARL frameworks for accelerated agent training. The models can be trained faster with our proprietary MARL framework for accelerated training.",
    bullets: [
      "MAS related to AI Modelling",
      'GNN-based "free info exchange"',
    ],
  },
];

const RDAreasSection = () => {
  return (
    <section id="rd-areas" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-display font-semibold tracking-widest uppercase text-accent mb-3">
            Research
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            R&D Areas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pushing the boundaries of multi-agent systems, knowledge representation, and reinforcement learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rdAreas.map((area) => (
            <div
              key={area.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                {area.description}
              </p>
              {area.bullets.length > 0 && (
                <ul className="space-y-2">
                  {area.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RDAreasSection;
