// ============================================================
//  Genshin Guía rápida — datos de personajes (Genshin Impact 6.7)
//  122 personajes (Viajero ×6 variantes). Auditado: nombres ES oficiales.
// ============================================================
const CHARACTERS = [
  {
    "id": "viajero-anemo",
    "nombre": "Viajero (Anemo)",
    "rareza": "5",
    "elemento": "Anemo",
    "arma": "Espada",
    "version": "1.0",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bono de Daño Anemo"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRÍT"
    },
    "substats": [
      "Maestría Elemental",
      "Recarga de Energía",
      "ATQ%",
      "Prob. CRÍT / Daño CRÍT"
    ],
    "setPrincipal": "Sombra Verde Esmeralda",
    "sets": [
      {
        "es": "Sombra Verde Esmeralda",
        "en": "Viridescent Venerer",
        "nota": "4pc: reduce RES elemental del enemigo con Torbellino; el set de soporte Anemo por excelencia",
        "best": true
      },
      {
        "es": "Instructor",
        "en": "Instructor",
        "nota": "4pc: opción económica de Maestría Elemental para el equipo",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Juramento por la Libertad",
        "en": "Freedom-Sworn",
        "nota": "Maestría Elemental y buff de ATQ al equipo tras reacciones",
        "best": true
      },
      {
        "es": "Espada de Sacrificio",
        "en": "Sacrificial Sword",
        "nota": "Reinicia la habilidad y aporta Recarga de Energía",
        "best": false
      },
      {
        "es": "Espina de Hierro",
        "en": "Iron Sting",
        "nota": "F2P forjable con Maestría Elemental",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Soporte Torbellino Nacional",
        "agentes": [
          "Viajero (Anemo)",
          "Xiangling",
          "Xingqiu",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Torbellino Electro",
        "agentes": [
          "Viajero (Anemo)",
          "Raiden Shogun",
          "Fischl",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Soporte de Torbellino centrado en Maestría Elemental: agrupa con el tornado de su Definitivo y reduce resistencias con Sombra Verde Esmeralda 4pc. No esperes gran daño personal; su valor está en el control y el debuff.",
    "ficha": {
      "nombreCompleto": "Viajero — Anemo (Aether / Lumine)",
      "faccion": "Protagonista",
      "desc": "Primera resonancia elemental del Viajero, obtenida al tocar la Estatua de los Siete de Mondstadt en la versión 1.0. Usa ráfagas de viento y un tornado que arrastra enemigos y absorbe otros elementos. Es la variante clásica de utilidad y exploración.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Aether_Icon.png"
    }
  },
  {
    "id": "viajero-geo",
    "nombre": "Viajero (Geo)",
    "rareza": "5",
    "elemento": "Geo",
    "arma": "Espada",
    "version": "1.0",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bono de Daño Geo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRÍT / Daño CRÍT",
      "alt": "ATQ%"
    },
    "substats": [
      "Prob. CRÍT / Daño CRÍT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Ritual Antiguo de la Nobleza",
    "sets": [
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "4pc: potencia su Definitivo (su fuente principal de daño) y bufa al equipo",
        "best": true
      },
      {
        "es": "Petra Arcaica",
        "en": "Archaic Petra",
        "nota": "2pc + 2pc Final del Gladiador: alternativa ofensiva genérica",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Cortador de Jade Primordial",
        "en": "Primordial Jade Cutter",
        "nota": "Prob. CRÍT y ATQ altos para el build de daño",
        "best": true
      },
      {
        "es": "Deseo Ponzoñoso",
        "en": "Festering Desire",
        "nota": "Recarga de Energía y mejora de la habilidad elemental",
        "best": false
      },
      {
        "es": "Espada del Alba",
        "en": "Harbinger of Dawn",
        "nota": "F2P de 3 estrellas con mucho Daño CRÍT si mantienes la vida alta",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Doble Geo sub-DPS",
        "agentes": [
          "Viajero (Geo)",
          "Zhongli",
          "Fischl",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Mono Geo",
        "agentes": [
          "Viajero (Geo)",
          "Ningguang",
          "Gorou",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "DPS crítico genérico centrado en su Definitivo: un muro explosivo con buen multiplicador y bajo coste de energía. Funciona como sub-DPS de daño físico-independiente en equipos con resonancia Geo.",
    "ficha": {
      "nombreCompleto": "Viajero — Geo (Aether / Lumine)",
      "faccion": "Protagonista",
      "desc": "Resonancia obtenida en las Estatuas de los Siete de Liyue (versión 1.0). Lanza meteoritos y erige muros de piedra que explotan, con constelaciones que añaden Prob. CRÍT. Es la variante más orientada a daño directo de las primeras regiones.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Aether_Icon.png"
    }
  },
  {
    "id": "viajero-electro",
    "nombre": "Viajero (Electro)",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Espada",
    "version": "2.0",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bono de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRÍT / Daño CRÍT",
      "alt": "ATQ%"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRÍT / Daño CRÍT",
      "ATQ%"
    ],
    "setPrincipal": "Emblema del Destino",
    "sets": [
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "4pc: convierte la Recarga de Energía en daño de Definitivo; ideal para su rol de batería",
        "best": true
      },
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "4pc: buff de ATQ al equipo tras usar el Definitivo",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "Genera aún más partículas de energía para el equipo",
        "best": true
      },
      {
        "es": "Hoja Afilada Celestial",
        "en": "Skyward Blade",
        "nota": "Recarga de Energía alta de 5 estrellas",
        "best": false
      },
      {
        "es": "Espada de Sacrificio",
        "en": "Sacrificial Sword",
        "nota": "F2P gacha estándar: doble uso de habilidad y Recarga",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Batería Electro",
        "agentes": [
          "Viajero (Electro)",
          "Razor",
          "Fischl",
          "Diona"
        ],
        "best": true
      },
      {
        "nombre": "Agravado económico",
        "agentes": [
          "Viajero (Electro)",
          "Keqing",
          "Fischl",
          "Colección de Dendro (Yaoyao)"
        ],
        "best": false
      }
    ],
    "consejo": "Batería de energía: los Amuletos de la Abundancia de su Definitivo restauran energía plana a quien golpea con ataques normales. Constrúyelo con máxima Recarga de Energía para alimentar a DPS Electro hambrientos de energía.",
    "ficha": {
      "nombreCompleto": "Viajero — Electro (Aether / Lumine)",
      "faccion": "Protagonista",
      "desc": "Resonancia obtenida en Inazuma (versión 2.0). Su kit gira en torno a la generación de energía: amuletos que restauran energía elemental y reducen el tiempo de espera. Considerada la variante de soporte más especializada y de menor daño personal.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Aether_Icon.png"
    }
  },
  {
    "id": "viajero-dendro",
    "nombre": "Viajero (Dendro)",
    "rareza": "5",
    "elemento": "Dendro",
    "arma": "Espada",
    "version": "3.0",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bono de Daño Dendro"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRÍT"
    },
    "substats": [
      "Maestría Elemental",
      "Recarga de Energía",
      "Prob. CRÍT / Daño CRÍT"
    ],
    "setPrincipal": "Recuerdos del Bosque",
    "sets": [
      {
        "es": "Recuerdos del Bosque",
        "en": "Deepwood Memories",
        "nota": "4pc: reduce la RES Dendro enemiga; lo porta él para liberar al DPS del equipo",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "4pc: más Maestría Elemental si otro miembro lleva Recuerdos del Bosque",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Llave de la Coronación",
        "en": "Key of Khaj-Nisut",
        "nota": "Maestría Elemental para él y para todo el equipo",
        "best": true
      },
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "Energía para mantener el Definitivo activo",
        "best": false
      },
      {
        "es": "Espada de Madera",
        "en": "Sapwood Blade",
        "nota": "F2P forjable de Sumeru con Recarga y semilla de Maestría",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Agravado",
        "agentes": [
          "Viajero (Dendro)",
          "Keqing",
          "Fischl",
          "Kuki Shinobu"
        ],
        "best": true
      },
      {
        "nombre": "Florecimiento",
        "agentes": [
          "Viajero (Dendro)",
          "Xingqiu",
          "Nilou",
          "Barbara"
        ],
        "best": false
      }
    ],
    "consejo": "Soporte de reacciones Dendro: su Definitivo deja un campo que aplica Dendro fuera de turno de forma constante. Constrúyelo con Maestría Elemental y Recarga para habilitar Agravado y Florecimiento donde no tengas a Nahida.",
    "ficha": {
      "nombreCompleto": "Viajero — Dendro (Aether / Lumine)",
      "faccion": "Protagonista",
      "desc": "Resonancia obtenida en Sumeru (versión 3.0), lanzada junto al elemento Dendro en el juego. Su Lámpara de las Hojas Verdes aplica Dendro en área durante todo su Definitivo. Fue durante mucho tiempo el único aplicador Dendro fuera de turno gratuito.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Aether_Icon.png"
    }
  },
  {
    "id": "viajero-hydro",
    "nombre": "Viajero (Hydro)",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Espada",
    "version": "4.0",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bono de Daño Hydro",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "Prob. CRÍT / Daño CRÍT",
      "alt": "PV%"
    },
    "substats": [
      "Prob. CRÍT / Daño CRÍT",
      "PV%",
      "Maestría Elemental",
      "Recarga de Energía"
    ],
    "setPrincipal": "Corazón de las Profundidades",
    "sets": [
      {
        "es": "Corazón de las Profundidades",
        "en": "Heart of Depth",
        "nota": "2pc + 2pc Final del Gladiador para el build sub-DPS crítico (sus gotas de rocío escalan también con sus PV máx.)",
        "best": true
      },
      {
        "es": "Flor Olvidada del Paraíso",
        "en": "Flower of Paradise Lost",
        "nota": "4pc: build de Maestría Elemental como conductor de Florecimiento",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Llave de la Coronación",
        "en": "Key of Khaj-Nisut",
        "nota": "PV y Maestría Elemental: encaja con su escalado híbrido",
        "best": true
      },
      {
        "es": "Deseo Ponzoñoso",
        "en": "Festering Desire",
        "nota": "Recarga y mejora de la habilidad elemental",
        "best": false
      },
      {
        "es": "Diluvio Florífero",
        "en": "Toukabou Shigure",
        "nota": "F2P de evento con Maestría Elemental para Florecimiento",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Florecimiento",
        "agentes": [
          "Viajero (Hydro)",
          "Nahida",
          "Kirara",
          "Yaoyao"
        ],
        "best": true
      },
      {
        "nombre": "Congelado sub-DPS",
        "agentes": [
          "Viajero (Hydro)",
          "Kamisato Ayaka",
          "Kaedehara Kazuha",
          "Diona"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS Hydro híbrido: las gotas de rocío de su habilidad ganan daño extra según sus PV máximos, y con Maestría Elemental funciona como aplicador para Florecimiento o Vaporizar. No es curador dedicado pese a su temática de aguas.",
    "ficha": {
      "nombreCompleto": "Viajero — Hydro (Aether / Lumine)",
      "faccion": "Protagonista",
      "desc": "Resonancia obtenida en Fontaine (versión 4.0). Dispara gotas de rocío con su Espada de la Cresta Acuática y crea un torrente móvil con su Definitivo. Su daño escala con ATQ y recibe bonificaciones según sus PV máximos.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Aether_Icon.png"
    }
  },
  {
    "id": "viajero-pyro",
    "nombre": "Viajero (Pyro)",
    "rareza": "5",
    "elemento": "Pyro",
    "arma": "Espada",
    "version": "5.3",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bono de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRÍT / Daño CRÍT",
      "alt": "ATQ%"
    },
    "substats": [
      "Prob. CRÍT / Daño CRÍT",
      "Recarga de Energía",
      "ATQ%"
    ],
    "setPrincipal": "Pergamino del Héroe de la Ciudad de las Cenizas",
    "sets": [
      {
        "es": "Pergamino del Héroe de la Ciudad de las Cenizas",
        "en": "Scroll of the Hero of Cinder City",
        "nota": "4pc: al provocar reacciones con Alma Nocturna bufa el daño elemental de todo el equipo",
        "best": true
      },
      {
        "es": "Códice de Obsidiana",
        "en": "Obsidian Codex",
        "nota": "4pc: build ofensivo en campo con bono de daño y Prob. CRÍT",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Reflejo de las Tinieblas",
        "en": "Mistsplitter Reforged",
        "nota": "Mayor daño personal con CRÍT y bono elemental",
        "best": true
      },
      {
        "es": "Colmillo Lupino",
        "en": "Wolf-Fang",
        "nota": "Potencia habilidad y Definitivo, sus fuentes de daño",
        "best": false
      },
      {
        "es": "Espina de Hierro",
        "en": "Iron Sting",
        "nota": "F2P forjable; también sirve Deseo Ponzoñoso si lo tienes",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Alma Nocturna Natlan",
        "agentes": [
          "Viajero (Pyro)",
          "Mavuika",
          "Xilonen",
          "Citlali"
        ],
        "best": true
      },
      {
        "nombre": "Sobrecarga Chevreuse",
        "agentes": [
          "Viajero (Pyro)",
          "Chevreuse",
          "Fischl",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Híbrido DPS/soporte Pyro con mecánica de Alma Nocturna: su habilidad es su principal fuente de daño y con el Pergamino 4pc actúa como bufador barato en equipos de Natlan. Prioriza CRÍT y algo de Recarga de Energía.",
    "ficha": {
      "nombreCompleto": "Viajero — Pyro (Aether / Lumine)",
      "faccion": "Protagonista",
      "desc": "Resonancia obtenida en Natlan durante el Capítulo V, Acto V (versión 5.3): las líneas ley corruptas retrasaron su desbloqueo respecto a la llegada a la región. Usa la Bendición de Alma Nocturna con ataques de llamas en habilidad y Definitivo. Última variante elemental del Viajero hasta la 6.7, ya que Nod-Krai no otorgó elemento nuevo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Aether_Icon.png"
    }
  },
  {
    "id": "amber",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Bruja Carmesí en Llamas",
    "sets": [
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Máxima Bonificación de Daño Pyro y refuerzo de reacciones para su DPS de disparos cargados.",
        "best": true
      },
      {
        "es": "Final del Gladiador",
        "en": "Gladiator's Finale",
        "nota": "2pc (+18% ATQ) combinado con 2pc Bruja Carmesí como opción flexible.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Arco de Amos",
        "en": "Amos' Bow",
        "nota": "El mejor arco para su estilo de disparos cargados a distancia.",
        "best": true
      },
      {
        "es": "Arpa Celestial",
        "en": "Skyward Harp",
        "nota": "Alta Prob. CRIT y daño adicional en área; excelente estadística base.",
        "best": false
      },
      {
        "es": "Prototipo Semilunar",
        "en": "Prototype Crescent",
        "nota": "Opción F2P forjable que aumenta ATQ tras acertar disparos cargados en el punto débil.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "DPS Pyro / Vaporizar",
        "agentes": [
          "Amber",
          "Xingqiu",
          "Bennett",
          "Kaeya"
        ],
        "best": true
      },
      {
        "nombre": "Mono Pyro",
        "agentes": [
          "Amber",
          "Bennett",
          "Xiangling",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Es una DPS de disparos cargados: apunta al punto débil para maximizar daño y usa su señuelo para reagrupar enemigos. Necesita fuerte apoyo de buffs.",
    "ficha": {
      "nombreCompleto": "Amber, la Guardián Voladora",
      "faccion": "Mondstadt",
      "desc": "Explonauta de los Caballeros de Favonio, siempre optimista y dedicada. En combate ofrece disparos Pyro cargados y un señuelo que atrae la atención enemiga.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Amber_Wish.png/revision/latest?cb=20201119223905"
    },
    "nombre": "Amber",
    "rareza": "4",
    "elemento": "Pyro",
    "arma": "Arco",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "barbara",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Hydro"
    },
    "tiara": {
      "principal": "Bonificación de Curación",
      "alt": "PV%"
    },
    "substats": [
      "PV%",
      "Recarga de Energía",
      "Maestría Elemental"
    ],
    "setPrincipal": "Almeja Teñida de Mar",
    "sets": [
      {
        "es": "Almeja Teñida de Mar",
        "en": "Ocean-Hued Clam",
        "nota": "Convierte su curación en daño físico en área; ideal para una sanadora que cura mucho.",
        "best": true
      },
      {
        "es": "Doncella Amada",
        "en": "Maiden Beloved",
        "nota": "Aumenta la efectividad de curación del equipo; alternativa pura de sanación.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Prototipo Ámbar",
        "en": "Prototype Amber",
        "nota": "PV%, regenera energía y cura al equipo al usar la Habilidad Elemental; ideal F2P para sanadora.",
        "best": true
      },
      {
        "es": "Emocionantes Relatos de Cazadores de Dragones",
        "en": "Thrilling Tales of Dragon Slayers",
        "nota": "Buffea +48% ATQ al siguiente personaje al cambiar; úsalo como apoyo.",
        "best": false
      },
      {
        "es": "Fragmentos de Sacrificio",
        "en": "Sacrificial Fragments",
        "nota": "Reinicia el enfriamiento de su Habilidad para aplicar más Hydro fuera de campo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Sanadora / Aplicadora Hydro",
        "agentes": [
          "Barbara",
          "Keqing",
          "Fischl",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Congelación / Hiperbloom",
        "agentes": [
          "Barbara",
          "Kaeya",
          "Fischl",
          "Jean"
        ],
        "best": false
      }
    ],
    "consejo": "Sanadora principal y aplicadora de Hydro: mantén su Habilidad activa para curar por hit y aplicar Mojado constante. Prioriza PV% y Recarga.",
    "ficha": {
      "nombreCompleto": "Barbara, el Ídolo Brillante",
      "faccion": "Mondstadt",
      "desc": "Diácono de la Iglesia de Favonio e ídolo de Mondstadt. Ofrece la curación por golpe más generosa del juego y aplicación constante de Hydro.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Barbara_Wish.png/revision/latest?cb=20231214214322"
    },
    "nombre": "Barbara",
    "rareza": "4",
    "elemento": "Hydro",
    "arma": "Catalizador",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "beidou",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía",
      "ATQ%"
    ],
    "setPrincipal": "Emblema del Destino Truncado",
    "sets": [
      {
        "es": "Emblema del Destino Truncado",
        "en": "Emblem of Severed Fate",
        "nota": "Aumenta el daño del Estallido según la Recarga de Energía; perfecto para su rol fuera de campo.",
        "best": true
      },
      {
        "es": "Furia Atronadora",
        "en": "Thundering Fury",
        "nota": "2pc (+15% Daño Electro) combinado con 2pc Emblema si te falta Recarga.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lápida del Lobo",
        "en": "Wolf's Gravestone",
        "nota": "Enorme ATQ base y buff de equipo; techo de daño para su Estallido.",
        "best": true
      },
      {
        "es": "Mandoble de Sacrificio",
        "en": "Sacrificial Greatsword",
        "nota": "Reinicia su Habilidad (contraataque) para más partículas y aplicación Electro.",
        "best": false
      },
      {
        "es": "Espina de Serpiente",
        "en": "Serpent Spine",
        "nota": "Opción 4★ (Pase de Batalla) con gran multiplicador de daño para fuera de campo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Taser / Electro-charged",
        "agentes": [
          "Beidou",
          "Fischl",
          "Xingqiu",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Agravamiento / Hiperbloom",
        "agentes": [
          "Beidou",
          "Fischl",
          "Bennett",
          "Xiangling"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS fuera de campo: lanza su Estallido y cambia; combina con un aplicador Hydro para reacción Electro-cargado continua. Necesita mucha Recarga.",
    "ficha": {
      "nombreCompleto": "Beidou, la Capitana de las Mareas Carmesí",
      "faccion": "Liyue",
      "desc": "Líder de la Flota Alcotán, temeraria y carismática. En combate destaca con un contraataque que reduce daño y un Estallido Electro que golpea con rayos en cadena.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Beidou_Wish.png/revision/latest?cb=20231214214414"
    },
    "nombre": "Beidou",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Mandoble",
    "faccion": "Liyue",
    "version": "1.0"
  },
  {
    "id": "bennett",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "Bonificación de Curación",
      "alt": "Bonificación de Daño Pyro"
    },
    "tiara": {
      "principal": "Bonificación de Curación",
      "alt": "PV%"
    },
    "substats": [
      "Recarga de Energía",
      "PV%",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Ritual Antiguo de la Nobleza",
    "sets": [
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "El 4pc otorga +20% ATQ a todo el equipo tras su Estallido; buff clave de su rol de apoyo.",
        "best": true
      },
      {
        "es": "Instructor",
        "en": "Instructor",
        "nota": "4pc para +120 Maestría al equipo tras reacción, útil en equipos de reacción.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "Genera partículas al crítico para tener su Estallido siempre listo; mejor arma de apoyo.",
        "best": true
      },
      {
        "es": "Aquila Favonia",
        "en": "Aquila Favonia",
        "nota": "Gran ATQ base y curación pasiva si quieres que también aporte algo de daño.",
        "best": false
      },
      {
        "es": "Espada de Sacrificio",
        "en": "Sacrificial Sword",
        "nota": "Alternativa F2P de Recarga que reinicia su Habilidad para más energía.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Núcleo de apoyo universal",
        "agentes": [
          "Bennett",
          "Diluc",
          "Xingqiu",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Vaporizar nacional",
        "agentes": [
          "Bennett",
          "Xiangling",
          "Xingqiu",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "El mejor apoyo del juego: cura y da un enorme buff de ATQ dentro de su campo. Prioriza Recarga para tener el Estallido disponible cada rotación y busca subir su nivel de talento del Estallido.",
    "ficha": {
      "nombreCompleto": "Bennett, la Mala Suerte Adventurera",
      "faccion": "Mondstadt",
      "desc": "Aventurero de buen corazón perseguido por la mala fortuna. Es un apoyo Pyro insustituible: su campo cura al equipo y le concede un potente aumento de ATQ.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/8/88/Bennett_Wish.png/revision/latest?cb=20231214214450"
    },
    "nombre": "Bennett",
    "rareza": "4",
    "elemento": "Pyro",
    "arma": "Espada",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "chongyun",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Emblema del Destino Truncado",
    "sets": [
      {
        "es": "Emblema del Destino Truncado",
        "en": "Emblem of Severed Fate",
        "nota": "Potencia su Estallido con la Recarga; ideal para un sub-DPS Cryo por explosión.",
        "best": true
      },
      {
        "es": "Nómada del Invierno",
        "en": "Blizzard Strayer",
        "nota": "En equipos de Congelación da Prob. CRIT gratuita contra enemigos congelados.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lápida del Lobo",
        "en": "Wolf's Gravestone",
        "nota": "Máximo ATQ base y buff de equipo para su Estallido y su infusión Cryo.",
        "best": true
      },
      {
        "es": "Espina de Serpiente",
        "en": "Serpent Spine",
        "nota": "4★ (Pase de Batalla) con gran incremento de daño para su ventana de DPS.",
        "best": false
      },
      {
        "es": "Argenplata Sepultada en Nieve",
        "en": "Snow-Tombed Starsilver",
        "nota": "Opción F2P forjable con daño extra contra enemigos afectados por Cryo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Facilitador Cryo / Congelación",
        "agentes": [
          "Chongyun",
          "Kaeya",
          "Barbara",
          "Jean"
        ],
        "best": true
      },
      {
        "nombre": "Fusión inversa (Melt)",
        "agentes": [
          "Chongyun",
          "Bennett",
          "Xiangling",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Su Habilidad crea un campo que convierte los ataques cuerpo a cuerpo en Cryo, útil para facilitar reacciones. Puede jugarse como sub-DPS por Estallido o como enabler de infusión.",
    "ficha": {
      "nombreCompleto": "Chongyun, el Frío que Espanta Espíritus",
      "faccion": "Liyue",
      "desc": "Joven exorcista de constitución excepcionalmente yang que usa el Cryo para calmar su energía. Su campo infunde Cryo a los ataques cuerpo a cuerpo del equipo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/4/48/Chongyun_Wish.png/revision/latest?cb=20231214214618"
    },
    "nombre": "Chongyun",
    "rareza": "4",
    "elemento": "Cryo",
    "arma": "Mandoble",
    "faccion": "Liyue",
    "version": "1.0"
  },
  {
    "id": "diluc",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Bruja Carmesí en Llamas",
    "sets": [
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Set BiS: +Bonificación Pyro y refuerzo enorme a Vaporizar/Fundir por sus 4pc.",
        "best": true
      },
      {
        "es": "Reminiscencia de la Purificación",
        "en": "Shimenawa's Reminiscence",
        "nota": "2pc (+18% ATQ) con 2pc Bruja Carmesí, o 4pc para picos de daño en cargados.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Espadón Cornirrojo",
        "en": "Redhorn Stonethresher",
        "nota": "Daño CRIT altísimo y escalado de ATQ; el mejor mandoble para Diluc.",
        "best": true
      },
      {
        "es": "Lápida del Lobo",
        "en": "Wolf's Gravestone",
        "nota": "ATQ base masiva y buff al equipo; alternativa top y muy consistente.",
        "best": false
      },
      {
        "es": "Prototipo Arcaico",
        "en": "Prototype Archaic",
        "nota": "Mandoble F2P forjable con daño en área extra; sólida opción de inicio.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporizar (Vape)",
        "agentes": [
          "Diluc",
          "Xingqiu",
          "Bennett",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Mono Pyro",
        "agentes": [
          "Diluc",
          "Bennett",
          "Xiangling",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal cuerpo a cuerpo: encadena sus tres golpes de Habilidad y sincroniza con un aplicador Hydro (Xingqiu) para Vaporizar. Bennett y Kazuha maximizan su daño.",
    "ficha": {
      "nombreCompleto": "Diluc, el Aristócrata Sombrío",
      "faccion": "Mondstadt",
      "desc": "Dueño de la Hacienda Vinícola Dawn y justiciero nocturno de Mondstadt. DPS Pyro cuerpo a cuerpo clásico, con combos de mandoble y estallido de fuego devastadores.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Diluc_Wish.png/revision/latest?cb=20231214214809"
    },
    "nombre": "Diluc",
    "rareza": "5",
    "elemento": "Pyro",
    "arma": "Mandoble",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "fischl",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Compañía Dorada",
    "sets": [
      {
        "es": "Compañía Dorada",
        "en": "Golden Troupe",
        "nota": "Aumenta muchísimo el daño de Habilidad Elemental fuera de campo; BiS para Oz.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Para builds de Agravamiento basadas en Maestría Elemental.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Arpa Celestial",
        "en": "Skyward Harp",
        "nota": "Prob. CRIT y ATQ altísimas; el mejor arco para su daño fuera de campo.",
        "best": true
      },
      {
        "es": "Estrella Polar",
        "en": "Polar Star",
        "nota": "Máximo daño con buffs de Habilidad y Estallido; arco 5★ especializado.",
        "best": false
      },
      {
        "es": "El Descordado",
        "en": "The Stringless",
        "nota": "Excelente arco 4★: +Bonificación de daño de Habilidad y Estallido; gran F2P.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Agravamiento (Quickswap)",
        "agentes": [
          "Fischl",
          "Keqing",
          "Kazuha",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Taser / Electro-charged",
        "agentes": [
          "Fischl",
          "Beidou",
          "Barbara",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS fuera de campo con Oz: invoca al cuervo y cambia a tu DPS principal. Aporta Electro constante para reacciones de Agravamiento o Electro-cargado.",
    "ficha": {
      "nombreCompleto": "Fischl, Prinzessin der Verurteilung",
      "faccion": "Mondstadt",
      "desc": "Investigadora del Gremio de Aventureros con una peculiar personalidad de princesa oscura. Invoca a su cuervo Oz, que hace daño Electro continuo mientras controlas a otro personaje.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Fischl_Wish.png/revision/latest?cb=20231214215020"
    },
    "nombre": "Fischl",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Arco",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "jean",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Anemo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Bonificación de Curación",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Sombra Verde Esmeralda",
    "sets": [
      {
        "es": "Sombra Verde Esmeralda",
        "en": "Viridescent Venerer",
        "nota": "Reduce la RES elemental al provocar Remolino; mejor set como apoyo/control Anemo.",
        "best": true
      },
      {
        "es": "Almeja Teñida de Mar",
        "en": "Ocean-Hued Clam",
        "nota": "Convierte su fuerte curación en daño extra si la usas como sanadora principal.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Aquila Favonia",
        "en": "Aquila Favonia",
        "nota": "ATQ base enorme, curación pasiva y daño; la mejor espada para Jean.",
        "best": true
      },
      {
        "es": "Juramento por la Libertad",
        "en": "Freedom-Sworn",
        "nota": "Buff de daño al equipo, Maestría y Recarga; excelente como apoyo.",
        "best": false
      },
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "Opción F2P que genera partículas para mantener energía del equipo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Apoyo / Sanadora Anemo (VV)",
        "agentes": [
          "Jean",
          "Diluc",
          "Xingqiu",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Control y curación",
        "agentes": [
          "Jean",
          "Keqing",
          "Fischl",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Versátil: cura al equipo con su Estallido, agrupa enemigos con su Habilidad y reduce resistencias con Sombraverde. Ajusta entre curación y daño según lo que falte al equipo.",
    "ficha": {
      "nombreCompleto": "Jean, Dandelion Knight",
      "faccion": "Mondstadt",
      "desc": "Maestra interina de los Caballeros de Favonio, responsable y dedicada. Combina control Anemo, agrupación de enemigos y una potente curación en área.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/e/e7/Jean_Wish.png/revision/latest?cb=20231215201156"
    },
    "nombre": "Jean",
    "rareza": "5",
    "elemento": "Anemo",
    "arma": "Espada",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "kaeya",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Nómada del Invierno",
    "sets": [
      {
        "es": "Nómada del Invierno",
        "en": "Blizzard Strayer",
        "nota": "En equipos de Congelación regala Prob. CRIT contra enemigos congelados; muy eficiente.",
        "best": true
      },
      {
        "es": "Emblema del Destino Truncado",
        "en": "Emblem of Severed Fate",
        "nota": "Alternativa si lo usas por Estallido y Recarga fuera de campo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Aquila Favonia",
        "en": "Aquila Favonia",
        "nota": "ATQ base altísima; potencia su daño tanto en Congelación como en Fundir.",
        "best": true
      },
      {
        "es": "Espada de Sacrificio",
        "en": "Sacrificial Sword",
        "nota": "Reinicia su Habilidad para más aplicación de Cryo y partículas fuera de campo.",
        "best": false
      },
      {
        "es": "Heraldo del Alba",
        "en": "Harbinger of Dawn",
        "nota": "Espada 3★ con enorme Prob. CRIT y Daño CRIT si mantienes su PV alto; gran F2P.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación",
        "agentes": [
          "Kaeya",
          "Barbara",
          "Jean",
          "Chongyun"
        ],
        "best": true
      },
      {
        "nombre": "Fusión inversa (Reverse Melt)",
        "agentes": [
          "Kaeya",
          "Bennett",
          "Xiangling",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Facilitador y sub-DPS Cryo: aplica Cryo constante para congelar o fundir. En Congelación con Nómada del Invierno alcanza crítico casi garantizado sin invertir en Prob. CRIT.",
    "ficha": {
      "nombreCompleto": "Kaeya, el Diplomático Glacial",
      "faccion": "Mondstadt",
      "desc": "Caballero de Caballería de Favonio y hermano adoptivo de Diluc, astuto y encantador. Aplica Cryo de forma fiable, ideal para reacciones de Congelación y Fundir.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Kaeya_Wish.png/revision/latest?cb=20231214215507"
    },
    "nombre": "Kaeya",
    "rareza": "4",
    "elemento": "Cryo",
    "arma": "Espada",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "keqing",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Furia Atronadora",
    "sets": [
      {
        "es": "Furia Atronadora",
        "en": "Thundering Fury",
        "nota": "Reduce el enfriamiento de su Habilidad y potencia el daño Electro; ideal para spamear teletransporte.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Para builds de Agravamiento con Maestría Elemental junto a un aplicador Electro fuera de campo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Luz de Incisión Foliar",
        "en": "Light of Foliar Incision",
        "nota": "Prob. CRIT altísima y daño extra escalado con Maestría; arma casi hecha a medida para ella.",
        "best": true
      },
      {
        "es": "Filo Reforjado del Cortaneblina",
        "en": "Mistsplitter Reforged",
        "nota": "Máximo Daño CRIT y Bonificación de daño elemental apilable; techo de daño hypercarry.",
        "best": false
      },
      {
        "es": "La Espada Negra",
        "en": "The Black Sword",
        "nota": "Espada 4★ (Pase de Batalla) con Prob. CRIT y bonus a ataques normales/cargados; gran F2P.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Agravamiento",
        "agentes": [
          "Keqing",
          "Fischl",
          "Kazuha",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Hypercarry Electro",
        "agentes": [
          "Keqing",
          "Fischl",
          "Sucrose",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal de Electro: teletranspórtate con su Habilidad y detona con la segunda pulsación, luego encadena ataques cargados. Con Fischl activa Agravamiento para un daño consistente.",
    "ficha": {
      "nombreCompleto": "Keqing, la Portento del Cuño Celestial",
      "faccion": "Liyue",
      "desc": "Alcaldesa de los Qixing, trabajadora incansable y escéptica de los dioses. DPS Electro ágil que se teletransporta por el campo y castiga con ráfagas de espada eléctricas.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Keqing_Wish.png/revision/latest?cb=20231214215649"
    },
    "nombre": "Keqing",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Espada",
    "faccion": "Liyue",
    "version": "1.0"
  },
  {
    "id": "klee",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Bruja Carmesí en Llamas",
    "sets": [
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Set BiS: Bonificación de Daño Pyro y refuerzo a Vaporizar/Sobrecarga.",
        "best": true
      },
      {
        "es": "Reminiscencia de la Purificación",
        "en": "Shimenawa's Reminiscence",
        "nota": "2pc (+18% ATQ) con 2pc Bruja Carmesí como combinación flexible de ATQ.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Plegaria Perdida a los Vientos Sagrados",
        "en": "Lost Prayer to the Sacred Winds",
        "nota": "Prob. CRIT y Bonificación de daño elemental apilable; el mejor catalizador para su DPS.",
        "best": true
      },
      {
        "es": "Pergamino Celestial",
        "en": "Skyward Atlas",
        "nota": "ATQ base altísima y +Bonificación de daño elemental; opción 5★ muy sólida.",
        "best": false
      },
      {
        "es": "El Vate",
        "en": "The Widsith",
        "nota": "Catalizador 4★ (Pase de Batalla) con buffs aleatorios muy potentes; excelente F2P.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporizar (Vape)",
        "agentes": [
          "Klee",
          "Xingqiu",
          "Bennett",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Mono Pyro",
        "agentes": [
          "Klee",
          "Bennett",
          "Xiangling",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "DPS Pyro de rango medio: alterna ataques normales y cargados aprovechando su pasiva de daño explosivo. Empareja con Xingqiu para Vaporizar y con Bennett para el buff de ATQ.",
    "ficha": {
      "nombreCompleto": "Klee, la Chispa Ardiente del Caballero",
      "faccion": "Mondstadt",
      "desc": "Joven caballero de Favonio experta en explosivos, traviesa e imparable. DPS Pyro que bombardea a distancia con bombas saltarinas y su Estallido de fuegos artificiales.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Klee_Wish.png/revision/latest?cb=20231214215745"
    },
    "nombre": "Klee",
    "rareza": "5",
    "elemento": "Pyro",
    "arma": "Catalizador",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "lisa",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "Maestría Elemental"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Maestría Elemental",
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía",
      "ATQ%"
    ],
    "setPrincipal": "Sueños Áureos",
    "sets": [
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Máxima Maestría y ATQ para reacciones de Agravamiento; mejor set en su rol moderno.",
        "best": true
      },
      {
        "es": "Emblema del Destino Truncado",
        "en": "Emblem of Severed Fate",
        "nota": "Alternativa si la juegas por Estallido y aplicación Electro fuera de campo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Verdad de Kagura",
        "en": "Kagura's Verity",
        "nota": "El mejor catalizador 5★: potencia enormemente su Habilidad Elemental.",
        "best": true
      },
      {
        "es": "Fragmentos de Sacrificio",
        "en": "Sacrificial Fragments",
        "nota": "Reinicia su Habilidad para más partículas y Electro fuera de campo; Maestría útil.",
        "best": false
      },
      {
        "es": "Mappa Mare",
        "en": "Mappa Mare",
        "nota": "Catalizador F2P forjable con Maestría y buff de daño elemental tras reacción.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Agravamiento",
        "agentes": [
          "Lisa",
          "Fischl",
          "Kazuha",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Hiperbloom / apoyo Electro",
        "agentes": [
          "Lisa",
          "Barbara",
          "Fischl",
          "Jean"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS/apoyo Electro: mantén pulsada su Habilidad para el golpe cargado que reduce la DEF enemiga y aplica Electro. Con Maestría y Fischl brilla en Agravamiento.",
    "ficha": {
      "nombreCompleto": "Lisa, la Bruja de la Rosa Púrpura",
      "faccion": "Mondstadt",
      "desc": "Bibliotecaria de los Caballeros de Favonio y una de las mejores hechiceras de Mondstadt, tan talentosa como perezosa. Aplica Electro y reduce la defensa enemiga con sus descargas.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Lisa_Wish.png/revision/latest?cb=20231214215912"
    },
    "nombre": "Lisa",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Catalizador",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "mona",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Hydro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Emblema del Destino",
    "sets": [
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "Convierte el exceso de Recarga de Energía en daño de estallido; ideal para Mona sub-DPS de nuke.",
        "best": true
      },
      {
        "es": "Corazón de las Profundidades",
        "en": "Heart of Depth",
        "nota": "+15% Bonif. Daño Hydro y +30% al daño de ataque normal/cargado tras usar la habilidad.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Atlas del Firmamento",
        "en": "Skyward Atlas",
        "nota": "ATQ% alto y bonif. de daño elemental; máximo daño de estallido.",
        "best": true
      },
      {
        "es": "Verdad de Kagura",
        "en": "Kagura's Verity",
        "nota": "Gran multiplicador y subestadística de Daño CRIT.",
        "best": false
      },
      {
        "es": "El Bardo",
        "en": "The Widsith",
        "nota": "4★ con enorme buff aleatorio; la mejor opción F2P para nuke.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación",
        "agentes": [
          "Mona",
          "Ganyu",
          "Kaeya",
          "Diona"
        ],
        "best": true
      },
      {
        "nombre": "Vaporizar",
        "agentes": [
          "Mona",
          "Diluc",
          "Bennett",
          "Sucrose"
        ],
        "best": false
      }
    ],
    "consejo": "Su estallido aplica el sello Ómen, que amplifica todo el daño recibido por los enemigos; actívalo justo antes de la ventana de daño del equipo.",
    "ficha": {
      "nombreCompleto": "Mona Megistus",
      "faccion": "Mondstadt",
      "desc": "Astróloga errante de gran talento y bolsillos vacíos. Domina la hidromancia y lee el destino en las estrellas, aunque odia que la llamen adivina.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Mona_Card.png/revision/latest?cb=20220725210059"
    },
    "nombre": "Mona",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Catalizador",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "ningguang",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Geo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Petra Arcaica",
    "sets": [
      {
        "es": "Petra Arcaica",
        "en": "Archaic Petra",
        "nota": "Al recoger un cristal elemental Geo otorga +35% de bonif. de daño de ese elemento; potencia su daño personal y de equipo.",
        "best": true
      },
      {
        "es": "Final del Gladiador",
        "en": "Gladiator's Finale",
        "nota": "Combo 2+2 con Petra Arcaica (ATQ% + Bonif. Geo) como alternativa flexible.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Plegaria Perdida al Viento Sagrado",
        "en": "Lost Prayer to the Sacred Winds",
        "nota": "Prob. CRIT y bonif. de daño acumulable; máximo DPS.",
        "best": true
      },
      {
        "es": "Atlas del Firmamento",
        "en": "Skyward Atlas",
        "nota": "ATQ% y bonif. de daño constante.",
        "best": false
      },
      {
        "es": "Perla Solar",
        "en": "Solar Pearl",
        "nota": "4★ con Prob. CRIT y buffs por ataque normal/habilidad; gran opción F2P.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Mono Geo",
        "agentes": [
          "Ningguang",
          "Zhongli",
          "Albedo",
          "Gorou"
        ],
        "best": true
      },
      {
        "nombre": "Doble Geo + soporte",
        "agentes": [
          "Ningguang",
          "Zhongli",
          "Bennett",
          "Fischl"
        ],
        "best": false
      }
    ],
    "consejo": "Rompe su Muralla de Jade con el estallido para lanzar todas las Gemas Estelares de golpe; mantén la resonancia Geo para el bono de daño.",
    "ficha": {
      "nombreCompleto": "Ningguang",
      "faccion": "Liyue",
      "desc": "Tianquan de los Qixing de Liyue y la mujer más rica de la nación. Astuta y calculadora, convierte cada trato en oro y su torre flotante Jade Perdido es símbolo de su poder.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Ningguang_Card.png/revision/latest?cb=20220725205113"
    },
    "nombre": "Ningguang",
    "rareza": "4",
    "elemento": "Geo",
    "arma": "Catalizador",
    "faccion": "Liyue",
    "version": "1.0"
  },
  {
    "id": "noelle",
    "estado": "completo",
    "arena": {
      "principal": "DEF%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Geo",
      "alt": "DEF%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "DEF%",
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía"
    ],
    "setPrincipal": "Cáscara de Sueños Opulentos",
    "sets": [
      {
        "es": "Cáscara de Sueños Opulentos",
        "en": "Husk of Opulent Dreams",
        "nota": "Acumula DEF y bonif. de daño Geo con el tiempo; se sinergiza perfecto con su escalado por DEF.",
        "best": true
      },
      {
        "es": "Petra Arcaica",
        "en": "Archaic Petra",
        "nota": "4pc para más bonif. de daño Geo si aún no tienes Cáscara farmeada.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Trilladora de Cuerno Rojo",
        "en": "Redhorn Stonethresher",
        "nota": "Escala DEF y da Daño CRIT; el mejor mandoble para Noelle DPS.",
        "best": true
      },
      {
        "es": "Lápida del Lobo",
        "en": "Wolf's Gravestone",
        "nota": "ATQ base y % enormes; potente aun sin escalar DEF.",
        "best": false
      },
      {
        "es": "Cegablanca",
        "en": "Whiteblind",
        "nota": "4★ que sube DEF y ATQ al atacar; la mejor opción F2P.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Mono Geo (Furina)",
        "agentes": [
          "Noelle",
          "Furina",
          "Gorou",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Geo clásico",
        "agentes": [
          "Noelle",
          "Gorou",
          "Bennett",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Durante su estallido convierte parte de su DEF en ATQ e infunde Geo a sus ataques; abre con la habilidad para escudo y curación constantes.",
    "ficha": {
      "nombreCompleto": "Noelle",
      "faccion": "Mondstadt",
      "desc": "Sirvienta incansable de los Caballeros de Favonius que sueña con unirse a la orden. Amable y trabajadora, protege y cuida a todos a su alrededor con su enorme mandoble.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Noelle_Card.png/revision/latest?cb=20240808225359"
    },
    "nombre": "Noelle",
    "rareza": "4",
    "elemento": "Geo",
    "arma": "Mandoble",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "qiqi",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Bonificación de Curación",
      "alt": "Daño CRIT"
    },
    "substats": [
      "ATQ%",
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía"
    ],
    "setPrincipal": "Almeja de Tonos Marinos",
    "sets": [
      {
        "es": "Almeja de Tonos Marinos",
        "en": "Ocean-Hued Clam",
        "nota": "Convierte su fuerte curación en daño físico de área; aprovecha su rol de sanadora al máximo.",
        "best": true
      },
      {
        "es": "Nómada del Invierno",
        "en": "Blizzard Strayer",
        "nota": "Para builds de daño en equipos de Congelación (Prob. CRIT gratis contra enemigos congelados).",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Aquila Favonia",
        "en": "Aquila Favonia",
        "nota": "ATQ% alto que aumenta su curación y da regeneración al equipo.",
        "best": true
      },
      {
        "es": "Espada de Sacrificio",
        "en": "Sacrificial Sword",
        "nota": "Reinicia su habilidad para más partículas y curación off-field.",
        "best": false
      },
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "4★ que genera energía para todo el equipo; la mejor opción F2P de soporte.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación",
        "agentes": [
          "Qiqi",
          "Ayaka",
          "Mona",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Soporte curación",
        "agentes": [
          "Qiqi",
          "Xiangling",
          "Xingqiu",
          "Sucrose"
        ],
        "best": false
      }
    ],
    "consejo": "Su curación pasiva por marca (Talismán de la Fortuna) escala con ATQ; márca a los enemigos con su habilidad y deja la curación en automático.",
    "ficha": {
      "nombreCompleto": "Qiqi",
      "faccion": "Liyue",
      "desc": "Aprendiza zombi de la Farmacia Bubu con una memoria terrible que anota todo en su cuaderno. Falleció hace tiempo pero fue revivida por adepti, y ahora recolecta hierbas medicinales.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/0/03/Qiqi_Card.png/revision/latest?cb=20220725205124"
    },
    "nombre": "Qiqi",
    "rareza": "5",
    "elemento": "Cryo",
    "arma": "Espada",
    "faccion": "Liyue",
    "version": "1.0"
  },
  {
    "id": "razor",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Físico",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Llama Pálida",
    "sets": [
      {
        "es": "Llama Pálida",
        "en": "Pale Flame",
        "nota": "Acumula ATQ y otorga +25% de bonif. de daño físico al completar el efecto; el mejor set para Razor.",
        "best": true
      },
      {
        "es": "Caballería Manchada de Sangre",
        "en": "Bloodstained Chivalry",
        "nota": "+25% daño físico base; buena alternativa mientras farmeas Llama Pálida.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lápida del Lobo",
        "en": "Wolf's Gravestone",
        "nota": "ATQ enorme que dispara su daño físico y el del equipo.",
        "best": true
      },
      {
        "es": "Canción de los Pinos Rotos",
        "en": "Song of Broken Pines",
        "nota": "Aumenta velocidad de ataque y ATQ del equipo; ideal para físico.",
        "best": false
      },
      {
        "es": "Espina de Serpiente",
        "en": "Serpent Spine",
        "nota": "4★ con daño acumulable y Prob. CRIT; la mejor opción F2P/gacha estándar.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Físico / Superconducción",
        "agentes": [
          "Razor",
          "Fischl",
          "Rosaria",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Electro-carga",
        "agentes": [
          "Razor",
          "Beidou",
          "Xingqiu",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Superconducción reduce la RES física del enemigo; mantenla activa con Fischl/Rosaria y usa su estallido (El Lobo Interior) para más velocidad y energía.",
    "ficha": {
      "nombreCompleto": "Razor",
      "faccion": "Mondstadt",
      "desc": "Muchacho criado por lobos en el Bosque de los Lobos. De pocas palabras y gran corazón, considera a su manada su verdadera familia y lucha con instinto salvaje.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/1/1b/Razor_Card.png/revision/latest?cb=20220725205138"
    },
    "nombre": "Razor",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Mandoble",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "sucrose",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Daño Anemo"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "substats": [
      "Maestría Elemental",
      "Recarga de Energía",
      "ATQ%",
      "Prob. CRIT"
    ],
    "setPrincipal": "Cazador Esmeralda",
    "sets": [
      {
        "es": "Cazador Esmeralda",
        "en": "Viridescent Venerer",
        "nota": "Aumenta el daño por Torbellino y reduce la RES elemental del enemigo; imprescindible en Sucrose.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Comparte Maestría Elemental y da ATQ%; para builds de apoyo a reacciones.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Fragmentos de Sacrificio",
        "en": "Sacrificial Fragments",
        "nota": "Alta Maestría Elemental y reinicio de habilidad para más energía.",
        "best": true
      },
      {
        "es": "Verdad de Kagura",
        "en": "Kagura's Verity",
        "nota": "Si buscas que Sucrose aporte también daño de Torbellino.",
        "best": false
      },
      {
        "es": "Emocionantes Cuentos de Cazadragones",
        "en": "Thrilling Tales of Dragon Slayers",
        "nota": "3★ que otorga +48% ATQ al siguiente personaje; el mejor buffeador F2P.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Agrupar + buff EM",
        "agentes": [
          "Sucrose",
          "Hu Tao",
          "Xingqiu",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Hyperbloom / reacciones",
        "agentes": [
          "Sucrose",
          "Nahida",
          "Xingqiu",
          "Kuki Shinobu"
        ],
        "best": false
      }
    ],
    "consejo": "Su habilidad comparte el 20% de su Maestría Elemental (nivel 10) con el equipo y su estallido agrupa enemigos; prioriza Maestría por encima de todo.",
    "ficha": {
      "nombreCompleto": "Sucrose",
      "faccion": "Mondstadt",
      "desc": "Alquimista tímida y aplicada, asistente de Albedo. Obsesionada con la bioalquimia, experimenta sin descanso para hacer realidad un mundo más armonioso… a veces con resultados explosivos.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Sucrose_Card.png/revision/latest?cb=20220725205205"
    },
    "nombre": "Sucrose",
    "rareza": "4",
    "elemento": "Anemo",
    "arma": "Catalizador",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "venti",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Daño Anemo"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "substats": [
      "Recarga de Energía",
      "Maestría Elemental",
      "ATQ%",
      "Prob. CRIT"
    ],
    "setPrincipal": "Cazador Esmeralda",
    "sets": [
      {
        "es": "Cazador Esmeralda",
        "en": "Viridescent Venerer",
        "nota": "Su estallido genera Torbellinos constantes; reduce la RES elemental y amplifica al equipo.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Alternativa de Maestría Elemental si buscas maximizar el daño por Torbellino de Venti.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Elegía por el Fin",
        "en": "Elegy for the End",
        "nota": "Da Maestría Elemental, energía y buffea ATQ+EM de todo el equipo.",
        "best": true
      },
      {
        "es": "Arpa del Firmamento",
        "en": "Skyward Harp",
        "nota": "Prob. CRIT y daño físico extra si Venti hace daño directo.",
        "best": false
      },
      {
        "es": "El Descordado",
        "en": "The Stringless",
        "nota": "4★ con Maestría Elemental y +daño de habilidad/estallido; excelente F2P.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación",
        "agentes": [
          "Venti",
          "Ganyu",
          "Mona",
          "Diona"
        ],
        "best": true
      },
      {
        "nombre": "Agrupar + electro",
        "agentes": [
          "Venti",
          "Fischl",
          "Beidou",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Su estallido crea un tornado que succiona y agrupa enemigos; infúndelo con un elemento (Cryo/Hydro/Pyro/Electro) para Torbellinos que arrasan hordas.",
    "ficha": {
      "nombreCompleto": "Venti",
      "faccion": "Mondstadt",
      "desc": "El Arconte Anemo Barbatos disfrazado de bardo bohemio. Amante de la libertad, el vino y la música, vela por Mondstadt desde las sombras con su lira y el poder del viento.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Venti_Card.png/revision/latest?cb=20220725205218"
    },
    "nombre": "Venti",
    "rareza": "5",
    "elemento": "Anemo",
    "arma": "Arco",
    "faccion": "Mondstadt",
    "version": "1.0"
  },
  {
    "id": "xiangling",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Emblema del Destino",
    "sets": [
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "Le da la Recarga de Energía que tanto necesita y convierte el exceso en daño de estallido (Pyronado).",
        "best": true
      },
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Máximo daño Pyro y de Vaporizar/Sobrecarga si tienes energía cubierta por otras vías.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "La Captura",
        "en": "The Catch",
        "nota": "4★ gratis de pesca: Recarga de Energía + daño y CRIT de estallido; prácticamente BiS a R5.",
        "best": true
      },
      {
        "es": "Báculo de Homa",
        "en": "Staff of Homa",
        "nota": "PV y Daño CRIT que disparan el daño total; opción premium.",
        "best": false
      },
      {
        "es": "Perdición del Dragón",
        "en": "Dragon's Bane",
        "nota": "4★ con Maestría Elemental enorme y ATQ%; genial para Vaporizar.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "National (Nacional)",
        "agentes": [
          "Xiangling",
          "Xingqiu",
          "Bennett",
          "Sucrose"
        ],
        "best": true
      },
      {
        "nombre": "International",
        "agentes": [
          "Xiangling",
          "Tartaglia",
          "Bennett",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Su estallido Pyronado gira con ella dando daño Pyro sostenido; necesita alta Recarga de Energía (~200%+) y a Bennett para mantenerlo siempre activo.",
    "ficha": {
      "nombreCompleto": "Xiangling",
      "faccion": "Liyue",
      "desc": "Chef estrella del Restaurante Wanmin y aventurera intrépida en busca de nuevos ingredientes. Su oso panda Guoba escupe fuego y su pasión por la cocina no conoce límites.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Xiangling_Card.png/revision/latest?cb=20220725205223"
    },
    "nombre": "Xiangling",
    "rareza": "4",
    "elemento": "Pyro",
    "arma": "Lanza",
    "faccion": "Liyue",
    "version": "1.0"
  },
  {
    "id": "xingqiu",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Hydro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%"
    ],
    "setPrincipal": "Emblema del Destino",
    "sets": [
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "Recarga de Energía para su estallido de coste alto y más daño de las Espadas de Lluvia.",
        "best": true
      },
      {
        "es": "Corazón de las Profundidades",
        "en": "Heart of Depth",
        "nota": "+15% Bonif. Daño Hydro; alternativa de daño puro si ya tienes energía cubierta.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Espada de Sacrificio",
        "en": "Sacrificial Sword",
        "nota": "Reinicia su habilidad para doble aplicación de Hydro; la mejor arma y muy accesible.",
        "best": true
      },
      {
        "es": "Cortador de Jade Primordial",
        "en": "Primordial Jade Cutter",
        "nota": "PV%, Prob. CRIT y ATQ; máximo daño premium.",
        "best": false
      },
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "4★ que genera energía para todo el equipo; opción F2P de soporte.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "National (Nacional)",
        "agentes": [
          "Xingqiu",
          "Xiangling",
          "Bennett",
          "Sucrose"
        ],
        "best": true
      },
      {
        "nombre": "Vaporizar (Hu Tao)",
        "agentes": [
          "Xingqiu",
          "Hu Tao",
          "Zhongli",
          "Yelan"
        ],
        "best": false
      }
    ],
    "consejo": "Sus Espadas de Lluvia aplican Hydro off-field y reducen el daño recibido; encadena su habilidad y estallido para cobertura Hydro constante en Vaporizar/Congelación.",
    "ficha": {
      "nombreCompleto": "Xingqiu",
      "faccion": "Liyue",
      "desc": "Segundo hijo del Gremio Comercial Feiyun, culto y amante de las novelas de caballería. Bajo su fachada refinada esconde un espíritu justiciero y un manejo excepcional de la espada.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/2/2e/Xingqiu_Card.png/revision/latest?cb=20220725205235"
    },
    "nombre": "Xingqiu",
    "rareza": "4",
    "elemento": "Hydro",
    "arma": "Espada",
    "faccion": "Liyue",
    "version": "1.0"
  },
  {
    "id": "diona",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "Bonificación de Curación",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "PV%",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Almeja de Tonos Marinos",
    "sets": [
      {
        "es": "Almeja de Tonos Marinos",
        "en": "Ocean-Hued Clam",
        "nota": "Convierte su curación en daño de área; aprovecha su doble rol de sanadora y escudera.",
        "best": true
      },
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "Su estallido buffea +20% ATQ a todo el equipo; ideal como soporte puro.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Arco de Favonius",
        "en": "Favonius Warbow",
        "nota": "4★ que genera energía masiva para el equipo; la mejor opción de batería.",
        "best": true
      },
      {
        "es": "Elegía por el Fin",
        "en": "Elegy for the End",
        "nota": "Buffea ATQ y Maestría del equipo además de dar energía.",
        "best": false
      },
      {
        "es": "Arco de Sacrificio",
        "en": "Sacrificial Bow",
        "nota": "4★ que reinicia su habilidad para más escudo y curación off-field.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación",
        "agentes": [
          "Diona",
          "Ayaka",
          "Mona",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Soporte escudo/cura",
        "agentes": [
          "Diona",
          "Eula",
          "Raiden",
          "Rosaria"
        ],
        "best": false
      }
    ],
    "consejo": "Su habilidad da escudo (escala con PV) y su estallido cura en área e infunde Cryo; prioriza Recarga de Energía y PV% para escudos y curación fiables.",
    "ficha": {
      "nombreCompleto": "Diona",
      "faccion": "Mondstadt",
      "desc": "Bartender estrella de la taberna El Gato del Rabo pese a odiar el alcohol. Con sangre felina y un objetivo secreto de arruinar todas las bebidas, termina creando cócteles legendarios sin querer.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/1/14/Diona_Card.png/revision/latest?cb=20201107193459"
    },
    "nombre": "Diona",
    "rareza": "4",
    "elemento": "Cryo",
    "arma": "Arco",
    "faccion": "Mondstadt",
    "version": "1.1"
  },
  {
    "id": "tartaglia",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Hydro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Sueño de la Ninfa",
    "sets": [
      {
        "es": "Sueño de la Ninfa",
        "en": "Nymph's Dream",
        "nota": "Acumula ATQ y Bonif. Daño Hydro con sus ataques; actualmente el mejor set para Childe.",
        "best": true
      },
      {
        "es": "Corazón de las Profundidades",
        "en": "Heart of Depth",
        "nota": "+15% Bonif. Daño Hydro y +30% al daño tras la habilidad; alternativa muy sólida.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Estrella Polar",
        "en": "Polar Star",
        "nota": "Prob. CRIT y bonif. de daño de habilidad/estallido acumulable; su BiS.",
        "best": true
      },
      {
        "es": "Aqua Simulacra",
        "en": "Aqua Simulacra",
        "nota": "Daño CRIT altísimo y +20% daño cerca de enemigos; enorme para su rango melé.",
        "best": false
      },
      {
        "es": "Herrumbre",
        "en": "Rust",
        "nota": "4★ con ATQ% y +40% daño de ataque normal; excelente F2P para su estado melé.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "International",
        "agentes": [
          "Tartaglia",
          "Xiangling",
          "Bennett",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Vaporizar / Taser",
        "agentes": [
          "Tartaglia",
          "Fischl",
          "Beidou",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Su habilidad (Estado Melé) marca a los enemigos con Riptide; entra a rango corto, aplica Hydro constante y detona con el estallido antes de que expire el temporizador.",
    "ficha": {
      "nombreCompleto": "Tartaglia (Childe)",
      "faccion": "Snezhnaya",
      "desc": "Undécimo de los Once Heraldos Fatui, conocido como Childe. Guerrero nato y adicto a la batalla, alterna entre arco a distancia y dagas de agua en combate cuerpo a cuerpo. Fuera del campo es un hermano mayor devoto.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/3/3c/Tartaglia_Card.png/revision/latest?cb=20231114211512"
    },
    "nombre": "Tartaglia",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Arco",
    "faccion": "Snezhnaya",
    "version": "1.1"
  },
  {
    "id": "xinyan",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Físico",
      "alt": "Bonificación de Daño Pyro"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Llama Pálida",
    "sets": [
      {
        "es": "Llama Pálida",
        "en": "Pale Flame",
        "nota": "Acumula ATQ y +25% de bonif. de daño físico; el mejor set para Xinyan DPS físico.",
        "best": true
      },
      {
        "es": "Caballería Manchada de Sangre",
        "en": "Bloodstained Chivalry",
        "nota": "+25% daño físico base; buena alternativa mientras farmeas Llama Pálida.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lápida del Lobo",
        "en": "Wolf's Gravestone",
        "nota": "ATQ enorme para su daño físico y de equipo.",
        "best": true
      },
      {
        "es": "Espina de Serpiente",
        "en": "Serpent Spine",
        "nota": "Daño acumulable y Prob. CRIT; gran opción de gacha estándar.",
        "best": false
      },
      {
        "es": "Cegablanca",
        "en": "Whiteblind",
        "nota": "4★ con ATQ/DEF crecientes; opción F2P accesible.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Físico / Superconducción",
        "agentes": [
          "Xinyan",
          "Fischl",
          "Rosaria",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Escudo + soporte Pyro",
        "agentes": [
          "Xinyan",
          "Xiangling",
          "Xingqiu",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Su habilidad genera un escudo que escala con DEF y su nivel; mantén Superconducción activa para bajar la RES física y maximizar sus golpes de mandoble.",
    "ficha": {
      "nombreCompleto": "Xinyan",
      "faccion": "Liyue",
      "desc": "La única rockera de Liyue, que desafía las tradiciones con su música rebelde. De carácter fuerte y corazón noble, toca para quienes se sienten fuera de lugar y no teme al qué dirán.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a7/Xinyan_Card.png/revision/latest?cb=20221121172209"
    },
    "nombre": "Xinyan",
    "rareza": "4",
    "elemento": "Pyro",
    "arma": "Mandoble",
    "faccion": "Liyue",
    "version": "1.1"
  },
  {
    "id": "zhongli",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Geo",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "PV%",
      "alt": "Daño CRIT"
    },
    "substats": [
      "PV%",
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Tenacidad del Millelith",
    "sets": [
      {
        "es": "Tenacidad del Millelith",
        "en": "Tenacity of the Millelith",
        "nota": "Da PV% y, al golpear con la habilidad, +20% ATQ y +30% escudo a todo el equipo; ideal para su rol de escudero.",
        "best": true
      },
      {
        "es": "Recuerdos del Bosque Profundo",
        "en": "Deepwood Memories",
        "nota": "Reduce la RES Dendro del enemigo; el mejor set en equipos Dendro donde Zhongli porta el efecto.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Báculo de Homa",
        "en": "Staff of Homa",
        "nota": "PV% y daño escalado con PV; potencia escudo y daño si lo usas también de sub-DPS.",
        "best": true
      },
      {
        "es": "Devastador de Vórtices",
        "en": "Vortex Vanquisher",
        "nota": "ATQ y ATQ acumulable con escudo activo; sólido para escudo y daño Geo.",
        "best": false
      },
      {
        "es": "Borla Negra",
        "en": "Black Tassel",
        "nota": "3★ con +48% PV; el escudo más barato y fuerte para Zhongli F2P.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Escudero universal",
        "agentes": [
          "Zhongli",
          "Hu Tao",
          "Xingqiu",
          "Yelan"
        ],
        "best": true
      },
      {
        "nombre": "Soporte Geo / Dendro",
        "agentes": [
          "Zhongli",
          "Nahida",
          "Xingqiu",
          "Kuki Shinobu"
        ],
        "best": false
      }
    ],
    "consejo": "Su escudo (escala con PV máxima) resiste casi todo y reduce la RES de los enemigos cercanos; construye PV% en todas las piezas para un muro prácticamente irrompible.",
    "ficha": {
      "nombreCompleto": "Zhongli",
      "faccion": "Liyue",
      "desc": "Consultor del Salón Funerario Wangsheng y, en secreto, el Arconte Geo Morax (Rex Lapis). Sabio milenario de porte sereno que forjó los contratos y las montañas de Liyue, aunque siempre olvida llevar dinero encima.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Zhongli_Card.png/revision/latest?cb=20201217052506"
    },
    "nombre": "Zhongli",
    "rareza": "5",
    "elemento": "Geo",
    "arma": "Lanza",
    "faccion": "Liyue",
    "version": "1.1"
  },
  {
    "id": "albedo",
    "estado": "completo",
    "arena": {
      "principal": "DEF%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Geo",
      "alt": "DEF%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "DEF%",
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía"
    ],
    "setPrincipal": "Cáscara del Sueño Opulento",
    "sets": [
      {
        "es": "Cáscara del Sueño Opulento",
        "en": "Husk of Opulent Dreams",
        "nota": "Escala con DEF y da Bonificación de Daño Geo; su mejor set 4pc.",
        "best": true
      },
      {
        "es": "Compañía Dorada",
        "en": "Golden Troupe",
        "nota": "Potencia la Habilidad Elemental fuera de campo, ideal para su Flor Solar.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Huso de Cinabrio",
        "en": "Cinnabar Spindle",
        "nota": "Mejor en su clase: convierte DEF en daño de Habilidad. Arma de evento.",
        "best": true
      },
      {
        "es": "Cortador de Jade Primordial",
        "en": "Primordial Jade Cutter",
        "nota": "Opción 5★ con Prob. CRIT muy alta.",
        "best": false
      },
      {
        "es": "Heraldo del Alba",
        "en": "Harbinger of Dawn",
        "nota": "F2P/3★: mucha Prob. CRIT y Daño CRIT a full vida.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Doble Geo / Cristalizar",
        "agentes": [
          "Albedo",
          "Zhongli",
          "Bennett",
          "Ganyu"
        ],
        "best": true
      },
      {
        "nombre": "Mono Geo",
        "agentes": [
          "Albedo",
          "Arataki Itto",
          "Gorou",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Coloca su Flor Solar Transitoria y sigue rotando; su daño es fuera de campo, así que prioriza DEF, Prob. CRIT y Daño CRIT.",
    "ficha": {
      "nombreCompleto": "Albedo",
      "faccion": "Mondstadt (Caballeros de Favonius)",
      "desc": "Alquimista jefe de los Caballeros de Favonius, apodado el 'Kreideprinz'. Investiga los secretos de la vida en las montañas nevadas de Dragonspine. Ataca desde su Flor Solar Transitoria escalando con Defensa.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Albedo_Wish.png/revision/latest?cb=20231214213308"
    },
    "nombre": "Albedo",
    "rareza": "5",
    "elemento": "Geo",
    "arma": "Espada",
    "faccion": "Mondstadt (Caballeros de Favonius)",
    "version": "1.2"
  },
  {
    "id": "ganyu",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Extraviado en la Ventisca",
    "sets": [
      {
        "es": "Extraviado en la Ventisca",
        "en": "Blizzard Strayer",
        "nota": "En equipos de Congelación otorga hasta +40% Prob. CRIT gratis contra enemigos congelados.",
        "best": true
      },
      {
        "es": "Orquesta del Errante",
        "en": "Wanderer's Troupe",
        "nota": "Máximo daño personal de Disparo Cargado, ideal en equipos de Fusión.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Arco de Amos",
        "en": "Amos' Bow",
        "nota": "Mejor en su clase para Disparos Cargados de Ganyu.",
        "best": true
      },
      {
        "es": "Aqua Simulacra",
        "en": "Aqua Simulacra",
        "nota": "5★ con enorme Daño CRIT y bonificación de daño.",
        "best": false
      },
      {
        "es": "Prototipo Creciente",
        "en": "Prototype Crescent",
        "nota": "F2P/4★ forjable: gran ATQ al acertar al punto débil.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación permanente",
        "agentes": [
          "Ganyu",
          "Kaedehara Kazuha",
          "Kamisato Ayaka",
          "Kokomi"
        ],
        "best": true
      },
      {
        "nombre": "Fusión (Melt)",
        "agentes": [
          "Ganyu",
          "Zhongli",
          "Xiangling",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Su segundo Disparo Cargado (flor de escarcha) es su fuente principal de daño; en Fusión sube la Maestría Elemental, en Congelación aprovecha el set de Ventisca.",
    "ficha": {
      "nombreCompleto": "Ganyu",
      "faccion": "Liyue (Pabellón Yuehai)",
      "desc": "Secretaria del Pabellón Yuehai y descendiente medio Qilin de los adeptos de Liyue. Reservada y trabajadora, desata devastadores Disparos Cargados de hielo. Escala con ATQ, Prob. CRIT y Daño CRIT.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/f/f5/Ganyu_Wish.png/revision/latest?cb=20231214215252"
    },
    "nombre": "Ganyu",
    "rareza": "5",
    "elemento": "Cryo",
    "arma": "Arco",
    "faccion": "Liyue (Pabellón Yuehai)",
    "version": "1.2"
  },
  {
    "id": "hu-tao",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "PV%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Bruja Carmesí en Llamas",
    "sets": [
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Aumenta el Daño Pyro y potencia Vaporización/Fusión; su mejor set.",
        "best": true
      },
      {
        "es": "Reminiscencia de la Purificación",
        "en": "Shimenawa's Reminiscence",
        "nota": "+50% Daño de Ataque Normal/Cargado a cambio de energía; gran opción sin ulti.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Báculo de Homa",
        "en": "Staff of Homa",
        "nota": "Mejor en su clase: PV, Daño CRIT y bonificación de daño según vida.",
        "best": true
      },
      {
        "es": "Lanza del Duelo",
        "en": "Deathmatch",
        "nota": "4★ de Pase de Batalla con mucha Prob. CRIT.",
        "best": false
      },
      {
        "es": "Perdición del Dragón",
        "en": "Dragon's Bane",
        "nota": "F2P/4★ forjable: Maestría Elemental ideal para Vaporizar.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporización",
        "agentes": [
          "Hu Tao",
          "Yelan",
          "Kaedehara Kazuha",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Doble Hidro clásico",
        "agentes": [
          "Hu Tao",
          "Xingqiu",
          "Yelan",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Activa su Habilidad para entrar en estado Paramita y castiga con Ataques Cargados; mantente en el 50% de vida bajo para maximizar la bonificación de ATQ.",
    "ficha": {
      "nombreCompleto": "Hu Tao",
      "faccion": "Liyue (Funeraria Wangsheng)",
      "desc": "Septuagésima séptima directora de la Funeraria Wangsheng, tan traviesa como solemne ante la muerte. Sacrifica vida para desatar un enorme Daño Pyro que escala con sus PV máximos.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Hu_Tao_Wish.png/revision/latest?cb=20231214215404"
    },
    "nombre": "Hu Tao",
    "rareza": "5",
    "elemento": "Pyro",
    "arma": "Lanza",
    "faccion": "Liyue (Funeraria Wangsheng)",
    "version": "1.3"
  },
  {
    "id": "xiao",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Anemo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Más Allá Bermellón",
    "sets": [
      {
        "es": "Más Allá Bermellón",
        "en": "Vermillion Hereafter",
        "nota": "Sube ATQ al usar el Estallido y lo mantiene mientras recibe daño; ideal para su ulti.",
        "best": true
      },
      {
        "es": "Final del Gladiador",
        "en": "Gladiator's Finale",
        "nota": "+35% ATQ y +35% Daño de Ataque Normal; alternativa sólida y accesible.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lanza Alada de Jade Primigenio",
        "en": "Primordial Jade Winged-Spear",
        "nota": "Mejor en su clase con acumulación de ATQ y Daño.",
        "best": true
      },
      {
        "es": "Báculo de Homa",
        "en": "Staff of Homa",
        "nota": "5★ con altísimo Daño CRIT, gran opción para sus caídas.",
        "best": false
      },
      {
        "es": "Lanza Lítica",
        "en": "Lithic Spear",
        "nota": "F2P/4★ forjable: ATQ y Prob. CRIT con aliados de Liyue.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Xiao Anemo (buff Faruzan)",
        "agentes": [
          "Xiao",
          "Faruzan",
          "Bennett",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Doble Anemo",
        "agentes": [
          "Xiao",
          "Faruzan",
          "Jean",
          "Albedo"
        ],
        "best": false
      }
    ],
    "consejo": "Su daño viene de los ataques en picado durante el Estallido; consigue suficiente Recarga de Energía y lleva a Faruzan para maximizar el Daño Anemo.",
    "ficha": {
      "nombreCompleto": "Xiao",
      "faccion": "Liyue (Yaksha adepto)",
      "desc": "El Yaksha Vigilante, adepto guerrero que protege Liyue de los males kármicos. Solitario y atormentado, arrasa desde el aire con demoledores ataques en picado de energía Anemo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/4/46/Xiao_Wish.png/revision/latest?cb=20231214221022"
    },
    "nombre": "Xiao",
    "rareza": "5",
    "elemento": "Anemo",
    "arma": "Lanza",
    "faccion": "Liyue (Yaksha adepto)",
    "version": "1.3"
  },
  {
    "id": "rosaria",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Extraviado en la Ventisca",
    "sets": [
      {
        "es": "Extraviado en la Ventisca",
        "en": "Blizzard Strayer",
        "nota": "En equipos de Congelación gana mucha Prob. CRIT; ideal como sub-DPS Cryo.",
        "best": true
      },
      {
        "es": "Compromiso de Nobleza",
        "en": "Noblesse Oblige",
        "nota": "Buffa el ATQ del equipo tras el Estallido; úsalo como apoyo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Báculo de Homa",
        "en": "Staff of Homa",
        "nota": "Mejor en su clase con enorme Daño CRIT.",
        "best": true
      },
      {
        "es": "Lanza del Duelo",
        "en": "Deathmatch",
        "nota": "4★ de Pase de Batalla con gran Prob. CRIT.",
        "best": false
      },
      {
        "es": "Prototipo Estelar",
        "en": "Prototype Starglitter",
        "nota": "F2P/4★ forjable: Recarga de Energía y bonificación de daño.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación con Ayaka",
        "agentes": [
          "Kamisato Ayaka",
          "Rosaria",
          "Kaedehara Kazuha",
          "Kokomi"
        ],
        "best": true
      },
      {
        "nombre": "Apoyo Cryo / Superconductor",
        "agentes": [
          "Eula",
          "Rosaria",
          "Raiden Shogun",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Su Habilidad golpea por la espalda; colócate detrás de los enemigos. Aporta Prob. CRIT al equipo con su pasiva y aplica Cryo de forma constante.",
    "ficha": {
      "nombreCompleto": "Rosaria",
      "faccion": "Mondstadt (Iglesia de Favonius)",
      "desc": "Monja de la Iglesia de Favonius de aspecto indiferente y actitud nocturna. Patrulla las calles a su manera repartiendo justicia con su lanza Cryo y ataques por la espalda.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Rosaria_Wish.png/revision/latest?cb=20210406175639"
    },
    "nombre": "Rosaria",
    "rareza": "4",
    "elemento": "Cryo",
    "arma": "Lanza",
    "faccion": "Mondstadt (Iglesia de Favonius)",
    "version": "1.4"
  },
  {
    "id": "eula",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Físico",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Llama Pálida",
    "sets": [
      {
        "es": "Llama Pálida",
        "en": "Pale Flame",
        "nota": "Su mejor set: +25% Daño Físico y +18% ATQ al acumular la Habilidad.",
        "best": true
      },
      {
        "es": "Caballería Ensangrentada",
        "en": "Bloodstained Chivalry",
        "nota": "2pc (+25% Daño Físico) combinado con 2pc Llama Pálida.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Canto de los Pinos Rotos",
        "en": "Song of Broken Pines",
        "nota": "Mejor en su clase: ATQ y buff de velocidad de ataque para el equipo.",
        "best": true
      },
      {
        "es": "Espina de Serpiente",
        "en": "Serpent Spine",
        "nota": "4★ de Pase de Batalla; una de las mejores opciones para su daño.",
        "best": false
      },
      {
        "es": "Argento Sepultado en Nieve",
        "en": "Snow-Tombed Starsilver",
        "nota": "F2P/4★ forjable con Daño Físico ideal para Eula.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Físico + Superconductor",
        "agentes": [
          "Eula",
          "Raiden Shogun",
          "Rosaria",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Doble Cryo",
        "agentes": [
          "Eula",
          "Diona",
          "Raiden Shogun",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Acumula cargas de Espada Ilusoria con Ataques Normales y la Habilidad antes de lanzar el Estallido para descargar el gran golpe físico; usa Superconductor para reducir la RES Física enemiga.",
    "ficha": {
      "nombreCompleto": "Eula Lawrence",
      "faccion": "Mondstadt (Compañía de Reconocimiento)",
      "desc": "Capitana de la Compañía de Reconocimiento de los Caballeros de Favonius y descendiente del proscrito Clan Lawrence. Fría en apariencia, ejecuta una venganza contundente con su mandoble de daño Físico.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/4/49/Eula_Wish.png/revision/latest?cb=20240525000630"
    },
    "nombre": "Eula",
    "rareza": "5",
    "elemento": "Cryo",
    "arma": "Mandoble",
    "faccion": "Mondstadt (Compañía de Reconocimiento)",
    "version": "1.5"
  },
  {
    "id": "yanfei",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Bruja Carmesí en Llamas",
    "sets": [
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Su mejor set: sube Daño Pyro y potencia la Vaporización.",
        "best": true
      },
      {
        "es": "Reminiscencia de la Purificación",
        "en": "Shimenawa's Reminiscence",
        "nota": "+50% Daño de Ataque Cargado; buena alternativa para su golpe principal.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Plegaria Perdida ante los Vientos Sagrados",
        "en": "Lost Prayer to the Sacred Winds",
        "nota": "Mejor en su clase: Prob. CRIT y bonificación de daño acumulable.",
        "best": true
      },
      {
        "es": "Kagura's Verity",
        "en": "Kagura's Verity",
        "nota": "5★ que potencia mucho su Habilidad Elemental.",
        "best": false
      },
      {
        "es": "El Sabio",
        "en": "The Widsith",
        "nota": "F2P/4★: gran multiplicador de daño según el tema aleatorio.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporización",
        "agentes": [
          "Yanfei",
          "Xingqiu",
          "Yelan",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Doble Pyro con Bennett",
        "agentes": [
          "Yanfei",
          "Xingqiu",
          "Bennett",
          "Kaedehara Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Genera Sellos con los Ataques Normales y descárgalos con un Ataque Cargado sin coste de resistencia; empareja con aplicadores de Hidro para Vaporizar de forma continua.",
    "ficha": {
      "nombreCompleto": "Yanfei",
      "faccion": "Liyue (Asesora legal)",
      "desc": "Asesora legal de Liyue, mitad humana mitad iluminada, con un dominio absoluto de los contratos y las leyes. Combate con un catalizador Pyro y potentes Ataques Cargados basados en Sellos.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/3/38/Yanfei_Wish.png/revision/latest?cb=20231214221149"
    },
    "nombre": "Yanfei",
    "rareza": "4",
    "elemento": "Pyro",
    "arma": "Catalizador",
    "faccion": "Liyue (Asesora legal)",
    "version": "1.5"
  },
  {
    "id": "kaedehara-kazuha",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Daño Anemo"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Maestría Elemental",
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Venerador Verdegal",
    "sets": [
      {
        "es": "Venerador Verdegal",
        "en": "Viridescent Venerer",
        "nota": "Su mejor set: potencia el Torbellino y reduce la RES elemental de los enemigos.",
        "best": true
      },
      {
        "es": "Compañía Dorada",
        "en": "Golden Troupe",
        "nota": "Alternativa si se le usa más como sub-DPS de Habilidad.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Juramento a la Libertad",
        "en": "Freedom-Sworn",
        "nota": "Mejor en su clase: Maestría Elemental y buff de ATQ/daño para el equipo.",
        "best": true
      },
      {
        "es": "Luz Lunar de Xiphos",
        "en": "Xiphos' Moonlight",
        "nota": "4★ con Maestría Elemental y aporte de Recarga al equipo.",
        "best": false
      },
      {
        "es": "Espina de Hierro",
        "en": "Iron Sting",
        "nota": "F2P/4★ forjable: la mejor opción accesible por su Maestría Elemental.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporización Hu Tao",
        "agentes": [
          "Hu Tao",
          "Kaedehara Kazuha",
          "Yelan",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Congelación Ayaka",
        "agentes": [
          "Kamisato Ayaka",
          "Kaedehara Kazuha",
          "Kokomi",
          "Shenhe"
        ],
        "best": false
      }
    ],
    "consejo": "Su fortaleza es agrupar enemigos, difundir elementos con Torbellino y reducir su resistencia; casi cualquier equipo mejora con él, prioriza Maestría Elemental.",
    "ficha": {
      "nombreCompleto": "Kaedehara Kazuha",
      "faccion": "Inazuma (Espadachín errante, flota de la Crux)",
      "desc": "Samurái errante de espíritu libre y sensibilidad poética, antiguo miembro del clan Kaedehara. Domina el viento con elegancia, agrupando enemigos y amplificando el daño elemental de sus aliados.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/1/1e/Kaedehara_Kazuha_Wish.png/revision/latest?cb=20231214215446"
    },
    "nombre": "Kaedehara Kazuha",
    "rareza": "5",
    "elemento": "Anemo",
    "arma": "Espada",
    "faccion": "Inazuma (Espadachín errante, flota de la Crux)",
    "version": "1.6"
  },
  {
    "id": "kamisato-ayaka",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Daño CRIT",
      "ATQ%",
      "Prob. CRIT",
      "Recarga de Energía"
    ],
    "setPrincipal": "Extraviado en la Ventisca",
    "sets": [
      {
        "es": "Extraviado en la Ventisca",
        "en": "Blizzard Strayer",
        "nota": "Su mejor set en Congelación: +40% Prob. CRIT gratis contra congelados, liberando la Tiara para Daño CRIT.",
        "best": true
      },
      {
        "es": "Reminiscencia de la Purificación",
        "en": "Shimenawa's Reminiscence",
        "nota": "Alternativa sin equipo de Congelación por el +50% de Ataque Cargado del Estallido.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Hendedora de Niebla Reforjada",
        "en": "Mistsplitter Reforged",
        "nota": "Mejor en su clase: Daño CRIT y bonificación de daño Cryo acumulable.",
        "best": true
      },
      {
        "es": "Haran Geppaku Futsu",
        "en": "Haran Geppaku Futsu",
        "nota": "5★ con Prob. CRIT y gran bonificación de Ataque Normal.",
        "best": false
      },
      {
        "es": "Amenoma Kageuchi",
        "en": "Amenoma Kageuchi",
        "nota": "F2P/4★ forjable: la mejor opción accesible, resuelve su energía.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación premium",
        "agentes": [
          "Kamisato Ayaka",
          "Kaedehara Kazuha",
          "Shenhe",
          "Kokomi"
        ],
        "best": true
      },
      {
        "nombre": "Congelación F2P",
        "agentes": [
          "Kamisato Ayaka",
          "Kaedehara Kazuha",
          "Rosaria",
          "Mona"
        ],
        "best": false
      }
    ],
    "consejo": "Su Estallido y Ataques Cargados tras el sprint alternativo son el grueso del daño; congela a los enemigos para inmovilizarlos y aprovecha el set de Ventisca para maximizar la Prob. CRIT.",
    "ficha": {
      "nombreCompleto": "Kamisato Ayaka",
      "faccion": "Inazuma (Clan Kamisato, Comisión Yashiro)",
      "desc": "Señorita del clan Kamisato y orgullo de la Comisión Yashiro, elegante y disciplinada. Baila con su espada Cryo desatando cortes helados y un poderoso Estallido de nevada.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Kamisato_Ayaka_Wish.png/revision/latest?cb=20231214215531"
    },
    "nombre": "Kamisato Ayaka",
    "rareza": "5",
    "elemento": "Cryo",
    "arma": "Espada",
    "faccion": "Inazuma (Clan Kamisato, Comisión Yashiro)",
    "version": "2.0"
  },
  {
    "id": "sayu",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Daño Anemo"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Curación"
    },
    "substats": [
      "Maestría Elemental",
      "Recarga de Energía",
      "ATQ%",
      "Prob. CRIT"
    ],
    "setPrincipal": "Venerador Verdegal",
    "sets": [
      {
        "es": "Venerador Verdegal",
        "en": "Viridescent Venerer",
        "nota": "Su mejor set: potencia el Torbellino y reduce la RES elemental enemiga.",
        "best": true
      },
      {
        "es": "Doncella Amada",
        "en": "Maiden Beloved",
        "nota": "Alternativa si se le usa como sanadora principal del equipo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Juramento a la Libertad",
        "en": "Freedom-Sworn",
        "nota": "Mejor en su clase: Maestría Elemental y buffs de equipo.",
        "best": true
      },
      {
        "es": "Luz Lunar de Xiphos",
        "en": "Xiphos' Moonlight",
        "nota": "Es mandoble en Sayu; en su lugar destaca el mandoble con Maestría.",
        "best": false
      },
      {
        "es": "Katsuragikiri Nagamasa",
        "en": "Katsuragikiri Nagamasa",
        "nota": "F2P/4★ forjable: Recarga de Energía para asegurar su Estallido.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Apoyo Torbellino / Sanación",
        "agentes": [
          "Sayu",
          "Xiangling",
          "Bennett",
          "Xingqiu"
        ],
        "best": true
      },
      {
        "nombre": "Difusión Electro",
        "agentes": [
          "Sayu",
          "Raiden Shogun",
          "Fischl",
          "Beidou"
        ],
        "best": false
      }
    ],
    "consejo": "Rueda con su Habilidad para difundir elementos y cura con el Estallido; sube Maestría Elemental para maximizar el Torbellino sin sacrificar la sanación (que escala con ATQ).",
    "ficha": {
      "nombreCompleto": "Sayu",
      "faccion": "Inazuma (Shuumatsuban, Comisión Yashiro)",
      "desc": "Ninja de la organización Shuumatsuban que solo quiere dormir y crecer. Perezosa pero eficaz, rueda por el campo con su mandoble Anemo difundiendo elementos y curando al equipo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/d/da/Sayu_Wish.png/revision/latest?cb=20231214220617"
    },
    "nombre": "Sayu",
    "rareza": "4",
    "elemento": "Anemo",
    "arma": "Mandoble",
    "faccion": "Inazuma (Shuumatsuban, Comisión Yashiro)",
    "version": "2.0"
  },
  {
    "id": "yoimiya",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Bruja Carmesí en Llamas",
    "sets": [
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Su mejor set en equipos de Vaporización por el Daño Pyro y el bonus de reacción.",
        "best": true
      },
      {
        "es": "Reminiscencia de la Purificación",
        "en": "Shimenawa's Reminiscence",
        "nota": "+50% Daño de Ataque Normal; alternativa fuerte en objetivo único.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Pulso Atronador",
        "en": "Thundering Pulse",
        "nota": "Mejor en su clase: ATQ, Daño CRIT y bonificación de Ataque Normal.",
        "best": true
      },
      {
        "es": "Óxido",
        "en": "Rust",
        "nota": "4★: +40% Daño de Ataque Normal, una de las mejores opciones accesibles.",
        "best": false
      },
      {
        "es": "Hamayumi",
        "en": "Hamayumi",
        "nota": "F2P/4★ forjable con gran bonificación de Ataque Normal a full energía.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporización",
        "agentes": [
          "Yoimiya",
          "Yelan",
          "Kaedehara Kazuha",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Doble Hidro",
        "agentes": [
          "Yoimiya",
          "Xingqiu",
          "Yelan",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Su daño vive en los Ataques Normales durante la Habilidad; quédate en campo disparando y empareja con Hidro (Xingqiu/Yelan) para Vaporizar de forma constante.",
    "ficha": {
      "nombreCompleto": "Yoimiya",
      "faccion": "Inazuma (Fuegos Artificiales Naganohara)",
      "desc": "Dueña del taller de Fuegos Artificiales Naganohara y 'Reina del Verano' de Inazuma. Alegre y querida por todos, convierte sus flechas en un espectáculo pirotécnico de daño Pyro sostenido.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Yoimiya_Wish.png/revision/latest?cb=20231214221255"
    },
    "nombre": "Yoimiya",
    "rareza": "5",
    "elemento": "Pyro",
    "arma": "Arco",
    "faccion": "Inazuma (Fuegos Artificiales Naganohara)",
    "version": "2.0"
  },
  {
    "id": "aloy",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Extraviado en la Ventisca",
    "sets": [
      {
        "es": "Extraviado en la Ventisca",
        "en": "Blizzard Strayer",
        "nota": "Su mejor set en Congelación por la Prob. CRIT gratuita contra enemigos congelados.",
        "best": true
      },
      {
        "es": "Orquesta del Errante",
        "en": "Wanderer's Troupe",
        "nota": "Alternativa centrada en Ataques Cargados y Maestría Elemental.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Pulso Atronador",
        "en": "Thundering Pulse",
        "nota": "Opción 5★ de mayor daño por su ATQ y Daño CRIT (no tiene arma propia).",
        "best": true
      },
      {
        "es": "Arco de Guerra del Acantilado Negro",
        "en": "Blackcliff Warbow",
        "nota": "4★ con Daño CRIT que escala al derrotar enemigos.",
        "best": false
      },
      {
        "es": "Prototipo Creciente",
        "en": "Prototype Crescent",
        "nota": "F2P/4★ forjable: gran ATQ al acertar al punto débil.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación",
        "agentes": [
          "Aloy",
          "Kaedehara Kazuha",
          "Mona",
          "Diona"
        ],
        "best": true
      },
      {
        "nombre": "Apoyo Cryo con acumulaciones",
        "agentes": [
          "Aloy",
          "Ganyu",
          "Kaedehara Kazuha",
          "Kokomi"
        ],
        "best": false
      }
    ],
    "consejo": "Recoge las Bombas Frías para acumular Chispas de Coyote y potenciar sus Ataques Normales, convirtiéndolos en Daño Cryo; brilla en equipos de Congelación.",
    "ficha": {
      "nombreCompleto": "Aloy",
      "faccion": "Colaboración (Horizon Zero Dawn)",
      "desc": "Cazadora de la tribu Nora, protagonista invitada de Horizon Zero Dawn. Ágil y decidida, combina flechas de precisión con bombas de hielo para infligir daño Cryo en el campo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Aloy_Wish.png/revision/latest?cb=20231214213630"
    },
    "nombre": "Aloy",
    "rareza": "5",
    "elemento": "Cryo",
    "arma": "Arco",
    "faccion": "Colaboración (Horizon Zero Dawn)",
    "version": "2.1"
  },
  {
    "id": "kujou-sara",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%"
    ],
    "setPrincipal": "Compromiso de Nobleza",
    "sets": [
      {
        "es": "Compromiso de Nobleza",
        "en": "Noblesse Oblige",
        "nota": "Su mejor set de apoyo: +20% ATQ para todo el equipo tras el Estallido.",
        "best": true
      },
      {
        "es": "Emblema del Destino Truncado",
        "en": "Emblem of Severed Fate",
        "nota": "Alternativa si se busca daño propio de Estallido con mucha Recarga.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Arpa Celestial",
        "en": "Skyward Harp",
        "nota": "Mejor en su clase: Prob. CRIT y aporta daño además del buff.",
        "best": true
      },
      {
        "es": "Elegía por el Final",
        "en": "Elegy for the End",
        "nota": "5★ que suma Maestría y ATQ al equipo; gran soporte.",
        "best": false
      },
      {
        "es": "Arco de Guerra Favonio",
        "en": "Favonius Warbow",
        "nota": "F2P/4★: Recarga de Energía y generación de partículas para batería.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Raiden",
        "agentes": [
          "Raiden Shogun",
          "Kujou Sara",
          "Kaedehara Kazuha",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Agregación Electro",
        "agentes": [
          "Kujou Sara",
          "Fischl",
          "Beidou",
          "Xingqiu"
        ],
        "best": false
      }
    ],
    "consejo": "Su buff de ATQ del Estallido escala con su ATQ base, así que lleva un arco de ATQ/Prob. CRIT y prioriza la Recarga de Energía; sincroniza su ulti justo antes del portador de daño (idealmente Raiden).",
    "ficha": {
      "nombreCompleto": "Kujou Sara",
      "faccion": "Inazuma (Comisión Tenryou)",
      "desc": "General de la Comisión Tenryou y adoptada del clan Kujou, leal hasta la médula a la Shogun Raiden. Marca a los enemigos con su Habilidad y potencia el ATQ del equipo con su Estallido Electro.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/c/c7/Kujou_Sara_Wish.png/revision/latest?cb=20231214215801"
    },
    "nombre": "Kujou Sara",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Arco",
    "faccion": "Inazuma (Comisión Tenryou)",
    "version": "2.1"
  },
  {
    "id": "raiden-shogun",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%"
    ],
    "setPrincipal": "Emblema del Destino",
    "sets": [
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "BiS: el daño de su Ráfaga escala con la Recarga de Energía extra.",
        "best": true
      },
      {
        "es": "2pc Emblema del Destino + 2pc ATQ +18%",
        "en": "2pc Emblem of Severed Fate + 2pc +18% ATK",
        "nota": "Alternativa mientras farmeas piezas con CRÍ.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Luz del Segador",
        "en": "Engulfing Lightning",
        "nota": "Insignia: alta Recarga que además convierte en ATQ.",
        "best": true
      },
      {
        "es": "Aleta Cortaolas",
        "en": "Wavebreaker's Fin",
        "nota": "Su Ráfaga escala con la energía total del equipo.",
        "best": false
      },
      {
        "es": "La Captura",
        "en": "The Catch",
        "nota": "F2P/4★ R5: +daño y +Prob. CRÍ de Ráfaga, casi BiS.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Raiden Nacional",
        "agentes": [
          "Raiden Shogun",
          "Xiangling",
          "Xingqiu",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Hiperfloración",
        "agentes": [
          "Raiden Shogun",
          "Nahida",
          "Xingqiu",
          "Kuki Shinobu"
        ],
        "best": false
      }
    ],
    "consejo": "Funciona como batería y sub-DPS: prioriza ~250%+ de Recarga para llenar su Ráfaga cada rotación.",
    "ficha": {
      "nombreCompleto": "Raiden Shogun (Ei)",
      "faccion": "Inazuma",
      "desc": "La Arconte Electro y Shogun de Inazuma, que busca la eternidad. En combate golpea con su Ráfaga Musou no Hitotachi y potencia la energía y el daño de Ráfaga de todo el equipo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Raiden_Shogun_Card.png/revision/latest?cb=20241007221517"
    },
    "nombre": "Raiden Shogun",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Lanza",
    "faccion": "Inazuma",
    "version": "2.1"
  },
  {
    "id": "sangonomiya-kokomi",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Hydro",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "PV%",
      "alt": "Bonificación de Curación"
    },
    "substats": [
      "PV%",
      "Recarga de Energía",
      "Maestría Elemental"
    ],
    "setPrincipal": "Concha del Color del Mar",
    "sets": [
      {
        "es": "Concha del Color del Mar",
        "en": "Ocean-Hued Clam",
        "nota": "Convierte su curación en daño; ideal como sanadora de apoyo.",
        "best": true
      },
      {
        "es": "Sueño de la Ninfa",
        "en": "Nymph's Dream",
        "nota": "Para Kokomi como DPS de Hydro en toque (mono-Hydro/Nilou).",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Resplandor Lunar Sempiterno",
        "en": "Everlasting Moonglow",
        "nota": "Insignia: los Ataques Normales escalan con PV y regenera energía.",
        "best": true
      },
      {
        "es": "Prototipo Ámbar",
        "en": "Prototype Amber",
        "nota": "Regen de energía y curación en área para el equipo.",
        "best": false
      },
      {
        "es": "Emocionantes Cuentos de Cazadragones",
        "en": "Thrilling Tales of Dragon Slayers",
        "nota": "F2P/4★: +48% ATQ al personaje al que relevas.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Floración de Nilou",
        "agentes": [
          "Nilou",
          "Nahida",
          "Sangonomiya Kokomi",
          "Kirara"
        ],
        "best": true
      },
      {
        "nombre": "Congelación / Apoyo",
        "agentes": [
          "Kamisato Ayaka",
          "Sangonomiya Kokomi",
          "Shenhe",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Su pasivo elimina la posibilidad de CRÍ pero potencia curación y daño Hydro por PV: apila PV% y olvídate de la Prob./Daño CRÍ.",
    "ficha": {
      "nombreCompleto": "Sangonomiya Kokomi",
      "faccion": "Inazuma",
      "desc": "Sacerdotisa Divina y líder del Ejército de la Resistencia de Watatsumi. Sanadora principal y aplicadora constante de Hydro gracias a su medusa y a su Ráfaga.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Sangonomiya_Kokomi_Card.png/revision/latest?cb=20220725205145"
    },
    "nombre": "Sangonomiya Kokomi",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Catalizador",
    "faccion": "Inazuma",
    "version": "2.1"
  },
  {
    "id": "thoma",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Pyro"
    },
    "tiara": {
      "principal": "PV%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "PV%",
      "Maestría Elemental",
      "Prob. CRIT"
    ],
    "setPrincipal": "Compromiso del Noble",
    "sets": [
      {
        "es": "Compromiso del Noble",
        "en": "Noblesse Oblige",
        "nota": "+20% ATQ a todo el equipo tras su Ráfaga; mejor como escudero/apoyo.",
        "best": true
      },
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "Para maximizar el daño personal de su Ráfaga (necesita Recarga).",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lanza de Favonio",
        "en": "Favonius Lance",
        "nota": "Genera energía para el equipo; refuerza su rol de apoyo.",
        "best": true
      },
      {
        "es": "Lanza Cruzada de Kitain",
        "en": "Kitain Cross Spear",
        "nota": "Maestría + regen de energía, ideal en equipos de Brote/Quemadura.",
        "best": false
      },
      {
        "es": "Borla Negra",
        "en": "Black Tassel",
        "nota": "F2P/4★: +48% PV, económica para reforzar su escudo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Brote (Burgeon)",
        "agentes": [
          "Thoma",
          "Nahida",
          "Xingqiu",
          "Kuki Shinobu"
        ],
        "best": true
      },
      {
        "nombre": "Escudo para Vaporizar",
        "agentes": [
          "Hu Tao",
          "Thoma",
          "Yelan",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Su escudo y su Ráfaga escalan con PV: dale Recarga suficiente para mantener la barrera y, en equipos de Brote, sube su Maestría.",
    "ficha": {
      "nombreCompleto": "Thoma",
      "faccion": "Inazuma",
      "desc": "Administrador de la Comisión Yashiro, mitad Mondstadt mitad Inazuma. Escudero por excelencia: aplica Pyro y protege al equipo con la barrera de su Ráfaga.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/1/12/Thoma_Card.png/revision/latest?cb=20220725205212"
    },
    "nombre": "Thoma",
    "rareza": "4",
    "elemento": "Pyro",
    "arma": "Lanza",
    "faccion": "Inazuma",
    "version": "2.2"
  },
  {
    "id": "arataki-itto",
    "estado": "completo",
    "arena": {
      "principal": "DEF%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Geo",
      "alt": "DEF%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "DEF%",
      "ATQ%"
    ],
    "setPrincipal": "Caparazón de Sueños Opulentos",
    "sets": [
      {
        "es": "Caparazón de Sueños Opulentos",
        "en": "Husk of Opulent Dreams",
        "nota": "BiS: apila DEF y Bonif. Daño Geo, justo con lo que escala Itto.",
        "best": true
      },
      {
        "es": "2pc Caparazón de Sueños Opulentos + 2pc Petra Arcaica",
        "en": "2pc Husk of Opulent Dreams + 2pc Archaic Petra",
        "nota": "Más Bonificación de Daño Geo si no tienes 4pc completo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Trilladora de Cuernorrojo",
        "en": "Redhorn Stonethresher",
        "nota": "Insignia: Daño CRÍ y daño de Ataque Normal/Cargado por DEF.",
        "best": true
      },
      {
        "es": "Espina de Serpiente",
        "en": "Serpent Spine",
        "nota": "Battle Pass: gran Prob. CRÍ y daño acumulable en campo.",
        "best": false
      },
      {
        "es": "Cegablanco",
        "en": "Whiteblind",
        "nota": "F2P/4★: forjable, sube ATQ y DEF al golpear.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Mono Geo (Itto)",
        "agentes": [
          "Arataki Itto",
          "Gorou",
          "Albedo",
          "Yun Jin"
        ],
        "best": true
      },
      {
        "nombre": "Itto + Sara",
        "agentes": [
          "Arataki Itto",
          "Gorou",
          "Kujou Sara",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal que escala con DEF: empareja siempre con Gorou (4 estrellas Geo en el equipo) para su máximo daño de Ataque Cargado.",
    "ficha": {
      "nombreCompleto": "Arataki Itto",
      "faccion": "Inazuma",
      "desc": "Líder de la Banda Arataki, mitad oni de gran fuerza. DPS Geo de campo que golpea con su mandoble Ushi durante su Ráfaga usando la DEF como estadística ofensiva.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/9/9d/Arataki_Itto_Card.png/revision/latest?cb=20220725204845"
    },
    "nombre": "Arataki Itto",
    "rareza": "5",
    "elemento": "Geo",
    "arma": "Mandoble",
    "faccion": "Inazuma",
    "version": "2.3"
  },
  {
    "id": "gorou",
    "estado": "completo",
    "arena": {
      "principal": "DEF%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "DEF%",
      "alt": "Bonificación de Daño Geo"
    },
    "tiara": {
      "principal": "DEF%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "DEF%",
      "Recarga de Energía",
      "Prob. CRIT"
    ],
    "setPrincipal": "Caparazón de Sueños Opulentos",
    "sets": [
      {
        "es": "Caparazón de Sueños Opulentos",
        "en": "Husk of Opulent Dreams",
        "nota": "Apila DEF y sinergiza con su Ráfaga, que da más DEF al equipo.",
        "best": true
      },
      {
        "es": "Compromiso del Noble",
        "en": "Noblesse Oblige",
        "nota": "+20% ATQ al equipo como refuerzo alternativo de apoyo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Arco de Guerra de Favonio",
        "en": "Favonius Warbow",
        "nota": "Regenera energía del equipo; el mejor arco de apoyo.",
        "best": true
      },
      {
        "es": "Elegía del Fin",
        "en": "Elegy for the End",
        "nota": "Da Maestría y ATQ a todo el equipo.",
        "best": false
      },
      {
        "es": "Arco de Sacrificio",
        "en": "Sacrificial Bow",
        "nota": "F2P/4★: reinicia su Habilidad Elemental para más partículas.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Mono Geo (Itto)",
        "agentes": [
          "Arataki Itto",
          "Gorou",
          "Albedo",
          "Yun Jin"
        ],
        "best": true
      },
      {
        "nombre": "Apoyo Geo (Navia)",
        "agentes": [
          "Navia",
          "Gorou",
          "Zhongli",
          "Fischl"
        ],
        "best": false
      }
    ],
    "consejo": "El mejor apoyo para equipos mono-Geo: su Ráfaga aporta DEF y Bonificación de Daño Geo. Súbele Recarga para mantenerla activa.",
    "ficha": {
      "nombreCompleto": "Gorou",
      "faccion": "Inazuma",
      "desc": "General del Ejército de la Resistencia de Watatsumi. Apoyo Geo que refuerza la DEF y el daño Geo de sus aliados, imprescindible en equipos de piedra.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Gorou_Card.png/revision/latest?cb=20220725204934"
    },
    "nombre": "Gorou",
    "rareza": "4",
    "elemento": "Geo",
    "arma": "Arco",
    "faccion": "Inazuma",
    "version": "2.3"
  },
  {
    "id": "shenhe",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Cryo"
    },
    "tiara": {
      "principal": "ATQ%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "ATQ%",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Emblema del Destino",
    "sets": [
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "Recarga alta y +daño de Ráfaga para su rol de buffer-batería.",
        "best": true
      },
      {
        "es": "Compromiso del Noble",
        "en": "Noblesse Oblige",
        "nota": "+20% ATQ a todo el equipo como apoyo puro.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Aplacacalamidades",
        "en": "Calamity Queller",
        "nota": "Insignia: mucha ATQ y bonificación de daño elemental acumulable.",
        "best": true
      },
      {
        "es": "Lanza de Favonio",
        "en": "Favonius Lance",
        "nota": "Regenera energía para todo el equipo.",
        "best": false
      },
      {
        "es": "Prototipo Brilloestelar",
        "en": "Prototype Starglitter",
        "nota": "F2P/4★: Recarga y +daño tras usar la Habilidad Elemental.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación (Ayaka)",
        "agentes": [
          "Kamisato Ayaka",
          "Shenhe",
          "Sangonomiya Kokomi",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Fundir (Ganyu)",
        "agentes": [
          "Ganyu",
          "Shenhe",
          "Zhongli",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Potencia enormemente el daño Cryo del equipo con sus púas: úsala en equipos de Congelación y Fundir y busca Recarga para su Ráfaga.",
    "ficha": {
      "nombreCompleto": "Shenhe",
      "faccion": "Liyue",
      "desc": "Discípula de la Adepta Cloud Retainer, criada entre lo mortal y lo divino. Apoyo Cryo que carga a los aliados con púas que aumentan su daño Cryo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Shenhe_Card.png/revision/latest?cb=20220725205152"
    },
    "nombre": "Shenhe",
    "rareza": "5",
    "elemento": "Cryo",
    "arma": "Lanza",
    "faccion": "Liyue",
    "version": "2.4"
  },
  {
    "id": "yun-jin",
    "estado": "completo",
    "arena": {
      "principal": "DEF%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "DEF%",
      "alt": "Bonificación de Daño Geo"
    },
    "tiara": {
      "principal": "DEF%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "DEF%",
      "Recarga de Energía",
      "Prob. CRIT"
    ],
    "setPrincipal": "Caparazón de Sueños Opulentos",
    "sets": [
      {
        "es": "Caparazón de Sueños Opulentos",
        "en": "Husk of Opulent Dreams",
        "nota": "Apila DEF, que es justo lo que escala el buff de su Ráfaga.",
        "best": true
      },
      {
        "es": "Compromiso del Noble",
        "en": "Noblesse Oblige",
        "nota": "+20% ATQ a todo el equipo como apoyo alternativo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lanza de Favonio",
        "en": "Favonius Lance",
        "nota": "Regenera energía del equipo; refuerza su rol de apoyo.",
        "best": true
      },
      {
        "es": "Prototipo Brilloestelar",
        "en": "Prototype Starglitter",
        "nota": "Recarga alta para mantener su Ráfaga siempre lista.",
        "best": false
      },
      {
        "es": "Borla Negra",
        "en": "Black Tassel",
        "nota": "F2P/4★: barata y con subestadística útil mientras subes Recarga.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Mono Geo (Itto)",
        "agentes": [
          "Arataki Itto",
          "Gorou",
          "Yun Jin",
          "Albedo"
        ],
        "best": true
      },
      {
        "nombre": "Buff de Ataques Normales",
        "agentes": [
          "Kamisato Ayato",
          "Yun Jin",
          "Xingqiu",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Su Ráfaga añade daño extra a los Ataques Normales según su DEF: brilla junto a DPS de ataques normales como Itto, Ayato o Ningguang.",
    "ficha": {
      "nombreCompleto": "Yun Jin",
      "faccion": "Liyue",
      "desc": "Directora de la compañía de ópera Yun-Han de Liyue. Apoyo Geo que potencia el daño de Ataque Normal de todo el equipo escalando con su DEF.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Yun_Jin_Card.png/revision/latest?cb=20220725205249"
    },
    "nombre": "Yun Jin",
    "rareza": "4",
    "elemento": "Geo",
    "arma": "Lanza",
    "faccion": "Liyue",
    "version": "2.4"
  },
  {
    "id": "yae-miko",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Furia del Trueno",
    "sets": [
      {
        "es": "Furia del Trueno",
        "en": "Thundering Fury",
        "nota": "Reduce el enfriamiento de su Habilidad; ideal en equipos de Agravación.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "+Maestría y +ATQ para maximizar la Agravación.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Verdad de Kagura",
        "en": "Kagura's Verity",
        "nota": "Insignia: sube su Bonif. Daño Elemental al usar la Habilidad.",
        "best": true
      },
      {
        "es": "Pergamino Celestial",
        "en": "Skyward Atlas",
        "nota": "Mucho ATQ% y daño extra en enemigos cercanos.",
        "best": false
      },
      {
        "es": "El Bardo",
        "en": "The Widsith",
        "nota": "F2P/4★: buff aleatorio muy potente (ATQ, Bonif. o Maestría).",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Agravación",
        "agentes": [
          "Yae Miko",
          "Nahida",
          "Fischl",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Hipercarga Electro",
        "agentes": [
          "Yae Miko",
          "Raiden Shogun",
          "Kazuha",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS fuera de campo: coloca sus tres tótems Sesshou Sakura y cambia de personaje. Prioriza Prob./Daño CRÍ para su daño de Habilidad.",
    "ficha": {
      "nombreCompleto": "Yae Miko",
      "faccion": "Inazuma",
      "desc": "Gran Sacerdotisa del Gran Santuario Narukami y dueña de la Editorial Yae. Sub-DPS Electro que despliega tótems de daño automático fuera de campo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/8/89/Yae_Miko_Card.png/revision/latest?cb=20211231161334"
    },
    "nombre": "Yae Miko",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Catalizador",
    "faccion": "Inazuma",
    "version": "2.5"
  },
  {
    "id": "kamisato-ayato",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Hydro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Ecos de una Ofrenda",
    "sets": [
      {
        "es": "Ecos de una Ofrenda",
        "en": "Echoes of an Offering",
        "nota": "Potencia los Ataques Normales; su mejor set como DPS de toque.",
        "best": true
      },
      {
        "es": "Corazón de las Profundidades",
        "en": "Heart of Depth",
        "nota": "+Bonif. Daño Hydro y +daño de Ataque Normal/Cargado.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Haran Geppaku Futsu",
        "en": "Haran Geppaku Futsu",
        "nota": "Insignia: Prob. CRÍ y +daño de Ataque Normal.",
        "best": true
      },
      {
        "es": "Cortaneblina Reforjada",
        "en": "Mistsplitter Reforged",
        "nota": "Gran Bonif. Daño Elemental y Daño CRÍ.",
        "best": false
      },
      {
        "es": "Amenoma Kageuchi",
        "en": "Amenoma Kageuchi",
        "nota": "F2P/4★: forjable, regenera energía para su Ráfaga.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporizar",
        "agentes": [
          "Kamisato Ayato",
          "Xiangling",
          "Bennett",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Hiperfloración (conductor)",
        "agentes": [
          "Kamisato Ayato",
          "Nahida",
          "Kuki Shinobu",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "DPS de toque: encadena sus Ataques Normales de agua durante la Habilidad Vislumbre de Marea y apunta a ~130-160% de Recarga.",
    "ficha": {
      "nombreCompleto": "Kamisato Ayato",
      "faccion": "Inazuma",
      "desc": "Jefe del Clan Kamisato y líder de la Comisión Yashiro. DPS Hydro de campo que descarga rápidas estocadas de agua con su estilo Kamisato Soutou.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/1/12/Kamisato_Ayato_Card.png/revision/latest?cb=20220927195614"
    },
    "nombre": "Kamisato Ayato",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Espada",
    "faccion": "Inazuma",
    "version": "2.6"
  },
  {
    "id": "kuki-shinobu",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "PV%"
    },
    "substats": [
      "Maestría Elemental",
      "PV%",
      "Recarga de Energía",
      "Prob. CRIT"
    ],
    "setPrincipal": "Flor Olvidada del Paraíso",
    "sets": [
      {
        "es": "Flor Olvidada del Paraíso",
        "en": "Flower of Paradise Lost",
        "nota": "BiS de Hiperfloración: potencia el daño de las semillas y da Maestría.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "+Maestría en equipos de reacción, más fácil de farmear.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Juramento a la Libertad",
        "en": "Freedom-Sworn",
        "nota": "Mucha Maestría y buff de ATQ/daño a todo el equipo.",
        "best": true
      },
      {
        "es": "Luz de Luna de Xiphos",
        "en": "Xiphos' Moonlight",
        "nota": "Maestría alta y regeneración de energía.",
        "best": false
      },
      {
        "es": "Punta de Hierro",
        "en": "Iron Sting",
        "nota": "F2P/4★: gran Maestría, prácticamente BiS para Hiperfloración.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hiperfloración",
        "agentes": [
          "Kuki Shinobu",
          "Nahida",
          "Xingqiu",
          "Yelan"
        ],
        "best": true
      },
      {
        "nombre": "Agravación / Apoyo Electro",
        "agentes": [
          "Kuki Shinobu",
          "Raiden Shogun",
          "Fischl",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Activadora de Hiperfloración y sanadora a la vez: ve full Maestría Elemental, pero su curación escala con PV, así que conserva algo de PV%.",
    "ficha": {
      "nombreCompleto": "Kuki Shinobu",
      "faccion": "Inazuma",
      "desc": "Segunda al mando de la Banda Arataki. Sanadora y activadora de Electro que destaca disparando Hiperfloración con su Maestría Elemental.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Kuki_Shinobu_Card.png/revision/latest?cb=20220725205038"
    },
    "nombre": "Kuki Shinobu",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Espada",
    "faccion": "Inazuma",
    "version": "2.7"
  },
  {
    "id": "yelan",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Hydro",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "PV%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Emblema del Destino",
    "sets": [
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "BiS: Recarga alta y +daño de Ráfaga para su daño fuera de campo.",
        "best": true
      },
      {
        "es": "2pc Corazón de las Profundidades + 2pc PV +20%",
        "en": "2pc Heart of Depth + 2pc +20% HP",
        "nota": "Más Bonif. Daño Hydro si ya te sobra Recarga.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Simulacro Acuático",
        "en": "Aqua Simulacra",
        "nota": "Insignia: +PV y muchísimo Daño CRÍ.",
        "best": true
      },
      {
        "es": "Elegía del Fin",
        "en": "Elegy for the End",
        "nota": "Maestría y buff de ATQ para todo el equipo.",
        "best": false
      },
      {
        "es": "Ocaso Menguante",
        "en": "Fading Twilight",
        "nota": "F2P/4★: arco de evento con Recarga y daño sólidos.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporizar (Hu Tao)",
        "agentes": [
          "Hu Tao",
          "Yelan",
          "Zhongli",
          "Xingqiu"
        ],
        "best": true
      },
      {
        "nombre": "Hiperfloración",
        "agentes": [
          "Yelan",
          "Nahida",
          "Kuki Shinobu",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS de Hydro fuera de campo, muy parecida a Xingqiu: su daño escala con PV, busca Prob./Daño CRÍ y ~180% de Recarga.",
    "ficha": {
      "nombreCompleto": "Yelan",
      "faccion": "Liyue",
      "desc": "Agente misteriosa que dice trabajar para la Cámara de Comercio Yanshang. Sub-DPS Hydro fuera de campo cuyo daño de Ráfaga escala con sus puntos de vida.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Yelan_Card.png/revision/latest?cb=20220725205242"
    },
    "nombre": "Yelan",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Arco",
    "faccion": "Liyue",
    "version": "2.7"
  },
  {
    "id": "shikanoin-heizou",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Anemo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Cazador Esmeralda del Ocaso",
    "sets": [
      {
        "es": "Cazador Esmeralda del Ocaso",
        "en": "Viridescent Venerer",
        "nota": "Potencia el Torbellino y reduce la RES elemental del enemigo.",
        "best": true
      },
      {
        "es": "Reminiscencia de la Purificación",
        "en": "Shimenawa's Reminiscence",
        "nota": "Más daño personal de Ataques Normales/Cargados como hipercarry.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Plegaria Perdida al Viento Sagrado",
        "en": "Lost Prayer to the Sacred Winds",
        "nota": "Insignia catalizador: Prob. CRÍ y Bonif. de daño acumulable.",
        "best": true
      },
      {
        "es": "Verdad de Kagura",
        "en": "Kagura's Verity",
        "nota": "Gran Bonif. Daño Elemental al usar la Habilidad.",
        "best": false
      },
      {
        "es": "Anillo de Hakushin",
        "en": "Hakushin Ring",
        "nota": "F2P/4★: forjable, buff elemental al equipo tras un Torbellino.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Torbellino (Swirl)",
        "agentes": [
          "Shikanoin Heizou",
          "Xingqiu",
          "Fischl",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Hipercarga Electro",
        "agentes": [
          "Shikanoin Heizou",
          "Fischl",
          "Beidou",
          "Kuki Shinobu"
        ],
        "best": false
      }
    ],
    "consejo": "DPS de Anemo cuerpo a cuerpo: acumula cargas Ferocidad con sus puñetazos y desata Torbellinos con la Habilidad para provocar reacciones.",
    "ficha": {
      "nombreCompleto": "Shikanoin Heizou",
      "faccion": "Inazuma",
      "desc": "Detective prodigio de la Comisión Tenryou. Primer catalizador Anemo cuerpo a cuerpo: golpea con artes marciales y provoca Torbellinos como DPS de campo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/9/92/Shikanoin_Heizou_Card.png/revision/latest?cb=20220725205159"
    },
    "nombre": "Shikanoin Heizou",
    "rareza": "4",
    "elemento": "Anemo",
    "arma": "Catalizador",
    "faccion": "Inazuma",
    "version": "2.8"
  },
  {
    "id": "collei",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Daño Dendro"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Maestría Elemental",
      "Recarga de Energía",
      "ATQ%",
      "Prob. CRIT"
    ],
    "setPrincipal": "Recuerdos del Bosque Profundo",
    "sets": [
      {
        "es": "Recuerdos del Bosque Profundo",
        "en": "Deepwood Memories",
        "nota": "Reduce la RES Dendro del enemigo; el mejor set de apoyo Dendro.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "+Maestría para potenciar las reacciones del equipo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Elegía del Fin",
        "en": "Elegy for the End",
        "nota": "Maestría y buff de ATQ/Maestría a todo el equipo.",
        "best": true
      },
      {
        "es": "Arco de Sacrificio",
        "en": "Sacrificial Bow",
        "nota": "Reinicia su Habilidad para aplicar Dendro con más frecuencia.",
        "best": false
      },
      {
        "es": "Ocaso Menguante",
        "en": "Fading Twilight",
        "nota": "F2P/4★: arco de evento con Recarga y daño útiles.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hiperfloración",
        "agentes": [
          "Collei",
          "Kuki Shinobu",
          "Xingqiu",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Agravación",
        "agentes": [
          "Collei",
          "Fischl",
          "Yae Miko",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Aplicadora de Dendro fuera de campo: con Recuerdos del Bosque Profundo baja la RES Dendro y potencia todo el equipo de reacciones.",
    "ficha": {
      "nombreCompleto": "Collei",
      "faccion": "Sumeru",
      "desc": "Aprendiz de guardabosques del Gran Bosque de Avidya y aliada de Tighnari. Apoyo Dendro que aplica el elemento fuera de campo con su Habilidad y su Ráfaga.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/7/78/Collei_Card.png/revision/latest?cb=20220711041855"
    },
    "nombre": "Collei",
    "rareza": "4",
    "elemento": "Dendro",
    "arma": "Arco",
    "faccion": "Sumeru",
    "version": "3.0"
  },
  {
    "id": "dori",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Electro"
    },
    "tiara": {
      "principal": "Bonificación de Curación",
      "alt": "PV%"
    },
    "substats": [
      "Recarga de Energía",
      "PV%",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Recuerdos del Bosque",
    "sets": [
      {
        "es": "Recuerdos del Bosque",
        "en": "Deepwood Memories",
        "nota": "Reduce la RES Dendro de los enemigos; ideal en equipos Dendro donde Dori aplica y cura.",
        "best": true
      },
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "Sube el daño de todo el equipo tras su Ráctica Definitiva; alternativa universal de apoyo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Ámbar Prototipo",
        "en": "Prototype Amber",
        "nota": "Regenera energía y da PV; perfecta para curar y financiar la Definitiva.",
        "best": true
      },
      {
        "es": "Fragmentos Sacrificiales",
        "en": "Sacrificial Fragments",
        "nota": "Reinicia la Habilidad Elemental para más aplicación y energía.",
        "best": false
      },
      {
        "es": "Códice de Favonio",
        "en": "Favonius Codex",
        "nota": "F2P: partículas de energía extra para todo el equipo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hiperbloom / Quicken",
        "agentes": [
          "Nahida",
          "Dori",
          "Xingqiu",
          "Kuki Shinobu"
        ],
        "best": true
      },
      {
        "nombre": "Apoyo de energía Electro",
        "agentes": [
          "Raiden Shogun",
          "Dori",
          "Bennett",
          "Xiangling"
        ],
        "best": false
      }
    ],
    "consejo": "Constrúyela con Recarga de Energía y PV%: su curación y recarga de energía escalan con la Vida máxima. En C6 revive el aura de energía del equipo.",
    "ficha": {
      "nombreCompleto": "Dori",
      "faccion": "Sumeru",
      "desc": "Astuta mercader de la Compañía Dori en Sumeru, siempre atenta a un buen negocio. Ofrece de todo, por el precio correcto. En combate combina curación con recarga de energía para el grupo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Dori_Card.png/revision/latest?cb=20220711042206"
    },
    "nombre": "Dori",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Catalizador",
    "faccion": "Sumeru",
    "version": "3.0"
  },
  {
    "id": "tighnari",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Dendro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "Maestría Elemental",
      "ATQ%"
    ],
    "setPrincipal": "Farándula del Errante",
    "sets": [
      {
        "es": "Farándula del Errante",
        "en": "Wanderer's Troupe",
        "nota": "+80 ME y +35% de daño de Ataque Cargado; hecho a medida para su disparo cargado.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "ATQ y ME extra en equipos con varios elementos; gran alternativa de daño.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Senda del Cazador",
        "en": "Hunter's Path",
        "nota": "Arma insignia: convierte ME en daño CRIT y potencia el Ataque Cargado.",
        "best": true
      },
      {
        "es": "Arco de Amós",
        "en": "Amos' Bow",
        "nota": "Escala con ATQ y daño de disparo cargado a distancia.",
        "best": false
      },
      {
        "es": "Sin Cuerdas",
        "en": "The Stringless",
        "nota": "F2P/4★: +ME y daño de Habilidad y Definitiva; opción económica sólida.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Spread / Quickbloom",
        "agentes": [
          "Tighnari",
          "Nahida",
          "Fischl",
          "Yae Miko"
        ],
        "best": true
      },
      {
        "nombre": "Dendro cargado",
        "agentes": [
          "Tighnari",
          "Collei",
          "Zhongli",
          "Nahida"
        ],
        "best": false
      }
    ],
    "consejo": "Encadena su Habilidad para cargar 'Puntería del Bosque' y suelta tres disparos cargados potenciados. Priorízalo con Maestría Elemental para maximizar las reacciones de Difusión/Agravación.",
    "ficha": {
      "nombreCompleto": "Tighnari",
      "faccion": "Sumeru",
      "desc": "Guardabosques general de la aldea Gandharva, en el Bosque de Avidya. Meticuloso y sabio, protege la naturaleza de Sumeru. Es un experto arquero Dendro centrado en el disparo cargado.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/5/5c/Tighnari_Card.png/revision/latest?cb=20220711041536"
    },
    "nombre": "Tighnari",
    "rareza": "5",
    "elemento": "Dendro",
    "arma": "Arco",
    "faccion": "Sumeru",
    "version": "3.0"
  },
  {
    "id": "candace",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Hydro"
    },
    "tiara": {
      "principal": "PV%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "PV%",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Ritual Antiguo de la Nobleza",
    "sets": [
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "+20% ATQ a todo el equipo tras su Definitiva; el mejor apoyo para su rol.",
        "best": true
      },
      {
        "es": "Tenacidad de los Milelith",
        "en": "Tenacity of the Millelith",
        "nota": "Escala con PV y da ATQ al equipo al golpear con la Habilidad.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lanza de Favonio",
        "en": "Favonius Lance",
        "nota": "Genera partículas de energía para sostener su Definitiva.",
        "best": true
      },
      {
        "es": "Perforaluna",
        "en": "Moonpiercer",
        "nota": "Da Maestría Elemental si actúa como habilitadora de reacciones.",
        "best": false
      },
      {
        "es": "Borla Negra",
        "en": "Black Tassel",
        "nota": "F2P/4★: +48% PV, ideal porque su Definitiva escala con Vida máxima.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Buffo de Ataque Normal",
        "agentes": [
          "Candace",
          "Ayato",
          "Xingqiu",
          "Nahida"
        ],
        "best": true
      },
      {
        "nombre": "Impulso Hydro",
        "agentes": [
          "Candace",
          "Cyno",
          "Nahida",
          "Kuki Shinobu"
        ],
        "best": false
      }
    ],
    "consejo": "Su Definitiva imbuye de Hydro los Ataques Normales del equipo y añade daño según su PV; combínala con DPS de ataque normal. Constrúyela con PV% y suficiente Recarga.",
    "ficha": {
      "nombreCompleto": "Candace",
      "faccion": "Sumeru",
      "desc": "Guardiana de la aldea de Aaru, en el desierto de Sumeru, y descendiente de un antiguo linaje real. Protege a su gente con lanza y escudo. Aplica Hydro y potencia los ataques normales del equipo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/5/58/Candace_Card.png/revision/latest?cb=20220822101651"
    },
    "nombre": "Candace",
    "rareza": "4",
    "elemento": "Hydro",
    "arma": "Lanza",
    "faccion": "Sumeru",
    "version": "3.1"
  },
  {
    "id": "cyno",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "Maestría Elemental",
      "ATQ%"
    ],
    "setPrincipal": "Sueños Áureos",
    "sets": [
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "+ME y +ATQ en equipos Quicken/Agravación; su mejor conjunto actual.",
        "best": true
      },
      {
        "es": "Furia Fulgurante",
        "en": "Thundering Fury",
        "nota": "+Daño Electro y reacciones; reduce el enfriamiento de su Habilidad.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Báculo de las Arenas Escarlata",
        "en": "Staff of the Scarlet Sands",
        "nota": "Arma insignia: convierte Maestría Elemental en ATQ; sinergia perfecta.",
        "best": true
      },
      {
        "es": "Lanza Alada de Jade Primigenio",
        "en": "Primordial Jade Winged-Spear",
        "nota": "ATQ acumulable y bonificación de daño para su fase agresiva.",
        "best": false
      },
      {
        "es": "Perdición del Dragón",
        "en": "Dragon's Bane",
        "nota": "F2P/4★: +ME y Prob. CRIT contra enemigos afectados por Dendro/Hydro.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Agravación (Quickbloom)",
        "agentes": [
          "Cyno",
          "Nahida",
          "Kuki Shinobu",
          "Sucrose"
        ],
        "best": true
      },
      {
        "nombre": "Aggravate clásico",
        "agentes": [
          "Cyno",
          "Nahida",
          "Fischl",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Activa 'Juicio de Bunemata' con la Definitiva para entrar en su fase de Ataques Normales potenciados; sostenla con Recarga (~130-150%). La Agravación es su mejor reacción.",
    "ficha": {
      "nombreCompleto": "Cyno",
      "faccion": "Sumeru",
      "desc": "General Mahamatra de la Academia de Sumeru, encargado de vigilar la conducta de los eruditos. Serio y justiciero, con afición por los acertijos. Se transforma para desatar rápidos ataques Electro.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/2/27/Cyno_Card.png/revision/latest?cb=20220822101647"
    },
    "nombre": "Cyno",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Lanza",
    "faccion": "Sumeru",
    "version": "3.1"
  },
  {
    "id": "nilou",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Hydro"
    },
    "tiara": {
      "principal": "PV%",
      "alt": "Maestría Elemental"
    },
    "substats": [
      "PV%",
      "Maestría Elemental",
      "Recarga de Energía",
      "Prob. CRIT"
    ],
    "setPrincipal": "Fulgor de Vourukasha",
    "sets": [
      {
        "es": "Fulgor de Vourukasha",
        "en": "Vourukasha's Glow",
        "nota": "+PV y +daño de Habilidad/Definitiva que persiste al recibir golpes; top para Bloom.",
        "best": true
      },
      {
        "es": "Sueño de la Ninfa",
        "en": "Nymph's Dream",
        "nota": "Acumula bonificación de ATQ y Daño Hydro; alternativa clásica de Nilou.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Llave de la Coronación",
        "en": "Key of Khaj-Nisut",
        "nota": "Arma insignia: escala con PV y otorga Maestría Elemental al equipo.",
        "best": true
      },
      {
        "es": "Tajo de Jade Primigenio",
        "en": "Primordial Jade Cutter",
        "nota": "+PV y Prob. CRIT; suma vida máxima con crítico.",
        "best": false
      },
      {
        "es": "Luz de Luna de Xiphos",
        "en": "Xiphos' Moonlight",
        "nota": "F2P/4★: +Maestría Elemental y energía; barata y muy útil para Bloom.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Bloom / Hyperbloom Nilou",
        "agentes": [
          "Nilou",
          "Nahida",
          "Kokomi",
          "Kuki Shinobu"
        ],
        "best": true
      },
      {
        "nombre": "Nilou Bloom con Yelan",
        "agentes": [
          "Nilou",
          "Nahida",
          "Yelan",
          "Baizhu"
        ],
        "best": false
      }
    ],
    "consejo": "En equipos SOLO Hydro+Dendro activa 'Bendición de la Danza Nueva', que sobrecarga las Floraciones. Prioriza PV% en todo y suma Maestría Elemental; el crítico no le hace falta.",
    "ficha": {
      "nombreCompleto": "Nilou",
      "faccion": "Sumeru",
      "desc": "Estrella danzante del Teatro Zubayr de Sumeru, célebre por su gracia sobre el escenario. Dulce y algo tímida fuera de él. Su juego se centra en potenciar la reacción de Floración con equipos puros de Hydro y Dendro.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/6/67/Nilou_Card.png/revision/latest?cb=20220822101649"
    },
    "nombre": "Nilou",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Espada",
    "faccion": "Sumeru",
    "version": "3.1"
  },
  {
    "id": "layla",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Cryo"
    },
    "tiara": {
      "principal": "PV%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "PV%",
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Tenacidad de los Milelith",
    "sets": [
      {
        "es": "Tenacidad de los Milelith",
        "en": "Tenacity of the Millelith",
        "nota": "Escala con PV y su Habilidad da +20% ATQ al equipo con escudo activo.",
        "best": true
      },
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "+20% ATQ al equipo tras su Definitiva si la usas como apoyo Cryo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Llave de la Coronación",
        "en": "Key of Khaj-Nisut",
        "nota": "Arma insignia por PV; refuerza escudo y da ME al equipo.",
        "best": true
      },
      {
        "es": "Espada Sacrificial",
        "en": "Sacrificial Sword",
        "nota": "Reinicia su Habilidad para mantener el escudo casi permanente.",
        "best": false
      },
      {
        "es": "Espada de Favonio",
        "en": "Favonius Sword",
        "nota": "F2P/4★: partículas de energía para sostener escudo y Definitiva.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Escudo + aplicación Cryo",
        "agentes": [
          "Layla",
          "Ayaka",
          "Kokomi",
          "Shenhe"
        ],
        "best": true
      },
      {
        "nombre": "Escudo universal",
        "agentes": [
          "Layla",
          "Raiden Shogun",
          "Xiangling",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Su escudo escala con PV máxima y sus estrellas disparan proyectiles Cryo constantes; constrúyela con PV% y algo de Recarga. Es una escudera cómoda y aplicadora de Cryo secundaria.",
    "ficha": {
      "nombreCompleto": "Layla",
      "faccion": "Sumeru",
      "desc": "Estudiante de teorética estelar de Rtawahist, en la Academia de Sumeru, siempre falta de sueño. Su otro yo sonámbulo termina sus trabajos. Genera un escudo resistente y ataca con estrellas Cryo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/8/82/Layla_Card.png/revision/latest?cb=20220926101307"
    },
    "nombre": "Layla",
    "rareza": "4",
    "elemento": "Cryo",
    "arma": "Espada",
    "faccion": "Sumeru",
    "version": "3.2"
  },
  {
    "id": "nahida",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Daño Dendro"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Maestría Elemental",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%"
    ],
    "setPrincipal": "Sueños Áureos",
    "sets": [
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "+ME y +ATQ; maximiza su daño personal en equipos multielemento.",
        "best": true
      },
      {
        "es": "Recuerdos del Bosque",
        "en": "Deepwood Memories",
        "nota": "Reduce la RES Dendro enemiga; mejor como apoyo para el equipo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Sueños de las Mil Noches",
        "en": "A Thousand Floating Dreams",
        "nota": "Arma insignia: gran Maestría Elemental y buffo de ME al equipo.",
        "best": true
      },
      {
        "es": "Memorias de Sacrificios",
        "en": "Sacrificial Fragments",
        "nota": "Reinicia su Habilidad para más control y aplicación de Dendro.",
        "best": false
      },
      {
        "es": "Carta Náutica",
        "en": "Mappa Mare",
        "nota": "F2P/4★: +Maestría Elemental y bono de daño tras reaccionar; excelente y barato.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hyperbloom",
        "agentes": [
          "Nahida",
          "Xingqiu",
          "Kuki Shinobu",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Agravación / Quicken",
        "agentes": [
          "Nahida",
          "Cyno",
          "Fischl",
          "Yae Miko"
        ],
        "best": false
      }
    ],
    "consejo": "Su Habilidad marca hasta 8 enemigos y aplica Dendro constante desde fuera de campo; sube ME (hasta ~1000 en apoyo). Su Definitiva usa la ME del equipo para potenciar a los personajes marcados.",
    "ficha": {
      "nombreCompleto": "Nahida (Buer / Lesser Lord Kusanali)",
      "faccion": "Sumeru",
      "desc": "La Arconte Dendro y Dios de la Sabiduría de Sumeru, la más joven de los Arcontes. Bajo su apariencia infantil esconde una inteligencia inmensa. Aplica Dendro sin igual y es núcleo de casi todo equipo de reacciones.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Nahida_Card.png/revision/latest?cb=20241007221505"
    },
    "nombre": "Nahida",
    "rareza": "5",
    "elemento": "Dendro",
    "arma": "Catalizador",
    "faccion": "Sumeru",
    "version": "3.2"
  },
  {
    "id": "faruzan",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Anemo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%"
    ],
    "setPrincipal": "Ritual Antiguo de la Nobleza",
    "sets": [
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "+20% ATQ al equipo tras su Definitiva; el apoyo más buscado para su rol buffer.",
        "best": true
      },
      {
        "es": "Cazador Esmeralda",
        "en": "Viridescent Venerer",
        "nota": "Reduce la RES Anemo/del elemento difundido; alternativa si difunde.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Elegía del Final",
        "en": "Elegy for the End",
        "nota": "Recarga, +ME y +ATQ para todo el equipo; arma soñada para Faruzan.",
        "best": true
      },
      {
        "es": "Arco Sacrificial",
        "en": "Sacrificial Bow",
        "nota": "Reinicia su Habilidad para colocar antes el buffo Anemo.",
        "best": false
      },
      {
        "es": "Arco de Guerra de Favonio",
        "en": "Favonius Warbow",
        "nota": "F2P/4★: Prob. CRIT y partículas de energía; resuelve su hambre de Recarga.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Buffer Anemo (Vagabundo)",
        "agentes": [
          "Vagabundo",
          "Faruzan",
          "Bennett",
          "Yelan"
        ],
        "best": true
      },
      {
        "nombre": "Apoyo Anemo universal",
        "agentes": [
          "Xiao",
          "Faruzan",
          "Zhongli",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Su Definitiva reduce la RES Anemo enemiga y da un enorme bonus de Daño Anemo a los DPS de ese elemento. Necesita mucha Recarga (~150-200%) y algo de crítico; es la mejor apoyo para Vagabundo y Xiao.",
    "ficha": {
      "nombreCompleto": "Faruzan",
      "faccion": "Sumeru",
      "desc": "Investigadora de la casa Haravatat de la Academia que despertó tras un siglo sellada en unas ruinas. Genio despistado atrapado en un mundo que ya no reconoce. Es la mejor potenciadora de daño Anemo del juego.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/7/77/Faruzan_Card.png/revision/latest?cb=20231221115702"
    },
    "nombre": "Faruzan",
    "rareza": "4",
    "elemento": "Anemo",
    "arma": "Arco",
    "faccion": "Sumeru",
    "version": "3.3"
  },
  {
    "id": "vagabundo",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Anemo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Crónicas del Pabellón del Desierto",
    "sets": [
      {
        "es": "Crónicas del Pabellón del Desierto",
        "en": "Desert Pavilion Chronicle",
        "nota": "+Daño Anemo y potencia Ataques Normales/Cargados; su mejor conjunto de DPS.",
        "best": true
      },
      {
        "es": "Farándula del Errante",
        "en": "Wanderer's Troupe",
        "nota": "+ME y daño de Ataque Cargado; alternativa si buscas reacciones de Difusión.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Reminiscencia de Tulaytullah",
        "en": "Tulaytullah's Remembrance",
        "nota": "Arma insignia: acumula un enorme daño de Ataque Normal mientras está en campo.",
        "best": true
      },
      {
        "es": "Sueños de las Mil Noches",
        "en": "A Thousand Floating Dreams",
        "nota": "Gran Maestría Elemental para orientarlo hacia Difusión.",
        "best": false
      },
      {
        "es": "Perla Solar",
        "en": "Solar Pearl",
        "nota": "F2P/4★: +daño de Ataque Normal y Habilidad/Definitiva con buena Prob. CRIT.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Anemo",
        "agentes": [
          "Vagabundo",
          "Faruzan",
          "Bennett",
          "Yelan"
        ],
        "best": true
      },
      {
        "nombre": "Difusión Electro",
        "agentes": [
          "Vagabundo",
          "Faruzan",
          "Fischl",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Tras usar su Habilidad entra en estado de vuelo y ataca desde el aire con Ataques Normales; gestiona los 'Puntos Kūgo' para no caer. Emparéjalo siempre con Faruzan y Bennett para su daño máximo.",
    "ficha": {
      "nombreCompleto": "Vagabundo (Scaramouche / Wanderer)",
      "faccion": "Sumeru (ex-Fatui)",
      "desc": "Antiguo Sexto de los Once Heraldos Fatui, la marioneta creada por Raiden Ei que renunció a su pasado. Tras reescribir su historia sirve ahora en Sumeru. DPS Anemo que combate flotando en el aire.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Wanderer_Card.png/revision/latest?cb=20221207032514"
    },
    "nombre": "Vagabundo",
    "rareza": "5",
    "elemento": "Anemo",
    "arma": "Catalizador",
    "faccion": "Sumeru (ex-Fatui)",
    "version": "3.3"
  },
  {
    "id": "alhaitham",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Dendro",
      "alt": "Maestría Elemental"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "Maestría Elemental",
      "ATQ%"
    ],
    "setPrincipal": "Sueños Áureos",
    "sets": [
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "+ME y +ATQ; su mejor conjunto de daño personal en equipos multielemento.",
        "best": true
      },
      {
        "es": "Recuerdos del Bosque",
        "en": "Deepwood Memories",
        "nota": "Reduce la RES Dendro; útil si nadie más lleva el efecto en el equipo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Luz de la Incisión Foliar",
        "en": "Light of Foliar Incision",
        "nota": "Arma insignia: gran Prob. CRIT y suma ME al daño de sus golpes.",
        "best": true
      },
      {
        "es": "Filo de la Verdad Errante",
        "en": "Wolf-Fang",
        "nota": "Bonificación de daño de Habilidad y Prob. CRIT como alternativa premium.",
        "best": false
      },
      {
        "es": "Luz de Luna de Xiphos",
        "en": "Xiphos' Moonlight",
        "nota": "F2P/4★: +Maestría Elemental y Recarga; la mejor opción económica.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Spread / Quicken",
        "agentes": [
          "Alhaitham",
          "Nahida",
          "Yae Miko",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Hyperbloom",
        "agentes": [
          "Alhaitham",
          "Nahida",
          "Xingqiu",
          "Kuki Shinobu"
        ],
        "best": false
      }
    ],
    "consejo": "Su daño escala con Maestría Elemental y ataques normales potenciados por 'Espejos de Cristal-Quimera'. Mezcla ME con Prob./Daño CRIT (arma insignia lo facilita) y acompáñalo de Nahida para Dendro constante.",
    "ficha": {
      "nombreCompleto": "Alhaitham",
      "faccion": "Sumeru",
      "desc": "Escriba de la Academia de Sumeru, lógico e independiente, prefiere el conocimiento a los cargos de poder. Combate con una espada que proyecta espejos de luz Dendro para desatar rápidos ataques.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/7/70/Alhaitham_Card.png/revision/latest?cb=20221209042646"
    },
    "nombre": "Alhaitham",
    "rareza": "5",
    "elemento": "Dendro",
    "arma": "Espada",
    "faccion": "Sumeru",
    "version": "3.4"
  },
  {
    "id": "yaoyao",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Dendro"
    },
    "tiara": {
      "principal": "Bonificación de Curación",
      "alt": "PV%"
    },
    "substats": [
      "PV%",
      "Recarga de Energía",
      "Maestría Elemental",
      "Prob. CRIT"
    ],
    "setPrincipal": "Recuerdos del Bosque",
    "sets": [
      {
        "es": "Recuerdos del Bosque",
        "en": "Deepwood Memories",
        "nota": "Reduce la RES Dendro enemiga mientras cura y aplica Dendro; su mejor rol.",
        "best": true
      },
      {
        "es": "Fulgor de Vourukasha",
        "en": "Vourukasha's Glow",
        "nota": "+PV y daño de Habilidad si la usas como aplicadora ofensiva de Dendro.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Perforaluna",
        "en": "Moonpiercer",
        "nota": "F2P/4★: +Maestría Elemental (crafteable); encaja perfecto con su kit Dendro.",
        "best": true
      },
      {
        "es": "Lanza de Favonio",
        "en": "Favonius Lance",
        "nota": "Partículas de energía para mantener su Definitiva siempre lista.",
        "best": false
      },
      {
        "es": "Borla Negra",
        "en": "Black Tassel",
        "nota": "F2P/4★: +48% PV, potencia curación y daño de sus Yueguis.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hyperbloom con curación",
        "agentes": [
          "Yaoyao",
          "Nahida",
          "Xingqiu",
          "Kuki Shinobu"
        ],
        "best": true
      },
      {
        "nombre": "Sanadora Dendro",
        "agentes": [
          "Yaoyao",
          "Alhaitham",
          "Fischl",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Lanza ranas 'Yuegui' que curan según su PV máxima y aplican Dendro constante fuera de campo; ideal como sanadora que además habilita reacciones. Constrúyela con PV% y suficiente Recarga.",
    "ficha": {
      "nombreCompleto": "Yaoyao",
      "faccion": "Liyue",
      "desc": "Joven discípula de la adepta Yaksha 'Cloud Retainer' y protegida de Ganyu, de gran corazón y siempre pendiente de los demás. Cura al equipo con sus ranas mecánicas Yuegui mientras aplica Dendro.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/2/24/Yaoyao_Card.png/revision/latest?cb=20221209042817"
    },
    "nombre": "Yaoyao",
    "rareza": "4",
    "elemento": "Dendro",
    "arma": "Lanza",
    "faccion": "Liyue",
    "version": "3.4"
  },
  {
    "id": "dehya",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "PV%",
      "ATQ%"
    ],
    "setPrincipal": "Fulgor de Vourukasha",
    "sets": [
      {
        "es": "Fulgor de Vourukasha",
        "en": "Vourukasha's Glow",
        "nota": "+PV y +daño de Habilidad/Definitiva que aguanta los golpes; su mejor conjunto.",
        "best": true
      },
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "+Daño Pyro y reacciones; opción si la orientas a Vaporizar/Derretir.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Emblema del Mar de Juncos",
        "en": "Beacon of the Reed Sea",
        "nota": "Arma insignia: gran ATQ y daño tras recibir o infligir golpes; hecha para ella.",
        "best": true
      },
      {
        "es": "Espina Serpentina",
        "en": "Serpent Spine",
        "nota": "Bonificación de daño acumulable con buena Prob. CRIT (pase de batalla).",
        "best": false
      },
      {
        "es": "Arcaico Prototipo",
        "en": "Prototype Archaic",
        "nota": "F2P/4★: +ATQ y daño de área crafteable; opción económica sólida.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Sub-DPS Pyro / Aguante",
        "agentes": [
          "Dehya",
          "Nilou",
          "Nahida",
          "Kokomi"
        ],
        "best": true
      },
      {
        "nombre": "Vaporizar",
        "agentes": [
          "Dehya",
          "Xiangling",
          "Xingqiu",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Su campo redirige el daño que recibe el equipo y golpea con Pyro según su PV y ATQ; usa mezcla de PV% y crítico. Brilla como sub-DPS resistente y como habilitadora de PV en equipos de Floración con Nilou.",
    "ficha": {
      "nombreCompleto": "Dehya",
      "faccion": "Sumeru",
      "desc": "Mercenaria de los Eremitas del desierto de Sumeru, apodada 'la Leona Ardiente de las Dunas'. Leal y protectora con quienes considera familia. Combate como guardiana Pyro que absorbe daño por el equipo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/d/de/Dehya_Card.png/revision/latest?cb=20230116100745"
    },
    "nombre": "Dehya",
    "rareza": "5",
    "elemento": "Pyro",
    "arma": "Mandoble",
    "faccion": "Sumeru",
    "version": "3.5"
  },
  {
    "id": "mika",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Cryo"
    },
    "tiara": {
      "principal": "Bonificación de Curación",
      "alt": "PV%"
    },
    "substats": [
      "Recarga de Energía",
      "PV%",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Ritual Antiguo de la Nobleza",
    "sets": [
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "+20% ATQ al equipo tras su Definitiva; el mejor apoyo para su rol de buffer/sanador.",
        "best": true
      },
      {
        "es": "Almeja Tintórea del Océano",
        "en": "Ocean-Hued Clam",
        "nota": "Convierte su curación en daño extra de área; opción divertida al curar mucho.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lanza de Favonio",
        "en": "Favonius Lance",
        "nota": "Partículas de energía para sostener su ciclo de curación y buffo.",
        "best": true
      },
      {
        "es": "Perforaluna",
        "en": "Moonpiercer",
        "nota": "Da PV y Maestría Elemental; utilidad extra crafteable.",
        "best": false
      },
      {
        "es": "Borla Negra",
        "en": "Black Tassel",
        "nota": "F2P/4★: +48% PV, ya que su curación escala con la Vida máxima.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Buffo de Físico / Ataque Normal",
        "agentes": [
          "Mika",
          "Eula",
          "Raiden Shogun",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Apoyo Cryo",
        "agentes": [
          "Mika",
          "Ayaka",
          "Shenhe",
          "Kokomi"
        ],
        "best": false
      }
    ],
    "consejo": "Cura según su PV y aumenta la Velocidad de Ataque y el daño Físico de un DPS de ataque normal como Eula. Constrúyelo con Recarga de Energía y PV%; es el compañero ideal de los DPS físicos.",
    "ficha": {
      "nombreCompleto": "Mika",
      "faccion": "Mondstadt",
      "desc": "Miembro de la Orden de Caballeros de Favonio y ayudante topógrafo del equipo de reconocimiento. Meticuloso y algo nervioso, admira a Eula. Cura al equipo y potencia la velocidad de ataque de los DPS físicos.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Mika_Card.png/revision/latest?cb=20230116101322"
    },
    "nombre": "Mika",
    "rareza": "4",
    "elemento": "Cryo",
    "arma": "Lanza",
    "faccion": "Mondstadt",
    "version": "3.5"
  },
  {
    "id": "baizhu",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Dendro"
    },
    "tiara": {
      "principal": "PV%",
      "alt": "Bonificación de Curación"
    },
    "substats": [
      "PV%",
      "Recarga de Energía",
      "Maestría Elemental",
      "Prob. CRIT"
    ],
    "setPrincipal": "Recuerdos del Bosque Profundo",
    "sets": [
      {
        "es": "Recuerdos del Bosque Profundo",
        "en": "Deepwood Memories",
        "nota": "Reduce la RES Dendro del enemigo; ideal si Baizhu es el aplicador Dendro del equipo.",
        "best": true
      },
      {
        "es": "Tenacidad de la Milelith",
        "en": "Tenacity of the Millelith",
        "nota": "Escudo y buff de ATQ al equipo; buena opción de soporte si otro lleva Deepwood.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Esplendor de Jadefall",
        "en": "Jadefall's Splendor",
        "nota": "Arma insignia, escala con PV y potencia curación y daño Dendro del equipo.",
        "best": true
      },
      {
        "es": "Jade Sacrificial",
        "en": "Sacrificial Jade",
        "nota": "Da PV% y Maestría fuera de campo; excelente para builds de cura/apoyo.",
        "best": false
      },
      {
        "es": "Prototipo: Ámbar",
        "en": "Prototype Amber",
        "nota": "F2P/4★ forjable, escala con PV y regenera energía y cura.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hyperbloom",
        "agentes": [
          "Baizhu",
          "Nahida",
          "Xingqiu",
          "Raiden Shogun"
        ],
        "best": true
      },
      {
        "nombre": "Escudo y Cura Dendro",
        "agentes": [
          "Baizhu",
          "Tighnari",
          "Yae Miko",
          "Fischl"
        ],
        "best": false
      }
    ],
    "consejo": "Prioriza PV% en todas las piezas y suficiente Recarga para mantener su Ráfaga activa; su curación y el escudo escalan con Puntos de Vida.",
    "ficha": {
      "nombreCompleto": "Baizhu",
      "faccion": "Liyue - Farmacia Bubu",
      "desc": "Médico y dueño de la Farmacia Bubu en Liyue, siempre acompañado por su serpiente blanca Changsheng. De salud frágil, dedica su vida a la búsqueda de curas y a cuidar de los demás. Como personaje Dendro, es un potente sanador y aplicador elemental.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/ae/Baizhu_Card.png/revision/latest?cb=20230224215334"
    },
    "nombre": "Baizhu",
    "rareza": "5",
    "elemento": "Dendro",
    "arma": "Catalizador",
    "faccion": "Liyue - Farmacia Bubu",
    "version": "3.6"
  },
  {
    "id": "kaveh",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Dendro",
      "alt": "Maestría Elemental"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Maestría Elemental",
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía"
    ],
    "setPrincipal": "Recuerdos del Bosque Profundo",
    "sets": [
      {
        "es": "Recuerdos del Bosque Profundo",
        "en": "Deepwood Memories",
        "nota": "Reduce la RES Dendro; lo mejor cuando Kaveh es el único aplicador Dendro on-field.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Gran cantidad de Maestría Elemental para potenciar las reacciones de Floración.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Makhaira Acuamarina",
        "en": "Makhaira Aquamarine",
        "nota": "4★ de evento, Maestría Elemental muy alta; prácticamente el arma ideal para Kaveh.",
        "best": true
      },
      {
        "es": "Katsuragikiri Nagamasa",
        "en": "Katsuragikiri Nagamasa",
        "nota": "Forjable, aporta Maestría y Recarga de Energía; excelente valor F2P.",
        "best": false
      },
      {
        "es": "Prototipo: Arcaico",
        "en": "Prototype Archaic",
        "nota": "F2P/4★ forjable de ATQ si buscas más daño directo de golpes.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hyperfloración",
        "agentes": [
          "Kaveh",
          "Nahida",
          "Xingqiu",
          "Kuki Shinobu"
        ],
        "best": true
      },
      {
        "nombre": "Floración",
        "agentes": [
          "Kaveh",
          "Nilou",
          "Yaoyao",
          "Kokomi"
        ],
        "best": false
      }
    ],
    "consejo": "Kaveh escala con Maestría Elemental: llénalo de ME y conviértelo en el conductor on-field de las semillas de Floración para detonarlas con reacciones.",
    "ficha": {
      "nombreCompleto": "Kaveh",
      "faccion": "Sumeru",
      "desc": "Arquitecto de renombre en Sumeru, diseñador del Palacio de Alcazarzaray. De espíritu idealista y sensible, arrastra deudas y comparte casa con Alhaitham. Como espadón Dendro brilla como conductor de equipos de Floración.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/3/30/Kaveh_Card.png/revision/latest?cb=20230224215318"
    },
    "nombre": "Kaveh",
    "rareza": "4",
    "elemento": "Dendro",
    "arma": "Mandoble",
    "faccion": "Sumeru",
    "version": "3.6"
  },
  {
    "id": "kirara",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Dendro"
    },
    "tiara": {
      "principal": "PV%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "PV%",
      "Recarga de Energía",
      "Maestría Elemental",
      "Prob. CRIT"
    ],
    "setPrincipal": "Recuerdos del Bosque Profundo",
    "sets": [
      {
        "es": "Recuerdos del Bosque Profundo",
        "en": "Deepwood Memories",
        "nota": "Reduce la RES Dendro del enemigo mientras escuda; su mejor set como soporte Dendro.",
        "best": true
      },
      {
        "es": "Tenacidad de la Milelith",
        "en": "Tenacity of the Millelith",
        "nota": "Refuerza escudo y da buff de ATQ al equipo si otro lleva Deepwood.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "Genera partículas de energía para todo el equipo; ideal para su rol de soporte.",
        "best": true
      },
      {
        "es": "Llave de la Coronación",
        "en": "Key of Khaj-Nisut",
        "nota": "Escala con PV y refuerza el escudo y la aplicación Dendro; máximo PV personal.",
        "best": false
      },
      {
        "es": "Espada Sacrificial",
        "en": "Sacrificial Sword",
        "nota": "F2P/4★, resetea la habilidad para más escudo y aplicación Dendro.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Floración de Nilou",
        "agentes": [
          "Kirara",
          "Nilou",
          "Nahida",
          "Xingqiu"
        ],
        "best": true
      },
      {
        "nombre": "Hyperfloración con Escudo",
        "agentes": [
          "Kirara",
          "Nahida",
          "Xingqiu",
          "Raiden Shogun"
        ],
        "best": false
      }
    ],
    "consejo": "Constrúyela con PV% para maximizar escudo y aplica Dendro con su carga; añade Recarga suficiente para su Ráfaga de Zumbido.",
    "ficha": {
      "nombreCompleto": "Kirara",
      "faccion": "Inazuma - Komaniya Express",
      "desc": "Repartidora de la empresa de mensajería Komaniya Express en Inazuma, es un youkai nekomata capaz de transformarse. Alegre y entregada a su trabajo, entrega paquetes por todo el país. Como espada Dendro cumple un rol de escudo y soporte.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Kirara_Card.png/revision/latest?cb=20230410061235"
    },
    "nombre": "Kirara",
    "rareza": "4",
    "elemento": "Dendro",
    "arma": "Espada",
    "faccion": "Inazuma - Komaniya Express",
    "version": "3.7"
  },
  {
    "id": "freminet",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Nómada del Invierno",
    "sets": [
      {
        "es": "Nómada del Invierno",
        "en": "Blizzard Strayer",
        "nota": "En equipos de Congelación garantiza enormes Prob. y Daño CRIT contra enemigos congelados.",
        "best": true
      },
      {
        "es": "Reminiscencia de la Purificación",
        "en": "Shimenawa's Reminiscence",
        "nota": "Buff de daño de habilidad; alternativa para builds de Fusión inversa (Melt).",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Báculo de Homa",
        "en": "Staff of Homa",
        "nota": "Lanza 5★ con Daño CRIT y bonus por PV; el mejor pico de daño para Freminet.",
        "best": true
      },
      {
        "es": "Punta de Astas",
        "en": "Deathmatch",
        "nota": "4★ de Pase de Gema con ATQ% y Prob. CRIT; sólida y accesible.",
        "best": false
      },
      {
        "es": "Lanza del Dragón Blanco",
        "en": "Dragonspine Spear",
        "nota": "F2P/4★ forjable, muy buen valor en equipos Cryo por su efecto de escarcha.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Congelación",
        "agentes": [
          "Freminet",
          "Kokomi",
          "Kaede Kazuha",
          "Charlotte"
        ],
        "best": true
      },
      {
        "nombre": "Fusión Inversa (Melt)",
        "agentes": [
          "Freminet",
          "Bennett",
          "Kaede Kazuha",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Acumula su habilidad hasta Pres alto para el mayor multiplicador; en Congelación aprovecha Nómada del Invierno para no necesitar Prob. CRIT en la tiara.",
    "ficha": {
      "nombreCompleto": "Freminet",
      "faccion": "Fontaine - Grupo de buceo",
      "desc": "Buzo callado y solitario de Fontaine, medio hermano de Lyney y Lynette dentro de la Casa de la Cuerda. Prefiere la compañía de su pingüino mecánico Pers antes que la de la gente. Como lanza Cryo funciona de DPS on-field en equipos de Congelación o Fusión.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/3/3c/Freminet_Card.png/revision/latest?cb=20230703103017"
    },
    "nombre": "Freminet",
    "rareza": "4",
    "elemento": "Cryo",
    "arma": "Lanza",
    "faccion": "Fontaine - Grupo de buceo",
    "version": "4.0"
  },
  {
    "id": "lyney",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "La Compañía Dorada",
    "sets": [
      {
        "es": "La Compañía Dorada",
        "en": "Golden Troupe",
        "nota": "Aumenta enormemente el daño de habilidad elemental, base de sus disparos cargados Pyro.",
        "best": true
      },
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Bonus de Daño Pyro y de reacciones; ideal en equipos de Vaporización.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "El Primer Gran Truco de Magia",
        "en": "The First Great Magic",
        "nota": "Arco insignia de Lyney; Daño CRIT altísimo y bonus de ATQ; su mejor arma.",
        "best": true
      },
      {
        "es": "Aqua Simulacra",
        "en": "Aqua Simulacra",
        "nota": "5★ con PV y Daño CRIT enorme cuando hay enemigos cerca; gran alternativa.",
        "best": false
      },
      {
        "es": "Prototipo: Creciente",
        "en": "Prototype Crescent",
        "nota": "F2P/4★ forjable; tras acertar en punto débil dispara con mucho ATQ.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Mono Pyro",
        "agentes": [
          "Lyney",
          "Bennett",
          "Kaede Kazuha",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Vaporización",
        "agentes": [
          "Lyney",
          "Yelan",
          "Bennett",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Necesita un escudo o interrupción reducida (Zhongli) para cargar sus disparos con seguridad; apunta a puntos débiles y mantén su HP alto para el bonus del arco insignia.",
    "ficha": {
      "nombreCompleto": "Lyney",
      "faccion": "Fontaine - Casa de la Cuerda",
      "desc": "Célebre mago del escenario en Fontaine y hermano mayor de Lynette y Freminet. Elegante y encantador, oculta bajo sus trucos una labor al servicio de Focalors. Como arco Pyro es un potente DPS on-field de disparos cargados.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/8/86/Lyney_Card.png/revision/latest?cb=20230703100649"
    },
    "nombre": "Lyney",
    "rareza": "5",
    "elemento": "Pyro",
    "arma": "Arco",
    "faccion": "Fontaine - Casa de la Cuerda",
    "version": "4.0"
  },
  {
    "id": "lynette",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Anemo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "ATQ%",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Cazador Verdinegro",
    "sets": [
      {
        "es": "Cazador Verdinegro",
        "en": "Viridescent Venerer",
        "nota": "Reduce la RES elemental del enemigo con torbellino; el mejor set de soporte Anemo.",
        "best": true
      },
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "Más Recarga y daño de Ráfaga si quieres una build de sub-DPS con burst.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "Genera partículas para el equipo; la mejor opción de soporte y batería.",
        "best": true
      },
      {
        "es": "Luz de Luna de Xiphos",
        "en": "Xiphos' Moonlight",
        "nota": "Maestría y Recarga que se comparten como energía; excelente para su rol.",
        "best": false
      },
      {
        "es": "Espada Sacrificial",
        "en": "Sacrificial Sword",
        "nota": "F2P/4★; resetea su habilidad para más aplicación de torbellino Anemo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporización Pyro",
        "agentes": [
          "Lyney",
          "Lynette",
          "Bennett",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Soporte Anemo genérico",
        "agentes": [
          "Lynette",
          "Hu Tao",
          "Yelan",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Su mayor valor es agrupar enemigos y romper resistencias con Cazador Verdinegro; prioriza Recarga para su Ráfaga y úsala para absorber elementos.",
    "ficha": {
      "nombreCompleto": "Lynette",
      "faccion": "Fontaine - Casa de la Cuerda",
      "desc": "Asistente de mago y hermana melliza de Lyney, de temperamento sereno y reservado. Aparece imperturbable en el escenario mientras ejecuta trucos con precisión. Como espada Anemo es una soporte que agrupa enemigos y reduce su resistencia elemental.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/e/e4/Lynette_Card.png/revision/latest?cb=20230703101903"
    },
    "nombre": "Lynette",
    "rareza": "4",
    "elemento": "Anemo",
    "arma": "Espada",
    "faccion": "Fontaine - Casa de la Cuerda",
    "version": "4.0"
  },
  {
    "id": "neuvillette",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Hydro",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "PV%",
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía"
    ],
    "setPrincipal": "Cazador Fantasmal",
    "sets": [
      {
        "es": "Cazador Fantasmal",
        "en": "Marechaussee Hunter",
        "nota": "BiS universal: Prob. CRIT al cambiar el PV, perfecto para su ciclo de cargas de PV",
        "best": true
      },
      {
        "es": "Fragmento de la Armonía Fantasiosa",
        "en": "Fragment of Harmonic Whimsy",
        "nota": "Solo con Vínculo de Vida (C6/arma); su 2pz de ATQ% no aporta a un escalador de PV",
        "best": false
      },
      {
        "es": "Fulgor de Vurukasha",
        "en": "Vourukasha's Glow",
        "nota": "Set de PV que mantiene el bonus incluso al recibir daño; alternativa muy estable.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Escrituras del Fluir Sempiterno",
        "en": "Tome of the Eternal Flow",
        "nota": "Catalizador insignia de Neuvillette; PV, Daño CRIT y bonus escalado con Vida.",
        "best": true
      },
      {
        "es": "Sueños de las Mil Noches",
        "en": "A Thousand Floating Dreams",
        "nota": "Maestría y bonus de daño elemental; fuerte alternativa 5★.",
        "best": false
      },
      {
        "es": "Prototipo: Ámbar",
        "en": "Prototype Amber",
        "nota": "F2P/4★ forjable que escala con PV y regenera energía; opción económica.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Hydro",
        "agentes": [
          "Neuvillette",
          "Furina",
          "Kaede Kazuha",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Doble Hydro con Cura",
        "agentes": [
          "Neuvillette",
          "Furina",
          "Jean",
          "Charlotte"
        ],
        "best": false
      }
    ],
    "consejo": "Su ataque cargado escala con PV: apila PV% y busca Prob./Daño CRIT en subestadísticas. Un aplicador Hydro extra (Furina) y agrupamiento Anemo disparan su daño.",
    "ficha": {
      "nombreCompleto": "Neuvillette",
      "faccion": "Fontaine - Corte Suprema",
      "desc": "Juez Supremo de Fontaine, imparte justicia con una autoridad fría y ceremoniosa. En realidad es la reencarnación del Dragón Soberano de las Aguas, señor de la hidrología. Como catalizador Hydro es uno de los mejores DPS on-field del juego, escalando con Puntos de Vida.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/7/76/Neuvillette_Card.png/revision/latest?cb=20230814101543"
    },
    "nombre": "Neuvillette",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Catalizador",
    "faccion": "Fontaine - Corte Suprema",
    "version": "4.1"
  },
  {
    "id": "wriothesley",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Cazador Fantasmal",
    "sets": [
      {
        "es": "Cazador Fantasmal",
        "en": "Marechaussee Hunter",
        "nota": "Su pasiva consume PV, así que activa constantemente el enorme bonus de Prob. CRIT del set.",
        "best": true
      },
      {
        "es": "Nómada del Invierno",
        "en": "Blizzard Strayer",
        "nota": "Alternativa en equipos de Congelación por la Prob. y Daño CRIT garantizados.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Control de Flujo de Efectivo",
        "en": "Cashflow Supervision",
        "nota": "Catalizador insignia; ATQ y bonus de daño que crecen con cambios de PV, perfecto para él.",
        "best": true
      },
      {
        "es": "Sueños de las Mil Noches",
        "en": "A Thousand Floating Dreams",
        "nota": "Maestría y bonus de daño elemental; gran alternativa 5★.",
        "best": false
      },
      {
        "es": "Mappa Mare",
        "en": "Mappa Mare",
        "nota": "F2P/4★ forjable con Maestría y bonus de daño elemental tras reaccionar.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Fusión Inversa (Melt)",
        "agentes": [
          "Wriothesley",
          "Bennett",
          "Kaede Kazuha",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Congelación",
        "agentes": [
          "Wriothesley",
          "Kokomi",
          "Kaede Kazuha",
          "Charlotte"
        ],
        "best": false
      }
    ],
    "consejo": "Mantén su HP por debajo del 50% con su pasiva para el modo mejorado y para activar Cazador Fantasmal; una cura suave (Charlotte) lo mantiene con vida sin sacar el buff.",
    "ficha": {
      "nombreCompleto": "Wriothesley",
      "faccion": "Fontaine - Fortaleza Meropide",
      "desc": "Administrador de la prisión subacuática Fortaleza Meropide en Fontaine. De aire caballeroso pero implacable, gobierna el recinto con sus propias reglas. Como catalizador Cryo pelea con guanteletes, siendo un DPS on-field de golpes rápidos.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/9/94/Wriothesley_Card.png/revision/latest?cb=20230814130334"
    },
    "nombre": "Wriothesley",
    "rareza": "5",
    "elemento": "Cryo",
    "arma": "Catalizador",
    "faccion": "Fontaine - Fortaleza Meropide",
    "version": "4.1"
  },
  {
    "id": "charlotte",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Cryo"
    },
    "tiara": {
      "principal": "Bonificación de Curación",
      "alt": "ATQ%"
    },
    "substats": [
      "Recarga de Energía",
      "ATQ%",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Ritual Antiguo de la Nobleza",
    "sets": [
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "Su Ráfaga otorga +20% de ATQ a todo el equipo; el mejor set de soporte buffer.",
        "best": true
      },
      {
        "es": "Almeja de Tono Marino",
        "en": "Ocean-Hued Clam",
        "nota": "Convierte su curación en daño; buena si quieres que aporte algo de daño extra.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Códice Favonius",
        "en": "Favonius Codex",
        "nota": "Genera partículas de energía para el equipo; ideal para su rol de soporte.",
        "best": true
      },
      {
        "es": "Fragmentos de Sacrificio",
        "en": "Sacrificial Fragments",
        "nota": "Resetea su habilidad para más aplicación Cryo y marcado; sólida alternativa.",
        "best": false
      },
      {
        "es": "Prototipo: Ámbar",
        "en": "Prototype Amber",
        "nota": "F2P/4★ forjable que regenera energía y refuerza la curación del equipo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Sanadora en Congelación",
        "agentes": [
          "Charlotte",
          "Ayaka",
          "Shenhe",
          "Kaede Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Soporte con Buff de ATQ",
        "agentes": [
          "Charlotte",
          "Neuvillette",
          "Furina",
          "Kaede Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Cúrala con ATQ% y Recarga para tener siempre su Ráfaga lista; marca enemigos con su habilidad para curación y aplicación Cryo constante fuera de campo.",
    "ficha": {
      "nombreCompleto": "Charlotte",
      "faccion": "Fontaine - Periódico El Pájaro de Vapor",
      "desc": "Enérgica reportera del periódico El Pájaro de Vapor de Fontaine, siempre en busca de la primicia con su cámara Monsieur Verite. Curiosa e incansable, persigue la verdad allá donde esté. Como catalizador Cryo es una sanadora y soporte que aplica Cryo a distancia.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Charlotte_Card.png/revision/latest?cb=20230925100619"
    },
    "nombre": "Charlotte",
    "rareza": "4",
    "elemento": "Cryo",
    "arma": "Catalizador",
    "faccion": "Fontaine - Periódico El Pájaro de Vapor",
    "version": "4.2"
  },
  {
    "id": "furina",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Hydro",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "PV%",
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía"
    ],
    "setPrincipal": "La Compañía Dorada",
    "sets": [
      {
        "es": "La Compañía Dorada",
        "en": "Golden Troupe",
        "nota": "Potencia el daño de habilidad de sus miembros del salón fuera de campo; BiS de daño.",
        "best": true
      },
      {
        "es": "Cazador Fantasmal",
        "en": "Marechaussee Hunter",
        "nota": "Su PV fluctúa mucho, activando el bonus de Prob. CRIT casi permanente.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Fulgor de las Aguas Calmas",
        "en": "Splendor of Tranquil Waters",
        "nota": "Espada insignia; escala con PV y da Daño CRIT, perfecta para su doble rol.",
        "best": true
      },
      {
        "es": "Llave de la Coronación",
        "en": "Key of Khaj-Nisut",
        "nota": "Gran PV base y bonus de ATQ escalado con Vida; alternativa muy fuerte.",
        "best": false
      },
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "F2P/4★; aporta la Recarga que necesita para mantener su Ráfaga siempre activa.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry con Neuvillette",
        "agentes": [
          "Furina",
          "Neuvillette",
          "Kaede Kazuha",
          "Charlotte"
        ],
        "best": true
      },
      {
        "nombre": "Vaporización",
        "agentes": [
          "Furina",
          "Hu Tao",
          "Yelan",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Constrúyela con PV% ya que tanto su buff de equipo como su daño escalan con Vida; asegura Recarga para su Ráfaga y varía la vida del equipo para maximizar su fervor.",
    "ficha": {
      "nombreCompleto": "Furina",
      "faccion": "Fontaine - Arconte de la Justicia",
      "desc": "La deslumbrante Focalors, Arconte Hidro y regente de Fontaine durante siglos, siempre en el centro del escenario. Tras su fachada teatral esconde una carga y un sacrificio enormes por su pueblo. Como espada Hydro es una de las mejores soportes/buffers del juego, escalando con PV.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/2/27/Furina_Card.png/revision/latest?cb=20230925100151"
    },
    "nombre": "Furina",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Espada",
    "faccion": "Fontaine - Arconte de la Justicia",
    "version": "4.2"
  },
  {
    "id": "chevreuse",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "PV%",
      "alt": "Bonificación de Curación"
    },
    "substats": [
      "PV%",
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Ritual Antiguo de la Nobleza",
    "sets": [
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "Su Ráfaga da +20% de ATQ al equipo, sumándose a su enorme buff de Sobrecarga.",
        "best": true
      },
      {
        "es": "Tenacidad de la Milelith",
        "en": "Tenacity of the Millelith",
        "nota": "Buff de ATQ constante al equipo y algo de PV; alternativa de soporte.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lanza de Favonius",
        "en": "Favonius Lance",
        "nota": "Genera partículas para todo el equipo; la mejor opción para su rol de batería.",
        "best": true
      },
      {
        "es": "Báculo de Homa",
        "en": "Staff of Homa",
        "nota": "Escala con PV y da Daño CRIT si quieres que aporte también algo de daño.",
        "best": false
      },
      {
        "es": "Prototipo: Estrella",
        "en": "Prototype Starglitter",
        "nota": "F2P/4★ forjable con Recarga de Energía; excelente valor para soporte.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Sobrecarga",
        "agentes": [
          "Chevreuse",
          "Raiden Shogun",
          "Fischl",
          "Xiangling"
        ],
        "best": true
      },
      {
        "nombre": "Sobrecarga con Bennett",
        "agentes": [
          "Chevreuse",
          "Hu Tao",
          "Fischl",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Solo funciona su gran buff si el equipo es exclusivamente Pyro y Electro; apila PV% y Recarga, cura y reduce la RES con su habilidad para potenciar la Sobrecarga.",
    "ficha": {
      "nombreCompleto": "Chevreuse",
      "faccion": "Fontaine - Gendarmería Especial",
      "desc": "Oficial de la Gendarmería que vela por los barrios populares de Fontaine con estricto sentido del deber. Seria y protectora, cuida de su familia y de la comunidad. Como lanza Pyro es una soporte y sanadora que potencia enormemente los equipos de Sobrecarga.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/6/65/Chevreuse_Card.png/revision/latest?cb=20231106101142"
    },
    "nombre": "Chevreuse",
    "rareza": "4",
    "elemento": "Pyro",
    "arma": "Lanza",
    "faccion": "Fontaine - Gendarmería Especial",
    "version": "4.3"
  },
  {
    "id": "navia",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Geo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Susurros Nocturnos en el Bosque del Eco",
    "sets": [
      {
        "es": "Susurros Nocturnos en el Bosque del Eco",
        "en": "Nighttime Whispers in the Echoing Woods",
        "nota": "Bonus de ATQ y de Daño Geo tras usar habilidad; set insignia y BiS de Navia.",
        "best": true
      },
      {
        "es": "Final del Gladiador",
        "en": "Gladiator's Finale",
        "nota": "ATQ% simple y fiable; buena alternativa mientras farmeas su set ideal.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Veredicto",
        "en": "Verdict",
        "nota": "Espadón insignia; mucho ATQ y bonus de daño al recolectar fragmentos, hecho para ella.",
        "best": true
      },
      {
        "es": "Faro del Mar de Juncos",
        "en": "Beacon of the Reed Sea",
        "nota": "ATQ% y Prob. CRIT elevadas; gran alternativa 5★ de daño.",
        "best": false
      },
      {
        "es": "Prototipo: Arcaico",
        "en": "Prototype Archaic",
        "nota": "F2P/4★ forjable con ATQ% y buen daño en área; opción económica.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Mono Geo / Cristalizar",
        "agentes": [
          "Navia",
          "Zhongli",
          "Bennett",
          "Kaede Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Doble Geo con Fischl",
        "agentes": [
          "Navia",
          "Chiori",
          "Fischl",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Acumula cargas de Perdigón de Cristal antes de disparar su habilidad para el máximo daño; un aplicador Cristalizar (Zhongli) y Bennett potencian enormemente su explosión Geo.",
    "ficha": {
      "nombreCompleto": "Navia",
      "faccion": "Fontaine - Spina di Rosula",
      "desc": "Elegante y decidida presidenta de la organización Spina di Rosula en Fontaine, con un carácter tan fuerte como amable. Bajo su sombrilla oculta un poderoso cañón de perdigones. Como espadón Geo es una potente DPS de explosiones de daño en área.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/0/09/Navia_Card.png/revision/latest?cb=20231106101023"
    },
    "nombre": "Navia",
    "rareza": "5",
    "elemento": "Geo",
    "arma": "Mandoble",
    "faccion": "Fontaine - Spina di Rosula",
    "version": "4.3"
  },
  {
    "id": "gaming",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Cazador Fantasmal",
    "sets": [
      {
        "es": "Cazador Fantasmal",
        "en": "Marechaussee Hunter",
        "nota": "Su habilidad consume PV, activando el enorme bonus de Prob. CRIT del set.",
        "best": true
      },
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Bonus de Daño Pyro y de Vaporización; alternativa en equipos de Vape.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Espina de Serpiente",
        "en": "Serpent Spine",
        "nota": "4★ de Pase de Batalla con Prob. CRIT; multiplicador de daño creciente ideal para Gaming.",
        "best": true
      },
      {
        "es": "Veredicto",
        "en": "Verdict",
        "nota": "Espadón 5★ con mucho ATQ y Prob. CRIT; máxima opción de daño si la tienes.",
        "best": false
      },
      {
        "es": "Prototipo: Arcaico",
        "en": "Prototype Archaic",
        "nota": "F2P/4★ forjable con ATQ% y daño en área; alternativa económica.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporización con Plunge",
        "agentes": [
          "Gaming",
          "Bennett",
          "Xingqiu",
          "Kaede Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Mono Pyro",
        "agentes": [
          "Gaming",
          "Bennett",
          "Xiangling",
          "Kaede Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Su daño viene de los ataques descendentes (plunge): mantén su ciclo de habilidad y Vaporiza con un aplicador Hydro (Xingqiu) mientras Bennett aporta ATQ y curación.",
    "ficha": {
      "nombreCompleto": "Gaming",
      "faccion": "Liyue",
      "desc": "Joven repartidor y bailarín de la danza del león en Liyue, lleno de energía y optimismo. Sueña con abrir su propio negocio y honrar las tradiciones festivas de su ciudad. Como espadón Pyro es un DPS on-field basado en ataques descendentes.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Gaming_Card.png/revision/latest?cb=20231218100644"
    },
    "nombre": "Gaming",
    "rareza": "4",
    "elemento": "Pyro",
    "arma": "Mandoble",
    "faccion": "Liyue",
    "version": "4.4"
  },
  {
    "id": "xianyun",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Anemo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Émbolo del Bosque de Musgo",
    "sets": [
      {
        "es": "Émbolo del Bosque de Musgo",
        "en": "Viridescent Venerer",
        "nota": "Reduce la resistencia elemental del enemigo y potencia el Torbellino; la mejor opción como soporte.",
        "best": true
      },
      {
        "es": "El Más Allá Bermellón",
        "en": "Vermillion Hereafter",
        "nota": "Para maximizar su propio daño de golpe descendente en equipos ofensivos.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Canto Resonante de la Grulla",
        "en": "Crane's Echoing Call",
        "nota": "Arma insignia: potencia el golpe descendente de todo el equipo.",
        "best": true
      },
      {
        "es": "Ojo del Juramento",
        "en": "Oathsworn Eye",
        "nota": "Buena Recarga de Energía y ATQ% para rotar su Estallido.",
        "best": false
      },
      {
        "es": "Ámbar Prototípico",
        "en": "Prototype Amber",
        "nota": "F2P/4★: forjable, regenera energía y refuerza la curación del equipo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Golpe Descendente (Xiao)",
        "agentes": [
          "Xianyun",
          "Xiao",
          "Faruzan",
          "Furina"
        ],
        "best": true
      },
      {
        "nombre": "Soporte y Curación",
        "agentes": [
          "Xianyun",
          "Neuvillette",
          "Furina",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Su curación y el bono de golpe descendente escalan con su ATQ, así que prioriza ATQ y algo de Recarga para mantener su Estallido.",
    "ficha": {
      "nombreCompleto": "Xianyun \"Retenedora de Nubes\"",
      "faccion": "Liyue",
      "desc": "Una adepta de Liyue que adopta forma humana. Maestra de las artes mecánicas y grande entre los Iluminados, ayuda a los mortales con su ingenio y su presencia serena.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Character_Xianyun_Full_Wish.png/revision/latest?cb=20240202103809"
    },
    "nombre": "Xianyun",
    "rareza": "5",
    "elemento": "Anemo",
    "arma": "Catalizador",
    "faccion": "Liyue",
    "version": "4.4"
  },
  {
    "id": "chiori",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Geo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Compañía Dorada",
    "sets": [
      {
        "es": "Compañía Dorada",
        "en": "Golden Troupe",
        "nota": "Dispara enormemente el daño de Habilidad Elemental fuera de campo; su mejor conjunto.",
        "best": true
      },
      {
        "es": "Susurros Nocturnos en el Bosque de los Ecos",
        "en": "Nighttime Whispers in the Echoing Woods",
        "nota": "Bono de Daño Geo y ATQ% tras usar la Habilidad; sólida alternativa.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Cortatelones de Urakusai",
        "en": "Cortatelones de Urakusai",
        "nota": "Arma insignia: Prob. CRIT y bono de daño de Habilidad/Ataque Normal.",
        "best": true
      },
      {
        "es": "Haran Geppaku Futsu",
        "en": "Haran Geppaku Futsu",
        "nota": "Alto ATQ y bono de daño elemental; excelente 5★ alternativa.",
        "best": false
      },
      {
        "es": "Prototipo Rencor",
        "en": "Prototype Rancour",
        "nota": "F2P/4★: forjable, aporta ATQ y DEF con el uso de ataques.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Geo Doble",
        "agentes": [
          "Chiori",
          "Navia",
          "Xilonen",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Mono Geo (Itto)",
        "agentes": [
          "Chiori",
          "Arataki Itto",
          "Gorou",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Es una sub-DPS Geo fuera de campo: colócala tras usar su Habilidad y deja que sus muñecas ataquen mientras juegas otro personaje.",
    "ficha": {
      "nombreCompleto": "Chiori",
      "faccion": "Fontaine",
      "desc": "Célebre diseñadora de moda de Fontaine, dueña de la boutique Chioriya. Perfeccionista y de gusto exquisito, maneja el Geo con la misma precisión con la que corta la tela.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Chiori_Full_Wish.png/revision/latest?cb=20240313033020"
    },
    "nombre": "Chiori",
    "rareza": "5",
    "elemento": "Geo",
    "arma": "Espada",
    "faccion": "Fontaine",
    "version": "4.5"
  },
  {
    "id": "arlecchino",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Fragmento de la Armonía Fantasiosa",
    "sets": [
      {
        "es": "Fragmento de la Armonía Fantasiosa",
        "en": "Fragment of Harmonic Whimsy",
        "nota": "BiS: set diseñado para ella (escala con el Vínculo de Vida de su kit)",
        "best": true
      },
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Alternativa sólida si no tienes el set del Vínculo de Vida",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Semblante de la Luna Carmesí",
        "en": "Crimson Moon's Semblance",
        "nota": "Arma insignia: sinergia perfecta con su Vínculo de Vida.",
        "best": true
      },
      {
        "es": "Báculo de Homa",
        "en": "Staff of Homa",
        "nota": "Prob./Daño CRIT y bono de ATQ; opción 5★ universal de primer nivel.",
        "best": false
      },
      {
        "es": "Lanza del Duelo",
        "en": "Deathmatch",
        "nota": "F2P/4★: gran Prob. CRIT y ATQ, obtenible del Pase de Batalla.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporizar",
        "agentes": [
          "Arlecchino",
          "Yelan",
          "Kazuha",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Doble Pyro (Chevreuse)",
        "agentes": [
          "Arlecchino",
          "Chevreuse",
          "Fischl",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Evita curación constante de Bennett: sanarla elimina su Vínculo de Vida, que es la fuente de su enorme bono de daño.",
    "ficha": {
      "nombreCompleto": "Arlecchino \"El Padre / La Sirvienta\"",
      "faccion": "Fontaine / Fatui",
      "desc": "La Cuarta de los Once Heraldos Fatui y directora del orfanato Casa de la Infancia. Fría y letal, sus hijos la llaman Padre; empuña el Pyro con la elegancia de una ejecutora.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Character_Arlecchino_Full_Wish.png/revision/latest?cb=20240424142733"
    },
    "nombre": "Arlecchino",
    "rareza": "5",
    "elemento": "Pyro",
    "arma": "Lanza",
    "faccion": "Fontaine / Fatui",
    "version": "4.6"
  },
  {
    "id": "clorinde",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Cazador Fantasmal",
    "sets": [
      {
        "es": "Cazador Fantasmal",
        "en": "Marechaussee Hunter",
        "nota": "Enorme Prob./Daño CRIT gracias a los cambios de su Vínculo de Vida (con Furina).",
        "best": true
      },
      {
        "es": "Furia Fulgurante",
        "en": "Thundering Fury",
        "nota": "Mejor opción en equipos de Agravación/Hiperflorecimiento.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Absolución",
        "en": "Absolution",
        "nota": "Arma insignia: Daño CRIT y bono de daño ligado al Vínculo de Vida.",
        "best": true
      },
      {
        "es": "Hoja Partieblas Reforjada",
        "en": "Mistsplitter Reforged",
        "nota": "Bono de daño Electro apilable; espada 5★ de tope.",
        "best": false
      },
      {
        "es": "Final de las Profundidades",
        "en": "Finale of the Deep",
        "nota": "F2P/4★: ATQ y otorga Vínculo de Vida, con gran sinergia con su kit.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vínculo de Vida",
        "agentes": [
          "Clorinde",
          "Furina",
          "Charlotte",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Agravación",
        "agentes": [
          "Clorinde",
          "Fischl",
          "Nahida",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Empareja su Vínculo de Vida con Furina o una fuente de curación controlada para activar el Cazador Fantasmal y disparar sus CRÍTICOS.",
    "ficha": {
      "nombreCompleto": "Clorinde",
      "faccion": "Fontaine",
      "desc": "Duelista campeona de Fontaine, contratada para resolver disputas mediante combates. Silenciosa y precisa, combina esgrima y disparos Electro con letal elegancia.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/8/87/Character_Clorinde_Full_Wish.png/revision/latest?cb=20250618071956"
    },
    "nombre": "Clorinde",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Espada",
    "faccion": "Fontaine",
    "version": "4.7"
  },
  {
    "id": "sethos",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "Maestría Elemental",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Furia Fulgurante",
    "sets": [
      {
        "es": "Furia Fulgurante",
        "en": "Thundering Fury",
        "nota": "Reduce el enfriamiento de la Habilidad y potencia Agravación; su mejor conjunto.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Gran Maestría Elemental y ATQ para su daño de Agravación.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Elegía por el Fin",
        "en": "Elegy for the End",
        "nota": "Arma 5★ ideal: Maestría, Recarga y buff de equipo.",
        "best": true
      },
      {
        "es": "Sin Cuerdas",
        "en": "The Stringless",
        "nota": "A refinamiento 5 rivaliza con las 5★ para Agravación.",
        "best": false
      },
      {
        "es": "Arco de Hamayumi",
        "en": "Hamayumi",
        "nota": "F2P/4★: forjable, potencia sus Ataques Cargados.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Agravación",
        "agentes": [
          "Sethos",
          "Nahida",
          "Fischl",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Hiperflorecimiento",
        "agentes": [
          "Sethos",
          "Nahida",
          "Xingqiu",
          "Furina"
        ],
        "best": false
      }
    ],
    "consejo": "Su daño viene de los Ataques Cargados potenciados tras su Habilidad; combina Maestría Elemental con Prob./Daño CRIT para Agravación.",
    "ficha": {
      "nombreCompleto": "Sethos",
      "faccion": "Sumeru",
      "desc": "Guardián del Mausoleo del Rey Deshret en el desierto de Sumeru. Heredero de antiguas técnicas de arquería Electro, protege los secretos de una civilización perdida.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Character_Sethos_Full_Wish.png/revision/latest?cb=20250618073154"
    },
    "nombre": "Sethos",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Arco",
    "faccion": "Sumeru",
    "version": "4.7"
  },
  {
    "id": "sigewinne",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Hydro",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "PV%",
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía"
    ],
    "setPrincipal": "Sueño de la Ninfa",
    "sets": [
      {
        "es": "Sueño de la Ninfa",
        "en": "Nymph's Dream",
        "nota": "Apila ATQ y bono de Daño Hydro; ideal para su daño en campo.",
        "best": true
      },
      {
        "es": "Fulgor de Vurukasha",
        "en": "Vourukasha's Glow",
        "nota": "PV% y daño de Habilidad estable; excelente como sanadora fuera de campo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Cuerdas del Corazón de Lluvia Plateada",
        "en": "Silvershower Heartstrings",
        "nota": "Arma insignia: escala con PV y potencia curación y daño.",
        "best": true
      },
      {
        "es": "Simulacro Acuático",
        "en": "Aqua Simulacra",
        "nota": "PV% y gran bono de daño; una de las mejores 5★ para ella.",
        "best": false
      },
      {
        "es": "Ocaso Menguante",
        "en": "Fading Twilight",
        "nota": "F2P/4★: forjable, aporta Recarga y bono de daño en rotación.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Curación Hydro",
        "agentes": [
          "Sigewinne",
          "Neuvillette",
          "Furina",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Hiperflorecimiento",
        "agentes": [
          "Sigewinne",
          "Nahida",
          "Nilou",
          "Kuki Shinobu"
        ],
        "best": false
      }
    ],
    "consejo": "Todo su kit escala con PV: prioriza PV% en reloj, copa y corona (o CRIT) y aporta aplicación Hydro constante mientras sana al equipo.",
    "ficha": {
      "nombreCompleto": "Sigewinne",
      "faccion": "Fontaine",
      "desc": "Melusina y jefa de enfermería de la Fortaleza Meropide. Dulce y entregada, cuida de todos los reclusos con una devoción que trasciende su pequeño tamaño.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Character_Sigewinne_Full_Wish.png/revision/latest?cb=20250618071510"
    },
    "nombre": "Sigewinne",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Arco",
    "faccion": "Fontaine",
    "version": "4.7"
  },
  {
    "id": "emilie",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Dendro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía",
      "Maestría Elemental"
    ],
    "setPrincipal": "Pergamino del Héroe de la Ciudad de Ceniza",
    "sets": [
      {
        "es": "Pergamino del Héroe de la Ciudad de Ceniza",
        "en": "Scroll of the Hero of Cinder City",
        "nota": "Potencia el daño elemental tras provocar reacciones como la Combustión; su mejor conjunto.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "ATQ y Maestría Elemental para su daño fuera de campo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Elegía de Lumidouce",
        "en": "Lumidouce Elegy",
        "nota": "Arma insignia: ATQ y bono de daño ligado a su Habilidad.",
        "best": true
      },
      {
        "es": "Báculo de Homa",
        "en": "Staff of Homa",
        "nota": "Alto CRIT y ATQ; sólida 5★ alternativa.",
        "best": false
      },
      {
        "es": "Azote del Dragón",
        "en": "Dragon's Bane",
        "nota": "F2P/4★: forjable, gran Maestría Elemental para reacciones.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Combustión",
        "agentes": [
          "Emilie",
          "Arlecchino",
          "Kazuha",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Vástago (Burgeon)",
        "agentes": [
          "Emilie",
          "Thoma",
          "Furina",
          "Nahida"
        ],
        "best": false
      }
    ],
    "consejo": "Es una aplicadora Dendro limpia fuera de campo que convierte la Combustión en daño; deja sus lámparas activas y juega a tu DPS principal.",
    "ficha": {
      "nombreCompleto": "Emilie",
      "faccion": "Fontaine",
      "desc": "Célebre perfumista de Fontaine, capaz de recrear cualquier aroma. Discreta y metódica, esconde bajo su oficio una faceta mucho más resolutiva de lo que aparenta.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Character_Emilie_Full_Wish.png/revision/latest?cb=20240808025602"
    },
    "nombre": "Emilie",
    "rareza": "5",
    "elemento": "Dendro",
    "arma": "Lanza",
    "faccion": "Fontaine",
    "version": "4.8"
  },
  {
    "id": "kachina",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Geo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Códice de Obsidiana",
    "sets": [
      {
        "es": "Códice de Obsidiana",
        "en": "Obsidian Codex",
        "nota": "Potencia su daño mientras usa la Bendición del Alma Nocturna; su mejor conjunto en Natlan.",
        "best": true
      },
      {
        "es": "Susurros Nocturnos en el Bosque de los Ecos",
        "en": "Nighttime Whispers in the Echoing Woods",
        "nota": "Bono de Daño Geo y ATQ% tras la Habilidad.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Lanza del Duelo",
        "en": "Deathmatch",
        "nota": "4★: gran Prob. CRIT y ATQ; su mejor arma accesible.",
        "best": true
      },
      {
        "es": "Lanza de Favonius",
        "en": "Favonius Lance",
        "nota": "Genera partículas para el equipo si la usas como soporte.",
        "best": false
      },
      {
        "es": "Prototipo Arcaico",
        "en": "Prototype Starglitter",
        "nota": "F2P/4★: forjable, ATQ% y bono de daño tras la Habilidad.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Nightsoul Natlan",
        "agentes": [
          "Kachina",
          "Mualani",
          "Xilonen",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Geo de Soporte",
        "agentes": [
          "Kachina",
          "Navia",
          "Xilonen",
          "Zhongli"
        ],
        "best": false
      }
    ],
    "consejo": "Su taladro 'Turbotaladro' aporta daño Geo fuera de campo y construcción; úsala como sub-DPS de bajo coste en equipos de Natlan.",
    "ficha": {
      "nombreCompleto": "Kachina",
      "faccion": "Natlan",
      "desc": "Joven guerrera del Pueblo de los Manantiales de Natlan, la primera de su tribu en obtener un saurio. Entusiasta y algo insegura, se esfuerza por demostrar su valía.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Character_Kachina_Full_Wish.png/revision/latest?cb=20240913071342"
    },
    "nombre": "Kachina",
    "rareza": "4",
    "elemento": "Geo",
    "arma": "Lanza",
    "faccion": "Natlan",
    "version": "5.0"
  },
  {
    "id": "kinich",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Dendro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía",
      "Maestría Elemental"
    ],
    "setPrincipal": "Códice de Obsidiana",
    "sets": [
      {
        "es": "Códice de Obsidiana",
        "en": "Obsidian Codex",
        "nota": "Máximo daño mientras mantiene el Alma Nocturna en campo; su mejor conjunto.",
        "best": true
      },
      {
        "es": "Pergamino del Héroe de la Ciudad de Ceniza",
        "en": "Scroll of the Hero of Cinder City",
        "nota": "Ideal en equipos de reacción como Combustión o Vaporización.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Colmillo del Rey de la Montaña",
        "en": "Fang of the Mountain King",
        "nota": "Arma insignia: escala perfectamente con su ciclo de Alma Nocturna.",
        "best": true
      },
      {
        "es": "Veredicto",
        "en": "Verdict",
        "nota": "Alto ATQ y bono de daño de Habilidad; fuerte 5★ alternativa.",
        "best": false
      },
      {
        "es": "Aguamarina de Makhaira",
        "en": "Makhaira Aquamarine",
        "nota": "F2P/4★: forjable, aporta ATQ escalado con Maestría Elemental.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Combustión",
        "agentes": [
          "Kinich",
          "Emilie",
          "Kazuha",
          "Zhongli"
        ],
        "best": true
      },
      {
        "nombre": "Vaporización",
        "agentes": [
          "Kinich",
          "Furina",
          "Xiangling",
          "Yumemizuki Mizuki"
        ],
        "best": false
      }
    ],
    "consejo": "Gestiona su indicador con Ajaw disparando la Habilidad para el gran golpe potenciado; mantén ATQ y suficiente Recarga para su ciclo.",
    "ficha": {
      "nombreCompleto": "Kinich",
      "faccion": "Natlan",
      "desc": "Cazador de recompensas del linaje del Estrato de Follaje, acompañado siempre por el saurio dragón parlante Ajaw. Pragmático y directo, negocia cada trabajo al detalle.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/9/95/Character_Kinich_Full_Wish.png/revision/latest?cb=20240919141401"
    },
    "nombre": "Kinich",
    "rareza": "5",
    "elemento": "Dendro",
    "arma": "Mandoble",
    "faccion": "Natlan",
    "version": "5.0"
  },
  {
    "id": "mualani",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Hydro",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "PV%",
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía"
    ],
    "setPrincipal": "Códice de Obsidiana",
    "sets": [
      {
        "es": "Códice de Obsidiana",
        "en": "Obsidian Codex",
        "nota": "Potencia su daño en campo con el Alma Nocturna activa; su mejor conjunto.",
        "best": true
      },
      {
        "es": "Sueño de la Ninfa",
        "en": "Nymph's Dream",
        "nota": "Apila bono de Daño Hydro; alternativa sólida.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Hora de Surfear",
        "en": "Surf's Up",
        "nota": "Arma insignia: escala con PV y potencia su Ataque Normal montada.",
        "best": true
      },
      {
        "es": "Escrituras del Fluir Sempiterno",
        "en": "Tome of the Eternal Flow",
        "nota": "PV% y bono de daño CRIT; fuerte 5★ alternativa.",
        "best": false
      },
      {
        "es": "Ámbar Prototípico",
        "en": "Prototype Amber",
        "nota": "F2P/4★: forjable, aporta PV% con el que escala su daño.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Vaporización",
        "agentes": [
          "Mualani",
          "Bennett",
          "Xilonen",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Nightsoul Congelar",
        "agentes": [
          "Mualani",
          "Citlali",
          "Xilonen",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Su daño escala con PV: monta su tabla, marca a los enemigos con los mordiscos de tiburón y detona el gran golpe; prioriza PV% y CRIT.",
    "ficha": {
      "nombreCompleto": "Mualani",
      "faccion": "Natlan",
      "desc": "Guía turística del Pueblo de los Manantiales de Natlan, siempre lista para una aventura sobre su tabla de tiburón. Alegre y extrovertida, conoce cada rincón de su tierra.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Character_Mualani_Full_Wish.png/revision/latest?cb=20240913071517"
    },
    "nombre": "Mualani",
    "rareza": "5",
    "elemento": "Hydro",
    "arma": "Catalizador",
    "faccion": "Natlan",
    "version": "5.0"
  },
  {
    "id": "xilonen",
    "estado": "completo",
    "arena": {
      "principal": "DEF%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "DEF%",
      "alt": "Bonificación de Daño Geo"
    },
    "tiara": {
      "principal": "DEF%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "DEF%",
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Pergamino del Héroe de la Ciudad de Ceniza",
    "sets": [
      {
        "es": "Pergamino del Héroe de la Ciudad de Ceniza",
        "en": "Scroll of the Hero of Cinder City",
        "nota": "Refuerza el daño elemental del equipo tras reacciones; su mejor conjunto como soporte.",
        "best": true
      },
      {
        "es": "Susurros Nocturnos en el Bosque de los Ecos",
        "en": "Nighttime Whispers in the Echoing Woods",
        "nota": "Alternativa centrada en su propio daño Geo con DEF.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Canción de la Patrulla de la Cima",
        "en": "Peak Patrol Song",
        "nota": "Arma insignia: escala con DEF y otorga bono de daño elemental al equipo.",
        "best": true
      },
      {
        "es": "Juramento por la Libertad",
        "en": "Freedom-Sworn",
        "nota": "Buff de equipo potente si la juegas como pura soporte.",
        "best": false
      },
      {
        "es": "Huso de Cinabrio",
        "en": "Cinnabar Spindle",
        "nota": "F2P/4★: forjable de evento, escala con DEF y potencia su Habilidad.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Soporte Natlan",
        "agentes": [
          "Mualani",
          "Xilonen",
          "Citlali",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Agravación",
        "agentes": [
          "Clorinde",
          "Xilonen",
          "Fischl",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Es una soporte de resistencia elemental y curación: prioriza DEF% y Recarga, y usa su Habilidad para reducir la RES del elemento de tu DPS.",
    "ficha": {
      "nombreCompleto": "Xilonen",
      "faccion": "Natlan",
      "desc": "Herrera del Pueblo de las Praderas de Natlan, artífice de equipamiento para toda la nación. Distante en apariencia pero de corazón noble, dominar el metal es su vocación.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/f/f5/Character_Xilonen_Full_Wish.png/revision/latest?cb=20241009044950"
    },
    "nombre": "Xilonen",
    "rareza": "5",
    "elemento": "Geo",
    "arma": "Espada",
    "faccion": "Natlan",
    "version": "5.1"
  },
  {
    "id": "chasca",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Anemo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Códice de Obsidiana",
    "sets": [
      {
        "es": "Códice de Obsidiana",
        "en": "Obsidian Codex",
        "nota": "Potencia su daño en campo con el Alma Nocturna activa; su mejor conjunto.",
        "best": true
      },
      {
        "es": "Crónica del Palacio del Desierto",
        "en": "Desert Pavilion Chronicle",
        "nota": "Refuerza Ataques Normales/Cargados Anemo; buena alternativa para sus disparos.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Plumaje Carmesí del Buitre Astral",
        "en": "Astral Vulture's Crimson Plumage",
        "nota": "Arma insignia: potencia sus disparos de Alma Nocturna.",
        "best": true
      },
      {
        "es": "El Amanecer de la Primera Gran Magia",
        "en": "The First Great Magic",
        "nota": "Alto ATQ y Daño CRIT; excelente 5★ alternativa.",
        "best": false
      },
      {
        "es": "Perforador Ibis",
        "en": "Ibis Piercer",
        "nota": "F2P/4★: forjable, aporta ATQ para sus Ataques Cargados.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Conversión Electro",
        "agentes": [
          "Chasca",
          "Ororon",
          "Fischl",
          "Xilonen"
        ],
        "best": true
      },
      {
        "nombre": "Conversión Pyro",
        "agentes": [
          "Chasca",
          "Bennett",
          "Xiangling",
          "Xilonen"
        ],
        "best": false
      }
    ],
    "consejo": "Sus disparos convierten su elemento al de sus aliados no-Anemo; acompáñala de un aplicador Pyro/Electro/Hydro/Cryo para potenciar su daño con reacciones.",
    "ficha": {
      "nombreCompleto": "Chasca",
      "faccion": "Natlan",
      "desc": "Jinete del Clan de la Flor y la Pluma de Natlan, veloz como el viento nocturno. Justiciera de carácter fuerte, patrulla los cielos en busca de quien perturbe la paz.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/8/8c/Character_Chasca_Full_Wish.png/revision/latest?cb=20241127071129"
    },
    "nombre": "Chasca",
    "rareza": "5",
    "elemento": "Anemo",
    "arma": "Arco",
    "faccion": "Natlan",
    "version": "5.2"
  },
  {
    "id": "ororon",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Códice de Obsidiana",
    "sets": [
      {
        "es": "Códice de Obsidiana",
        "en": "Obsidian Codex",
        "nota": "Aprovecha su Alma Nocturna para maximizar daño; su mejor conjunto.",
        "best": true
      },
      {
        "es": "Furia Fulgurante",
        "en": "Thundering Fury",
        "nota": "Ideal en equipos de Agravación e Hiperflorecimiento.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "El Amanecer de la Primera Gran Magia",
        "en": "The First Great Magic",
        "nota": "Alto ATQ y Daño CRIT; su mejor arma 5★.",
        "best": true
      },
      {
        "es": "Sin Cuerdas",
        "en": "The Stringless",
        "nota": "A refinamiento 5 aporta gran Maestría y daño fuera de campo.",
        "best": false
      },
      {
        "es": "Perforador Ibis",
        "en": "Ibis Piercer",
        "nota": "F2P/4★: forjable, ATQ accesible para su sub-DPS.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Electro para Chasca",
        "agentes": [
          "Chasca",
          "Ororon",
          "Xilonen",
          "Kazuha"
        ],
        "best": true
      },
      {
        "nombre": "Agravación",
        "agentes": [
          "Ororon",
          "Sethos",
          "Nahida",
          "Kazuha"
        ],
        "best": false
      }
    ],
    "consejo": "Es un sub-DPS Electro fuera de campo del clan de Chasca: aplica Electro constante para conversión de disparos, Agravación o Hiperflorecimiento.",
    "ficha": {
      "nombreCompleto": "Ororon",
      "faccion": "Natlan",
      "desc": "Joven callado del Clan de la Flor y la Pluma de Natlan, con un vínculo especial con los ecos de los difuntos. De pocas palabras, oculta un pasado ligado a antiguos nombres.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Ororon_Full_Wish.png/revision/latest?cb=20250618071418"
    },
    "nombre": "Ororon",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Arco",
    "faccion": "Natlan",
    "version": "5.2"
  },
  {
    "id": "citlali",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "PV%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "Maestría Elemental"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRIT / Daño CRIT"
    },
    "substats": [
      "Maestría Elemental",
      "PV%",
      "Prob. CRIT",
      "Daño CRIT",
      "Recarga de Energía"
    ],
    "setPrincipal": "Pergamino del Héroe de la Ciudad de las Cenizas",
    "sets": [
      {
        "es": "Pergamino del Héroe de la Ciudad de las Cenizas",
        "en": "Scroll of the Hero of Cinder City",
        "nota": "Ideal off-field: potencia su aplicación de Cryo Nocturninia y buffea al equipo. BiS.",
        "best": true
      },
      {
        "es": "Instructor",
        "en": "Instructor",
        "nota": "4★ accesible: +120 ME al equipo tras reaccionar. Gran opción gratuita.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Vigilia del Astrólogo Estelar",
        "en": "Starcaller's Watch",
        "nota": "Firma: ME + PV%, refuerza escudo y buff de RES. BiS.",
        "best": true
      },
      {
        "es": "Jade de Sacrificio",
        "en": "Sacrificial Jade",
        "nota": "PV% off-field + ME al salir de campo. Excelente para su rol de apoyo.",
        "best": false
      },
      {
        "es": "Mappa Mare",
        "en": "Mappa Mare",
        "nota": "F2P/4★: mucha Maestría Elemental para melt.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Melt Mavuika",
        "agentes": [
          "Mavuika",
          "Citlali",
          "Xilonen",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Skirk Cryo/Freeze",
        "agentes": [
          "Skirk",
          "Escoffier",
          "Citlali",
          "Furina"
        ],
        "best": false
      }
    ],
    "consejo": "Colócala off-field para aplicar Cryo, bajar RES Cryo/Pyro y escudar; prioriza ME para maximizar melt/fusión inversa.",
    "ficha": {
      "nombreCompleto": "Citlali",
      "faccion": "Natlan",
      "desc": "Anciana adivina de Natlan versada en astrología y en los antiguos ritos. Manipula el hielo y la constelación de Itzpapalotl para apoyar y castigar a sus enemigos.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Character_Citlali_Game.png"
    },
    "nombre": "Citlali",
    "rareza": "5",
    "elemento": "Cryo",
    "arma": "Catalizador",
    "faccion": "Natlan",
    "version": "5.3"
  },
  {
    "id": "lan-yan",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Anemo",
      "alt": "Maestría Elemental"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Maestría Elemental",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%"
    ],
    "setPrincipal": "Cazador Esmeralda",
    "sets": [
      {
        "es": "Cazador Esmeralda",
        "en": "Viridescent Venerer",
        "nota": "Baja la RES elemental por swirl; estándar para Anemo de apoyo. BiS.",
        "best": true
      },
      {
        "es": "Ensueño Inacabado",
        "en": "Unfinished Reverie",
        "nota": "Aumenta el daño del equipo si hay enemigos afectados por quemadura; opción de nicho.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Fragmentos de Sacrificio",
        "en": "Sacrificial Fragments",
        "nota": "Reinicia la habilidad para reaplicar escudo/swirl. Muy sólido.",
        "best": true
      },
      {
        "es": "Códice Favonius",
        "en": "Favonius Codex",
        "nota": "Genera partículas para el equipo; refuerza recarga.",
        "best": false
      },
      {
        "es": "Mappa Mare",
        "en": "Mappa Mare",
        "nota": "F2P/4★: ME para swirl.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Apoyo Anemo genérico",
        "agentes": [
          "Mavuika",
          "Citlali",
          "Lan Yan",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Swirl elemental",
        "agentes": [
          "Varesa",
          "Iansan",
          "Lan Yan",
          "Fischl"
        ],
        "best": false
      }
    ],
    "consejo": "Úsala como agrupadora y escudera Anemo: prioriza Recarga para tener el elevado listo y aprovecha Cazador Esmeralda para bajar RES.",
    "ficha": {
      "nombreCompleto": "Lan Yan",
      "faccion": "Liyue",
      "desc": "Joven diseñadora de fuegos artificiales de Liyue, alegre y creativa. Emplea el viento para agrupar enemigos y proteger a sus aliados con escudos.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/d/d8/Character_Lan_Yan_Game.png"
    },
    "nombre": "Lan Yan",
    "rareza": "4",
    "elemento": "Anemo",
    "arma": "Catalizador",
    "faccion": "Liyue",
    "version": "5.3"
  },
  {
    "id": "mavuika",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía",
      "Maestría Elemental"
    ],
    "setPrincipal": "Códice de Obsidiana",
    "sets": [
      {
        "es": "Códice de Obsidiana",
        "en": "Obsidian Codex",
        "nota": "BiS en equipos con Alma Nocturnia (Nightsoul): +DMG y +CRIT DMG estando en ese estado.",
        "best": true
      },
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Para composiciones de vaporización/sobrecarga con reacciones Pyro constantes.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Mil Soles Abrasadores",
        "en": "A Thousand Blazing Suns",
        "nota": "Firma: ATQ, CRIT y escala con su mecánica de Espíritu de Lucha. BiS.",
        "best": true
      },
      {
        "es": "Verdicto",
        "en": "Verdict",
        "nota": "Gran ATQ% y bonificación tras conseguir cuños; alternativa de primer nivel.",
        "best": false
      },
      {
        "es": "Espina de Serpiente",
        "en": "Serpent Spine",
        "nota": "F2P/Pase: Prob. CRIT y daño escalado; requiere permanecer en campo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Nightsoul / Melt",
        "agentes": [
          "Mavuika",
          "Citlali",
          "Xilonen",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Mono-Pyro Natlan",
        "agentes": [
          "Mavuika",
          "Kachina",
          "Xilonen",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal Pyro: gestiona su Espíritu de Lucha para el definitivo y alterna moto/ataques según carga; combínala con Citlali para melt.",
    "ficha": {
      "nombreCompleto": "Mavuika",
      "faccion": "Natlan",
      "desc": "Arconte Pyro y general de Natlan, líder indómita de su pueblo. Encarna la voluntad de guerra de la nación y desata llamaradas colosales en combate.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Mavuika_Game.png"
    },
    "nombre": "Mavuika",
    "rareza": "5",
    "elemento": "Pyro",
    "arma": "Mandoble",
    "faccion": "Natlan",
    "version": "5.3"
  },
  {
    "id": "yumemizuki-mizuki",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Daño Anemo"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Maestría Elemental",
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%"
    ],
    "setPrincipal": "Cazador Esmeralda",
    "sets": [
      {
        "es": "Cazador Esmeralda",
        "en": "Viridescent Venerer",
        "nota": "Baja RES por swirl y potencia el daño de swirl del equipo. BiS de apoyo.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Mucha Maestría Elemental si no necesitas la reducción de RES.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Sueño de una Mañana Soleada",
        "en": "Sunny Morning Sleep-In",
        "nota": "Firma: gran ME y buff de daño/curación al equipo. BiS.",
        "best": true
      },
      {
        "es": "Verdad de Kagura",
        "en": "Kagura's Verity",
        "nota": "Si se busca daño personal de swirl con CRIT.",
        "best": false
      },
      {
        "es": "Mappa Mare",
        "en": "Mappa Mare",
        "nota": "F2P/4★: ME accesible para swirl.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Melt / Vaporización",
        "agentes": [
          "Mavuika",
          "Citlali",
          "Yumemizuki Mizuki",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Swirl de apoyo",
        "agentes": [
          "Varesa",
          "Iansan",
          "Yumemizuki Mizuki",
          "Fischl"
        ],
        "best": false
      }
    ],
    "consejo": "Apoyo Anemo centrado en Maestría Elemental: agrupa, hace swirl y buffea; brilla especialmente en equipos de melt/vaporización.",
    "ficha": {
      "nombreCompleto": "Yumemizuki Mizuki",
      "faccion": "Inazuma",
      "desc": "Elegante youkai de Inazuma ligada al mundo de los sueños. Manipula el viento onírico para agrupar enemigos, provocar torbellinos y fortalecer a sus aliados.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/8/83/Character_Yumemizuki_Mizuki_Game.png"
    },
    "nombre": "Yumemizuki Mizuki",
    "rareza": "5",
    "elemento": "Anemo",
    "arma": "Catalizador",
    "faccion": "Inazuma",
    "version": "5.4"
  },
  {
    "id": "iansan",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "ATQ%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "ATQ%",
      "Prob. CRIT",
      "Daño CRIT",
      "Maestría Elemental"
    ],
    "setPrincipal": "Ritual Antiguo de la Nobleza",
    "sets": [
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "+20% ATQ al equipo tras el definitivo; ideal para su rol de buffer. BiS.",
        "best": true
      },
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "Si necesita más recarga y algo de daño propio.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "La Pesca",
        "en": "The Catch",
        "nota": "F2P/4★: Recarga + daño de definitivo; excelente y gratuito. Muy recomendada.",
        "best": true
      },
      {
        "es": "Lanza de Favonius",
        "en": "Favonius Lance",
        "nota": "Genera partículas para el equipo; refuerza baterías de energía.",
        "best": false
      },
      {
        "es": "Relámpago Devorador",
        "en": "Engulfing Lightning",
        "nota": "Máxima Recarga y ATQ si se dispone del 5★.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Buffer Electro/ATQ",
        "agentes": [
          "Varesa",
          "Iansan",
          "Xilonen",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Aceleración/Sobrecarga",
        "agentes": [
          "Clorinde",
          "Iansan",
          "Fischl",
          "Ifa"
        ],
        "best": false
      }
    ],
    "consejo": "Apóyate en su buff de ATQ y velocidad para el DPS; prioriza Recarga alta para mantener el definitivo activo constantemente.",
    "ficha": {
      "nombreCompleto": "Iansan",
      "faccion": "Natlan",
      "desc": "Entrenadora deportiva de Natlan, enérgica y disciplinada. Impulsa a sus aliados con descargas Electro que aumentan su ataque y ritmo de combate.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/b/b1/Character_Iansan_Game.png"
    },
    "nombre": "Iansan",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Lanza",
    "faccion": "Natlan",
    "version": "5.5"
  },
  {
    "id": "varesa",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía",
      "Maestría Elemental"
    ],
    "setPrincipal": "Códice de Obsidiana",
    "sets": [
      {
        "es": "Códice de Obsidiana",
        "en": "Obsidian Codex",
        "nota": "BiS en equipos Nightsoul: +DMG y +CRIT DMG mientras esté en Alma Nocturnia.",
        "best": true
      },
      {
        "es": "Fragmento de la Armonía Fantasiosa",
        "en": "Fragment of Harmonic Whimsy",
        "nota": "Escala daño con cambios de PV por reacciones; buen alterno para sobrecarga.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Nociones Vívidas",
        "en": "Vivid Notions",
        "nota": "Firma: potencia sus golpes en picado (plunge) y CRIT. BiS.",
        "best": true
      },
      {
        "es": "Verdad de Kagura",
        "en": "Kagura's Verity",
        "nota": "Alto daño de habilidad; alternativa 5★ muy fuerte.",
        "best": false
      },
      {
        "es": "El Vate",
        "en": "The Widsith",
        "nota": "F2P/4★: buff aleatorio potente (ATQ/ME/DMG).",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Plunge Electro / Sobrecarga",
        "agentes": [
          "Varesa",
          "Iansan",
          "Ifa",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Aceleración (Aggravate)",
        "agentes": [
          "Varesa",
          "Fischl",
          "Iansan",
          "Yumemizuki Mizuki"
        ],
        "best": false
      }
    ],
    "consejo": "DPS de golpes en picado: acumula Alma Nocturnia y descarga sus plunge cargados; combínala con buffers Electro como Iansan.",
    "ficha": {
      "nombreCompleto": "Varesa",
      "faccion": "Natlan",
      "desc": "Joven y explosiva luchadora de Natlan, apasionada por la lucha libre. Se lanza desde el aire con golpes en picado cargados de energía Electro.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/0/04/Character_Varesa_Game.png"
    },
    "nombre": "Varesa",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Catalizador",
    "faccion": "Natlan",
    "version": "5.5"
  },
  {
    "id": "escoffier",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Réquiem del Corredor",
    "sets": [
      {
        "es": "Réquiem del Corredor",
        "en": "Finale of the Deep Galleries",
        "nota": "Set Cryo que potencia su daño off-field cuando la energía está a cero. BiS.",
        "best": true
      },
      {
        "es": "Emblema del Destino",
        "en": "Emblem of Severed Fate",
        "nota": "Más recarga y daño de definitivo si prima la fiabilidad de energía.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Sinfonista de Aromas",
        "en": "Symphonist of Scents",
        "nota": "Firma: refuerza su daño y curación como sub-DPS Cryo. BiS.",
        "best": true
      },
      {
        "es": "Vado del Río Ceniciento",
        "en": "Fleuve Cendre Ferryman",
        "nota": "F2P/4★: Recarga + Prob. CRIT, muy práctica.",
        "best": false
      },
      {
        "es": "Lanza de Favonius",
        "en": "Favonius Lance",
        "nota": "Batería de energía para el equipo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Skirk Cryo / Freeze",
        "agentes": [
          "Skirk",
          "Escoffier",
          "Citlali",
          "Furina"
        ],
        "best": true
      },
      {
        "nombre": "Melt",
        "agentes": [
          "Mavuika",
          "Escoffier",
          "Citlali",
          "Bennett"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS/sanadora Cryo con reducción de RES Cryo: mantén su definitivo activo off-field y aprovecha su aplicación constante para freeze/melt.",
    "ficha": {
      "nombreCompleto": "Escoffier",
      "faccion": "Fontaine",
      "desc": "Reputada chef de Fontaine, meticulosa y perfeccionista. Combina su arte culinario con el hielo para nutrir y potenciar a sus compañeros de equipo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Character_Escoffier_Game.png"
    },
    "nombre": "Escoffier",
    "rareza": "5",
    "elemento": "Cryo",
    "arma": "Lanza",
    "faccion": "Fontaine",
    "version": "5.6"
  },
  {
    "id": "ifa",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Daño Anemo"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Curación"
    },
    "substats": [
      "Maestría Elemental",
      "Recarga de Energía",
      "PV%",
      "Prob. CRIT",
      "ATQ%"
    ],
    "setPrincipal": "Cazador Esmeralda",
    "sets": [
      {
        "es": "Cazador Esmeralda",
        "en": "Viridescent Venerer",
        "nota": "Reduce RES por swirl mientras agrupa; estándar de apoyo Anemo. BiS.",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Maximiza Maestría Elemental para swirl si no requiere la reducción de RES.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Fragmentos de Sacrificio",
        "en": "Sacrificial Fragments",
        "nota": "Reinicia habilidad para reagrupar; muy cómodo en apoyo. BiS accesible.",
        "best": true
      },
      {
        "es": "Prototipo Ámbar",
        "en": "Prototype Amber",
        "nota": "PV + recarga y curación en área; refuerza su faceta sanadora.",
        "best": false
      },
      {
        "es": "Mappa Mare",
        "en": "Mappa Mare",
        "nota": "F2P/4★: ME para swirl.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Apoyo Nightsoul Natlan",
        "agentes": [
          "Varesa",
          "Iansan",
          "Ifa",
          "Bennett"
        ],
        "best": true
      },
      {
        "nombre": "Swirl / curación",
        "agentes": [
          "Mavuika",
          "Citlali",
          "Ifa",
          "Xilonen"
        ],
        "best": false
      }
    ],
    "consejo": "Sanador y agrupador Anemo con sinergia Nightsoul de Natlan: prioriza Maestría Elemental y algo de Recarga para su habilidad de apoyo.",
    "ficha": {
      "nombreCompleto": "Ifa",
      "faccion": "Natlan",
      "desc": "Médico y piloto de dirigible de Natlan, sereno y analítico. Usa el viento para sanar y potenciar la energía Nocturnia de sus aliados.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a1/Character_Ifa_Game.png"
    },
    "nombre": "Ifa",
    "rareza": "4",
    "elemento": "Anemo",
    "arma": "Catalizador",
    "faccion": "Natlan",
    "version": "5.6"
  },
  {
    "id": "dahlia",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Hydro"
    },
    "tiara": {
      "principal": "PV%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "PV%",
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "Maestría Elemental"
    ],
    "setPrincipal": "Ritual Antiguo de la Nobleza",
    "sets": [
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "Buffea ATQ del equipo con su definitivo; sólido en su rol de escudero/apoyo. BiS.",
        "best": true
      },
      {
        "es": "Tenacidad de los Millelith",
        "en": "Tenacity of the Millelith",
        "nota": "+ATQ y PV al equipo manteniendo la habilidad activa.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Llave de la Coronación",
        "en": "Key of Khaj-Nisut",
        "nota": "Escala con PV y buffea ME del equipo; refuerza su escudo. BiS.",
        "best": true
      },
      {
        "es": "Espada de Sacrificio",
        "en": "Sacrificial Sword",
        "nota": "Reinicia habilidad para reaplicar escudo; muy práctica.",
        "best": false
      },
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "F2P/4★: batería de energía y recarga para el equipo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Escudero Hydro de apoyo",
        "agentes": [
          "Skirk",
          "Escoffier",
          "Dahlia",
          "Citlali"
        ],
        "best": true
      },
      {
        "nombre": "Aplicación Hydro off-field",
        "agentes": [
          "Varesa",
          "Dahlia",
          "Fischl",
          "Iansan"
        ],
        "best": false
      }
    ],
    "consejo": "Escudero Hydro basado en PV: prioriza PV% para escudo y curación resistentes, con Recarga suficiente para mantener su habilidad activa.",
    "ficha": {
      "nombreCompleto": "Dahlia",
      "faccion": "Fontaine",
      "desc": "Caballero devoto de Fontaine, amable y protector. Emplea el agua para escudar y sostener a sus aliados con un apoyo defensivo constante.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/9/95/Character_Dahlia_Game.png"
    },
    "nombre": "Dahlia",
    "rareza": "4",
    "elemento": "Hydro",
    "arma": "Espada",
    "faccion": "Fontaine",
    "version": "5.7"
  },
  {
    "id": "skirk",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Daño CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía",
      "Maestría Elemental"
    ],
    "setPrincipal": "Réquiem del Corredor",
    "sets": [
      {
        "es": "Réquiem del Corredor",
        "en": "Finale of the Deep Galleries",
        "nota": "BiS: set diseñado para ella (Daño Cryo y de Ataque Básico/Definitiva con 0 de Recarga)",
        "best": true
      },
      {
        "es": "Nómada del Invierno",
        "en": "Blizzard Strayer",
        "nota": "Alternativa solo para equipos de Congelación",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Fulgor Cerúleo",
        "en": "Azurelight",
        "nota": "Firma: ATQ y Prob. CRIT altísimos con bonos temporales. BiS.",
        "best": true
      },
      {
        "es": "Reflejo de las Tinieblas",
        "en": "Mistsplitter Reforged",
        "nota": "Gran bonificación de daño elemental para su daño Cryo.",
        "best": false
      },
      {
        "es": "Espada Negra",
        "en": "The Black Sword",
        "nota": "F2P/4★: Prob. CRIT y daño de ataque normal/cargado.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Cryo on-field",
        "agentes": [
          "Skirk",
          "Escoffier",
          "Citlali",
          "Furina"
        ],
        "best": true
      },
      {
        "nombre": "Freeze",
        "agentes": [
          "Skirk",
          "Escoffier",
          "Dahlia",
          "Citlali"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal Cryo con rotación propia: acumula sus marcas y descarga la ráfaga potenciada; acompáñala de aplicadores Cryo como Escoffier y Citlali.",
    "ficha": {
      "nombreCompleto": "Skirk",
      "faccion": "Snezhnaya",
      "desc": "Enigmática espadachina ligada al Abismo y maestra de Tartaglia. Domina un estilo de esgrima gélido y letal aprendido en un mundo más allá del velo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Character_Skirk_Game.png"
    },
    "nombre": "Skirk",
    "rareza": "5",
    "elemento": "Cryo",
    "arma": "Espada",
    "faccion": "Snezhnaya",
    "version": "5.7"
  },
  {
    "id": "ineffa",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Alborada de la Estrella del Alba y la Luna",
    "sets": [
      {
        "es": "Alborada de la Estrella del Alba y la Luna",
        "en": "Aubade of Morningstar and Moon",
        "nota": "Mejor set para daño personal de Carga Lunar",
        "best": true
      },
      {
        "es": "Serenata de la Luna Tejida",
        "en": "Silken Moon's Serenade",
        "nota": "Alternativa de soporte: Maestría Elemental y bono de Reacción Lunar para todo el equipo",
        "best": false
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Set de transición mientras farmeas Alborada",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Halo Fracturado",
        "en": "Fractured Halo",
        "nota": "Arma insignia, BiS",
        "best": true
      },
      {
        "es": "Báculo de las Arenas Escarlatas",
        "en": "Staff of the Scarlet Sands",
        "nota": "Alternativa 5★ potente",
        "best": false
      },
      {
        "es": "Lanza del Duelo",
        "en": "Deathmatch",
        "nota": "Mejor 4★",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Carga Lunar",
        "agentes": [
          "Ineffa",
          "Flins",
          "Aino",
          "Sucrose"
        ],
        "best": true
      },
      {
        "nombre": "Hyperfloración",
        "agentes": [
          "Ineffa",
          "Nahida",
          "Xingqiu",
          "Yelan"
        ],
        "best": false
      }
    ],
    "consejo": "Acumula ATQ% hasta llegar a ~2000 de ATQ para maximizar su pasiva; después reparte entre Prob./Daño CRIT y Maestría Elemental. Sube primero la Habilidad Elemental.",
    "ficha": {
      "nombreCompleto": "Ineffa",
      "faccion": "Nod-Krai",
      "desc": "Personaje 5★ Electro de Lanza de Nod-Krai, ligada al Taller Krumkake Clink-Clank. Funciona como Sub-DPS de Carga Lunar que potencia su ATQ para maximizar la reacción de Carga Lunar, capaz de dar golpes críticos. Debutó en la versión 5.8 (30 de julio de 2025).",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Character_Ineffa_Full_Wish.png"
    },
    "elemento": "Electro",
    "arma": "Lanza",
    "nombre": "Ineffa",
    "rareza": "5",
    "faccion": "Nod-Krai",
    "version": "5.8"
  },
  {
    "id": "aino",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Daño Hydro"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Maestría Elemental",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%"
    ],
    "setPrincipal": "Serenata de la Luna Tejida",
    "sets": [
      {
        "es": "Serenata de la Luna Tejida",
        "en": "Silken Moon's Serenade",
        "nota": "Bono de Maestría Elemental para todo el equipo con uptime total",
        "best": true
      },
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "Para equipos que no aprovechan el bono de Maestría",
        "best": false
      },
      {
        "es": "Instructor",
        "en": "Instructor",
        "nota": "Alternativa cuando otro personaje lleva la Serenata",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Gran Espada de Favonius",
        "en": "Favonius Greatsword",
        "nota": "Mejor opción general: genera energía para el equipo",
        "best": true
      },
      {
        "es": "Májaira Aguamarina",
        "en": "Makhaira Aquamarine",
        "nota": "Aporta Maestría Elemental y buff de ATQ al equipo",
        "best": false
      },
      {
        "es": "Gran Espada de Sacrificio",
        "en": "Sacrificial Greatsword",
        "nota": "Opción F2P/4★",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Carga Lunar",
        "agentes": [
          "Aino",
          "Flins",
          "Ineffa",
          "Sucrose"
        ],
        "best": true
      },
      {
        "nombre": "Hyperfloración/Rebrote",
        "agentes": [
          "Aino",
          "Nahida",
          "Raiden Shogun",
          "Xingqiu"
        ],
        "best": false
      }
    ],
    "consejo": "Su valor está en la Explosión Elemental: prioriza Recarga de Energía y Maestría Elemental. Es la primera Hydro de Mandoble y se consigue gratis en la misión de Arconte de la 6.0.",
    "ficha": {
      "nombreCompleto": "Aino",
      "faccion": "Nod-Krai",
      "desc": "Personaje 4★ Hydro de Mandoble, la primera de su tipo, obtenible gratis en la misión de Arconte de la versión 6.0. Soporte Hydro que aplica Hydro en área y otorga fuertes bonos de Maestría Elemental al equipo, ideal para Floración, Hyperfloración y Vaporización. Pertenece al Taller Krumkake Clink-Clank de Nod-Krai.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Character_Aino_Full_Wish.png"
    },
    "elemento": "Hydro",
    "arma": "Mandoble",
    "nombre": "Aino",
    "rareza": "4",
    "faccion": "Nod-Krai",
    "version": "6.0"
  },
  {
    "id": "flins",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Noche de la Revelación del Cielo",
    "sets": [
      {
        "es": "Noche de la Revelación del Cielo",
        "en": "Night of the Sky's Unveiling",
        "nota": "Mejor set: 30% Prob. CRIT y 10% bono de Daño de Reacción Lunar",
        "best": true
      },
      {
        "es": "Cazador Fantasmal",
        "en": "Marechaussee Hunter",
        "nota": "Buena opción en equipos con Furina",
        "best": false
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Set de transición",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Ruinas Ensangrentadas",
        "en": "Bloodsoaked Ruins",
        "nota": "Arma insignia, sinergia total con Carga Lunar",
        "best": true
      },
      {
        "es": "Báculo de las Arenas Escarlatas",
        "en": "Staff of the Scarlet Sands",
        "nota": "Alternativa 5★",
        "best": false
      },
      {
        "es": "Azada Excavatesoros",
        "en": "Prospector's Shovel",
        "nota": "Mejor opción F2P (craftable de Nod-Krai)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Carga Lunar",
        "agentes": [
          "Flins",
          "Ineffa",
          "Aino",
          "Sucrose"
        ],
        "best": true
      },
      {
        "nombre": "Carga Lunar (Fischl)",
        "agentes": [
          "Flins",
          "Fischl",
          "Columbina",
          "Sucrose"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal de Carga Lunar: alcanza ~2500 de ATQ y 130-140% de Recarga de Energía, luego CRÍTICO y el resto en Maestría. Necesita un compañero de Nod-Krai para llegar a Signo Lunar: Fulgor Ascendente nivel 2.",
    "ficha": {
      "nombreCompleto": "Flins",
      "faccion": "Nod-Krai",
      "desc": "Personaje 5★ Electro de Lanza de Nod-Krai, miembro de los Guardianes de la Luz (Lightkeepers). Es un DPS principal de Carga Lunar que valora aliados Electro e Hydro para desencadenar y mantener la reacción. Debutó en la Fase 2 de la versión 6.0 (30 de septiembre de 2025).",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/a/a2/Character_Flins_Full_Wish.png"
    },
    "elemento": "Electro",
    "arma": "Lanza",
    "nombre": "Flins",
    "rareza": "5",
    "faccion": "Nod-Krai",
    "version": "6.0"
  },
  {
    "id": "lauma",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Dendro",
      "alt": "Maestría Elemental"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Maestría Elemental",
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Recuerdos de Bosque Milenario",
    "sets": [
      {
        "es": "Recuerdos de Bosque Milenario",
        "en": "Deepwood Memories",
        "nota": "Reduce la RES a Dendro del enemigo; ideal si Lauma es la única fuente de apoyo Dendro del equipo.",
        "best": true
      },
      {
        "es": "Flor Olvidada del Paraíso",
        "en": "Flower of Paradise Lost",
        "nota": "Aumenta el daño de Floración/Hiperfloración/Exuberancia y otorga Maestría Elemental.",
        "best": false
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Maestría Elemental para potenciar reacciones si otro aliado ya porta Bosque Milenario.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Sueños de las Mil Noches",
        "en": "A Thousand Floating Dreams",
        "nota": "Catalizador 5★ centrado en Maestría Elemental; excelente para un apoyo de reacciones.",
        "best": true
      },
      {
        "es": "Fruto de la Culminación",
        "en": "Fruit of Fulfillment",
        "nota": "Catalizador 4★ fabricable con mucha Maestría Elemental; opción accesible.",
        "best": false
      },
      {
        "es": "Jade Sacrificial",
        "en": "Sacrificial Jade",
        "nota": "5★ con PV y Maestría Elemental al salir del campo; alternativa de apoyo fuera de campo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Floración / Floración Lunar",
        "agentes": [
          "Lauma",
          "Nahida",
          "Xingqiu",
          "Kuki Shinobu"
        ],
        "best": true
      },
      {
        "nombre": "Floración con Nilou",
        "agentes": [
          "Lauma",
          "Nilou",
          "Nahida",
          "Xingqiu"
        ],
        "best": false
      }
    ],
    "consejo": "Personaje jugable confirmado (Dendro, catalizador) de Nod-Krai, orientada a apoyar reacciones de Floración y Floración Lunar escalando con Maestría Elemental. Su arma y set de firma pueden ser óptimos; mientras tanto se recomiendan piezas de apoyo Dendro establecidas. Los equipos indicados son arquetipos generales de Floración.",
    "ficha": {
      "nombreCompleto": "Lauma",
      "faccion": "Nod-Krai",
      "desc": "Personaje jugable de Dendro (catalizador) de 5★ introducida en la región de Nod-Krai. Actúa como apoyo de reacciones basadas en Floración y Floración Lunar. Su rendimiento escala principalmente con la Maestría Elemental.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Lauma_Card.png/revision/latest?cb=20250805151400"
    },
    "nombre": "Lauma",
    "rareza": "5",
    "elemento": "Dendro",
    "arma": "Catalizador",
    "faccion": "Nod-Krai",
    "version": "6.0"
  },
  {
    "id": "nefer",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "Bonificación de Daño Dendro"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Maestría Elemental"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "Maestría Elemental"
    ],
    "setPrincipal": "Noche de la Revelación del Cielo",
    "sets": [
      {
        "es": "Noche de la Revelación del Cielo",
        "en": "Night of the Sky's Unveiling",
        "nota": "Mejor set: 30% Prob. CRIT, 10% bono Daño de Floración Lunar y 80 de Maestría",
        "best": true
      },
      {
        "es": "Sueños Áureos",
        "en": "Gilded Dreams",
        "nota": "Set de transición mientras farmeas",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Relicario de la Verdad",
        "en": "Reliquary of Truth",
        "nota": "Arma insignia, BiS",
        "best": true
      },
      {
        "es": "Espejo Tejenoches",
        "en": "Nightweaver's Looking Glass",
        "nota": "Segunda mejor (arma de Lauma)",
        "best": false
      },
      {
        "es": "Lámpara Medulaoscura",
        "en": "Blackmarrow Lantern",
        "nota": "Base F2P (craftable)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Floración Lunar",
        "agentes": [
          "Nefer",
          "Aino",
          "Lauma",
          "Kuki Shinobu"
        ],
        "best": true
      },
      {
        "nombre": "Floración Lunar (Furina)",
        "agentes": [
          "Nefer",
          "Furina",
          "Lauma",
          "Ineffa"
        ],
        "best": false
      }
    ],
    "consejo": "DPS on-field de Floración Lunar: lleva Maestría Elemental en Reloj y Cáliz porque la reacción escala con Maestría y cuenta como daño de reacción (el cáliz de Daño Dendro rinde menos). Aún así puede dar CRÍTICO, así que busca ratio CRÍTICO en la Tiara.",
    "ficha": {
      "nombreCompleto": "Nefer",
      "faccion": "Nod-Krai",
      "desc": "Personaje 5★ Dendro de Catalizador de Nod-Krai, del Curatorium de Secretos. DPS on-field que causa daño masivo con la nueva reacción de Floración Lunar (Lunar-Bloom), una variante superior de Floración que conserva la capacidad de dar CRÍTICO. Su Habilidad la pone en estado de Danza de Sombras. Debutó en la versión 6.1 (22 de octubre de 2025).",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/8/85/Character_Nefer_Full_Wish.png"
    },
    "elemento": "Dendro",
    "arma": "Catalizador",
    "nombre": "Nefer",
    "rareza": "5",
    "faccion": "Nod-Krai",
    "version": "6.1"
  },
  {
    "id": "durin",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Pyro",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Ritual Antiguo de la Nobleza",
    "sets": [
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "Por defecto para su rol de soporte con Explosión",
        "best": true
      },
      {
        "es": "Día de los Vientos Alzantes",
        "en": "A Day Carved from Rising Winds",
        "nota": "Set Hexerei: mejora ATQ y CRÍTICO",
        "best": false
      },
      {
        "es": "Bruja Carmesí en Llamas",
        "en": "Crimson Witch of Flames",
        "nota": "Mejor en equipos de Sobrevaporización como DPS",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Athame Artis",
        "en": "Athame Artis",
        "nota": "BiS, sobre todo con un compañero Hexerei",
        "best": true
      },
      {
        "es": "Juramento por la Libertad",
        "en": "Freedom-Sworn",
        "nota": "Genial para DPS que escalan con ATQ",
        "best": false
      },
      {
        "es": "Espada de Favonius",
        "en": "Favonius Sword",
        "nota": "Opción F2P/4★ de Recarga de Energía",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Sobrecarga (soporte)",
        "agentes": [
          "Durin",
          "Varesa",
          "Fischl",
          "Chevreuse"
        ],
        "best": true
      },
      {
        "nombre": "Vaporización (DPS)",
        "agentes": [
          "Durin",
          "Furina",
          "Mona",
          "Xilonen"
        ],
        "best": false
      }
    ],
    "consejo": "Alterna entre Modo Luz (buffs de equipo) y Modo Oscuridad (daño personal) con su Explosión. Busca ~2500 de ATQ y 100-150% de Recarga de Energía; sube tanto la Habilidad como la Explosión, pues la Habilidad mejora la regeneración de energía por nivel.",
    "ficha": {
      "nombreCompleto": "Durin \"El Fuego Imperecedero\"",
      "faccion": "Mondstadt",
      "desc": "Personaje 5★ Pyro de Espada, el legendario dragón conocido como \"El Fuego Imperecedero\", ligado al Hexenzirkel (círculo de brujas) de Mondstadt. Sub-DPS/soporte Pyro que alterna entre Modo Luz y Modo Oscuridad para dar buffs de equipo o daño personal off-field, encajando muy bien en equipos Hexerei. Debutó en la Fase 1 de la versión 6.2 (3 de diciembre de 2025).",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/2/23/Character_Durin_Full_Wish.png"
    },
    "elemento": "Pyro",
    "arma": "Espada",
    "nombre": "Durin",
    "rareza": "5",
    "faccion": "Mondstadt",
    "version": "6.2"
  },
  {
    "id": "jahoda",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Anemo"
    },
    "tiara": {
      "principal": "Prob. CRIT",
      "alt": "Bonificación de Curación / ATQ%"
    },
    "substats": [
      "Recarga de Energía",
      "ATQ%",
      "Prob. CRIT",
      "Daño CRIT",
      "Maestría Elemental"
    ],
    "setPrincipal": "Sombra Verde Esmeralda",
    "sets": [
      {
        "es": "Sombra Verde Esmeralda",
        "en": "Viridescent Venerer",
        "nota": "Mejor opción como soporte Anemo: reduce RES elemental del enemigo tras hacer torbellino.",
        "best": true
      },
      {
        "es": "Serenata de la Luna Tejida",
        "en": "Silken Moon's Serenade",
        "nota": "Preferido en equipos de reacciones Lunares por su buff de Maestría al equipo.",
        "best": false
      },
      {
        "es": "Instructor",
        "en": "Instructor",
        "nota": "Alternativa 4* accesible: +120 Maestría Elemental a todo el equipo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Elegía del Fin",
        "en": "Elegy for the End",
        "nota": "Premium: aporta Maestría y buff de ATQ al equipo.",
        "best": true
      },
      {
        "es": "Arco de Favonius",
        "en": "Favonius Warbow",
        "nota": "Opción por defecto para generar energía al equipo (necesita Prob. CRIT).",
        "best": false
      },
      {
        "es": "Aqua Simulacra",
        "en": "Aqua Simulacra",
        "nota": "Si se quiere invertir en su daño personal.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Anemo Soporte / Reacciones",
        "agentes": [
          "Jahoda",
          "Flins",
          "Mona",
          "Fischl"
        ],
        "best": true
      },
      {
        "nombre": "Sobrevaporización",
        "agentes": [
          "Jahoda",
          "Ineffa",
          "Mona",
          "Durin"
        ],
        "best": false
      }
    ],
    "consejo": "Lanzada de verdad en la 6.2; es una soporte Anemo (infusora + curación) que se juega con Sombra Verde Esmeralda priorizando Recarga y ATQ%. Nada de parcial.",
    "ficha": {
      "nombreCompleto": "Jahoda",
      "faccion": "Curatorium of Secrets (Nod-Krai)",
      "desc": "Personaje 4 estrellas Anemo de arco procedente de Nod-Krai, donde trabaja para el Curatorium of Secrets. Actúa como soporte Anemo, infundiendo viento y aportando curación con su Habilidad Definitiva. Se apoya en la reducción de resistencia elemental para potenciar al equipo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Jahoda_Card.png/revision/latest?cb=20251024100537"
    },
    "elemento": "Anemo",
    "arma": "Arco",
    "nombre": "Jahoda",
    "rareza": "4",
    "faccion": "Curatorium of Secrets (Nod-Krai)",
    "version": "6.2 (Luna III), Fase 1 - 3 dic 2025"
  },
  {
    "id": "columbina",
    "estado": "completo",
    "arena": {
      "principal": "PV%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "PV%",
      "alt": "Bonificación de Daño Hydro"
    },
    "tiara": {
      "principal": "Prob. CRIT / Daño CRIT",
      "alt": "PV%"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "PV%"
    ],
    "setPrincipal": "Serenata de la Luna Tejida",
    "sets": [
      {
        "es": "Serenata de la Luna Tejida",
        "en": "Silken Moon's Serenade",
        "nota": "Set principal como soporte/sub-DPS en equipos de reacción Lunar (escala con PV).",
        "best": true
      },
      {
        "es": "Noche de la Revelación del Cielo",
        "en": "Night of the Sky's Unveiling",
        "nota": "Preferido si actúa como on-field que dispara la reacción Lunar (Prob. CRIT según Moonsign).",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Nocturno tras el Velo",
        "en": "Nocturne's Curtain Call",
        "nota": "Arma insignia: sube PV, CRIT y Daño de reacción Lunar, y reduce su coste de energía.",
        "best": true
      },
      {
        "es": "Jade Sacrificial",
        "en": "Sacrificial Jade",
        "nota": "Buena opción 4* por PV y daño.",
        "best": false
      },
      {
        "es": "Códice Favonius",
        "en": "Favonius Codex",
        "nota": "Para cubrir necesidades de energía como soporte.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Floración Lunar (Lunar-Bloom)",
        "agentes": [
          "Nefer",
          "Lauma",
          "Yaoyao",
          "Columbina"
        ],
        "best": true
      }
    ],
    "consejo": "Fue mucho tiempo NPC (la Tercera de los Heraldos Fatui, 'La Damisela'), pero YA es jugable desde la 6.3: Hydro catalizador sub-DPS/soporte de reacciones Lunares que escala con PV. Confirmado lanzada, no es parcial.",
    "ficha": {
      "nombreCompleto": "Columbina Hyposelenia",
      "faccion": "Heraldos Fatui (Snezhnaya) - la Tercera, 'La Damisela'",
      "desc": "Antigua NPC convertida en personaje jugable: es Columbina, la Tercera de los Once Heraldos Fatui, apodada 'La Damisela'. Personaje 5 estrellas Hydro de catalizador. Su Habilidad invoca una onda de gravedad que sigue al personaje activo, y su Definitiva crea un Dominio Lunar que potencia cada tipo de reacción. Escala con PV máximo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/2/23/Columbina_Card.png/revision/latest?cb=20251210040329"
    },
    "elemento": "Hydro",
    "arma": "Catalizador",
    "nombre": "Columbina",
    "rareza": "5",
    "faccion": "Heraldos Fatui (Snezhnaya) - la Tercera, 'La Damisela'",
    "version": "6.3 (Luna IV), Fase 1 - 14 ene 2026"
  },
  {
    "id": "illuga",
    "estado": "completo",
    "arena": {
      "principal": "Maestría Elemental",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Maestría Elemental",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Maestría Elemental",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "Maestría Elemental",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Serenata de la Luna Tejida",
    "sets": [
      {
        "es": "Serenata de la Luna Tejida",
        "en": "Silken Moon's Serenade",
        "nota": "Set principal para equipos de Cristalización Lunar (a C0-C1 sólo ~8s de uptime; C2 lo mejora).",
        "best": true
      },
      {
        "es": "Pergamino del Héroe de la Ciudad de las Cenizas",
        "en": "Scroll of the Hero of Cinder City",
        "nota": "+12% daño Geo e Hydro tras disparar Cristalización Lunar.",
        "best": false
      },
      {
        "es": "Instructor",
        "en": "Instructor",
        "nota": "Alternativa con limitaciones de uptime similares.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Perdición del Dragón",
        "en": "Dragon's Bane",
        "nota": "Mayor Maestría Elemental de todas las lanzas: su mejor en losa como buffer.",
        "best": true
      },
      {
        "es": "Lanza de Favonius",
        "en": "Favonius Lance",
        "nota": "Gran Recarga y generación de partículas para todo el equipo.",
        "best": false
      },
      {
        "es": "Cruz de Kitain",
        "en": "Kitain Cross Spear",
        "nota": "Mejor opción gratuita, con subestadística de Maestría.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Cristalización Lunar (núcleo Zibai)",
        "agentes": [
          "Illuga",
          "Zibai",
          "Columbina",
          "Xilonen"
        ],
        "best": true
      }
    ],
    "consejo": "Lanzado de verdad en la 6.3 Fase 2. Soporte Geo 4* que potencia el daño de Cristalización Lunar con su Definitiva (escala con Maestría). NO dispara la reacción solo: necesita a Zibai o Columbina. Completo.",
    "ficha": {
      "nombreCompleto": "Illuga",
      "faccion": "Lightkeepers (Nod-Krai)",
      "desc": "Personaje 4 estrellas Geo de lanza y miembro de los Lightkeepers de Nod-Krai. Es un soporte buffer especializado en amplificar el daño de Cristalización Lunar mediante su Habilidad Definitiva, con capacidades que escalan con Maestría Elemental. Rinde mejor con dos o más aliados Geo/Hydro.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/5/5c/Illuga_Card.png/revision/latest?cb=20251211100501"
    },
    "elemento": "Geo",
    "arma": "Lanza",
    "nombre": "Illuga",
    "rareza": "4",
    "faccion": "Lightkeepers (Nod-Krai)",
    "version": "6.3 (Luna IV), Fase 2 - 3 feb 2026"
  },
  {
    "id": "zibai",
    "estado": "completo",
    "arena": {
      "principal": "DEF%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "DEF%",
      "alt": "Maestría Elemental"
    },
    "tiara": {
      "principal": "Prob. CRIT / Daño CRIT",
      "alt": "DEF%"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "DEF%",
      "Maestría Elemental",
      "Recarga de Energía"
    ],
    "setPrincipal": "Noche de la Revelación del Cielo",
    "sets": [
      {
        "es": "Noche de la Revelación del Cielo",
        "en": "Night of the Sky's Unveiling",
        "nota": "Con diferencia su mejor set: 80 Maestría, 30% Prob. CRIT y +10% daño de reacción Lunar al equipo.",
        "best": true
      },
      {
        "es": "Cáscara de los Sueños Opulentos",
        "en": "Husk of Opulent Dreams",
        "nota": "Marcador de posición (escala con DEF), bastante peor que el set principal.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Refulgencia de la Luna",
        "en": "Lightbearing Moonshard",
        "nota": "Arma insignia: Daño CRIT, DEF% y bonificación de daño de Cristalización Lunar. Mejor en losa.",
        "best": true
      },
      {
        "es": "Cortatelones de Urakusai",
        "en": "Cortatelones de Urakusai",
        "nota": "Gran alternativa: Daño CRIT y DEF%, sube daño de Ataque Normal y Habilidad.",
        "best": false
      },
      {
        "es": "Flauta de Ezpitzal",
        "en": "Flute of Ezpitzal",
        "nota": "Mejor opción gratuita/craftéable (sube DEF con la Habilidad).",
        "best": false
      },
      {
        "es": "Heraldo del Alba",
        "en": "Harbinger of Dawn",
        "nota": "Mejor 4* por valor CRIT si mantienes su pasiva con curador dedicado.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Triple Geo Cristalización Lunar",
        "agentes": [
          "Zibai",
          "Illuga",
          "Linnea",
          "Columbina"
        ],
        "best": true
      },
      {
        "nombre": "Doble Geo",
        "agentes": [
          "Zibai",
          "Xilonen",
          "Columbina",
          "Furina"
        ],
        "best": false
      }
    ],
    "consejo": "Lanzada de verdad en la 6.3 Fase 2. DPS principal Geo de espada 5* que escala con DEFENSA (no ATQ); todo su kit gira en torno a la Cristalización Lunar. Cáliz DEF% (no Bonif. Daño Geo). Completo.",
    "ficha": {
      "nombreCompleto": "Zibai",
      "faccion": "Adepta de Liyue (porta una Rueda Lunar Geo en lugar de Visión)",
      "desc": "Personaje 5 estrellas Geo de espada; es una Adepta de Liyue que, en vez de una Visión, posee una Rueda Lunar Geo. Funciona como DPS principal de Cristalización Lunar: su daño frontal proviene de su Habilidad Elemental potenciada y todas sus habilidades escalan con Defensa.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/f/fb/Zibai_Card.png/revision/latest?cb=20251211040212"
    },
    "elemento": "Geo",
    "arma": "Espada",
    "nombre": "Zibai",
    "rareza": "5",
    "faccion": "Adepta de Liyue (porta una Rueda Lunar Geo en lugar de Visión)",
    "version": "6.3 (Luna IV), Fase 2 - 3 feb 2026"
  },
  {
    "id": "varka",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "Bonificación de Daño Anemo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Maestría Elemental",
      "Recarga de Energía"
    ],
    "setPrincipal": "Día de los Vientos Alzantes",
    "sets": [
      {
        "es": "Día de los Vientos Alzantes",
        "en": "A Day Carved from Rising Winds",
        "nota": "Set principal: ATQ y Prob. CRIT al completar 'Witch's Homework'.",
        "best": true
      },
      {
        "es": "Épica del Pabellón del Desierto",
        "en": "Desert Pavilion Chronicle",
        "nota": "Bonif. Daño Anemo y ataques Normal/Cargado.",
        "best": false
      },
      {
        "es": "Reminiscencia de la Purificación",
        "en": "Shimenawa's Reminiscence",
        "nota": "ATQ y aumento de daño de ataques.",
        "best": false
      },
      {
        "es": "Cazador Fantasmal",
        "en": "Marechaussee Hunter",
        "nota": "Sólo si lo juegas con Furina (manipulación de PV); restringe el equipo.",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Cantar de Gesta del Lobo",
        "en": "Gest of the Mighty Wolf",
        "nota": "Arma insignia y mejor en losa con diferencia: Prob. CRIT, vel. de ataque, daño y Daño CRIT.",
        "best": true
      },
      {
        "es": "Mil Soles Abrasadores",
        "en": "A Thousand Blazing Suns",
        "nota": "Fuerte alternativa 5*.",
        "best": false
      },
      {
        "es": "Emblema del Mar de Juncos",
        "en": "Beacon of the Reed Sea",
        "nota": "Buena opción de ATQ y CRIT.",
        "best": false
      },
      {
        "es": "Médula de la Serpiente Marina",
        "en": "Serpent Spine",
        "nota": "Mejor 4* (Battle Pass).",
        "best": false
      },
      {
        "es": "Prototipo Arcaico",
        "en": "Prototype Archaic",
        "nota": "Mejor opción gratuita/craftéable.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Varka Hipercarry (con Furina)",
        "agentes": [
          "Varka",
          "Furina",
          "Zhongli",
          "Yelan"
        ],
        "best": true
      }
    ],
    "consejo": "Mencionado como NPC desde la 1.0 (Gran Maestre ausente de Mondstadt), pero YA es jugable desde la 6.4: DPS on-field Anemo 5* de doble mandoble que inflige dos tipos de daño elemental a la vez. Confirmado lanzado, no es parcial.",
    "ficha": {
      "nombreCompleto": "Varka",
      "faccion": "Caballeros de Favonius (Mondstadt) - Gran Maestre",
      "desc": "Antiguo NPC hecho jugable: es Varka, el Gran Maestre de los Caballeros de Favonius, por fin de vuelta en Mondstadt. Personaje 5 estrellas Anemo de mandoble con estilo de doble empuñadura: su Habilidad convierte el daño de su mandoble derecho según el elemento de los aliados (Pyro/Hydro/Electro/Cryo) mientras el izquierdo inflige daño Anemo.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Varka_Card.png/revision/latest?cb=20260123040343"
    },
    "elemento": "Anemo",
    "arma": "Mandoble",
    "nombre": "Varka",
    "rareza": "5",
    "faccion": "Caballeros de Favonius (Mondstadt) - Gran Maestre",
    "version": "6.4 (Luna V), 25 feb 2026"
  },
  {
    "id": "linnea",
    "estado": "completo",
    "arena": {
      "principal": "DEF%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "DEF%",
      "alt": "Bonificación de Daño Geo"
    },
    "tiara": {
      "principal": "Prob. CRIT / Daño CRIT",
      "alt": "DEF%"
    },
    "substats": [
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT",
      "DEF%",
      "Maestría Elemental"
    ],
    "setPrincipal": "Cáscara de Sueños Opulentos",
    "sets": [
      {
        "es": "Cáscara de Sueños Opulentos",
        "en": "Husk of Opulent Dreams",
        "nota": "Mejor opción general: escala con DEF% y da Bonif. Daño Geo",
        "best": true
      },
      {
        "es": "Aubade de la Estrella del Alba y la Luna",
        "en": "Aubade of Morningstar and Moon",
        "nota": "Set de reacción lunar; potencia el daño de Lunar-Cristalización (nombre ES tentativo)",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Juramento Dorado del Vínculo Helado",
        "en": "Golden Frostbound Oath",
        "nota": "Arma insignia (Arco); nombre ES tentativo",
        "best": true
      },
      {
        "es": "Simulacro Acuático",
        "en": "Aqua Simulacra",
        "nota": "Alternativa 5★ con Daño CRIT",
        "best": false
      },
      {
        "es": "Arco de Favonius",
        "en": "Favonius Warbow",
        "nota": "Opción 4★ accesible recomendada por Game8 como arco de uso general: la Recarga de Energía y las partículas del pasivo alimentan su Estallido de soporte",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Cristalización Lunar",
        "agentes": [
          "Linnea",
          "Navia",
          "Columbina",
          "Furina"
        ],
        "best": true
      }
    ],
    "consejo": "Sub-DPS/buffer de Lunar-Cristalización que escala con DEF%; necesita SÍ o SÍ un aplicador Hydro (Furina, Columbina, Xingqiu) para activar su mecánica. Lanzada en la versión 6.5.",
    "ficha": {
      "nombreCompleto": "Linnea",
      "faccion": "Nod-Krai",
      "desc": "Consejera y 'Augur de las Maravillas' del Gremio de Aventureros. Invoca a su compañera mecánica Lumi para golpear a los enemigos y provocar daño de Lunar-Cristalización. De origen ligado a Snezhnaya en el lore.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/3/31/Linnea_Card.png/revision/latest?cb=20260306040439"
    },
    "elemento": "Geo",
    "arma": "Arco",
    "nombre": "Linnea",
    "rareza": "5",
    "faccion": "Nod-Krai",
    "version": "6.5"
  },
  {
    "id": "nicole",
    "estado": "completo",
    "arena": {
      "principal": "Recarga de Energía",
      "alt": "ATQ%"
    },
    "caliz": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "tiara": {
      "principal": "ATQ%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "ATQ%",
      "Recarga de Energía",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Dádiva Celestial",
    "sets": [
      {
        "es": "Dádiva Celestial",
        "en": "Celestial Gift",
        "nota": "Buff de daño a todo el equipo; su mejor set aunque sea la única Hexerei (nombre ES tentativo)",
        "best": true
      },
      {
        "es": "Ritual Antiguo de la Nobleza",
        "en": "Noblesse Oblige",
        "nota": "Si otro aliado ya lleva Dádiva Celestial: +20% ATQ al equipo tras el Estallido",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Heptadas de los Ángeles",
        "en": "Angelos' Heptades",
        "nota": "Arma insignia (Catalizador), enfocada en ATQ; nombre ES tentativo",
        "best": true
      },
      {
        "es": "Pergamino Celestial",
        "en": "Skyward Atlas",
        "nota": "Alternativa 5★ con ATQ%",
        "best": false
      },
      {
        "es": "Ojo del Juramento",
        "en": "Oathsworn Eye",
        "nota": "Mejor opción F2P 4★ (evento de Enkanomiya): ATQ% para acercarse al tope de 4000 ATQ y pasivo de Recarga de Energía tras usar la Habilidad",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hexerei Pyro",
        "agentes": [
          "Nicole",
          "Varka",
          "Prune",
          "Durin"
        ],
        "best": true
      }
    ],
    "consejo": "SÍ existe en Genshin: es Nicole Reeyn, soporte Pyro off-field (buff de ATQ, escudo y ataques coordinados) del Hexenzirkel, lanzada en 6.6. OJO: NO confundir con 'Nicole Demara', personaje distinto de Zenless Zone Zero (ZZZ). Su buff de ATQ topa en 4000 ATQ.",
    "ficha": {
      "nombreCompleto": "Nicole Reeyn",
      "faccion": "Hexenzirkel (antes Celestia)",
      "desc": "La primera bruja del Hexenzirkel jugable, apodada 'El Clamor Interior'. Soporte Pyro que otorga bonificación de ATQ y el 'Escudo de Luz Ardiente' con su Habilidad, y convoca 'Proyecciones Arcanas' que hacen ataques coordinados del elemento del personaje activo. En el lore es un ángel.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/1/11/Nicole_Card.png/revision/latest?cb=20260413040349"
    },
    "elemento": "Pyro",
    "arma": "Catalizador",
    "nombre": "Nicole",
    "rareza": "5",
    "faccion": "Hexenzirkel (antes Celestia)",
    "version": "6.6"
  },
  {
    "id": "lohen",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Maestría Elemental"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Prob. CRIT / Daño CRIT",
      "alt": "ATQ%"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Día de los Vientos Alzantes",
    "sets": [
      {
        "es": "Día de los Vientos Alzantes",
        "en": "A Day Carved From Rising Winds",
        "nota": "BiS real como unidad Hexerei (set 6.x verificado en la wiki)",
        "best": true
      },
      {
        "es": "Nómada del Invierno",
        "en": "Blizzard Strayer",
        "nota": "Solo en equipos de Congelación (Prob. CRIT enorme contra enemigos congelados)",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Desastre y Arrepentimiento",
        "en": "Disaster and Remorse",
        "nota": "Arma insignia (Lanza); mejora N/Cargado/Habilidad/Estallido. Nombre ES tentativo",
        "best": true
      },
      {
        "es": "Vara de las Arenas Escarlata",
        "en": "Staff of the Scarlet Sands",
        "nota": "Alternativa 5★ (escala con Maestría a ATQ)",
        "best": false
      },
      {
        "es": "Alabarda del Viento Epistolar",
        "en": "Missive Windspear",
        "nota": "Opción F2P 4★ (Prob. CRIT + ATQ al reaccionar)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Cryo DPS Hexerei",
        "agentes": [
          "Lohen",
          "Prune",
          "Citlali",
          "Nicole"
        ],
        "best": true
      }
    ],
    "consejo": "DPS Cryo de alta frecuencia (modo 'Obra Maestra') que aumenta su propio daño con el daño de los aliados; apunta a ~80% Prob. CRIT y ~160% Daño CRIT. Lanzado en la 2ª fase de la versión 6.6.",
    "ficha": {
      "nombreCompleto": "Lohen",
      "faccion": "Mondstadt",
      "desc": "Vicecapitán de la Compañía de Tiradores de los Caballeros de Favonius, apodado 'Punta de Flecha Afilada'. Sus ataques infligen Cryo no sobrescribible durante 'Obra Maestra', acumula 'Alegría' y 'Voluntad de Vencer' para reforzar su daño y su Estallido.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/5/56/Lohen_Card.png/revision/latest?cb=20260414040204"
    },
    "elemento": "Cryo",
    "arma": "Lanza",
    "nombre": "Lohen",
    "rareza": "5",
    "faccion": "Mondstadt",
    "version": "6.6"
  },
  {
    "id": "prune",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Anemo"
    },
    "tiara": {
      "principal": "ATQ%",
      "alt": "Prob. CRIT"
    },
    "substats": [
      "Recarga de Energía",
      "ATQ%",
      "Prob. CRIT",
      "Daño CRIT"
    ],
    "setPrincipal": "Sombra Verde Esmeralda",
    "sets": [
      {
        "es": "Sombra Verde Esmeralda",
        "en": "Viridescent Venerer",
        "nota": "BiS: reduce RES elemental vía Torbellino; base de casi todos sus equipos",
        "best": true
      },
      {
        "es": "Dádiva Celestial",
        "en": "Celestial Gift",
        "nota": "Cuando el Torbellino no coincide con el elemento del DPS principal",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Pergamino Celestial",
        "en": "Skyward Atlas",
        "nota": "Apila ATQ% (busca ~4000 ATQ para maximizar el buff)",
        "best": true
      },
      {
        "es": "Ojo del Juramento",
        "en": "Oathsworn Eye",
        "nota": "Mejor opción F2P 4★: reduce la necesidad de Recarga ~30-35%",
        "best": false
      },
      {
        "es": "Códice de Favonius",
        "en": "Favonius Codex",
        "nota": "Gran opción de soporte 4★ cuando es la única Anemo del equipo: Recarga de Energía y partículas para todo el grupo",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hexerei / Torbellino",
        "agentes": [
          "Prune",
          "Varka",
          "Durin",
          "Nicole"
        ],
        "best": true
      }
    ],
    "consejo": "Soporte/buffer Anemo 4★ (sub-DPS Hexerei) que da bonif. de daño al equipo y aplica Torbellino off-field; apunta a ~200% Recarga (menos si hay un 2º Anemo). Lanzada en la versión 6.6.",
    "ficha": {
      "nombreCompleto": "Prune",
      "faccion": "Mondstadt",
      "desc": "'Sueños Infantiles Atesorados', la pequeña 'cazabrujas' guiada por una razón precoz. Golpea la 'Campana Atraebrujas' para provocar Torbellino y convertir su 'Martillo del Juramento' al elemento del Torbellino, otorgando el efecto 'Repique de Batalla' al equipo. Ligada a Nod-Krai en el lore.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/d/d0/Prune_Card.png/revision/latest?cb=20260414100530"
    },
    "elemento": "Anemo",
    "arma": "Catalizador",
    "nombre": "Prune",
    "rareza": "4",
    "faccion": "Mondstadt",
    "version": "6.6"
  },
  {
    "id": "sandrone",
    "estado": "completo",
    "arena": {
      "principal": "ATQ%",
      "alt": "Recarga de Energía"
    },
    "caliz": {
      "principal": "Bonificación de Daño Cryo",
      "alt": "ATQ%"
    },
    "tiara": {
      "principal": "Daño CRIT / Prob. CRIT",
      "alt": "ATQ%"
    },
    "substats": [
      "Prob. CRIT",
      "Daño CRIT",
      "ATQ%",
      "Recarga de Energía"
    ],
    "setPrincipal": "Desilusión Congelada en las Sombras",
    "sets": [
      {
        "es": "Desilusión Congelada en las Sombras",
        "en": "Disenchantment in Deep Shadow",
        "nota": "BiS claro: +80% daño de Superconducción y +16% Prob. CRIT; supera cualquier otro set. Nombre ES tentativo",
        "best": true
      },
      {
        "es": "Nómada del Invierno",
        "en": "Blizzard Strayer",
        "nota": "Alternativa si no tienes el set nuevo (equipos de Congelación)",
        "best": false
      }
    ],
    "armas": [
      {
        "es": "Llave de la Trascendencia",
        "en": "A Teaspoon of Transcendence",
        "nota": "Arma insignia y único mandoble con bonif. de Conducción Estelar; uptime casi permanente. Nombre ES tentativo",
        "best": true
      },
      {
        "es": "Lápida del Lobo",
        "en": "Wolf's Gravestone",
        "nota": "Alternativa con ATQ (OJO: los pasivos de 'Bonif. Daño %' NO aplican a la Conducción Estelar)",
        "best": false
      },
      {
        "es": "Sombra de la Marea",
        "en": "Tidal Shadow",
        "nota": "Mejor 4★ F2P (forjable de Fontaine): ATQ% y buff de ATQ tras ser curada; ideal porque los pasivos de Bonif. de Daño% no aplican a la Conducción Estelar (requiere sanador en el equipo)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Conducción Estelar (Premium)",
        "agentes": [
          "Sandrone",
          "Yae Miko",
          "Qiqi",
          "Xilonen"
        ],
        "best": true
      }
    ],
    "consejo": "Confirmada en la versión 6.7 (1 jul 2026), Fase 1. DPS Cryo de Carga que introduce la nueva reacción Conducción Estelar (evolución de Superconducción): requiere un aplicador Electro off-field y una batería/buffer Cryo. Escala con ATQ y CRIT.",
    "ficha": {
      "nombreCompleto": "Sandrone (Marionette Guillotin)",
      "faccion": "Snezhnaya",
      "desc": "'La Marioneta', Séptima de los Once Heraldos Fatui, apodada 'Análisis Reflejado'. DPS Cryo que combate con su mecanismo 'Fagio' gestionando su Poder en dos modos, y despliega el 'Campo Estrella Polar' para dar Bonif. Daño Cryo/Electro y bajar la RES física de los enemigos.",
      "img": "https://static.wikia.nocookie.net/gensin-impact/images/2/22/Sandrone_Card.png/revision/latest?cb=20260525040550"
    },
    "elemento": "Cryo",
    "arma": "Mandoble",
    "nombre": "Sandrone",
    "rareza": "5",
    "faccion": "Snezhnaya",
    "version": "6.7"
  }
];
