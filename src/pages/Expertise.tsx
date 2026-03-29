import { Linkedin, Mail, ArrowRight, Award, FileText, Globe, Presentation, FlaskConical, Brain, Network, Database, Bot, Cpu, Server, Gamepad2, PawPrint } from "lucide-react";
import heroPhoto from "@/assets/mb_photo_collage.png";
import { Button } from "@/components/ui/button";

const goldBg = "#F5D669";
const bluePrimary = "#2874A6";
const blueDark = "#1A5276";
const blueLight = "#3498DB";
const cardBg = "rgba(255,255,255,0.85)";

const Expertise = () => {
  return (
    <div style={{ backgroundColor: goldBg }} className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="pt-24 pb-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <a href="https://www.linkedin.com/in/millabakhareva" target="_blank" rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: bluePrimary }}>
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a href="mailto:milla.bakhareva@proton.me" className="flex items-center gap-2 text-sm font-medium" style={{ color: bluePrimary }}>
              <Mail className="h-5 w-5" /> milla.bakhareva@proton.me
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: blueDark }}>
                Milla Bakhareva
              </h1>
              <p className="text-xl lg:text-2xl leading-relaxed mb-8" style={{ color: blueDark }}>
                Experience in AI architecture, R&D and as a CTO developing Gen AI solutions since 2008.
              </p>
              <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
                <a href="https://calendly.com/milla-bakhareva/10-23" target="_blank" rel="noopener noreferrer">
                  Book a Sprint <ArrowRight className="ml-1 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="relative">
              <img
                src={heroPhoto}
                alt="Milla Bakhareva"
                className="w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONSULTING SERVICES ===== */}
      <section className="py-16" style={{ backgroundColor: "#EEEEF0" }}>
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: blueDark }}>
            Gen AI Application Architecture Services
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: blueDark }}>
            Designing your AI solution in your business settings and at your scale — from architecture consulting to full MVPs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="h-7 w-7" />,
                title: "Gen AI Application Architecture Consulting",
                desc: 'Get a clear application architecture, including your UIs, APIs, workflows, AI models (as well as the app usage numbers, an infrastructure set-up and a tech stack to use).',
              },
              {
                icon: <Cpu className="h-7 w-7" />,
                title: "Gen AI App Fast MVP (Tensors)",
                desc: 'Make your Gen AI solution real and any dev issues addressed by launching a scalable full-stack app with main functions that solve your "problem statement" (e.g. an MVP or a "proof-of-concept" app.',
              },
              {
                icon: <Cpu className="h-7 w-7" />,
                title: "Gen AI App Fast MVP (Diffusors)",
                desc: 'Make your Gen AI solution real and any dev issues addressed by launching a scalable full-stack app with main functions that solve your "problem statement" (e.g. an MVP or a "proof-of-concept" app.',
              },
              {
                icon: <Bot className="h-7 w-7" />,
                title: "An AI Agent App/ Multi Agents Fast MVP",
                desc: "Get the most out of the agent apps. We can help you build the first agents and then scale faster to the AI agents collaboration.",
              },
              {
                icon: <Server className="h-7 w-7" />,
                title: "MCP Server Implementation - MVP",
                desc: "MCP development - the focus is on building the infrastructure that enables your AI model (& app) to interact with the real world in a more precise and topic-centered manner for better AI applications.",
              },
              {
                icon: <FlaskConical className="h-7 w-7" />,
                title: "Model Fine-tuning (Tensors, LoRAS)",
                desc: 'Train your AI models to make it more context-rich, smaller or more to-the-point for various purposes from the "distilled" models to fit your local robot to a proprietary-design -trained.',
              },
            ].map((service) => (
              <div key={service.title} className="rounded-xl p-8 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 text-center"
                style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#ED1D24" }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#000000" }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-16" style={{ backgroundColor: "#EEEEF0" }}>
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: "#002F69" }}>&lt;/About&gt;</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <img
                src="https://millabakhareva.com/_assets/media/5bb13c84b79ba60ae3c8d270a540ab08.jpg"
                alt="Milla Bakhareva"
                className="w-full max-w-[240px] mx-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#002F69" }}>
                Tech Solution Architect, CTO, Board, Investor
              </h3>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#000000" }}>
                <p>
                  I'm an experienced architect with 30 years of leading projects trained in computer science, including distributed system design and (new tech) commercialization.
                </p>
                <p>
                  I have been working for various companies as a CTO and a tech architect helping to design & build Gen AI apps. I am most skilled in system architecture, and leading teams building full-stack scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== R&D AREAS ===== */}
      <section className="py-16" style={{ backgroundColor: "#EEEEF0" }}>
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: blueDark }}>R&D Areas</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Multi - Agent Systems",
                desc: "Developing non-biased assistants across any specific knowledge domain with our new approach to data curation and processing.",
                bullets: ["Agents theory", "Software agents and the web", "Agent-based AI architectures."],
              },
              {
                title: "Knowledge Graphs",
                desc: "Adding Semantic (ontologies, knowledge representation) to Training Data allows to build lots of powerful useful gen AI applications. Now focusing on leading this vision to its full potential.",
                bullets: [],
              },
              {
                title: "Reinforcement Learning",
                desc: 'We work on proprietary MARL frameworks for accelerated agent training. The models can be trained faster with our proprietary MARL framework for accelerated training.',
                bullets: ["MAS related to AI Modelling", 'GNN-based "free info exchange".'],
              },
            ].map((area) => (
              <div key={area.title} className="p-8 text-center"
                style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: blueDark }}>{area.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#000000" }}>{area.desc}</p>
                {area.bullets.length > 0 && (
                  <ul className="space-y-1 text-left inline-block">
                    {area.bullets.map((b) => (
                      <li key={b} className="text-sm" style={{ color: "#000000" }}>
                        • {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELECTED PROJECTS ===== */}
      <section className="py-16" style={{ backgroundColor: "#EEEEF0" }}>
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: blueDark }}>Selected Projects</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Personalized Smart Assistants (Biotech)",
                desc: 'Built an AI assistant offering a "Pandora" like on-demand food discovery, recommendation, and delivery in "one click" personalized by person and location. (Launched, funded)',
              },
              {
                title: "Decentralized Cap Market Platform (Distributed Sys)",
                desc: 'Building one of the first-of-its-kind platforms where a company equity is split into digital shares and offered up to buyers via the app-based "smart" exchange. (Stealth)',
              },
              {
                title: "Specialized Health K-Engines (Biotech)",
                desc: "We are developing (vertical) search and recommendation (knowledge) engines for specific health conditions. They can power the specialized AIs. (We offer custom-built inference engines)",
              },
            ].map((project) => (
              <div key={project.title} className="p-8 text-center"
                style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: blueDark }}>{project.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#000000" }}>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELECTED EXPERIENCE TIMELINE ===== */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: blueDark }}>Selected Experience</h2>

          <div className="max-w-3xl mx-auto space-y-0 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ backgroundColor: `${bluePrimary}30` }} />

            {[
              { year: "1999", title: "EDI B2B E-Commerce Systems", org: "GE IS Partnership" },
              { year: "2004", title: "FIX Financial Data Exchange Protocol Platform", org: "B2BITS" },
              { year: "2006", title: "Master Data Management Platform", org: "GlobalIDs" },
              { year: "2014", title: "Prediction, Monitoring & Data Hub for Labs and Doctors", org: "Allerlab" },
              { year: "2016", title: "Commodities Price Prediction Platform", org: "" },
              { year: "2017", title: "Barter Trading E-Commerce Network", org: "" },
            ].map((item) => (
              <div key={item.year + item.title} className="flex items-start gap-6 pb-8 relative">
                <div className="flex-shrink-0 z-10 h-12 w-12 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                  style={{ backgroundColor: bluePrimary }}>
                  {item.year}
                </div>
                <div className="rounded-lg p-5 shadow-sm flex-1" style={{ backgroundColor: cardBg }}>
                  <h4 className="font-bold" style={{ color: blueDark }}>{item.title}</h4>
                  {item.org && <p className="text-sm mt-1" style={{ color: "#000000" }}>{item.org}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELECTED REFERENCES ===== */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: blueDark }}>Selected References</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Globe className="h-7 w-7" />,
                title: "WWW2013 Annual Conference",
                desc: "Announced an AI method for life-sciences at the WWW conference — the main international academic conference on the future direction of the World Wide Web.",
              },
              {
                icon: <Presentation className="h-7 w-7" />,
                title: "Blockchain Nation (Miami 2018)",
                desc: "Introduced the first fully-functional blockchain-based B2B payment processing and lending network to 3,000 attendees at a major decentralized systems event.",
              },
              {
                icon: <Award className="h-7 w-7" />,
                title: "USA Patent Granted 2019",
                desc: "Awarded a US patent for an AI method and system for medical treatment selection — a complex AI methods achievement made possible by a great team of scientists.",
              },
              {
                icon: <FileText className="h-7 w-7" />,
                title: "Finovate Summit 2018 — New York",
                desc: "Live demo for the Wall Street community: AI-powered credit scoring for any business and Web3-based B2B lending — an open score for 13M companies.",
              },
            ].map((ref) => (
              <div key={ref.title} className="rounded-xl p-8 shadow-md hover:shadow-xl transition-all"
                style={{ backgroundColor: cardBg }}>
                <div className="mb-4" style={{ color: bluePrimary }}>{ref.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: blueDark }}>{ref.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#000000" }}>{ref.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MORE ABOUT ME ===== */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-2xl p-10 shadow-lg max-w-4xl mx-auto" style={{ backgroundColor: cardBg }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: blueDark }}>More About Me</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#000000" }}>
              <p>
                Currently a Deep Learning Researcher and AI architecture consultant. Previously CTO and board director at Datrixo, focused on developing AI capabilities for commercial organizations — managing engineering teams and serving as technical lead for multiple data analysis projects.
              </p>
              <p>
                Earlier career included serving as co-director at a European software consulting company, supporting multiple data science efforts as both project director and technical developer. Tech partners included Sun Microsystems, Oracle, and GE.
              </p>
              <p>
                Former research associate at the Space Research Institute of the Russian Academy of Science (IKI), analyzing satellite data as part of the informatics research team. Earned an MS in Electrical Engineering from the Russian State University of Aerospace Technologies (Electrical Engineering and Aerospace Robotics).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH ===== */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: blueDark }}>Research</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-xl p-8 shadow-md" style={{ backgroundColor: cardBg }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: blueDark }}>Multi-Agent Cooperative Systems</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#000000" }}>
                <p>
                  Research focuses on autonomous decentralized agents and the information exchange between them, developing interaction policies that lead to more collaborative systems.
                </p>
                <p>
                  Methods are built on Graph Neural Network (GNN) architectures, providing a well-suited base for networking in multi-agent teams and swarms. Also developing data-driven approaches for hard coordination problems involving resource allocation, path-finding, and graph optimization.
                </p>
              </div>
            </div>

            <div className="rounded-xl p-8 shadow-md" style={{ backgroundColor: cardBg }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: blueDark }}>MARL Frameworks</h3>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#000000" }}>
                <p>
                  Traditional multi-agent reinforcement learning (MARL) frameworks lack accommodation for information exchange between agents — typically constraining agents to exchange general parameters, limiting heterogeneous behaviors.
                </p>
                <p>
                  Research focuses on improving free exchange and heterogeneity in MARL policies, using Policies Optimization based on Heterogeneous Graph Neural Networks. Leveraging GNN for differentiable inter-agent communication since 2013.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FUN R&D ===== */}
      <section className="py-16 pb-24">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: blueDark }}>Fun R&D</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-8 shadow-md hover:shadow-xl transition-all" style={{ backgroundColor: cardBg }}>
              <div className="mb-4" style={{ color: bluePrimary }}><Gamepad2 className="h-8 w-8" /></div>
              <h3 className="text-xl font-bold mb-3" style={{ color: blueDark }}>Perspective Multi-Player Games</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#34495E" }}>
                A multi-agent platform for building complex multi-player gaming systems where each player has their own rules and unique perspective of the system.
              </p>
            </div>

            <div className="rounded-xl p-8 shadow-md hover:shadow-xl transition-all" style={{ backgroundColor: cardBg }}>
              <div className="mb-4" style={{ color: bluePrimary }}><PawPrint className="h-8 w-8" /></div>
              <h3 className="text-xl font-bold mb-3" style={{ color: blueDark }}>Extinct Animals — Who is Next?</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#34495E" }}>
                An AI-based system that knows the current condition of animal species and can predict when an animal goes extinct and what to do. Working to stop extinction with the help of the open-source community via various AI projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
