// ============================================================
//  WuWa Guía rápida — datos de personajes (Wuthering Waves)
//  55 Resonadores. Auditado; incluye v3.5 (10-jul-2026).
// ============================================================
const CHARACTERS = [
  {
    "id": "errante-espectro",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Espectro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "ecoPrincipal": "Garza de la Impermanencia",
    "substats": [
      "Regeneración de Energía",
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Espectro"
    ],
    "armas": [
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "5★ estándar; Prob. Crítico + Regeneración de Energía para tener la Liberación cada rotación",
        "best": true
      },
      {
        "es": "Brillo Lumínico",
        "en": "Lumingloss",
        "nota": "5★ del Pase de Batalla; buena alternativa de ATQ y crítico",
        "best": false
      },
      {
        "es": "Broche del Comandante",
        "en": "Commander's Hair Clasp",
        "nota": "4★ F2P; Prob. Crítico de subestadística",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Luz Celestial",
        "en": "Celestial Light",
        "nota": "Set de 5 piezas: potencia el Daño Espectro y aplica Espectro Frazzle",
        "best": true
      },
      {
        "es": "Nubes a la Luz de la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alternativa si se juega como soporte puro de ATQ",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Núcleo Espectro Frazzle",
        "agentes": [
          "Jinhsi",
          "Errante (Espectro)",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Quickswap de apoyo",
        "agentes": [
          "Errante (Espectro)",
          "Yinlin",
          "Baizhi"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS que aplica Espectro Frazzle mediante cambios rápidos. Prioriza Regeneración de Energía para lanzar la Liberación de Resonancia cada rotación.",
    "ficha": {
      "nombreCompleto": "Errante (Espectro)",
      "faccion": "Protagonista",
      "desc": "El protagonista despierta su resonancia del elemento Espectro. Un híbrido versátil que impregna a los enemigos con Espectro Frazzle para amplificar el daño del equipo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/7/70/Rover_1.png"
    },
    "nombre": "Errante (Espectro)",
    "rareza": "5",
    "elemento": "Espectro",
    "arma": "Espada",
    "faccion": "Protagonista",
    "version": "1.0"
  },
  {
    "id": "errante-estrago",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Estrago",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "ecoPrincipal": "Sin Corona",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Daño de Ataque Básico",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "5★ estándar; aporta Prob. Crítico, Regeneración de Energía y ATQ%, ideal para el DPS principal",
        "best": true
      },
      {
        "es": "Brillo Lumínico",
        "en": "Lumingloss",
        "nota": "5★ del Pase de Batalla; alternativa de crítico",
        "best": false
      },
      {
        "es": "Espada del Viajero",
        "en": "Sword of Voyager",
        "nota": "4★ F2P de evento; buen relleno de ATQ",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Eclipse del Ocaso",
        "en": "Sun-sinking Eclipse",
        "nota": "Set de 5 piezas: hasta +40% de Daño Estrago, el mejor para DPS principal",
        "best": true
      },
      {
        "es": "Melodías Persistentes",
        "en": "Lingering Tunes",
        "nota": "Alternativa centrada en ATQ%",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Ataque Básico Estrago",
        "agentes": [
          "Errante (Estrago)",
          "Sanhua",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Variante con escudo",
        "agentes": [
          "Errante (Estrago)",
          "Taoqi",
          "Baizhi"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal gratuito y muy fuerte. Mantén los acumuladores de Estrago con Ataques Básicos y activa la Liberación para entrar en el modo mejorado.",
    "ficha": {
      "nombreCompleto": "Errante (Estrago)",
      "faccion": "Protagonista",
      "desc": "El protagonista con su resonancia de Estrago. Un DPS principal de Ataque Básico que alterna entre forma normal y potenciada acumulando marcas de Estrago.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/7/70/Rover_1.png"
    },
    "nombre": "Errante (Estrago)",
    "rareza": "5",
    "elemento": "Estrago",
    "arma": "Espada",
    "faccion": "Protagonista",
    "version": "1.0"
  },
  {
    "id": "errante-aereo",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Aéreo",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "ecoPrincipal": "Garza de la Impermanencia",
    "substats": [
      "Regeneración de Energía",
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Aéreo"
    ],
    "armas": [
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "5★ estándar; Regeneración de Energía y crítico para su rol de apoyo Aéreo",
        "best": true
      },
      {
        "es": "Juramento del Pacto de Sangre",
        "en": "Bloodpact's Pledge",
        "nota": "5★ señalado por algunas guías como muy afín a su kit de soporte",
        "best": false
      },
      {
        "es": "Broche del Comandante",
        "en": "Commander's Hair Clasp",
        "nota": "4★ F2P de crítico",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Peregrinaje a Barlovento",
        "en": "Windward Pilgrimage",
        "nota": "Set de 5 piezas: maximiza la Erosión Aérea y aumenta su propio daño; el mejor para Erosión Aérea",
        "best": true
      },
      {
        "es": "Nubes a la Luz de la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alternativa como soporte/buffer de ATQ",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Erosión Aérea",
        "agentes": [
          "Errante (Aéreo)",
          "Jiyan",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Doble Aéreo",
        "agentes": [
          "Errante (Aéreo)",
          "Ciaccona",
          "Baizhi"
        ],
        "best": false
      }
    ],
    "consejo": "Híbrido de soporte y curación; en equipos de Erosión Aérea es de los mejores sanadores. Su set Peregrinaje a Barlovento potencia la Erosión y su propio daño.",
    "ficha": {
      "nombreCompleto": "Errante (Aéreo)",
      "faccion": "Protagonista",
      "desc": "El protagonista con su resonancia Aérea. Soporte-sanador que aplica Erosión Aérea, buffea al equipo y mantiene al grupo con vida.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/7/70/Rover_1.png"
    },
    "nombre": "Errante (Aéreo)",
    "rareza": "5",
    "elemento": "Aéreo",
    "arma": "Espada",
    "faccion": "Protagonista",
    "version": "2.0"
  },
  {
    "id": "baizhi",
    "costo4": {
      "principal": "Bonificación de Curación",
      "alt": "PV%"
    },
    "costo3": {
      "principal": "PV%",
      "alt": "Regeneración de Energía"
    },
    "costo1": {
      "principal": "PV%",
      "alt": "Regeneración de Energía"
    },
    "ecoPrincipal": "Geoquelonio Portacampana",
    "substats": [
      "Regeneración de Energía",
      "PV%",
      "Bonificación de Curación",
      "PV plano"
    ],
    "armas": [
      {
        "es": "Sinfonía Estelar",
        "en": "Stellar Symphony",
        "nota": "5★ BiS para sanadores; PV para curaciones mayores y mucha Regeneración de Energía",
        "best": true
      },
      {
        "es": "Rectificador del Viajero",
        "en": "Rectifier of Voyager",
        "nota": "4★ de evento; sólido para soporte",
        "best": false
      },
      {
        "es": "Variación",
        "en": "Variation",
        "nota": "4★ F2P con Regeneración de Energía",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Resplandor Rejuvenecedor",
        "en": "Rejuvenating Glow",
        "nota": "Set de 5 piezas: aumenta la curación y otorga bonif. de ATQ al equipo tras sanar",
        "best": true
      },
      {
        "es": "Nubes a la Luz de la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alternativa para reforzar el buff de su Salida",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Sanadora universal",
        "agentes": [
          "Jinhsi",
          "Yinlin",
          "Baizhi"
        ],
        "best": true
      },
      {
        "nombre": "Apoyo de Estrago",
        "agentes": [
          "Errante (Estrago)",
          "Sanhua",
          "Baizhi"
        ],
        "best": false
      }
    ],
    "consejo": "Sanadora F2P que además otorga bonif. de daño con su Salida y ATQ con su Habilidad Innata. Sube PV% y Regeneración de Energía.",
    "ficha": {
      "nombreCompleto": "Baizhi",
      "faccion": "Costas Negras",
      "desc": "Resonadora de Glacio de las Costas Negras. Sanadora gratuita accesible que mantiene al equipo con vida y aporta buffs de daño y ATQ.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/9/90/Baizhi_Convene_Draw.png"
    },
    "nombre": "Baizhi",
    "rareza": "4",
    "elemento": "Glacio",
    "arma": "Rectificador",
    "faccion": "Costas Negras",
    "version": "1.0"
  },
  {
    "id": "sanhua",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Glacio"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "ecoPrincipal": "Garza de la Impermanencia",
    "substats": [
      "Regeneración de Energía",
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%"
    ],
    "armas": [
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "5★ estándar; buenas estadísticas y Regeneración de Energía para tener la Liberación cada rotación",
        "best": true
      },
      {
        "es": "Obertura",
        "en": "Overture",
        "nota": "4★ con Regeneración de Energía, gran alternativa de soporte",
        "best": false
      },
      {
        "es": "Espada del Viajero",
        "en": "Sword of Voyager",
        "nota": "4★ F2P de evento",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Nubes a la Luz de la Luna",
        "en": "Moonlit Clouds",
        "nota": "Set de 5 piezas: apila +12% Daño y +22% ATQ sobre su amplificación de Ataque Básico de la Salida",
        "best": true
      },
      {
        "es": "Escarcha Glacial",
        "en": "Freezing Frost",
        "nota": "Alternativa si se juega como sub-DPS de Glacio",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Amplificación de A. Básico",
        "agentes": [
          "Errante (Estrago)",
          "Sanhua",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Soporte de Camellya",
        "agentes": [
          "Camellya",
          "Sanhua",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "Su verdadero rol es de soporte: su Habilidad de Salida amplifica un 38% el daño de Ataque Básico del siguiente Resonador. Con Garza de la Impermanencia refuerza el buff antes de salir.",
    "ficha": {
      "nombreCompleto": "Sanhua",
      "faccion": "Huanglong",
      "desc": "Agente de Glacio de la Patrulla de Jinzhou. Soporte de Ataque Básico que amplifica enormemente el daño del DPS que entra tras ella.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/2/2c/Sanhua_Convene_Draw.png"
    },
    "nombre": "Sanhua",
    "rareza": "4",
    "elemento": "Glacio",
    "arma": "Espada",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "chixia",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Fusión",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "ecoPrincipal": "Jinete Infernal",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Daño de Habilidad de Resonancia",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "El Último Baile",
        "en": "The Last Dance",
        "nota": "5★ BiS actual para Chixia; potencia su daño de Habilidad",
        "best": true
      },
      {
        "es": "Niebla Estática",
        "en": "Static Mist",
        "nota": "4★ con Prob. Crítico y ATQ, excelente para DPS",
        "best": false
      },
      {
        "es": "Cadencia",
        "en": "Cadenza",
        "nota": "4★ F2P del Pase de Batalla",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Grieta Fundida",
        "en": "Molten Rift",
        "nota": "Set de 5 piezas: aumenta el Daño Fusión al usar la Habilidad de Resonancia",
        "best": true
      },
      {
        "es": "Melodías Persistentes",
        "en": "Lingering Tunes",
        "nota": "Alternativa centrada en ATQ%",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Doble Fusión",
        "agentes": [
          "Chixia",
          "Mortefi",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Fusión con Changli",
        "agentes": [
          "Chixia",
          "Changli",
          "Baizhi"
        ],
        "best": false
      }
    ],
    "consejo": "DPS de Fusión basada en daño de Habilidad de Resonancia. Usa Grieta Fundida y encadena habilidades para maximizar el daño.",
    "ficha": {
      "nombreCompleto": "Chixia",
      "faccion": "Huanglong",
      "desc": "Enérgica agente de la Patrulla de Jinzhou que empuña dos pistolas de Fusión. DPS de daño de Habilidad rápido y explosivo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/5/51/Chixia_Convene_Draw.png"
    },
    "nombre": "Chixia",
    "rareza": "4",
    "elemento": "Fusión",
    "arma": "Pistolas",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "mortefi",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Fusión"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "ecoPrincipal": "Garza de la Impermanencia",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "Regeneración de Energía",
      "ATQ%"
    ],
    "armas": [
      {
        "es": "El Último Baile",
        "en": "The Last Dance",
        "nota": "5★ que aprovecha su crítico y ATQ para maximizar los ataques coordinados",
        "best": true
      },
      {
        "es": "Niebla Estática",
        "en": "Static Mist",
        "nota": "4★ casi BiS: Prob. Crítico y ATQ ideales para él",
        "best": false
      },
      {
        "es": "Cadencia",
        "en": "Cadenza",
        "nota": "4★ F2P del Pase de Batalla",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Nubes a la Luz de la Luna",
        "en": "Moonlit Clouds",
        "nota": "Set de 5 piezas para su rol de buffer; refuerza el ATQ del que entra tras su Salida",
        "best": true
      },
      {
        "es": "Grieta Fundida",
        "en": "Molten Rift",
        "nota": "Alternativa si se prioriza su daño de Fusión coordinado",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Buffer de Ataque Pesado",
        "agentes": [
          "Encore",
          "Mortefi",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Doble Fusión",
        "agentes": [
          "Chixia",
          "Mortefi",
          "Baizhi"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS fuera de campo con ataques coordinados desde su Liberación; su Salida potencia los Ataques Pesados del siguiente Resonador. La Prob./Daño Crítico y la Regeneración de Energía son clave.",
    "ficha": {
      "nombreCompleto": "Mortefi",
      "faccion": "Huanglong",
      "desc": "Investigador de Huanglong que combina dos pistolas de Fusión. Sub-DPS de apoyo con ataques coordinados fuera de campo y buff de Ataque Pesado.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/a/af/Mortefi_Convene_Draw.png"
    },
    "nombre": "Mortefi",
    "rareza": "4",
    "elemento": "Fusión",
    "arma": "Pistolas",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "danjin",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Estrago",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "ecoPrincipal": "Sin Corona",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Daño de Ataque Básico",
      "Daño de Habilidad de Resonancia"
    ],
    "armas": [
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "5★ estándar; Prob. Crítico, Regeneración de Energía y ATQ%",
        "best": true
      },
      {
        "es": "Brillo Lumínico",
        "en": "Lumingloss",
        "nota": "5★ del Pase de Batalla",
        "best": false
      },
      {
        "es": "Broche del Comandante",
        "en": "Commander's Hair Clasp",
        "nota": "4★ F2P; Prob. Crítico, considerado su mejor arma gratuita",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Eclipse del Ocaso",
        "en": "Sun-sinking Eclipse",
        "nota": "Set de 5 piezas: +10% Daño Estrago (2 pzs) y gran aumento total del daño (5 pzs)",
        "best": true
      },
      {
        "es": "Melodías Persistentes",
        "en": "Lingering Tunes",
        "nota": "Alternativa centrada en ATQ%",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "DPS de Estrago",
        "agentes": [
          "Danjin",
          "Taoqi",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Con doble sanación",
        "agentes": [
          "Danjin",
          "Taoqi",
          "Baizhi"
        ],
        "best": false
      }
    ],
    "consejo": "DPS de Estrago que sacrifica PV para golpear más fuerte; conviene un escudo o sanación (Taoqi/Verina) y priorizar Prob. y Daño Crítico.",
    "ficha": {
      "nombreCompleto": "Danjin",
      "faccion": "Huanglong",
      "desc": "Espadachina de Huanglong que canaliza el Estrago sacrificando su propia salud. DPS agresiva de altísimo riesgo y recompensa.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/6/66/Danjin_Convene_Draw.png"
    },
    "nombre": "Danjin",
    "rareza": "4",
    "elemento": "Estrago",
    "arma": "Espada",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "taoqi",
    "costo4": {
      "principal": "DEF%",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "DEF%",
      "alt": "Regeneración de Energía"
    },
    "costo1": {
      "principal": "DEF%",
      "alt": "Regeneración de Energía"
    },
    "ecoPrincipal": "Geoquelonio Portacampana",
    "substats": [
      "DEF%",
      "Regeneración de Energía",
      "DEF plano"
    ],
    "armas": [
      {
        "es": "Noche Perpetua Impávida",
        "en": "Dauntless Evernight",
        "nota": "4★ BiS: aporta DEF, con la que Taoqi escala su daño",
        "best": true
      },
      {
        "es": "Discordia",
        "en": "Discord",
        "nota": "4★ ideal para mandobleros de cambio rápido",
        "best": false
      },
      {
        "es": "Navaja Lustrosa",
        "en": "Lustrous Razor",
        "nota": "5★ estándar de mandoble como relleno de ATQ",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Nubes a la Luz de la Luna",
        "en": "Moonlit Clouds",
        "nota": "Set de 5 piezas: da Regeneración de Energía y añade +22.5% ATQ a su Salida",
        "best": true
      },
      {
        "es": "Coraje Rompemareas",
        "en": "Tidebreaking Courage",
        "nota": "Alternativa de escudo/energía",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Soporte de Danjin",
        "agentes": [
          "Danjin",
          "Taoqi",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Escudo y buff",
        "agentes": [
          "Errante (Estrago)",
          "Taoqi",
          "Baizhi"
        ],
        "best": false
      }
    ],
    "consejo": "Soporte defensivo que escala con DEF y profundiza el Daño Estrago. Hecha a medida para Danjin, a quien otorga escudo y +23% de daño Estrago.",
    "ficha": {
      "nombreCompleto": "Taoqi",
      "faccion": "Huanglong",
      "desc": "Guardiana de Huanglong que empuña un enorme mandoble. Soporte defensivo que escala con DEF, escuda al equipo y potencia el daño Estrago.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/b/b1/Taoqi_Convene_Draw.png"
    },
    "nombre": "Taoqi",
    "rareza": "4",
    "elemento": "Estrago",
    "arma": "Mandoble",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "yangyang",
    "costo4": {
      "principal": "Regeneración de Energía",
      "alt": "Bonificación de Daño Aéreo"
    },
    "costo3": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Garza de la Impermanencia",
    "substats": [
      "Regeneración de Energía",
      "ATQ%",
      "Prob. Crítico",
      "Daño Crítico"
    ],
    "armas": [
      {
        "es": "Comando de Convicción",
        "en": "Commando of Conviction",
        "nota": "Pase de batalla; ATQ al usar habilidad de resonancia, ideal para rotación de energía",
        "best": true
      },
      {
        "es": "Cuchilla Estelar Fugaz",
        "en": "Meteorite of Fortitude",
        "nota": "Alternativa de ATQ%",
        "best": false
      },
      {
        "es": "Espada n.º 18",
        "en": "Sword#18",
        "nota": "F2P/3★ gratuito, ATQ% base",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Set 5pz recomendado: +Regeneración de Energía y otorga +ATQ al siguiente Resonador que entra",
        "best": true
      },
      {
        "es": "Vendaval de la Sierra",
        "en": "Sierra Gale",
        "nota": "Alternativa si se usa como sub-DPS Aéreo (+Daño Aéreo)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Batería de energía Aéreo",
        "agentes": [
          "Jiyan",
          "Yangyang",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Soporte flexible",
        "agentes": [
          "DPS principal",
          "Yangyang",
          "Sanadora"
        ],
        "best": false
      }
    ],
    "consejo": "Úsala como batería de energía y agrupadora de enemigos; su habilidad de resonancia recarga rápido al equipo. Prioriza Regeneración de Energía sobre daño.",
    "ficha": {
      "nombreCompleto": "Yangyang",
      "faccion": "Huanglong",
      "desc": "Delegada de la Oficina de Jinzhou. Resonadora Aérea de espada; soporte que agrupa enemigos y recarga energía del equipo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/a/a7/Yangyang_Card.png"
    },
    "nombre": "Yangyang",
    "rareza": "4",
    "elemento": "Aéreo",
    "arma": "Espada",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "aalto",
    "costo4": {
      "principal": "Bonificación de Daño Aéreo",
      "alt": "ATQ%"
    },
    "costo3": {
      "principal": "Bonificación de Daño Aéreo",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Garza de la Impermanencia",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Niebla Estática",
        "en": "Static Mist",
        "nota": "5★ estándar de pistolas; Prob. Crítico + ATQ%, la mejor opción general",
        "best": true
      },
      {
        "es": "Cadencia de Intervalos",
        "en": "Cadence of Intervals",
        "nota": "4★, aporta energía y ATQ para rotación",
        "best": false
      },
      {
        "es": "Estallido Nova",
        "en": "Novaburst",
        "nota": "F2P/3★ gratuito",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Set 5pz como amplificador/soporte: +ATQ al siguiente Resonador tras usar su ulti",
        "best": true
      },
      {
        "es": "Vendaval de la Sierra",
        "en": "Sierra Gale",
        "nota": "Alternativa como sub-DPS Aéreo (+Daño Aéreo)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Amplificador Aéreo",
        "agentes": [
          "Jiyan",
          "Aalto",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Doble Aéreo",
        "agentes": [
          "DPS Aéreo",
          "Aalto",
          "Yangyang"
        ],
        "best": false
      }
    ],
    "consejo": "Su pasivo amplifica el Daño Aéreo del siguiente Resonador; colócalo justo antes del DPS Aéreo. Buen enganche/control con su niebla.",
    "ficha": {
      "nombreCompleto": "Aalto",
      "faccion": "Huanglong",
      "desc": "Informante enigmático de la Sociedad de Cazadores. Resonador Aéreo de pistolas; sub-DPS/amplificador que potencia el daño Aéreo del equipo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/3/3d/Aalto_Full_Sprite.png"
    },
    "nombre": "Aalto",
    "rareza": "4",
    "elemento": "Aéreo",
    "arma": "Pistolas",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "yuanwu",
    "costo4": {
      "principal": "Regeneración de Energía",
      "alt": "Bonificación de Daño Electro"
    },
    "costo3": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Electro"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "DEF%"
    },
    "ecoPrincipal": "Garza de la Impermanencia",
    "substats": [
      "Regeneración de Energía",
      "ATQ%",
      "Prob. Crítico",
      "Daño Crítico"
    ],
    "armas": [
      {
        "es": "Marcato",
        "en": "Marcato",
        "nota": "Pase de batalla, guanteletes; ATQ y buena rotación, mejor opción de soporte",
        "best": true
      },
      {
        "es": "Piedra Amarga",
        "en": "Stonard",
        "nota": "F2P/4★ craftable, Regeneración de Energía",
        "best": false
      },
      {
        "es": "Guantelete n.º 21D",
        "en": "Gauntlets#21D",
        "nota": "F2P/3★ gratuito",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Set 5pz como soporte off-field: +Regeneración de Energía y +ATQ al relevo",
        "best": true
      },
      {
        "es": "Trueno del Vacío",
        "en": "Void Thunder",
        "nota": "Alternativa como sub-DPS Electro (+Daño Electro)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Soporte Electro",
        "agentes": [
          "Calcharo",
          "Yuanwu",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Resonancia Electro",
        "agentes": [
          "Jinhsi",
          "Yuanwu",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "Soporte defensivo Electro off-field: su torreta hace daño coordinado mientras el DPS actúa. Prioriza energía y ATQ; útil para desatar Reacción Electro.",
    "ficha": {
      "nombreCompleto": "Yuanwu",
      "faccion": "Huanglong",
      "desc": "Maestro de artes marciales y herrero de Jinzhou. Resonador Electro de guanteletes; soporte off-field con daño coordinado.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/1/17/Yuanwu_Full_Sprite.png"
    },
    "nombre": "Yuanwu",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Guanteletes",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "jianxin",
    "costo4": {
      "principal": "Regeneración de Energía",
      "alt": "Bonificación de Daño Aéreo"
    },
    "costo3": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Aéreo"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Garza de la Impermanencia",
    "substats": [
      "Regeneración de Energía",
      "ATQ%",
      "Prob. Crítico",
      "Daño Crítico"
    ],
    "armas": [
      {
        "es": "Oleadas del Abismo",
        "en": "Abyss Surges",
        "nota": "5★ estándar de guanteletes; ATQ y Prob. Crítico, mejor opción general",
        "best": true
      },
      {
        "es": "Marcato",
        "en": "Marcato",
        "nota": "Pase de batalla, buena rotación de energía",
        "best": false
      },
      {
        "es": "Piedra Amarga",
        "en": "Stonard",
        "nota": "F2P/4★ craftable de energía",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Set 5pz como soporte/escudera: +Regeneración de Energía y +ATQ al relevo",
        "best": true
      },
      {
        "es": "Vendaval de la Sierra",
        "en": "Sierra Gale",
        "nota": "Alternativa como sub-DPS Aéreo (+Daño Aéreo)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Soporte/agrupador Aéreo",
        "agentes": [
          "DPS principal",
          "Jianxin",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Doble Aéreo",
        "agentes": [
          "Jiyan",
          "Jianxin",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "Excelente escudera y agrupadora: su ulti crea un vórtice que junta enemigos. Como soporte prioriza energía y ATQ; como sub-DPS Aéreo usa Prob./Daño Crítico.",
    "ficha": {
      "nombreCompleto": "Jianxin",
      "faccion": "Huanglong",
      "desc": "Practicante del Qi y guardiana serena. Resonadora Aérea de guanteletes; soporte con escudo y control que agrupa enemigos.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/f/ff/Jianxin_Splash_Art.png"
    },
    "nombre": "Jianxin",
    "rareza": "5",
    "elemento": "Aéreo",
    "arma": "Guanteletes",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "jiyan",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Aéreo",
      "alt": "Bonificación de Daño Aéreo"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Beringal Feilian",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Cumbre Verdeante",
        "en": "Verdant Summit",
        "nota": "Arma firma 5★ (mandoble); BiS, máximo Daño Crítico y bonif. de daño",
        "best": true
      },
      {
        "es": "Navaja Lustrosa",
        "en": "Lustrous Razor",
        "nota": "5★ estándar, gran ATQ; excelente alternativa",
        "best": false
      },
      {
        "es": "Noche Eterna Intrépida",
        "en": "Dauntless Evernight",
        "nota": "F2P/4★, buena opción de Prob. Crítico",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Vendaval de la Sierra",
        "en": "Sierra Gale",
        "nota": "Set 5pz clásico BiS: +Daño Aéreo. Alternativa moderna: Peregrinación a Barlovento",
        "best": true
      },
      {
        "es": "Peregrinación a Barlovento",
        "en": "Windward Pilgrimage",
        "nota": "Set 5pz Aéreo más reciente (2.x), muy competitivo para Jiyan",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Aéreo",
        "agentes": [
          "Jiyan",
          "Mortefi",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Aéreo + amplificador",
        "agentes": [
          "Jiyan",
          "Aalto",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal Aéreo de ráfaga: acumula Resolución con ataques y descarga con el ulti Lanza Celestial. Busca ~250%+ de Daño Crítico y suficiente energía para rotar el ulti.",
    "ficha": {
      "nombreCompleto": "Jiyan",
      "faccion": "Huanglong",
      "desc": "General de la Fuerza Aérea de Midnight Rangers. Resonador Aéreo de mandoble; DPS principal hipercarry de altísimo daño explosivo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/0/0d/Jiyan_Card.png"
    },
    "nombre": "Jiyan",
    "rareza": "5",
    "elemento": "Aéreo",
    "arma": "Mandoble",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "lingyang",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Glacio",
      "alt": "Bonificación de Daño Glacio"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Miríada Lampylumen",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Oleadas del Abismo",
        "en": "Abyss Surges",
        "nota": "5★ estándar de guanteletes; ATQ y Prob. Crítico, mejor opción general",
        "best": true
      },
      {
        "es": "Marcato",
        "en": "Marcato",
        "nota": "Pase de batalla, buena alternativa 4★",
        "best": false
      },
      {
        "es": "Piedra Amarga",
        "en": "Stonard",
        "nota": "F2P/4★ craftable",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Escarcha Glacial",
        "en": "Freezing Frost",
        "nota": "Set 5pz BiS: +Daño Glacio y bonif. al golpear con habilidades",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alternativa de transición (+ATQ) si no tienes el set completo",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Glacio",
        "agentes": [
          "Lingyang",
          "Zhezhi",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Glacio + amplificador",
        "agentes": [
          "Lingyang",
          "Sanhua",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "DPS Glacio de combos aéreos: mantén la barra de Danza del León y encadena ataques pesados. Requiere buen amplificador Glacio para brillar; prioriza Prob./Daño Crítico.",
    "ficha": {
      "nombreCompleto": "Lingyang",
      "faccion": "Huanglong",
      "desc": "Joven artista de la danza del león. Resonador Glacio de guanteletes; DPS principal de combos rápidos y ataques aéreos.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/9/98/Lingyang_Card.png"
    },
    "nombre": "Lingyang",
    "rareza": "5",
    "elemento": "Glacio",
    "arma": "Guanteletes",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "calcharo",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Electro",
      "alt": "Bonificación de Daño Electro"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Mefis Tempestuoso",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Navaja Lustrosa",
        "en": "Lustrous Razor",
        "nota": "5★ estándar de mandoble; ATQ elevado, mejor opción general para Calcharo",
        "best": true
      },
      {
        "es": "Cumbre Verdeante",
        "en": "Verdant Summit",
        "nota": "Firma de Jiyan pero funciona muy bien (Daño Crítico + bonif.)",
        "best": false
      },
      {
        "es": "Noche Eterna Intrépida",
        "en": "Dauntless Evernight",
        "nota": "F2P/4★, buena Prob. Crítico",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Trueno del Vacío",
        "en": "Void Thunder",
        "nota": "Set 5pz BiS: +Daño Electro y bonif. al usar habilidad de resonancia",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alternativa de transición (+ATQ)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Electro",
        "agentes": [
          "Calcharo",
          "Yinlin",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Electro + batería",
        "agentes": [
          "Calcharo",
          "Yuanwu",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "DPS Electro con ventana de ulti (Modo Devastación) sensible al tiempo: necesita buena energía y amplificadores. Encadena los tres golpes del ulti sin fallar; prioriza Prob./Daño Crítico.",
    "ficha": {
      "nombreCompleto": "Calcharo",
      "faccion": "Huanglong",
      "desc": "Líder mercenario de los Ghost Hounds. Resonador Electro de mandoble; DPS principal de alto daño en ráfagas durante su ulti.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/e/e5/Calcharo_Card.png"
    },
    "nombre": "Calcharo",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Mandoble",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "encore",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Fusión",
      "alt": "Bonificación de Daño Fusión"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Jinete Infernal",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Maestro de las Cuerdas",
        "en": "Stringmaster",
        "nota": "Arma firma 5★ (rectificador); BiS, Prob. Crítico + gran multiplicador",
        "best": true
      },
      {
        "es": "Ondas Cósmicas",
        "en": "Cosmic Ripples",
        "nota": "5★ estándar, Prob. Crítico; excelente alternativa",
        "best": false
      },
      {
        "es": "Guardián de Jinzhou",
        "en": "Jinzhou Keeper",
        "nota": "F2P/4★, buen ATQ para arrancar",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Grieta Fundida",
        "en": "Molten Rift",
        "nota": "Set 5pz BiS: +Daño Fusión y bonif. al usar habilidad de resonancia",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alternativa de transición (+ATQ)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Fusión",
        "agentes": [
          "Encore",
          "Sanhua",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Fusión + amplificador",
        "agentes": [
          "Encore",
          "Mortefi",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "DPS Fusión que quema durante su Modo Cosmos tras el ulti. Aprovecha la amplificación de ataque básico (p. ej. Sanhua) y mantén energía para rotar; prioriza Prob./Daño Crítico.",
    "ficha": {
      "nombreCompleto": "Encore",
      "faccion": "Huanglong",
      "desc": "Joven Resonadora acompañada de su peluche Cosmos. Resonadora Fusión de rectificador; DPS principal de gran daño concentrado.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/6/6c/Encore_Card.png"
    },
    "nombre": "Encore",
    "rareza": "5",
    "elemento": "Fusión",
    "arma": "Rectificador",
    "faccion": "Huanglong",
    "version": "1.0"
  },
  {
    "id": "verina",
    "costo4": {
      "principal": "Bonificación de Curación",
      "alt": "Regeneración de Energía"
    },
    "costo3": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "ecoPrincipal": "Geotortuga Campaniforme",
    "substats": [
      "Regeneración de Energía",
      "ATQ%",
      "Bonificación de Curación",
      "Prob. Crítico"
    ],
    "armas": [
      {
        "es": "Variación",
        "en": "Variation",
        "nota": "Pase de batalla, rectificador; Regeneración de Energía, mejor opción de soporte",
        "best": true
      },
      {
        "es": "Ondas Cósmicas",
        "en": "Cosmic Ripples",
        "nota": "5★ estándar si se busca algo de daño con el buff de ATQ",
        "best": false
      },
      {
        "es": "Guardián de Jinzhou",
        "en": "Jinzhou Keeper",
        "nota": "F2P/4★, ATQ para potenciar su buff",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Resplandor Rejuvenecedor",
        "en": "Rejuvenating Glow",
        "nota": "Set 5pz BiS: +Bonif. de Curación y otorga +ATQ al equipo al sanar",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alternativa para maximizar el buff de ATQ al relevo",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Sanadora universal",
        "agentes": [
          "DPS principal",
          "Sub-DPS",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Núcleo de buffs",
        "agentes": [
          "Jiyan",
          "Mortefi",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "Mejor sanadora/soporte del juego: cura, otorga +ATQ al equipo y aplica marca Espectro para más daño. Su ulti (Botánico) potencia a todos; prioriza Curación, ATQ y energía. Encaja en casi cualquier equipo.",
    "ficha": {
      "nombreCompleto": "Verina",
      "faccion": "Costas Negras",
      "desc": "Botánica y Resonadora Espectro de rectificador. La sanadora/soporte por excelencia: cura, aumenta el ATQ del equipo y mejora el daño con su marca.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/b/b1/Verina_Splash_Art.png"
    },
    "nombre": "Verina",
    "rareza": "5",
    "elemento": "Espectro",
    "arma": "Rectificador",
    "faccion": "Costas Negras",
    "version": "1.0"
  },
  {
    "id": "yinlin",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Electro"
    },
    "ecoPrincipal": "Mefis Tempestad",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Electro",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Maestro de Cuerdas",
        "en": "Stringmaster",
        "nota": "Arma insignia; Prob. Crítico masivo y apilables de ATQ% y Daño Electro, best-in-slot absoluto.",
        "best": true
      },
      {
        "es": "Ondas Cósmicas",
        "en": "Cosmic Ripples",
        "nota": "Rectificador estándar 5*; gran Prob. Crítico y bonificación de daño, la mejor alternativa F2P/gacha.",
        "best": false
      },
      {
        "es": "Rectificador Nocturno",
        "en": "Rectifier of Night",
        "nota": "Opción gratuita del battle pass; ATQ% decente para arrancar.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Mefis Tempestad",
        "en": "Tempest Mephis",
        "nota": "Eco principal 4 costos; su habilidad concentra el daño Electro y otorga bonificación de Daño Electro.",
        "best": true
      },
      {
        "es": "Trueno del Vacío",
        "en": "Void Thunder",
        "nota": "Sonata 5 piezas: hasta +40% Bonificación de Daño Electro, el set best-in-slot para Yinlin.",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alternativa 5 piezas si se juega a Yinlin como soporte de energía en vez de sub-DPS.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarga Electro",
        "agentes": "Xiangli Yao, Yinlin, Guardacostas",
        "best": true
      },
      {
        "nombre": "Jinhsi Hipercarga",
        "agentes": "Jinhsi, Yinlin, Verina",
        "best": false
      }
    ],
    "consejo": "Yinlin es una sub-DPS de cambio rápido: lanza su Concordia (Liberación) y su Habilidad, deja caer sus marionetas y cambia. Sube Regeneración de Energía suficiente para tener la Liberación lista en cada rotación.",
    "ficha": {
      "nombreCompleto": "Yinlin",
      "faccion": "Huanglong",
      "desc": "Ejecutora de la Patrulla Nocturna de Jinzhou. Elegante y calculadora, controla marionetas eléctricas para castigar a sus enemigos desde la distancia.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/3/33/Yinlin_Card.jpg"
    },
    "nombre": "Yinlin",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Rectificador",
    "faccion": "Huanglong",
    "version": "1.1"
  },
  {
    "id": "jinhsi",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Espectro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Espectro"
    },
    "ecoPrincipal": "Garza de la Impermanencia",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Espectro",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Eras de Cosecha",
        "en": "Ages of Harvest",
        "nota": "Mandoble insignia; Prob. Crítico y bonificación específica a su Habilidad de Resonancia, best-in-slot indiscutible.",
        "best": true
      },
      {
        "es": "Cumbre Verdeante",
        "en": "Verdant Summit",
        "nota": "Mandoble 5* con alto Daño Crítico; la mejor alternativa sin arma insignia.",
        "best": false
      },
      {
        "es": "Navaja Lustrosa",
        "en": "Lustrous Razor",
        "nota": "Mandoble 5* estándar; palo de estadísticas sólido para arrancar.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Garza de la Impermanencia",
        "en": "Impermanence Heron",
        "nota": "Eco principal 4 costos; amplifica el daño en su ventana de estallido antes de la Liberación.",
        "best": true
      },
      {
        "es": "Luz Celestial",
        "en": "Celestial Light",
        "nota": "Sonata 5 piezas: +30% Bonificación de Daño Espectro tras la Liberación, el set best-in-slot.",
        "best": true
      },
      {
        "es": "Abominación Mecánica",
        "en": "Mech Abomination",
        "nota": "Eco 4 costos alternativo (set Melodías Persistentes) para builds híbridas que priorizan ATQ.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Jinhsi Hipercarga",
        "agentes": "Jinhsi, Yinlin, Guardacostas",
        "best": true
      },
      {
        "nombre": "Espectro/Glacio",
        "agentes": "Jinhsi, Zhezhi, Verina",
        "best": false
      }
    ],
    "consejo": "Jinhsi acumula sellos de Incandescencia con el equipo antes de entrar; con 3 sellos su Liberación golpea con fuerza máxima. Prioriza Regeneración de Energía para no perder ninguna rotación de Liberación.",
    "ficha": {
      "nombreCompleto": "Jinhsi",
      "faccion": "Huanglong",
      "desc": "Magistrada de Jinzhou, portadora del linaje del Dragón Nocturno. Serena y de fuerte sentido del deber, canaliza el poder del Sendero Nocturno en devastadores ataques de Espectro.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/a/a9/Jinhsi_Card.png"
    },
    "nombre": "Jinhsi",
    "rareza": "5",
    "elemento": "Espectro",
    "arma": "Mandoble",
    "faccion": "Huanglong",
    "version": "1.1"
  },
  {
    "id": "changli",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Fusión",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Fusión"
    },
    "ecoPrincipal": "Jinete Infernal",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Fusión",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Fulgor Ardiente",
        "en": "Blazing Brilliance",
        "nota": "Espada insignia; hasta +56% de daño de Habilidad de Resonancia, y casi todo su kit cuenta como Habilidad. Best-in-slot claro.",
        "best": true
      },
      {
        "es": "Brillo Lumínico",
        "en": "Lumingloss",
        "nota": "Espada 4* del battle pass; excelente Daño Crítico, la mejor opción económica.",
        "best": false
      },
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "Espada 5* estándar; Prob. Crítico y Regeneración de Energía muy consistentes.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Jinete Infernal",
        "en": "Inferno Rider",
        "nota": "Eco principal 4 costos; añade un golpe de Fusión que dispara la reacción de su set.",
        "best": true
      },
      {
        "es": "Grieta Fundida",
        "en": "Molten Rift",
        "nota": "Sonata 5 piezas: +10% Daño Fusión y +30% Daño de Ataque Pesado tras reacción de Fusión.",
        "best": true
      },
      {
        "es": "Melodías Persistentes",
        "en": "Lingering Tunes",
        "nota": "Alternativa 5 piezas centrada en ATQ% si se prioriza escalado plano sobre Daño Fusión.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Changli Hipercarga",
        "agentes": "Changli, Brant, Guardacostas",
        "best": true
      },
      {
        "nombre": "Fusión Clásica",
        "agentes": "Changli, Encore, Verina",
        "best": false
      }
    ],
    "consejo": "Changli es sub-DPS/DPS de ventana: encadena su Habilidad de Resonancia mejorada para disparar reacciones de Fusión y activar el set Grieta Fundida. Mantén ~55-60% Prob. Crítico antes de volcarte en Daño Crítico.",
    "ficha": {
      "nombreCompleto": "Changli",
      "faccion": "Huanglong",
      "desc": "Consejera cercana a la Magistrada de Jinzhou. Astuta y resuelta, empuña una espada envuelta en llamas y toma decisiones difíciles por el bien de Huanglong.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/e/e9/Changli_Card.png"
    },
    "nombre": "Changli",
    "rareza": "5",
    "elemento": "Fusión",
    "arma": "Espada",
    "faccion": "Huanglong",
    "version": "1.2"
  },
  {
    "id": "zhezhi",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Glacio",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Glacio"
    },
    "ecoPrincipal": "Garza de la Impermanencia",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Glacio",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Brotes Cubiertos de Escarcha",
        "en": "Rime-Draped Sprouts",
        "nota": "Rectificador insignia; escala su daño de Ataque Pesado y le da Prob. Crítico, best-in-slot.",
        "best": true
      },
      {
        "es": "Maestro de Cuerdas",
        "en": "Stringmaster",
        "nota": "Rectificador 5* insignia de Yinlin; sigue siendo una alternativa de primer nivel por sus apilables.",
        "best": false
      },
      {
        "es": "Ondas Cósmicas",
        "en": "Cosmic Ripples",
        "nota": "Rectificador 5* estándar; gran Prob. Crítico como opción de gacha.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Garza de la Impermanencia",
        "en": "Impermanence Heron",
        "nota": "Eco principal 4 costos; potencia la ventana de daño de su Ataque Pesado tras cambiar.",
        "best": true
      },
      {
        "es": "Escarcha Gélida",
        "en": "Freezing Frost",
        "nota": "Sonata 5 piezas: +10% Daño Glacio y bonificación adicional tras Ataque Básico/Pesado.",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alternativa 5 piezas si se juega como soporte de energía en equipos Glacio.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Jinhsi Hipercarga",
        "agentes": "Jinhsi, Zhezhi, Guardacostas",
        "best": true
      },
      {
        "nombre": "Glacio Doble",
        "agentes": "Carlotta, Zhezhi, Guardacostas",
        "best": false
      }
    ],
    "consejo": "Zhezhi invoca a sus pinturas y descarga el daño con un potente Ataque Pesado tras cambiar; es una sub-DPS de cambio rápido ideal. Asegura Regeneración de Energía para encadenar sus Liberaciones.",
    "ficha": {
      "nombreCompleto": "Zhezhi",
      "faccion": "Huanglong",
      "desc": "Pintora de talento excepcional capaz de dar vida a sus obras. Reservada y algo tímida, convierte su arte en invocaciones de hielo que combaten a su lado.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/f/f0/Zhezhi_Card.png"
    },
    "nombre": "Zhezhi",
    "rareza": "5",
    "elemento": "Glacio",
    "arma": "Rectificador",
    "faccion": "Huanglong",
    "version": "1.3"
  },
  {
    "id": "xiangli-yao",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Electro"
    },
    "ecoPrincipal": "Mefis Tempestad",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Electro",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Mango de la Verdad",
        "en": "Verity's Handle",
        "nota": "Guanteletes insignia; dispara un enorme bonus de Daño de Liberación de Resonancia, best-in-slot.",
        "best": true
      },
      {
        "es": "Sello del Contemplaluna",
        "en": "Moongazer's Sigil",
        "nota": "Guanteletes 5* con bonificación a Daño de Liberación; la mejor alternativa a su insignia.",
        "best": false
      },
      {
        "es": "Bracamante del Abismo",
        "en": "Abyss Surges",
        "nota": "Guanteletes 5* estándar; palo de estadísticas con Prob. Crítico sólido.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Mefis Tempestad",
        "en": "Tempest Mephis",
        "nota": "Eco principal 4 costos con Prob. Crítico; suma daño Electro en su ventana de Liberación.",
        "best": true
      },
      {
        "es": "Trueno del Vacío",
        "en": "Void Thunder",
        "nota": "Sonata 5 piezas: hasta +40% Bonificación de Daño Electro tras Ataque Pesado/Habilidad, best-in-slot.",
        "best": true
      },
      {
        "es": "Melodías Persistentes",
        "en": "Lingering Tunes",
        "nota": "Alternativa 5 piezas centrada en ATQ% para builds sin arma insignia.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarga Electro",
        "agentes": "Xiangli Yao, Yinlin, Guardacostas",
        "best": true
      },
      {
        "nombre": "Ruptura de Tono (v3.0)",
        "agentes": "Xiangli Yao, Lynae, Mornye",
        "best": false
      }
    ],
    "consejo": "Xiangli Yao alterna cálculos y descarga todo en su Liberación de Resonancia. Acumula la energía con Yinlin y suéltala en la ventana buffeada; su Habilidad y Ataque Pesado activan el set Trueno del Vacío.",
    "ficha": {
      "nombreCompleto": "Xiangli Yao",
      "faccion": "Huanglong",
      "desc": "Investigador prodigio de la Academia de Huanglong. Brillante y algo excéntrico, combina ciencia y poder de Resonancia electro en un estilo de combate cuerpo a cuerpo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/e/e9/Xiangli_Yao_Card.png"
    },
    "nombre": "Xiangli Yao",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Guanteletes",
    "faccion": "Huanglong",
    "version": "1.3"
  },
  {
    "id": "shorekeeper",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "costo1": {
      "principal": "PV%",
      "alt": "Regeneración de Energía"
    },
    "ecoPrincipal": "Falacia sin Retorno",
    "substats": [
      "Regeneración de Energía",
      "PV%",
      "Prob. Crítico",
      "Daño Crítico",
      "Bonificación de Curación"
    ],
    "armas": [
      {
        "es": "Sinfonía Estelar",
        "en": "Stellar Symphony",
        "nota": "Rectificador insignia; escala PV y Bonificación de Curación, best-in-slot para su rol de sanadora-buffer.",
        "best": true
      },
      {
        "es": "Variación",
        "en": "Variation",
        "nota": "Rectificador 4* con alta Regeneración de Energía; la mejor alternativa F2P para cargar su Liberación.",
        "best": false
      },
      {
        "es": "Rectificador Nocturno",
        "en": "Rectifier of Night",
        "nota": "Opción gratuita del battle pass con Regeneración de Energía útil para arrancar.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Falacia sin Retorno",
        "en": "Fallacy of No Return",
        "nota": "Eco principal 4 costos; otorga +10% Regeneración de Energía al lanzar y +10% ATQ a todo el equipo.",
        "best": true
      },
      {
        "es": "Resplandor Rejuvenecedor",
        "en": "Rejuvenating Glow",
        "nota": "Sonata 5 piezas: al curar aliados, +15% ATQ a todo el equipo 30s. Único set recomendado.",
        "best": true
      },
      {
        "es": "Geoquelonio Portacampanas",
        "en": "Bell-Borne Geochelone",
        "nota": "Eco principal alternativo si se prefiere el escudo defensivo en vez del bonus de ATQ.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Soporte universal",
        "agentes": "Cualquier DPS (Jinhsi, Camellya, Carlotta, Xiangli Yao)",
        "best": true
      },
      {
        "nombre": "Equipo Espectro",
        "agentes": "Jinhsi, Yinlin, Guardacostas",
        "best": false
      }
    ],
    "consejo": "El Guardacostas es la mejor sanadora-buffer del juego. Sube su Regeneración de Energía a ~230-250% para que su Liberación otorgue todo el paquete de Prob. Crítico y Daño Crítico al equipo. Build de PV%, no de ATQ.",
    "ficha": {
      "nombreCompleto": "Guardacostas (Shorekeeper)",
      "faccion": "Costas Negras",
      "desc": "Guardiana creada por Lahai-Roi para custodiar las Costas Negras y a su Errante. Serena, sabia y de una calma casi eterna, sana y potencia a todo el equipo con poder Espectro.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/8/85/Shorekeeper_Card.png"
    },
    "nombre": "Guardacostas (Shorekeeper)",
    "rareza": "5",
    "elemento": "Espectro",
    "arma": "Rectificador",
    "faccion": "Costas Negras",
    "version": "1.4"
  },
  {
    "id": "camellya",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Estrago",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Estrago"
    },
    "ecoPrincipal": "Sin Corona",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Estrago",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Primavera Roja",
        "en": "Red Spring",
        "nota": "Espada insignia; enorme Daño Crítico y bonificaciones apilables mientras permanece en combate, best-in-slot.",
        "best": true
      },
      {
        "es": "Fulgor Ardiente",
        "en": "Blazing Brilliance",
        "nota": "Espada 5* de Changli; sus bonus a Habilidad de Resonancia la convierten en una gran alternativa.",
        "best": false
      },
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "Espada 5* estándar; Prob. Crítico y energía consistentes como opción de gacha.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Sin Corona",
        "en": "Crownless",
        "nota": "Eco principal 4 costos; mayor daño que Sin Sueños pero exige cancelar con salto tras la animación.",
        "best": true
      },
      {
        "es": "Eclipse del Ocaso",
        "en": "Sun-sinking Eclipse",
        "nota": "Sonata 5 piezas: +10% Daño Estrago y +7,5% apilable (x4) tras Ataque Básico/Pesado, best-in-slot.",
        "best": true
      },
      {
        "es": "Sin Sueños",
        "en": "Dreamless",
        "nota": "Eco principal alternativo, más fácil de ejecutar que Sin Corona aunque con algo menos de daño.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Estrago Cambio Rápido",
        "agentes": "Camellya, Sanhua, Guardacostas",
        "best": true
      },
      {
        "nombre": "Estrago con Roccia",
        "agentes": "Camellya, Roccia, Verina",
        "best": false
      }
    ],
    "consejo": "Camellya es una hiper-carry que quiere estar en campo el máximo tiempo posible acumulando 'Podredumbre' con su forma mejorada. Sanhua alarga su ventana; apunta a ~65% Prob. Crítico y 120%+ Daño Crítico.",
    "ficha": {
      "nombreCompleto": "Camellya",
      "faccion": "Costas Negras",
      "desc": "Compañera enigmática y apasionada del Errante. De naturaleza intensa y devota, despliega enredaderas espinosas y poder de Estrago para arrasar a sus enemigos.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/8/8f/Camellya_Card.png"
    },
    "nombre": "Camellya",
    "rareza": "5",
    "elemento": "Estrago",
    "arma": "Espada",
    "faccion": "Costas Negras",
    "version": "1.4"
  },
  {
    "id": "lumi",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Electro"
    },
    "ecoPrincipal": "Mefis Tempestad",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Electro",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Rastro Otoñal",
        "en": "Autumntrace",
        "nota": "Mandoble 4* ideal para su rol de cambio rápido; Prob. Crítico y bonus de daño, best-in-slot práctico.",
        "best": true
      },
      {
        "es": "Navaja Lustrosa",
        "en": "Lustrous Razor",
        "nota": "Mandoble 5* estándar; palo de estadísticas si se dispone de él por gacha.",
        "best": false
      },
      {
        "es": "Discordia",
        "en": "Discord",
        "nota": "Mandoble 3* gratuito; Regeneración de Energía útil para arrancar sin gastar recursos.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Mefis Tempestad",
        "en": "Tempest Mephis",
        "nota": "Eco principal 4 costos; concentra su daño Electro en la breve ventana de campo.",
        "best": true
      },
      {
        "es": "Trueno del Vacío",
        "en": "Void Thunder",
        "nota": "Sonata 5 piezas: Bonificación de Daño Electro; el mejor set para Lumi como sub-DPS.",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alternativa 5 piezas si se usa a Lumi como soporte de energía/ATQ del equipo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarga Electro",
        "agentes": "Xiangli Yao, Lumi, Guardacostas",
        "best": true
      },
      {
        "nombre": "Amplificador Electro",
        "agentes": "Jinhsi, Lumi, Verina",
        "best": false
      }
    ],
    "consejo": "Lumi es la mejor sub-DPS Electro 4 estrellas y una alternativa económica excelente. Su Outro amplifica el Daño Electro del portador principal; entra, suelta su Habilidad/Liberación y cambia.",
    "ficha": {
      "nombreCompleto": "Lumi",
      "faccion": "Costas Negras",
      "desc": "Repartidora incansable y siempre optimista de la Oficina de Encargos. Enérgica y de buen corazón, canaliza su entusiasmo en veloces ataques eléctricos con su mandoble.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/e/ee/Lumi_Card.jpg"
    },
    "nombre": "Lumi",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Mandoble",
    "faccion": "Costas Negras",
    "version": "1.4"
  },
  {
    "id": "carlotta",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Glacio",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Glacio"
    },
    "ecoPrincipal": "Constructo Centinela",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Glacio",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "El Último Baile",
        "en": "The Last Dance",
        "nota": "Pistolas insignia; enorme Daño Crítico más ATQ y bonus a Habilidad de Resonancia, best-in-slot.",
        "best": true
      },
      {
        "es": "Pistolas Guardianas",
        "en": "Guardian Pistols",
        "nota": "Pistolas 4* del battle pass; buffea su fuente principal de escalado, la mejor opción F2P.",
        "best": false
      },
      {
        "es": "Niebla Estática",
        "en": "Static Mist",
        "nota": "Pistolas 5* estándar; ATQ% y Prob. Crítico sólidos como alternativa de gacha.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Constructo Centinela",
        "en": "Sentry Construct",
        "nota": "Eco principal 4 costos; +12% Daño Glacio y +12% Daño de Habilidad, hecho a medida para ella.",
        "best": true
      },
      {
        "es": "Resolución Gélida",
        "en": "Frosty Resolve",
        "nota": "Sonata 5 piezas: maximiza su Habilidad de Resonancia y Daño Glacio, set best-in-slot.",
        "best": true
      },
      {
        "es": "Escarcha Gélida",
        "en": "Freezing Frost",
        "nota": "Sonata 5 piezas alternativa de Daño Glacio mientras se consigue el set Resolución Gélida.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Glacio con Zhezhi",
        "agentes": "Carlotta, Zhezhi, Guardacostas",
        "best": true
      },
      {
        "nombre": "Glacio con Sanhua",
        "agentes": "Carlotta, Sanhua, Verina",
        "best": false
      }
    ],
    "consejo": "Carlotta es una hiper-carry que descarga casi todo su daño a través de su Habilidad de Resonancia mejorada. Prioriza Prob. Crítico (55-60%) y luego Daño Crítico; su Ataque Pesado sella el burst.",
    "ficha": {
      "nombreCompleto": "Carlotta",
      "faccion": "Rinascita",
      "desc": "Aristócrata y cazadora de Rinascita, miembro de la familia Montelli. Fría, elegante y letal, congela el tiempo con su poder Glacio y remata con sus pistolas de duelo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/8/8a/Carlotta_Card.png"
    },
    "nombre": "Carlotta",
    "rareza": "5",
    "elemento": "Glacio",
    "arma": "Pistolas",
    "faccion": "Rinascita",
    "version": "2.0"
  },
  {
    "id": "roccia",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Estrago",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Pesadilla: Garza de la Impermanencia (Nightmare: Impermanence Heron)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Tragicomedia",
        "en": "Tragicomedy",
        "nota": "Arma insignia. 48% Daño Pesado y ~24% Prob. Crítico; mejor ATQ personal.",
        "best": true
      },
      {
        "es": "Espiral Celestial",
        "en": "Celestial Spiral",
        "nota": "Mejor guantelete 4 estrellas F2P; ATQ y bonif. de Daño de Habilidad de Resonancia.",
        "best": false
      },
      {
        "es": "Oleadas del Abismo",
        "en": "Abyss Surges",
        "nota": "Guantelete 5★ estándar (banner permanente); Daño de Ataque Pesado, base F2P sólida para su rol Estrago.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Velo de Medianoche",
        "en": "Midnight Veil",
        "nota": "Mejor set 5pz como Sub-DPS en equipos Estrago (Camellya, Rover Estrago); potencia su Daño Estrago/Pesado.",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alt 5pz con DPS no-Estrago (p.ej. Encore); da Reg. de Energía y buff de ATQ al entrante.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Estrago Hipercarga",
        "agentes": [
          "Camellya",
          "Roccia",
          "Shorekeeper"
        ],
        "best": true
      },
      {
        "nombre": "Rover Estrago",
        "agentes": [
          "Rover (Estrago)",
          "Roccia",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS/facilitadora Estrago. Apunta a ~70% Prob. Crítico total y ~130% Reg. de Energía. Prioriza Habilidad de Resonancia; su Salida da Daño Pesado/Estrago al siguiente Resonador.",
    "ficha": {
      "nombreCompleto": "Roccia",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Estrago con Guanteletes de Rinascita. Sub-DPS y facilitadora que amplifica el Daño Pesado/Estrago del equipo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/e/ea/Roccia_Card.png"
    },
    "nombre": "Roccia",
    "rareza": "5",
    "elemento": "Estrago",
    "arma": "Guanteletes",
    "faccion": "Rinascita",
    "version": "2.0"
  },
  {
    "id": "youhu",
    "costo4": {
      "principal": "Bonificación de Curación",
      "alt": "Regeneración de Energía"
    },
    "costo3": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "ecoPrincipal": "Miríada Lampylumen (Lampylumen Myriad)",
    "substats": [
      "Regeneración de Energía",
      "ATQ%",
      "Bonificación de Curación",
      "PV%"
    ],
    "armas": [
      {
        "es": "Marcato",
        "en": "Marcato",
        "nota": "Mejor en su categoría: Reg. de Energía masiva y generación de Concierto para acceder a su Salida de forma fiable.",
        "best": true
      },
      {
        "es": "Abrazo del Estimado",
        "en": "Endless Collapse",
        "nota": "Alt 3 estrellas F2P; Reg. de Energía sólida para su rotación.",
        "best": false
      },
      {
        "es": "Acuerdo de Amistad",
        "en": "Amity Accord",
        "nota": "Guantelete 4★ del Pase de Batalla orientado a soporte (Regeneración de Energía); útil para su rol de sanadora.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Fulgor Rejuvenecedor",
        "en": "Rejuvenating Glow",
        "nota": "Mejor set 5pz: 10% Bonif. de Curación y buff de 15% ATQ a todo el equipo 30s al curar.",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alt 5pz orientado a buff de ATQ vía Salida si no se prioriza curación.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Glacio Zhezhi/Sanhua",
        "agentes": [
          "Zhezhi",
          "Sanhua",
          "Youhu"
        ],
        "best": true
      },
      {
        "nombre": "Soporte de Ataques Coordinados",
        "agentes": [
          "Carlotta",
          "Zhezhi",
          "Youhu"
        ],
        "best": false
      }
    ],
    "consejo": "Sanadora y soporte de curación de equipo + amplificadora de Daño de Ataques Coordinados. Prioriza Habilidad de Resonancia y Circuito Forte; usa PV%/Reg. de Energía sobre curación pura si el equipo ya sobrevive.",
    "ficha": {
      "nombreCompleto": "Youhu",
      "faccion": "Costas Negras",
      "desc": "Resonadora 4 estrellas de Glacio con Guanteletes. Soporte sanadora que cura a todo el equipo y potencia el Daño de Ataques Coordinados.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/b/b6/Youhu_Card.png"
    },
    "nombre": "Youhu",
    "rareza": "4",
    "elemento": "Glacio",
    "arma": "Guanteletes",
    "faccion": "Costas Negras",
    "version": "2.0"
  },
  {
    "id": "phoebe",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Espectro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Pesadilla: Anade del Luto (Nightmare: Mourning Aix)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Himno Luminoso",
        "en": "Luminous Hymn",
        "nota": "Arma insignia; hecha a medida para su enfoque en Deterioro Espectro (Spectro Frazzle). BiS.",
        "best": true
      },
      {
        "es": "Maestro de Cuerdas",
        "en": "Stringmaster",
        "nota": "Rectificador 5 estrellas estándar; 12% Daño y 12% ATQ al usar Habilidad de Resonancia.",
        "best": false
      },
      {
        "es": "Ondas Cósmicas",
        "en": "Cosmic Ripples",
        "nota": "Rectificador 5★ estándar; Prob. Crítico y ATQ, opción F2P sólida para su DPS de Espectro.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Resplandor Eterno",
        "en": "Eternal Radiance",
        "nota": "Mejor set 5pz DPS: +20% Prob. Crítico al aplicar Deterioro Espectro y ~25% Daño Espectro extra.",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alt 5pz si se juega como Sub-DPS/soporte de aplicación de Deterioro.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Deterioro Espectro (Frazzle)",
        "agentes": [
          "Phoebe",
          "Zani",
          "Shorekeeper"
        ],
        "best": true
      },
      {
        "nombre": "Espectro doble",
        "agentes": [
          "Phoebe",
          "Zani",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "DPS/Sub-DPS de Espectro basada en Deterioro Espectro (Spectro Frazzle). En estado Confesion aplica el debuff; en Absolucion gana Daño extra contra objetivos con Deterioro. Emparejala con Zani, la mejor aplicadora.",
    "ficha": {
      "nombreCompleto": "Phoebe",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Espectro con Rectificador de Rinascita. DPS/Sub-DPS que explota el Deterioro Espectro (Spectro Frazzle).",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/5/54/Phoebe_Card.png"
    },
    "nombre": "Phoebe",
    "rareza": "5",
    "elemento": "Espectro",
    "arma": "Rectificador",
    "faccion": "Rinascita",
    "version": "2.1"
  },
  {
    "id": "brant",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Regeneración de Energía"
    },
    "costo3": {
      "principal": "Bonificación de Daño Fusión",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Dragon del Requiem (Dragon of Dirge)",
    "substats": [
      "Regeneración de Energía",
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%"
    ],
    "armas": [
      {
        "es": "Valor Inquebrantable",
        "en": "Unflickering Valor",
        "nota": "Arma insignia; Reg. de Energía, Prob. Crítico y Bonif. de Ataque Básico ideales para su kit.",
        "best": true
      },
      {
        "es": "Obertura",
        "en": "Overture",
        "nota": "2da mejor; ayuda a alcanzar el 250% Reg. de Energía que exige Coraje Rompeolas.",
        "best": false
      },
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "Espada 5★ estándar; Regeneración de Energía y ATQ, ayuda a acercarse al 250% que exige Coraje Rompeolas.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Coraje Rompeolas",
        "en": "Tidebreaking Courage",
        "nota": "Mejor set 5pz por su alta necesidad de Reg. de Energia; requiere ~250% Reg. de Energia entre arma y ecos.",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alt 5pz si no se busca el rol hibrido soporte de Reg. de Energia.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Fusion con Lupa/Changli",
        "agentes": [
          "Changli",
          "Lupa",
          "Brant"
        ],
        "best": true
      },
      {
        "nombre": "Hipercarga Fusion",
        "agentes": [
          "Carlotta",
          "Sanhua",
          "Brant"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS/soporte hibrido de Fusion: cura al equipo, da escudos y buffea al entrante con su Salida. Alcanza ~250% Reg. de Energia para activar Coraje Rompeolas; su Eco principal Dragon del Requiem suma Daño de Fusion y Ataque Basico.",
    "ficha": {
      "nombreCompleto": "Brant",
      "faccion": "Rinascita",
      "desc": "Resonador 5 estrellas de Fusion con Espada de Rinascita. Sub-DPS/soporte versatil que cura, escuda y buffea al equipo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/2/2d/Brant_Card.png"
    },
    "nombre": "Brant",
    "rareza": "5",
    "elemento": "Fusión",
    "arma": "Espada",
    "faccion": "Rinascita",
    "version": "2.1"
  },
  {
    "id": "cantarella",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Estrago",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Hecate (Hecate)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Susurros de Sirenas",
        "en": "Whispers of Sirens",
        "nota": "Arma insignia; maximiza sus lanzamientos de Habilidad de Eco y le da multiples buffs. BiS.",
        "best": true
      },
      {
        "es": "Cadencia Furtiva",
        "en": "Augment",
        "nota": "4 estrellas del Pase de Batalla con Daño Crítico y buffs de ATQ/Ataque Basico al lanzar Habilidad.",
        "best": false
      },
      {
        "es": "Maestro de Cuerdas",
        "en": "Stringmaster",
        "nota": "Rectificador 5★ estándar; ATQ y Daño de Habilidad de Resonancia, generalista accesible como Sub-DPS.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Himno Celestial",
        "en": "Empyrean Anthem",
        "nota": "Mejor set 5pz general con Hecate como Eco principal; potencia sus ataques coordinados fuera de campo.",
        "best": true
      },
      {
        "es": "Velo de Medianoche",
        "en": "Midnight Veil",
        "nota": "Alt 5pz ideal solo en equipos exclusivamente Estrago.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Estrago coordinado",
        "agentes": [
          "Phrolova",
          "Cantarella",
          "Qiuyuan"
        ],
        "best": true
      },
      {
        "nombre": "Estrago F2P",
        "agentes": [
          "Rover (Estrago)",
          "Cantarella",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS/soporte de Estrago con ataques coordinados fuera de campo. Su Salida potencia el Daño Estrago y la Habilidad de Resonancia del entrante. Sube Bonif. de Daño Estrago en ambos costo-3 y Bonif. de Ataque Basico + ATQ% de substats.",
    "ficha": {
      "nombreCompleto": "Cantarella",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Estrago con Rectificador de Rinascita. Sub-DPS/soporte de ataques coordinados que buffea a los DPS de Estrago.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/0/01/Cantarella_Card.png"
    },
    "nombre": "Cantarella",
    "rareza": "5",
    "elemento": "Estrago",
    "arma": "Rectificador",
    "faccion": "Rinascita",
    "version": "2.2"
  },
  {
    "id": "zani",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Espectro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Capitaneus (Capitaneus)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Justicia Ardiente",
        "en": "Blazing Justice",
        "nota": "Arma insignia; sube ATQ y Daño de Deterioro Espectro e ignora parte de la DEF enemiga. BiS.",
        "best": true
      },
      {
        "es": "Tragicomedia",
        "en": "Tragicomedy",
        "nota": "Guantelete 5 estrellas limitado; segunda stat Prob. Crítico y passive de ATQ y Daño Pesado.",
        "best": false
      },
      {
        "es": "Oleadas del Abismo",
        "en": "Abyss Surges",
        "nota": "Guantelete 5★ estándar; Daño de Ataque Pesado, alternativa F2P para su DPS de Espectro.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Resplandor Eterno",
        "en": "Eternal Radiance",
        "nota": "Mejor set 5pz: 10% Daño Espectro, 20% Prob. Crítico y 15% Bonif. Daño Espectro. Eco principal el costo-3 Capitaneus.",
        "best": true
      },
      {
        "es": "Luz Celestial",
        "en": "Celestial Light",
        "nota": "Alt 5pz de Espectro si aun no tienes un buen Resplandor Eterno.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Deterioro Espectro (Frazzle)",
        "agentes": [
          "Zani",
          "Phoebe",
          "Shorekeeper"
        ],
        "best": true
      },
      {
        "nombre": "Espectro DPS",
        "agentes": [
          "Zani",
          "Phoebe",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "DPS de Espectro centrada en el Efecto Deterioro Espectro (Spectro Frazzle). Usa Daño Crítico en el costo-4 y dos costo-3 con Bonif. de Daño Espectro. Manten ~130% Reg. de Energia para una rotacion fluida.",
    "ficha": {
      "nombreCompleto": "Zani",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Espectro con Guanteletes de Rinascita. DPS principal que aplica y detona el Deterioro Espectro (Spectro Frazzle).",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/d/df/Zani_Card.png"
    },
    "nombre": "Zani",
    "rareza": "5",
    "elemento": "Espectro",
    "arma": "Guanteletes",
    "faccion": "Rinascita",
    "version": "2.3"
  },
  {
    "id": "ciaccona",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Aéreo",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Reminiscencia: Fleurdelys (Reminiscence: Fleurdelys)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Aria del Bosque",
        "en": "Woodland Aria",
        "nota": "Arma insignia; multiples buffs centrados en Erosion Aerea hechos a su medida. BiS.",
        "best": true
      },
      {
        "es": "Homogeneizador Fasico",
        "en": "Phasic Homogenizer",
        "nota": "Pistola 5 estrellas estandar 3.0; buffs universales y skill facil de activar, mejor opcion para la mayoria.",
        "best": false
      },
      {
        "es": "Niebla Estática",
        "en": "Static Mist",
        "nota": "Pistola 5★ estándar; Regeneración de Energía y ATQ, útil para su rol de Sub-DPS Aérea.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Rafagas del Firmamento",
        "en": "Gusts of Welkin",
        "nota": "Mejor set 5pz como Sub-DPS Aereo; sinergia total con su kit de Erosion Aerea. Eco principal Reminiscencia: Fleurdelys.",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alt 5pz en equipos de Deterioro Espectro por el buff de ATQ y Daño al entrante.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Erosion Aerea",
        "agentes": [
          "Cartethyia",
          "Ciaccona",
          "Shorekeeper"
        ],
        "best": true
      },
      {
        "nombre": "Aereo con Rover",
        "agentes": [
          "Cartethyia",
          "Ciaccona",
          "Rover (Aereo)"
        ],
        "best": false
      }
    ],
    "consejo": "La mejor Sub-DPS Aerea del juego; eleva enormemente los equipos de Erosion Aerea aplicando Erosion fuera de campo. Su Salida amplifica el Daño de Erosion Aerea. Daño Crítico en el Eco principal y Bonif. Daño Aereo en los costo-3.",
    "ficha": {
      "nombreCompleto": "Ciaccona",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Aereo con Pistolas de Rinascita. Sub-DPS de referencia que amplifica los equipos de Erosion Aerea.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/6/68/Ciaccona_Card.png"
    },
    "nombre": "Ciaccona",
    "rareza": "5",
    "elemento": "Aéreo",
    "arma": "Pistolas",
    "faccion": "Rinascita",
    "version": "2.3"
  },
  {
    "id": "cartethyia",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Aéreo",
      "alt": "PV%"
    },
    "costo1": {
      "principal": "PV%",
      "alt": "PV%"
    },
    "ecoPrincipal": "Reminiscencia: Fleurdelys (Reminiscence: Fleurdelys)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "PV%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Espina del Desafiante",
        "en": "Defier's Thorn",
        "nota": "Arma insignia; sube PV, ignora 8% DEF y suma 20% Daño si el enemigo tiene 2+ acumulaciones de Erosion. BiS.",
        "best": true
      },
      {
        "es": "Esmeralda del Genesis",
        "en": "Emerald of Genesis",
        "nota": "Espada 5 estrellas estandar; buena alternativa. Espada Guardiana basta para F2P.",
        "best": false
      },
      {
        "es": "Comando de Convicción",
        "en": "Commando of Conviction",
        "nota": "Espada 4★ (misión/estándar) con ATQ tras Introducción; opción económica cuando no tienes espadas 5★.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Peregrinaje a Barlovento",
        "en": "Windward Pilgrimage",
        "nota": "Set Aereo 5pz hecho a su medida; como no escala con ATQ usa reparto 44111 con dos costo-4 (Fleurdelys + Pesadilla: Kelpie).",
        "best": true
      },
      {
        "es": "Rafagas del Firmamento",
        "en": "Gusts of Welkin",
        "nota": "Alt 5pz Aereo si aun no tienes Peregrinaje a Barlovento optimizado.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Erosion Aerea",
        "agentes": [
          "Cartethyia",
          "Ciaccona",
          "Shorekeeper"
        ],
        "best": true
      },
      {
        "nombre": "Aereo con Chisa/Rover",
        "agentes": [
          "Cartethyia",
          "Chisa",
          "Rover (Aereo)"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal de Erosion Aerea; sus habilidades escalan con PV, no con ATQ, asi que usa el reparto 44111. Substats: Prob. Crítico y Daño Crítico primero, luego PV%, despues Bonif. de Ataque Basico. Ciaccona es su mejor Sub-DPS.",
    "ficha": {
      "nombreCompleto": "Cartethyia",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Aereo con Espada de Rinascita. DPS principal de Erosion Aerea que escala con PV.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/d/d5/Cartethyia_Card.png"
    },
    "nombre": "Cartethyia",
    "rareza": "5",
    "elemento": "Aéreo",
    "arma": "Espada",
    "faccion": "Rinascita",
    "version": "2.4"
  },
  {
    "id": "lupa",
    "costo4": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Fusión",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Leona de la Gloria (Lioness of Glory)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Marca de Fuego Salvaje",
        "en": "Wildfire Mark",
        "nota": "Arma insignia; Daño Crítico, ATQ y buff de equipo de 24% de Daño a todos los aliados a R1.",
        "best": true
      },
      {
        "es": "Verdad Ardiente",
        "en": "Blazing Brilliance",
        "nota": "Mandoble alternativo con stats de Crítico/ATQ para su rol de soporte-DPS de Fusion.",
        "best": false
      },
      {
        "es": "Cima Verdeante",
        "en": "Verdant Summit",
        "nota": "Mandoble 5★ estándar; Daño de Ataque Pesado y Daño Crítico, alternativa F2P para su rol de Fusión.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Zarpa Flamigera",
        "en": "Flaming Clawprint",
        "nota": "Mejor set 5pz Fusion; potencia su Daño y da buffs a todo el equipo. Eco principal Leona de la Gloria (12% Fusion + 12% Daño de Liberacion).",
        "best": true
      },
      {
        "es": "Nubes Iluminadas por la Luna",
        "en": "Moonlit Clouds",
        "nota": "Alt 5pz orientado a buff de ATQ al entrante via Salida.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Fusion con Brant",
        "agentes": [
          "Brant",
          "Lupa",
          "Shorekeeper"
        ],
        "best": true
      },
      {
        "nombre": "Fusion generico",
        "agentes": [
          "Changli",
          "Lupa",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "Soporte-DPS de Fusion que da buffs de equipo y hace daño personal solido. Su Salida sinergiza especialmente con Brant. Usa Daño Crítico en el costo-4 y Bonif. de Daño Fusion en los costo-3.",
    "ficha": {
      "nombreCompleto": "Lupa",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Fusion con Mandoble de Rinascita. Soporte-DPS que impulsa a los equipos de Fusion con buffs a todo el grupo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/e/e4/Lupa_Card.png"
    },
    "nombre": "Lupa",
    "rareza": "5",
    "elemento": "Fusión",
    "arma": "Mandoble",
    "faccion": "Rinascita",
    "version": "2.4"
  },
  {
    "id": "phrolova",
    "estado": "completo",
    "costo4": {
      "principal": "Prob. Crítico o Daño Crítico",
      "alt": "ATQ%"
    },
    "costo3": {
      "principal": "Bonificación de Daño Estrago",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Estrago"
    },
    "ecoPrincipal": "Pesadilla: Hécate",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Elegía del Leteo",
        "en": "Lethean Elegy",
        "nota": "Arma insignia; ATQ base, Prob. Crítico, Bonif. Daño Habilidad, amplificación de Daño de Eco e ignora DEF. La mejor por amplio margen.",
        "best": true
      },
      {
        "es": "Maestro de Cuerdas",
        "en": "Stringmaster",
        "nota": "Excelente alternativa por ATQ y Daño de Hab. de Resonancia.",
        "best": false
      },
      {
        "es": "Ondas Cósmicas",
        "en": "Cosmic Ripples",
        "nota": "Opción sólida de ATQ.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Sueño de los Perdidos (3 pzs)",
        "en": "Dream of the Lost (3pc)",
        "nota": "20% Prob. Crítico y 35% Bonif. Daño de Habilidad de Eco.",
        "best": true
      },
      {
        "es": "Eclipse del Ocaso (2 pzs)",
        "en": "Sun-sinking Eclipse (2pc)",
        "nota": "Completa el 3+2 con Bonif. Daño Estrago.",
        "best": true
      },
      {
        "es": "Velo de Medianoche (2 pzs)",
        "en": "Midnight Veil (2pc)",
        "nota": "Alternativa de 2 piezas.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Daño de Eco",
        "agentes": "Phrolova, Qiuyuan, Cantarella",
        "best": true
      },
      {
        "nombre": "Variante",
        "agentes": "Phrolova, Qiuyuan, Roccia",
        "best": false
      }
    ],
    "consejo": "DPS de Estrago centrada en Daño de Habilidad de Eco: activa a Hécate con múltiples lanzamientos de habilidad y acompáñala con Qiuyuan, el mejor amplificador de Daño de Eco.",
    "ficha": {
      "nombreCompleto": "Phrolova",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Estrago con Rectificador; DPS principal que orquesta ataques del Eco Pesadilla: Hécate mediante habilidades de Eco encadenadas.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/0/0b/Phrolova_Card.png"
    },
    "nombre": "Phrolova",
    "rareza": "5",
    "elemento": "Estrago",
    "arma": "Rectificador",
    "faccion": "Rinascita",
    "version": "2.5"
  },
  {
    "id": "augusta",
    "estado": "completo",
    "costo4": {
      "principal": "ATQ%",
      "alt": "Prob. Crítico o Daño Crítico"
    },
    "costo3": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Electro"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "-"
    },
    "ecoPrincipal": "El Falso Soberano",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Dominio del Fulgor Atronador",
        "en": "Thunderflare Dominion",
        "nota": "Arma insignia; ATQ, Daño de Ataque Pesado e ignora DEF acumulable. La mejor.",
        "best": true
      },
      {
        "es": "Cima Verdeante",
        "en": "Verdant Summit",
        "nota": "Fuerte alternativa por Bonif. Daño de Ataque Pesado.",
        "best": false
      },
      {
        "es": "Cénit Áureo",
        "en": "Aureate Zenith",
        "nota": "Mandoble 4★ del Pase de Batalla; Daño de Ataque Pesado, la mejor opción budget para su kit.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Corona del Valor (3 pzs)",
        "en": "Crown of Valor (3pc)",
        "nota": "Otorga ATQ y Daño Crítico; usa main stats de ATQ en 4/3/1.",
        "best": true
      },
      {
        "es": "Trueno del Vacío (2 pzs)",
        "en": "Void Thunder (2pc)",
        "nota": "10% Bonif. Daño Electro para completar el set.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "DPS Electro frontal",
        "agentes": "Augusta, Zhezhi/buffer, Verina/Shorekeeper",
        "best": true
      }
    ],
    "consejo": "DPS Electro de vanguardia enfocada en Ataques Pesados y alto Daño Crítico; con Corona del Valor pon ATQ en los ecos principales porque el set ya aporta la Crítica.",
    "ficha": {
      "nombreCompleto": "Augusta",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Electro con Mandoble; DPS agresiva que 'llega, ve y vence' con ataques pesados de alto Daño Crítico.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/3/39/Augusta_Card.png"
    },
    "nombre": "Augusta",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Mandoble",
    "faccion": "Rinascita",
    "version": "2.6"
  },
  {
    "id": "iuno",
    "estado": "completo",
    "costo4": {
      "principal": "ATQ%",
      "alt": "Prob. Crítico o Daño Crítico"
    },
    "costo3": {
      "principal": "ATQ% o Bonificación de Daño Aéreo",
      "alt": "Bonificación de Daño Aéreo"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "-"
    },
    "ecoPrincipal": "Dama del Mar",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Aéreo"
    ],
    "armas": [
      {
        "es": "Sigilo del Observalunas",
        "en": "Moongazer's Sigil",
        "nota": "Guantelete insignia; ATQ, Daño de Liberación de Resonancia e ignora hasta 36% DEF con escudos. La mejor.",
        "best": true
      },
      {
        "es": "Homogeneizador Fásico",
        "en": "Phasic Homogenizer",
        "nota": "Alternativa estándar 5 estrellas con Bonif. Daño.",
        "best": false
      },
      {
        "es": "Oleadas del Abismo",
        "en": "Abyss Surges",
        "nota": "Guantelete 5★ estándar; base F2P sólida para su daño Aéreo.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Corona del Valor (3 pzs)",
        "en": "Crown of Valor (3pc)",
        "nota": "ATQ y Daño Crítico.",
        "best": true
      },
      {
        "es": "Vendaval de la Sierra (2 pzs)",
        "en": "Sierra Gale (2pc)",
        "nota": "Bonif. Daño Aéreo; también valen Ráfagas del Firmamento o Peregrinaje a Barlovento.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Sub-DPS Aéreo con soporte",
        "agentes": "Iuno, DPS principal, Sanador (Verina/Shorekeeper)",
        "best": true
      }
    ],
    "consejo": "Sub-DPS Aérea que aporta escudos y curación; ignora DEF al generar escudos, así que mantén su ciclo de habilidad y liberación activo.",
    "ficha": {
      "nombreCompleto": "Iuno",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Aéreo con Guanteletes; sacerdotisa de poderes lunares que cambia de forma de arma, hace daño Aéreo y da escudos y curación al equipo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/1/1f/Iuno_Card.png"
    },
    "nombre": "Iuno",
    "rareza": "5",
    "elemento": "Aéreo",
    "arma": "Guanteletes",
    "faccion": "Rinascita",
    "version": "2.6"
  },
  {
    "id": "galbrena",
    "estado": "completo",
    "costo4": {
      "principal": "Prob. Crítico o Daño Crítico",
      "alt": "ATQ%"
    },
    "costo3": {
      "principal": "Bonificación de Daño Fusión",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Bonificación de Daño Fusión"
    },
    "ecoPrincipal": "Corrosaurio",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Lux y Umbra",
        "en": "Lux & Umbra",
        "nota": "Arma insignia; sincroniza sus Habilidades de Eco y Ataques Pesados y desbloquea 8% ignora DEF en estado potenciado. La mejor.",
        "best": true
      },
      {
        "es": "Homogeneizador Fásico",
        "en": "Phasic Homogenizer",
        "nota": "Solo un poco por detrás; skill accesible con Ruptura Melódica. Ideal para la mayoría.",
        "best": false
      },
      {
        "es": "Niebla Estática",
        "en": "Static Mist",
        "nota": "Pistola 5★ estándar; Regeneración de Energía y ATQ, alternativa accesible para su DPS de Fusión.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Sombra del Ala Ígnea",
        "en": "Flamewing's Shadow",
        "nota": "BiS; escala con Daño Fusión y Daño de Habilidad de Eco.",
        "best": true
      },
      {
        "es": "Grieta Fundida",
        "en": "Molten Rift",
        "nota": "Sustituto sólido mientras farmeas el set completo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "DPS Fusión de Eco",
        "agentes": "Galbrena, buffer de Eco, Sanador",
        "best": true
      }
    ],
    "consejo": "DPS estándar: prioriza Prob./Daño Crítico, luego ATQ% y Daño de Ataque Pesado. El Corrosaurio (3 costos) da 12% Daño Fusión permanente y 20% Daño de Eco.",
    "ficha": {
      "nombreCompleto": "Galbrena",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Fusión con Pistolas; excazadora de Discordia y operativa de las Costas Negras que canaliza poderes de Discordia Tácita mediante su 'impulso ardiente'.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/9/9d/Galbrena_Card.jpg"
    },
    "nombre": "Galbrena",
    "rareza": "5",
    "elemento": "Fusión",
    "arma": "Pistolas",
    "faccion": "Rinascita",
    "version": "2.7"
  },
  {
    "id": "qiuyuan",
    "estado": "completo",
    "costo4": {
      "principal": "Prob. Crítico o Daño Crítico",
      "alt": "Bonificación de Daño Aéreo"
    },
    "costo3": {
      "principal": "Bonificación de Daño Aéreo",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "-"
    },
    "ecoPrincipal": "Reminiscencia: Fenrico",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Sentencia Esmeralda",
        "en": "Emerald Sentence",
        "nota": "La mejor; mejora Daño de Ataque Pesado y capacidad de soporte para equipos de Daño de Eco.",
        "best": true
      },
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "Buena por stats y efecto general.",
        "best": false
      },
      {
        "es": "Luminiscencia",
        "en": "Lumingloss",
        "nota": "Excelente opción 4 estrellas por buff de Daño de Ataque Pesado.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Ley de la Armonía",
        "en": "Law of Harmony",
        "nota": "La mejor; mejora su Ataque Pesado y da Bonif. Daño de Eco a los aliados.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Daño de Eco",
        "agentes": "Qiuyuan, Sigrika/Phrolova, Shorekeeper",
        "best": true
      }
    ],
    "consejo": "Sub-DPS y buffer Aéreo: único que da Amplificación de Daño de Habilidad de Eco (50% plano) por Intro. Cubre primero el requisito de Regeneración de Energía y luego maximiza Crítica.",
    "ficha": {
      "nombreCompleto": "Qiuyuan",
      "faccion": "Rinascita",
      "desc": "Resonador 5 estrellas de Aéreo con Espada; espadachín ciego que 've el mundo a través del bambú' con su Visión Mental y hace daño Aéreo con ataques pesados.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/1/17/Qiuyuan_Card.jpg"
    },
    "nombre": "Qiuyuan",
    "rareza": "5",
    "elemento": "Aéreo",
    "arma": "Espada",
    "faccion": "Rinascita",
    "version": "2.7"
  },
  {
    "id": "chisa",
    "estado": "completo",
    "costo4": {
      "principal": "ATQ%",
      "alt": "Prob. Crítico o Daño Crítico"
    },
    "costo3": {
      "principal": "ATQ% o Bonificación de Daño Estrago",
      "alt": "Bonificación de Daño Estrago"
    },
    "costo1": {
      "principal": "ATQ% o Bonificación de Daño Estrago",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Eco de Estrago (Bonif. Daño Estrago)",
    "substats": [
      "Bonificación de Daño Estrago",
      "ATQ%",
      "Prob. Crítico",
      "Daño Crítico",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Kumokiri",
        "en": "Kumokiri",
        "nota": "Arma insignia; hasta 36% Prob. Crítico y 24% ATQ, más 48% Daño de Liberación de Resonancia acumulable. BiS indiscutible.",
        "best": true
      },
      {
        "es": "Meditaciones sobre la Piedad",
        "en": "Meditations on Mercy",
        "nota": "Mejor opción F2P; se activa con su aplicación de Estado Negativo de Estrago.",
        "best": false
      },
      {
        "es": "Cima Verdeante",
        "en": "Verdant Summit",
        "nota": "Mandoble 5★ estándar; opción F2P para su rol de soporte de Estados Negativos.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Hilo del Destino Truncado (3 pzs)",
        "en": "Thread of Severed Fate (3pc)",
        "nota": "ATQ y Bonif. Daño de Liberación de Resonancia. La mejor.",
        "best": true
      },
      {
        "es": "Eclipse del Ocaso / Velo de Medianoche (2 pzs)",
        "en": "Sun-sinking Eclipse / Midnight Veil (2pc)",
        "nota": "Bonif. Daño Estrago para completar.",
        "best": true
      },
      {
        "es": "Resplandor Rejuvenecedor",
        "en": "Rejuvenating Glow",
        "nota": "Opción para build de soporte puro (buff de ATQ al equipo).",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Equipo de Estados Negativos",
        "agentes": "Chisa, DPS de Estrago, Sanador/soporte",
        "best": true
      }
    ],
    "consejo": "Soporte central en equipos de Estados Negativos; aplica Estado Negativo de Estrago para activar armas y sets. Prioriza Bonif. Daño Estrago y ATQ.",
    "ficha": {
      "nombreCompleto": "Chisa",
      "faccion": "Rinascita",
      "desc": "Resonadora 5 estrellas de Estrago con Mandoble; Resonadora mutante que percibe 'hilos' destructivos en los objetos para analizar debilidades e inducir fallos estructurales.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/c/ca/Chisa_Card.jpg"
    },
    "nombre": "Chisa",
    "rareza": "5",
    "elemento": "Estrago",
    "arma": "Mandoble",
    "faccion": "Rinascita",
    "version": "2.8"
  },
  {
    "id": "buling",
    "estado": "completo",
    "costo4": {
      "principal": "Bonificación de Curación",
      "alt": "Regeneración de Energía"
    },
    "costo3": {
      "principal": "Bonificación de Curación",
      "alt": "PV% o ATQ%"
    },
    "costo1": {
      "principal": "Bonificación de Curación",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Geoquelonio Portacampanas",
    "substats": [
      "ATQ%",
      "Regeneración de Energía",
      "PV%"
    ],
    "armas": [
      {
        "es": "Sinfonía Estelar",
        "en": "Stellar Symphony",
        "nota": "La mejor jugándola como soporte por stats altos para curación y rotaciones.",
        "best": true
      },
      {
        "es": "Variación",
        "en": "Variation",
        "nota": "Alternativa 4 estrellas muy rentable; 51.8% Regen. Energía y energía de concierto extra.",
        "best": false
      },
      {
        "es": "Llamada del Abismo",
        "en": "Call of the Abyss",
        "nota": "Mejor opción F2P; aumenta la potencia de curación.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Nubes a la Luz de la Luna",
        "en": "Moonlit Clouds",
        "nota": "Mejora Regen. Energía y da buff de ATQ al DPS al entrar.",
        "best": true
      },
      {
        "es": "Resplandor Rejuvenecedor",
        "en": "Rejuvenating Glow",
        "nota": "Bonif. Curación y +15% ATQ a todo el equipo al curar.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Soporte/sanador universal",
        "agentes": "Buling, DPS de Habilidad de Resonancia, Sub-DPS",
        "best": true
      }
    ],
    "consejo": "Soporte y sustain 4 estrellas para equipos genéricos; potencia el Daño de Habilidad de Resonancia. Usa Geoquelonio Portacampanas por el escudo (50% reducción de daño).",
    "ficha": {
      "nombreCompleto": "Buling",
      "faccion": "Costas Negras",
      "desc": "Resonadora 4 estrellas de Electro con Rectificador; sanadora y soporte que canaliza técnicas de cultivo de Qi eléctrico y buffea al equipo mediante su estado de Equilibrio Yin-Yang.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/5/58/Buling_Card.jpg"
    },
    "nombre": "Buling",
    "rareza": "4",
    "elemento": "Electro",
    "arma": "Rectificador",
    "faccion": "Costas Negras",
    "version": "2.8"
  },
  {
    "id": "lynae",
    "estado": "completo",
    "costo4": {
      "principal": "ATQ% o Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "ATQ% o Bonificación de Daño Espectro",
      "alt": "Bonificación de Daño Espectro"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "-"
    },
    "ecoPrincipal": "Hyvatia",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Bonificación de Daño Espectro"
    ],
    "armas": [
      {
        "es": "Bláster de Espectro",
        "en": "Spectrum Blaster",
        "nota": "Pistola insignia; ATQ alto, Prob. Crítico, ATQ y Daño de Ataque Básico extra, más 24% Bonif. de Daño a todo el equipo. La mejor.",
        "best": true
      },
      {
        "es": "Homogeneizador Fásico",
        "en": "Phasic Homogenizer",
        "nota": "20% Bonif. Daño de todos los atributos para Lynae.",
        "best": false
      },
      {
        "es": "Niebla Estática",
        "en": "Static Mist",
        "nota": "Mejora su capacidad de buff al siguiente Resonador.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Pacto del Salto de Neón (5 pzs)",
        "en": "Pact of Neonlight Leap (5pc)",
        "nota": "Set de 5 piezas con Hyvatia como Eco principal.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura Melódica (Tune Rupture)",
        "agentes": "Lynae, Mornye, Aemeath",
        "best": true
      }
    ],
    "consejo": "Sub-DPS Espectro con gran daño propio y excelente buffer. Ecos: pieza 4-costos con Crítica, dos 3-costos de Daño Espectro y dos 1-costos de ATQ%.",
    "ficha": {
      "nombreCompleto": "Lynae",
      "faccion": "Lahai-Roi",
      "desc": "Resonadora 5 estrellas de Espectro con Pistolas; estudiante de la Academia Startorch cuyo estilo eléctrico y llamativo esconde una concentración interior tan explosiva como un resorte comprimido.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/7/71/Lynae_Card.jpg"
    },
    "nombre": "Lynae",
    "rareza": "5",
    "elemento": "Espectro",
    "arma": "Pistolas",
    "faccion": "Lahai-Roi",
    "version": "3.0"
  },
  {
    "id": "mornye",
    "estado": "completo",
    "costo4": {
      "principal": "DEF%",
      "alt": "Regeneración de Energía"
    },
    "costo3": {
      "principal": "Regeneración de Energía",
      "alt": "DEF%"
    },
    "costo1": {
      "principal": "Bonificación de Curación",
      "alt": "DEF%"
    },
    "ecoPrincipal": "Eco de soporte (Halo de Resplandor Estelar)",
    "substats": [
      "Regeneración de Energía",
      "DEF%",
      "PV%",
      "ATQ%"
    ],
    "armas": [
      {
        "es": "Calibrador de Campo Estelar",
        "en": "Starfield Calibrator",
        "nota": "La mejor; le da los stats que necesita y otorga Daño Crítico extra a los aliados.",
        "best": true
      },
      {
        "es": "Discordia",
        "en": "Discord",
        "nota": "Alternativa 4 estrellas asequible con mucha Regen. de Energía.",
        "best": false
      },
      {
        "es": "Noche Eterna Intrépida",
        "en": "Dauntless Evernight",
        "nota": "Opción con DEF/Regen. Energía para buffeo y curación.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Halo de Resplandor Estelar",
        "en": "Halo of Starry Radiance",
        "nota": "BiS de sanadora/soporte; hasta 25% de ATQ a todo el equipo.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura Melódica (Tune Rupture)",
        "agentes": "Mornye, Lynae, Aemeath",
        "best": true
      }
    ],
    "consejo": "Sanadora y soporte: prioriza Regeneración de Energía, luego DEF y por último Crítica. Alcanza el 260% de Regen. de Energía del equipo para maximizar su Marcador Interferido (+40% de daño recibido por enemigos).",
    "ficha": {
      "nombreCompleto": "Mornye",
      "faccion": "Lahai-Roi",
      "desc": "Resonadora 5 estrellas de Fusión con Mandoble; ingeniera y profesora del Departamento de Ingeniería Exostrider que combina control mecánico y soporte de curación para amplificar el daño del equipo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/e/eb/Mornye_Card.jpg"
    },
    "nombre": "Mornye",
    "rareza": "5",
    "elemento": "Fusión",
    "arma": "Mandoble",
    "faccion": "Lahai-Roi",
    "version": "3.0"
  },
  {
    "id": "aemeath",
    "nombre": "Aemeath",
    "rareza": "5",
    "elemento": "Fusión",
    "arma": "Espada",
    "faccion": "Lahai-Roi",
    "estado": "completo",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Fusión",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Prob. Crítico"
    },
    "ecoPrincipal": "Sigillum",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía",
      "Daño de Liberación de Resonancia"
    ],
    "armas": [
      {
        "es": "Estrella Polar Siempre Brillante",
        "en": "Everbright Polestar",
        "nota": "Arma insignia (espada); +24% Bonif. de Daño de Todos los Atributos e ignora DEF y RES Fusión al infligir Fusión Estallido o Alteración de Sintonía - Ruptura",
        "best": true
      },
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "Alternativa 5★ accesible; aporta Regeneración de Energía y ATQ apilable",
        "best": false
      },
      {
        "es": "Comando de Convicción",
        "en": "Commando of Conviction",
        "nota": "Opción 4★ económica con Bonif. de Daño de Ataque",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Estrella Pionera",
        "en": "Trailblazing Star",
        "nota": "Sonata de v3.1; hasta 20% Prob. Crítico y 30% Bonif. Daño Fusión, hecha a su medida",
        "best": true
      },
      {
        "es": "Grieta de Magma Fundido",
        "en": "Molten Rift",
        "nota": "Alternativa 2pc de Bonif. Daño Fusión",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura de Sintonía (Tune Rupture)",
        "agentes": [
          "Aemeath",
          "Lynae",
          "Mornye"
        ],
        "best": true
      },
      {
        "nombre": "Fusión Estallido DoT",
        "agentes": [
          "Aemeath",
          "Denia",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal muy versátil: adapta su Modo de Resonancia a Ruptura de Sintonía (mono-objetivo) o Fusión Estallido (AoE y quickswap). Mantén ~120% de Regeneración de Energía para tener la Liberación cada rotación y prioriza Daño de Liberación de Resonancia.",
    "ficha": {
      "nombreCompleto": "Aemeath",
      "faccion": "Lahai-Roi",
      "desc": "Resonadora de Fusión con espada, primera DPS dedicada a Ruptura de Sintonía y núcleo de los equipos de Ruptura junto a Lynae y Mornye; también rinde de forma sobresaliente en composiciones de Fusión Estallido.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/9/9b/Aemeath_Convene_Draw.png"
    },
    "version": "3.1"
  },
  {
    "id": "luuk-herssen",
    "nombre": "Luuk Herssen",
    "rareza": "5",
    "elemento": "Espectro",
    "arma": "Guanteletes",
    "faccion": "Lahai-Roi",
    "estado": "completo",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Espectro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Nova Gemela: Cañón Nebuloso (Twin Nova: Nebulous Cannon)",
    "substats": [
      "Regeneración de Energía",
      "Daño Crítico",
      "Prob. Crítico",
      "ATQ%",
      "Daño de Ataque Básico"
    ],
    "armas": [
      {
        "es": "Espina del Alba",
        "en": "Daybreaker's Spine",
        "nota": "Arma insignia (guanteletes); ATQ y Prob. Crítico altos, más Bonif. Daño Espectro, Bonif. Daño de Ataque Básico e ignora DEF. La mejor con diferencia (100%).",
        "best": true
      },
      {
        "es": "Brazal de Pulsación",
        "en": "Pulsation Bracer",
        "nota": "5★ del gacha permanente; mismas stats base que la insignia con pasiva de Bonif. Daño de Ataque Básico. Su 2ª mejor opción (85.7%) y muy accesible.",
        "best": false
      },
      {
        "es": "Justicia Ardiente",
        "en": "Blazing Justice",
        "nota": "Insignia de Zani; ATQ, Daño Crítico y algo de ignorar DEF, buena alternativa (83.4%).",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Rito de la Revelación Dorada",
        "en": "Rite of Gilded Revelation",
        "nota": "Su mejor set sin discusión: Bonif. Daño Espectro apilable hasta 40% y +40% Bonif. Daño de Ataque Básico en su Liberación.",
        "best": true
      },
      {
        "es": "Luz Celestial",
        "en": "Celestial Light",
        "nota": "Alternativa Espectro temporal mientras se farmea el set nuevo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura de Sintonía (Tune Strain)",
        "agentes": [
          "Luuk Herssen",
          "Denia",
          "Mornye"
        ],
        "best": true
      },
      {
        "nombre": "Ataque Básico con Sanhua",
        "agentes": [
          "Luuk Herssen",
          "Sanhua",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal de Espectro centrado en combate aéreo: ataca en el aire para cargar sus habilidades mejoradas, remata con el ataque en picado y descarga una de las Liberaciones más devastadoras del juego. Es además el mejor usuario de Sanhua del juego. Prioriza Regeneración de Energía hasta asegurar la rotación y luego Crítico.",
    "ficha": {
      "nombreCompleto": "Luuk Herssen",
      "faccion": "Lahai-Roi",
      "desc": "Resonador de Espectro que usa guanteletes; DPS principal de Ataque Básico aéreo cuya Liberación, potenciada por su ataque en picado, es uno de los mayores nukes del juego.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/f/fc/Luuk_Herssen_Convene_Draw.png"
    },
    "version": "3.1"
  },
  {
    "id": "sigrika",
    "nombre": "Sigrika",
    "rareza": "5",
    "elemento": "Aéreo",
    "arma": "Guanteletes",
    "faccion": "Lahai-Roi",
    "estado": "completo",
    "costo4": {
      "principal": "Bonificación de Daño Aéreo",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Aéreo",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "Prob. Crítico",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Explorador Sin Nombre (Nameless Explorer)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Claves del Juramento Solar",
        "en": "Solsworn Ciphers",
        "nota": "Arma insignia (guanteletes); +24% ATQ, hasta 64% Amplif. Daño de Habilidad de Eco tras Introducción/Habilidad de Eco y el Aéreo ignora 20% de DEF en golpes de Eco",
        "best": true
      },
      {
        "es": "Oleadas del Abismo",
        "en": "Abyss Surges",
        "nota": "Alternativa 5★ muy sólida enfocada en Habilidad de Eco",
        "best": false
      },
      {
        "es": "Marcato",
        "en": "Marcato",
        "nota": "Guantelete 4★ del Pase de Batalla; enorme Regeneración de Energía que su pasiva convierte en más Daño de Habilidad de Eco.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Sonido del Nombre Verdadero",
        "en": "Sound of True Name",
        "nota": "Mejor sonata; 2pc +10% Bonif. Daño Aéreo y 5pc +20% Prob. Crítico de Habilidad de Eco y +15% Bonif. Daño Aéreo tras Habilidad de Eco",
        "best": true
      },
      {
        "es": "Vendaval de la Sierra",
        "en": "Sierra Gale",
        "nota": "Alternativa Aéreo mientras consigues Sonido del Nombre Verdadero",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Daño de Habilidad de Eco",
        "agentes": [
          "Sigrika",
          "Qiuyuan",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Eco Aéreo",
        "agentes": [
          "Sigrika",
          "Lucilla (modo Eco)",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal de Aéreo con guanteletes que consume runas para desencadenar Ataques Fuertes Mejorados de Habilidad de Eco. Sube primero su Circuito Forte y su Liberación de Resonancia. Prioriza Daño Crítico > Prob. Crítico > ATQ% y sube la Regeneración de Energía a 170-190% (su pasiva la convierte en más Daño de Habilidad de Eco).",
    "ficha": {
      "nombreCompleto": "Sigrika",
      "faccion": "Lahai-Roi",
      "desc": "Resonadora de Aéreo con guanteletes y DPS principal especializada en Daño de Habilidad de Eco; consume runas para lanzar Ataques Fuertes Mejorados que dañan y aplican control de masas.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/6/6d/Sigrika_Convene_Draw.png"
    },
    "version": "3.2"
  },
  {
    "id": "hiyuki",
    "nombre": "Hiyuki",
    "rareza": "5",
    "elemento": "Glacio",
    "arma": "Espada",
    "faccion": "Lahai-Roi",
    "estado": "completo",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Bonificación de Daño Glacio"
    },
    "costo3": {
      "principal": "Bonificación de Daño Glacio",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "ecoPrincipal": "Reminiscencia: Threnodian - Constructo Nacido del Vacío (Reminiscence: Threnodian - Voidborne Construct)",
    "substats": [
      "Regeneración de Energía",
      "Prob. Crítico",
      "Daño Crítico",
      "Daño de Liberación de Resonancia",
      "ATQ%"
    ],
    "armas": [
      {
        "es": "Quemadura Helada",
        "en": "Frostburn",
        "nota": "Arma insignia (espada); amplifica el Daño de Glacio Rozadura y hace que su Daño de Liberación ignore parte de la DEF del objetivo",
        "best": true
      },
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "Alternativa accesible; Regeneración de Energía y ATQ muy útiles para ella",
        "best": false
      },
      {
        "es": "Comando de Convicción",
        "en": "Commando of Conviction",
        "nota": "Espada 4★ (misión/estándar) con ATQ tras Introducción; alternativa económica para su DPS de Glacio.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Deseos de Nevada Silenciosa",
        "en": "Wishes of Quiet Snowfall",
        "nota": "Mejor sonata; 5pc aumenta la Bonif. Daño Glacio y otorga +25% Prob. Crítico al causar Daño de Liberación de Resonancia",
        "best": true
      },
      {
        "es": "Escarcha Congelante",
        "en": "Freezing Frost",
        "nota": "Alternativa 2pc de Bonif. Daño Glacio",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Glacio Rozadura",
        "agentes": [
          "Hiyuki",
          "Lucilla",
          "Chisa"
        ],
        "best": true
      },
      {
        "nombre": "Glacio Rozadura (variante soporte)",
        "agentes": [
          "Hiyuki",
          "Lucilla",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal de Glacio cuyo daño proviene sobre todo de la Liberación de Resonancia y del mecanismo de Glacio Rozadura. Equilibra su Crítico en torno a 70:250, sube su Regeneración de Energía a ~120% y luego maximiza Daño de Liberación de Resonancia y ATQ%. Su mejor equipo es con Lucilla y Chisa.",
    "ficha": {
      "nombreCompleto": "Hiyuki",
      "faccion": "Lahai-Roi",
      "desc": "Resonadora de Glacio con espada y DPS principal cuyo daño gira en torno a la Liberación de Resonancia y la aplicación de Glacio Rozadura; brilla junto a Lucilla como sub-DPS.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/c/cf/Hiyuki_Convene_Draw.png"
    },
    "version": "3.3"
  },
  {
    "id": "denia",
    "nombre": "Denia",
    "rareza": "5",
    "elemento": "Fusión",
    "arma": "Rectificador",
    "faccion": "Lahai-Roi",
    "estado": "completo",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Fusión",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Reminiscencia: Denia (Reminiscence: Denia)",
    "substats": [
      "Regeneración de Energía",
      "Prob. Crítico",
      "Daño Crítico",
      "Daño de Liberación de Resonancia",
      "ATQ%"
    ],
    "armas": [
      {
        "es": "Estrella Enana Forjada",
        "en": "Forged Dwarf Star",
        "nota": "Arma insignia (rectificador); gran mezcla de daño personal y buff de ATQ a todo el equipo. BiS en ambos modos (100%).",
        "best": true
      },
      {
        "es": "Maestro de las Cuerdas",
        "en": "Stringmaster",
        "nota": "Insignia de Yinlin; el rectificador generalista de siempre, gran alternativa (91% en Fusión Estallido).",
        "best": false
      },
      {
        "es": "Elegía del Leteo",
        "en": "Lethean Elegy",
        "nota": "Otra alternativa generalista fuerte de ATQ base alto; algo peor en equipos de Tune Strain.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Espuma Cromática",
        "en": "Chromatic Foam",
        "nota": "Mejor set generalista en modo Fusión Estallido: +20% Daño de Fusión Estallido y hasta 37% de Bonif. Daño Fusión al relevo (incluyendo su Eco principal).",
        "best": true
      },
      {
        "es": "Carrete de Memorias Empalmadas",
        "en": "Reel of Spliced Memories",
        "nota": "Mejor opción en modo Alteración de Sintonía / Ruptura (Tune Strain).",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Fusión Estallido DoT",
        "agentes": [
          "Aemeath",
          "Denia",
          "Shorekeeper"
        ],
        "best": true
      },
      {
        "nombre": "Ruptura de Sintonía (Tune Strain)",
        "agentes": [
          "Luuk Herssen",
          "Denia",
          "Mornye"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS/amplificadora premium de Fusión: genera 100 puntos de Partícula del Vacío, entra en su forma de Colapso con la Liberación y encadena Ataques Básicos, sus 2 Habilidades y la segunda Liberación antes de la Salida. Apunta a ~70% Prob. Crítico, ~270% Daño Crítico y 108-122% de Regeneración de Energía. Pareja natural de Aemeath.",
    "ficha": {
      "nombreCompleto": "Denia",
      "faccion": "Lahai-Roi",
      "desc": "Resonadora de Fusión con rectificador; soporte y amplificadora premium para equipos de Fusión Estallido, con un modo alterno de Alteración de Sintonía que refuerza a los equipos de Ruptura.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/3/3b/Denia_Convene_Draw.png"
    },
    "version": "3.3"
  },
  {
    "id": "lucilla",
    "nombre": "Lucilla",
    "rareza": "5",
    "elemento": "Glacio",
    "arma": "Rectificador",
    "faccion": "Lahai-Roi",
    "estado": "completo",
    "costo4": {
      "principal": "Bonificación de Daño Glacio",
      "alt": "Prob. Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Glacio",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "Prob. Crítico"
    },
    "ecoPrincipal": "Reminiscencia: Threnodian - Constructo Nacido del Vacío (Reminiscence: Threnodian - Voidborne Construct)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Fotograma Congelado",
        "en": "Freeze Frame",
        "nota": "Arma insignia (rectificador); +12% ATQ, al infligir Glacio Rozadura otorga +30% Bonif. Daño Glacio 12s y +24% ATQ a todo el equipo 30s",
        "best": true
      },
      {
        "es": "Sinfonía Estelar",
        "en": "Stellar Symphony",
        "nota": "Alternativa de soporte 5★",
        "best": false
      },
      {
        "es": "Maestro de Cuerdas",
        "en": "Stringmaster",
        "nota": "Rectificador 5★ estándar; ATQ y Daño de Habilidad de Resonancia, opción accesible para su Modo de Habilidad de Eco.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Deseos de Nevada Silenciosa",
        "en": "Wishes of Quiet Snowfall",
        "nota": "Sonata Glacio para su Modo Glacio Rozadura",
        "best": true
      },
      {
        "es": "Sonido del Nombre Verdadero",
        "en": "Sound of True Name",
        "nota": "Para su Modo de Habilidad de Eco (equipos con Sigrika)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Glacio Rozadura",
        "agentes": [
          "Lucilla",
          "Hiyuki",
          "Verina"
        ],
        "best": true
      },
      {
        "nombre": "Habilidad de Eco",
        "agentes": [
          "Lucilla",
          "Sigrika",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "Buffer de segundo espacio con dos Modos de Resonancia: en Modo Glacio Rozadura sus habilidades escalan con Ataque Básico y aportan buffs y estados de Glacio Rozadura; en Modo Eco convierte sus ataques a Daño de Habilidad de Eco. Su mejor equipo es Glacio Rozadura con Hiyuki, pero también encaja con Sigrika en equipos de Eco.",
    "ficha": {
      "nombreCompleto": "Lucilla",
      "faccion": "Lahai-Roi",
      "desc": "Resonadora de Glacio con rectificador; sub-DPS y buffer flexible que, según su Modo de Resonancia, potencia equipos de Glacio Rozadura (con Hiyuki) o de Habilidad de Eco (con Sigrika).",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/5/51/Lucilla_Card.jpg"
    },
    "version": "3.4"
  },
  {
    "id": "lucy",
    "nombre": "Lucy",
    "rareza": "5",
    "elemento": "Espectro",
    "arma": "Pistolas",
    "faccion": "Cyberpunk: Edgerunners (colab)",
    "estado": "completo",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Espectro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Reminiscencia - Pesadilla: Adam Smasher (Reminiscence - Nightmare: Adam Smasher)",
    "substats": [
      "Regeneración de Energía",
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Daño de Ataque Pesado"
    ],
    "armas": [
      {
        "es": "Gatillo Espectral",
        "en": "Spectral Trigger",
        "nota": "Arma insignia (pistolas); gran palo de stats con Bonif. Daño Espectro, amplificación de Daño Pesado e ignorar DEF en Ataques Pesados. Muy recomendada si vas a por ella (100%).",
        "best": true
      },
      {
        "es": "Lux & Umbra",
        "en": "Lux & Umbra",
        "nota": "Insignia de Galbrena; amplificación de Daño Pesado e ignorar DEF fáciles de activar. Única alternativa fuerte a su insignia (88.4%).",
        "best": false
      },
      {
        "es": "Homogeneizador Fásico",
        "en": "Phasic Homogenizer",
        "nota": "La opción permanente más fuerte (83.5%); Niebla Estática (5★ estándar) también sirve como relleno.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Sombra de Sueños Rotos (1 pz) + Adam Smasher",
        "en": "Shadow of Shattered Dreams (1pc)",
        "nota": "Set de 1 pieza con el Eco Adam Smasher (+15% Prob. Crítico y Bonif. Daño Básico/Pesado); se combina con 2 pz de Espectro (Resplandor Eterno o Luz Celestial, recomendado) y 2 pz de soporte (Resonancia Sin Fin, Carrete, Nubes, Himno del Empíreo o Coraje Rompemareas).",
        "best": true
      },
      {
        "es": "Luz Celestial (2 pz)",
        "en": "Celestial Light (2pc)",
        "nota": "La pareja de 2 piezas Espectro recomendada dentro de su combo 1+2+2.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Colab Edgerunners",
        "agentes": [
          "Lucy",
          "Rebecca",
          "Mornye"
        ],
        "best": true
      },
      {
        "nombre": "Edgerunners con sanadora",
        "agentes": [
          "Lucy",
          "Rebecca",
          "Shorekeeper"
        ],
        "best": false
      }
    ],
    "consejo": "DPS principal de Espectro por Ataque Pesado (colab Cyberpunk: Edgerunners, v3.4): carga TCP para lanzar Deadlock, acumula Root Access con Ataques Básicos y remata con Dual/Multi-threading antes de su Liberación, que congela el tiempo y permite elegir programas (los 5 primeros son los mejores hasta S2). Depende bastante de su arma insignia; Rebecca es su mejor compañera gratuita.",
    "ficha": {
      "nombreCompleto": "Lucy",
      "faccion": "Cyberpunk: Edgerunners (colab)",
      "desc": "Resonadora de Espectro con pistolas de la colaboración Cyberpunk: Edgerunners (v3.4); DPS principal de Ataque Pesado con una Liberación única que congela a los enemigos en el tiempo y ejecuta programas de hackeo.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/3/32/Lucy_Card.jpg"
    },
    "version": "3.4"
  },
  {
    "id": "rebecca",
    "nombre": "Rebecca",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Pistolas",
    "faccion": "Cyberpunk: Edgerunners (colab)",
    "estado": "completo",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Geoquelonio Portacampana (Bell-Borne Geochelone)",
    "substats": [
      "Regeneración de Energía",
      "Prob. Crítico",
      "Daño Crítico",
      "Daño de Ataque Básico",
      "ATQ%"
    ],
    "armas": [
      {
        "es": "Trituradora de Cráneos",
        "en": "Skull Thrasher",
        "nota": "Arma insignia (pistolas); buff de ATQ a todo el equipo superior a Niebla Estática, más Bonif. Daño de Ataque Básico y Daño Crítico para ella (100%).",
        "best": true
      },
      {
        "es": "Bláster de Espectro",
        "en": "Spectrum Blaster",
        "nota": "Insignia de Lynae; ATQ, Prob. Crítico y Bonif. Daño Básico constantes, alternativa muy fuerte (96.3%).",
        "best": false
      },
      {
        "es": "Niebla Estática",
        "en": "Static Mist",
        "nota": "Mejor opción permanente (86%) priorizando el DPS del equipo con su buff de ATQ% al relevo.",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Nubes a la Luz de la Luna",
        "en": "Moonlit Clouds",
        "nota": "Su mejor set como amplificadora (100%) con el Eco Geoquelonio Portacampana: +10% Reg. Energía y +22.5% ATQ al relevo tras la Salida.",
        "best": true
      },
      {
        "es": "Sombra de Sueños Rotos (1 pz) + Adam Smasher",
        "en": "Shadow of Shattered Dreams (1pc)",
        "nota": "Set especial si se prioriza su daño personal (sacrifica buff de equipo), combinado con dos sets de 2 piezas.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Colab Edgerunners",
        "agentes": [
          "Lucy",
          "Rebecca",
          "Mornye"
        ],
        "best": true
      },
      {
        "nombre": "Ataque Pesado (Jiyan/Augusta/Phoebe)",
        "agentes": [
          "Jiyan",
          "Rebecca",
          "Shorekeeper"
        ],
        "best": false
      }
    ],
    "consejo": "Sub-DPS/amplificadora Electro gratuita (colab Cyberpunk: Edgerunners, v3.4), una 'segunda Mortefi': acumula Fervor hasta su Ataque Pesado de Forte, usa la Liberación y sal con la Salida para buffear. No necesita su insignia para funcionar y es fácil de equipar. Brilla en equipos de Ataque Pesado (Jiyan, Augusta, Phoebe) y junto a Lucy. Apunta a 65-80% Prob. Crítico y ~117% de Regeneración de Energía.",
    "ficha": {
      "nombreCompleto": "Rebecca",
      "faccion": "Cyberpunk: Edgerunners (colab)",
      "desc": "Resonadora de Electro con pistolas de la colaboración Cyberpunk: Edgerunners (v3.4); sub-DPS y amplificadora de alta cadencia que acumula Fervor y potencia al equipo, especialmente a DPS de Ataque Pesado.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/c/c5/Rebecca_Card.jpg"
    },
    "version": "3.4"
  },
  {
    "id": "errante-electro",
    "estado": "parcial",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Electro",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "ecoPrincipal": "Garza de la Impermanencia (Impermanence Heron)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía",
      "Daño de Habilidad de Resonancia"
    ],
    "armas": [
      {
        "es": "Fulgor Ardiente",
        "en": "Blazing Brilliance",
        "nota": "5★ de Changli; Daño Crítico y daño de Habilidad de Resonancia, encaja con su rol de habilidad (recomendación preliminar de guías pre-lanzamiento)",
        "best": true
      },
      {
        "es": "Esmeralda del Génesis",
        "en": "Emerald of Genesis",
        "nota": "5★ estándar; Prob. Crítico + Regeneración de Energía, opción segura",
        "best": false
      },
      {
        "es": "Brillo Lumínico",
        "en": "Lumingloss",
        "nota": "5★ del Pase de Batalla; alternativa accesible de ATQ y crítico",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Trueno del Vacío",
        "en": "Void Thunder",
        "nota": "Set de 5 piezas Electro para el build de daño; no tiene set dedicado en la 3.5 (con eco Pesadilla: Mefis Tronante como alternativa de eco principal)",
        "best": true
      },
      {
        "es": "Nubes a la Luz de la Luna",
        "en": "Moonlit Clouds",
        "nota": "Para el rol de soporte/amplificador: +22,5% de ATQ al siguiente personaje tras el Outro",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Amplificador de estados negativos (preliminar)",
        "agentes": [
          "DPS principal (p. ej. Hiyuki o Aemeath)",
          "Errante (Electro)",
          "Chisa"
        ],
        "best": true
      },
      {
        "nombre": "DPS de habilidad (preliminar)",
        "agentes": [
          "Errante (Electro)",
          "Cantarella",
          "Chisa"
        ],
        "best": false
      }
    ],
    "consejo": "Sale el 10-jul-2026 con la v3.5 (despertar Electro del protagonista, se obtiene gratis por la historia en Mengzhou). Sub-DPS/amplificador: acumula Sobrecarga Eléctrica para mejorar su habilidad a Overshock — con toque da +10% de ATQ al equipo 20 s y aplica Aflicción Eléctrica (Electro Flare); manteniéndola entra en Resonancia Cúspide y encadena Thrum of All Sounds con sus otros elementos. Build preliminar: aún sin guías definitivas ni set dedicado.",
    "ficha": {
      "nombreCompleto": "Errante (Electro)",
      "faccion": "Protagonista",
      "desc": "Cuarto despertar elemental del protagonista, ahora con resonancia Electro (5★, espada). Rol confirmado por la wiki: eficiencia de Concierto, daño de Habilidad de Resonancia y aplicación de Aflicción Eléctrica (Electro Flare) para los equipos de estados negativos.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/7/70/Rover_1.png"
    },
    "nombre": "Errante (Electro)",
    "rareza": "5",
    "elemento": "Electro",
    "arma": "Espada",
    "faccion": "Protagonista",
    "version": "3.5"
  },
  {
    "id": "yangyang-xuanling",
    "estado": "parcial",
    "costo4": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "costo3": {
      "principal": "Bonificación de Daño Estrago",
      "alt": "ATQ%"
    },
    "costo1": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ecoPrincipal": "Pabellón de las Mil Marionetas (Thousand-Puppet Pavilion, jefe nuevo de la 3.5)",
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Daño de Ataque Pesado",
      "Regeneración de Energía"
    ],
    "armas": [
      {
        "es": "Juramento Azur",
        "en": "Azure Oath",
        "nota": "5★ insignia (banner Pulsación Absoluta de la v3.5); amplifica el Daño de Ataque Pesado al infligir Perdición de Estrago (nombre en español pendiente de confirmación)",
        "best": true
      },
      {
        "es": "Sentencia Esmeralda",
        "en": "Emerald Sentence",
        "nota": "5★ alternativa de crítico para espada",
        "best": false
      },
      {
        "es": "Primavera Roja",
        "en": "Red Spring",
        "nota": "5★ de Camellya; buena opción crítica para DPS Estrago",
        "best": false
      },
      {
        "es": "Brillo Lumínico",
        "en": "Lumingloss",
        "nota": "5★ del Pase de Batalla; opción accesible",
        "best": false
      }
    ],
    "ecos": [
      {
        "es": "Canción del Rastro Emplumado",
        "en": "Song of Feathered Trace",
        "nota": "Sonata NUEVA de la 3.5 (confirmada en la wiki): 2 piezas Regeneración de Energía; 5 piezas: al infligir Perdición de Estrago gana Prob. Crítico y Bonif. de Daño de Ataque Pesado; al infligir Glacio Chafe da ATQ al equipo",
        "best": true
      },
      {
        "es": "Eclipse del Ocaso",
        "en": "Sun-sinking Eclipse",
        "nota": "Alternativa clásica de Bonificación de Daño Estrago mientras se farmea el set nuevo",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Núcleo Perdición de Estrago (preliminar)",
        "agentes": [
          "Yangyang: Xuanling",
          "Suisui",
          "Chisa"
        ],
        "best": true
      },
      {
        "nombre": "F2P clásico (preliminar)",
        "agentes": [
          "Yangyang: Xuanling",
          "Mortefi",
          "Verina"
        ],
        "best": false
      }
    ],
    "consejo": "Sale el 10-jul-2026 con la v3.5, fase 1, en el banner \"Voices on Azure Feathers\". Ascensión 5★ de Yangyang: DPS principal Estrago de Ataque Pesado que alterna dos posturas de espada (Azur y Pluma) sostenidas por el recurso Melodía y aplica Perdición de Estrago (Havoc Bane) al final de cada combo. Suisui (su hermana menor, fase 2 del 30-jul) es su compañera natural. Datos preliminares: kit y números finales pendientes del lanzamiento.",
    "ficha": {
      "nombreCompleto": "Yangyang: Xuanling",
      "faccion": "Huanglong",
      "desc": "\"Voices of Azure Plume\". Variante 5★ Estrago de Yangyang, ligada al bastión de Xuanfang en la nueva región de Mengzhou (antes delegada de Jinzhou y de los Guardias de Medianoche). Primera DPS que explota la Perdición de Estrago como núcleo de su kit.",
      "img": "https://static.wikia.nocookie.net/wutheringwaves/images/4/4d/Yangyang_Xuanling_Card.jpg"
    },
    "nombre": "Yangyang: Xuanling",
    "rareza": "5",
    "elemento": "Estrago",
    "arma": "Espada",
    "faccion": "Huanglong",
    "version": "3.5"
  }
];
