import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.crumbs} aria-label="Ruta de navegación">
      <Link href="/">Inicio</Link>
      {items.map((item, index) => (
        <span key={index}>
          {" / "}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
