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
    note: null,
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
    note: null,
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
    note: null,
    className: 'projectCoral',
    visual: 'coffee',
  },
  {
    number: '05',
    title: 'NBA Defensive Analytics',
    type: 'Sports analytics · Ongoing',
    description: 'Developing a Python model of NBA player defensive efficiency from player, lineup, and opponent data. The analysis measures shared court time for player pairs and adjusts defensive efficiency and scoring for opposing players’ ability.',
    stack: ['Python', 'Player + lineup data', 'Opponent adjustment', 'Applied statistics'],
    href: null,
    note: 'Ongoing analysis',
    className: 'projectDark',
    visual: 'nba',
  },
  {
    number: '06',
    title: 'UFC Fight Analytics',
    type: 'Sports analytics · Cornell Data Journal',
    description: 'Led a four-person team that scraped, cleaned, and analyzed 3,000+ UFC fight records in Python. We built analytical models and visualizations and published findings with methodological explanations; the article received 8,000+ views.',
    stack: ['Python', 'Web scraping', 'Data pipelines', 'Visualization'],
    href: null,
    note: 'Published in Cornell Data Journal',
    className: 'projectUfc',
    visual: 'ufc',
  },
];

const experience = [
  { year: '2026', company: 'ByteDance', role: 'Product Operations Intern', detail: 'Translating complex AI coding workflows into scalable product education, research, and feature recommendations.' },
  { year: '2026', company: 'Quantum Financial Advisor', role: 'Data Science Intern', detail: 'Building reusable Python and SQL workflows for portfolio, risk, and decision-ready analytics.' },
  { year: '2025—Now', company: 'Michael Charles Lab · Cornell', role: 'Undergraduate Researcher', detail: 'Built a 120K+ observation climate and agriculture pipeline and an XGBoost crop-yield model; now studying irrigation tradeoffs.' },
  { year: '2025', company: 'EY', role: 'Data Analytics Intern', detail: 'Automated financial-statement validation and variance analysis, saving approximately four hours each week.' },
];

const coffeeResponse = 'Hi Maya — your move from climate research into product analytics caught my eye. I’m exploring how teams turn complex data into products people actually use, and I’d love to compare notes over coffee.';

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
      <div className="coffeeProfile">
        <div className="profileCover" />
        <div className="profileIdentity profileScanTarget">
          <span className="profileAvatar">MC<i /></span>
          <div><b>Maya Chen</b><small>Product Analytics · New York</small></div>
          <span className="profileConnect">2nd</span>
        </div>
        <p className="profileAbout profileScanTarget">Building thoughtful data products. Previously climate research.</p>
        <div className="profileSignals">
          <div className="profileScanTarget"><small>Now</small><b>Northstar AI</b><span>Product Analytics</span></div>
          <div className="profileScanTarget"><small>Before</small><b>Cornell</b><span>Climate Research</span></div>
          <div className="profileScanTarget"><small>Interested in</small><b>Human-centered AI</b><span>Experiments · Data products</span></div>
        </div>
        <div className="profileScanBeam" />
        <div className="profileScanStatus"><i /><span>Reading profile</span></div>
        <div className="profileScanComplete"><span>✓</span> Profile understood</div>
      </div>
      <div className="coffeeThinking"><span className="thinkingSpark">✦</span><b>Thinking about the right opening</b><span className="thinkingDots"><i /><i /><i /></span></div>
      <div className="coffeeResponse">
        <small>Personalized outreach</small>
        <div className="messageBubble">{coffeeResponse.split(' ').map((word, index) => <span className="responseWord" key={`${word}-${index}`}>{word}{'\u00A0'}</span>)}</div>
      </div>
    </div>
  );
  if (type === 'nba') return (
    <div className="nbaVisual visual" aria-hidden="true">
      <div className="nbaVisualHead"><span>Defensive model / In development</span><b>NBA</b></div>
      <div className="nbaPair"><span>Player A</span><span className="nbaPairJoin">+</span><span>Player B</span></div>
      <div className="nbaShared">Shared court stints <span>→</span> Defensive outcomes</div>
      <div className="nbaAdjusted"><small>Context adjustment</small><b>Opponent ability</b><span>Compare pairings across game contexts</span></div>
    </div>
  );
  return (
    <div className="ufcVisual visual" aria-hidden="true">
      <div className="ufcVisualHead">Cornell Data Journal <span>Sports analytics</span></div>
      <div className="ufcVisualStats"><div><b>3,000+</b><span>fight records analyzed</span></div><div><b>8,000+</b><span>article views</span></div></div>
      <div className="ufcVisualFlow">Scrape <span>·</span> Clean <span>·</span> Model <span>·</span> Explain</div>
    </div>
  );
}

