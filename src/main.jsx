import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profile = {
  name: 'Lee',
  role: 'Product-minded Frontend Developer',
  headline: '把复杂想法打磨成清晰、可靠、好看的数字体验。',
  intro:
    '我关注设计系统、前端工程和 AI 产品体验，擅长把模糊需求整理成可交付的界面与工作流。',
  location: 'Shanghai / Remote',
  email: 'hello@example.com',
  links: [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Resume', href: '#' },
  ],
};

const skills = [
  'React',
  'TypeScript',
  'Design Systems',
  'Product Thinking',
  'AI Workflows',
  'Performance',
];

const projects = [
  {
    title: 'Signal Studio',
    description: '一个用于梳理产品洞察、整理用户反馈并生成行动建议的轻量工作台。',
    tags: ['React', 'Data UX', 'AI'],
    image: '/images/project-signal.svg',
    href: '#',
  },
  {
    title: 'Atlas Dashboard',
    description: '面向运营团队的指标看板，强调信息密度、可扫描性和稳定的交互节奏。',
    tags: ['Dashboard', 'Charts', 'Systems'],
    image: '/images/project-atlas.svg',
    href: '#',
  },
  {
    title: 'Quiet Notes',
    description: '一个以专注写作为核心的个人知识库原型，支持快速收集和结构化回顾。',
    tags: ['Writing', 'Prototype', 'UX'],
    image: '/images/project-quiet.svg',
    href: '#',
  },
];

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Back to top">
        {profile.name}
      </a>
      <nav>
        <a href="#about">关于</a>
        <a href="#projects">项目</a>
        <a href="#contact">联系</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="headline">{profile.headline}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="#projects">
            查看项目
          </a>
          <a className="button secondary" href={`mailto:${profile.email}`}>
            联系我
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <img src="/images/hero-abstract.svg" alt="" />
        <div className="visual-stat">
          <span>Focus</span>
          <strong>Design x Code</strong>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div>
        <p className="section-kicker">About</p>
        <h2>用产品视角写代码，用工程方式打磨体验。</h2>
      </div>
      <div className="about-panel">
        <p>{profile.intro}</p>
        <div className="skill-list" aria-label="Skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-heading">
        <p className="section-kicker">Selected Work</p>
        <h2>精选项目</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={`${project.title} abstract cover`} />
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.href} aria-label={`Open ${project.title}`}>
                查看详情
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div>
        <p className="section-kicker">Contact</p>
        <h2>如果你也在打磨一个值得认真对待的想法，我们可以聊聊。</h2>
      </div>
      <div className="contact-actions">
        <a className="button primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        {profile.links.map((link) => (
          <a className="button secondary" href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
