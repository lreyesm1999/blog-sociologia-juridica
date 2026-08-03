import { BlogPost } from "@/types/post";

export function getAllTags(posts: BlogPost[]): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag, "es"));
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-");
}

export function getPostsByTag(posts: BlogPost[], tagSlug: string): BlogPost[] {
  return posts.filter((post) =>
    post.tags.some((tag) => slugifyTag(tag) === tagSlug)
  );
}

export function findTagBySlug(posts: BlogPost[], tagSlug: string): string | undefined {
  for (const post of posts) {
    const match = post.tags.find((tag) => slugifyTag(tag) === tagSlug);
    if (match) return match;
  }
  return undefined;
}
