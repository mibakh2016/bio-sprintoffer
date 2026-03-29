import { Award, Presentation, FileCheck, Monitor } from "lucide-react";

const references = [
  {
    icon: Presentation,
    title: "WWW2013 Annual Conference",
    description:
      "The first time we announced our AI (IP) method for life-sciences was at the WWW conference, the yearly main international academic conference on future direction of the WWW since invention of the Web.",
  },
  {
    icon: Monitor,
    title: "Blockchain Nation (Miami 2018)",
    description:
      "Introducing the first fully-functional blockchain-based B2B payment processing and lending network to 3,000 attendees of one of the central decentralized system events in USA.",
  },
  {
    icon: Award,
    title: "USA Patent Granted 2019",
    description:
      '"(AI) method and system for medical (plants) and treatment selection." Getting awarded the first US patent in the complex AI methods field.',
  },
  {
    icon: FileCheck,
    title: "FinTech Finovate Summit 2018 • New York",
    description:
      "Live demo for the Wall Street community: Credit score for any business and Web3-based B2B lending powered by AI. An open score for 13M companies with business and consumer KYC.",
  },
];

const ReferencesSection = () => {
  return (
    <section id="references" className="py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-display font-semibold tracking-widest uppercase text-accent mb-3">
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Selected References
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {references.map((ref) => (
            <div
              key={ref.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <ref.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {ref.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {ref.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
