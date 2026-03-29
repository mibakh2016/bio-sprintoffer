const timeline = [
  { year: "1999", title: "EDI B2B E-Commerce Systems", org: "GE IS Partnership" },
  { year: "2004", title: "FIX Financial Data Exchange Protocol Platform", org: "B2BITS" },
  { year: "2006", title: "Master Data Management Platform", org: "GlobalIDs" },
  { year: "2014", title: "Prediction, Monitoring & Data Hub for Labs and Doctors", org: "Allerlab" },
  { year: "2016", title: "Commodities Price Prediction Platform", org: "" },
  { year: "2017", title: "Barter Trading E-Commerce Network", org: "" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-display font-semibold tracking-widest uppercase text-accent mb-3">
              Background
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Selected Experience
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                I am currently a Deep Learning Researcher and an AI architecture consultant.
              </p>
              <p>
                Previously, I was a CTO and a board director at Datrixo holding firm and focused on developing AI capabilities for commercial organizations. I managed a team of engineers and served as a technical lead for multiple data analysis projects.
              </p>
              <p>
                Before that, I worked as a temp CTO, developing deep learning, and data science solutions for various start-ups.
              </p>
              <p>
                Formerly served as a co-director in one of the European software consulting companies. In this position, I supported multiple data science efforts, acting as both a project director and a technical developer. Our tech partners included Sun Microsystems, Oracle, and GE.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-6">
              Past Projects
            </h3>
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-accent shrink-0 mt-1.5" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-display font-semibold tracking-wider uppercase text-accent">
                      {item.year}
                    </span>
                    <h4 className="text-base font-semibold text-foreground mt-1">
                      {item.title}
                    </h4>
                    {item.org && (
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {item.org}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
