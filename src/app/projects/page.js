import projects from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";
import Container from "@/components/ui/Container";

export default function ProjectsPage() {
  return (
    <Container>

      <div className="py-32">

        <h1 className="text-7xl font-black mb-16">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}

        </div>

      </div>

    </Container>
  );
}