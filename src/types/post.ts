export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  readingTime: number;
  references: string[];
}
