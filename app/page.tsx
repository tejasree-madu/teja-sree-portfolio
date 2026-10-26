import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  Sparkles,
  Workflow,
  FileDown,
  GraduationCap,
  Layers3,
  Terminal,
  Cpu,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "GENERATIVE AI · AGENTS",
    title: "RAG Research Agent",
    description:
      "A tool-calling research assistant that routes questions between a local knowledge base and live web search based on query intent.",
    stack: ["LangChain", "GPT-4o-mini", "ChromaDB", "FastAPI", "Docker"],
    icon: BrainCircuit,
    tone: "mint",
    outcome: "Incremental indexing + golden-dataset regression evaluation",
  },
  {
    number: "02",
    category: "ENTERPRISE AI · NLP-TO-SQL",
    title: "SAP/ERP Natural Language to SQL",
    description:
      "An enterprise query experience using a semantic layer of table relationships, synonyms, metric definitions, and value mappings to guide SQL generation across complex SAP schemas.",
    stack: ["Vanna.ai", "LLMs", "SQL", "PostgreSQL", "Evaluation"],
    icon: Network,
    tone: "lavender",
    outcome: "Gold datasets and benchmark suites across P2P and FI/CO modules",
  },
  {
    number: "03",
    category: "DATA ENGINEERING · ETL",
    title: "SAP HANA → PostgreSQL Pipeline",
    description:
      "A data extraction and validation workflow with schema mapping, data cleaning, configuration-driven database switching, and timezone consistency fixes.",
    stack: ["SAP HANA", "PostgreSQL", "Python", "ETL", "Data Quality"],
    icon: Database,
    tone: "peach",
    outcome: "Reliable, validated data for downstream AI and analytics",
  },
  {
    number: "04",
    category: "MACHINE LEARNING",
    title: "Coffee Sales Revenue Prediction",
    description:
      "A regression workflow covering data cleaning, feature engineering, exploratory analysis, model comparison, cross-validation, and hyperparameter tuning.",
    stack: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
    icon: Workflow,
    tone: "blue",
    outcome: "Random Forest: R² 0.978 · MAE 0.27 on the reported evaluation",
  },
  {
    number: "05",
    category: "DEEP LEARNING · COMPUTER VISION",
    title: "Nutrition Estimation from Food Images",
    description:
      "A CNN-based project to recognize food images and estimate nutritional components including calories, protein, fat, and carbohydrates.",
    stack: ["CNN", "Deep Learning", "Image Processing"],
    icon: Cpu,
    tone: "pink",
    outcome: "Published in the International Journal for Modern Trends in Science and Technology (2025)",
  },
];

