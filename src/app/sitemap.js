import projects from "@/data/projects";
import blogs from "@/data/blogs";

export default function sitemap() {
  const projectUrls = projects.map((project) => ({
    url: `https://lubannoor.com/projects/${project.slug}`,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `https://lubannoor.com/blog/${blog.slug}`,
  }));

  return [
    {
      url: "https://lubannoor.com",
    },

    {
      url: "https://lubannoor.com/projects",
    },

    {
      url: "https://lubannoor.com/blog",
    },

    ...projectUrls,
    ...blogUrls,
  ];
}