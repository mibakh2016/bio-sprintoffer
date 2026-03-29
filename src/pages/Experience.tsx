import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import experienceHero from "@/assets/experience-hero.jpg";

const services = [
  {
    title: "Gen AI App Fast MVP (Tensors)",
    description:
      'Make your Gen AI solution real and any dev issues addressed by launching a scalable full-stack app with main functions that solve your "problem statement" (e.g. an MVP or a "proof-of-concept" app).',
  },
  {
    title: "An AI Agent App / Multi Agents Fast MVP",
    description:
      "Get the most out of the agent apps. We can help you build the first agents and then scale faster to the AI agents collaboration.",
  },
  {
    title: "MCP Server Implementation - MVP",
    description:
      "MCP development - the focus is on building the infrastructure that enables your AI model (& app) to interact with the real world in a more precise and topic-centered manner for better AI applications.",
  },
  {
    title: "Model Fine-tuning (Tensors, LoRAs)",
    description:
      'Train your AI models to make it more context-rich, smaller or more to-the-point for various purposes from the "distilled" models to fit your local robot to a proprietary-design-trained.',
  },
  {
    title: "Gen AI Application Architecture",
    description:
      "Get a clear application architecture, including your UIs, APIs, workflows, AI models (as well as the app usage numbers, an infrastructure set-up and a tech stack to use).",
  },
  {
    title: "Gen AI App Fast MVP (Diffusors)",
    description:
      "Launch image, video, and multimedia generation apps with state-of-the-art diffusion models, optimized for your specific use case and scale requirements.",
  },
];

const rdAreas = [
  {
    title: "Multi-Agent Systems",
    description:
      "Developing non-biased assistants across any specific knowledge domain with our new approach to data curation and processing.",
    bullets: ["Agents theory", "Software agents and the web", "Agent-based AI architectures"],
  },
  {
    title: "Knowledge Graphs",
    description:
      "Adding Semantic (ontologies, knowledge representation) to Training Data allows to build lots of powerful useful gen AI applications. Now focusing on leading this vision to its full potential.",
    bullets: [],
  },
  {
    title: "Reinforcement Learning",
    description:
      "We work on proprietary MARL frameworks for accelerated agent training. The models can be trained faster with our proprietary MARL framework for accelerated training.",
    bullets: ["MAS related to AI Modelling", 'GNN-based "free info exchange"'],
  },
];

const projects = [
  {
    title: "Personalized Smart Assistants",
    tag: "Biotech",
    description:
      'Built an AI assistant offering a "Pandora" like on-demand food discovery, recommendation, and delivery in "one click" personalized by person and location. (Launched, funded)',
  },
  {
    title: "Decentralized Cap Market Platform",
    tag: "Distributed Systems",
    description:
      'Building one of the first-of-its-kind platforms where a company equity is split into digital shares and offered up to buyers via the app-based "smart" exchange. (Stealth)',
  },
  {
    title: "Specialized Health K-Engines",
    tag: "Biotech",
    description:
      "Developing vertical search and recommendation knowledge engines for specific health conditions. They can power the specialized AIs. (Custom-built inference engines)",
  },
  {
    title: "CryptoAlpha - Crypto Assets Price Monitoring",
    tag: "Crypto",
    description:
      "Built an AI tool to derive price signals for major digital assets by tracking price actions on 62 exchanges, monitoring major networks and social media. AI bot helped predict trade spikes and price.",
  },
  {
    title: "Art Value Predictive Engine",
    tag: "ML",
    description:
      'Prototyped a platform that uses ML and statistical modeling to deliver intelligence for art investment. The AI creates instant automatic art valuations for the "blue-chip" artworks.',
  },
  {
    title: "Cross-Border Payment Network",
    tag: "FinTech",
    description:
      "Payment processing system for $2 trillion/Y in cross-border payments. Introduced an open payment network for 13M businesses as an alternative to SWIFT.",
  },
  {
    title: "Predixo - Predictive Engine (Web Data)",
    tag: "Web Data",
    description:
      "A web-wide platform for data monitoring and prediction to help users detect automatically new events before they become visible. Certain assets were acquired by GE (became GE Predix).",
  },
  {
    title: "I-Virtual - Smart Personal Profiling",
    tag: "Social Network",
    description:
      'Reinventing online social networking with smart "multi-faceted" personal profiles, specialized models and inference engines.',
  },
];

