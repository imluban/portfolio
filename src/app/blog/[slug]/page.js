import blogs from "@/data/blogs";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}) {
  const article = blogs.find(
    (blog) => blog.slug === params.slug
  );

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogPost({
  params,
}) {
  const { slug } = await params;

  const article = blogs.find(
    (blog) => blog.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-32">

      <div className="mb-8">

        <div className="flex flex-wrap gap-3 mb-6">

          {article.tags.map((tag) => (
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

        <h1 className="text-5xl md:text-6xl font-black mb-6">
          {article.title}
        </h1>

        <div className="flex items-center gap-6 text-white/50">

          <span>
            {article.date}
          </span>

          <span>
            {article.readingTime}
          </span>

        </div>

      </div>

      <div className="w-full h-px bg-white/10 mb-12" />

      <article className="text-white/80 leading-8 text-lg">

        <pre className="whitespace-pre-wrap font-sans">
          {article.content}
        </pre>

      </article>

    </main>
  );
}