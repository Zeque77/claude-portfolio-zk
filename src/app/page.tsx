import { FaqWidget } from "@/components/faq-widget";
import { SiteHeader } from "@/components/site-header";
import {
  AboutSection,
  CapabilitiesSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  HeroSection,
  ProcessSection,
  ProjectsSection,
} from "@/components/portfolio-sections";
import { profile } from "@/data/portfolio";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.summary,
  address: { "@type": "PostalAddress", addressCountry: "AR" },
  sameAs: [profile.linkedin, profile.behance],
  knowsAbout: ["Product design", "UX strategy", "Healthcare UX", "AI product design", "Design systems"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <ProcessSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <FaqWidget />
    </>
  );
}
