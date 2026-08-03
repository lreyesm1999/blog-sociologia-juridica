import type { Metadata } from "next";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getAllPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Entradas",
  description:
    "Listado completo de publicaciones del blog Sociedad y Derecho sobre sociología jurídica.",
};

export default function EntradasPage() {
  const posts = getAllPosts();

  return (
    <div className="container" style={{ padding: "2.5rem 20px 4rem" }}>
      <Breadcrumbs items={[{ label: "Entradas" }]} />
      <h1 className="section-title">Entradas</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "70ch" }}>
        Todas las publicaciones del blog Sociedad y Derecho, ordenadas de la
        más reciente a la más antigua.
      </p>
      <div className="layout">
        <PostList posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
