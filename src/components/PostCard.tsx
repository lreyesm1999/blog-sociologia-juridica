import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import { slugifyTag } from "@/utils/getPostsByTag";
import styles from "./PostCard.module.css";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.imageWrap}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 720px) 100vw, 360px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.tags}>
          {post.tags.slice(0, 2).map((tag) => (
            <Link
              key={tag}
              href={`/etiquetas/${slugifyTag(tag)}`}
              className={`tag ${styles.tagLink}`}
            >
              {tag}
            </Link>
          ))}
        </div>
        <h3 className={styles.title}>
          <Link href={`/entradas/${post.slug}`} className={styles.titleLink}>
            {post.title}
          </Link>
        </h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime} min de lectura</span>
        </div>
        <span className={styles.readMore} aria-hidden="true">
          Leer entrada →
        </span>
      </div>
    </article>
  );
}
