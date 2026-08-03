const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return `${day} de ${MONTHS[month - 1]} de ${year}`;
}

export function formatPeriod(isoDate: string): { key: string; label: string } {
  const [year, month] = isoDate.split("-").map(Number);
  const key = `${year}-${String(month).padStart(2, "0")}`;
  const label = `${MONTHS[month - 1].replace(/^./, (c) => c.toUpperCase())} ${year}`;
  return { key, label };
}
