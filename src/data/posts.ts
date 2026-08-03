import { BlogPost } from "@/types/post";
import { getReadingTime } from "@/utils/getReadingTime";

const rawPosts: Omit<BlogPost, "readingTime">[] = [
  {
    slug: "que-estudia-la-sociologia-juridica",
    title: "¿Qué estudia la sociología jurídica?",
    excerpt:
      "Una introducción a la sociología jurídica como disciplina que explica la relación entre el derecho y los hechos sociales que le dan origen.",
    publishedAt: "2026-08-01",
    author: "Lenier Reyes Morales",
    tags: ["Sociología jurídica", "Derecho", "Sociedad"],
    image: "/images/sociologia-juridica.svg",
    imageAlt:
      "Libros de derecho y una balanza de justicia sobre un escritorio, representando el estudio de la sociología jurídica",
    featured: true,
    references: [
      "Soriano, R. (2005). Sociología del derecho (2.ª ed.). Ariel.",
      "Recaséns Siches, L. (2010). Sociología (24.ª ed.). Editorial Porrúa.",
      "Universidad de Panamá, Facultad de Derecho y Ciencia Política. (2026). Material del curso de Sociología Jurídica [Documento de clase].",
    ],
    content: `
<p>Cuando se estudia derecho por primera vez, es común pensar que basta con memorizar artículos, códigos y procedimientos para comprender cómo funciona una sociedad regulada por normas. Sin embargo, esa visión deja fuera una pregunta fundamental: ¿por qué existen esas normas y a quiénes responden realmente? Responder esa pregunta es, precisamente, la tarea de la sociología jurídica, una disciplina que no reemplaza el estudio técnico del derecho, sino que lo complementa desde una mirada social.</p>

<h2>Sociología general y sociología jurídica</h2>
<p>La sociología general se ocupa de comprender la vida en comunidad: cómo se organizan los grupos humanos, qué instituciones construyen y cómo cambian con el tiempo. La sociología jurídica, en cambio, concentra esa misma mirada en un objeto más específico: el derecho como fenómeno social. No pregunta únicamente qué dice una norma, sino de dónde proviene, a qué necesidades responde y qué efectos produce sobre las personas a quienes se aplica. Soriano (2005) considera que la sociología jurídica estudia “la mutua interdependencia de lo social y lo jurídico” (p. 17), una idea que resume bien el objeto central de esta disciplina.</p>

<h2>Hechos sociales y normas jurídicas</h2>
<p>Ninguna norma jurídica surge en el vacío. Detrás de cada ley existe un conjunto de hechos sociales previos: costumbres, conflictos, necesidades económicas o transformaciones culturales que empujan al derecho a intervenir. La sociología jurídica analiza esa doble vía de influencia: por un lado, cómo los factores sociales moldean el contenido del derecho; por otro, cómo el derecho, una vez creado, regresa a la sociedad y modifica comportamientos, distribuye poder y organiza la convivencia. Comprender esta relación evita caer en la idea equivocada de que las leyes son simplemente reglas técnicas desconectadas de la realidad.</p>

<h2>Importancia para quienes estudian derecho</h2>
<p>Para un estudiante de derecho, esta disciplina tiene un valor práctico evidente. Permite entender por qué ciertas leyes se cumplen ampliamente mientras otras son ignoradas, por qué algunas reformas legales fracasan a pesar de estar bien redactadas, y por qué el mismo texto legal puede producir efectos distintos según el contexto social en el que se aplique. Sin esta perspectiva, se corre el riesgo de estudiar el derecho como un sistema cerrado, aislado de la sociedad que le da sentido.</p>

<h2>Un ejemplo aplicado</h2>
<p>Pensemos en una ley de tránsito que exige el uso del cinturón de seguridad. Desde el punto de vista estrictamente normativo, la norma es clara y su sanción está definida. Pero desde la sociología jurídica surgen otras preguntas: ¿la población conoce la norma?, ¿existe una cultura de seguridad vial que respalde su cumplimiento?, ¿las autoridades tienen capacidad real de fiscalizarla? Una norma puede ser perfecta en el papel y, aun así, ser ineficaz si la sociedad no está preparada para asumirla o si las instituciones no pueden garantizar su aplicación.</p>

<h2>Reflexión personal</h2>
<p>Conocer el contenido literal de una ley no es suficiente si no se comprende cómo esa ley afecta realmente a las personas y si logra el propósito para el cual fue creada. Estudiar sociología jurídica me ha permitido entender que el derecho no es un fin en sí mismo, sino un instrumento social que debe evaluarse también por sus resultados y no únicamente por su redacción. Esa mirada crítica es, a mi juicio, indispensable para cualquier persona que aspire a ejercer el derecho de manera responsable.</p>
`,
  },
  {
    slug: "sociedad-y-derecho-relacion-inseparable",
    title: "Sociedad y derecho: una relación inseparable",
    excerpt:
      "Un análisis sobre la necesidad de las normas jurídicas para organizar la convivencia social y sobre por qué no existe derecho sin sociedad.",
    publishedAt: "2026-08-05",
    author: "Lenier Reyes Morales",
    tags: ["Sociedad", "Derecho", "Convivencia"],
    image: "/images/sociedad-derecho.svg",
    imageAlt:
      "Personas caminando en una plaza urbana rodeada de edificios institucionales, representando la vida en sociedad",
    featured: true,
    references: [
      "Soriano, R. (2005). Sociología del derecho (2.ª ed.). Ariel.",
      "Hernández Gil, A. (2018). Introducción a la sociología jurídica. Editorial Tecnos.",
    ],
    content: `
<p>Es difícil imaginar un grupo humano que conviva de manera prolongada sin ningún tipo de norma. Incluso las comunidades más pequeñas desarrollan reglas, acuerdos y jerarquías que ordenan la vida en común. Esa observación, aparentemente simple, es el punto de partida de una de las ideas centrales de la sociología jurídica: el derecho no puede analizarse de forma aislada de la sociedad en la cual se aplica (Soriano, 2005).</p>

<h2>La sociedad como punto de partida</h2>
<p>Toda sociedad, sin importar su tamaño o su nivel de organización, enfrenta el mismo problema: distintas personas con intereses distintos deben compartir un mismo espacio, los mismos recursos y las mismas instituciones. Esa convivencia genera, casi de manera inevitable, tensiones y conflictos. Las normas jurídicas surgen como una respuesta organizada a ese problema, estableciendo límites claros sobre lo permitido y lo prohibido, y ofreciendo mecanismos para resolver los desacuerdos sin recurrir a la violencia.</p>

<h2>El origen social del derecho</h2>
<p>El derecho no aparece antes que la sociedad ni de manera independiente a ella. Por el contrario, se construye a partir de las relaciones sociales existentes, de los valores compartidos y de los conflictos que una comunidad determinada necesita resolver. Hernández (2018) explica que las normas jurídicas expresan, en buena medida, los acuerdos mínimos que una sociedad alcanza para poder funcionar de manera ordenada. Por eso, el contenido de las leyes cambia de un país a otro y de una época a otra: responde a realidades sociales distintas.</p>

<h2>El derecho como mecanismo de organización</h2>
<p>Además de resolver conflictos, el derecho cumple una función organizativa. Define quién puede hacer qué, bajo qué condiciones y con qué consecuencias. Establece instituciones, distribuye competencias y crea procedimientos previsibles. Sin este entramado normativo, la vida social dependería exclusivamente de la fuerza o de acuerdos informales frágiles, fácilmente rotos ante el primer desacuerdo importante.</p>

<h2>Ejemplos de convivencia cotidiana</h2>
<p>La vida diaria está llena de ejemplos de esta relación. Las normas de tránsito permiten que miles de personas compartan las mismas calles sin generar caos permanente. La regulación laboral organiza la relación entre empleadores y trabajadores, estableciendo derechos y obligaciones para ambas partes. Las reglas sobre propiedad privada evitan disputas constantes sobre el uso de bienes y terrenos. Incluso la protección del medioambiente refleja un acuerdo social sobre la necesidad de limitar ciertas conductas individuales en beneficio del conjunto. En todos estos casos, la norma jurídica no inventa un problema: responde a uno que ya existía en la sociedad.</p>

<h2>Reflexión sobre la realidad panameña</h2>
<p>En Panamá, esta relación se observa con claridad en temas como la regulación del transporte público, la formalización de la propiedad de la tierra o las normas laborales en sectores específicos de la economía. En cada uno de estos casos, la eficacia de la ley depende de qué tan bien refleje la realidad social a la que se dirige. Una norma copiada de otro contexto, sin considerar las particularidades locales, difícilmente logrará los resultados esperados. Esto confirma que el derecho no solo debe ser técnicamente correcto, sino también socialmente pertinente, y que su estudio exige mirar más allá del texto legal para comprender el entorno que le da sentido.</p>
`,
  },
  {
    slug: "normas-juridicas-moral-costumbre-religion",
    title: "Normas jurídicas, moral, costumbre y religión",
    excerpt:
      "Una comparación entre los distintos sistemas normativos que regulan la conducta humana y lo que distingue a las normas jurídicas del resto.",
    publishedAt: "2026-08-10",
    author: "Lenier Reyes Morales",
    tags: ["Normas jurídicas", "Moral", "Cultura", "Costumbre"],
    image: "/images/normas-sociales.svg",
    imageAlt:
      "Distintos símbolos representando la moral, la costumbre, la religión y el derecho como sistemas normativos",
    featured: false,
    references: [
      "Recaséns Siches, L. (2010). Sociología (24.ª ed.). Editorial Porrúa.",
      "Treves, R. (2004). La sociología del derecho: orígenes, investigaciones, problemas (M. Atienza, Trad.). Editorial Ariel. (Trabajo original publicado en 1988)",
    ],
    content: `
<p>La conducta humana no está regulada exclusivamente por el derecho. A lo largo de la vida en sociedad, las personas también responden a normas morales, costumbres arraigadas y, en muchos casos, preceptos religiosos. Distinguir estos órdenes normativos entre sí es una de las tareas clásicas de la sociología jurídica, porque permite comprender qué hace única a la norma jurídica frente a otras reglas que también orientan el comportamiento.</p>

<h2>Los distintos órdenes normativos</h2>
<p>Recaséns (2010) señala que las reglas que rigen la conducta social pueden proceder de fuentes muy diversas: la conciencia individual, la costumbre colectiva, las creencias religiosas o el ordenamiento jurídico del Estado. Cada uno de estos sistemas tiene su propio origen, su propia manera de exigir cumplimiento y sus propias consecuencias frente al incumplimiento.</p>

<h2>Normas morales</h2>
<p>La moral opera principalmente en el terreno de la conciencia individual. Una persona puede considerar incorrecto mentir, ser desleal o actuar con egoísmo, sin que exista necesariamente una sanción externa para esas conductas. El cumplimiento de la norma moral depende, en gran medida, de la convicción personal, y su incumplimiento suele generar culpa o rechazo interno más que una consecuencia impuesta por otros.</p>

<h2>Costumbres sociales</h2>
<p>Las costumbres, en cambio, nacen de la repetición de conductas dentro de un grupo y se sostienen gracias a la aprobación o el rechazo social. Llegar puntualmente a una cita, saludar de determinada manera o vestir de cierta forma en una ceremonia son ejemplos de normas sociales cuyo incumplimiento no implica una sanción legal, pero sí puede generar incomodidad, crítica o exclusión dentro del grupo.</p>

<h2>Normas religiosas</h2>
<p>Las normas religiosas derivan de creencias compartidas por una comunidad de fe y suelen presentarse como mandatos con un origen trascendente. Su cumplimiento está motivado por convicciones espirituales, y su incumplimiento puede generar consecuencias dentro del propio marco religioso, como la culpa espiritual o el distanciamiento de la comunidad creyente, sin que ello implique necesariamente una consecuencia jurídica.</p>

<h2>Normas jurídicas</h2>
<p>La norma jurídica se distingue de las anteriores por contar con el respaldo del Estado. Su cumplimiento no depende exclusivamente de la conciencia, la aprobación social o la creencia religiosa, sino que puede exigirse coactivamente a través de instituciones públicas. Treves (2004/1988) subraya que esta capacidad de coerción organizada es una de las características que permite distinguir con mayor claridad al derecho de los demás sistemas normativos.</p>

<h2>Coincidencias y diferencias</h2>
<p>Con frecuencia, estos sistemas normativos coinciden en su contenido: no matar, no robar o no engañar son mandatos presentes tanto en la moral como en la religión y en el derecho. Sin embargo, también existen conductas reguladas por un sistema y no por otro. Llegar tarde a una reunión puede ser una falta social, pero no un delito. Cobrar un interés excesivo puede ser jurídicamente lícito en algunos contextos y, al mismo tiempo, considerarse moralmente cuestionable. Esta tabla resume las principales diferencias:</p>

<table>
<thead>
<tr><th>Tipo de norma</th><th>Origen</th><th>Consecuencia por incumplimiento</th></tr>
</thead>
<tbody>
<tr><td>Jurídica</td><td>Estado</td><td>Sanción legal</td></tr>
<tr><td>Moral</td><td>Conciencia personal</td><td>Remordimiento o rechazo personal</td></tr>
<tr><td>Social</td><td>Comunidad</td><td>Rechazo social</td></tr>
<tr><td>Religiosa</td><td>Creencia religiosa</td><td>Consecuencia espiritual o comunitaria</td></tr>
</tbody>
</table>

<h2>Reflexión personal</h2>
<p>Comprender estas diferencias me parece esencial para no confundir la validez jurídica de una norma con su aceptación moral o social. Una ley puede ser válida y, sin embargo, generar rechazo ético en parte de la población; del mismo modo, una costumbre puede estar profundamente arraigada sin llegar nunca a convertirse en ley. Reconocer esta pluralidad de sistemas normativos ayuda a entender por qué el derecho, aun siendo obligatorio, no siempre logra por sí solo transformar las conductas si no dialoga con la moral y la cultura de una sociedad.</p>
`,
  },
  {
    slug: "funciones-sociales-del-derecho",
    title: "Bien común, justicia y seguridad jurídica",
    excerpt:
      "Las tres funciones fundamentales que el derecho cumple dentro de la sociedad y su aplicación en situaciones de la vida cotidiana.",
    publishedAt: "2026-08-15",
    author: "Lenier Reyes Morales",
    tags: ["Justicia", "Bien común", "Seguridad jurídica", "Instituciones"],
    image: "/images/justicia.svg",
    imageAlt: "Balanza de la justicia frente a un edificio de tribunales",
    featured: true,
    references: [
      "Recaséns Siches, L. (2010). Sociología (24.ª ed.). Editorial Porrúa.",
      "Universidad de Panamá, Facultad de Derecho y Ciencia Política. (2026). Material del curso de Sociología Jurídica [Documento de clase].",
    ],
    content: `
<p>Preguntarse para qué existe el derecho puede parecer una pregunta obvia, pero la respuesta ayuda a comprender por qué las sociedades invierten tanto esfuerzo institucional en crear, aplicar y hacer cumplir normas jurídicas. El material del curso identifica tres funciones esenciales del derecho: la búsqueda del bien común, la realización de la justicia y la garantía de la seguridad jurídica. Estas tres funciones no operan de manera aislada, sino que se complementan entre sí.</p>

<h2>¿Para qué existe el derecho?</h2>
<p>El derecho existe, en primer lugar, para permitir que la vida en sociedad sea posible sin recurrir permanentemente a la fuerza. Ofrece un marco estable dentro del cual las personas pueden planificar su vida, resolver sus diferencias y confiar en que ciertas reglas se mantendrán en el tiempo. Sin ese marco, la convivencia dependería de la voluntad circunstancial de quien tuviera más poder en cada momento.</p>

<h2>El bien común</h2>
<p>El bien común hace referencia a las condiciones sociales que permiten el desarrollo de todos los miembros de la comunidad, y no solamente de un grupo particular. Cuando el derecho regula el acceso a servicios públicos, protege el medioambiente o establece obligaciones tributarias, está intentando equilibrar los intereses individuales con las necesidades colectivas. El bien común no elimina los intereses particulares, pero exige que estos se armonicen con el beneficio del conjunto social.</p>

<h2>La justicia</h2>
<p>La justicia, por su parte, se relaciona con dar a cada persona lo que le corresponde según criterios reconocidos como legítimos por la sociedad. Esto incluye tanto el trato igualitario ante la ley como la posibilidad real de defenderse frente a una acusación, de acceder a un proceso imparcial y de recibir una respuesta proporcional cuando se ha cometido una falta. Un sistema jurídico que aplique las normas de manera arbitraria o desigual, aunque formalmente exista, difícilmente puede considerarse justo.</p>

<h2>La seguridad jurídica</h2>
<p>La seguridad jurídica garantiza que las personas puedan conocer de antemano las reglas que rigen su conducta y las consecuencias de no cumplirlas. Esta previsibilidad es indispensable para la vida económica y social: permite firmar contratos con confianza, invertir en un negocio o simplemente saber qué ocurrirá si se incumple una obligación. Sin seguridad jurídica, incluso las normas más justas pierden buena parte de su utilidad práctica, porque nadie puede confiar en su aplicación constante.</p>

<h2>Aplicación en la vida cotidiana</h2>
<p>Estas tres funciones se manifiestan constantemente en situaciones concretas. Saber previamente cuáles son las consecuencias de incumplir un contrato de arrendamiento es seguridad jurídica. Tener derecho a presentar pruebas y ser escuchado antes de recibir una sanción es justicia. Que existan escuelas públicas, hospitales y sistemas de transporte accesibles para toda la población es una expresión del bien común. Cuando los conflictos se resuelven a través de tribunales y no mediante la violencia, las tres funciones actúan de manera conjunta.</p>

<h2>Reflexión personal</h2>
<p>Me parece revelador que estas tres funciones deban sostenerse simultáneamente. Un sistema jurídico extremadamente predecible pero injusto no cumple su propósito; tampoco lo hace uno que persiga la justicia individual sin considerar el bien común, o que promueva el bien común sacrificando la seguridad jurídica de las personas. El verdadero reto del derecho, y quizás su mayor dificultad práctica, consiste en mantener un equilibrio razonable entre estas tres exigencias, que muchas veces entran en tensión entre sí.</p>
`,
  },
  {
    slug: "derecho-libertad-e-individuo",
    title: "Derecho, libertad e individuo",
    excerpt:
      "Cómo el derecho busca equilibrar la libertad de cada persona con el derecho de las demás a desarrollar su propio proyecto de vida.",
    publishedAt: "2026-08-20",
    author: "Lenier Reyes Morales",
    tags: ["Libertad", "Individuo", "Derechos", "Responsabilidad"],
    image: "/images/libertad-individual.svg",
    imageAlt:
      "Una persona caminando libremente en un espacio abierto, representando la libertad individual dentro de la sociedad",
    featured: false,
    references: [
      "Recaséns Siches, L. (2010). Sociología (24.ª ed.). Editorial Porrúa.",
      "Hernández Gil, A. (2018). Introducción a la sociología jurídica. Editorial Tecnos.",
    ],
    content: `
<p>Toda persona forma parte de una sociedad y, al mismo tiempo, conserva un espacio propio de decisión sobre su vida. Ese doble carácter, individual y social, es una de las tensiones más importantes que el derecho debe resolver. Corresponde precisamente al derecho mantener el equilibrio entre la libertad individual y el derecho de las demás personas a desarrollar su propio proyecto de vida.</p>

<h2>El individuo como integrante de la sociedad</h2>
<p>Ninguna persona vive completamente aislada. Sus decisiones, por privadas que parezcan, casi siempre tienen algún efecto sobre quienes la rodean: familiares, vecinos, compañeros de trabajo o la comunidad en general. Reconocer este hecho no significa negar la individualidad, sino aceptar que la libertad personal se ejerce siempre dentro de un entramado de relaciones sociales que el derecho intenta ordenar.</p>

<h2>La libertad individual</h2>
<p>La libertad es uno de los valores que el derecho busca proteger con mayor firmeza. Se expresa en la posibilidad de elegir una profesión, una forma de vida, creencias propias o un proyecto personal sin interferencias arbitrarias por parte del Estado o de terceros. Hernández (2018) recuerda que buena parte del desarrollo histórico del derecho moderno ha estado orientado precisamente a limitar el poder frente al individuo, reconociendo espacios de autonomía que ninguna autoridad puede invadir sin justificación.</p>

<h2>Límites necesarios a la libertad</h2>
<p>Sin embargo, la libertad no puede entenderse como una facultad ilimitada. Cuando el ejercicio de la libertad de una persona afecta negativamente los derechos de otra, el derecho interviene para establecer límites. La libertad de expresión, por ejemplo, no ampara la difamación; la libertad de empresa no autoriza prácticas que pongan en riesgo la salud pública; la libertad de tránsito no permite invadir la propiedad ajena. Estos límites no niegan la libertad, sino que la hacen compatible con la libertad de los demás.</p>

<h2>Derechos y obligaciones</h2>
<p>Esta relación entre libertad y límite se traduce jurídicamente en derechos y obligaciones. Cada derecho reconocido a una persona suele implicar, de manera correlativa, una obligación para las demás de respetarlo. El derecho a la propiedad implica la obligación general de no perturbarla; el derecho a la integridad personal implica la obligación de no agredir a otros. Esta estructura recíproca permite que la libertad de cada individuo coexista con la de toda la comunidad.</p>

<h2>Resolución pacífica de conflictos</h2>
<p>Cuando dos libertades entran en conflicto, el derecho ofrece mecanismos institucionales para resolver la disputa sin recurrir a la violencia: tribunales, procesos de mediación, procedimientos administrativos. Estos mecanismos permiten que el desacuerdo entre libertades individuales se resuelva mediante criterios reconocidos por todos, en lugar de imponerse por la fuerza de quien tenga más poder en un momento determinado.</p>

<h2>Reflexión personal</h2>
<p>La pregunta de hasta dónde puede llegar la libertad de una persona cuando sus acciones afectan a otras no tiene una respuesta única ni definitiva; depende del contexto social, del momento histórico y de los valores predominantes en cada comunidad. Lo que sí me parece claro es que una libertad sin ningún límite terminaría por destruir la libertad de los demás, y que el papel del derecho no es restringir la libertad por sí misma, sino hacerla sostenible dentro de la vida en común.</p>
`,
  },
  {
    slug: "derecho-como-herramienta-de-transformacion-social",
    title: "¿Puede el derecho transformar la sociedad?",
    excerpt:
      "Una reflexión final sobre la eficacia real de las leyes y sobre las condiciones necesarias para que una norma jurídica transforme la realidad social.",
    publishedAt: "2026-08-25",
    author: "Lenier Reyes Morales",
    tags: ["Transformación social", "Eficacia jurídica", "Ciudadanía", "Reflexión"],
    image: "/images/transformacion-social.svg",
    imageAlt:
      "Un grupo de ciudadanos participando en una asamblea comunitaria, representando la participación ciudadana en la transformación social",
    featured: false,
    references: [
      "Treves, R. (2004). La sociología del derecho: orígenes, investigaciones, problemas (M. Atienza, Trad.). Editorial Ariel. (Trabajo original publicado en 1988)",
      "Soriano, R. (2005). Sociología del derecho (2.ª ed.). Ariel.",
    ],
    content: `
<p>A lo largo de este blog se ha analizado cómo el derecho surge de la sociedad, regula la convivencia y protege valores como la libertad, la justicia y la seguridad jurídica. Queda, sin embargo, una pregunta pendiente que conviene abordar como cierre: ¿puede el derecho, además de reflejar la sociedad, transformarla? La respuesta, desde la sociología jurídica, es más matizada de lo que parece a primera vista.</p>

<h2>El derecho como producto de la sociedad</h2>
<p>Como se ha explicado en entradas anteriores, el derecho nace de la sociedad: recoge sus conflictos, sus valores y sus necesidades. En ese sentido, es principalmente un producto social. Pero esta afirmación no agota su función, porque una vez creado, el derecho también puede actuar sobre la realidad que le dio origen, modificando comportamientos y generando nuevas dinámicas sociales.</p>

<h2>El derecho como instrumento de transformación</h2>
<p>Existen numerosos ejemplos históricos de leyes que han contribuido a cambiar prácticas sociales arraigadas: normas que amplían derechos laborales, que reconocen la igualdad ante la ley entre hombres y mujeres, o que protegen a grupos históricamente discriminados. En estos casos, el derecho no se limita a describir lo que la sociedad ya aceptaba, sino que impulsa cambios que, con el tiempo, terminan siendo asimilados culturalmente. Treves (2004/1988) señala que esta capacidad transformadora del derecho es una de las razones por las cuales su estudio no puede reducirse a un análisis puramente técnico.</p>

<h2>Aprobar una ley no es lo mismo que lograr su eficacia</h2>
<p>Sin embargo, aprobar una ley no garantiza automáticamente que la realidad cambie. Existen numerosos ejemplos de normas bien redactadas que nunca lograron aplicarse plenamente, ya sea porque la sociedad no las conocía, porque las instituciones encargadas de hacerlas cumplir carecían de recursos, o porque entraban en conflicto con costumbres profundamente arraigadas. Soriano (2005) advierte que estudiar únicamente el texto legal, sin observar su aplicación real, ofrece una visión incompleta del fenómeno jurídico.</p>

<h2>El papel de las instituciones</h2>
<p>Para que una ley sea eficaz, no basta con su existencia formal. Se requieren instituciones capaces de difundirla, aplicarla de manera consistente y sancionar su incumplimiento. Un poder judicial lento, una administración pública débil o cuerpos de fiscalización insuficientes pueden convertir incluso a la mejor ley en una norma simbólica, cumplida solo parcialmente o de manera selectiva.</p>

<h2>Participación ciudadana</h2>
<p>La transformación social a través del derecho tampoco depende exclusivamente del Estado. La ciudadanía cumple un papel activo al exigir el cumplimiento de las normas, denunciar su incumplimiento y participar en los procesos que dan origen a nuevas leyes. Una sociedad informada y activa incrementa considerablemente las posibilidades de que una norma jurídica logre los efectos sociales que se propone alcanzar.</p>

<h2>Conclusión personal del autor</h2>
<p>Después de recorrer los distintos temas abordados en este blog, considero que la relación entre derecho y sociedad puede resumirse en una idea central: una ley no transforma automáticamente la realidad. Para que sea eficaz, debe ser conocida, aplicada correctamente, aceptada socialmente y respaldada por instituciones capaces de hacerla cumplir. El derecho tiene, sin duda, un enorme potencial transformador, pero ese potencial solo se realiza cuando dialoga de manera constante con la sociedad a la que pretende servir. Esa, me parece, es la lección más importante que deja el estudio de la sociología jurídica.</p>
`,
  },
];

export const posts: BlogPost[] = rawPosts
  .map((post) => ({
    ...post,
    readingTime: getReadingTime(post.content),
  }))
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter((post) => post.featured);
}

export function getRecentPosts(limit = 5): BlogPost[] {
  return posts.slice(0, limit);
}

export function getAdjacentPosts(slug: string): {
  previous: BlogPost | null;
  next: BlogPost | null;
} {
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