const references = [
  {
    title: "WWW2013 Annual Conference",
    description:
      "The first time we announced our AI (IP) method for life-sciences was at the WWW conference, the yearly main international academic conference on future direction of the WWW since invention of the Web.",
  },
  {
    title: "Blockchain Nation (Miami 2018)",
    description:
      "Introducing the first fully-functional blockchain-based B2B payment processing and lending network to 3,000 attendees of one of the central decentralized system events in USA.",
  },
  {
    title: "USA Patent Granted 2019",
    description:
      '"(AI) method and system for medical (plants) and treatment selection." Getting awarded the first US patent in the complex AI methods field.',
  },
  {
    title: "FinTech Finovate Summit 2018 • New York",
    description:
      "Live demo for the Wall Street community: Credit score for any business and Web3-based B2B lending powered by AI. An open score for 13M companies with business and consumer KYC.",
  },
];

const timeline = [
  { year: "1999", title: "EDI B2B E-Commerce Systems", org: "GE IS Partnership" },
  { year: "2004", title: "FIX Financial Data Exchange Protocol Platform", org: "B2BITS" },
  { year: "2006", title: "Master Data Management Platform", org: "GlobalIDs" },
  { year: "2014", title: "Prediction, Monitoring & Data Hub for Labs and Doctors", org: "Allerlab" },
  { year: "2016", title: "Commodities Price Prediction Platform", org: "" },
  { year: "2017", title: "Barter Trading E-Commerce Network", org: "" },
];

