import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";
import { getAllPosts } from "@/data/posts";
import {
  findTagBySlug,
  getAllTags,
  getPostsByTag,
  slugifyTag,
} from "@/utils/getPostsByTag";

export function generateStaticParams() {
  const posts = getAllPosts();
  return getAllTags(posts).map(({ tag }) => ({ etiqueta: slugifyTag(tag) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ etiqueta: string }>;
}): Promise<Metadata> {
  const { etiqueta } = await params;
  const posts = getAllPosts();
  const tag = findTagBySlug(posts, etiqueta);
  if (!tag) return {};
  return {
    title: `Etiqueta: ${tag}`,
    description: `Entradas del blog Sociedad y Derecho relacionadas con la etiqueta ${tag}.`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ etiqueta: string }>;
}) {
  const { etiqueta } = await params;
  const posts = getAllPosts();
  const tag = findTagBySlug(posts, etiqueta);
  if (!tag) notFound();

  const filtered = getPostsByTag(posts, etiqueta);

  return (
    <div className="container page">
      <Breadcrumbs
        items={[{ label: "Etiquetas", href: "/entradas" }, { label: tag }]}
      />
      <h1 className="section-title">Etiqueta: {tag}</h1>
      <p className="page-intro">
        {filtered.length}{" "}
        {filtered.length === 1 ? "entrada encontrada" : "entradas encontradas"}
      </p>
      <div className="layout">
        <PostList posts={filtered} />
        <Sidebar />
      </div>
    </div>
  );
}
