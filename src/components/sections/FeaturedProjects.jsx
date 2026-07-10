import projects from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>

        <FadeIn>

          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">

            <span
              className="
                text-[var(--accent)]
                text-sm
                tracking-[0.3em]
                uppercase
                font-medium
                whitespace-nowrap
              "
            >
              05
            </span>

            <span
              className="
                text-4xl
                md:text-5xl
                font-black
              "
            >
              Projects
            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          <div className="max-w-6xl mx-auto px-6 lg:px-12">

            {/* Intro */}
            <div className="max-w-3xl mb-16">

              <h3
                className="
                  text-2xl
                  md:text-2xl
                  font-bold
                  leading-tight
                  mb-10
                "
              >
                Selected work and digital products.
              </h3>

              <div
                className="
                  text-lg
                  md:text-xl
                  text-white/60
                  leading-relaxed
                "
              >
                <p>
                  A collection of projects focused on
                  modern web development, AI integration,
                  automation, and scalable software
                  architecture.
                </p>
              </div>

            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 items-stretch">

              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ))}

            </div>

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}