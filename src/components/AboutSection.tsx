const stats = [
  { value: "25+", label: "Years in Software Architecture" },
  { value: "100+", label: "GenAI Projects Delivered" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-display font-semibold tracking-widest uppercase text-accent mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Milla has 25+ years as a software architect and lead system designer, delivering architecture for autonomous tech and large-scale enterprise platforms. As former CTO of Lendindex, CA and other companies, she built reliable, high-performance architectures.
              </p>
              <p>
                She now designs production generative AI applications across the full stack:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span>Fine-tunes foundational models with LoRA; implements RAG using vector-graph DB and re-calibrating for precise retrieval.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span>Builds multi-agent systems, including tool use, memory, and human-in-the-loop safeguards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span>Deploys apps that scale to handle thousands of users per second on cloud platforms such as AWS Bedrock or Vercel, using smart techniques to speed up responses and track performance issues and AI errors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span>Optimizes apps to run efficiently on phones, laptops, robot devices, or servers.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
