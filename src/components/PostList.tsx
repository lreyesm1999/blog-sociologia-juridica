import { BlogPost } from "@/types/post";
import PostCard from "./PostCard";
import styles from "./PostList.module.css";

export default function PostList({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return <p className={styles.empty}>No hay publicaciones para mostrar.</p>;
  }

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
