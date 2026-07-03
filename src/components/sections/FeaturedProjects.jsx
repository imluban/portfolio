import projects from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";
import Container from "../ui/Container";

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

        <h2 className="text-5xl font-black mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}