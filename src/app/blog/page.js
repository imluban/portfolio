import blogs from "@/data/blogs";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function BlogPage() {
  const featured = blogs.find(
    (blog) => blog.featured
  );

  const regularBlogs = blogs.filter(
    (blog) => !blog.featured
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-bold mb-12">
        Blog
      </h1>

      {/* Featured Article */}

      {featured && (
        <Reveal>
        <section className="mb-20">

          <h2 className="text-3xl font-bold mb-6">
            Featured Article
          </h2>

          <Link
            href={`/blog/${featured.slug}`}
            className="
              blog-card
              block
              p-10
              rounded-3xl
              border
              border-[var(--accent)]
              bg-white/[0.02]
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div className="text-sm text-[var(--accent)] mb-4">
              {featured.readingTime}
            </div>

            <h3 className="text-5xl font-black mb-4">
              {featured.title}
            </h3>

            <p className="text-white/60 text-lg">
              {featured.excerpt}
            </p>
          </Link>

        </section>
        </Reveal>
      )}

      {/* Remaining Articles */}

      <div className="grid md:grid-cols-2 gap-8 items-stretch">

        {regularBlogs.map((blog, index) => (
          <Reveal
            key={blog.slug}
            delay={index * 0.1}
          >
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="
                blog-card
                flex
                flex-col
                h-full

                p-8
                rounded-3xl
                border
                border-white/10

                bg-white/[0.03]
                backdrop-blur-xl

                hover:border-[#dfff00]
                transition-all
                duration-300
              "
            >
              <div className="text-sm text-white/50 mb-3">
                {blog.readingTime}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {blog.title}
              </h2>

              <p className="text-white/60 mb-6">
                {blog.excerpt}
              </p>

              <div className="mt-auto flex gap-2 flex-wrap">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-white/5
                      text-sm
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}

      </div>

    </main>
  );
}