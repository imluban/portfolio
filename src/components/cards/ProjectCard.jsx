import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function ProjectCard({ project }) {
  return (
    <Reveal>
    <Link href={`/projects/${project.slug}`}>
      <div
        className="
        p-8
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl

        hover:border-[#dfff00]
        hover:-translate-y-2

        transition-all
        duration-300
        "
      >
        <h3 className="text-2xl font-bold mb-3">
          {project.title}
        </h3>

        <p className="text-zinc-400 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
              px-3
              py-1
              text-sm
              rounded-full
              border
              border-white/10
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
    </Reveal>
  );
}