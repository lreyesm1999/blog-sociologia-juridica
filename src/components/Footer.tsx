import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.title}>Sociedad y Derecho</p>
          <p className={styles.desc}>
            Proyecto final de Sociología Jurídica. Una mirada a la convivencia
            social desde la sociología jurídica.
            <br />
            Autor: Lenier Reyes Morales
          </p>
        </div>
        <nav className={styles.links}>
          <Link href="/">Inicio</Link>
          <Link href="/autor">Autor</Link>
          <Link href="/referencias">Referencias</Link>
          <Link href="/acerca-del-blog">Acerca del blog</Link>
        </nav>
      </div>
      <div className={styles.bottom}>
        © {year} Sociedad y Derecho — Lenier Reyes Morales
      </div>
    </footer>
  );
}
