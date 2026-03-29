const projects = [
  { img: "https://placehold.co/600x360/1a2744/white?text=Project+1", title: "Project Alpha Platform for Enterprise", subtitle: "2017" },
  { img: "https://placehold.co/600x360/1a2744/white?text=Project+2", title: "Data Exchange Protocol Platform for B2B", subtitle: "2004" },
  { img: "https://placehold.co/600x360/1a2744/white?text=Project+3", title: "Master Data Management Platform for Corp", subtitle: "2006" },
  { img: "https://placehold.co/600x360/1a2744/white?text=Project+4", title: "EDI B2B E-Commerce Systems for CIS Countries", subtitle: "GE, 1999" },
  { img: "https://placehold.co/600x360/1a2744/white?text=Project+5", title: "Prediction, Monitoring & Data Hub for Labs and Doctors", subtitle: "2014" },
  { img: "https://placehold.co/600x360/1a2744/white?text=Project+6", title: "Commodities Price Prediction Platform", subtitle: "2016" },
];

const TemplateProjectsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          More Past Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col">
              <div className="overflow-hidden rounded-md">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full aspect-[5/3] object-cover"
                />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground leading-snug">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateProjectsSection;