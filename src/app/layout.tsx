import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sociedad y Derecho",
    template: "%s | Sociedad y Derecho",
  },
  description:
    "Una mirada a la convivencia social desde la sociología jurídica. Blog académico de Lenier Reyes Morales.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
