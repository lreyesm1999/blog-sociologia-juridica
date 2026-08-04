import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReadingProgress from "@/components/ReadingProgress";
import Sidebar from "@/components/Sidebar";
import { getAllPosts, getAdjacentPosts, getPostBySlug } from "@/data/posts";
import { formatDate } from "@/utils/formatDate";
import { slugifyTag } from "@/utils/getPostsByTag";
import styles from "./page.module.css";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { previous, next } = getAdjacentPosts(post.slug);

  return (
    <div className="container" style={{ padding: "2.5rem 20px 4rem" }}>
      <ReadingProgress />
      <Breadcrumbs
        items={[{ label: "Entradas", href: "/entradas" }, { label: post.title }]}
      />

      <div className="layout">
        <article className={styles.article}>
          <div className={styles.imageWrap}>
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 980px) 100vw, 760px"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.body}>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/etiquetas/${slugifyTag(tag)}`}
                  className="tag"
                >
                  {tag}
                </Link>
              ))}
            </div>

            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.meta}>
              <span>Autor: {post.author}</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readingTime} min de lectura</span>
            </div>

            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.references.length > 0 && (
              <div className={styles.references}>
                <h2 className={styles.referencesTitle}>Referencias</h2>
                <ul>
                  {post.references.map((ref) => (
                    <li key={ref}>{ref}</li>
                  ))}
                </ul>
              </div>
            )}

            {(previous || next) && (
              <div className={styles.nav}>
                {previous && (
                  <Link
                    href={`/entradas/${previous.slug}`}
                    className={styles.navLink}
                  >
                    <span className={styles.navDirection}>← Entrada anterior</span>
                    <span className={styles.navTitle}>{previous.title}</span>
                  </Link>
                )}
                {next && (
                  <Link
                    href={`/entradas/${next.slug}`}
                    className={`${styles.navLink} ${styles.next}`}
                  >
                    <span className={styles.navDirection}>Entrada siguiente →</span>
                    <span className={styles.navTitle}>{next.title}</span>
                  </Link>
                )}
              </div>
            )}

            <div className={styles.back}>
              <Link href="/entradas" className="btn btn--secondary">
                ← Regresar a las entradas
              </Link>
            </div>
          </div>
        </article>

        <Sidebar />
      </div>
    </div>
  );
}
