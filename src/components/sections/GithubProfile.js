import { getGithubProfile } from "@/lib/github";
import GithubStats from "@/components/github/GithubStats";
import Container from "../ui/Container";

export default async function GithubProfile() {
  const profile = await getGithubProfile();

  if (!profile) {
    return null;
  }

  return (
    <section 
    id="github"
    className="py-32">
      <Container>

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
            07
          </span>

          <span
            className="
              text-4xl
              md:text-5xl
              font-black
            "
          >
            GitHub
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
              Open-source contributions and development activity.
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
                My GitHub profile reflects ongoing work across
                software engineering, AI experimentation,
                automation systems, and product development.
              </p>
            </div>

          </div>

          {/* Profile Card */}
          <div
            className="
              border
              border-white/10
              rounded-3xl
              p-10
              bg-white/[0.02]
              backdrop-blur-xl
              flex
              flex-col
              md:flex-row
              gap-10
              items-center
              transition-all
              duration-300
            "
          >

            <img
              src={profile.avatar_url}
              alt={profile.name}
              className="
                w-32
                h-32
                rounded-full
                border
                border-white/10
              "
            />

            <div className="flex-1">

              <h4
                className="
                  text-3xl
                  font-bold
                  mb-3
                "
              >
                {profile.name}
              </h4>

              <p
                className="
                  text-white/60
                  text-lg
                  leading-relaxed
                  mb-8
                "
              >
                {profile.bio}
              </p>

              <GithubStats profile={profile} />

              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  mt-8
                  px-6
                  py-3
                  bg-[var(--accent)]
                  text-black
                  rounded-full
                  font-semibold
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                View GitHub Profile
              </a>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}