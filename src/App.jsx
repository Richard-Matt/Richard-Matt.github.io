import { useEffect } from 'react';
import BranchTree from './components/BranchTree';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import Reveal from './components/Reveal';
import SectionHeading from './components/SectionHeading';
import {
  languages,
  learningTopics,
  profile,
  skills,
  softwareProjects,
} from './data/portfolio';

function ExternalLink({ href, children }) {
  if (!href) return null;
  return <a href={href} target="_blank" rel="noreferrer">{children} <span aria-hidden="true">↗</span></a>;
}

function App() {
  useEffect(() => {
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${progress * 100}%`);
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  const greeting = `hi, ${profile.firstName.toLowerCase()} here.`;

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <NavBar />

      <main>
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="hero-center">
            <Reveal className="hero-art-wrap">
              <BranchTree />
            </Reveal>
            <Reveal delay={180} className="hero-copy">
              <p className="hero-kicker">A LITTLE ABOUT ME</p>
              <h1 id="hero-title">hi, <span>{profile.firstName.toLowerCase()}</span> here<span className="cursor">.</span></h1>
              <p className="hero-subtitle">
                {profile.role} at <span>{profile.university}</span>.
                <br />
                Curious about what can be built when ideas meet technology.
              </p>
              <a className="hero-scroll" href="#about">
                <span className="scroll-line" />
                Scroll to explore
              </a>
            </Reveal>
          </div>
          <div className="hero-coordinate hero-coordinate-left">12°55' N&nbsp; / &nbsp;79°08' E</div>
          <div className="hero-coordinate hero-coordinate-right">IN PROGRESS&nbsp; — &nbsp;ALWAYS</div>
        </section>

        <section className="content-section about-section" id="about">
          <SectionHeading number="01" eyebrow="A LITTLE CONTEXT">About me</SectionHeading>
          <div className="about-grid">
            <Reveal className="about-copy">
              <p className="lead-copy">
                I like understanding how things work — and then seeing what I can make with that understanding.
              </p>
              <p>
                I'm a first-year Computer Science and Engineering student at VIT Vellore. I'm building my foundations in programming and problem-solving while exploring the connections between software, artificial intelligence and hardware.
              </p>
              <p>
                I enjoy learning by trying things out: writing code, connecting services, experimenting with electronics and figuring out why something does — or doesn't — work. I'm still early in the journey, which is exactly what makes it exciting.
              </p>
              <div className="about-links">
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
                {profile.email ? <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a> : null}
              </div>
            </Reveal>
            <Reveal className="about-side" delay={120}>
              <div className="side-rule" />
              <span className="small-label">CURRENTLY</span>
              <p className="current-line">Learning the fundamentals. Building small things. Staying curious.</p>
              <div className="side-detail">
                <span>Based in</span>
                <strong>{profile.location}</strong>
              </div>
              <div className="side-detail">
                <span>Studying</span>
                <strong>Computer Science & Engineering</strong>
              </div>
              <div className="side-detail">
                <span>Interests</span>
                <strong>Software · AI · Electronics</strong>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="content-section journey-section" id="journey">
          <SectionHeading number="02" eyebrow="LEARNING IN PUBLIC">Journey</SectionHeading>
          <div className="journey-grid">
            <Reveal className="journey-intro">
              <p className="lead-copy">A work in progress, by design.</p>
              <p>
                I'm at the beginning of my university journey. Rather than present a long list of credentials, I'd rather show what I'm learning, what I've tried and what I want to understand next.
              </p>
              <p className="muted-note">The timeline will grow as I take on more projects, coursework and experiences.</p>
            </Reveal>
            <div className="timeline">
              <Reveal className="timeline-item">
                <span className="timeline-date">EARLIER</span>
                <div><h3>First steps with code</h3><p>Early programming experiments, including a small game project with guidance from a teacher.</p></div>
              </Reveal>
              <Reveal className="timeline-item" delay={90}>
                <span className="timeline-date">JUL 2026</span>
                <div><h3>Started at VIT Vellore</h3><p>Began my undergraduate journey in Computer Science and Engineering.</p></div>
              </Reveal>
              <Reveal className="timeline-item" delay={180}>
                <span className="timeline-date">2026 — NOW</span>
                <div><h3>Learning, building, exploring</h3><p>Strengthening programming fundamentals and experimenting with a personal technology project.</p></div>
              </Reveal>
              <Reveal className="timeline-item future-item" delay={270}>
                <span className="timeline-date">UP NEXT</span>
                <div><h3>More things to make</h3><p>Build a stronger foundation in software engineering, algorithms, AI and embedded systems.</p></div>
              </Reveal>
            </div>
          </div>
          <Reveal className="skills-block">
            <div className="skills-heading"><span className="small-label">TOOLS & LANGUAGES</span><span className="skills-caption">What I'm working with</span></div>
            <div className="skills-list">
              {skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span>{skill.name}</span><small>{skill.note}</small>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="content-section software-section" id="software">
          <SectionHeading number="03" eyebrow="THINGS I'VE MADE">Software</SectionHeading>
          <div className="section-intro-row">
            <p className="lead-copy">Small projects, useful lessons.</p>
            <p className="section-intro-note">A few experiments from my learning journey. Each one has taught me something different.</p>
          </div>
          <div className="projects-grid">
            {softwareProjects.map((project, index) => (
              <Reveal key={project.number} delay={index * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <p className="authenticity-note"><span aria-hidden="true">✳</span> Project visuals are intentionally illustrative until I add real screenshots of my own work.</p>
        </section>

        <section className="content-section hardware-section" id="hardware">
          <SectionHeading number="04" eyebrow="BEYOND THE SCREEN">Hardware & experiments</SectionHeading>
          <div className="hardware-grid">
            <Reveal className="hardware-copy">
              <p className="lead-copy">I like when software reaches into the physical world.</p>
              <p>
                I'm interested in microcontrollers, electronics and small connected systems. My exploration of Nebula has also led me to think about how a software backend can communicate with devices and sensors.
              </p>
              <p>
                Areas I want to explore further include ESP32, Raspberry Pi, embedded programming and interactive interfaces. This is an area of curiosity and experimentation, not a list of finished hardware products.
              </p>
            </Reveal>
            <Reveal className="hardware-specimen" delay={130}>
              <div className="specimen-frame">
                <div className="specimen-topline"><span>EXPERIMENT LOG</span><span>NO. 001</span></div>
                <div className="circuit-art" aria-hidden="true">
                  <svg viewBox="0 0 420 250" role="presentation">
                    <g fill="none" stroke="currentColor" strokeWidth="1.3">
                      <path d="M32 126H105V74H165M105 126V185H185M165 74H235V111H298M185 185H250V158H335" />
                      <path d="M235 111V47H310M298 111H366V190H390" />
                      <rect x="165" y="55" width="70" height="38" rx="3" />
                      <rect x="185" y="165" width="65" height="40" rx="3" />
                      <rect x="298" y="91" width="68" height="40" rx="3" />
                      <circle cx="32" cy="126" r="4"/><circle cx="310" cy="47" r="4"/><circle cx="390" cy="190" r="4"/>
                      <circle cx="105" cy="74" r="3"/><circle cx="105" cy="185" r="3"/><circle cx="335" cy="158" r="3"/>
                      <path d="M178 68h42M178 78h26M198 177h38M198 188h24M311 104h40M311 116h25" opacity=".5"/>
                    </g>
                  </svg>
                </div>
                <div className="specimen-label"><strong>Connected systems</strong><span>Curiosity → prototype → learning</span></div>
              </div>
              <span className="hardware-caption">A visual motif — not a photograph of a completed circuit.</span>
            </Reveal>
          </div>
        </section>

        <section className="content-section beyond-section" id="beyond-code">
          <SectionHeading number="05" eyebrow="THE HUMAN SIDE">Beyond code</SectionHeading>
          <div className="beyond-grid">
            <Reveal>
              <p className="lead-copy">There is more to learning than writing code.</p>
              <p>
                I value clear communication, collaboration and being able to explain an idea in a way that makes sense to someone else. Preparing a presentation on leadership styles and team roles helped me think about how people contribute, make decisions and work through challenges together.
              </p>
              <p>
                Outside my coursework, I enjoy exploring new technology, creative design, digital experiences and languages. I'm fluent in English, Malayalam and Hindi, and currently learning German and Sorani Kurdish.
              </p>
            </Reveal>
            <Reveal className="beyond-aside" delay={120}>
              <span className="small-label">LANGUAGES</span>
              <ul className="language-list">
                {languages.map((language) => (
                  <li key={language.name}><span>{language.name}</span><small>{language.level}</small></li>
                ))}
              </ul>
              <div className="reflection-quote">
                <span aria-hidden="true">“</span>
                <p>Stay curious enough to ask questions, and patient enough to keep learning.</p>
              </div>
            </Reveal>
          </div>
          <Reveal className="interests-strip">
            <span className="small-label">CURRENT CURIOSITIES</span>
            <div>{learningTopics.map((topic) => <span key={topic}>{topic}</span>)}</div>
          </Reveal>
        </section>

        <section className="contact-section" id="contact">
          <Reveal className="contact-inner">
            <span className="small-label">06 / GET IN TOUCH</span>
            <h2>Have an idea?<br /><span>Let's talk.</span></h2>
            <p>I'm always interested in thoughtful conversations, learning opportunities and interesting projects.</p>
            <div className="contact-links">
              {profile.email ? <a className="contact-primary" href={`mailto:${profile.email}`}>Say hello <span aria-hidden="true">↗</span></a> : <span className="contact-hint">Add a public email in <code>src/data/portfolio.js</code> to enable this link.</span>}
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <span>Designed & built with curiosity.</span>
        <span>© {new Date().getFullYear()} {profile.firstName} · Made to keep growing.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
