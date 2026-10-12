import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Compass,
  Layers3,
  Search,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { ProjectArtwork } from "@/components/project-artwork";
import { Reveal } from "@/components/reveal";
import {
  capabilities,
  certifications,
  education,
  experiences,
  processSteps,
  profile,
  projects,
  toolsAndMethods,
} from "@/data/portfolio";

const capabilityIcons = {
  compass: Compass,
  search: Search,
  workflow: Workflow,
  sparkles: Sparkles,
  layers: Layers3,
  users: UsersRound,
};

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Reveal>
          <div className="hero-topline">
            <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder">EDP</div>
            <div className="eyebrow hero-eyebrow"><i /> Product design · {profile.location}</div>
          </div>
          <h1 id="hero-title">Designing clarity<br />for <span>complex</span> worlds.</h1>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-tags" aria-label="Areas of focus">
            <span>AI products</span><span>Healthcare UX</span><span>Design systems</span>
          </div>
          <div className="hero-actions">
            <Button asChild size="lg" className="button-primary">
              <a href="#work">Explore selected work <ArrowRight aria-hidden="true" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="button-secondary">
              <a href="#contact">Let’s talk <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown aria-hidden="true" /></a>
        </Reveal>
      </div>

      <Reveal className="hero-art-wrap" delay={0.12}>
        <div className="hero-art" aria-label="Abstract illustration inspired by a healthcare scheduling interface">
          <div className="hero-glow" />
          <div className="hero-orbit hero-orbit-a" />
          <div className="hero-orbit hero-orbit-b" />
          <div className="hero-orb"><BrainCircuit aria-hidden="true" /></div>
          <div className="floating-note note-top"><span className="note-dot" /> Human-centered AI</div>
          <div className="floating-note note-bottom"><span>01</span> Make complexity feel simple <ArrowUpRight aria-hidden="true" /></div>
          <div className="hero-art-label">Thoughtful by design <span>✳</span></div>
        </div>
      </Reveal>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section-shell section-block" id="about" aria-labelledby="about-title">
      <Reveal>
        <SectionHeading id="about-title" eyebrow="A little about me" title="Good design makes hard things feel natural." />
        <div className="about-layout">
          <p className="about-lede">{profile.summary}</p>
          <div className="about-aside">
            <div className="about-fact"><span>20+</span><p>years building products across physical and digital spaces</p></div>
            <div className="about-fact"><span>AI</span><p>product design focused on practical, trustworthy workflows</p></div>
            <div className="about-fact"><span>01</span><p>shared goal: make technology work better for people</p></div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="section-shell section-block" id="work" aria-labelledby="work-title">
      <Reveal>
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Thoughtful work. Real-world complexity."
          description="A selection of healthcare, AI, commerce, fintech, and systems work. Case summaries stay within the information in my project materials."
        />
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index * 0.04} className={index === 0 ? "project-featured" : undefined}>
            <Card className={`project-card project-${project.accent}`}>
              <ProjectArtwork visual={project.visual} />
              <CardContent className="project-content">
                <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <details className="project-details">
                  <summary>Read case overview <ArrowDown aria-hidden="true" /></summary>
                  <div className="project-detail-copy">
                    <div><h4>Challenge</h4><p>{project.challenge}</p></div>
                    <div><h4>Approach</h4><p>{project.approach}</p></div>
                    <div><h4>Designed</h4><p>{project.designed}</p></div>
                    {project.evidence && <div className="project-evidence"><h4>Research evidence</h4><p>{project.evidence}</p></div>}
                    <div className="project-methods"><h4>Tools & methods</h4><p>{project.methods}</p></div>
                    <p className="project-role"><span>Contribution</span>{project.role}</p>
                  </div>
                </details>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  {project.href === profile.behance ? "Explore related work on Behance" : "View project on Behance"} <ArrowUpRight aria-hidden="true" />
                </a>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section className="section-shell section-block" id="capabilities" aria-labelledby="capabilities-title">
      <Reveal>
        <SectionHeading
          id="capabilities-title"
          eyebrow="What I bring"
          title="Making complex products work better for people."
          description="I bring together systems thinking, hands-on design, and a strong understanding of how people use products in the real world. I enjoy untangling complex problems, finding opportunities to improve the experience, and working with teams to turn those ideas into something useful."
        />
      </Reveal>
      <div className="capability-grid">
        {capabilities.map((capability, index) => {
          const Icon = capabilityIcons[capability.icon];
          return (
            <Reveal key={capability.title} delay={index * 0.04}>
              <Card className="capability-card">
                <CardContent>
                  <div className="capability-icon"><Icon aria-hidden="true" /></div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <ArrowUpRight className="capability-arrow" aria-hidden="true" />
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
      <div className="toolset" aria-label="Tools and methods">
        <span>Tools & methods</span>
        <div>{toolsAndMethods.map((tool) => <span key={tool}>{tool}</span>)}</div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section-shell section-block process-section" id="process" aria-labelledby="process-title">
      <Reveal>
        <SectionHeading
          id="process-title"
          eyebrow="How I work"
          title="Understand the problem before jumping to solutions."
          description="I like to get to the bottom of a problem before deciding what to build. I look for patterns, question assumptions, and work closely with the team to find solutions that make sense for both the people using the product and the business behind it."
        />
      </Reveal>
      <div className="process-line">
        {processSteps.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.05}>
            <div className="process-step">
              <span className="process-number">{step.number}</span>
              <span className="process-dot" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section-shell section-block" id="experience" aria-labelledby="experience-title">
      <Reveal>
        <SectionHeading id="experience-title" eyebrow="The path so far" title="Experience across products, people, and industries." />
      </Reveal>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <Reveal key={experience.company} delay={index * 0.04}>
            <article className="experience-item">
              <div className="experience-period"><span className="experience-marker" />{experience.period}</div>
              <div className="experience-main">
                <div className="experience-heading">
                  <div><h3>{experience.company}</h3><p className="experience-title">{experience.title}</p></div>
                  {experience.location && <span className="experience-location">{experience.location}</span>}
                </div>
                <p className="experience-client">{experience.client}</p>
                <p className="experience-description">{experience.description}</p>
                <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="section-shell section-block education-section" id="education" aria-labelledby="education-title">
      <Reveal>
        <SectionHeading id="education-title" eyebrow="Learning" title="A foundation that keeps expanding." />
        <div className="education-layout">
          <div className="education-list">
            {education.map((item) => (
              <div className="education-item" key={`${item.school}-${item.program}`}>
                <div><h3>{item.school}</h3><p>{item.program}</p></div><span>{item.period}</span>
              </div>
            ))}
          </div>
          <div className="certification-panel">
            <div className="certification-heading"><Sparkles aria-hidden="true" /><h3>Selected credentials</h3></div>
            <ul>{certifications.map((certification) => <li key={certification}>{certification}</li>)}</ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section-shell section-block contact-section" id="contact" aria-labelledby="contact-title">
      <Reveal>
        <div className="contact-card">
          <div className="contact-orb" />
          <div className="contact-grid">
            <div className="contact-copy">
              <span className="eyebrow"><i /> Let’s make something useful</span>
              <h2 id="contact-title">Have a complex problem<br />worth making simpler?</h2>
              <p>I’d be glad to hear what your team is working on.</p>
              <div className="contact-actions">
                <Button asChild size="lg" className="button-primary">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight aria-hidden="true" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="button-secondary">
                  <a href={profile.behance} target="_blank" rel="noreferrer">Explore my Behance <ArrowUpRight aria-hidden="true" /></a>
                </Button>
              </div>
              <p className="resume-note"><ArrowDownToLine aria-hidden="true" /> Resume available on request</p>
            </div>
            <ContactForm />
          </div>
          <div className="contact-mark" aria-hidden="true"><BrainCircuit /></div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="footer-brand" href="#home">EDP<span>© {new Date().getFullYear()}</span></a>
      <p>Designed with intention. Built for the people using it.</p>
      <div><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a><a href={profile.behance} target="_blank" rel="noreferrer">Behance <ArrowUpRight aria-hidden="true" /></a><a href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a></div>
    </footer>
  );
}