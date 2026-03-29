const projects = [
  { img: "/images/projects/51720e64c082a82a0dc5e3ad9a1161c0.png", title: "Project Alpha Platform for Enterprise", subtitle: "2017" },
  { img: "/images/projects/8c36a83f6d90f05df818ff8ec730ff95.png", title: "Data Exchange Protocol Platform for B2B", subtitle: "2004" },
  { img: "/images/projects/7a163fdd93e6e7042ec32beff0097ff4.jpg", title: "Master Data Management Platform for Corp", subtitle: "2006" },
  { img: "/images/projects/ef59c8fccb7b961e2fa611fa858288f9.png", title: "EDI B2B E-Commerce Systems for CIS Countries", subtitle: "GE, 1999" },
  { img: "/images/projects/647e97f83f1b6d7b25f09b25f1b0ace4.png", title: "Prediction, Monitoring & Data Hub for Labs and Doctors", subtitle: "2014" },
  { img: "/images/projects/e8d31a047e452efed4f24feec6e710c5.png", title: "Commodities Price Prediction Platform", subtitle: "2016" },
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