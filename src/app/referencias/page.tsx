import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generalReferences } from "@/data/references";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Referencias",
  description:
    "Bibliografía general en formato APA 7 utilizada en el blog Sociedad y Derecho.",
};

export default function ReferenciasPage() {
  return (
    <div className="container page page-narrow">
      <Breadcrumbs items={[{ label: "Referencias" }]} />
      <h1 className="section-title">Referencias</h1>
      <p className="page-intro">
        A continuación se presenta la bibliografía general consultada para la
        elaboración de las entradas de este blog, en formato APA 7. Cada
        publicación individual incluye, además, las referencias específicas
        utilizadas en esa entrada.
      </p>
      <ul className={styles.list}>
        {generalReferences.map((ref) => (
          <li key={ref.citation} className={styles.item}>
            {ref.citation}
          </li>
        ))}
      </ul>
    </div>
  );
}
