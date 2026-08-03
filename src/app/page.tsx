import Link from "next/link";
import Hero from "@/components/Hero";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";
import { getFeaturedPosts } from "@/data/posts";
import styles from "./page.module.css";

export default function Home() {
  const featured = getFeaturedPosts();

  return (
    <>
      <Hero />

      <section className={`container ${styles.section}`}>
        <div className="layout">
          <div>
            <div className={styles.sectionHead}>
              <h2 className="section-title">Entradas destacadas</h2>
              <Link href="/entradas" className={styles.viewAll}>
                Ver todas las entradas →
              </Link>
            </div>
            <PostList posts={featured} />
          </div>
          <Sidebar />
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <h2 className={styles.aboutTitle}>Sobre este proyecto</h2>
          <p className={styles.aboutText}>
            Este blog académico analiza la relación entre la sociedad, el
            derecho y el individuo desde los principales conceptos de la
            sociología jurídica. Sus publicaciones combinan contenidos del
            curso, ejemplos de la realidad panameña y reflexiones personales
            del autor.
          </p>
        </div>
      </section>
    </>
  );
}
