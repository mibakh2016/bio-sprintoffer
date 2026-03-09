const stats = [
  { value: "15+", label: "Years in Software Architecture" },
  { value: "40+", label: "GenAI Projects Delivered" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "2 wk", label: "Avg. Sprint Duration" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-display font-semibold tracking-widest uppercase text-accent mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Built for the age of AI.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                I've spent over 15 years designing systems at scale — from distributed backends to real-time data platforms. When the generative AI wave hit, I saw teams making the same architectural mistakes that plagued earlier technology shifts.
              </p>
              <p>
                Now I work exclusively with engineering teams building GenAI applications. My de-risking sprints cut through hype and deliver validated architecture decisions, working prototypes, and clear paths to production.
              </p>
              <p>
                Previously: Principal Architect roles at enterprise SaaS companies, contributor to open-source LLM tooling, speaker at QCon, KubeCon, and AI Engineering Summit.
              </p>
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
