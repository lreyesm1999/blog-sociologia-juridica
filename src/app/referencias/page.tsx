import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generalReferences } from "@/data/references";

export const metadata: Metadata = {
  title: "Referencias",
  description:
    "Bibliografía general en formato APA 7 utilizada en el blog Sociedad y Derecho.",
};

export default function ReferenciasPage() {
  return (
    <div
      className="container"
      style={{ padding: "2.5rem 20px 4rem", maxWidth: "820px" }}
    >
      <Breadcrumbs items={[{ label: "Referencias" }]} />
      <h1 className="section-title">Referencias</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6 }}>
        A continuación se presenta la bibliografía general consultada para la
        elaboración de las entradas de este blog, en formato APA 7. Cada
        publicación individual incluye, además, las referencias específicas
        utilizadas en esa entrada.
      </p>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {generalReferences.map((ref) => (
          <li
            key={ref.citation}
            style={{
              paddingLeft: "1.5rem",
              textIndent: "-1.5rem",
              lineHeight: 1.6,
              color: "var(--text)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1rem 1.25rem 1rem 2.75rem",
            }}
          >
            {ref.citation}
          </li>
        ))}
      </ul>
    </div>
  );
}