const Experience = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO - warm golden yellow like millabakhareva.com */}
      <section className="pt-16" style={{ backgroundColor: "#FFDF92" }}>
        <div className="container py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "#1B6AAA" }}>
                Tech Solution Architect, CTO, Board, Investor
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#2D3748" }}>
                I'm an experienced architect with 30 years of leading projects trained in computer science, including distributed system design and (new tech) commercialization. I have been working for various companies as a CTO and a tech architect helping to design & build Gen AI apps.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -right-4 -top-4 w-32 h-full rounded-xl" style={{ backgroundColor: "#1B6AAA" }} />
              <img
                src={experienceHero}
                alt="Milla Bakhareva speaking at a conference"
                className="relative z-10 rounded-xl shadow-2xl w-full max-w-md mx-auto"
                width={640}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTING SERVICES */}
      <section className="py-20" style={{ backgroundColor: "#FFDF92" }}>
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1B6AAA" }}>
            Gen AI App Architecture Consulting
          </h2>
          <p className="text-lg mb-12 max-w-3xl" style={{ color: "#2D3748" }}>
            Implementing AI means providing better service for your customers while increasing valuation of your business. Let's design your app in your business settings and at your scale.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-7 border transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  borderColor: "rgba(27, 106, 170, 0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: "#1B6AAA" }}
                  />
                  <h3 className="text-lg font-semibold" style={{ color: "#1B6AAA" }}>
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D AREAS */}
      <section className="py-20" style={{ backgroundColor: "#FFF5D6" }}>
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{ color: "#1B6AAA" }}>
            R&D Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rdAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl p-8 border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  borderColor: "rgba(27, 106, 170, 0.15)",
                }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#1B6AAA" }}>
                  {area.title}
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: "#4A5568" }}>
                  {area.description}
                </p>
                {area.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {area.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3" style={{ color: "#4A5568" }}>
                        <span
                          className="mt-2 h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: "#1B6AAA" }}
                        />
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="py-20" style={{ backgroundColor: "#FFDF92" }}>
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{ color: "#1B6AAA" }}>
            Selected Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-xl p-7 border transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  borderColor: "rgba(27, 106, 170, 0.2)",
                }}
              >
                <span
                  className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4"
                  style={{
                    backgroundColor: "rgba(27, 106, 170, 0.12)",
                    color: "#1B6AAA",
                  }}
                >
                  {p.tag}
                </span>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "#1B6AAA" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED EXPERIENCE & TIMELINE */}
      <section className="py-20" style={{ backgroundColor: "#FFF5D6" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "#1B6AAA" }}>
                Selected Experience
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: "#2D3748" }}>
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
                  Formerly served as a co-director in one of the European software consulting companies. Our tech partners included Sun Microsystems, Oracle, and GE.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8" style={{ color: "#1B6AAA" }}>
                Past Projects
              </h3>
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div
                        className="h-3.5 w-3.5 rounded-full shrink-0 mt-1"
                        style={{ backgroundColor: "#1B6AAA" }}
                      />
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1" style={{ backgroundColor: "rgba(27, 106, 170, 0.3)" }} />
                      )}
                    </div>
                    <div className="pb-8">
                      <span
                        className="text-xs font-semibold tracking-wider uppercase"
                        style={{ color: "#1B6AAA" }}
                      >
                        {item.year}
                      </span>
                      <h4 className="text-base font-semibold mt-1" style={{ color: "#2D3748" }}>
                        {item.title}
                      </h4>
                      {item.org && (
                        <p className="text-sm mt-0.5" style={{ color: "#718096" }}>
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

      {/* SELECTED REFERENCES */}
      <section className="py-20" style={{ backgroundColor: "#FFDF92" }}>
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{ color: "#1B6AAA" }}>
            Selected References
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {references.map((ref) => (
              <div
                key={ref.title}
                className="rounded-xl p-8 border transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  borderColor: "rgba(27, 106, 170, 0.2)",
                }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: "#1B6AAA" }}>
                  {ref.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                  {ref.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-AGENT RESEARCH */}
      <section className="py-20" style={{ backgroundColor: "#FFF5D6" }}>
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{ color: "#1B6AAA" }}>
            Multi-Agent Research
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div
              className="rounded-xl p-8 border"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderColor: "rgba(27, 106, 170, 0.15)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1B6AAA" }}>
                Multi-Agent Cooperative Systems
              </h3>
              <div className="space-y-4 leading-relaxed" style={{ color: "#4A5568" }}>
                <p>
                  Our research focuses on autonomous decentralized agents and the information exchange between them. We work on agent interaction policies that lead to more collaborative systems. The main methods are built on graph network (GNN) architectures.
                </p>
                <p>
                  We develop data-driven approaches that find optimal solutions to hard coordination problems involving resource allocation, path-finding, or graph optimization. Our solutions enable fast online decision-making, as typically required in robotics applications.
                </p>
              </div>
            </div>

            <div
              className="rounded-xl p-8 border"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderColor: "rgba(27, 106, 170, 0.15)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1B6AAA" }}>
                MARL Frameworks
              </h3>
              <div className="space-y-4 leading-relaxed" style={{ color: "#4A5568" }}>
                <p>
                  Traditional MARL frameworks lack the ability to accommodate information exchange between agents by constraining agents to exchange "general" parameters. This enforced homogeneity limits cases where tasks benefit from heterogeneous behaviors.
                </p>
                <p>
                  We focus on improving "free exchange" and heterogeneity in MARL policies using Graph Neural Networks. We have been in research since 2004 and focus on leveraging GNN for differentiable inter-agent communication since 2013.
                </p>
              </div>
            </div>

            <div
              className="rounded-xl p-8 border"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderColor: "rgba(27, 106, 170, 0.15)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1B6AAA" }}>
                Perspective Multi-Player Games
              </h3>
              <p className="leading-relaxed" style={{ color: "#4A5568" }}>
                The multi-agent platform for building complex multi-player gaming systems where players each have their own rules. Perspective games model multi-agent systems in which agents can view only the parts of the system they own. We study richer settings including games with more than two players, zero-sum games among coalitions, and non-zero-sum games with Nash equilibrium.
              </p>
            </div>

            <div
              className="rounded-xl p-8 border"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderColor: "rgba(27, 106, 170, 0.15)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1B6AAA" }}>
                Extinct Animals — Who is Next?
              </h3>
              <p className="leading-relaxed" style={{ color: "#4A5568" }}>
                An AI-based system that knows the current condition of animal species and can predict with accuracy when an animal goes extinct and what to do. As time is running out for many species, we try to find ways to stop extinction with the help of the open-source community via various AI projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MORE ABOUT ME */}
      <section className="py-20" style={{ backgroundColor: "#FFDF92" }}>
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: "#1B6AAA" }}>
              More About Me
            </h2>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: "#2D3748" }}>
              <p>
                Earlier, I was a research associate at the leading Space Research Institute of the Russian Academy of Science (IKI). As part of the informatics research team at IKI, I analyzed satellite data. For my Ph.D. dissertation topic "Optimizing data distribution strategy for large-scale networks for the better local search", I wrote a network imitation model in both Pascal and C.
              </p>
              <p>
                For my project "to automatically predict events" based on dynamic web data, I applied graph DL algorithms to analyze data change dynamics.
              </p>
              <p>
                I earned my MS in Electrical Engineering from the Russian State University of Aerospace Technologies (Electrical Engineering and Aerospace Robotics).
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;
