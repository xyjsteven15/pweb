/* eslint-disable @next/next/no-img-element */
import PortfolioMotion from './PortfolioMotion';
import BookingPreview from './BookingPreview';

const githubUrl = 'https://github.com/xyjsteven15';

const projects = [
  {
    number: '02',
    title: 'FocusFlow AI',
    type: 'Full-stack AI productivity system',
    description: 'A privacy-minded assistant spanning a Chrome extension, FastAPI service, and Next.js analytics dashboard — built to turn browser activity into useful focus signals.',
    stack: ['Next.js', 'FastAPI', 'Chrome MV3', 'SQLite', 'LLM APIs'],
    href: `${githubUrl}/FocusFlow-AI`,
    className: 'projectBlue',
    visual: 'focus',
  },
  {
    number: '03',
    title: 'Customer Segmentation',
    type: 'Unsupervised learning · Retail analytics',
    description: 'A reproducible RFM pipeline comparing clustering models across 1.06M transactions — surfacing four customer groups and clear retention priorities.',
    stack: ['Python', 'Pandas', 'scikit-learn', 'PCA', 'Plotly'],
    href: `${githubUrl}/customer-segmentation`,
    className: 'projectAcid',
    visual: 'segments',
  },
  {
    number: '04',
    title: 'Coffee Chat Generator',
    type: 'AI agent · Browser extension',
    description: 'A personalized networking copilot that pairs a profile-learning agent with a Chrome extension and a full-stack message workspace.',
    stack: ['Next.js', 'Prisma', 'SQLite', 'Claude', 'Chrome MV3'],
    href: `${githubUrl}/coffee-chat-generator`,
    className: 'projectCoral',
    visual: 'coffee',
  },
  {
    number: '05',
    title: 'BigQuery Release Notes',
    type: 'Live data product · Developer tooling',
    description: 'A responsive feed reader that transforms Google Cloud Atom XML into filterable release cards with categories, sharing, and a polished dark interface.',
    stack: ['Python', 'Flask', 'XML', 'JavaScript', 'REST'],
    href: `${githubUrl}/xyjsteven15-event-talks-app`,
    className: 'projectDark',
    visual: 'release',
  },
];

const experience = [
  { year: '2026', company: 'ByteDance · TRAE', role: 'Product Operations Intern', detail: 'Translating complex AI coding workflows into scalable product education, research, and feature recommendations.' },
  { year: '2026', company: 'Quantum Financial Advisor', role: 'Data Science Intern', detail: 'Building reusable Python and SQL workflows for portfolio, risk, and decision-ready analytics.' },
  { year: '2025—Now', company: 'Michael Charles Lab · Cornell', role: 'Undergraduate Researcher', detail: 'Developing climate and agriculture data pipelines, regression models, and scenario-based forecasts.' },
  { year: '2025', company: 'EY', role: 'Data Analytics Intern', detail: 'Automated financial-statement validation and variance analysis, saving approximately four hours each week.' },
];

const coffeeResponse = 'Hi Maya — your move from research to product analytics caught my eye. I would love to compare notes over coffee.';

function ProjectVisual({ type }: { type: string }) {
  if (type === 'focus') return (
    <div className="focusVisual visual" aria-hidden="true">
      <div className="focusWindow"><div className="windowDots"><i /><i /><i /></div><div className="focusScore"><b className="focusScoreValue">84</b><span>focus score</span></div><div className="focusBars"><i /><i /><i /><i /><i /><i /></div></div>
      <div className="extensionCard"><b>01:24:18</b><span>Deep work</span><small>Session active</small></div>
    </div>
  );
  if (type === 'segments') return (
    <div className="segmentsVisual visual" aria-hidden="true">
      <div className="segmentSource"><b>100%</b><span>all customers</span></div>
      <div className="segmentStat"><b>76%</b><span>revenue from Champions</span></div>
      <div className="bubble bubbleA">23.2%</div><div className="bubble bubbleB">24.5%</div><div className="bubble bubbleC">32%</div><div className="bubble bubbleD">20.3%</div>
    </div>
  );
  if (type === 'coffee') return (
    <div className="coffeeVisual visual" aria-hidden="true">
      <div className="profileChip"><span>SX</span><div><b>Your profile</b><small>Goals + voice learned</small></div></div>
      <div className="coffeePrompt"><span>Prompt</span><b>Write a warm intro using this portfolio</b></div>
      <div className="coffeeThinking"><span className="thinkingSpark">✦</span><b>Thinking...</b><span className="thinkingDots"><i /><i /><i /></span></div>
      <div className="coffeeResponse">
        <small>Generated from portfolio</small>
        <div className="messageBubble">{coffeeResponse.split(' ').map((word, index) => <span className="responseWord" key={`${word}-${index}`}>{word}{' '}</span>)}</div>
      </div>
      <div className="messageActions"><span>Warm</span><span>Concise</span><b>Regenerate ↗</b></div>
    </div>
  );
  return (
    <div className="releaseVisual visual" aria-hidden="true">
      <div className="releaseHeader"><span className="liveDot" /> Live feed <b>BigQuery</b></div>
      <div className="releaseCard"><small>FEATURE · AUG 28</small><b>Vector search gets faster</b><span>Read update ↗</span></div>
      <div className="releaseCard muted"><small>ANNOUNCEMENT · AUG 22</small><b>New region availability</b></div>
    </div>
  );
}