const skillGroups = [
  { title: "Generative AI", icon: BrainCircuit, skills: ["RAG", "LLM applications", "Prompt engineering", "Tool-calling agents", "Embeddings", "Retrieval engineering", "Semantic layers"] },
  { title: "Machine Learning", icon: Cpu, skills: ["scikit-learn", "Regression", "Random Forest", "CNN", "Model evaluation", "Cross-validation", "Hyperparameter tuning"] },
  { title: "Data & Databases", icon: Database, skills: ["Python", "SQL", "PostgreSQL", "MySQL", "ETL", "Data validation", "Pandas", "NumPy"] },
  { title: "Engineering & Cloud", icon: Server, skills: ["FastAPI", "Docker", "vLLM", "Ollama", "Azure", "Linux", "Git/GitHub", "Next.js", "React"] },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Teja Sree home"><span className="brand-mark">T<span>.</span></span><span>TEJA SREE</span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s connect <ArrowUpRight size={15} /></a>
      </nav>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO BUILDING WHAT&apos;S NEXT</div>
          <h1>Turning complex<br />problems into <span className="gradient-text">intelligent</span><br />solutions<span className="period">.</span></h1>
          <p className="hero-lead">I&apos;m Madu Teja Sree — an AI Engineer working across Generative AI, enterprise data, and machine learning to build systems that are useful beyond the demo.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-quiet" href="/Teja_Sree_Resume.pdf" target="_blank" rel="noreferrer">View résumé <FileDown size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><span className="meta-line" /> Based in Hyderabad, India</span>
            <span><span className="meta-line" /> AI · Data · MLOps</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract AI network illustration">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="art-grid" />
          <div className="art-core"><BrainCircuit size={62} strokeWidth={1.2} /></div>
          <div className="float-card card-rag"><span className="float-icon mint-bg"><Sparkles size={16}/></span><span><b>GenAI systems</b><small>RAG · Agents · LLMs</small></span></div>
          <div className="float-card card-data"><span className="float-icon purple-bg"><Database size={16}/></span><span><b>Reliable data</b><small>ETL · SQL · Quality</small></span></div>
          <div className="float-card card-ml"><span className="float-icon peach-bg"><Workflow size={16}/></span><span><b>Built to evaluate</b><small>Metrics · Regression tests</small></span></div>
          <span className="node node-a" /><span className="node node-b" /><span className="node node-c" />
          <div className="art-caption">IDEAS → SYSTEMS → IMPACT</div>
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="ticker" aria-label="Areas of focus"><div className="ticker-track">
        {["GENERATIVE AI", "MACHINE LEARNING", "DATA PIPELINES", "LLM EVALUATION", "MLOPS", "GENERATIVE AI", "MACHINE LEARNING", "DATA PIPELINES"].map((item, i) => <span key={`${item}-${i}`}>{item}<i>✳</i></span>)}
      </div></section>

      <section className="section-wrap about section-pad" id="about">
        <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
        <div className="about-grid">
          <h2>I care about the<br /><span className="serif-italic">whole system,</span><br />not just the model.</h2>
          <div className="about-text">
            <p className="large-copy">From getting messy enterprise data into shape to evaluating LLM outputs, I enjoy connecting the pieces that turn an AI idea into a dependable application.</p>
            <p>My experience spans SAP-integrated AI platforms, retrieval-augmented generation, NLP-to-SQL, data extraction pipelines, model evaluation, and API-based deployment. I like working close to real requirements and making technical solutions practical, testable, and easier to maintain.</p>
            <div className="quick-stats">
              <div><strong>GenAI</strong><span>Agents & retrieval</span></div>
              <div><strong>Data</strong><span>ETL & validation</span></div>
              <div><strong>MLOps</strong><span>Testing & serving</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-wrap">
          <div className="section-kicker">02 / THE JOURNEY</div>
          <div className="section-heading-row"><h2>Experience that<br /><span className="serif-italic">ships.</span></h2><p>Building across the boundary between AI research, engineering, and real-world delivery.</p></div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">NOV 2025 — JUN 2026</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content">
                <div className="role-top"><div><h3>AI Engineer</h3><p className="company">Automatonsx <span>· Hyderabad, India</span></p></div><span className="role-tag">FORWARD DEPLOYED ENGINEERING</span></div>
                <p>Worked on SAP-integrated AI platforms across Connect and Echo, with a focus on enterprise data pipelines, LLM-powered transformation services, and reliable NLP-to-SQL.</p>
                <ul className="experience-points">
                  <li>Built SAP HANA-to-PostgreSQL extraction, schema mapping, cleaning, and validation workflows.</li>
                  <li>Developed prompt services for natural-language data transformations and scheduled pipeline execution.</li>
                  <li>Created evaluation datasets and semantic mappings to benchmark SQL generation across SAP modules.</li>
                  <li>Validated self-hosted model endpoints and helped productionize a RAG agent using FastAPI and Docker.</li>
                </ul>
                <div className="tag-row"><span>Enterprise AI</span><span>PostgreSQL</span><span>vLLM</span><span>FastAPI</span><span>Docker</span></div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">JUN 2025 — NOV 2025</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content">
                <div className="role-top"><div><h3>AI Associate Engineer</h3><p className="company">Datavalley AI <span>· Hyderabad, India</span></p></div><span className="role-tag">RAG RESEARCH AGENT</span></div>
                <p>Independently built a research agent that combines local knowledge retrieval with live web search and exposes the workflow through a service API.</p>
                <ul className="experience-points">
                  <li>Created multi-format document ingestion with local Hugging Face embeddings and ChromaDB.</li>
                  <li>Implemented content-hash manifests for incremental indexing rather than full re-ingestion.</li>
                  <li>Containerized the FastAPI service and built a golden-dataset evaluation harness for regression testing.</li>
                </ul>
                <div className="tag-row"><span>LangChain</span><span>ChromaDB</span><span>FastAPI</span><span>Docker</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section-pad" id="projects">
        <div className="section-wrap">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading-row"><h2>Projects with a<br /><span className="serif-italic">purpose.</span></h2><p>A mix of production-oriented engineering and machine learning projects. Each one starts with a problem, not a buzzword.</p></div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className={`project-card ${project.tone}`} key={project.number}>
                <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-icon"><Icon size={22} strokeWidth={1.6}/></span></div>
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">{project.stack.map((skill) => <span key={skill}>{skill}</span>)}</div>
                <div className="project-outcome"><CheckCircle2 size={15}/><span>{project.outcome}</span></div>
              </article>;
            })}
          </div>
          <p className="project-note">Project summaries are based on my experience and project work. Source-code links can be added to individual projects when the repositories are ready to share.</p>
        </div>
      </section>

      <section className="skills section-pad" id="skills">
        <div className="section-wrap">
          <div className="section-kicker">04 / MY TOOLKIT</div>
          <div className="section-heading-row"><h2>The tools behind<br /><span className="serif-italic">the work.</span></h2><p>Technologies I&apos;ve used to build, connect, evaluate, and deploy AI applications.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return <div className="skill-card" key={group.title}><div className="skill-card-head"><span><Icon size={19}/></span><h3>{group.title}</h3></div><div className="skill-list">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>;
            })}
          </div>
          <div className="education-row"><div className="education-icon"><GraduationCap size={23}/></div><div><span className="mini-label">EDUCATION</span><h3>B.Tech — Artificial Intelligence & Machine Learning</h3><p>Vijaya Institute of Technology for Women · Vijayawada, Andhra Pradesh · 2021–2025</p></div><div className="cgpa"><strong>8.13</strong><span>/ 10 CGPA</span></div></div>
          <div className="cert-row"><span className="mini-label">CERTIFICATIONS</span><div className="cert-items"><span>Microsoft Azure AI Engineer Associate</span><span>Microsoft Azure AI Fundamentals</span><span>Introduction to Cybersecurity · Cisco</span></div></div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="section-wrap contact-inner">
          <div className="section-kicker">05 / WHAT&apos;S NEXT?</div>
          <div className="contact-layout"><div><h2>Have a problem<br />worth <span className="serif-italic">solving?</span></h2><p>I&apos;m always interested in thoughtful conversations about AI engineering, useful products, and meaningful technical challenges.</p></div>
          <div className="contact-links">
            <a className="contact-link" href="mailto:maduteja33@gmail.com"><span className="contact-link-icon"><Mail size={19}/></span><span><small>EMAIL ME</small><b>maduteja33@gmail.com</b></span><ArrowUpRight size={18}/></a>
            <a className="contact-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={19}/></span><span><small>CONNECT ON</small><b>LinkedIn <em>Replace with your profile URL</em></b></span><ArrowUpRight size={18}/></a>
            <a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={19}/></span><span><small>EXPLORE CODE</small><b>GitHub <em>Replace with your profile URL</em></b></span><ArrowUpRight size={18}/></a>
          </div></div>
          <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">T<span>.</span></span><span>TEJA SREE</span></a><p>Designed with curiosity. Built with intention.</p><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© 2026 TEJA SREE</span></footer>
        </div>
      </section>
    </main>
  );
}
