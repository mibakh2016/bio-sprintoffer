import { Linkedin, Mail, ArrowRight, Award, FileText, Globe, Presentation, FlaskConical, Brain, Network, Database, Bot, Cpu, Server, Gamepad2, PawPrint } from "lucide-react";

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
              <a href="https://calendly.com/milla-bakhareva/10-23" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold transition-all hover:shadow-lg"
                style={{ backgroundColor: "#E8C547", color: blueDark, border: `2px solid ${bluePrimary}30` }}>
                Book a Consultation <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://millabakhareva.com/_assets/media/c8e40f744b54d4301557a21e2ef27952.png"
                alt="Milla Bakhareva"
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONSULTING SERVICES ===== */}
      <section className="py-16">
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
                title: "Gen AI App Architecture Consulting",
                desc: "A clear application architecture including UIs, APIs, workflows, AI models, infrastructure setup, and a tech stack — tailored to your needs.",
              },
              {
                icon: <Cpu className="h-7 w-7" />,
                title: "Gen AI App Fast MVP (Tensors / Diffusors)",
                desc: "Launch a scalable full-stack app with main functions that solve your problem statement — a proof-of-concept or MVP addressing real dev issues.",
              },
              {
                icon: <Bot className="h-7 w-7" />,
                title: "AI Agent / Multi-Agent Fast MVP",
                desc: "Build the first agents, then scale to AI agent collaboration. Get the most out of the agent apps with multi-agent architectures.",
              },
              {
                icon: <Server className="h-7 w-7" />,
                title: "MCP Server Implementation — MVP",
                desc: "Build infrastructure enabling your AI model and app to interact with the real world in a more precise, topic-centered manner.",
              },
              {
                icon: <FlaskConical className="h-7 w-7" />,
                title: "Model Fine-tuning (Tensors, LoRAs)",
                desc: "Train your AI models to make them more context-rich, smaller, or more targeted — from distilled models for local devices to proprietary-trained designs.",
              },
            ].map((service) => (
              <div key={service.title} className="rounded-xl p-8 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: cardBg, borderLeft: `4px solid ${bluePrimary}` }}>
                <div className="mb-4" style={{ color: bluePrimary }}>{service.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: blueDark }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#34495E" }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-2xl p-10 shadow-lg max-w-4xl mx-auto" style={{ backgroundColor: cardBg }}>
            <h2 className="text-3xl font-bold mb-2" style={{ color: blueDark }}>
              Tech Solution Architect, CTO, Board, Investor
            </h2>
            <div className="h-1 w-20 rounded mb-6" style={{ backgroundColor: bluePrimary }} />
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#2C3E50" }}>
              <p>
                Experienced architect with 30 years of leading projects, trained in computer science including distributed system design and technology commercialization.
              </p>
              <p>
                Has worked for various companies as a CTO and tech architect, helping design and build Gen AI apps. Most skilled in system architecture and leading teams building full-stack scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== R&D AREAS ===== */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: blueDark }}>R&D Areas</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Network className="h-8 w-8" />,
                title: "Multi-Agent Systems",
                desc: "Developing non-biased assistants across specific knowledge domains with a novel approach to data curation and processing.",
                bullets: ["Agents theory", "Software agents and the web", "Agent-based AI architectures"],
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Knowledge Graphs",
                desc: "Adding semantics (ontologies, knowledge representation) to training data enables powerful Gen AI applications. Focused on leading this vision to its full potential.",
                bullets: [],
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Reinforcement Learning",
                desc: "Proprietary MARL frameworks for accelerated agent training. Models can be trained faster with novel MARL approaches.",
                bullets: ["MAS related to AI Modelling", 'GNN-based "free info exchange"'],
              },
            ].map((area) => (
              <div key={area.title} className="rounded-xl p-8 shadow-md hover:shadow-xl transition-all"
                style={{ backgroundColor: cardBg }}>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg mb-5"
                  style={{ backgroundColor: `${bluePrimary}15`, color: bluePrimary }}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: blueDark }}>{area.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#34495E" }}>{area.desc}</p>
                {area.bullets.length > 0 && (
                  <ul className="space-y-1">
                    {area.bullets.map((b) => (
                      <li key={b} className="text-sm flex items-start gap-2" style={{ color: "#34495E" }}>
                        <span style={{ color: bluePrimary }}>•</span> {b}
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
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: blueDark }}>Selected Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Personalized Smart Assistants (Biotech)",
                desc: "AI assistant offering on-demand food discovery, recommendation, and delivery personalized by person and location. Launched and funded.",
              },
              {
                title: "Decentralized Cap Market Platform",
                desc: "One of the first platforms where company equity is split into digital shares and offered to buyers via an app-based smart exchange. (Stealth)",
              },
              {
                title: "Specialized Health K-Engines (Biotech)",
                desc: "Vertical search and recommendation knowledge engines for specific health conditions, powering specialized AIs with custom-built inference engines.",
              },
              {
                title: "Probabilistic Engine",
                desc: "An engine that can bypass the current web and go directly to the sources of change. Based on a 2012 prototype, now in beta.",
              },
              {
                title: "CryptoAlpha — Crypto Assets Price Monitoring",
                desc: "AI tool deriving price signals for major digital assets by tracking price actions on 62 exchanges and monitoring major networks and social media.",
              },
              {
                title: "Art Value Predictive Engine",
                desc: "Platform using ML and statistical modeling to deliver intelligence for art investment, creating instant automatic valuations for blue-chip artworks.",
              },
              {
                title: "I-Virtual — Smart Personal Profiling",
                desc: "Reinventing online social networking with smart multi-faceted personal profiles, specialized models, and inference engines.",
              },
              {
                title: "Cross-Border Payment Network",
                desc: "Payment processing system for cross-border payments. Introduced an open payment network for 13M businesses as an alternative to traditional methods.",
              },
            ].map((project) => (
              <div key={project.title} className="rounded-xl p-8 shadow-md hover:shadow-xl transition-all"
                style={{ backgroundColor: cardBg, borderTop: `3px solid ${blueLight}` }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: blueDark }}>{project.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#34495E" }}>{project.desc}</p>
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
                  {item.org && <p className="text-sm mt-1" style={{ color: "#7F8C8D" }}>{item.org}</p>}
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
                <p className="text-sm leading-relaxed" style={{ color: "#34495E" }}>{ref.desc}</p>
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
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#2C3E50" }}>
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
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#34495E" }}>
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
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#34495E" }}>
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
