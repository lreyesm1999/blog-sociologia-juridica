import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        padding: "5rem 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1 className="section-title">Página no encontrada</h1>
      <p style={{ color: "var(--text-muted)", maxWidth: "50ch" }}>
        La página que buscas no existe o fue movida. Puedes volver al inicio o
        explorar las entradas del blog.
      </p>
      <Link href="/" className="btn btn--primary">
        Volver al inicio
      </Link>
    </div>
  );
}
