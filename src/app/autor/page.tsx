import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { author } from "@/data/author";
import { getAllPosts } from "@/data/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Autor",
  description: `Información sobre ${author.name}, autor del blog Sociedad y Derecho.`,
};

export default function AutorPage() {
  const posts = getAllPosts();

  return (
    <div
      className="container"
      style={{ padding: "2.5rem 20px 4rem", maxWidth: "820px" }}
    >
      <Breadcrumbs items={[{ label: "Autor" }]} />

      <div className={styles.header}>
        <div className={styles.avatar}>
          <Image
            src={author.avatar}
            alt={`Fotografía de ${author.name}`}
            fill
            sizes="110px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <h1 className={styles.name}>{author.name}</h1>
          <p className={styles.role}>{author.role}</p>
        </div>
      </div>

      <div className={styles.card}>
        {author.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h2 className={styles.sectionTitle}>Motivación</h2>
        <p>{author.motivation}</p>

        <h2 className={styles.sectionTitle}>Publicaciones</h2>
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/entradas/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.statement}>{author.authorshipStatement}</div>
      </div>
    </div>
  );
}
