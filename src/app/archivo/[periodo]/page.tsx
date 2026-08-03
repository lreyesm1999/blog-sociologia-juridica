import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";
import { getAllPosts } from "@/data/posts";
import { formatPeriod } from "@/utils/formatDate";

export function generateStaticParams() {
  const posts = getAllPosts();
  const periods = new Set(posts.map((post) => formatPeriod(post.publishedAt).key));
  return Array.from(periods).map((periodo) => ({ periodo }));
}

function getPeriodLabel(periodo: string): string | undefined {
  const posts = getAllPosts();
  const match = posts.find((post) => formatPeriod(post.publishedAt).key === periodo);
  return match ? formatPeriod(match.publishedAt).label : undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ periodo: string }>;
}): Promise<Metadata> {
  const { periodo } = await params;
  const label = getPeriodLabel(periodo);
  if (!label) return {};
  return {
    title: `Archivo: ${label}`,
    description: `Entradas del blog Sociedad y Derecho publicadas en ${label}.`,
  };
}

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ periodo: string }>;
}) {
  const { periodo } = await params;
  const posts = getAllPosts();
  const label = getPeriodLabel(periodo);
  if (!label) notFound();

  const filtered = posts.filter(
    (post) => formatPeriod(post.publishedAt).key === periodo
  );

  return (
    <div className="container" style={{ padding: "2.5rem 20px 4rem" }}>
      <Breadcrumbs items={[{ label: "Archivo" }, { label }]} />
      <h1 className="section-title">Archivo: {label}</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        {filtered.length}{" "}
        {filtered.length === 1 ? "entrada publicada" : "entradas publicadas"}
      </p>
      <div className="layout">
        <PostList posts={filtered} />
        <Sidebar />
      </div>
    </div>
  );
}
