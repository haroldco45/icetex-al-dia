/* Contenido verificado — ICETEX al Día (Vibras Positivas HM)
   Última revisión manual: 5 nov 2026, 6:30 p. m. hora de Colombia.
   Para actualizar el caso, edite ESTADO, TIMELINE y ROAD (paso con now:true). */
window.CONTENIDO = {
  DENUNCIA: "2026-11-04T15:00:00-05:00",

  ESTADO: {
    es: "4 de noviembre de 2026: el presidente del ICETEX, Richard Caicedo, y el presidente Abelardo De La Espriella anunciaron que el informe de la revisión contractual pasa a la Contraloría y a la Procuraduría. Ninguna de las dos ha anunciado todavía la apertura formal de una investigación, y la administración anterior no ha respondido públicamente a este informe.",
    en: "November 4, 2026: ICETEX president Richard Caicedo and President Abelardo De La Espriella announced that the contract-review report is going to the Comptroller's Office and the Inspector General. Neither has yet announced a formal investigation, and the previous administration has not publicly answered this report."
  },

  HALLAZGOS: [
    { cifra: "80 %", es: ["Más contratistas", "Entre 2022 y 2026 el número de contratistas por prestación de servicios (OPS) creció 80 %, según la revisión interna."], en: ["More contractors", "Between 2022 and 2026 the number of service contractors (OPS) grew 80%, according to the internal review."] },
    { cifra: "$70.000 M", es: ["Costo en un año", "Esos contratos costaron más de 70.000 millones de pesos solo en el último año."], en: ["Cost in one year", "Those contracts cost more than COP 70 billion in the last year alone."] },
    { cifra: "+140 %", es: ["Gasto en contratos", "El gasto en contratación subió más del 140 % en el período."], en: ["Contract spending", "Spending on contracts rose more than 140% over the period."] },
    { cifra: "$83.770 M", es: ["Ahorro Educativo Voluntario", "Comprometidos en tres contratos (factibilidad, reglamento y tecnología) para un producto que el propio estudio de factibilidad declaró no viable."], en: ["Voluntary Education Savings", "Committed in three contracts (feasibility, rules and technology) for a product the feasibility study itself declared not viable."] },
    { cifra: "$48.700 M", es: ["Girados en menos de un año", "El contrato tecnológico, pensado para cinco años, ya registraba entregas por cerca de la mitad de su valor."], en: ["Paid in under a year", "The technology contract, planned for five years, had already logged deliveries worth about half its value."] },
    { cifra: "$534 M", es: ["El estudio que dijo no", "Valor del estudio de factibilidad. Sus conclusiones (septiembre de 2025) dicen que el producto no era factible ni entregable."], en: ["The study that said no", "Cost of the feasibility study. Its conclusions (September 2025) say the product was neither feasible nor deliverable."] },
    { cifra: "$238 M", es: ["Reglamento sin aprobar", "Contrato de estructuración jurídica con pagos parciales. No hay evidencia de que el reglamento se radicara ante la Superintendencia Financiera."], en: ["Rules never approved", "Legal-structuring contract with partial payments. No evidence the rules were filed with the Financial Superintendency."] },
    { cifra: "Fondo", es: ["Pasivo Contingente", "Se comprometieron recursos de este fondo sin evidencia de autorización de la Junta Directiva del ICETEX. El monto no se ha publicado."], en: ["Contingent Liability Fund", "Money from this fund was committed with no evidence of Board approval. The amount has not been published."] }
  ],

  // Barras: [valor, etiqueta es, etiqueta en]
  CREDITOS: [[70000, "2024", "2024"], [10000, "2025", "2025"]],
  AEV: { total: 83000, girado: 48700 },

  CALC: { plata: 70000000000, min: 2000000, max: 15000000, paso: 500000, def: 5000000 },

  ROAD: [
    { es: "Revisión interna", en: "Internal review", done: true },
    { es: "Denuncia pública", en: "Public complaint", done: true },
    { es: "Informe a Contraloría y Procuraduría", en: "Report to oversight bodies", now: true },
    { es: "Indagación o apertura", en: "Preliminary inquiry" },
    { es: "Imputación o pliego de cargos", en: "Charges" },
    { es: "Fallo", en: "Ruling" }
  ],

  TIMELINE: [
    { f: "2018-03", es: "El Decreto 375 de 2018 crea la Cuenta de Ahorro Educativo Voluntario del ICETEX. Su reglamento debe ser aprobado por la Superintendencia Financiera antes de ofrecerse.", en: "Decree 375 of 2018 creates ICETEX's Voluntary Education Savings Account. Its rules must be approved by the Financial Superintendency before it can be offered." },
    { f: "2022-08", es: "Arranca el gobierno de Gustavo Petro. Desde aquí se mide el aumento del 80 % en contratistas que denuncia la nueva administración.", en: "Gustavo Petro's government begins. The 80% rise in contractors reported by the new administration is measured from here." },
    { f: "2024-12-10", es: "Álvaro Hernán Urquijo es nombrado presidente del ICETEX, tras unos 10 meses sin titular en propiedad.", en: "Álvaro Hernán Urquijo is appointed ICETEX president after about 10 months without a permanent head." },
    { f: "2025", es: "Se desmonta el subsidio a la tasa de interés que beneficiaba a cerca de 200.000 jóvenes de bajos recursos. Urquijo lo atribuyó a la situación fiscal del país.", en: "The interest-rate subsidy for about 200,000 low-income students is removed. Urquijo blamed the country's fiscal situation." },
    { f: "2025-09", es: "El estudio de factibilidad del Ahorro Educativo Voluntario (contratado por más de $534 millones) concluye que el producto no es factible ni entregable.", en: "The feasibility study for the Voluntary Education Savings product (over COP 534 million) concludes it is neither feasible nor deliverable." },
    { f: "2025-09-30", es: "Otra alerta: la Contraloría pide información al ICETEX sobre un contrato de unos $18.000 millones para una aplicación móvil, denunciado por la representante Catherine Juvinao.", en: "Another warning: the Comptroller asks ICETEX for information on a roughly COP 18 billion mobile-app contract flagged by Representative Catherine Juvinao." },
    { f: "2026-08-07", es: "Se posesiona el presidente Abelardo De La Espriella.", en: "President Abelardo De La Espriella takes office." },
    { f: "2026-08-18", es: "Richard Alexander Caicedo Rico asume la presidencia del ICETEX (Decreto 1227 de 2026) y ordena revisar los contratos de los últimos cuatro años.", en: "Richard Alexander Caicedo Rico takes over ICETEX (Decree 1227 of 2026) and orders a review of the last four years of contracts." },
    { f: "2026-11-04", es: "Caicedo presenta los hallazgos por los medios de Presidencia y anuncia el traslado del informe a la Contraloría y la Procuraduría para que determinen responsabilidades fiscales, disciplinarias o penales.", en: "Caicedo presents the findings through the Presidency's channels and announces the report will go to the Comptroller and the Inspector General to determine fiscal, disciplinary or criminal liability." }
  ],

  PERSONAS: [
    { n: "Richard Alexander Caicedo Rico", r: { es: "Presidente del ICETEX desde el 18 de agosto de 2026", en: "ICETEX president since August 18, 2026" }, d: { es: "Ingeniero de telecomunicaciones de la U. Santo Tomás de Bucaramanga; fue jefe de Gobernanza de la Alcaldía de Bucaramanga. Es quien presenta la denuncia.", en: "Telecom engineer (U. Santo Tomás, Bucaramanga); former head of Governance at Bucaramanga City Hall. He is the one filing the complaint." } },
    { n: "Álvaro Hernán Urquijo Gómez", r: { es: "Presidente del ICETEX, dic. 2024 – ago. 2026", en: "ICETEX president, Dec 2024 – Aug 2026" }, d: { es: "Exministro de Comercio. Defendió en su momento la transformación tecnológica del ICETEX y negó que la entidad estuviera en crisis. No se conoce respuesta suya al informe de noviembre.", en: "Former Trade Minister. At the time he defended ICETEX's technology overhaul and denied the agency was in crisis. No reply from him to the November report is known." } },
    { n: "Mauricio Toro", r: { es: "Presidente del ICETEX en el inicio del gobierno Petro", en: "ICETEX president early in the Petro government" }, d: { es: "Excongresista de la Alianza Verde. Durante su gestión, Blu Radio publicó investigaciones sobre contratistas ligados a congresistas.", en: "Former Green Alliance lawmaker. During his tenure, Blu Radio published investigations on contractors linked to lawmakers." } },
    { n: "Abelardo De La Espriella", r: { es: "Presidente de la República", en: "President of Colombia" }, d: { es: "Anunció junto a Caicedo el traslado del expediente. Su equipo de empalme ya había señalado recortes al ICETEX en su “Libro de la Verdad”.", en: "Announced the referral alongside Caicedo. His transition team had already flagged ICETEX budget cuts in its “Book of Truth”." } }
  ],

  // Lo que dicen las partes
  GOB: [
    { es: "La plata del ICETEX se fue en burocracia mientras se caían los créditos: de cerca de 70.000 nuevos en 2024 a unos 10.000 en 2025.", en: "ICETEX money went to bureaucracy while loans collapsed: from about 70,000 new ones in 2024 to some 10,000 in 2025." },
    { es: "Se siguió pagando un proyecto que el propio estudio de factibilidad declaró inviable.", en: "Payments continued on a project that its own feasibility study declared unviable." },
    { es: "La entidad sufrió recortes de la Nación por $1,75 billones y se eliminó el subsidio a la tasa de interés.", en: "The agency suffered national budget cuts of COP 1.75 trillion and the interest subsidy was removed." },
    { es: "La nueva administración dice que ya está corrigiendo los niveles de contratación con austeridad.", en: "The new administration says it is already cutting contracting levels under austerity." }
  ],
  OTRO: [
    { es: "Todas las cifras vienen de la revisión interna de la nueva administración; todavía no las ha validado un ente de control.", en: "All figures come from the new administration's internal review; no oversight body has validated them yet." },
    { es: "El informe no publica nombres de contratistas, firmantes ni fechas exactas de los contratos.", en: "The report does not publish contractor names, signers or exact contract dates." },
    { es: "Hay diferencias entre fuentes: se habla de recortes por $1,5 y por $1,75 billones, y la alerta que María Fernanda Cabal envió al empalme habló de un contrato de hasta $82.997 millones con $49.196 millones girados, frente a los $48.700 millones del informe.", en: "Sources differ: cuts of COP 1.5 vs 1.75 trillion are cited, and María Fernanda Cabal's alert to the transition team mentioned a contract of up to COP 82,997 million with 49,196 million paid, versus 48,700 million in the report." },
    { es: "La administración anterior defendió en su momento sus decisiones por la situación fiscal y la necesidad de modernizar la tecnología para más de 885.000 usuarios.", en: "The previous administration defended its decisions at the time, citing the fiscal situation and the need to modernize technology for over 885,000 users." }
  ],

  OJO: {
    es: "Ojo también con lo de ahora: en septiembre de 2026 la Junta Directiva autorizó vigencias futuras por $13.709 millones para contratar un call center de cobro de cartera hasta 2028. Una veeduría seria mira a todos los gobiernos.",
    en: "Keep an eye on the present too: in September 2026 the Board approved COP 13.709 billion in future commitments to hire a debt-collection call center through 2028. Real oversight watches every government."
  },

  DESTINOS: [
    { n: "ICETEX — Presidencia y Secretaría General", m: "notificaciones@icetex.gov.co" },
    { n: "Contraloría General de la República", m: "cgr@contraloria.gov.co" },
    { n: "Procuraduría General de la Nación", m: "quejas@procuraduria.gov.co" },
    { n: "Fiscalía General de la Nación", m: "ges.documental@fiscalia.gov.co" },
    { n: "Ministerio de Educación Nacional (preside la Junta Directiva del ICETEX)", m: "atencionalciudadano@mineducacion.gov.co" },
    { n: "Superintendencia Financiera de Colombia", m: "super@superfinanciera.gov.co" },
    { n: "Presidencia de la República", m: "contacto@presidencia.gov.co" }
  ],

  FUENTES: [
    ["Valora Analitik — Gobierno pone la lupa en el Icetex (4 nov 2026)", "https://www.valoraanalitik.com/gobierno-de-la-espriella-pone-la-lupa-en-el-icetex-anuncia-medidas-ante-posibles-irregularidades-en-la-entidad/"],
    ["Semana — De La Espriella denunció irregularidad en el Icetex (4 nov 2026)", "https://www.semana.com/politica/articulo/abelardo-de-la-espriella-denuncio-millonaria-irregularidad-en-el-icetex-ante-la-procuraduria-y-contraloria/202652/"],
    ["Infobae — El Gobierno le puso la lupa al Icetex (4 nov 2026)", "https://www.infobae.com/colombia/2026/11/04/el-gobierno-nacional-le-puso-la-lupa-al-icetex-advierte-recortes-menos-creditos-y-contratos-bajo-cuestionamiento/"],
    ["La Patria — Contratos por $83.770 millones para un proyecto no viable (5 nov 2026)", "https://www.lapatria.com/colombia/esta-entidad-denuncia-contratos-por-83-mil-770-millones-para-un-proyecto-que-no-era-viable"],
    ["Observatorio de la Universidad Colombiana (5 nov 2026)", "https://www.universidad.edu.co/mientras-gobierno-petro-recorto-recursos-de-subsidio-de-icetex-disparo-la-contratacion-en-la-entidad-denuncia-richard-caicedo/"],
    ["Metropolitano — Icetex denuncia irregularidades por $83.770 millones", "https://metropolitano.com.co/icetex-denuncia-irregularidades-por-83-770-millones/"],
    ["El País — Richard Caicedo, nuevo presidente del Icetex (19 ago 2026)", "https://www.elpais.com.co/colombia/richard-caicedo-es-el-nuevo-presidente-de-icetex-estos-son-sus-retos-1826.html"],
    ["Decreto 1227 de 2026 (La Silla Vacía)", "https://www.lasillavacia.com/wp-content/uploads/2026/08/DECRETO-No.-1227-DEL-18-DE-AGOSTO-DE-2026.pdf"],
    ["Decreto 375 de 2018 — Ahorro Educativo Voluntario (Función Pública)", "https://www1.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=85423"],
    ["Cambio — Call center de cobro de cartera por $13.709 millones (sep 2026)", "https://cambiocolombia.com/pais/articulo/2026/9/icetex-destinara-13709-millones-para-contratar-un-call-center-para-cobro-de-cartera-hasta-2028"],
    ["El Universal — Contraloría y el contrato de la app (30 sep 2025)", "https://www.eluniversal.com.co/colombia/2025/09/30/icetex-bajo-la-lupa-de-la-contraloria-por-contrato-de-18000-millones-para-una-aplicacion/"],
    ["Infobae — Urquijo sobre suspensión de créditos y la app (23 oct 2025)", "https://www.infobae.com/colombia/2025/10/23/director-del-icetex-confirmo-suspension-de-creditos-de-largo-plazo-por-recorte-presupuestal-es-una-situacion-riesgosa/"]
  ]
};
