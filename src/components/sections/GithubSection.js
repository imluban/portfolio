import { getRepositories } from "@/lib/github";
import RepoCard from "@/components/github/RepoCard";

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
          {repos.map((repo) => (
            <RepoCard
              key={repo.id}
              repo={repo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}