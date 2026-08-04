import styles from "./Skeletons.module.css";

function Block({ className }: { className: string }) {
  return <div className={`${styles.block} ${className}`} />;
}

export function PageHeaderSkeleton() {
  return (
    <>
      <Block className={styles.titleBar} />
      <Block className={styles.introBar} />
    </>
  );
}

export function PostCardSkeleton() {
  return (
    <div className={styles.card}>
      <Block className={styles.cardImage} />
      <div className={styles.cardBody}>
        <Block className={styles.tagPill} />
        <Block className={styles.line} />
        <Block className={styles.lineShort} />
      </div>
    </div>
  );
}

export function PostGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function SidebarSkeleton() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.widget}>
        <Block className={styles.widgetTitle} />
        <Block className={styles.avatar} />
        <Block className={styles.line} />
        <Block className={styles.lineShort} />
      </div>
      <div className={styles.widget}>
        <Block className={styles.widgetTitle} />
        <div className={styles.paragraphs}>
          <Block className={styles.line} />
          <Block className={styles.line} />
          <Block className={styles.lineShort} />
        </div>
      </div>
      <div className={styles.widget}>
        <Block className={styles.widgetTitle} />
        <div className={styles.tagRow}>
          <Block className={styles.tagPill} />
          <Block className={styles.tagPill} />
        </div>
      </div>
    </aside>
  );
}

export function PostDetailSkeleton() {
  return (
    <article className={styles.article}>
      <Block className={styles.heroImage} />
      <div className={styles.articleBody}>
        <div className={styles.tagRow}>
          <Block className={styles.tagPill} />
          <Block className={styles.tagPill} />
        </div>
        <Block className={styles.detailTitle} />
        <Block className={styles.metaRow} />
        <div className={styles.paragraphs}>
          <Block className={styles.line} />
          <Block className={styles.line} />
          <Block className={styles.line} />
          <Block className={styles.lineShort} />
        </div>
      </div>
    </article>
  );
}
