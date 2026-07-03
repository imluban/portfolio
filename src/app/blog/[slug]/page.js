import blogs from "@/data/blogs";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}) {
  const article = blogs.find(
    (blog) => blog.slug === params.slug
  );

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const article = blogs.find(
    (blog) => blog.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-5xl font-bold mb-6">
        {article.title}
      </h1>

      <div className="text-white/50 mb-12">
        {article.date}
      </div>

      <article className="prose prose-invert max-w-none">
        <pre className="whitespace-pre-wrap font-sans">
          {article.content}
        </pre>
      </article>
    </main>
  );
}