export default function Home() {
  return (
    <PortfolioMotion>
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <div className="navNote">Data, AI &amp; product <span className="navRule" /></div>
        <a className="wordmark" href="#top" aria-label="Steven Xu, home">Steven Xu</a>
        <div className="navLinks">
          <span className="navRule" />
          <a href="#work">Work</a><span>—</span><a href="#experience">Experience</a><span>—</span><a href="#about">About</a><span>—</span><a href="mailto:xyjsteven15@gmail.com">Email</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroTab">@xyjsteven15</div>
        <div className="heroMain">
          <div className="heroPortrait"><img src="/pweb/steven-avatar.png" alt="Pixel portrait of Steven Xu" /></div>
          <div className="heroCopy">
            <div className="availability">Open to ambitious data + product work</div>
            <h1>I turn messy data into <em>products people can use.</em></h1>
            <div className="heroFooter">
              <p>I&apos;m Steven Xu — a Cornell student building at the intersection of data science, AI, and product design.</p>
              <a className="heroJump" href="#work">Explore selected work <span>↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto" aria-label="Introduction">
        <p className="kicker">About me</p>
        <p className="manifestoText">I like the whole problem: asking the right question, shaping the data, building the model, and shipping the interface that makes the answer <span>click.</span></p>
        <div className="proofRow"><div><b>7</b><span>public builds</span></div><div><b>3.9</b><span>Cornell GPA</span></div><div><b>4</b><span>domains explored</span></div><a href="/pweb/Steven-Xu-Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></div>
      </section>

      <section className="workSection" id="work">
        <div className="sectionHead"><p className="kicker">Selected work</p><p>Products, experiments, and analysis across AI, data, and sport.</p></div>

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
              <div className="projectCardCopy"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>{project.href ? <a className="textLink" href={project.href} target="_blank" rel="noreferrer">Explore build <span>↗</span></a> : <span className="projectNote">{project.note}</span>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="experienceSection" id="experience">
        <div className="sectionHead light"><p className="kicker">Experience</p><p>Across product, finance, and research.</p></div>
        <div className="timeline">
          {experience.map((item) => <article className="timelineRow" key={item.company}><p>{item.year}</p><div><h3>{item.company}</h3><span>{item.role}</span></div><p>{item.detail}</p></article>)}
        </div>
        <article className="researchHighlight" id="research">
          <div><p className="kicker">Research · Michael Charles Lab, Cornell University</p><h3>Crop Yield Prediction<br />&amp; Irrigation Optimization</h3><span className="researchStatus">Irrigation analysis ongoing</span></div>
          <div className="researchDetails">
            <p>Built a Python pipeline integrating 120K+ climate and agricultural observations, then trained an XGBoost regression model to predict crop-specific yields from climate variables and crop-model inputs.</p>
            <p>Now comparing predicted yield gains with water input across irrigation levels. I visualized rainfall deficits and predicted yields in Tableau and presented the method to agricultural partners and faculty. No optimal irrigation level has been established yet.</p>
          </div>
        </article>
      </section>

      <section className="aboutSection" id="about">
        <div className="aboutLead"><p className="kicker">Toolkit</p><h2>Statistical rigor.<br /><em>Builder energy.</em></h2></div>
        <div className="aboutBody">
          <p>Studying Biometry &amp; Statistics at Cornell, with minors in Computer Science and Business. I use Python, predictive modeling, and applied statistics across agriculture and sports, then communicate the findings clearly.</p>
          <div className="toolkit">
            <div><span>Model + analyze</span><p>Python · Pandas · scikit-learn · PyTorch · XGBoost · R · applied statistics</p></div>
            <div><span>Build + ship</span><p>Next.js · JavaScript · FastAPI · Flask · REST APIs · WeChat Mini Programs</p></div>
            <div><span>Query + scale</span><p>SQL · MySQL · Snowflake · AWS · Azure · GCP</p></div>
            <div><span>Explain + decide</span><p>Tableau · Power BI · experimentation · forecasting · product strategy</p></div>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">Steven Xu</a>
        <div className="footerLinks"><a href="mailto:xyjsteven15@gmail.com">Email</a><a href="https://linkedin.com/in/sxxyj" target="_blank" rel="noreferrer">LinkedIn</a><a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a></div>
        <span>© 2026 Steven Xu</span>
      </footer>
    </main>
    </PortfolioMotion>
  );
}
