// Fichas de Espers (NTE) — arte oficial + descripción
const FICHAS = {
  "chaos": {
    "nombreCompleto": "Chaos",
    "faccion": "Buró de Control de Anomalías (ETD-6)",
    "desc": "Esper Lakshana rango S y miembro de la División Táctica de Ejecución 6 (ETD-6). DPS centrado en ataques básicos y definitiva que llena su medidor 'Crime' para potenciar el daño y aplica 'Warrant' a los enemigos.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/8/87/Chaos_Portrait.png"
  },
  "lacrimosa": {
    "nombreCompleto": "Lacrimosa",
    "faccion": "Buró de Control de Anomalías (ETD-4)",
    "desc": "Esper de Chaos de la ETD-4. DPS de daño en el tiempo (DoT) que copia y lanza habilidades enemigas; brilla en equipos de pesadilla/DoT gracias a su mecánica Nightmare.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/c/c1/Lacrimosa_Portrait.png"
  },
  "hotori": {
    "nombreCompleto": "Hotori",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper Cosmos de apoyo/buff que puede detener el tiempo y grabar los ataques de sus compañeros para amplificar el daño del equipo, con potencial de daño explosivo.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/b/b6/Hotori_Portrait.png"
  },
  "nanally": {
    "nombreCompleto": "Nanally",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper Anima rango S y cabeza de la Familia Coluccis. Chica-gato y principal DPS al lanzamiento, con ataques de seguimiento automáticos que se activan aun estando fuera de campo.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/8/8b/Nanally_Portrait.png"
  },
  "daffodill": {
    "nombreCompleto": "Daffodill",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper Chaos rango S. DPS de tipo Break-Burst que acumula intensidad de ruptura y castiga a los enemigos al alcanzar el umbral de Break; destaca en equipos de reacción Discord.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/f/f0/Daffodill_Portrait.png"
  },
  "baicang": {
    "nombreCompleto": "Baicang",
    "faccion": "Buró de Control de Anomalías (ETD-4)",
    "desc": "Capitán de la División Táctica de Ejecución 4 (ETD-4). DPS de Incantation que usa 'Palabras de Poder' para infligir gran daño; descrito como el capitán menos 'capitán' de la ETD-4.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/8/83/Baicang_Portrait.png"
  },
  "jiuyuan": {
    "nombreCompleto": "Jiuyuan",
    "faccion": "Sterry Express",
    "desc": "Esper Anima, mensajera de élite y gerente en funciones de Sterry Express. DPS principal o secundario cuyo atractivo es su mejora del Ciclo Blossom, que duplica los Blossom en el campo.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/b/b3/Jiuyuan_Portrait.png"
  },
  "hathor": {
    "nombreCompleto": "Hathor",
    "faccion": "Sterry Express",
    "desc": "Esper Lakshana rango S y operativa de Sterry Express, de cabello plateado y ala de ángel. DPS y una de las pocas Espers capaces de conducir motocicleta.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/9/9b/Hathor_Portrait.png"
  },
  "chiz": {
    "nombreCompleto": "Chiz",
    "faccion": "Familia Dvořák",
    "desc": "Esper Cosmos de la Familia Dvořák y gerente del banco Pink Paws. DPS en campo que escala con 'Grain': lo gasta con su habilidad y lo recupera con básicos. Se desbloquea gratis al llegar a nivel 18 de City Tycoon.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/4/42/Chiz_Portrait.png"
  },
  "zero": {
    "nombreCompleto": "Esper Zero",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Protagonista jugable, un Esper clase S de elemento Cosmos hallado sin memoria en el epicentro del desastre del Hipervórtice. Percibe la verdadera esencia de las anomalías y puede comunicarse con ellas; está bajo tutela del Buró de Control de Anomalías.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/5/5f/Esper_Zero_Male_Portrait.png"
  },
  "sakiri": {
    "nombreCompleto": "Sakiri",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper S de Incantation y miembro de la Tienda Eibon. Chica de cabello blanco con un cuerno de oni, acompañada por un fantasma tuerto llamado Kiroumaru; da apoyo agrupando y controlando enemigos y potenciando al equipo.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/6/61/Sakiri_Portrait.png"
  },
  "fadia": {
    "nombreCompleto": "Fadia",
    "faccion": "Buró de Control de Anomalías (ETD-4)",
    "desc": "Enigmática Esper S de Psyche del ETD-4, apodada la 'Apóstol del Amor y la Muerte'. De naturaleza vampírica, redirige a sí misma parte del daño de sus aliados y se cura con habilidades basadas en sangre.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/7/7d/Fadia_Portrait.png"
  },
  "skia": {
    "nombreCompleto": "Skia",
    "faccion": "Buró de Control de Anomalías (ETD-4)",
    "desc": "Teniente del ETD-4 y Esper A de elemento Lakshana. Imponente canino de pelaje oscuro con una cicatriz sobre el ojo izquierdo, vestido como agente táctico de élite; actúa como DPS principal.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/0/0d/Skia_Portrait.png"
  },
  "mint": {
    "nombreCompleto": "Mint",
    "faccion": "Buró de Control de Anomalías (CSU-2)",
    "desc": "Esper A de elemento Anima, una vivaz chica-gato de cabello turquesa que lucha con dobles cuchillas y ataques de torbellino como DPS cuerpo a cuerpo veloz con fuerte daño en área.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/4/41/Mint_Portrait.png"
  },
  "aurelia": {
    "nombreCompleto": "Aurelia",
    "faccion": "Asociación de Vecinos de la Calle Tamamochi",
    "desc": "Esper A de Psyche muy móvil; DPS principal que comanda un banco de medusas para infligir daño Psyche sostenido mientras se desplaza a gran velocidad. Su nombre viene de la medusa luna (Aurelia aurita).",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/2/22/Aurelia_Portrait.png"
  },
  "haniel": {
    "nombreCompleto": "Haniel",
    "faccion": "Sterry Express",
    "desc": "Esper A de Psyche y miembro de Sterry Express. Apoyo muy versátil que despliega su altavoz portátil Hootie para aumentar el ATQ del equipo y desencadenar efectos en cadena de Ensamble mientras causa daño Psyche.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/a/a5/Haniel_Portrait.png"
  },
  "adler": {
    "nombreCompleto": "Alois V. Alder",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper A de Incantation y el mayordomo perfecto de la Tienda Eibon. Apoyo de tipo escudo cuyo daño y protección escalan con la DEF, gestionando acumulaciones de Karma para proteger y debilitar enemigos.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/0/0c/Adler_Portrait.png"
  },
  "edgar": {
    "nombreCompleto": "Edgar",
    "faccion": "Tienda de Antigüedades Eibon",
    "desc": "Esper A de elemento Cosmos y miembro de la Tienda Eibon, de aire sereno y estética refinada en tonos azul claro. Apoyo de media distancia centrado en la curación: sus habilidades y su definitiva sanan aliados mientras dañan a los enemigos.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/b/b4/Edgar_Portrait.png"
  },
  "shinku": {
    "nombreCompleto": "Shinku",
    "faccion": "Buró de Control de Anomalías (Unidad de Contención 2)",
    "desc": "Esper Cosmos rango S del Buró de Control de Anomalías (Containment Strike Unit 2), lanzada el 8-jul-2026 en la versión 1.2 con el banner 'Before the Dawn'. Main DPS de arma Condensate con mecánica de doble postura y una Definitiva que la lleva al estado Rising Crimson para ráfagas de daño. Cabello negro con mechones carmesí, dos cuernos rojos, ojos rubí y una larga cola negra y rosa.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/a/a8/Shinku_Portrait.png"
  },
  "zankou": {
    "nombreCompleto": "Zankou (alias «Bella»)",
    "faccion": "La Carta Escarlata (The Scarlet Letter)",
    "desc": "Esper Encantamiento rango S de arma Gas, lanzada el 19-ago-2026 en la versión 1.3 con el banner «Sombras seductoras». Miembro de La Carta Escarlata, hija (adoptiva según la wiki ES) de Inanna, hermana menor de Daffodill y mayor de Poinsette; su habilidad Esper es «El Ojo del Delirio». Main DPS de ataques de seguimiento con dos formas (real e ilusoria) que aplica y propaga daño prolongado y potencia la Quemadura del equipo. Nivel 80: 14 234 PS · 577 ATQ · 834 DEF.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/0/00/Zankou_Portrait.png"
  },
  "linko": {
    "nombreCompleto": "Linko",
    "faccion": "Buró de Control de Anomalías (ETD-6)",
    "desc": "Esper Anima rango S de arma Plasma, lanzada el 9-sep-2026 en la versión 1.3 con el banner «Surfing All Channels!». Miembro de la División Táctica de Ejecución 6 (ETD-6) del Buró, cumple años el 14 de febrero y combate junto a su Anomalía compañera Xiaozhen; su habilidad Esper es la telepatía. Sub-DPS de ráfaga y ataques de seguimiento: llama a sus aliados a realizar Golpes sincronizados, reduce resistencias elementales y potencia la reacción Hexed. La wiki ES la nombra «Lingke»/«Lingko», pero su cita oficial en español dice «Linko».",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/e/ef/Linko_Portrait.png"
  },
  "blackbird": {
    "nombreCompleto": "Blackbird, «La Bruja»",
    "faccion": "Corte de Yggash (Yggash Court; nombre ES por confirmar)",
    "desc": "PRELIMINAR. Esper Psyche rango S de arma Gas, anunciada para el 30-sep-2026 (versión 1.4, banner «Foretold Finale»). Hoy es la bruja de la Casa de la Bruja en Bridge Crossings, donde lee la fortuna y atiende las Piedras oráculo. Kit no publicado.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/8/8d/Blackbird_Portrait.png"
  },
  "akane-rin": {
    "nombreCompleto": "Akane Rin",
    "faccion": "StarSign (Señal Estelar); antes LINES / The Whoots!!!!",
    "desc": "PRELIMINAR. Esper Lakshana rango S de arma Liquid, anunciada para la versión 1.4 (según la wiki, 21-oct-2026, banner «Dazzling Star»). Camarera de StarSign; formó parte de LINES, banda musical y grupo de cazadoras de Anomalías junto a Aurelia y Suzuha. Kit no publicado.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/4/4f/Akane_Rin_Portrait.png"
  },
  "iroi": {
    "nombreCompleto": "Oneiroi «Iroi» (Teana, apodo de Mint)",
    "faccion": "Buró de Control de Anomalías (CSU-2)",
    "desc": "Esper Anima rango S de arma Liquid, lanzada el 29-jul-2026 en la versión 1.2 (Fase 2) con el banner «Hilo de vida»; su disco insignia «La puerta equivocada» llegó en el programa de discos Dreamgate Special. Miembro de la Unidad de Contención 2 del Buró junto a Mint y Shinku, voluntaria en la Isla Solardiente; cumple años el 21 de diciembre y su habilidad Esper es «Sueño infantil». Apoyo sanador que invoca corderos (Morpheus, Icelos, Phantasos), acumula Imaginación, transforma en ovejas a los aliados caídos (Regresión) y duplica los Vita Bud del Blossom. Nivel 80: 10 394 PS · 371 ATQ · 549 DEF.",
    "img": "https://static.wikia.nocookie.net/neverness-to-everness/images/8/85/Iroi_Portrait.png"
  }
};
