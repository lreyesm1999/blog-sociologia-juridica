"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/entradas", label: "Entradas" },
  { href: "/acerca-del-blog", label: "Acerca del blog" },
  { href: "/autor", label: "Autor" },
  { href: "/referencias", label: "Referencias" },
];

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <div className={styles.logoWrap}>
            <Image
              src="/images/logo.svg"
              alt="Logo Sociedad y Derecho"
              width={42}
              height={42}
              className={styles.logoImage}
              priority
            />
          </div>
          <span className={styles.title}>
            Sociedad y Derecho
            <span className={styles.subtitle}>Sociología jurídica</span>
          </span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={active ? styles.navActive : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />

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
      </div>
    </header>
  );
}
