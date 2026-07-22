import { getRepositories } from "@/lib/github";
import RepoCard from "@/components/github/RepoCard";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import Reveal from "../ui/Reveal";

export default async function GithubSection() {
  const repos = await getRepositories();

  return (
    <section 
    id="repositories"
    className="py-32">
      <Container>

        <FadeIn>

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
              08
            </span>

            <span
              className="
                text-4xl
                md:text-5xl
                font-black
              "
            >
              Repositories
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
                Recent development activity.
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
                  A selection of repositories showcasing
                  ongoing work in software engineering,
                  AI-powered applications, automation,
                  and full-stack development.
                </p>
              </div>

            </div>

            {/* Repository Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

              {repos.map((repo, index) => (
                <Reveal
                  key={repo.id}
                  delay={index * 0.1}
                >
                  <RepoCard repo={repo} />
                </Reveal>
              ))}

            </div>

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}