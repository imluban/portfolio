import { getGithubProfile } from "@/lib/github";
import GithubStats from "@/components/github/GithubStats";

export default async function GithubProfile() {
  const profile = await getGithubProfile();

  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
            border border-white/10
            rounded-3xl
            p-10
            flex flex-col md:flex-row
            gap-10
            items-center
          "
        >

          <img
            src={profile.avatar_url}
            alt={profile.name}
            className="
              w-36
              h-36
              rounded-full
            "
          />

          <div className="flex-1">

            <h2 className="text-4xl font-bold mb-2">
              {profile.name}
            </h2>

            <p className="text-white/60 mb-6">
              {profile.bio}
            </p>

            <GithubStats profile={profile} />

            <a
              href={profile.html_url}
              target="_blank"
              className="
                inline-flex
                px-6
                py-3
                bg-[var(--accent)]
                text-black
                rounded-full
                font-semibold
              "
            >
              View GitHub Profile
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}