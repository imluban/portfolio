export default function GithubStats({ profile }) {
  return (
    <div
      className="
        grid
        md:grid-cols-3
        gap-6
        mb-12
      "
    >
      <div
        className="
          border border-white/10
          rounded-3xl
          p-8
        "
      >
        <div className="text-4xl font-bold">
          {profile.public_repos}
        </div>

        <div className="text-white/50 mt-2">
          Repositories
        </div>
      </div>

      <div
        className="
          border border-white/10
          rounded-3xl
          p-8
        "
      >
        <div className="text-4xl font-bold">
          {profile.followers}
        </div>

        <div className="text-white/50 mt-2">
          Followers
        </div>
      </div>

      <div
        className="
          border border-white/10
          rounded-3xl
          p-8
        "
      >
        <div className="text-4xl font-bold">
          {profile.following}
        </div>

        <div className="text-white/50 mt-2">
          Following
        </div>
      </div>
    </div>
  );
}