import Link from "next/link";
import { BlogPost } from "@/types/post";
import { getAllTags, slugifyTag } from "@/utils/getPostsByTag";
import styles from "./TagsWidget.module.css";
import widgetStyles from "./Sidebar.module.css";

export default function TagsWidget({ posts }: { posts: BlogPost[] }) {
  const tags = getAllTags(posts);

  return (
    <div className={widgetStyles.widget}>
      <p className={widgetStyles.widgetTitle}>Etiquetas</p>
      <div className={styles.list}>
        {tags.map(({ tag, count }) => (
          <Link
            key={tag}
            href={`/etiquetas/${slugifyTag(tag)}`}
            className={styles.tagLink}
          >
            {tag} <span className={styles.count}>({count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
