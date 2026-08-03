import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import styles from "./PostCard.module.css";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className={`card ${styles.card}`}>
      <Link href={`/entradas/${post.slug}`} className={styles.imageWrap}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 720px) 100vw, 360px"
          style={{ objectFit: "cover" }}
        />
      </Link>
      <div className={styles.body}>
        <div className={styles.tags}>
          <span className="tag">{post.tags[0]}</span>
        </div>
        <h3 className={styles.title}>
          <Link href={`/entradas/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime} min de lectura</span>
        </div>
        <Link href={`/entradas/${post.slug}`} className={styles.readMore}>
          Leer entrada →
        </Link>
      </div>
    </article>
  );
}
