import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Acerca del blog",
  description:
    "Tema, finalidad y metodología del blog Sociedad y Derecho, proyecto final del curso de Sociología Jurídica.",
};

export default function AcercaDelBlogPage() {
  return (
    <div className="container page page-narrow">
      <Breadcrumbs items={[{ label: "Acerca del blog" }]} />
      <h1 className="section-title">Acerca del blog</h1>

      <section className={styles.card}>
        <h2>Tema</h2>
        <p>
          Este blog analiza la relación entre la sociedad, el derecho y el
          individuo desde la perspectiva de la sociología jurídica, disciplina
          que estudia tanto la influencia de los factores sociales sobre el
          derecho como el impacto del derecho en la sociedad.
        </p>
      </section>

      <section className={styles.card}>
        <h2>Finalidad</h2>
        <p>
          El objetivo general es analizar de manera clara y accesible cómo el
          derecho surge dentro de la sociedad, regula la convivencia humana,
          protege la libertad individual y contribuye a alcanzar el bien
          común, la justicia y la seguridad jurídica. Este proyecto está
          dirigido a estudiantes universitarios, personas interesadas en
          derecho y sociedad, y lectores sin conocimientos jurídicos
          especializados.
        </p>
      </section>

      <section className={styles.card}>
        <h2>Metodología</h2>
        <p>
          Cada entrada combina el material oficial del curso de Sociología
          Jurídica con ejemplos de la realidad panameña y una reflexión
          personal del autor. Las publicaciones utilizan citas en formato APA
          7 e incluyen una sección de referencias específica al final de cada
          artículo, además de la bibliografía general disponible en la sección{" "}
          <em>Referencias</em>.
        </p>
        <p>
          El proyecto fue desarrollado como actividad final del curso de
          Sociología Jurídica, con Lenier Reyes Morales como autor y
          responsable único de su contenido.
        </p>
      </section>
    </div>
  );
}
