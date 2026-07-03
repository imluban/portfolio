import blogs from "@/data/blogs";
import Link from "next/link";

export default function BlogPage() {
  const featured = blogs.filter(
    (blog) => blog.featured
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-32">

      <h1 className="text-5xl font-bold mb-12">
        Blog
      </h1>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Featured Article
        </h2>

        {featured.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="
              block
              p-10
              rounded-3xl
              border
              border-[var(--accent)]
              mb-8
            "
          >
            <h3 className="text-3xl font-bold mb-4">
              {blog.title}
            </h3>

            <p className="text-white/60">
              {blog.excerpt}
            </p>
          </Link>
        ))}
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="
              border border-white/10
              rounded-3xl
              p-8
              hover:border-[var(--accent)]
              transition
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

            <div className="flex gap-2 flex-wrap">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    px-3 py-1
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
        ))}
      </div>

    </main>
  );
}