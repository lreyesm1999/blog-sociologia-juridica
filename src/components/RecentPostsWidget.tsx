import Link from "next/link";
import { BlogPost } from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import styles from "./RecentPostsWidget.module.css";
import widgetStyles from "./Sidebar.module.css";

export default function RecentPostsWidget({ posts }: { posts: BlogPost[] }) {
  const recent = posts.slice(0, 5);

  return (
    <div className={widgetStyles.widget}>
      <p className={widgetStyles.widgetTitle}>Entradas recientes</p>
      <ul className={styles.list}>
        {recent.map((post) => (
          <li key={post.slug} className={styles.item}>
            <Link href={`/entradas/${post.slug}`}>
              {post.title}
              <span className={styles.date}>{formatDate(post.publishedAt)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