export default function Home() {
  return (
    <PortfolioMotion>
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Steven Xu, home">SX<span>/</span></a>
        <div className="navLinks">
          <a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a>
          <a className="navCta" href="mailto:xyjsteven15@gmail.com">Let&apos;s talk</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroBulb" aria-hidden="true">
          <span className="bulbWire" />
          <span className="bulbGlow" />
          <img className="bulbImage" src="/pweb/glowing-bulb.png" alt="" width="54" height="84" />
        </div>
        <div className="availability"><span /> Open to ambitious data + product work</div>
        <h1>I turn messy data into <em>products</em> people can use.</h1>
        <div className="heroFooter">
          <p>I&apos;m Steven Xu — a Cornell student building at the intersection of data science, AI, and product design.</p>
          <a className="roundLink" href="#work" aria-label="Explore selected work">↓</a>
        </div>
        <div className="heroOrbit orbitOne" aria-hidden="true">PYTHON · SQL · PRODUCT ·</div><div className="heroOrbit orbitTwo" aria-hidden="true" />
      </section>

      <section className="manifesto" aria-label="Introduction">
        <p className="kicker">The short version</p>
        <p className="manifestoText">I like the whole problem: asking the right question, shaping the data, building the model, and shipping the interface that makes the answer <span>click.</span></p>
        <div className="proofRow"><div><b>7</b><span>public builds</span></div><div><b>3.9</b><span>Cornell GPA</span></div><div><b>4</b><span>domains explored</span></div><a href="/pweb/Steven-Xu-Resume.pdf" target="_blank">Résumé ↗</a></div>
      </section>

      <section className="workSection" id="work">
        <div className="sectionHead"><p className="kicker">Selected work</p><p>Systems, experiments, and mini programs — each one a different way of making complex work feel simple.</p></div>

        <article className="featureCard">
          <div className="featureCopy">
            <p className="projectType"><span>01</span> WeChat mini program · Product prototype</p>
            <h2>桥水汀<br /><span>Qiaoshuiting</span></h2>
            <p className="projectSummary">A refined reservation experience for a private-dining restaurant, built around live room availability, flexible party sizes, and a clear path from discovery to confirmation.</p>
            <div className="tags"><span>WXML</span><span>WXSS</span><span>JavaScript</span><span>Supabase-ready</span></div>
            <a className="textLink" href={`${githubUrl}/qiaoshuiting-miniprogram`} target="_blank" rel="noreferrer">View project <span>↗</span></a>
          </div>
          <BookingPreview />
        </article>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className={`projectCard ${project.className}`} key={project.title}>
              <div className="projectCardTop"><span>{project.number}</span><span>{project.type}</span></div>
              <ProjectVisual type={project.visual} />
              <div className="projectCardCopy"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><a className="textLink" href={project.href} target="_blank" rel="noreferrer">Explore build <span>↗</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="experienceSection" id="experience">
        <div className="sectionHead light"><p className="kicker">Experience</p><p>Product instinct backed by analytical depth — developed across AI, finance, research, and consulting.</p></div>
        <div className="timeline">
          {experience.map((item) => <article className="timelineRow" key={item.company}><p>{item.year}</p><div><h3>{item.company}</h3><span>{item.role}</span></div><p>{item.detail}</p></article>)}
        </div>
      </section>

      <section className="aboutSection" id="about">
        <div className="aboutLead"><p className="kicker">About + toolkit</p><h2>Statistical rigor.<br /><em>Builder energy.</em></h2></div>
        <div className="aboutBody">
          <p>Currently studying Biometry &amp; Statistics at Cornell, with minors in Computer Science and Business.</p>
          <div className="toolkit">
            <div><span>Model + analyze</span><p>Python · Pandas · NumPy · scikit-learn · PyTorch · XGBoost · R</p></div>
            <div><span>Build + ship</span><p>Next.js · JavaScript · FastAPI · Flask · REST APIs · WeChat Mini Programs</p></div>
            <div><span>Query + scale</span><p>SQL · MySQL · Snowflake · AWS · Azure · GCP · data pipelines</p></div>
            <div><span>Explain + decide</span><p>Tableau · Power BI · experimentation · forecasting · product strategy</p></div>
          </div>
        </div>
      </section>

      <section className="contactSection">
        <p className="kicker">Have a hard problem?</p><h2>Let&apos;s make it<br /><em>useful.</em></h2>
        <div className="contactLinks"><a href="mailto:xyjsteven15@gmail.com">Email me ↗</a><a href="https://linkedin.com/in/sxxyj" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </section>

      <footer><a className="wordmark" href="#top">SX<span>/</span></a><p>Designed around curiosity, built with intent.</p><span>© 2026 Steven Xu</span></footer>
    </main>
    </PortfolioMotion>
  );
}
