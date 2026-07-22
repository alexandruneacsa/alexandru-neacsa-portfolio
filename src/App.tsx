import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Presentation,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const nav = ['About', 'Experience', 'Projects', 'Expertise', 'Leadership', 'Education'];

const experience = [
  {
    company: 'Deutsche Bank',
    role: 'Senior Java Full-Stack Engineer · IT Application Owner',
    period: 'July 2025 — Present',
    location: 'Bucharest, Romania',
    summary:
      'Building and owning Developer Productivity & Experience applications, shaping modern engineering practices with engineering teams and divisional leadership.',
    bullets: [
      'Full-stack delivery across Java, Kotlin, Spring Boot, React and TypeScript.',
      'End-to-end lifecycle ownership, operational stability and IT policy alignment.',
      'Workstream ownership, client collaboration, mentoring and recruitment support.',
      'Internal enablement through workshops, events, training and technical materials.',
    ],
    stack: ['Java', 'Kotlin', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Flyway', 'Gradle', 'GCP', 'OpenShift', 'DORA', 'SPACE', 'XP', 'TDD'],
  },
  {
    company: 'Vodafone',
    role: 'Java Software Engineer',
    period: 'October 2023 — July 2025',
    location: 'Bucharest, Romania',
    summary:
      'Designed and maintained enterprise microservices and integrations in telecom modernization initiatives spanning billing, ordering and finance.',
    bullets: [
      'Event-driven and integration-heavy services with Kafka, Camel and Flink.',
      'Database-first development with PostgreSQL, Oracle and Redis.',
      'CI/CD pipelines, code quality and automated testing in enterprise environments.',
      'Cloud-native delivery using AWS, Docker and Kubernetes.',
    ],
    stack: ['Java', 'Spring Boot', 'Kafka', 'Apache Camel', 'Apache Flink', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Oracle', 'Redis', 'GitLab', 'Jenkins', 'SonarQube'],
  },
  {
    company: 'Endava',
    role: '.NET Software Engineer · .NET QA Automation Engineer · Java Software Engineer',
    period: 'June 2022 — October 2023',
    location: 'Pitești, Romania',
    summary:
      'Delivered application features and quality engineering solutions for HR and insurance platforms using .NET, Java, Azure and modern automation frameworks.',
    bullets: [
      'Built new features and applied CQRS patterns with .NET 6 and MediatR.',
      'Created end-to-end automation frameworks with Selenium and Playwright.',
      'Implemented unit, integration, API and UI tests and communicated status to clients.',
      'Trainer and presenter in testing, automation, cloud, Agile and database communities.',
    ],
    stack: ['C#', '.NET 6', 'Java', 'Azure', 'Azure DevOps', 'MediatR', 'EF Core', 'CQRS', 'NUnit', 'xUnit', 'Selenium', 'Playwright', 'SpecFlow', 'RestSharp'],
  },
  {
    company: 'DRÄXLMAIER Group',
    role: '.NET Software Engineer',
    period: 'April 2022 — June 2022',
    location: 'Pitești, Romania',
    summary:
      'Developed shop-floor business applications and integrations in a multinational automotive environment.',
    bullets: [
      'Web-based multi-user business applications and technical proposals.',
      'Industrial connectivity through OPC UA and TCP/IP.',
      'Unit testing, manual validation, bug fixing and code review.',
      'Direct collaboration around business requirements and delivery status.',
    ],
    stack: ['C#', '.NET Framework', 'Oracle', 'OPC UA', 'TCP/IP', 'XML', 'JSON', 'Jenkins', 'Jira', 'SVN', 'NUnit'],
  },
];

const projects = [
  {
    icon: Sparkles,
    title: 'Developer Experience Platform',
    domain: 'Banking · Internal Engineering Platform',
    copy: 'Full-stack applications and strategic tooling that help engineering teams measure, understand and improve software delivery and developer experience.',
    highlights: ['DORA & SPACE insights', 'Enterprise lifecycle ownership', 'Cross-team adoption', 'Policy-aligned delivery'],
    stack: ['Java', 'Kotlin', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'GCP', 'OpenShift'],
  },
  {
    icon: Layers3,
    title: 'Telecom Modernization Services',
    domain: 'Telecom · Billing, Ordering & Finance',
    copy: 'Scalable microservices, data flows and integration routes supporting modernization of high-volume enterprise telecom capabilities.',
    highlights: ['Event-driven services', 'Stream & batch processing', 'Enterprise integrations', 'Database-first development'],
    stack: ['Java', 'Spring Boot', 'Kafka', 'Camel', 'Flink', 'AWS', 'PostgreSQL', 'Oracle'],
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Quality Engineering',
    domain: 'HR & Insurance · Test Automation',
    copy: 'Automation architecture for UI, API and integration testing, with reusable frameworks designed for maintainable delivery pipelines.',
    highlights: ['Playwright framework', 'Selenium framework', 'API automation', 'CI integration'],
    stack: ['C#', '.NET 6', 'Playwright', 'Selenium', 'SpecFlow', 'NUnit', 'xUnit', 'Azure DevOps'],
  },
  {
    icon: ServerCog,
    title: 'Industrial Shop-Floor Systems',
    domain: 'Automotive · Manufacturing Technology',
    copy: 'Business applications connected to industrial systems, designed for reliable data exchange and operational use in manufacturing environments.',
    highlights: ['OPC UA connectivity', 'TCP/IP integration', 'Multi-user systems', 'Oracle persistence'],
    stack: ['C#', '.NET Framework', 'OPC UA', 'TCP/IP', 'Oracle', 'Jenkins'],
  },
  {
    icon: Code2,
    title: 'Early Engineering Projects',
    domain: 'Java · Android · Test Engineering',
    copy: 'Hands-on programs and projects that established foundations in software engineering, Android, OOP, data structures, algorithms and automated testing.',
    highlights: ['Java & Spring foundations', 'Android development', 'Selenium automation', 'Clean code & OOP'],
    stack: ['Java', 'Spring', 'Android', 'Gradle', 'Maven', 'SQLite', 'Selenium', 'Python'],
  },
];

const skillGroups = [
  ['Languages', ['Java', 'Kotlin', 'C#', 'TypeScript', 'JavaScript', 'Python', 'C/C++', 'PHP', 'SQL', 'HTML', 'CSS']],
  ['Backend & Architecture', ['Spring Boot', 'Spring Data JPA', 'Spring Security', '.NET', 'EF Core', 'CQRS', 'MediatR', 'REST', 'SOAP', 'Microservices', 'Architecture Patterns', 'Java EE']],
  ['Integration & Data', ['Apache Kafka', 'Apache Camel', 'Apache Flink', 'Apache APISIX', 'S3', 'PostgreSQL', 'Oracle', 'SQL Server', 'MySQL', 'Redis', 'Elasticsearch', 'Cosmos DB', 'Flyway', 'Liquibase']],
  ['Frontend', ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Jest', 'Vitest', 'HTML', 'CSS']],
  ['Cloud & DevOps', ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'OpenShift', 'GitHub', 'GitLab', 'Jenkins', 'Azure DevOps', 'SonarQube', 'Maven', 'Gradle']],
  ['Quality Engineering', ['JUnit', 'Mockito', 'Testcontainers', 'REST Assured', 'NUnit', 'xUnit', 'Moq', 'RestSharp', 'Selenium', 'Playwright', 'Cucumber', 'SpecFlow', 'Postman', 'Swagger UI', 'UI / API / E2E Testing']],
  ['Engineering Practices', ['Agile', 'Scrum', 'XP', 'TDD', 'BDD', 'DORA', 'SPACE', 'CI/CD', 'Code Review', 'Mentoring', 'Recruitment', 'Developer Experience']],
  ['Platforms & Tools', ['IntelliJ IDEA', 'Visual Studio', 'VS Code', 'Android Studio', 'Jira', 'Git', 'SVN', 'Tomcat', 'IIS', 'OPC UA', 'TCP/IP', 'XML', 'JSON']],
] as const;

const education = [
  { title: 'AI and Career Empowerment', place: 'University of Maryland Robert H. Smith School of Business', period: '2026' },
  { title: 'Bachelor of Engineering — Computer Engineering & Information Technology', place: 'National University of Science and Technology POLITEHNICA Bucharest', period: '2020 — 2024' },
  { title: 'Mathematics & Computer Science', place: '“Ion Cantacuzino” Theoretical High School, Pitești', period: '2016 — 2020' },
];

const certifications = [
  'Career Essentials in GitHub', 'Microservices Foundations', 'Driving Business Towards the Sustainable Development Goals', 'Agile Foundations', 'DevOps Professional Certificate',
  'CCNAv7: Switching, Routing and Wireless Essentials', 'CCNAv7: Introduction to Networks', 'LambdaTest Test Automation Professional', 'Selenium Essential Training',
  'API Testing Foundations', 'Advanced Web APIs with ASP.NET Core', 'C# Test-Driven Development', 'Continuous Testing and DevOps', 'Test Automation Foundations',
  '.NET Automation Training', 'Project Management Foundations', 'SQL Data Reporting and Analysis', 'Cybersecurity Essentials', 'Python Essentials', 'C++ Essentials', 'IT Essentials',
];

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('About');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id[0].toUpperCase() + visible.target.id.slice(1));
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] });
    nav.forEach((item) => { const el = document.getElementById(item.toLowerCase()); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return <>
    <header className="topbar">
      <a className="brand" href="#about" aria-label="Alexandru Neacsa home"><span>AN</span><strong>Alexandru Neacsa</strong></a>
      <nav className="desktop-nav">
        {nav.map((item) => <a key={item} className={active === item ? 'active' : ''} href={`#${item.toLowerCase()}`}>{item}</a>)}
      </nav>
      <a className="contact-link" href="mailto:alexneacsa14@gmail.com">Contact <ArrowUpRight size={16} /></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
    </header>
    {menuOpen && <div className="mobile-nav">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ChevronRight size={16}/></a>)}</div>}

    <main>
      <section id="about" className="hero section-shell">
        <div className="hero-copy">
          <div className="status"><span></span> Senior Full-Stack Engineer · Bucharest</div>
          <h1>Engineering enterprise software with <em>clarity, ownership and impact.</em></h1>
          <p className="hero-lead">I’m <strong>Alexandru Neacsa</strong>, a Senior Full-Stack Engineer, IT Application Owner and Assistant Vice President working across Java, Kotlin, React, .NET, cloud platforms and quality engineering.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#experience">Explore experience <ChevronRight size={17}/></a>
            <a className="secondary-button" href="mailto:alexneacsa14@gmail.com"><Mail size={17}/> Email me</a>
          </div>
          <div className="meta-row"><span><MapPin size={15}/> Bucharest, Romania</span><span><BriefcaseBusiness size={15}/> 5+ years across enterprise teams</span></div>
        </div>
        <aside className="profile-card">
          <div className="profile-monogram">AN</div>
          <p className="small-label">Current focus</p>
          <h3>Developer Productivity & Experience</h3>
          <p>Full-stack engineering, application ownership, DevEx strategy and technical enablement in a global banking environment.</p>
          <div className="mini-grid"><div><strong>4</strong><span>industries</span></div><div><strong>3</strong><span>clouds</span></div><div><strong>2</strong><span>core ecosystems</span></div><div><strong>∞</strong><span>curiosity</span></div></div>
        </aside>
      </section>

      <section className="value-strip">
        <div><Code2/><span><strong>Full-stack delivery</strong>Backend, frontend and integrations</span></div>
        <div><Building2/><span><strong>Enterprise ownership</strong>From discovery to production lifecycle</span></div>
        <div><Users/><span><strong>Engineering enablement</strong>Mentoring, workshops and recruitment</span></div>
        <div><Presentation/><span><strong>Trainer & presenter</strong>Technical communities and university sessions</span></div>
      </section>

      <section id="experience" className="section-shell block-section">
        <SectionTitle eyebrow="Experience" title="Enterprise engineering, from shop floor to global banking." copy="A career spanning software development, quality engineering, integrations, cloud delivery, technical leadership and application ownership." />
        <div className="timeline">
          {experience.map((job, index) => <article className="experience-card" key={job.company}>
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="job-main"><div className="job-header"><div><h3>{job.company}</h3><h4>{job.role}</h4></div><div className="job-meta"><span>{job.period}</span><span>{job.location}</span></div></div>
            <p>{job.summary}</p><ul>{job.bullets.map(b => <li key={b}><CheckCircle2 size={16}/>{b}</li>)}</ul>
            <div className="chips">{job.stack.map(s => <span key={s}>{s}</span>)}</div></div>
          </article>)}
        </div>
      </section>

      <section id="projects" className="soft-section block-section">
        <div className="section-shell">
          <SectionTitle eyebrow="Selected enterprise work" title="Projects described by capability, not confidential client detail." copy="A representative view of the systems, platforms and engineering problems I have worked on." />
          <div className="project-grid">{projects.map(({icon: Icon, ...project}) => <article className="project-card" key={project.title}>
            <div className="project-icon"><Icon size={22}/></div><span className="domain">{project.domain}</span><h3>{project.title}</h3><p>{project.copy}</p>
            <div className="project-highlights">{project.highlights.map(h => <span key={h}><CheckCircle2 size={14}/>{h}</span>)}</div>
            <div className="chips compact">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
          </article>)}</div>
        </div>
      </section>

      <section id="expertise" className="section-shell block-section">
        <SectionTitle eyebrow="Engineering stack" title="Broad enough for the system. Deep enough for the hard parts." copy="The complete technology set gathered across enterprise development, automation, integrations, platforms and earlier engineering work." />
        <div className="skills-grid">{skillGroups.map(([title, skills]) => <article className="skill-card" key={title}><h3>{title}</h3><div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>

      <section id="leadership" className="dark-section block-section">
        <div className="section-shell leadership-grid">
          <div><SectionTitle eyebrow="Beyond delivery" title="Engineering is also about helping teams get better." copy="My work has consistently included communication, knowledge sharing and responsibility beyond individual tickets." /></div>
          <div className="leadership-list">
            {[
              ['Workstream ownership', 'Scope and shape work with stakeholders, coordinate delivery and own outcomes across a larger work package or sub-project.'],
              ['Mentoring & support', 'Support junior engineers, review work, share context and help people progress with confidence.'],
              ['Trainer & presenter', 'Delivered sessions on testing, automation, cloud, Agile, databases and software development in technical communities and university contexts.'],
              ['Engineering culture', 'Champion experimentation, XP, TDD, DevEx practices and practical adoption of strategic engineering tools.'],
              ['Recruitment & collaboration', 'Contribute to team growth and work directly with clients, engineering teams and leadership across organizational boundaries.'],
            ].map(([title, text], i) => <article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="education" className="section-shell block-section">
        <SectionTitle eyebrow="Education & continuous learning" title="Strong foundations, continuously expanded." />
        <div className="education-layout"><div className="education-list">{education.map(item => <article key={item.title}><GraduationCap/><div><span>{item.period}</span><h3>{item.title}</h3><p>{item.place}</p></div></article>)}</div>
        <div className="certifications"><h3>Selected training & certifications</h3><div>{certifications.map(c => <span key={c}>{c}</span>)}</div></div></div>
        <div className="languages"><h3>Languages</h3><span>Romanian · Native</span><span>English · Advanced</span><span>French · Basic</span><span>German · Basic</span></div>
      </section>

      <section className="contact-section"><div className="section-shell"><p>Let’s build useful software.</p><h2>For enterprise engineering, platform work or technical leadership conversations.</h2><a href="mailto:alexneacsa14@gmail.com">alexneacsa14@gmail.com <ArrowUpRight/></a></div></section>
    </main>

    <footer><div className="section-shell"><span>© {new Date().getFullYear()} Alexandru Neacsa</span><span>Senior Full-Stack Engineer · Bucharest</span></div></footer>
  </>;
}
