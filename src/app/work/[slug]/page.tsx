import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getNextProject, projects } from "@/data/projects";
import { SITE_CONFIG } from "@/data/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ProjectHero from "@/components/sections/ProjectHero";
import CaseStudySection from "@/components/sections/CaseStudySection";
import ProjectGallery from "@/components/sections/ProjectGallery";
import NextProject from "@/components/sections/NextProject";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Not Found — " + SITE_CONFIG.title };
  }

  const url = `${SITE_CONFIG.url}/work/${project.slug}`;

  return {
    title: `${project.title} — ${SITE_CONFIG.name}`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_CONFIG.name,
      title: `${project.title} — ${SITE_CONFIG.name}`,
      description: project.description,
      images: project.heroImage
        ? [{ url: project.heroImage, alt: project.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${SITE_CONFIG.name}`,
      description: project.description,
      images: project.heroImage ? [project.heroImage] : undefined,
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  const nextProject = getNextProject(params.slug);

  if (!project || !nextProject) notFound();

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    dateCreated: project.year,
    creator: {
      "@type": "Person",
      name: "Ujjwal Tamrakar",
      jobTitle: "Graphic Designer",
    },
    about: project.category,
    url: `${SITE_CONFIG.url}/work/${project.slug}`,
    genre: project.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <Navigation />
      <main>
        <ProjectHero
          title={project.title}
          category={project.category}
          year={project.year}
          role={project.role}
          client={project.client}
          image={project.heroImage}
        />

        <div className="section-padding">
          <CaseStudySection label="Overview">
            <div className="space-y-6">
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {project.services.map((service) => (
                  <div key={service} className="border border-border px-5 py-4">
                    <p className="text-body-sm font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection label="Concept" title="The Thinking">
            <p className="text-body-md text-muted-foreground leading-relaxed">
              {project.concept}
            </p>
          </CaseStudySection>

          <CaseStudySection label="Process" title="How It Happened">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-10">
                {project.process.map((step, i) => (
                  <div key={step.title} className="relative">
                    <span className="absolute -left-8 w-4 h-4 rounded-full border-2 border-accent bg-background top-1" />
                    <p className="text-meta text-accent uppercase tracking-widest mb-2">
                      Step {String(i + 1).padStart(2, "0")} — {step.title}
                    </p>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CaseStudySection>
        </div>

        <div className="section-padding">
          <p className="label-text mb-10">Final Work</p>
        </div>

        <ProjectGallery images={project.gallery} title={project.title} />

        <div className="section-padding">
          <CaseStudySection label="Result" title="Outcome">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              {project.result}
            </p>
          </CaseStudySection>
        </div>
      </main>

      <NextProject
        slug={nextProject.slug}
        title={nextProject.title}
        thumbnail={nextProject.thumbnail}
      />

      <Footer />
    </>
  );
}