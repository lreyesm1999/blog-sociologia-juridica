import { getAllPosts } from "@/data/posts";
import AuthorWidget from "./AuthorWidget";
import TagsWidget from "./TagsWidget";
import RecentPostsWidget from "./RecentPostsWidget";
import ArchiveWidget from "./ArchiveWidget";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const posts = getAllPosts();

  return (
    <aside className={styles.sidebar}>
      <AuthorWidget />
      <RecentPostsWidget posts={posts} />
      <TagsWidget posts={posts} />
      <ArchiveWidget posts={posts} />
    </aside>
  );
}
