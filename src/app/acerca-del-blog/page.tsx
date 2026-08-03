import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Acerca del blog",
  description:
    "Tema, finalidad y metodología del blog Sociedad y Derecho, proyecto final del curso de Sociología Jurídica.",
};

const cardStyle: CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "1.75rem",
  marginBottom: "1.5rem",
};

export default function AcercaDelBlogPage() {
  return (
    <div
      className="container"
      style={{ padding: "2.5rem 20px 4rem", maxWidth: "820px" }}
    >
      <Breadcrumbs items={[{ label: "Acerca del blog" }]} />
      <h1 className="section-title">Acerca del blog</h1>

      <div style={cardStyle}>
        <h2 style={{ color: "var(--primary)", marginBottom: "0.75rem" }}>Tema</h2>
        <p style={{ lineHeight: 1.7 }}>
          Este blog analiza la relación entre la sociedad, el derecho y el
          individuo desde la perspectiva de la sociología jurídica, disciplina
          que estudia tanto la influencia de los factores sociales sobre el
          derecho como el impacto del derecho en la sociedad.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={{ color: "var(--primary)", marginBottom: "0.75rem" }}>
          Finalidad
        </h2>
        <p style={{ lineHeight: 1.7 }}>
          El objetivo general es analizar de manera clara y accesible cómo el
          derecho surge dentro de la sociedad, regula la convivencia humana,
          protege la libertad individual y contribuye a alcanzar el bien
          común, la justicia y la seguridad jurídica. Este proyecto está
          dirigido a estudiantes universitarios, personas interesadas en
          derecho y sociedad, y lectores sin conocimientos jurídicos
          especializados.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={{ color: "var(--primary)", marginBottom: "0.75rem" }}>
          Metodología
        </h2>
        <p style={{ lineHeight: 1.7, marginBottom: "1rem" }}>
          Cada entrada combina el material oficial del curso de Sociología
          Jurídica con ejemplos de la realidad panameña y una reflexión
          personal del autor. Las publicaciones utilizan citas en formato APA
          7 e incluyen una sección de referencias específica al final de cada
          artículo, además de la bibliografía general disponible en la sección{" "}
          <em>Referencias</em>.
        </p>
        <p style={{ lineHeight: 1.7 }}>
          El proyecto fue desarrollado como actividad final del curso de
          Sociología Jurídica, con Lenier Reyes Morales como autor y
          responsable único de su contenido.
        </p>
      </div>
    </div>
  );
}
