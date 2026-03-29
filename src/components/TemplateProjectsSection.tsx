interface TemplateProject {
  img: string;
  title: string;
  year: string;
}

interface TemplateProjectsSectionProps {
  heading?: string;
  projects?: TemplateProject[];
}

const defaultProjects: TemplateProject[] = [
  { img: "/images/projects/51720e64c082a82a0dc5e3ad9a1161c0.png", title: "Placeholder Project Title One", year: "2017" },
  { img: "/images/projects/8c36a83f6d90f05df818ff8ec730ff95.png", title: "Placeholder Project Title Two for Testing", year: "2004" },
  { img: "/images/projects/7a163fdd93e6e7042ec32beff0097ff4.jpg", title: "Placeholder Project Title Three Platform", year: "2006" },
  { img: "/images/projects/ef59c8fccb7b961e2fa611fa858288f9.png", title: "Placeholder Project Title Four for CIS Countries - Long Name", year: "GE, 1999" },
  { img: "/images/projects/647e97f83f1b6d7b25f09b25f1b0ace4.png", title: "Placeholder Project Title Five for Labs and Doctors", year: "2014" },
  { img: "/images/projects/e8d31a047e452efed4f24feec6e710c5.png", title: "Placeholder Project Title Six Platform", year: "2016" },
];

const TemplateProjectsSection = ({
  heading = "More Past Projects",
  projects = defaultProjects,
}: TemplateProjectsSectionProps) => {
  return (
    <section className="py-16" style={{ backgroundColor: "#EEEEF0" }}>
      <div className="container">
        <h2 className="text-4xl font-bold mb-12" style={{ color: "#1A2744" }}>
          {heading}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full aspect-[5/3] object-cover"
              />
              <div className="p-5 flex-1 flex flex-col">
                <h3
                  className="text-base font-bold leading-snug mb-2"
                  style={{ color: "#1A2744" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm mt-auto" style={{ color: "#666666" }}>
                  {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateProjectsSection;