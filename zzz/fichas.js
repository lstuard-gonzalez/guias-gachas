// Fichas de agentes (ZZZ) — arte oficial + descripción
const FICHAS = {
  "alice-thymefield": {
    "nombreCompleto": "Alice Thymefield",
    "faccion": "Cabaña del Terror",
    "desc": "Espadachina noble y thiren coneja de la familia Thymefield, educada en ciencia del Éter. Miembro más reciente de la Cabaña del Terror; usa una esgrima refinada acumulando energía para asaltos devastadores.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2d/Agent_Alice_Thymefield_Portrait.png"
  },
  "anby-demara": {
    "nombreCompleto": "Anby Demara",
    "faccion": "Gazmoños",
    "desc": "Joven callada y de pasado misterioso, miembro de los Gazmoños con un estilo de combate muy eficiente. Le encantan las películas.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/bd/Agent_Anby_Demara_Portrait.png"
  },
  "anton-ivanov": {
    "nombreCompleto": "Antón Ivanov",
    "faccion": "Construcciones Belobog",
    "desc": "Minero entusiasta y trabajador estrella de Belobog. Enérgico, leal y algo fanfarrón, ataca con taladros de gran potencia.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/1d/Agent_Anton_Ivanov_Portrait.png"
  },
  "aria": {
    "nombreCompleto": "Aria",
    "faccion": "Ángeles del Delirio",
    "desc": "Vocalista principal de la banda Ángeles del Delirio. DPS de Éter/Anomalía centrada en ataques cargados y en desencadenar Abloom sobre enemigos con anomalías.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/0b/Agent_Aria_Portrait.png"
  },
  "astra-yao": {
    "nombreCompleto": "Astra Yao",
    "faccion": "Estrellas de Lyra",
    "desc": "La cantante más famosa de Nueva Eridu y líder de las Estrellas de Lyra. Soporte universal cuyos potenciadores benefician a todo el equipo, con protección e invulnerabilidad en su definitiva.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/44/Agent_Astra_Yao_Portrait.png"
  },
  "banyue": {
    "nombreCompleto": "Banyue",
    "faccion": "Autoridad de Cumplimiento Krampus",
    "desc": "Agente de la Autoridad de Cumplimiento Krampus, que vigila a los miembros de TOPS. Disruptora de Ígneo que inflige daño de fuego puro acumulando 'Fuegos de Ira'.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/43/Agent_Banyue_Portrait.png"
  },
  "ben-bigger": {
    "nombreCompleto": "Ben Bigger",
    "faccion": "Construcciones Belobog",
    "desc": "Oso thiren imponente que trabaja como contador en Belobog. Pese a su tamaño es amable y tímido; actúa como defensor, protegiendo al equipo.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/35/Agent_Ben_Bigger_Portrait.png"
  },
  "billy-kid": {
    "nombreCompleto": "Billy Kid",
    "faccion": "Gazmoños",
    "desc": "Androide justiciero y aspirante a héroe de los Gazmoños. Alegre, teatral y optimista, combate a distancia disparando con sus dos pistolas.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/dc/Agent_Billy_Kid_Portrait.png"
  },
  "burnice-white": {
    "nombreCompleto": "Burnice White",
    "faccion": "Hijos de Calydon",
    "desc": "Pirómana despreocupada y experta en explosivos de la banda de moteros Hijos de Calydon. Agente de Anomalía de Ígneo que incendia el campo con su combustible.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d1/Agent_Burnice_White_Portrait.png"
  },
  "caesar-king": {
    "nombreCompleto": "Caesar King",
    "faccion": "Hijos de Calydon",
    "desc": "Líder carismática e imponente de la banda de moteros Hijos de Calydon. Defensora que protege y potencia al equipo con su enorme escudo y golpes contundentes.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b8/Agent_Caesar_King_Portrait.png"
  },
  "cissia": {
    "nombreCompleto": "Cissia",
    "faccion": "División de Orden Metropolitano",
    "desc": "Miembro de la División de Orden Metropolitano de la Seguridad Pública de Nueva Eridu. Atacante de Eléctrico que consume puntos de 'Veneno' para asestar ráfagas y subir su probabilidad de crítico.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/83/Agent_Cissia_Portrait.png"
  },
  "corin-wickes": {
    "nombreCompleto": "Corin Wickes",
    "faccion": "Casa Victoria",
    "desc": "Sirvienta de combate de Casa Victoria, extremadamente tímida y torpe, pero letal en batalla con su enorme motosierra.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cf/Agent_Corin_Wickes_Portrait.png"
  },
  "dialyn": {
    "nombreCompleto": "Dialyn",
    "faccion": "Autoridad de Cumplimiento Krampus",
    "desc": "Representante de atención al cliente de TOPS y una de las Juezas de la Autoridad de Cumplimiento Krampus. Sarcástica y de lengua venenosa, aturdidora de Físico que castiga a quienes rompen las reglas.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9f/Agent_Dialyn_Portrait.png"
  },
  "ellen-joe": {
    "nombreCompleto": "Ellen Joe",
    "faccion": "Servicios Domésticos Victoria",
    "desc": "Thiren tiburón y la más reciente doncella de Servicios Domésticos Victoria. Perezosa y de bajo ánimo, aunque leal a sus compañeras.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/e/e3/Agent_Ellen_Joe_Portrait.png"
  },
  "evelyn": {
    "nombreCompleto": "Evelyn Chevalier",
    "faccion": "Estrellas de Lyra",
    "desc": "Mánager y guardaespaldas de la cantante Astra Yao en las Estrellas de Lyra. De mente aguda y pasado misterioso, es letal en combate.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d2/Agent_Evelyn_Chevalier_Portrait.png"
  },
  "gatillo": {
    "nombreCompleto": "Gatillo",
    "faccion": "Batallón Óbolos",
    "desc": "Francotiradora del Batallón Óbolos, subunidad de la Fuerza de Defensa de Nueva Eridu. Antigua integrante del Escuadrón Lira.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a4/Agent_Trigger_Portrait.png"
  },
  "grace-howard": {
    "nombreCompleto": "Grace Howard",
    "faccion": "Construcciones Belobog",
    "desc": "Jefa de I+D de Construcciones Belobog, ingeniera excéntrica obsesionada con las máquinas y hermana adoptiva de la presidenta Koleda.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9a/Agent_Grace_Howard_Portrait.png"
  },
  "harumasa": {
    "nombreCompleto": "Asaba Harumasa",
    "faccion": "División N.º 6",
    "desc": "Oficial ejecutivo de la División N.º 6 de Operaciones Especiales del Hueco. Relajado y algo perezoso, pero eficaz con sus espadas gemelas.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f6/Agent_Asaba_Harumasa_Portrait.png"
  },
  "hugo": {
    "nombreCompleto": "Hugo Vlad",
    "faccion": "Ruiseñor",
    "desc": "Líder de la facción Ruiseñor. Elegante y letal, empuña una guadaña oculta en un maletín y se especializa en detonar a enemigos aturdidos.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5e/Agent_Hugo_Vlad_Portrait.png"
  },
  "jane-doe": {
    "nombreCompleto": "Jane Doe",
    "faccion": "Equipo de Respuesta de Investigación Criminal",
    "desc": "Thiren rata y especialista en conducta criminal que trabaja como consultora encubierta del Equipo de Respuesta de Investigación Criminal. Enigmática y de múltiples identidades.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/11/Agent_Jane_Doe_Portrait.png"
  },
  "ju-fufu": {
    "nombreCompleto": "Ju Fufu",
    "faccion": "Pináculo Yunkui",
    "desc": "Thiren tigre y discípula veterana del Pináculo Yunkui, versada en artes místicas. Combate con una enorme olla de palomitas llamada Hu Wei.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2a/Agent_Ju_Fufu_Portrait.png"
  },
  "koleda": {
    "nombreCompleto": "Koleda Belobog",
    "faccion": "Construcciones Belobog",
    "desc": "Joven presidenta de Construcciones Belobog. Golpea con un martillo gigante y desata daño de fuego a través de su mecánica de Horno.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d6/Agent_Koleda_Belobog_Portrait.png"
  },
  "komano-manato": {
    "nombreCompleto": "Komano Manato",
    "faccion": "Cabaña del Terror",
    "desc": "Miembro de la Cabaña del Terror. Sus ataques escalan con su HP máxima e infligen daño de ruptura (Sheer), cumpliendo un rol disruptivo.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a1/Agent_Komano_Manato_Portrait.png"
  },
  "lighter": {
    "nombreCompleto": "Lighter",
    "faccion": "Hijos de Calydon",
    "desc": "Campeón de los Hijos de Calydon. Ex mercenario y boxeador curtido en la arena clandestina, especializado en aturdir enemigos.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/dd/Agent_Lighter_Portrait.png"
  },
  "lucia": {
    "nombreCompleto": "Lucia Elowen",
    "faccion": "Cabaña del Terror",
    "desc": "Miembro de la Cabaña del Terror, thiren de aspecto caprino. Auxiliar de Éter cuyo poder escala con la HP y potencia a los agentes de Ruptura.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/49/Agent_Lucia_Elowen_Portrait.png"
  },
  "lucy-de-montefio": {
    "nombreCompleto": "Luciana de Montefio",
    "faccion": "Hijos de Calydon",
    "desc": "Heredera de la familia de Montefio y auxiliar de los Hijos de Calydon. Comanda a sus jabalíes mascota, los Guardias, para apoyar al equipo.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9f/Agent_Luciana_de_Montefio_Portrait.png"
  },
  "miyabi": {
    "nombreCompleto": "Hoshimi Miyabi",
    "faccion": "Sección 6 (Operaciones Especiales del Hueco)",
    "desc": "Jefa de la Sección 6 y la Cazadora del Vacío más joven de Nueva Eridu, maestra del estilo de espada de la escuela Isshin-Muga.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/da/Agent_Hoshimi_Miyabi_Portrait.png"
  },
  "n-0-anby": {
    "nombreCompleto": "Anby Demara (Soldado 0)",
    "faccion": "Fuerza de Defensa de Nueva Eridu - Escuadrón Plateado",
    "desc": "Identidad como supersoldado de Anby Demara: la Soldado 0, capitana del ya desaparecido Escuadrón Plateado, experta en táctica y esgrima.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/90/Agent_Soldier_0_-_Anby_Portrait.png"
  },
  "n-11": {
    "nombreCompleto": "Soldado 11",
    "faccion": "Escuadrón Óbolo (Fuerza de Defensa de Nueva Eridu)",
    "desc": "Soldado de élite de la Fuerza de Defensa que empuña una espada incandescente; disciplinada en combate pero algo torpe en la vida cotidiana.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/36/Agent_Soldier_11_Portrait.png"
  },
  "nangong-yu": {
    "nombreCompleto": "Nangong Yu",
    "faccion": "Ángeles del Delirio",
    "desc": "Capitana y bailarina principal del grupo Ángeles del Delirio, segura de sí misma y atenta con sus compañeras.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/27/Agent_Nangong_Yu_Portrait.png"
  },
  "nekomata": {
    "nombreCompleto": "Nekomiya Mana",
    "faccion": "Liebres Astutas",
    "desc": "Thiren felina ágil y juguetona, miembro de la agencia de encargos Liebres Astutas que lucha con dobles cuchillas.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/bc/Agent_Nekomiya_Mana_Portrait.png"
  },
  "nicole-demara": {
    "nombreCompleto": "Nicole Demara",
    "faccion": "Liebres Astutas",
    "desc": "Líder de las Liebres Astutas, astuta y algo estafadora; apoya al equipo debilitando enemigos con su maletín-cañón etéreo.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/7a/Agent_Nicole_Demara_Portrait.png"
  },
  "orfia-y-magas": {
    "nombreCompleto": "Orfia Magnusson y Magas",
    "faccion": "Escuadrón Óbolo (Fuerza de Defensa de Nueva Eridu)",
    "desc": "Dúo de artillera y capitana del Escuadrón Óbolo: Orfia es el cuerpo (una constructo inteligente) y Magas, su alma alojada en el arma.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cf/Agent_Orphie_Magnusson_%26_Magus_Portrait.png"
  },
  "pan-yinhu": {
    "nombreCompleto": "Pan Yinhu",
    "faccion": "Cumbre Yunkui",
    "desc": "Chef principal y administrador financiero de la Cumbre Yunkui; un defensor físico que potencia a sus aliados de Rotura.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/87/Agent_Pan_Yinhu_Portrait.png"
  },
  "piper-wheel": {
    "nombreCompleto": "Piper Wheel",
    "faccion": "Hijos de Calydon",
    "desc": "Joven conductora de la banda Hijos de Calydon que provoca anomalías físicas con el látigo-cadena de su camión.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a9/Agent_Piper_Wheel_Portrait.png"
  },
  "promeia": {
    "nombreCompleto": "Promeia",
    "faccion": "Autoridad de Cumplimiento Krampus",
    "desc": "Una de las Juezas de la Autoridad de Cumplimiento Krampus; especialista en anomalías de hielo como DPS principal.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/34/Agent_Promeia_Portrait.png"
  },
  "pulchra-fellini": {
    "nombreCompleto": "Pulchra Fellini",
    "faccion": "Hijos de Calydon",
    "desc": "Thiren recolectora de información de los Hijos de Calydon; para ella amigos y enemigos son solo papeles temporales según el trabajo.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/7/77/Agent_Pulchra_Fellini_Portrait.png"
  },
  "qingyi": {
    "nombreCompleto": "Qingyi",
    "faccion": "Sección de Investigación Criminal (Seguridad Pública de Nueva Eridu)",
    "desc": "Androide del Equipo de Respuesta Especial de Investigación Criminal, aturdidora eléctrica que combate con un bastón extensible.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/d/d3/Agent_Qingyi_Portrait.png"
  },
  "rina": {
    "nombreCompleto": "Alexandrina Sebastiane",
    "faccion": "Casa Victoria",
    "desc": "Ama de llaves principal de la Casa Victoria; una Thiren elegante que apoya al equipo controlando a sus dos marionetas eléctricas.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/40/Agent_Alexandrina_Sebastiane_Portrait.png"
  },
  "seed": {
    "nombreCompleto": "Sporos",
    "faccion": "Escuadrón Óbolo",
    "desc": "Agente eléctrica de élite del Escuadrón Óbolo (Fuerza de Defensa de Nueva Eridu), especialista en armas pesadas que combate junto a su meca de apoyo con potentes ataques eléctricos de área.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/68/Agent_Seed_Portrait.png"
  },
  "seth": {
    "nombreCompleto": "Seth Lowell",
    "faccion": "Seguridad Pública de Nueva Eridu",
    "desc": "Joven agente thiren (lince) del Equipo de Respuesta Especial de Investigación Criminal, entusiasta y protector de sus compañeros.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f9/Agent_Seth_Lowell_Portrait.png"
  },
  "soukaku": {
    "nombreCompleto": "Soukaku",
    "faccion": "Sección 6",
    "desc": "Espadachina oni de la Sección 6 (Operaciones Especiales del Hueco), siempre hambrienta; apoya al equipo con mejoras de hielo y de ataque.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/35/Agent_Soukaku_Portrait.png"
  },
  "sunna": {
    "nombreCompleto": "Sunna",
    "faccion": "Ángeles del Delirio",
    "desc": "Compositora del grupo de ídolos virtuales Ángeles del Delirio; agente de apoyo que potencia a atacantes y anómalos marcando enemigos con Mirada de gato mediante su compañera Bubblegum.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/39/Agent_Sunna_Portrait.png"
  },
  "ukinami-yuzuha": {
    "nombreCompleto": "Ukinami Yuzuha",
    "faccion": "Cabaña del Terror",
    "desc": "Fundadora del grupo de la Cabaña del Terror en la península de Waifei; antigua sujeto del Proyecto Hoja Nueva que canaliza su trauma en la narración de historias.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6d/Agent_Ukinami_Yuzuha_Portrait.png"
  },
  "vivian": {
    "nombreCompleto": "Vivian Banshee",
    "faccion": "Ruiseñor",
    "desc": "Aprendiz de Hugo y ladrona en formación del sindicato de ladrones fantasma Ruiseñor; posee el don sobrenatural de presentir la muerte de las personas.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/f/f5/Agent_Vivian_Banshee_Portrait.png"
  },
  "von-lycaon": {
    "nombreCompleto": "Von Lycaon",
    "faccion": "Casa Victoria",
    "desc": "Elegante mayordomo thiren lobo de Casa Victoria; letal en combate con ataques de hielo pese a sus modales refinados.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5f/Agent_Von_Lycaon_Portrait.png"
  },
  "yanagi": {
    "nombreCompleto": "Tsukishiro Yanagi",
    "faccion": "Sección 6",
    "desc": "Subdirectora de la Sección 6 que combate con una katana y domina la electricidad; disciplinada y leal a Miyabi.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cb/Agent_Tsukishiro_Yanagi_Portrait.png"
  },
  "ye-shunguang": {
    "nombreCompleto": "Ye Shunguang",
    "faccion": "Cumbre Yunkui",
    "desc": "Portadora actual de la espada Qingming y cazadora del Vacío de la Cumbre Yunkui; hermana menor de Ye Shiyuan.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/bb/Agent_Ye_Shunguang_Portrait.png"
  },
  "yidhari": {
    "nombreCompleto": "Yidhari Murphy",
    "faccion": "Cabaña del Terror",
    "desc": "Thiren pulpo de la Cabaña del Terror que empuña un pesado martillo y ataca con hielo; de presencia inquietante y habla pausada.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/03/Agent_Yidhari_Murphy_Portrait.png"
  },
  "yixuan": {
    "nombreCompleto": "Yixuan",
    "faccion": "Cumbre Yunkui",
    "desc": "Maestra de la Cumbre Yunkui que domina la Tinta áurica, combatiendo con técnicas marciales y caligrafía espiritual.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/89/Agent_Yixuan_Portrait.png"
  },
  "zhao": {
    "nombreCompleto": "Zhao",
    "faccion": "Autoridad de Cumplimiento Krampus",
    "desc": "Thiren coneja de rasgos animales marcados y miembro de alto rango de la Autoridad de Cumplimiento Krampus (subsidiaria de TOPS); defensora con atributo de hielo.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/a/a6/Agent_Zhao_Portrait.png"
  },
  "zhu-yuan": {
    "nombreCompleto": "Zhu Yuan",
    "faccion": "Seguridad Pública de Nueva Eridu",
    "desc": "Oficial del Equipo de Respuesta Especial de Investigación Criminal; atacante de éter que combate con armamento pesado.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/07/Agent_Zhu_Yuan_Portrait.png"
  },
  "billy-estelar": {
    "nombreCompleto": "Billy Estelar (Starlight - Billy Kid)",
    "faccion": "Gazmoños",
    "desc": "«¡Solo soy un Caballero Estelar de paso!». Versión heroica de Billy Kid tras unirse al programa Starlight: el androide justiciero de los Gazmoños hecho Disruptivo Físico, que convierte sus PV máx. en Fuerza bruta y cuyo daño bruto ignora la DEF enemiga.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/46/Agent_Starlight_-_Billy_Kid_Portrait.png"
  },
  "pyrois": {
    "nombreCompleto": "Pyrois",
    "faccion": "Faetón",
    "desc": "Ente etéreo y avatar de combate de Faetón en Roscaelifer, con forma de jinete llameante. Primer agente de rango especial «I», gratuito al avanzar la historia de la versión 3.0 junto a su motor Sol exuvia; atacante Etéreo que encadena varias definitivas.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/45/Agent_Pyrois_Portrait.png"
  },
  "velina-airgid": {
    "nombreCompleto": "Velina Airgid",
    "faccion": "Departamento de Planificación Exterior",
    "desc": "Directora administrativa del Departamento de Planificación Exterior de Roscaelifer y tu anfitriona en la ciudad. Elegante y de origen desconocido, es la primera agente de atributo Aéreo (Viento): anómala que invoca ciclones (Vórtice) y aporta muchísimo aturdimiento.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/c/cf/Agent_Velina_Airgid_Portrait.png"
  },
  "norma-hollowell": {
    "nombreCompleto": "Norma Hollowell",
    "faccion": "Departamento de Planificación Exterior",
    "desc": "Técnica jefa del Departamento de Planificación Exterior de Roscaelifer, prodigio excéntrica de la Academia Aurelia obsesionada con los bangbús. Aturdidora Ígnea fuera de campo que despliega torretas Ehn Na, misiles y su sombrero de copa acompañante.",
    "img": "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/10/Agent_Norma_Hollowell_Portrait.png"
  }
};
