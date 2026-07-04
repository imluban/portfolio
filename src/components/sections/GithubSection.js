import { getRepositories } from "@/lib/github";
import RepoCard from "@/components/github/RepoCard";
import Reveal from "../ui/Reveal";

export default async function GithubSection() {
  const repos = await getRepositories();

  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              text-[var(--accent)]
              mb-4
            "
          >
            Development Activity
          </p>

          <h2 className="text-5xl font-bold">
            Latest Repositories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <Reveal key={repo.id} delay={index * 0.1}>
            <RepoCard
              key={repo.id}
              repo={repo}
            />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}