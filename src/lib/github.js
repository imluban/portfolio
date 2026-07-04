export async function getGithubProfile() {
  const username =
    process.env.GITHUB_USERNAME || "imluban";

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      console.error(
        "GitHub profile fetch failed:",
        res.status
      );
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getRepositories() {
  const username =
    process.env.GITHUB_USERNAME || "imluban";

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      console.error(
        "GitHub repo fetch failed:",
        res.status
      );
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}