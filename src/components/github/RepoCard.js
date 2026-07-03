export default function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        border
        border-white/10
        rounded-3xl
        p-6
        hover:border-[var(--accent)]
        transition
      "
    >
      <h3 className="text-xl font-bold mb-3">
        {repo.name}
      </h3>

      <p className="text-white/60 mb-6">
        {repo.description || "No description"}
      </p>

      <div className="flex justify-between items-center text-sm text-white/50">
        <div className="flex gap-4">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        </div>

        <div>
          {repo.language || "Unknown"}
        </div>
      </div>
    </a>
  );
}