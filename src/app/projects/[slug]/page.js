import projects from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}) {
  const project = projects.find(
    (project) => project.slug === params.slug
  );

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-32">
      <h1 className="text-7xl font-black mb-8">
        {project.title}
      </h1>

      <p className="text-xl text-zinc-400 mb-10">
        {project.longDescription}
      </p>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6
            py-3
            bg-[#dfff00]
            text-black
            rounded-full
          "
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6
            py-3
            border
            border-white/10
            rounded-full
          "
        >
          Live Demo
        </a>
      </div>
    </main>
  );
}