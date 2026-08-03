import Link from "next/link";
import { BlogPost } from "@/types/post";
import { formatPeriod } from "@/utils/formatDate";
import styles from "./ArchiveWidget.module.css";
import widgetStyles from "./Sidebar.module.css";

export default function ArchiveWidget({ posts }: { posts: BlogPost[] }) {
  const periods = new Map<string, { label: string; count: number }>();

  for (const post of posts) {
    const { key, label } = formatPeriod(post.publishedAt);
    const entry = periods.get(key);
    if (entry) {
      entry.count += 1;
    } else {
      periods.set(key, { label, count: 1 });
    }
  }

  const sorted = Array.from(periods.entries()).sort((a, b) =>
    b[0].localeCompare(a[0])
  );

  return (
    <div className={widgetStyles.widget}>
      <p className={widgetStyles.widgetTitle}>Archivo</p>
      <div className={styles.list}>
        {sorted.map(([key, { label, count }]) => (
          <Link key={key} href={`/archivo/${key}`} className={styles.item}>
            <span>{label}</span>
            <span className={styles.count}>({count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
