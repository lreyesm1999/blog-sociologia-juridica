"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/entradas", label: "Entradas" },
  { href: "/acerca-del-blog", label: "Acerca del blog" },
  { href: "/autor", label: "Autor" },
  { href: "/referencias", label: "Referencias" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.logo}>SD</span>
          <span className={styles.title}>
            Sociedad y Derecho
            <span className={styles.subtitle}>Sociología jurídica</span>
          </span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/entradas" className={`btn btn--primary ${styles.cta}`}>
          Ver entradas
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Abrir menú de navegación"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
