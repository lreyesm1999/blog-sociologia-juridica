export interface Author {
  name: string;
  role: string;
  shortBio: string;
  bio: string[];
  motivation: string;
  authorshipStatement: string;
  avatar: string;
}

export const author: Author = {
  name: "Lenier Reyes Morales",
  role: "Autor del blog Sociedad y Derecho",
  shortBio:
    "Estudiante interesado en analizar el derecho no solamente como un conjunto de normas, sino como una herramienta que influye en la vida social.",
  bio: [
    "Lenier Reyes Morales es el autor y responsable del blog Sociedad y Derecho. Este proyecto fue desarrollado como actividad final del curso de Sociología Jurídica, con el propósito de analizar la relación entre las normas jurídicas, las estructuras sociales y la libertad individual.",
    "A lo largo de las publicaciones, se combinan los contenidos estudiados durante el curso con ejemplos de la realidad panameña y reflexiones personales, buscando que el derecho se comprenda no como un conjunto de reglas aisladas, sino como una expresión de la vida en sociedad.",
  ],
  motivation:
    "El interés por este tema surge de la necesidad de entender por qué las normas jurídicas existen, a quién protegen y qué ocurre cuando se alejan de la realidad social que buscan regular. La sociología jurídica ofrece las herramientas conceptuales para responder estas preguntas desde una perspectiva crítica y aplicada.",
  authorshipStatement:
    "Los comentarios y reflexiones personales presentados en este blog corresponden al análisis académico realizado por Lenier Reyes Morales a partir de los materiales estudiados durante el curso.",
  avatar: "/author/lenier-reyes.png",
};
