import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div>
          <span className={styles.eyebrow}>Sociología jurídica</span>
          <h1 className={styles.title}>
            Comprender el derecho es comprender la sociedad
          </h1>
          <p className={styles.text}>
            Un espacio de análisis y reflexión sobre la relación entre las
            normas jurídicas, la convivencia social y la libertad individual.
          </p>
          <div className={styles.actions}>
            <Link href="/entradas" className="btn btn--primary">
              Explorar las publicaciones
            </Link>
            <Link href="/acerca-del-blog" className="btn btn--secondary">
              Acerca del blog
            </Link>
          </div>
        </div>
        <div className={styles.art}>
          <div className={styles.artInner}>
            <Image
              src="/images/portada-blog.svg"
              alt="Ilustración de una balanza de justicia junto a una ciudad, representando la relación entre el derecho y la sociedad"
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
