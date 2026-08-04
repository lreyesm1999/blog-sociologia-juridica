import Link from "next/link";
import ImageFade from "@/components/ImageFade";
import { author } from "@/data/author";
import styles from "./AuthorWidget.module.css";
import widgetStyles from "./Sidebar.module.css";

export default function AuthorWidget() {
  return (
    <div className={widgetStyles.widget}>
      <p className={widgetStyles.widgetTitle}>Autor</p>
      <div className={styles.wrap}>
        <div className={styles.avatar}>
          <ImageFade
            src={author.avatar}
            alt={`Fotografía de ${author.name}`}
            fill
            sizes="84px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className={styles.name}>{author.name}</p>
        <p className={styles.bio}>{author.shortBio}</p>
        <Link href="/autor" className={styles.link}>
          Conocer al autor →
        </Link>
      </div>
    </div>
  );
}
