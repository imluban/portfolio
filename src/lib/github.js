export async function getGithubProfile() {
  const username = process.env.GITHUB_USERNAME;

  const res = await fetch(
    `https://api.github.com/users/${username}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return res.json();
}

export async function getRepositories() {
  const username = process.env.GITHUB_USERNAME;

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return res.json();
}