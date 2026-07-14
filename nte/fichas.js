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
  }
};
