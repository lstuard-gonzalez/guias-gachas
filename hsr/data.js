// ============================================================
//  HSR Guía rápida — datos de personajes (Honkai: Star Rail 4.3)
//  87 personajes. Auditado; terminología ES oficial.
// ============================================================
const CHARACTERS = [
  {
    "id": "trailblazer-destruccion",
    "nombre": "Trazacaminos (Destrucción)",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Destrucción",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "ATQ% si te falta crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Físico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Efecto de Ruptura (build ruptura)"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad",
      "Efecto de Ruptura"
    ],
    "conos": [
      {
        "es": "Sobre la caída de un eón",
        "en": "On the Fall of an Aeon",
        "nota": "El mejor F2P: ATQ y daño al atacar/romper",
        "best": true
      },
      {
        "es": "Algo irremplazable",
        "en": "Something Irreplaceable",
        "nota": "5★ Destrucción, curación y daño tras derribo"
      },
      {
        "es": "Un voto secreto",
        "en": "A Secret Vow",
        "nota": "4★ accesible, daño según diferencia de PV"
      }
    ],
    "reliquias": [
      {
        "es": "Campeón del boxeo callejero (4pz)",
        "en": "Champion of Streetwise Boxing",
        "nota": "Daño de básico y ATQ acumulable",
        "best": true
      },
      {
        "es": "Arena rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "Prob. Crítico y +daño al 70% crítico"
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "Alt: ATQ% y daño con alta velocidad"
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura Físico",
        "agentes": "Trazacaminos (D) · Ruan Mei · Bronya · Luocha",
        "best": true
      },
      {
        "nombre": "Hipercarga clásica",
        "agentes": "Trazacaminos (D) · Tingyun · Asta · Gepard"
      }
    ],
    "consejo": "DPS de un objetivo/AoE simple: usa la Habilidad para cargar y suelta el Definitivo en Talla Grande para el mayor golpe físico; mantén ~134+ de velocidad.",
    "ficha": {
      "nombreCompleto": "Trazacaminos (Destrucción)",
      "faccion": "Expreso Astral",
      "desc": "Protagonista del Expreso Astral que canaliza el Camino de la Destrucción con daño Físico, escalando su definitivo según el modo elegido.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d5/Character_Trailblazer_%28F%29_Destruction_Portrait.png"
    }
  },
  {
    "id": "trailblazer-preservacion",
    "nombre": "Trazacaminos (Conservación)",
    "rareza": "5",
    "elemento": "Fuego",
    "camino": "Conservación",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "DEF%",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "DEF%"
    },
    "esfera": {
      "principal": "DEF%",
      "alt": "Daño de Fuego (build daño)"
    },
    "cuerda": {
      "principal": "DEF%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "DEF%",
      "Velocidad",
      "Efecto de Ruptura",
      "PV%",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Tendencia del mercado universal",
        "en": "Trend of the Universal Market",
        "nota": "El mejor F2P: escudo propio y ATQ al escudar",
        "best": true
      },
      {
        "es": "Momento de victoria",
        "en": "Moment of Victory",
        "nota": "5★ Conservación: DEF, atrae aggro y +efectividad"
      },
      {
        "es": "Primer día de mi nueva vida",
        "en": "Day One of My New Life",
        "nota": "4★: DEF% y reducción de daño de equipo"
      }
    ],
    "reliquias": [
      {
        "es": "Caballero del palacio de la pureza (4pz)",
        "en": "Knight of Purity Palace",
        "nota": "+absorción del escudo y daño según DEF",
        "best": true
      },
      {
        "es": "Belobog de los arquitectos (2pz)",
        "en": "Belobog of the Architects",
        "nota": "DEF% y DEF adicional según Prob. de Efecto"
      },
      {
        "es": "Guardián de la nieve rugiente (2pz)",
        "en": "Guard of Wuthering Snow",
        "nota": "Alt: reducción de daño y regen de energía"
      }
    ],
    "equipos": [
      {
        "nombre": "Sostén universal",
        "agentes": "DPS · Ruan Mei · Bronya · Trazacaminos (P)",
        "best": true
      },
      {
        "nombre": "Ruptura Fuego",
        "agentes": "Firefly · Trazacaminos (Armonía) · Ruan Mei · Trazacaminos (P)"
      }
    ],
    "consejo": "Escudero-tanque: usa la Habilidad para escudar antes del turno enemigo, provoca con el Definitivo y aprovecha su contraataque de Fuego para acumular energía.",
    "ficha": {
      "nombreCompleto": "Trazacaminos (Conservación)",
      "faccion": "Expreso Astral",
      "desc": "El Trazacaminos por la senda de la Conservación: protege al equipo con escudos y contraataca con daño de Fuego mientras absorbe el aggro.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Character_Trailblazer_%28F%29_Preservation_Portrait.png"
    }
  },
  {
    "id": "trailblazer-armonia",
    "nombre": "Trazacaminos (Armonía)",
    "rareza": "5",
    "elemento": "Imaginario",
    "camino": "Armonía",
    "version": "2.2",
    "estado": "ok",
    "cuerpo": {
      "principal": "Efecto de Ruptura",
      "alt": "PV% / ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "Efecto de Ruptura"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Efecto de Ruptura",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Efecto de Ruptura",
      "Velocidad",
      "PV%",
      "Regeneración de Energía",
      "Prob. de Efecto"
    ],
    "conos": [
      {
        "es": "Recuerdos del pasado",
        "en": "Memories of the Past",
        "nota": "El mejor F2P (tienda Herta): Ruptura y energía extra",
        "best": true
      },
      {
        "es": "Inscripción ninjutsu: Deslumbrante rompemaldades",
        "en": "Ninjutsu Inscription: Dazzling Evilbreaker",
        "nota": "5★ soporte de ruptura, sube tope de Super Ruptura"
      },
      {
        "es": "¡Baila! ¡Baila! ¡Baila!",
        "en": "Dance! Dance! Dance!",
        "nota": "5★ Armonía: adelanta acción de todo el equipo"
      }
    ],
    "reliquias": [
      {
        "es": "Relojero, maestro de maquinaciones oníricas (4pz)",
        "en": "Watchmaker, Master of Dream Machinations",
        "nota": "+Efecto de Ruptura del equipo al usar Definitivo",
        "best": true
      },
      {
        "es": "Talia: reino del bandidaje (2pz)",
        "en": "Talia: Kingdom of Banditry",
        "nota": "Efecto de Ruptura y bonus a 145+ velocidad"
      },
      {
        "es": "Mensajero que recorre el ciberespacio (2pz)",
        "en": "Messenger Traversing Hackerspace",
        "nota": "Alt: +Velocidad para llegar a los breakpoints"
      }
    ],
    "equipos": [
      {
        "nombre": "Super Ruptura Firefly",
        "agentes": "Firefly · Trazacaminos (Armonía) · Ruan Mei · Lingsha",
        "best": true
      },
      {
        "nombre": "Ruptura Rappa",
        "agentes": "Rappa · Trazacaminos (Armonía) · Ruan Mei · Gallagher"
      },
      {
        "nombre": "Ruptura Boothill",
        "agentes": "Boothill · Trazacaminos (Armonía) · Bronya · Luocha"
      }
    ],
    "consejo": "Habilitador de Super Ruptura: mantén su buff activo con la Habilidad y prioriza velocidad y Efecto de Ruptura para maximizar el daño de ruptura de tu DPS.",
    "ficha": {
      "nombreCompleto": "Trazacaminos (Armonía)",
      "faccion": "Expreso Astral",
      "desc": "El Trazacaminos por la senda de la Armonía, de elemento Imaginario: habilita la Super Ruptura y potencia el daño de ruptura de todo el equipo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/2/25/Character_Trailblazer_%28F%29_Harmony_Portrait.png"
    }
  },
  {
    "id": "trailblazer-recuerdo",
    "nombre": "Trazacaminos (Reminiscencia)",
    "rareza": "5",
    "elemento": "Hielo",
    "camino": "Reminiscencia",
    "version": "3.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "—"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "Daño Crítico",
      "Velocidad",
      "Prob. Crítico",
      "PV%",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Victoria en un parpadeo",
        "en": "Victory in a Blink",
        "nota": "El mejor y F2P (evento): Daño Crítico y buff al adelantar aliados",
        "best": true
      },
      {
        "es": "A punto de florecer",
        "en": "Poised to Bloom",
        "nota": "4★ Reminiscencia: crítico para el portador"
      },
      {
        "es": "El tiempo no espera a nadie",
        "en": "Time Waits for No One",
        "nota": "5★ genérico: daño y curación adicionales"
      }
    ],
    "reliquias": [
      {
        "es": "Libertador que rehace el mundo (4pz)",
        "en": "World-Remaking Deliverer",
        "nota": "+PV y buff de daño al equipo con Mem activo",
        "best": true
      },
      {
        "es": "Vonwacq animado (2pz)",
        "en": "Sprightly Vonwacq",
        "nota": "Regen de energía y adelanta acción para invocar a Mem antes"
      },
      {
        "es": "Quilla rota (2pz)",
        "en": "Broken Keel",
        "nota": "Alt: con RES a efectos alta, Daño Crítico al equipo"
      }
    ],
    "equipos": [
      {
        "nombre": "Seguimiento Feixiao",
        "agentes": "Feixiao · Trazacaminos (Reminiscencia) · Robin · Aventurino",
        "best": true
      },
      {
        "nombre": "Invocación Castorice",
        "agentes": "Castorice · Trazacaminos (Reminiscencia) · Tribbie · Gallagher"
      },
      {
        "nombre": "Erudición La Herta",
        "agentes": "La Herta · Trazacaminos (Reminiscencia) · Tribbie · Lingsha"
      }
    ],
    "consejo": "Soporte de invocación: saca a su memoesbirro 'Mem' cuanto antes, sube velocidad (~160+) y Daño Crítico para que sus ataques adelanten y potencien al DPS.",
    "ficha": {
      "nombreCompleto": "Trazacaminos (Reminiscencia)",
      "faccion": "Expreso Astral",
      "desc": "El Trazacaminos por la senda del Reminiscencia, de elemento Hielo: invoca a su memoesbirro 'Mem' para apoyar, adelantar turnos y aumentar el daño del equipo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7e/Character_Trailblazer_%28F%29_Remembrance_Portrait.png"
    }
  },
  {
    "id": "march-7th",
    "nombre": "Siete de Marzo",
    "rareza": "4",
    "elemento": "Hielo",
    "camino": "Conservación",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "DEF%",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "DEF%"
    },
    "esfera": {
      "principal": "DEF%",
      "alt": "Daño de Hielo"
    },
    "cuerda": {
      "principal": "DEF%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "DEF%",
      "Velocidad",
      "Efecto de Ruptura",
      "PV%",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Momento de victoria",
        "en": "Moment of Victory",
        "nota": "El mejor: DEF, aggro y efectividad para escudar",
        "best": true
      },
      {
        "es": "Tendencia del mercado universal",
        "en": "Trend of the Universal Market",
        "nota": "F2P: escudo propio y ATQ al equipo al escudar"
      },
      {
        "es": "Primer día de mi nueva vida",
        "en": "Day One of My New Life",
        "nota": "4★: DEF% y reducción de daño"
      }
    ],
    "reliquias": [
      {
        "es": "Caballero del palacio de la pureza (4pz)",
        "en": "Knight of Purity Palace",
        "nota": "Refuerza sus escudos y da daño según DEF",
        "best": true
      },
      {
        "es": "Belobog de los arquitectos (2pz)",
        "en": "Belobog of the Architects",
        "nota": "DEF% base y escalado con Prob. de Efecto"
      },
      {
        "es": "Flota de los inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "Alt: PV% y +ATQ de equipo a 120+ velocidad"
      }
    ],
    "equipos": [
      {
        "nombre": "Sostén de escudos",
        "agentes": "DPS · Bronya · Tingyun · Siete de Marzo",
        "best": true
      },
      {
        "nombre": "Inicio Trailblaze",
        "agentes": "Dan Heng · Asta · Natasha · Siete de Marzo"
      }
    ],
    "consejo": "Escudera de Hielo: escuda al DPS con la Habilidad y usa el Definitivo para congelar; su Talento contraataca cuando escudados reciben golpes.",
    "ficha": {
      "nombreCompleto": "Siete de Marzo",
      "faccion": "Expreso Astral",
      "desc": "Chica alegre del Expreso Astral que despertó sin recuerdos dentro de un bloque de hielo; arquera de Hielo del Camino de la Conservación que escuda al equipo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d5/Character_March_7th_%28Preservation%29_Portrait.png"
    }
  },
  {
    "id": "march-7th-hunt",
    "nombre": "Siete de Marzo (Cacería)",
    "rareza": "4",
    "elemento": "Imaginario",
    "camino": "Cacería",
    "version": "2.4",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Imaginario",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Surcando el mar estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "El mejor F2P (tienda Herta): crítico y ATQ contra rivales débiles",
        "best": true
      },
      {
        "es": "Inquieta, dichosa",
        "en": "Worrisome, Blissful",
        "nota": "4★ de banner ideal: crítico y daño de seguimiento"
      },
      {
        "es": "Pero la esperanza no tiene precio",
        "en": "Yet Hope Is Priceless",
        "nota": "5★ Cacería: gran daño de seguimiento"
      }
    ],
    "reliquias": [
      {
        "es": "Valeroso surcavientos (4pz)",
        "en": "The Wind-Soaring Valorous",
        "nota": "Prob. Crítico y +daño de seguimiento tras Definitivo",
        "best": true
      },
      {
        "es": "Duran, dinastía de los lobos errantes (2pz)",
        "en": "Duran, Dynasty of Running Wolves",
        "nota": "Acumula daño de seguimiento y Daño Crítico"
      },
      {
        "es": "Salsotto inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "Alt: Prob. Crítico y +daño de seguimiento/definitivo"
      }
    ],
    "equipos": [
      {
        "nombre": "Seguimiento Feixiao",
        "agentes": "Feixiao · Siete de Marzo (Caza) · Robin · Aventurino",
        "best": true
      },
      {
        "nombre": "Contra Yunli",
        "agentes": "Yunli · Siete de Marzo (Caza) · Tingyun · Huohuo"
      }
    ],
    "consejo": "Necesita un 'maestro': designa al DPS con su Habilidad para que ella lance ataques de seguimiento; prioriza velocidad y crítico para encadenar seguimientos.",
    "ficha": {
      "nombreCompleto": "Siete de Marzo (Cacería)",
      "faccion": "Expreso Astral",
      "desc": "Siete de Marzo tras aprender la espada; sub-DPS de elemento Imaginario del Camino de Cacería que designa a un aliado y lanza ataques de seguimiento a su lado.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e8/Character_March_7th_%28The_Hunt%29_Portrait.png"
    }
  },
  {
    "id": "dan-heng",
    "nombre": "Dan Heng",
    "rareza": "4",
    "elemento": "Viento",
    "camino": "Cacería",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Viento",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Esgrima",
        "en": "Swordplay",
        "nota": "El mejor F2P: daño acumulable al golpear al mismo objetivo",
        "best": true
      },
      {
        "es": "Surcando el mar estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "F2P (tienda Herta): crítico y ATQ contra rivales con poca vida"
      },
      {
        "es": "En la noche",
        "en": "In the Night",
        "nota": "5★: crítico y +daño de habilidad según velocidad"
      }
    ],
    "reliquias": [
      {
        "es": "Mosquetero de trigo silvestre (4pz)",
        "en": "Musketeer of Wild Wheat",
        "nota": "ATQ%, velocidad y +daño de básico",
        "best": true
      },
      {
        "es": "Arena rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "Prob. Crítico y +daño al 70% crítico"
      },
      {
        "es": "Águila de la línea crepuscular (2pz)",
        "en": "Eagle of Twilight Line",
        "nota": "Alt: +Daño de Viento"
      }
    ],
    "equipos": [
      {
        "nombre": "Objetivo único",
        "agentes": "Dan Heng · Tingyun · Bronya · Natasha",
        "best": true
      },
      {
        "nombre": "Hipercarga habilidad",
        "agentes": "Dan Heng · Sparkle · Ruan Mei · Luocha"
      }
    ],
    "consejo": "DPS de objetivo único: apila el buff de su Talento (velocidad al golpear) y usa la Habilidad reforzada por su Definitivo para clavar al mismo enemigo.",
    "ficha": {
      "nombreCompleto": "Dan Heng",
      "faccion": "Expreso Astral",
      "desc": "Guardián taciturno y conductor del Expreso Astral; lancero de Viento del Camino de Cacería que huye de un pasado como Vidyadhara.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/1/18/Character_Dan_Heng_Portrait.png"
    }
  },
  {
    "id": "dan-heng-il",
    "nombre": "Dan Heng • Imbibitor Lunae",
    "rareza": "5",
    "elemento": "Imaginario",
    "camino": "Destrucción",
    "version": "1.3",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Imaginario",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Más brillante que el sol",
        "en": "Brighter Than the Sun",
        "nota": "Firma · el mejor: ATQ, Prob. Crítico y regen por básico",
        "best": true
      },
      {
        "es": "Hoy es otro día tranquilo",
        "en": "Today Is Another Peaceful Day",
        "nota": "F2P: daño Imaginario escalado con la energía máxima"
      },
      {
        "es": "Un voto secreto",
        "en": "A Secret Vow",
        "nota": "4★ accesible: +daño según diferencia de PV"
      }
    ],
    "reliquias": [
      {
        "es": "Forajido del desierto del bandidaje (4pz)",
        "en": "Wastelander of Banditry Desert",
        "nota": "+Daño Imaginario y crítico contra debilitados",
        "best": true
      },
      {
        "es": "Arena rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "Prob. Crítico y +daño al 70% crítico"
      },
      {
        "es": "Poeta del colapso fúnebre (4pz)",
        "en": "Poet of Mourning Collapse",
        "nota": "Alt con adelantadores (Sparkle/Sunday): crítico a baja velocidad"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarga básico",
        "agentes": "Dan Heng • IL · Sparkle · Tingyun · Luocha",
        "best": true
      },
      {
        "nombre": "Adelanto Sunday",
        "agentes": "Dan Heng • IL · Sunday · Tingyun · Aventurino"
      }
    ],
    "consejo": "Machaca su ataque básico reforzado hasta 3 golpes para apilar penetración de RES Imaginaria; con Sparkle/Sunday encadena turnos y suelta el Definitivo con toda la ATQ.",
    "ficha": {
      "nombreCompleto": "Dan Heng • Imbibitor Lunae",
      "faccion": "Expreso Astral",
      "desc": "Forma despierta de Dan Heng que reclama su herencia como Imbibitor Lunae de los Vidyadhara; DPS Imaginario del Camino de la Destrucción basado en el ataque básico.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/3/30/Character_Dan_Heng_%E2%80%A2_Imbibitor_Lunae_Portrait.png"
    }
  },
  {
    "id": "dan-heng-permansor-terrae",
    "nombre": "Dan Heng • Permansor Terrae",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Conservación",
    "version": "3.6",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "ATQ%",
      "alt": "DEF%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "ATQ%",
      "Velocidad",
      "Regeneración de Energía",
      "PV%",
      "Efecto de Ruptura"
    ],
    "conos": [
      {
        "es": "Aunque separados por mundos",
        "en": "Though Worlds Apart",
        "nota": "Firma · el mejor: +64% ATQ, cura y da 'Reducto' de daño al equipo",
        "best": true
      },
      {
        "es": "Viaje eternamente en paz",
        "en": "Journey, Forever Peaceful",
        "nota": "4★ del Pase: +efecto de escudo y +daño a escudados"
      },
      {
        "es": "Tendencia del mercado universal",
        "en": "Trend of the Universal Market",
        "nota": "Alt F2P: escudo propio y ATQ al escudar"
      }
    ],
    "reliquias": [
      {
        "es": "Recluso autoenvuelto (4pz)",
        "en": "Self-Enshrouded Recluse",
        "nota": "+Efecto de escudo y +Daño Crítico a los escudados",
        "best": true
      },
      {
        "es": "Lushaka, los mares hundidos (2pz)",
        "en": "Lushaka, the Sunken Seas",
        "nota": "Regen de energía y +ATQ al primer aliado de la formación"
      },
      {
        "es": "Caballero del palacio de la pureza (4pz)",
        "en": "Knight of Purity Palace",
        "nota": "Alt: refuerza absorción del escudo"
      }
    ],
    "equipos": [
      {
        "nombre": "Escudo-buffer ATQ",
        "agentes": "Castorice · Permansor Terrae · Tribbie · Trazacaminos (Reminiscencia)",
        "best": true
      },
      {
        "nombre": "Seguimiento Feixiao",
        "agentes": "Feixiao · Permansor Terrae · Robin · Aventurino"
      }
    ],
    "consejo": "Primera Conservación que escala con ATQ: mantén escudos de equipo con la Habilidad, limpia debuffs y usa el Definitivo para dar el gran +ATQ y 'Reducto' al DPS.",
    "ficha": {
      "nombreCompleto": "Dan Heng • Permansor Terrae",
      "faccion": "Expreso Astral",
      "desc": "Otra encarnación de Dan Heng, el Permansor Terrae; soporte Físico del Camino de la Conservación que escala con ATQ, escuda, limpia debuffs y potencia el ataque del equipo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/c/cb/Character_Dan_Heng_%E2%80%A2_Permansor_Terrae_Portrait.png"
    }
  },
  {
    "id": "himeko",
    "nombre": "Himeko",
    "rareza": "5",
    "elemento": "Fuego",
    "camino": "Erudición",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Fuego",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad",
      "Efecto de Ruptura"
    ],
    "conos": [
      {
        "es": "Noche en la Vía Láctea",
        "en": "Night on the Milky Way",
        "nota": "Firma · el mejor: ATQ por enemigos y +daño tras romper debilidad",
        "best": true
      },
      {
        "es": "La seriedad del desayuno",
        "en": "The Seriousness of Breakfast",
        "nota": "F2P (tienda Herta): +daño y ATQ acumulable tras derribos"
      },
      {
        "es": "Hacer clamar al mundo",
        "en": "Make the World Clamor",
        "nota": "4★ (tienda Herta): +daño de Definitivo y energía inicial"
      }
    ],
    "reliquias": [
      {
        "es": "Erudito perdido en la erudición (4pz)",
        "en": "Scholar Lost in Erudition",
        "nota": "Prob. Crítico y +daño de habilidad/definitivo",
        "best": true
      },
      {
        "es": "Arena rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "Prob. Crítico y +daño al 70% crítico"
      },
      {
        "es": "Herrero del fuego de la forja de lava (4pz)",
        "en": "Firesmith of Lava-Forging",
        "nota": "Alt: +Daño de Fuego y daño de habilidad"
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura/AoE Fuego",
        "agentes": "Himeko · Ruan Mei · Trazacaminos (Armonía) · Lingsha",
        "best": true
      },
      {
        "nombre": "Erudición hipercarga",
        "agentes": "Himeko · Tingyun · Ruan Mei · Gallagher"
      }
    ],
    "consejo": "DPS de área: usa la Habilidad para llenar su carga y lanza el Definitivo; su Talento dispara seguimientos cada vez que un enemigo entra en Ruptura de debilidad.",
    "ficha": {
      "nombreCompleto": "Himeko",
      "faccion": "Expreso Astral",
      "desc": "Ingeniera, navegante y anfitriona del Expreso Astral; maga de Fuego del Camino de la Erudición que arrasa en área y remata con seguimientos al romper debilidades.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d5/Character_Himeko_Portrait.png"
    }
  },
  {
    "id": "welt",
    "nombre": "Welt",
    "rareza": "5",
    "elemento": "Imaginario",
    "camino": "Nihilidad",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Imaginario",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Daño Crítico",
      "Prob. Crítico",
      "Velocidad",
      "ATQ%"
    ],
    "conos": [
      {
        "es": "En nombre del mundo",
        "en": "In the Name of the World",
        "nota": "Firma · +DMG y +Prob. Efecto contra enemigos debilitados",
        "best": true
      },
      {
        "es": "Buenas noches y dulces sueños",
        "en": "Good Night and Sleep Well",
        "nota": "5★ Pase · DMG escala con nº de debuffs, gran F2P"
      },
      {
        "es": "La resolución brilla como perlas de sudor",
        "en": "Resolution Shines As Pearls of Sweat",
        "nota": "4★ F2P · reduce DEF con Prob. Efecto"
      }
    ],
    "reliquias": [
      {
        "es": "Forajido del desierto del bandidaje (4pz)",
        "en": "Wastelander of Banditry Desert",
        "nota": "+Daño Imaginario y +Crítico contra debilitados",
        "best": true
      },
      {
        "es": "Estación de sellado espacial (2pz)",
        "en": "Space Sealing Station",
        "nota": "+ATQ (más con Velocidad alta)"
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "alt · +ATQ y +DMG según Velocidad"
      }
    ],
    "equipos": [
      {
        "nombre": "Ralentización sostenida",
        "agentes": "Welt · Sparkle · Pela · Fu Xuan",
        "best": true
      },
      {
        "nombre": "Control y buffs",
        "agentes": "Welt · Bronya · Tingyun · Luocha"
      },
      {
        "nombre": "Imaginario doble",
        "agentes": "Welt · Robin · Silver Wolf · Aventurino"
      }
    ],
    "consejo": "DPS de daño sostenido que ralentiza y retrasa a los enemigos. Prioriza Crítico y aprovecha su reducción de Velocidad para controlar el ritmo.",
    "ficha": {
      "nombreCompleto": "Welt Yang",
      "faccion": "Expreso Astral",
      "desc": "Veterano miembro del Expreso Astral y antiguo héroe de otro mundo. Empuña un bastón y el poder de la gravedad imaginaria para frenar y castigar a sus enemigos.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/1/11/Character_Welt_Splash_Art.png"
    }
  },
  {
    "id": "asta",
    "nombre": "Asta",
    "rareza": "4",
    "elemento": "Fuego",
    "camino": "Armonía",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Efecto de Ruptura",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Fuego",
      "alt": "Efecto de Ruptura"
    },
    "cuerda": {
      "principal": "Efecto de Ruptura",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Velocidad",
      "Efecto de Ruptura",
      "PV%",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Recuerdos del pasado",
        "en": "Memories of the Past",
        "nota": "4★ F2P · +ATQ y energía al golpear, mejor accesible",
        "best": true
      },
      {
        "es": "¡Baila! ¡Baila! ¡Baila!",
        "en": "Dance! Dance! Dance!",
        "nota": "5★ · el Ulti adelanta el turno de todo el equipo"
      },
      {
        "es": "Encuentro planetario",
        "en": "Planetary Rendezvous",
        "nota": "4★ F2P · +DMG del mismo elemento (ideal mono-Fuego)"
      }
    ],
    "reliquias": [
      {
        "es": "Mensajero que recorre el ciberespacio (4pz)",
        "en": "Messenger Traversing Hackerspace",
        "nota": "+Velocidad y su Ulti da Velocidad al equipo",
        "best": true
      },
      {
        "es": "Talia: reino del bandidaje (2pz)",
        "en": "Talia: Kingdom of Banditry",
        "nota": "+Efecto de Ruptura si Velocidad ≥ umbral"
      },
      {
        "es": "Vonwacq animado (2pz)",
        "en": "Sprightly Vonwacq",
        "nota": "alt · +Regen. de Energía y adelanta su turno inicial"
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura de Fuego",
        "agentes": "Himeko · Asta · Pela · Gallagher",
        "best": true
      },
      {
        "nombre": "Buff de Velocidad universal",
        "agentes": "Asta · DPS · Tingyun · sanador"
      },
      {
        "nombre": "Mono-Fuego",
        "agentes": "DPS Fuego · Asta · Tingyun · Luocha"
      }
    ],
    "consejo": "Sube Velocidad al máximo para acumular rápido sus stacks de ATQ y compartir Velocidad con el equipo. Soporte 4★ excelente para casi cualquier DPS.",
    "ficha": {
      "nombreCompleto": "Asta",
      "faccion": "Estación Espacial Herta",
      "desc": "Jefa de investigación de la Estación Espacial Herta, alegre y muy trabajadora. Potencia el ataque y la velocidad de todo el equipo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bd/Character_Asta_Splash_Art.png"
    }
  },
  {
    "id": "herta",
    "nombre": "Herta",
    "rareza": "4",
    "elemento": "Hielo",
    "camino": "Erudición",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Hielo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Daño Crítico",
      "Prob. Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "El nacimiento del yo",
        "en": "The Birth of the Self",
        "nota": "4★ F2P (tienda Herta) · +DMG de contraataque, ideal para ella",
        "best": true
      },
      {
        "es": "Antes del amanecer",
        "en": "Before Dawn",
        "nota": "5★ · +DMG de habilidad/Ulti y de contraataque"
      },
      {
        "es": "Noche en la Vía Láctea",
        "en": "Night on the Milky Way",
        "nota": "5★ · +ATQ por enemigo, gran DMG en área"
      }
    ],
    "reliquias": [
      {
        "es": "Cazador del bosque glacial (4pz)",
        "en": "Hunter of Glacial Forest",
        "nota": "+Daño de Hielo y +Daño Crítico tras el Ulti",
        "best": true
      },
      {
        "es": "Salsotto inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "+Prob. Crítico y +DMG de Ulti/contraataque"
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "alt · +ATQ y +DMG según Velocidad"
      }
    ],
    "equipos": [
      {
        "nombre": "Erudición en área",
        "agentes": "Herta · Himeko · Tingyun · Natasha",
        "best": true
      },
      {
        "nombre": "Doble Herta",
        "agentes": "La Herta · Herta · Tribbie · Aventurino"
      },
      {
        "nombre": "Contraataques",
        "agentes": "Herta · Serval · Asta · Luocha"
      }
    ],
    "consejo": "Mantén a los enemigos vivos para activar sus contraataques cuando bajen del 50% de PV. Brilla contra grupos numerosos.",
    "ficha": {
      "nombreCompleto": "Herta (marioneta)",
      "faccion": "Estación Espacial Herta",
      "desc": "Genio excéntrica y miembro del Club de los Genios que interactúa mediante una marioneta con forma de peluche. Lanza contraataques de Hielo en área.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8c/Character_Herta_Splash_Art.png"
    }
  },
  {
    "id": "the-herta",
    "nombre": "La Herta",
    "rareza": "5",
    "elemento": "Hielo",
    "camino": "Erudición",
    "version": "3.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Hielo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Hacia el velo inalcanzable",
        "en": "Into the Unreachable Veil",
        "nota": "Firma · +Prob. Crítico, gran +DMG de habilidad/Ulti y recupera Punto de Habilidad",
        "best": true
      },
      {
        "es": "Noche en la Vía Láctea",
        "en": "Night on the Milky Way",
        "nota": "5★ · +ATQ por enemigo, buena alternativa en área"
      },
      {
        "es": "El nacimiento del yo",
        "en": "The Birth of the Self",
        "nota": "4★ F2P · +DMG en área/contraataque, opción económica"
      }
    ],
    "reliquias": [
      {
        "es": "Erudito perdido en la erudición (4pz)",
        "en": "Scholar Lost in Erudition",
        "nota": "+Prob. Crítico y gran +DMG de habilidad y Ulti",
        "best": true
      },
      {
        "es": "Izumo Gensei y el reino divino de Takama (2pz)",
        "en": "Izumo Gensei and Takama Divine Realm",
        "nota": "+ATQ y +Prob. Crítico con aliado del mismo Camino"
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "alt · +ATQ y +DMG según Velocidad"
      }
    ],
    "equipos": [
      {
        "nombre": "Núcleo Erudición",
        "agentes": "La Herta · Herta · Tribbie · Aventurino",
        "best": true
      },
      {
        "nombre": "Aceleración y buffs",
        "agentes": "La Herta · Sunday · Tribbie · Huohuo"
      },
      {
        "nombre": "Contraataques de Hielo",
        "agentes": "La Herta · Serval · Robin · Gepard"
      }
    ],
    "consejo": "DPS de Hielo en área. Prioriza llegar a ~90-100% de Prob. Crítico porque su rasgo le regala Daño Crítico con otra unidad de Erudición (empareja con la Herta 4★).",
    "ficha": {
      "nombreCompleto": "La Herta (Sra. Herta)",
      "faccion": "Sociedad de Genios",
      "desc": "La auténtica Herta en persona, una de las mentes más brillantes del universo y miembro de la Sociedad de Genios. DPS de Hielo en área de la vía Erudición.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/4/42/Character_The_Herta_Splash_Art.png"
    }
  },
  {
    "id": "arlan",
    "nombre": "Arlan",
    "rareza": "4",
    "elemento": "Rayo",
    "camino": "Destrucción",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Rayo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Daño Crítico",
      "Prob. Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Sobre la caída de un eón",
        "en": "On the Fall of an Aeon",
        "nota": "5★ Pase · +ATQ acumulable y +DMG, la mejor accesible",
        "best": true
      },
      {
        "es": "Un voto secreto",
        "en": "A Secret Vow",
        "nota": "4★ F2P · +DMG, extra contra enemigos con más PV%"
      },
      {
        "es": "Los topos te dan la bienvenida",
        "en": "The Moles Welcome You",
        "nota": "4★ F2P · +ATQ al usar habilidades"
      }
    ],
    "reliquias": [
      {
        "es": "Banda del trueno crepitante (4pz)",
        "en": "Band of Sizzling Thunder",
        "nota": "+Daño de Rayo y +ATQ al usar la habilidad",
        "best": true
      },
      {
        "es": "Estación de sellado espacial (2pz)",
        "en": "Space Sealing Station",
        "nota": "+ATQ (más con Velocidad alta)"
      },
      {
        "es": "Arena rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "alt · +Prob. Crítico y +DMG con Crítico alto"
      }
    ],
    "equipos": [
      {
        "nombre": "Sanación dedicada",
        "agentes": "Arlan · Tingyun · Bronya · Bailu",
        "best": true
      },
      {
        "nombre": "Buff de daño",
        "agentes": "Arlan · Asta · Tingyun · Luocha"
      },
      {
        "nombre": "Rayo agresivo",
        "agentes": "Arlan · Sparkle · Tingyun · Huohuo"
      }
    ],
    "consejo": "Mantén su PV por encima del 80% para su máximo daño y llévalo siempre con un sanador dedicado (Bailu o Luocha). Frágil, pero pega muy fuerte con inversión mínima.",
    "ficha": {
      "nombreCompleto": "Arlan",
      "faccion": "Estación Espacial Herta",
      "desc": "Líder del equipo de seguridad de la Estación Espacial Herta. Sacrifica su propia salud para desatar poderosos golpes de Rayo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Character_Arlan_Splash_Art.png"
    }
  },
  {
    "id": "bronya",
    "nombre": "Bronya",
    "rareza": "5",
    "elemento": "Viento",
    "camino": "Armonía",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Viento",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "Velocidad",
      "Daño Crítico",
      "Regeneración de Energía",
      "Prob. Crítico"
    ],
    "conos": [
      {
        "es": "Pero la batalla no ha terminado",
        "en": "But the Battle Isn't Over",
        "nota": "Firma · recupera Punto de Habilidad, +DMG y +Regen al aliado que potencia",
        "best": true
      },
      {
        "es": "¡Baila! ¡Baila! ¡Baila!",
        "en": "Dance! Dance! Dance!",
        "nota": "5★ · el Ulti adelanta el turno de todo el equipo"
      },
      {
        "es": "Recuerdos del pasado",
        "en": "Memories of the Past",
        "nota": "4★ F2P · +ATQ y energía al golpear"
      }
    ],
    "reliquias": [
      {
        "es": "Mensajero que recorre el ciberespacio (4pz)",
        "en": "Messenger Traversing Hackerspace",
        "nota": "+Velocidad y su Ulti da Velocidad al equipo",
        "best": true
      },
      {
        "es": "Quilla rota (2pz)",
        "en": "Broken Keel",
        "nota": "+Res. a Efectos y +Daño Crítico al equipo"
      },
      {
        "es": "Vonwacq animado (2pz)",
        "en": "Sprightly Vonwacq",
        "nota": "alt · +Regen. de Energía y adelanta su turno inicial"
      }
    ],
    "equipos": [
      {
        "nombre": "Dúo clásico con Seele",
        "agentes": "Bronya · Seele · Pela · Fu Xuan",
        "best": true
      },
      {
        "nombre": "Hipercarry",
        "agentes": "Bronya · Dan Heng IL · Tingyun · Luocha"
      },
      {
        "nombre": "Adelanto de turnos",
        "agentes": "Bronya · Jingliu · Pela · Huohuo"
      }
    ],
    "consejo": "Úsala para adelantar el turno de tu DPS principal y potenciar su daño. Empareja su Velocidad con la del DPS; su combo con Seele es legendario.",
    "ficha": {
      "nombreCompleto": "Bronya Rand",
      "faccion": "Jarilo-VI (Belobog)",
      "desc": "Supervisora de los Guardianes Siláceos de Belobog e hija adoptiva de Cocolia. Líder serena que adelanta el turno de sus aliados y potencia su daño.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7c/Character_Bronya_Splash_Art.png"
    }
  },
  {
    "id": "seele",
    "nombre": "Seele",
    "rareza": "5",
    "elemento": "Cuántico",
    "camino": "Cacería",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Cuántico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Daño Crítico",
      "Prob. Crítico",
      "Velocidad",
      "ATQ%"
    ],
    "conos": [
      {
        "es": "En la noche",
        "en": "In the Night",
        "nota": "Firma · +Prob. Crítico y +DMG básico/habilidad según Velocidad",
        "best": true
      },
      {
        "es": "Surcando el mar estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "5★ (tienda Herta) · +Prob. Crítico, +DMG a PV bajo y energía al matar"
      },
      {
        "es": "Esgrima",
        "en": "Swordplay",
        "nota": "4★ F2P · +DMG acumulable golpeando al mismo objetivo"
      }
    ],
    "reliquias": [
      {
        "es": "Genio de las estrellas brillantes (4pz)",
        "en": "Genius of Brilliant Stars",
        "nota": "+Daño Cuántico e ignora parte de la DEF enemiga",
        "best": true
      },
      {
        "es": "Arena rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "+Prob. Crítico y +DMG con Crítico ≥70%"
      },
      {
        "es": "Salsotto inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "alt · +Prob. Crítico y +DMG de Ulti/contraataque"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry cuántico",
        "agentes": "Seele · Sparkle · Silver Wolf · Fu Xuan",
        "best": true
      },
      {
        "nombre": "Adelanto de turnos",
        "agentes": "Seele · Bronya · Pela · Huohuo"
      },
      {
        "nombre": "Buffs de daño",
        "agentes": "Seele · Sparkle · Tingyun · Luocha"
      }
    ],
    "consejo": "Encadena turnos con su Resurgimiento tras derrotar enemigos. Sube la Prob. Crítico a ≥70% para activar por completo Arena rutilante.",
    "ficha": {
      "nombreCompleto": "Seele",
      "faccion": "Jarilo-VI (Fuego Salvaje)",
      "desc": "Miembro de los Renegados del Inframundo de Belobog, ágil y letal. Al derrotar a un enemigo entra en Resurgimiento y obtiene un turno adicional.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/58/Character_Seele_Splash_Art.png"
    }
  },
  {
    "id": "gepard",
    "nombre": "Gepard",
    "rareza": "5",
    "elemento": "Hielo",
    "camino": "Conservación",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "DEF%",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "DEF%"
    },
    "esfera": {
      "principal": "DEF%",
      "alt": "PV%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "DEF%"
    },
    "substats": [
      "DEF%",
      "PV%",
      "Velocidad",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "La textura de los recuerdos",
        "en": "Texture of Memories",
        "nota": "Firma · +Res. a Efectos y escudo al recibir daño",
        "best": true
      },
      {
        "es": "Tendencia del mercado universal",
        "en": "Trend of the Universal Market",
        "nota": "4★ F2P · el básico puede dar escudo, la mejor gratuita"
      },
      {
        "es": "Momento de victoria",
        "en": "Moment of Victory",
        "nota": "5★ · +DEF y aumenta la probabilidad de recibir ataques"
      }
    ],
    "reliquias": [
      {
        "es": "Caballero del palacio de la pureza (4pz)",
        "en": "Knight of Purity Palace",
        "nota": "+DEF y sube el límite de absorción del escudo",
        "best": true
      },
      {
        "es": "Belobog de los arquitectos (2pz)",
        "en": "Belobog of the Architects",
        "nota": "+DEF (más con Prob. de Efecto alta)"
      },
      {
        "es": "Flota de los inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "alt · +PV y +ATQ al equipo si Velocidad ≥120"
      }
    ],
    "equipos": [
      {
        "nombre": "Sostén con control",
        "agentes": "Gepard · Seele · Bronya · Silver Wolf",
        "best": true
      },
      {
        "nombre": "Escudo para equipo frágil",
        "agentes": "Gepard · Jingliu · Pela · Bronya"
      },
      {
        "nombre": "Congelación",
        "agentes": "Gepard · Yanqing · Tingyun · Asta"
      }
    ],
    "consejo": "Escudo de equipo muy fiable. Sube DEF y algo de Velocidad/Regen para lanzar antes su Ulti, que además puede congelar. Ideal para DPS que necesitan protección.",
    "ficha": {
      "nombreCompleto": "Gepard Landau",
      "faccion": "Jarilo-VI (Silvermane)",
      "desc": "Capitán de los Guardianes Siláceos de Belobog, caballero leal e inquebrantable. Protege a su equipo con escudos y control de Hielo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/96/Character_Gepard_Splash_Art.png"
    }
  },
  {
    "id": "clara",
    "nombre": "Clara",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Destrucción",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Físico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Daño Crítico",
      "Prob. Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Algo irremplazable",
        "en": "Something Irreplaceable",
        "nota": "Firma · +ATQ, +DMG tras derribar o recibir golpe y sanación",
        "best": true
      },
      {
        "es": "Sobre la caída de un eón",
        "en": "On the Fall of an Aeon",
        "nota": "5★ Pase · +ATQ acumulable y +DMG, gran alternativa"
      },
      {
        "es": "Un voto secreto",
        "en": "A Secret Vow",
        "nota": "4★ F2P · +DMG, extra contra enemigos con más PV%"
      }
    ],
    "reliquias": [
      {
        "es": "Gran duque de las cenizas llameantes (4pz)",
        "en": "The Ashblazing Grand Duke",
        "nota": "+DMG de contraataque y +ATQ por golpe (perfecto para sus counters)",
        "best": true
      },
      {
        "es": "Salsotto inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "+Prob. Crítico y +DMG de Ulti/contraataque"
      },
      {
        "es": "Campeón del boxeo callejero (4pz)",
        "en": "Champion of Streetwise Boxing",
        "nota": "alt F2P · +Daño Físico y +ATQ al golpear/ser golpeada"
      }
    ],
    "equipos": [
      {
        "nombre": "Counter moderno",
        "agentes": "Clara · Robin · Sunday · Aventurino",
        "best": true
      },
      {
        "nombre": "Contraataques con escudo",
        "agentes": "Clara · Siete de Marzo · Tingyun · Luocha"
      },
      {
        "nombre": "Seguimiento (follow-up)",
        "agentes": "Clara · Topaz · Robin · Huohuo"
      }
    ],
    "consejo": "Mantente en medio del combate para que los enemigos la ataquen y disparen sus contraataques. Con Siete de Marzo o un escudo aguanta mucho más y multiplica su daño.",
    "ficha": {
      "nombreCompleto": "Clara",
      "faccion": "Jarilo-VI",
      "desc": "Huérfana del Inframundo de Belobog acompañada por el robot guardián Svarog. Responde con contraataques devastadores cuando la atacan a ella o a sus aliados.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c2/Character_Clara_Splash_Art.png"
    }
  },
  {
    "id": "serval",
    "nombre": "Serval",
    "rareza": "4",
    "elemento": "Rayo",
    "camino": "Erudición",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Rayo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Daño Crítico",
      "Prob. Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "El nacimiento del yo",
        "en": "The Birth of the Self",
        "nota": "4★ F2P (tienda Herta) · +DMG en área y de seguimiento, la mejor accesible",
        "best": true
      },
      {
        "es": "Noche en la Vía Láctea",
        "en": "Night on the Milky Way",
        "nota": "5★ · +ATQ por enemigo, gran DMG en área"
      },
      {
        "es": "La seriedad del desayuno",
        "en": "The Seriousness of Breakfast",
        "nota": "4★ F2P · +DMG y +ATQ acumulable al derribar"
      }
    ],
    "reliquias": [
      {
        "es": "Banda del trueno crepitante (4pz)",
        "en": "Band of Sizzling Thunder",
        "nota": "+Daño de Rayo y +ATQ al usar la habilidad",
        "best": true
      },
      {
        "es": "Estación de sellado espacial (2pz)",
        "en": "Space Sealing Station",
        "nota": "+ATQ (más con Velocidad alta)"
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "alt · +ATQ y +DMG según Velocidad"
      }
    ],
    "equipos": [
      {
        "nombre": "Daño con el tiempo (DoT)",
        "agentes": "Serval · Kafka · Gallagher · Asta",
        "best": true
      },
      {
        "nombre": "Erudición en área",
        "agentes": "Serval · La Herta · Tribbie · Huohuo"
      },
      {
        "nombre": "Choque de Rayo",
        "agentes": "Serval · Black Swan · Kafka · Luocha"
      }
    ],
    "consejo": "Excelente 4★ contra grupos: su descarga aplica Choque, así que rinde muchísimo como sub-DPS en equipos de daño con el tiempo (DoT) junto a Kafka.",
    "ficha": {
      "nombreCompleto": "Serval Landau",
      "faccion": "Jarilo-VI",
      "desc": "Ingeniera y estrella del rock del Inframundo de Belobog, y hermana de Gepard. Desata daño de Rayo en área y aplica Choque a los enemigos.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8a/Character_Serval_Splash_Art.png"
    }
  },
  {
    "id": "natasha",
    "nombre": "Natasha",
    "rareza": "4",
    "elemento": "Físico",
    "camino": "Abundancia",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "PV%",
      "alt": "Terapia"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "PV%",
      "Velocidad",
      "Regeneración de Energía",
      "Efecto de Ruptura",
      "DEF%"
    ],
    "conos": [
      {
        "es": "El tiempo no espera a nadie",
        "en": "Time Waits for No One",
        "nota": "5★ · cura extra reflejada como daño, el mejor global",
        "best": true
      },
      {
        "es": "Charla postoperatoria",
        "en": "Post-Op Conversation",
        "nota": "4★ F2P · +Regen Energía y +Terapia con la Habilidad"
      },
      {
        "es": "Sentimiento compartido",
        "en": "Shared Feeling",
        "nota": "4★ F2P · +Terapia y regenera energía al equipo"
      },
      {
        "es": "Quid pro quo",
        "en": "Quid Pro Quo",
        "nota": "3★ F2P · devuelve energía a aliados con poca energía"
      }
    ],
    "reliquias": [
      {
        "es": "Transeúnte de la nube errante (4pz)",
        "en": "Passerby of Wandering Cloud",
        "nota": "+Terapia y restaura PT al inicio del combate",
        "best": true
      },
      {
        "es": "Flota de los inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "+12% PV y +ATQ al equipo si SPD ≥ 120"
      },
      {
        "es": "Quilla rota (2pz)",
        "en": "Broken Keel",
        "nota": "Alt · +Res. Efecto y +Daño Crítico al equipo"
      }
    ],
    "equipos": [
      {
        "nombre": "Sostén económico F2P",
        "agentes": "DPS libre · Tingyun/Asta · Natasha",
        "best": true
      },
      {
        "nombre": "Hipercarry inicial",
        "agentes": "Jing Yuan/Serval · Tingyun · Natasha · Pela"
      }
    ],
    "consejo": "Sanadora gratuita del inicio: prioriza PV% y algo de Velocidad para curar seguido, y sube Regen de Energía para lanzar el Ulti a menudo.",
    "ficha": {
      "nombreCompleto": "Natasha",
      "faccion": "Jarilo-VI",
      "desc": "Doctora del Sector Subterráneo de Belobog que atiende gratis a los desfavorecidos y ejerce de figura maternal para los huérfanos de los Escombros.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7e/Character_Natasha_Splash_Art.png"
    }
  },
  {
    "id": "pela",
    "nombre": "Pela",
    "rareza": "4",
    "elemento": "Hielo",
    "camino": "Nihilidad",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. de Efecto",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Hielo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "Velocidad",
      "Prob. de Efecto",
      "Regeneración de Energía",
      "ATQ%",
      "Efecto de Ruptura"
    ],
    "conos": [
      {
        "es": "La resolución brilla como perlas de sudor",
        "en": "Resolution Shines As Pearls of Sweat",
        "nota": "4★ · reduce DEF enemiga al aplicar debuff, ideal para Pela",
        "best": true
      },
      {
        "es": "Lluvia incesante",
        "en": "Incessant Rain",
        "nota": "5★ · +Prob. Efecto y aplica 'Regusto', buffea el crítico del equipo"
      },
      {
        "es": "Antes de que empiece la misión tutorial",
        "en": "Before the Tutorial Mission Starts",
        "nota": "4★ F2P · +Prob. Efecto y regenera energía"
      },
      {
        "es": "Vacío",
        "en": "Void",
        "nota": "3★ F2P · +Prob. Efecto al inicio del combate"
      }
    ],
    "reliquias": [
      {
        "es": "Águila de la línea crepuscular (4pz)",
        "en": "Eagle of Twilight Line",
        "nota": "+Daño Hielo y adelanta su acción tras el Ulti",
        "best": true
      },
      {
        "es": "Quilla rota (2pz)",
        "en": "Broken Keel",
        "nota": "+Res. Efecto y +Daño Crítico al equipo",
        "best": true
      },
      {
        "es": "Mensajero que recorre el ciberespacio (4pz)",
        "en": "Messenger Traversing Hackerspace",
        "nota": "Alt · +Velocidad al equipo tras el Ulti"
      }
    ],
    "equipos": [
      {
        "nombre": "Apoyo debuffer universal",
        "agentes": "DPS · Pela (reduce DEF) · amplificador · sostén",
        "best": true
      },
      {
        "nombre": "Equipo de Hielo/congelación",
        "agentes": "Yanqing/Jingliu · Pela · Tingyun · Bailu"
      }
    ],
    "consejo": "Su Ulti reduce la DEF de todos los enemigos: úsala como Silver Wolf económica. Sube Velocidad y Prob. de Efecto para encadenar sus debuffs.",
    "ficha": {
      "nombreCompleto": "Pela Aleksandrovna",
      "faccion": "Jarilo-VI (Silvermane)",
      "desc": "Oficial de inteligencia de la Guarnición Silvermane, meticulosa y estudiosa, experta en descifrar información y ordenar el caos del campo de batalla.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c9/Character_Pela_Splash_Art.png"
    }
  },
  {
    "id": "sampo",
    "nombre": "Sampo",
    "rareza": "4",
    "elemento": "Viento",
    "camino": "Nihilidad",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Prob. de Efecto"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Viento",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "ATQ%",
      "Prob. de Efecto",
      "Velocidad",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "La paciencia lo es todo",
        "en": "Patience Is All You Need",
        "nota": "5★ · +Daño con el tiempo, +Velocidad y erosión de DoT, el mejor",
        "best": true
      },
      {
        "es": "Buenas noches y dulces sueños",
        "en": "Good Night and Sleep Well",
        "nota": "4★ · +Daño por cada debuff en el enemigo"
      },
      {
        "es": "Ojos de la presa",
        "en": "Eyes of the Prey",
        "nota": "4★ F2P · +Prob. Efecto y +Daño de DoT"
      },
      {
        "es": "Vacío",
        "en": "Void",
        "nota": "3★ F2P · +Prob. Efecto"
      }
    ],
    "reliquias": [
      {
        "es": "Prisionero del confinamiento profundo (4pz)",
        "en": "Prisoner in Deep Confinement",
        "nota": "+ATQ e ignora DEF por cada DoT activo, BiS de DoT",
        "best": true
      },
      {
        "es": "Empresa comercial pancósmica (2pz)",
        "en": "Pan-Cosmic Commercial Enterprise",
        "nota": "+ATQ escalando con Prob. de Efecto",
        "best": true
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "Alt · +ATQ (bonus con SPD alta)"
      }
    ],
    "equipos": [
      {
        "nombre": "DoT / Viento Cortante",
        "agentes": "Sampo · Kafka/Black Swan · Ruan Mei/Pela · Gallagher",
        "best": true
      },
      {
        "nombre": "Sub-DPS de erosión económico",
        "agentes": "Sampo · Serval · Asta · Natasha"
      }
    ],
    "consejo": "Sub-DPS de Daño Continuo: su Habilidad aplica Viento Cortante múltiple. Asegura Prob. de Efecto para que peguen los DoT y luego maximiza ATQ%.",
    "ficha": {
      "nombreCompleto": "Sampo Koski",
      "faccion": "Jarilo-VI",
      "desc": "Vendedor ambulante y estafador de labia fácil que aparece donde huele beneficio; escurridizo, teatral y con más secretos de los que aparenta.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/65/Character_Sampo_Splash_Art.png"
    }
  },
  {
    "id": "hook",
    "nombre": "Hook",
    "rareza": "4",
    "elemento": "Fuego",
    "camino": "Destrucción",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Fuego",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Efecto de Ruptura"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Sobre la caída de un eón",
        "en": "On the Fall of an Aeon",
        "nota": "4★ F2P (evento) · +ATQ acumulable y bonus tras Ruptura, el mejor F2P",
        "best": true
      },
      {
        "es": "Algo irreemplazable",
        "en": "Something Irreplaceable",
        "nota": "5★ · +ATQ, +Daño y curación al derrotar/recibir golpe"
      },
      {
        "es": "Un voto secreto",
        "en": "A Secret Vow",
        "nota": "4★ F2P · +Daño (extra contra enemigos con más PV%)"
      },
      {
        "es": "Somos fuego indómito",
        "en": "We Are Wildfire",
        "nota": "4★ · reduce daño recibido (supervivencia)"
      }
    ],
    "reliquias": [
      {
        "es": "Herrero del fuego de la forja de lava (4pz)",
        "en": "Firesmith of Lava-Forging",
        "nota": "+Daño de Fuego y +Daño de Habilidad",
        "best": true
      },
      {
        "es": "Estación de sellado espacial (2pz)",
        "en": "Space Sealing Station",
        "nota": "+ATQ (más si SPD ≥ 120)",
        "best": true
      },
      {
        "es": "Salsotto inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "Alt · +Prob. Crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry de Fuego",
        "agentes": "Hook · Tingyun · Pela/Sampo · Natasha",
        "best": true
      },
      {
        "nombre": "Núcleo DoT/Ruptura",
        "agentes": "Hook · Asta · Sampo · Gallagher"
      }
    ],
    "consejo": "DPS de objetivo único: usa siempre la Habilidad mejorada (tras el Ulti) para el DoT de quemadura. Busca ratio de crítico 1:2 y ATQ% alto.",
    "ficha": {
      "nombreCompleto": "Hook",
      "faccion": "Jarilo-VI (Topos)",
      "desc": "Líder infantil de la Pandilla de Moles en los Escombros, enérgica y leal a sus amigos, que reparte 'justicia' a fuerza de puñetazos y fuego.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/ec/Character_Hook_Splash_Art.png"
    }
  },
  {
    "id": "lynx",
    "nombre": "Lynx",
    "rareza": "4",
    "elemento": "Cuántico",
    "camino": "Abundancia",
    "version": "1.3",
    "estado": "ok",
    "cuerpo": {
      "principal": "PV%",
      "alt": "Terapia"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "PV%",
      "Velocidad",
      "Regeneración de Energía",
      "Efecto de Ruptura",
      "DEF%"
    ],
    "conos": [
      {
        "es": "El tiempo no espera a nadie",
        "en": "Time Waits for No One",
        "nota": "5★ · cura reflejada como daño, mejor cono de curación",
        "best": true
      },
      {
        "es": "Charla postoperatoria",
        "en": "Post-Op Conversation",
        "nota": "4★ F2P · +Regen Energía y +Terapia"
      },
      {
        "es": "Quid pro quo",
        "en": "Quid Pro Quo",
        "nota": "3★ F2P · reparte energía a aliados escasos"
      },
      {
        "es": "El río fluye en primavera",
        "en": "River Flows in Spring",
        "nota": "4★ · +ATQ/SPD mientras no reciba daño"
      }
    ],
    "reliquias": [
      {
        "es": "Transeúnte de la nube errante (4pz)",
        "en": "Passerby of Wandering Cloud",
        "nota": "+Terapia y restaura PT al iniciar el combate",
        "best": true
      },
      {
        "es": "Flota de los inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "+12% PV y +ATQ al equipo si SPD ≥ 120",
        "best": true
      },
      {
        "es": "Discípulo longevo (4pz)",
        "en": "Longevous Disciple",
        "nota": "Alt · +PV y +Prob. Crítico al recibir daño"
      }
    ],
    "equipos": [
      {
        "nombre": "Sostén PV para tanques/contadores",
        "agentes": "Clara/Blade · Lynx · amplificador · debuffer",
        "best": true
      },
      {
        "nombre": "Curación general",
        "agentes": "DPS libre · Tingyun · Lynx · Silver Wolf/Pela"
      }
    ],
    "consejo": "Sanadora que da PV máximo extra y limpia debuffs: brilla con DPS que escalan o dependen de sus PV (Blade, Clara). Prioriza PV% y algo de Velocidad.",
    "ficha": {
      "nombreCompleto": "Lynx Landau",
      "faccion": "Jarilo-VI (Familia Landau)",
      "desc": "Miembro de la familia Landau y exploradora todoterreno de las tierras nevadas; alegre y resistente, siempre lista para socorrer a quien lo necesite.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/3/3c/Character_Lynx_Splash_Art.png"
    }
  },
  {
    "id": "luka",
    "nombre": "Luka",
    "rareza": "4",
    "elemento": "Físico",
    "camino": "Nihilidad",
    "version": "1.2",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Prob. de Efecto"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Físico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "ATQ%",
      "Prob. de Efecto",
      "Velocidad",
      "Efecto de Ruptura"
    ],
    "conos": [
      {
        "es": "La paciencia lo es todo",
        "en": "Patience Is All You Need",
        "nota": "5★ · +Daño creciente, +Velocidad y erosión de DoT, el mejor",
        "best": true
      },
      {
        "es": "Buenas noches y dulces sueños",
        "en": "Good Night and Sleep Well",
        "nota": "4★ · +Daño por cada debuff en el objetivo"
      },
      {
        "es": "Ojos de la presa",
        "en": "Eyes of the Prey",
        "nota": "4★ F2P · +Prob. Efecto y +Daño de DoT"
      },
      {
        "es": "Regreso a la oscuridad",
        "en": "Return to Darkness",
        "nota": "3★ F2P · +Prob. Crítico"
      }
    ],
    "reliquias": [
      {
        "es": "Prisionero del confinamiento profundo (4pz)",
        "en": "Prisoner in Deep Confinement",
        "nota": "+ATQ e ignora DEF por cada DoT, BiS para su Hemorragia",
        "best": true
      },
      {
        "es": "Empresa comercial pancósmica (2pz)",
        "en": "Pan-Cosmic Commercial Enterprise",
        "nota": "+ATQ escalando con Prob. de Efecto",
        "best": true
      },
      {
        "es": "Talia: reino del bandidaje (2pz)",
        "en": "Talia: Kingdom of Banditry",
        "nota": "Alt · +Efecto de Ruptura"
      }
    ],
    "equipos": [
      {
        "nombre": "DoT de Hemorragia",
        "agentes": "Luka · Kafka/Black Swan · Ruan Mei/Pela · Gallagher",
        "best": true
      },
      {
        "nombre": "Sub-DPS físico económico",
        "agentes": "Luka · Sampo · Asta · Natasha"
      }
    ],
    "consejo": "Aplica Hemorragia con su Habilidad mejorada tras acumular Golpes; asegura Prob. de Efecto y ATQ%. Su Ulti reduce la DEF del objetivo: úsalo antes del gran turno.",
    "ficha": {
      "nombreCompleto": "Luka",
      "faccion": "Jarilo-VI (Fuego Salvaje)",
      "desc": "Boxeador estrella del Sector Subterráneo, carismático y ambicioso, que sueña con llevar la fama de los Escombros a lo más alto del ring.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/51/Character_Luka_Splash_Art.png"
    }
  },
  {
    "id": "jing-yuan",
    "nombre": "Jing Yuan",
    "rareza": "5",
    "elemento": "Rayo",
    "camino": "Erudición",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Rayo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Antes del amanecer",
        "en": "Before Dawn",
        "nota": "5★ Firma · +Daño Crítico y +Daño de Habilidad/Ulti/ataque adicional, el mejor",
        "best": true
      },
      {
        "es": "La seriedad del desayuno",
        "en": "The Seriousness of Breakfast",
        "nota": "4★ F2P · +Daño y +ATQ acumulable al derrotar"
      },
      {
        "es": "Hacer clamar al mundo",
        "en": "Make the World Clamor",
        "nota": "4★ · +Daño de Ulti y regenera energía"
      },
      {
        "es": "El día en que el mundo se paró",
        "en": "The Day the Cosmos Fell",
        "nota": "5★ · +Prob. Crítico y +Daño en área"
      }
    ],
    "reliquias": [
      {
        "es": "Gran duque de las cenizas llameantes (4pz)",
        "en": "The Ashblazing Grand Duke",
        "nota": "+Daño de ataque adicional y +ATQ por golpe",
        "best": true
      },
      {
        "es": "Duran, dinastía de los lobos errantes (2pz)",
        "en": "Duran, Dynasty of Running Wolves",
        "nota": "+Daño por golpes adicionales, +Daño Crítico a tope",
        "best": true
      },
      {
        "es": "Arena rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "Alt · +Prob. Crítico y +Daño de Básico/Habilidad"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry de ataques adicionales",
        "agentes": "Jing Yuan · Sunday/Tingyun · Ruan Mei/Aventurino · Sanador",
        "best": true
      },
      {
        "nombre": "Núcleo Rayo clásico",
        "agentes": "Jing Yuan · Tingyun · Pela · Luocha/Bailu"
      }
    ],
    "consejo": "Deja madurar al Señor del Rayo hasta 10 acumulaciones antes de que actúe: cada golpe cuenta para el Duque de las Cenizas. Prioriza SPD y ratio crítico, apóyalo con Tingyun.",
    "ficha": {
      "nombreCompleto": "Jing Yuan",
      "faccion": "Xianzhou Luofu",
      "desc": "General de la Alianza Divina de Xianzhou y comandante de las Cloud Knights; sereno y sagaz, invoca al Señor del Rayo para arrasar a sus enemigos.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/4/48/Character_Jing_Yuan_Splash_Art.png"
    }
  },
  {
    "id": "yanqing",
    "nombre": "Yanqing",
    "rareza": "5",
    "elemento": "Hielo",
    "camino": "Cacería",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Hielo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Dormir como los muertos",
        "en": "Sleep Like the Dead",
        "nota": "5★ · +Daño Crítico y evita fallos de crítico en el ataque adicional",
        "best": true
      },
      {
        "es": "Surcando el mar estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "4★ F2P · +Prob. Crítico y +ATQ contra enemigos con poca vida"
      },
      {
        "es": "Esgrima",
        "en": "Swordplay",
        "nota": "4★ F2P · +Daño acumulable golpeando al mismo objetivo"
      },
      {
        "es": "Solo el silencio queda",
        "en": "Only Silence Remains",
        "nota": "4★ · +Prob. Crítico con pocos enemigos"
      }
    ],
    "reliquias": [
      {
        "es": "Cazador del bosque glacial (4pz)",
        "en": "Hunter of Glacial Forest",
        "nota": "+Daño de Hielo y +Daño Crítico tras el Ulti, BiS",
        "best": true
      },
      {
        "es": "Arena rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "+Prob. Crítico y +Daño de Básico/Habilidad",
        "best": true
      },
      {
        "es": "Estación de sellado espacial (2pz)",
        "en": "Space Sealing Station",
        "nota": "Alt · +ATQ (más con SPD ≥ 120)"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry de objetivo único",
        "agentes": "Yanqing · Tingyun · Pela · Luocha/Aventurino",
        "best": true
      },
      {
        "nombre": "Equipo de Hielo/congelación",
        "agentes": "Yanqing · Pela · Ruan Mei · Bailu"
      }
    ],
    "consejo": "Muy dependiente del escudo/protección: mantén su estado 'Autoflorecer' evitando que reciba golpes, por eso pide un sostén y un debuffer. Ratio crítico alto es su prioridad absoluta.",
    "ficha": {
      "nombreCompleto": "Yanqing",
      "faccion": "Xianzhou Luofu",
      "desc": "Joven y prodigioso espadachín al servicio del general Jing Yuan; talentoso hasta la arrogancia, sueña con forjar la espada perfecta.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6d/Character_Yanqing_Splash_Art.png"
    }
  },
  {
    "id": "bailu",
    "nombre": "Bailu",
    "rareza": "5",
    "elemento": "Rayo",
    "camino": "Abundancia",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "PV%",
      "alt": "Terapia"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "PV%",
      "Velocidad",
      "Regeneración de Energía",
      "Efecto de Ruptura",
      "DEF%"
    ],
    "conos": [
      {
        "es": "El tiempo no espera a nadie",
        "en": "Time Waits for No One",
        "nota": "5★ · cura excedente reflejada como daño",
        "best": true
      },
      {
        "es": "Charla postoperatoria",
        "en": "Post-Op Conversation",
        "nota": "4★ F2P · +Regen Energía y +Terapia"
      },
      {
        "es": "Sentimiento compartido",
        "en": "Shared Feeling",
        "nota": "4★ F2P · +Terapia y da energía al equipo"
      },
      {
        "es": "Quid pro quo",
        "en": "Quid Pro Quo",
        "nota": "3★ F2P · reparte energía a aliados escasos"
      }
    ],
    "reliquias": [
      {
        "es": "Transeúnte de la nube errante (4pz)",
        "en": "Passerby of Wandering Cloud",
        "nota": "+Terapia y restaura PT al inicio",
        "best": true
      },
      {
        "es": "Flota de los inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "+12% PV y +ATQ al equipo si SPD ≥ 120",
        "best": true
      },
      {
        "es": "Quilla rota (2pz)",
        "en": "Broken Keel",
        "nota": "Alt · +Res. Efecto y +Daño Crítico al equipo"
      }
    ],
    "equipos": [
      {
        "nombre": "Sostén de curación fuerte",
        "agentes": "DPS libre · amplificador · Bailu · debuffer",
        "best": true
      },
      {
        "nombre": "Equipo de supervivencia",
        "agentes": "DPS frágil · Tingyun · Bailu · Pela"
      }
    ],
    "consejo": "Su Ulti aplica curación en cadena y su Talento revive a un aliado caído, así que sube PV% y Regen de Energía. Muy útil en contenido de aguante.",
    "ficha": {
      "nombreCompleto": "Bailu",
      "faccion": "Xianzhou Luofu",
      "desc": "Dragón sanadora heredera del Aljibe de la Vidalarga; juguetona y algo infantil, domina una medicina capaz incluso de traer de vuelta a los caídos.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e9/Character_Bailu_Splash_Art.png"
    }
  },
  {
    "id": "sushang",
    "nombre": "Sushang",
    "rareza": "4",
    "elemento": "Físico",
    "camino": "Cacería",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Físico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Efecto de Ruptura"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad",
      "Efecto de Ruptura"
    ],
    "conos": [
      {
        "es": "Surcando el mar estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "4★ F2P · +Prob. Crítico, +ATQ y energía al rematar, el mejor F2P",
        "best": true
      },
      {
        "es": "Los topos te dan la bienvenida",
        "en": "The Moles Welcome You",
        "nota": "4★ F2P · +ATQ acumulable con Habilidad/Ulti"
      },
      {
        "es": "Esgrima",
        "en": "Swordplay",
        "nota": "4★ F2P · +Daño acumulable al mismo objetivo"
      },
      {
        "es": "Sin escapatoria",
        "en": "Nowhere to Run",
        "nota": "3★ F2P · +ATQ y recupera PV al derrotar"
      }
    ],
    "reliquias": [
      {
        "es": "Campeón del boxeo callejero (4pz)",
        "en": "Champion of Streetwise Boxing",
        "nota": "+Daño Físico y +ATQ acumulable al atacar/recibir golpe",
        "best": true
      },
      {
        "es": "Estación de sellado espacial (2pz)",
        "en": "Space Sealing Station",
        "nota": "+ATQ (más con SPD ≥ 120)",
        "best": true
      },
      {
        "es": "Talia: reino del bandidaje (2pz)",
        "en": "Talia: Kingdom of Banditry",
        "nota": "Alt · +Efecto de Ruptura"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry de Ruptura/objetivo único",
        "agentes": "Sushang · Ruan Mei · Trazacaminos (Armonía) · Gallagher",
        "best": true
      },
      {
        "nombre": "Físico económico",
        "agentes": "Sushang · Tingyun · Pela · Natasha"
      }
    ],
    "consejo": "Su Habilidad mejorada tras Ruptura le da acción extra y ATQ: brilla en equipos de Ruptura con Ruan Mei. Prioriza ratio crítico y Velocidad.",
    "ficha": {
      "nombreCompleto": "Sushang",
      "faccion": "Xianzhou Luofu",
      "desc": "Joven y disciplinada espadachina de las Cloud Knights de Xianzhou, admiradora de las leyendas heroicas y siempre entusiasta por mejorar su técnica.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/72/Character_Sushang_Splash_Art.png"
    }
  },
  {
    "id": "tingyun",
    "nombre": "Tingyun",
    "rareza": "4",
    "elemento": "Rayo",
    "camino": "Armonía",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "ATQ%",
      "alt": "Daño de Rayo"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "Velocidad",
      "Regeneración de Energía",
      "ATQ%",
      "PV%"
    ],
    "conos": [
      {
        "es": "Recuerdos del pasado",
        "en": "Memories of the Past",
        "nota": "4★ · genera energía y ATQ, la mejor F2P",
        "best": true
      },
      {
        "es": "Pero la batalla no ha terminado",
        "en": "But the Battle Isn't Over",
        "nota": "5★ · da energía a un aliado y buff de daño"
      },
      {
        "es": "Tallar la luna, tejer las nubes",
        "en": "Carve the Moon, Weave the Clouds",
        "nota": "4★ · buff de ATQ al equipo"
      },
      {
        "es": "¡Baila! ¡Baila! ¡Baila!",
        "en": "Dance! Dance! Dance!",
        "nota": "4★ · adelanta la acción del equipo con la definitiva"
      }
    ],
    "reliquias": [
      {
        "es": "Mensajero que recorre el ciberespacio (4pz)",
        "en": "Messenger Traversing Hackerspace",
        "nota": "+Velocidad; la definitiva acelera a todo el equipo",
        "best": true
      },
      {
        "es": "Flota de los inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "con 120+ Velocidad, +ATQ a todo el equipo"
      },
      {
        "es": "Mosquetero de trigo silvestre (4pz)",
        "en": "Musketeer of Wild Wheat",
        "nota": "alt si buscas su propio daño de Rayo"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Jing Yuan",
        "agentes": "Jing Yuan · Tingyun · Robin/Sparkle · Aventurino",
        "best": true
      },
      {
        "nombre": "Dan Heng IL",
        "agentes": "Dan Heng • IL · Tingyun · Sparkle · Luocha"
      },
      {
        "nombre": "Seele mono-Cuántico",
        "agentes": "Seele · Tingyun · Silver Wolf · Fu Xuan"
      }
    ],
    "consejo": "Súbele Velocidad para actuar antes que tu DPS y mantén la energía alta para renovar su bendición cada turno.",
    "ficha": {
      "nombreCompleto": "Tingyun",
      "faccion": "Xianzhou Luofu",
      "desc": "Cornucopia de la Alianza Comercial Interastral y vidyadhara al servicio de la Xianzhou Luofu; una mercader carismática y astuta, experta en los negocios.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Character_Tingyun_Splash_Art.png"
    }
  },
  {
    "id": "qingque",
    "nombre": "Qingque",
    "rareza": "4",
    "elemento": "Cuántico",
    "camino": "Erudición",
    "version": "1.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Cuántico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Antes del amanecer",
        "en": "Before Dawn",
        "nota": "5★ · potencia habilidad y definitiva, la mejor",
        "best": true
      },
      {
        "es": "Noche en la Vía Láctea",
        "en": "Night on the Milky Way",
        "nota": "5★ · +ATQ por enemigo y daño extra tras atacar"
      },
      {
        "es": "La seriedad del desayuno",
        "en": "The Seriousness of Breakfast",
        "nota": "4★ · +ATQ y daño, buena F2P"
      },
      {
        "es": "El descanso de los genios",
        "en": "Geniuses' Repose",
        "nota": "4★ · +ATQ y Daño Crítico al eliminar"
      }
    ],
    "reliquias": [
      {
        "es": "Genio de las estrellas brillantes (4pz)",
        "en": "Genius of Brilliant Stars",
        "nota": "+daño Cuántico e ignora parte de la DEF",
        "best": true
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "+12% ATQ; con Velocidad alta gana mucho daño"
      },
      {
        "es": "Salsotto inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "alt · +8% Prob. Crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Qingque",
        "agentes": "Qingque · Sparkle · Tingyun/Pela · Fu Xuan",
        "best": true
      },
      {
        "nombre": "Mono-Cuántico",
        "agentes": "Qingque · Silver Wolf · Sparkle · Fu Xuan"
      },
      {
        "nombre": "Doble Armonía",
        "agentes": "Qingque · Sparkle · Robin · Aventurino"
      }
    ],
    "consejo": "Consume muchos puntos de habilidad: emparéjala con Sparkle y evita otros que gasten puntos. Baraja hasta tener las 4 fichas antes de rematar.",
    "ficha": {
      "nombreCompleto": "Qingque",
      "faccion": "Xianzhou Luofu",
      "desc": "Funcionaria del Departamento de Divinaciones de la Xianzhou Luofu, perezosa y obsesionada con el mahjong, que preferiría jugar antes que trabajar.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d1/Character_Qingque_Splash_Art.png"
    }
  },
  {
    "id": "fu-xuan",
    "nombre": "Fu Xuan",
    "rareza": "5",
    "elemento": "Cuántico",
    "camino": "Conservación",
    "version": "1.3",
    "estado": "ok",
    "cuerpo": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "PV%",
      "Velocidad",
      "DEF%",
      "Prob. Crítico"
    ],
    "conos": [
      {
        "es": "Ella ya cerró los ojos",
        "en": "She Already Shut Her Eyes",
        "nota": "Firma · +PV, energía y regeneración según PV perdido, la mejor",
        "best": true
      },
      {
        "es": "Tendencia del mercado universal",
        "en": "Trend of the Universal Market",
        "nota": "4★ · escudo y +PV, opción sólida"
      },
      {
        "es": "La textura de los recuerdos",
        "en": "Texture of Memories",
        "nota": "4★ · escudo y reduce el daño recibido"
      },
      {
        "es": "La elección de Landau",
        "en": "Landau's Choice",
        "nota": "3★ · reduce daño, muy accesible"
      }
    ],
    "reliquias": [
      {
        "es": "Guardián de la nieve rugiente (4pz)",
        "en": "Guard of Wuthering Snow",
        "nota": "reduce el daño recibido y regenera energía al inicio del turno",
        "best": true
      },
      {
        "es": "Flota de los inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "+PV y, con 120 Velocidad, +ATQ a todo el equipo"
      },
      {
        "es": "Vonwacq animado (2pz)",
        "en": "Sprightly Vonwacq",
        "nota": "alt · +Regen. de Energía y adelanta su acción si SPD≥120"
      }
    ],
    "equipos": [
      {
        "nombre": "Sostén universal",
        "agentes": "Fu Xuan · DPS (Seele/Jingliu/DHIL) · 2 apoyos",
        "best": true
      },
      {
        "nombre": "Mono-Cuántico",
        "agentes": "Fu Xuan · Seele/Qingque · Silver Wolf · Robin"
      }
    ],
    "consejo": "Su matriz reduce el daño de todo el equipo y reparte la vida: prioriza PV% y algo de Velocidad para reaplicar el escudo a tiempo. No necesita crítico.",
    "ficha": {
      "nombreCompleto": "Fu Xuan",
      "faccion": "Xianzhou Luofu",
      "desc": "Maestra del Consejo de los Diez Capitanes y jefa de la División Taibu de la Xianzhou Luofu, capaz de vislumbrar el futuro con su ojo de matriz.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/3/3e/Character_Fu_Xuan_Splash_Art.png"
    }
  },
  {
    "id": "yukong",
    "nombre": "Yukong",
    "rareza": "4",
    "elemento": "Imaginario",
    "camino": "Armonía",
    "version": "1.1",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "ATQ%",
      "alt": "Daño Imaginario"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "Velocidad",
      "Regeneración de Energía",
      "ATQ%",
      "Daño Crítico"
    ],
    "conos": [
      {
        "es": "Recuerdos del pasado",
        "en": "Memories of the Past",
        "nota": "4★ · energía + ATQ, gran F2P",
        "best": true
      },
      {
        "es": "Pero la batalla no ha terminado",
        "en": "But the Battle Isn't Over",
        "nota": "5★ · energía a un aliado y buff de daño"
      },
      {
        "es": "Tallar la luna, tejer las nubes",
        "en": "Carve the Moon, Weave the Clouds",
        "nota": "4★ · buff de ATQ al equipo"
      },
      {
        "es": "Pasado y futuro",
        "en": "Past and Future",
        "nota": "4★ · +daño al siguiente aliado tras su habilidad"
      }
    ],
    "reliquias": [
      {
        "es": "Mensajero que recorre el ciberespacio (4pz)",
        "en": "Messenger Traversing Hackerspace",
        "nota": "+Velocidad; su definitiva acelera al equipo",
        "best": true
      },
      {
        "es": "Flota de los inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "con 120 Velocidad, +ATQ a todo el equipo"
      },
      {
        "es": "Mosquetero de trigo silvestre (4pz)",
        "en": "Musketeer of Wild Wheat",
        "nota": "alt centrada en su propio daño"
      }
    ],
    "equipos": [
      {
        "nombre": "Buff a DPS de ATQ",
        "agentes": "Yukong · DPS (Dan Heng IL/Yanqing/Jing Yuan) · sostén · apoyo",
        "best": true
      },
      {
        "nombre": "Doble buff",
        "agentes": "DPS · Yukong · Tingyun · Luocha"
      }
    ],
    "consejo": "Su definitiva da Prob. y Daño Crítico enormes al equipo: sincroniza su turno para que el buff coincida con el gran golpe de tu DPS.",
    "ficha": {
      "nombreCompleto": "Yukong",
      "faccion": "Xianzhou Luofu",
      "desc": "Comandante de la Flota de Halcones Celestiales de la Xianzhou Luofu, una arquera veterana que guía a los jóvenes pilotos.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/0/04/Character_Yukong_Splash_Art.png"
    }
  },
  {
    "id": "jingliu",
    "nombre": "Jingliu",
    "rareza": "5",
    "elemento": "Hielo",
    "camino": "Destrucción",
    "version": "1.4",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Hielo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "Velocidad",
      "ATQ%"
    ],
    "conos": [
      {
        "es": "Seré mi propia espada",
        "en": "I Shall Be My Own Sword",
        "nota": "Firma · Prob. Crítico y daño creciente, la mejor",
        "best": true
      },
      {
        "es": "Sobre la caída de un eón",
        "en": "On the Fall of an Aeon",
        "nota": "4★ · +ATQ acumulable, la mejor F2P"
      },
      {
        "es": "Algo irremplazable",
        "en": "Something Irreplaceable",
        "nota": "5★ · +ATQ y daño tras eliminar o recibir golpe"
      },
      {
        "es": "Un voto secreto",
        "en": "A Secret Vow",
        "nota": "4★ · +daño accesible"
      }
    ],
    "reliquias": [
      {
        "es": "Cazador del bosque glacial (4pz)",
        "en": "Hunter of Glacial Forest",
        "nota": "+daño de Hielo y +Daño Crítico tras la definitiva",
        "best": true
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "+12% ATQ; con Velocidad alta escala mucho"
      },
      {
        "es": "Salsotto inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "alt · +8% Prob. Crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Jingliu",
        "agentes": "Jingliu · Bronya · Luocha/Huohuo · Fu Xuan/Pela",
        "best": true
      },
      {
        "nombre": "Doble Armonía",
        "agentes": "Jingliu · Bronya · Tingyun · Huohuo"
      },
      {
        "nombre": "Ruan Mei",
        "agentes": "Jingliu · Ruan Mei · Pela · Huohuo"
      }
    ],
    "consejo": "Entra en Marejada Trascendente drenando PV de los aliados: empareja con Luocha o Huohuo para sostener la vida y con Bronya para repetir su turno potenciado.",
    "ficha": {
      "nombreCompleto": "Jingliu",
      "faccion": "Xianzhou Luofu",
      "desc": "Legendaria espadachina y antigua líder de los Guardianes de Espada de la Xianzhou, sumida en la locura de la mara pero de un poder inigualable.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/97/Character_Jingliu_Splash_Art.png"
    }
  },
  {
    "id": "huohuo",
    "nombre": "Huohuo",
    "rareza": "5",
    "elemento": "Viento",
    "camino": "Abundancia",
    "version": "1.5",
    "estado": "ok",
    "cuerpo": {
      "principal": "PV%",
      "alt": "Terapia"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "Velocidad",
      "PV%",
      "Regeneración de Energía",
      "Terapia"
    ],
    "conos": [
      {
        "es": "Noche de terror",
        "en": "Night of Fright",
        "nota": "Firma · cura potenciada y regenera energía al equipo, la mejor",
        "best": true
      },
      {
        "es": "Momento perfecto",
        "en": "Perfect Timing",
        "nota": "4★ · convierte Res. de Efecto en curación, la mejor F2P"
      },
      {
        "es": "Quid pro quo",
        "en": "Quid Pro Quo",
        "nota": "4★ · devuelve energía a los aliados con poca energía"
      },
      {
        "es": "Cornucopia",
        "en": "Cornucopia",
        "nota": "3★ · +curación, muy accesible"
      }
    ],
    "reliquias": [
      {
        "es": "Transeúnte de la nube errante (4pz)",
        "en": "Passerby of Wandering Cloud",
        "nota": "+curación y un punto de habilidad al inicio del combate",
        "best": true
      },
      {
        "es": "Flota de los inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "+PV y +ATQ al equipo con 120 Velocidad"
      },
      {
        "es": "Vonwacq animado (2pz)",
        "en": "Sprightly Vonwacq",
        "nota": "alt · +Regen. de Energía y adelanta su acción si SPD≥120"
      }
    ],
    "equipos": [
      {
        "nombre": "Sostén universal",
        "agentes": "Huohuo · DPS (Jingliu/DHIL/Feixiao) · 2 apoyos",
        "best": true
      },
      {
        "nombre": "Hipercarry ATQ",
        "agentes": "DPS · Huohuo · Sparkle · Tingyun"
      }
    ],
    "consejo": "Su definitiva y talento devuelven energía a todo el equipo: dale Velocidad y algo de Regen. para curar y recargar antes que nadie. Escala con PV%.",
    "ficha": {
      "nombreCompleto": "Huohuo",
      "faccion": "Xianzhou Luofu",
      "desc": "Joven aprendiza de la Comisión Tenkong de la Xianzhou Luofu que exorciza espíritus junto a la cola maldita Tail; siempre temerosa, pero valiente.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/82/Character_Huohuo_Splash_Art.png"
    }
  },
  {
    "id": "guinaifen",
    "nombre": "Guinaifen",
    "rareza": "4",
    "elemento": "Fuego",
    "camino": "Nihilidad",
    "version": "1.4",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Efecto de Ruptura"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Fuego",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. de Efecto",
      "Velocidad",
      "ATQ%",
      "Efecto de Ruptura"
    ],
    "conos": [
      {
        "es": "La paciencia lo es todo",
        "en": "Patience Is All You Need",
        "nota": "5★ · +daño, Velocidad y potencia el DoT, la mejor",
        "best": true
      },
      {
        "es": "Buenas noches y dulces sueños",
        "en": "Good Night and Sleep Well",
        "nota": "4★ · +daño por cada debuff del enemigo, la mejor F2P"
      },
      {
        "es": "Ojos de la presa",
        "en": "Eyes of the Prey",
        "nota": "4★ · +daño de DoT y Prob. de Efecto"
      },
      {
        "es": "Volveremos a encontrarnos",
        "en": "We Will Meet Again",
        "nota": "4★ · golpe extra tras habilidad o definitiva"
      }
    ],
    "reliquias": [
      {
        "es": "Prisionero del confinamiento profundo (4pz)",
        "en": "Prisoner in Deep Confinement",
        "nota": "+ATQ e ignora DEF por cada DoT sobre el enemigo",
        "best": true
      },
      {
        "es": "Empresa comercial pancósmica (2pz)",
        "en": "Pan-Cosmic Commercial Enterprise",
        "nota": "+Prob. de Efecto y la convierte parcialmente en ATQ"
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "alt · +12% ATQ con Velocidad alta"
      }
    ],
    "equipos": [
      {
        "nombre": "DoT / Quemadura",
        "agentes": "Kafka · Black Swan · Guinaifen · Huohuo/Gallagher",
        "best": true
      },
      {
        "nombre": "Kafka mono-DoT",
        "agentes": "Kafka · Guinaifen · Pela · Luocha"
      }
    ],
    "consejo": "Aplica quemadura y reduce la RES del enemigo con su talento: asegúrale suficiente Prob. de Efecto y colócala en equipos de DoT con Kafka y Black Swan.",
    "ficha": {
      "nombreCompleto": "Guinaifen",
      "faccion": "Xianzhou Luofu",
      "desc": "Artista callejera y tragafuegos de la Xianzhou Luofu, popular streamer que difunde noticias y rumores por toda la nave.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/3/33/Character_Guinaifen_Splash_Art.png"
    }
  },
  {
    "id": "hanya",
    "nombre": "Hanya",
    "rareza": "4",
    "elemento": "Físico",
    "camino": "Armonía",
    "version": "1.5",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "ATQ%",
      "alt": "Daño Físico"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "Velocidad",
      "Regeneración de Energía",
      "ATQ%",
      "Prob. de Efecto"
    ],
    "conos": [
      {
        "es": "Recuerdos del pasado",
        "en": "Memories of the Past",
        "nota": "4★ · energía + ATQ, gran F2P",
        "best": true
      },
      {
        "es": "Pero la batalla no ha terminado",
        "en": "But the Battle Isn't Over",
        "nota": "5★ · energía a un aliado y buff de daño"
      },
      {
        "es": "¡Baila! ¡Baila! ¡Baila!",
        "en": "Dance! Dance! Dance!",
        "nota": "4★ · adelanta la acción del equipo"
      },
      {
        "es": "Engranajes acoplados",
        "en": "Meshing Cogs",
        "nota": "3★ · +energía, muy accesible"
      }
    ],
    "reliquias": [
      {
        "es": "Mensajero que recorre el ciberespacio (4pz)",
        "en": "Messenger Traversing Hackerspace",
        "nota": "+Velocidad; su definitiva acelera al equipo",
        "best": true
      },
      {
        "es": "Flota de los inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "con 120 Velocidad, +ATQ a todo el equipo"
      },
      {
        "es": "Vonwacq animado (2pz)",
        "en": "Sprightly Vonwacq",
        "nota": "alt · adelanta su acción si SPD≥120 para buffear antes"
      }
    ],
    "equipos": [
      {
        "nombre": "Buff a un hipercarry",
        "agentes": "Hanya · DPS de ATQ (Clara/Boothill/DHIL) · sostén · apoyo",
        "best": true
      },
      {
        "nombre": "Genera puntos + buff",
        "agentes": "DPS · Hanya · Tingyun · Luocha"
      }
    ],
    "consejo": "Marca al enemigo con Carga usando su habilidad y da ATQ+Velocidad a tu DPS con la definitiva: prioriza Velocidad, Regen. de Energía y algo de Prob. de Efecto.",
    "ficha": {
      "nombreCompleto": "Hanya",
      "faccion": "Xianzhou Luofu",
      "desc": "Interventora de la Comisión Tianji de la Xianzhou Luofu, encargada de perseguir a los infractores; hermana de Xueyi y firme cumplidora de la ley.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e8/Character_Hanya_Splash_Art.png"
    }
  },
  {
    "id": "xueyi",
    "nombre": "Xueyi",
    "rareza": "4",
    "elemento": "Cuántico",
    "camino": "Destrucción",
    "version": "1.6",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Cuántico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Efecto de Ruptura",
      "alt": "ATQ%"
    },
    "substats": [
      "Efecto de Ruptura",
      "Prob. Crítico",
      "Daño Crítico",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Sobre la caída de un eón",
        "en": "On the Fall of an Aeon",
        "nota": "4★ · +ATQ y +daño al romper, la mejor F2P",
        "best": true
      },
      {
        "es": "Seré mi propia espada",
        "en": "I Shall Be My Own Sword",
        "nota": "5★ · Prob. Crítico y daño creciente"
      },
      {
        "es": "Promesa indeleble",
        "en": "Indelible Promise",
        "nota": "4★ · +Efecto de Ruptura y crítico tras la definitiva"
      },
      {
        "es": "Un voto secreto",
        "en": "A Secret Vow",
        "nota": "4★ · +daño accesible"
      }
    ],
    "reliquias": [
      {
        "es": "Genio de las estrellas brillantes (4pz)",
        "en": "Genius of Brilliant Stars",
        "nota": "+daño Cuántico e ignora parte de la DEF",
        "best": true
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "+12% ATQ; escala con Velocidad alta"
      },
      {
        "es": "Talia: reino del bandidaje (2pz)",
        "en": "Talia: Kingdom of Banditry",
        "nota": "alt · +Efecto de Ruptura si SPD≥145 (build de Ruptura)"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Xueyi",
        "agentes": "Xueyi · Ruan Mei/Tingyun · sostén · apoyo",
        "best": true
      },
      {
        "nombre": "Ruptura / Super Ruptura",
        "agentes": "Xueyi · Trazacaminos (Armonía) · Ruan Mei · Gallagher"
      }
    ],
    "consejo": "Su talento suma daño extra según tu Efecto de Ruptura: combina crítico con Efecto de Ruptura, o hazla full Ruptura con el Trazacaminos de Armonía y Ruan Mei.",
    "ficha": {
      "nombreCompleto": "Xueyi",
      "faccion": "Xianzhou Luofu",
      "desc": "Verdugo de la Comisión Tianji de la Xianzhou Luofu, un cuerpo artificial sin memoria vinculado a Hanya que persigue almas fugitivas.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bc/Character_Xueyi_Splash_Art.png"
    }
  },
  {
    "id": "feixiao",
    "nombre": "Feixiao",
    "rareza": "5",
    "elemento": "Viento",
    "camino": "Cacería",
    "version": "2.5",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Viento",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "—"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Salgo a cazar",
        "en": "I Venture Forth to Hunt",
        "nota": "Firma · Prob. Crítico y potencia sus ataques de seguimiento, la mejor",
        "best": true
      },
      {
        "es": "Surcando el mar estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "4★ · +Prob. Crítico y ATQ contra enemigos débiles, la mejor F2P"
      },
      {
        "es": "Bajo el cielo azul",
        "en": "Under the Blue Sky",
        "nota": "4★ · +ATQ y Prob. Crítico tras eliminar"
      },
      {
        "es": "Esgrima",
        "en": "Swordplay",
        "nota": "4★ · +daño al golpear repetidamente al mismo objetivo"
      }
    ],
    "reliquias": [
      {
        "es": "Valeroso surcavientos (4pz)",
        "en": "The Wind-Soaring Valorous",
        "nota": "+ATQ y +Daño Crítico a los ataques de seguimiento tras la definitiva",
        "best": true
      },
      {
        "es": "Duran, dinastía de los lobos errantes (2pz)",
        "en": "Duran, Dynasty of Running Wolves",
        "nota": "acumula con seguimientos: +daño y, a 5 cargas, +Daño Crítico"
      },
      {
        "es": "Gran duque de las cenizas llameantes (4pz)",
        "en": "The Ashblazing Grand Duke",
        "nota": "alt · +daño de los ataques de seguimiento"
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry Feixiao (dúo ideal)",
        "agentes": "Feixiao · Robin · Siete de Marzo (Caza) · Aventurino/Lingsha",
        "best": true
      },
      {
        "nombre": "Ataques de seguimiento",
        "agentes": "Feixiao · Topaz/Siete de Marzo (Caza) · Robin · Aventurino"
      },
      {
        "nombre": "Doble Armonía",
        "agentes": "Feixiao · Robin · Bronya/Sparkle · Lingsha"
      }
    ],
    "consejo": "Acumula Aureos Volantes con sus ataques de seguimiento para desatar la Ultra; empareja con Robin y una Siete de Marzo (Caza). Su cuerda va en ATQ% (no usa energía).",
    "ficha": {
      "nombreCompleto": "Feixiao",
      "faccion": "Xianzhou Luofu (Garra de Merlin)",
      "desc": "Marquesa 'Garra de Merlín' y una de las Siete Arbitros-Generales de la Xianzhou; foxiana intrépida y temeraria en la batalla.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/61/Character_Feixiao_Splash_Art.png"
    }
  },
  {
    "id": "yunli",
    "nombre": "Yunli",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Destrucción",
    "version": "2.4",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Físico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "¡Baila! ¡Al atardecer!",
        "en": "Dance! At Sunset!",
        "nota": "Cono de firma: aumenta Daño Crítico y potencia enormemente su contraataque y Golpe Definitivo tras recibir ataques.",
        "best": true
      },
      {
        "es": "El lado inalcanzable",
        "en": "The Unreachable Side",
        "nota": "Prob. Crítico + Daño tras recibir daño o gastar PV; excelente sustituto de Destrucción.",
        "best": false
      },
      {
        "es": "Tras la caída de un eón",
        "en": "On the Fall of an Aeon",
        "nota": "ATQ y Daño acumulables al atacar; muy sólido y accesible.",
        "best": false
      },
      {
        "es": "Un juramento secreto",
        "en": "A Secret Vow",
        "nota": "Opción 4★ gratuita: Daño extra contra enemigos con más PV%.",
        "best": false
      },
      {
        "es": "Los Topos te dan la bienvenida",
        "en": "The Moles Welcome You",
        "nota": "4★ gratuito de Destrucción: ATQ acumulable al usar habilidades/Definitivo.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "El valeroso surcavientos (4pz)",
        "en": "The Wind-Soaring Valorous",
        "nota": "4pz cavernas: +ATQ y gran bonus al Daño de ataque en cadena/contraataque tras el Definitivo. Set ideal.",
        "best": true
      },
      {
        "es": "Duran, dinastía de lobos raudos (2pz)",
        "en": "Duran, Dynasty of Running Wolves",
        "nota": "Adorno planar: acumula Daño de ataque en cadena y otorga Daño Crítico al llegar a 5 pilas.",
        "best": true
      },
      {
        "es": "Salsotto inerte / Arena rutilante",
        "en": "Inert Salsotto / Rutilant Arena",
        "nota": "Alternativas planares de Prob. Crítico si aún no tienes Duran.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Contraataque estelar",
        "agentes": [
          "Yunli",
          "Robin",
          "Tingyun",
          "Huohuo"
        ],
        "best": true
      },
      {
        "nombre": "Ritmo de Sunday",
        "agentes": [
          "Yunli",
          "Sunday",
          "Tingyun",
          "Aventurino"
        ],
        "best": false
      }
    ],
    "consejo": "Yunli brilla contrarrestando: usa 'Cortasoles' (habilidad de parada) justo antes de un golpe enemigo para desatar su contraataque en área con crítico garantizado. Prioriza que ataquen a Yunli y busca ~2000+ de ATQ con un ratio 1:2 de Prob./Daño Crítico.",
    "ficha": {
      "nombreCompleto": "Yunli",
      "faccion": "Xianzhou Luofu",
      "desc": "Heredera de la Fragua Celeste de la Nave Zhuming afincada en el Luofu, espadachina impetuosa y directa que domina el arte de la contra. Su estilo de combate se basa en absorber el golpe enemigo y devolverlo multiplicado.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/72/Character_Yunli_Splash_Art.png"
    }
  },
  {
    "id": "jiaoqiu",
    "nombre": "Jiaoqiu",
    "rareza": "5",
    "elemento": "Fuego",
    "camino": "Nihilidad",
    "version": "2.4",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. de Efecto",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Fuego",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "Velocidad",
      "Prob. de Efecto",
      "ATQ%",
      "PV%"
    ],
    "conos": [
      {
        "es": "Aquellas mil primaveras",
        "en": "Those Many Springs",
        "nota": "Cono de firma: sube Prob. de Efecto e inflige un veneno que amplifica el daño recibido por el enemigo.",
        "best": true
      },
      {
        "es": "Solo necesitas paciencia",
        "en": "Patience Is All You Need",
        "nota": "ATQ, Daño y aplicación de veneno; buena densidad de estadísticas ofensivas.",
        "best": false
      },
      {
        "es": "Fermata",
        "en": "Fermata",
        "nota": "4★: Prob. de Efecto y Daño extra a enemigos con Shock/Contagio; sólido y accesible.",
        "best": false
      },
      {
        "es": "La resolución brilla como perlas de sudor",
        "en": "Resolution Shines As Pearls of Sweat",
        "nota": "4★ gratuito: gran Prob. de Efecto y reducción de DEF al aplicar debuffs.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Prisionero en confinamiento profundo (4pz)",
        "en": "Prisoner in Deep Confinement",
        "nota": "4pz cavernas: +ATQ e ignora DEF por cada DoT en el enemigo; muy potente en él.",
        "best": true
      },
      {
        "es": "Quilla rota (2pz)",
        "en": "Broken Keel",
        "nota": "Adorno planar: con 30%+ de RES a Efecto, otorga Daño Crítico a todo el equipo; ideal como amplificador.",
        "best": true
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "Alternativa planar de ATQ si vas muy rápido (135/160 Velocidad).",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Núcleo de Nihilidad (Acheron)",
        "agentes": [
          "Acheron",
          "Jiaoqiu",
          "Pela",
          "Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "Hipercarry de Fuego",
        "agentes": [
          "Jiaoqiu",
          "Firefly",
          "Fugue",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Jiaoqiu es un debuffer amplificador: su marca 'Tostado' hace que el enemigo reciba más daño y se acumula hasta un tope elevado con su Definitivo. Alcanza al menos 80% de Prob. de Efecto para fijar los debuffs y prioriza Velocidad para reaplicarlos rápido. Es la pareja soñada de Acheron.",
    "ficha": {
      "nombreCompleto": "Jiaoqiu",
      "faccion": "Xianzhou Luofu",
      "desc": "Foxian y comandante del Cuerpo de Alquimistas del Luofu, tan sagaz con las especias como con las estratagemas. Debilita a los enemigos untándolos de un abrasador ardor que multiplica el daño que sufren.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/b/be/Character_Jiaoqiu_Splash_Art.png"
    }
  },
  {
    "id": "lingsha",
    "nombre": "Lingsha",
    "rareza": "5",
    "elemento": "Fuego",
    "camino": "Abundancia",
    "version": "2.5",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Terapia"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Fuego",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Efecto de Ruptura",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Efecto de Ruptura",
      "Velocidad",
      "ATQ%",
      "PV%"
    ],
    "conos": [
      {
        "es": "Solo el aroma permanece fiel",
        "en": "Scent Alone Stays True",
        "nota": "Cono de firma: gran Efecto de Ruptura y un debuff que aumenta el daño que recibe el enemigo.",
        "best": true
      },
      {
        "es": "Ecos del ataúd",
        "en": "Echoes of the Coffin",
        "nota": "Da ATQ y Velocidad a todo el equipo y genera mucha energía; excelente aunque no aporte Ruptura.",
        "best": false
      },
      {
        "es": "¿Qué es lo real?",
        "en": "What Is Real?",
        "nota": "4★ gratuito: Efecto de Ruptura y curación al usar la habilidad; mejor opción sin gasto.",
        "best": false
      },
      {
        "es": "El calor acorta las noches frías",
        "en": "Warmth Shortens Cold Nights",
        "nota": "4★ de Abundancia: PV% y curación; sencillo sustituto de sustain.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Caballería de hierro plaguicida (2pz) + Relojero, maestro de maquinaciones oníricas (2pz)",
        "en": "Iron Cavalry Against the Scourge / Watchmaker, Master of Dream Machinations",
        "nota": "Doble 2pz: máximo Efecto de Ruptura. También 2pz Ruptura + Mensajero (Velocidad).",
        "best": true
      },
      {
        "es": "Forja del farol de Kalpagni (2pz)",
        "en": "Forge of the Kalpagni Lantern",
        "nota": "Adorno planar: +Efecto de Ruptura y Velocidad al golpear enemigos débiles a Fuego. Mejor en su elemento.",
        "best": true
      },
      {
        "es": "Talia: reino del bandidaje (2pz)",
        "en": "Talia: Kingdom of Banditry",
        "nota": "Alternativa planar de Efecto de Ruptura con umbral de Velocidad más bajo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura de Fuego (Firefly)",
        "agentes": [
          "Firefly",
          "Ruan Mei",
          "Fugue",
          "Lingsha"
        ],
        "best": true
      },
      {
        "nombre": "Super Ruptura genérica",
        "agentes": [
          "Rappa",
          "Ruan Mei",
          "Fugue",
          "Lingsha"
        ],
        "best": false
      }
    ],
    "consejo": "Lingsha es sanadora y sub-DPS de Ruptura a la vez: su invocación Fuyuan cura, limpia debuffs y ataca aplicando Ruptura pasiva. Apunta a ~2800 ATQ, 200% de Efecto de Ruptura y 134+ de Velocidad. Es la mejor sustain para equipos de Firefly y Ruptura.",
    "ficha": {
      "nombreCompleto": "Lingsha",
      "faccion": "Xianzhou Luofu",
      "desc": "Directora del Salón Wardance y perfumista de la Nave Zhuming, serena y resolutiva. Combate junto a su invocación de fuego Fuyuan, sanando al equipo mientras castiga a los enemigos con daño de Ruptura.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c1/Character_Lingsha_Splash_Art.png"
    }
  },
  {
    "id": "moze",
    "nombre": "Moze",
    "rareza": "4",
    "elemento": "Rayo",
    "camino": "Cacería",
    "version": "2.5",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Rayo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Preocupante y dichoso",
        "en": "Worrisome, Blissful",
        "nota": "5★ de Cacería: Prob. Crítico y gran bonus al ataque en cadena; ideal para su golpe de la presa.",
        "best": true
      },
      {
        "es": "Surcando el mar estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "Prob. Crítico y ATQ contra enemigos con poca vida; muy fuerte y de battle pass.",
        "best": false
      },
      {
        "es": "La seriedad del desayuno",
        "en": "The Seriousness of Breakfast",
        "nota": "4★ gratuito: ATQ% y Daño acumulable; excelente opción sin gasto.",
        "best": false
      },
      {
        "es": "Esgrima",
        "en": "Swordplay",
        "nota": "4★ gratuito: Daño acumulable al golpear al mismo objetivo repetidamente.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "El valeroso surcavientos (4pz)",
        "en": "The Wind-Soaring Valorous",
        "nota": "4pz cavernas: +ATQ y fuerte bonus al Daño de ataque en cadena tras el Definitivo. Su mejor set.",
        "best": true
      },
      {
        "es": "Duran, dinastía de lobos raudos (2pz)",
        "en": "Duran, Dynasty of Running Wolves",
        "nota": "Adorno planar: acumula Daño de ataque en cadena y da Daño Crítico a 5 pilas.",
        "best": true
      },
      {
        "es": "Salsotto inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "Alternativa planar de Prob. Crítico con bonus al ataque en cadena/Definitivo.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Ataque en cadena (Feixiao)",
        "agentes": [
          "Feixiao",
          "Moze",
          "Robin",
          "Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "FUA con March 7ª",
        "agentes": [
          "Feixiao",
          "Moze",
          "Robin",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Moze es un sub-DPS 4★ de ataque en cadena que marca a un enemigo como 'Presa': al golpearlo, salta y detona daño extra. Encaja perfecto en equipos de FUA junto a Feixiao y Robin. Prioriza Prob./Daño Crítico y algo de Velocidad; su energía es hambrienta, así que una cuerda de Regeneración ayuda.",
    "ficha": {
      "nombreCompleto": "Moze",
      "faccion": "Xianzhou Luofu (Garra de Merlin)",
      "desc": "Agente encubierto al servicio del general Jing Yuan en el Luofu, callado y letal. Caza a sus objetivos marcándolos como presa y descargando sobre ellos relámpagos en persecución implacable.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/81/Character_Moze_Splash_Art.png"
    }
  },
  {
    "id": "fugue",
    "nombre": "Fugue",
    "rareza": "5",
    "elemento": "Fuego",
    "camino": "Nihilidad",
    "version": "2.7",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Efecto de Ruptura"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Fuego",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Efecto de Ruptura",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Efecto de Ruptura",
      "Velocidad",
      "ATQ%",
      "Prob. de Efecto"
    ],
    "conos": [
      {
        "es": "El largo camino a casa",
        "en": "Long Road Leads Home",
        "nota": "Cono de firma: enorme Efecto de Ruptura y un debuff que aumenta el Daño de Ruptura recibido al romper al enemigo.",
        "best": true
      },
      {
        "es": "La resolución brilla como perlas de sudor",
        "en": "Resolution Shines As Pearls of Sweat",
        "nota": "Mejor 4★ gratuito: Prob. de Efecto y reducción de DEF al aplicar debuffs.",
        "best": false
      },
      {
        "es": "Recuerdos del pasado",
        "en": "Memories of the Past",
        "nota": "4★ de battle pass: Efecto de Ruptura y generación de energía extra al atacar.",
        "best": false
      },
      {
        "es": "Ojos de la presa",
        "en": "Eyes of the Prey",
        "nota": "4★: Prob. de Efecto y Daño de DoT; alternativa para fijar el debuff de DEF.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Caballería de hierro plaguicida (4pz)",
        "en": "Iron Cavalry Against the Scourge",
        "nota": "4pz cavernas: +Efecto de Ruptura y su Daño de Ruptura/Super Ruptura ignora DEF con 150/250%+ de Ruptura.",
        "best": true
      },
      {
        "es": "Talia: reino del bandidaje (2pz)",
        "en": "Talia: Kingdom of Banditry",
        "nota": "Adorno planar por defecto: +Efecto de Ruptura con umbral de Velocidad. Ante enemigos débiles a Fuego, mejor Forja de Kalpagni.",
        "best": true
      },
      {
        "es": "Ladrón de meteoros fugaces (2pz+2pz)",
        "en": "Thief of Shooting Meteor",
        "nota": "Alternativa de cavernas si tienes buenas subestadísticas de Ruptura.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura de Fuego (Firefly)",
        "agentes": [
          "Firefly",
          "Fugue",
          "Ruan Mei",
          "Lingsha"
        ],
        "best": true
      },
      {
        "nombre": "Super Ruptura (Boothill/Rappa)",
        "agentes": [
          "Boothill",
          "Fugue",
          "Ruan Mei",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Fugue (avatar de Tingyun) es la activadora definitiva de Super Ruptura: su habilidad presta parte de su Efecto de Ruptura al DPS y su marca genera 'Contraataque de espuma' que aplica tenacidad exo para reactivar la Ruptura. Busca ~220% de Efecto de Ruptura y 67% de Prob. de Efecto para asegurar la reducción de DEF.",
    "ficha": {
      "nombreCompleto": "Tingyun • Fugue",
      "faccion": "Xianzhou Zhuming",
      "desc": "Encarnación de Tingyun tras fundirse con el Emanador de Fuli, más fría y calculadora que la mercader foxiana original. Rompe las defensas enemigas potenciando la Ruptura de todo el equipo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/4/4c/Character_Fugue_Splash_Art.png"
    }
  },
  {
    "id": "silver-wolf",
    "nombre": "Silver Wolf",
    "rareza": "5",
    "elemento": "Cuántico",
    "camino": "Nihilidad",
    "version": "1.1",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. de Efecto",
      "alt": "ATQ%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Cuántico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Velocidad",
      "Prob. de Efecto",
      "ATQ%",
      "Daño Cuántico"
    ],
    "conos": [
      {
        "es": "Lluvia incesante",
        "en": "Incessant Rain",
        "nota": "Cono de firma: Prob. de Efecto y aplica 'Aprensión' que sube el daño recibido; sinergia perfecta con su reducción de DEF.",
        "best": true
      },
      {
        "es": "Antes de que empiece la misión tutorial",
        "en": "Before the Tutorial Mission Starts",
        "nota": "4★ gratuito: mucha Prob. de Efecto y regeneración de energía al reducir DEF; su mejor F2P.",
        "best": false
      },
      {
        "es": "Ojos de la presa",
        "en": "Eyes of the Prey",
        "nota": "4★: Prob. de Efecto y Daño de DoT; alternativa económica de Nihilidad.",
        "best": false
      },
      {
        "es": "Buenas noches y que descanses",
        "en": "Good Night and Sleep Well",
        "nota": "4★: Daño extra por cada debuff en el enemigo; escala con su kit de debuffeo.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Genio de estrellas brillantes (4pz)",
        "en": "Genius of Brilliant Stars",
        "nota": "4pz cavernas: +Daño Cuántico e ignora DEF adicional, reforzando su papel de reductora de DEF.",
        "best": true
      },
      {
        "es": "Empresa comercial pancósmica (2pz)",
        "en": "Pan-Cosmic Commercial Enterprise",
        "nota": "Adorno planar: +Prob. de Efecto y convierte ese exceso en ATQ; ideal para ella.",
        "best": true
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "Alternativa planar de ATQ si buscas más daño propio con alta Velocidad.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Núcleo de Nihilidad (Acheron)",
        "agentes": [
          "Acheron",
          "Silver Wolf",
          "Pela",
          "Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "Hipercarry Cuántico",
        "agentes": [
          "Silver Wolf",
          "Seele",
          "Sparkle",
          "Huohuo"
        ],
        "best": false
      }
    ],
    "consejo": "Silver Wolf es la mejor debuffer de control: implanta debilidades elementales (útil contra enemigos sin debilidad a tu DPS) y apila reducción de DEF con cada acción. Es cuenta-debuffs viviente para Acheron. Prioriza Prob. de Efecto (~80%+) y Velocidad; su daño propio es secundario.",
    "ficha": {
      "nombreCompleto": "Silver Wolf",
      "faccion": "Cazadores de Estelarones",
      "desc": "Hacker prodigio de los Cazadores de Estelarones que trata el universo como un videojuego a modo. Reescribe la 'programación' del combate implantando debilidades y bugs de defensa en sus enemigos.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/60/Character_Silver_Wolf_Splash_Art.png"
    }
  },
  {
    "id": "kafka",
    "nombre": "Kafka",
    "rareza": "5",
    "elemento": "Rayo",
    "camino": "Nihilidad",
    "version": "1.2",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Prob. de Efecto"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Rayo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "ATQ%",
      "Velocidad",
      "Prob. de Efecto",
      "Daño de Rayo"
    ],
    "conos": [
      {
        "es": "Solo necesitas paciencia",
        "en": "Patience Is All You Need",
        "nota": "Cono de firma: ATQ, Velocidad y aplica Shock que amplifica su detonación de DoT.",
        "best": true
      },
      {
        "es": "Buenas noches y que descanses",
        "en": "Good Night and Sleep Well",
        "nota": "Mejor 4★ gratuito: Daño extra escalado por la cantidad de debuffs en el enemigo.",
        "best": false
      },
      {
        "es": "Ojos de la presa",
        "en": "Eyes of the Prey",
        "nota": "4★: Prob. de Efecto y +Daño de DoT; alternativa muy accesible.",
        "best": false
      },
      {
        "es": "Nos volveremos a encontrar",
        "en": "We Will Meet Again",
        "nota": "4★ gratuito: golpe extra de Daño adicional; sencillo pero funcional.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Prisionero en confinamiento profundo (4pz)",
        "en": "Prisoner in Deep Confinement",
        "nota": "4pz cavernas: +ATQ e ignora DEF por cada DoT en el objetivo; su set definitivo.",
        "best": true
      },
      {
        "es": "Estación de sellado espacial (2pz)",
        "en": "Space Sealing Station",
        "nota": "Adorno planar: +ATQ (doblado con alta Velocidad); maximiza el escalado de sus DoT.",
        "best": true
      },
      {
        "es": "Vanguardia del firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "Alternativa planar de ATQ si superas los umbrales de Velocidad.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "DoT clásico",
        "agentes": [
          "Kafka",
          "Black Swan",
          "Ruan Mei",
          "Huohuo"
        ],
        "best": true
      },
      {
        "nombre": "DoT con Jiaoqiu",
        "agentes": [
          "Kafka",
          "Black Swan",
          "Jiaoqiu",
          "Aventurino"
        ],
        "best": false
      }
    ],
    "consejo": "Kafka es la reina del daño con el tiempo: su Definitivo detona instantáneamente todos los DoT del enemigo y su habilidad los reaplica. Combina de maravilla con Black Swan (Contagio) y Ruan Mei. Al ser daño de DoT, prioriza ATQ% (no crítico), Velocidad y suficiente Prob. de Efecto para fijar el Shock.",
    "ficha": {
      "nombreCompleto": "Kafka",
      "faccion": "Cazadores de Estelarones",
      "desc": "Miembro de élite de los Cazadores de Estelarones, elegante e imperturbable, con un misterioso vínculo con el Trailblazer. Electrocuta a sus rivales sembrando Shock y detonando el daño acumulado a voluntad.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/95/Character_Kafka_Splash_Art.png"
    }
  },
  {
    "id": "blade",
    "nombre": "Blade",
    "rareza": "5",
    "elemento": "Viento",
    "camino": "Destrucción",
    "version": "1.2",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Viento",
      "alt": "PV%"
    },
    "cuerda": {
      "principal": "PV%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "PV%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "El lado inalcanzable",
        "en": "The Unreachable Side",
        "nota": "Cono de firma: Prob. Crítico y +Daño al gastar PV; hecho a medida para su estilo de sacrificio de vida.",
        "best": true
      },
      {
        "es": "Tras la caída de un eón",
        "en": "On the Fall of an Aeon",
        "nota": "ATQ acumulable e ignorar DEF tras Ruptura; alternativa fuerte de battle pass.",
        "best": false
      },
      {
        "es": "Un juramento secreto",
        "en": "A Secret Vow",
        "nota": "Mejor 4★ gratuito: +Daño simple y efectivo para sus multigolpes.",
        "best": false
      },
      {
        "es": "No hay escapatoria",
        "en": "Nowhere to Run",
        "nota": "4★ gratuito: recupera PV al matar, sinergiza con su ciclo de PV.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Discípulo longevo (4pz)",
        "en": "Longevous Disciple",
        "nota": "4pz cavernas: +PV% y gran Prob. Crítico al recibir daño/gastar PV; su set ideal.",
        "best": true
      },
      {
        "es": "Arena rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "Adorno planar: +Prob. Crítico y Daño de habilidad/ataque básico potenciado a 70% de crítico.",
        "best": true
      },
      {
        "es": "Salsotto inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "Alternativa planar de Prob. Crítico; más fácil de conseguir buenas subestadísticas.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry de Blade",
        "agentes": [
          "Blade",
          "Bronya",
          "Ruan Mei",
          "Luocha"
        ],
        "best": true
      },
      {
        "nombre": "Follow-up con Jade",
        "agentes": [
          "Blade",
          "Jade",
          "Ruan Mei",
          "Luocha"
        ],
        "best": false
      }
    ],
    "consejo": "Blade escala su daño con sus PV máximos y gasta vida para golpear más fuerte, así que necesita una sanadora fiable (Luocha es perfecta). Reparte tus estadísticas entre PV% y Crítico, mantén ~134 de Velocidad y deja que su contraataque y Definitivo hagan el trabajo.",
    "ficha": {
      "nombreCompleto": "Blade",
      "faccion": "Cazadores de Estelarones",
      "desc": "Espadachín inmortal de los Cazadores de Estelarones atormentado por su pasado en el Luofu como Yingxing. Blande su propia sangre y dolor como arma, cortando a los enemigos a costa de su vida.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/1/16/Character_Blade_Splash_Art.png"
    }
  },
  {
    "id": "firefly",
    "nombre": "Firefly",
    "rareza": "5",
    "elemento": "Fuego",
    "camino": "Destrucción",
    "version": "2.3",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Efecto de Ruptura"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Fuego",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Efecto de Ruptura",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Efecto de Ruptura",
      "Velocidad",
      "ATQ%",
      "PV%"
    ],
    "conos": [
      {
        "es": "Dónde deberían descansar los sueños",
        "en": "Whereabouts Should Dreams Rest",
        "nota": "Cono de firma: gran Efecto de Ruptura, +Velocidad y su Daño de Ruptura ignora DEF; diseñado para ella.",
        "best": true
      },
      {
        "es": "Tras la caída de un eón",
        "en": "On the Fall of an Aeon",
        "nota": "ATQ acumulable e ignorar DEF tras Ruptura; excelente sustituto de battle pass.",
        "best": false
      },
      {
        "es": "Promesa indeleble",
        "en": "Indelible Promise",
        "nota": "Mejor 4★ gratuito: +Efecto de Ruptura y bonus de daño al usar el Definitivo.",
        "best": false
      },
      {
        "es": "Los Topos te dan la bienvenida",
        "en": "The Moles Welcome You",
        "nota": "4★ gratuito: ATQ acumulable; opción de emergencia si te falta Ruptura.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Caballería de hierro plaguicida (4pz)",
        "en": "Iron Cavalry Against the Scourge",
        "nota": "4pz cavernas: +Efecto de Ruptura y su Ruptura/Super Ruptura ignora DEF con 150/250%+; su mejor set.",
        "best": true
      },
      {
        "es": "Forja del farol de Kalpagni (2pz)",
        "en": "Forge of the Kalpagni Lantern",
        "nota": "Adorno planar: +Efecto de Ruptura y Velocidad al golpear enemigos débiles a Fuego; perfecto para ella.",
        "best": true
      },
      {
        "es": "Talia: reino del bandidaje (2pz)",
        "en": "Talia: Kingdom of Banditry",
        "nota": "Alternativa planar de Efecto de Ruptura si no hay enemigos débiles a Fuego.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Super Ruptura definitiva",
        "agentes": [
          "Firefly",
          "Fugue",
          "Ruan Mei",
          "Lingsha"
        ],
        "best": true
      },
      {
        "nombre": "Firefly con Trailblazer",
        "agentes": [
          "Firefly",
          "Trailblazer (Armonía)",
          "Ruan Mei",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Firefly (SAM) es la reina de la Super Ruptura: su Definitivo la mete en estado mejorado subiendo brutalmente su Efecto de Ruptura y Velocidad. Necesita ~360 de Ataque y muchísima Ruptura (con Fugue y Ruan Mei alcanza los umbrales). Rompe rápido a los enemigos y encadena Super Ruptura sin parar.",
    "ficha": {
      "nombreCompleto": "Firefly (SAM)",
      "faccion": "Cazadores de Estelarones",
      "desc": "Piloto de los Stellaron Hunters y última superviviente del Proyecto Glamoth, enferma de entropía pero decidida a hallar un mundo libre. Pilota el mecha SAM para incinerar a sus enemigos con Ruptura ígnea.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/3/38/Character_Firefly_Splash_Art.png"
    }
  },
  {
    "id": "luocha",
    "nombre": "Luocha",
    "rareza": "5",
    "elemento": "Imaginario",
    "camino": "Abundancia",
    "version": "1.1",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Terapia"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "ATQ%",
      "alt": "Daño Imaginario"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "ATQ%",
      "Velocidad",
      "Terapia",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Ecos del ataúd",
        "en": "Echoes of the Coffin",
        "nota": "Cono de firma: +ATQ, gran generación de energía y +Velocidad a todo el equipo tras el Definitivo.",
        "best": true
      },
      {
        "es": "El tiempo no espera a nadie",
        "en": "Time Waits for No One",
        "nota": "5★ de Abundancia: ATQ y curación que se convierte en daño extra; muy versátil.",
        "best": false
      },
      {
        "es": "Conversación posoperatoria",
        "en": "Post-Op Conversation",
        "nota": "Mejor 4★ gratuito: Regeneración de Energía y +curación; ayuda a girar antes su Definitivo.",
        "best": false
      },
      {
        "es": "Sentimiento compartido",
        "en": "Shared Feeling",
        "nota": "4★: +curación y genera energía para todo el equipo al usar habilidad.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Transeúnte de nube errante (4pz)",
        "en": "Passerby of Wandering Cloud",
        "nota": "4pz cavernas: +Terapia y recarga habilidades al inicio; el set sanador estándar y su mejor opción.",
        "best": true
      },
      {
        "es": "Flota de los longevos (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "Adorno planar: +PV% y +ATQ para todo el equipo con 120+ de Velocidad; aporte ofensivo al grupo.",
        "best": true
      },
      {
        "es": "Quilla rota (2pz)",
        "en": "Broken Keel",
        "nota": "Alternativa planar: RES a Efecto y Daño Crítico de equipo; útil si quieres buffear al DPS.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Sustain universal (DoT)",
        "agentes": [
          "Kafka",
          "Black Swan",
          "Ruan Mei",
          "Luocha"
        ],
        "best": true
      },
      {
        "nombre": "Soporte de Blade",
        "agentes": [
          "Blade",
          "Bronya",
          "Ruan Mei",
          "Luocha"
        ],
        "best": false
      }
    ],
    "consejo": "Luocha es la sanadora más cómoda del juego: cura en automático cuando un aliado baja de cierto PV, sin gastar turno, y su Definitivo limpia un buff enemigo. Con poca inversión ya sostiene al equipo; solo asegúrate de superar el umbral de ATQ que activa su curación y añade algo de Velocidad y Regeneración de Energía.",
    "ficha": {
      "nombreCompleto": "Luocha",
      "faccion": "Comerciante errante",
      "desc": "Enigmático mercader errante y consumado sanador que porta siempre un ataúd. Bajo su cortesía se esconde un Emanador de la Abundancia con motivos ocultos, capaz de restaurar a los aliados sin esfuerzo aparente.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a5/Character_Luocha_Splash_Art.png"
    }
  },
  {
    "id": "dr-ratio",
    "nombre": "Dr. Ratio",
    "rareza": "5",
    "elemento": "Imaginario",
    "camino": "Cacería",
    "version": "1.6",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": "Prob. Crítico si el cono/apoyo no aporta crítico"
    },
    "pies": {
      "principal": "ATQ%",
      "alt": "Velocidad si necesitas actuar antes que los debuffadores"
    },
    "esfera": {
      "principal": "Daño Imaginario",
      "alt": "ATQ% si te falta Daño Imaginario"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía si vas sin batería"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Bautismo de Pensamiento Puro",
        "en": "Baptism of Pure Thought",
        "nota": "Cono de firma: Daño Crítico enorme y bono por debuffs; ideal en equipos con muchos debuffs",
        "best": true
      },
      {
        "es": "Surcar el Mar Estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "4★ tienda de Herta: Prob. Crítico y ATQ contra enemigos con poca vida",
        "best": false
      },
      {
        "es": "Solo Queda el Silencio",
        "en": "Only Silence Remains",
        "nota": "4★ F2P: Prob. Crítico y ATQ, mejor con pocos enemigos",
        "best": false
      },
      {
        "es": "Esgrima",
        "en": "Swordplay",
        "nota": "4★ F2P para objetivo único: apila daño golpeando al mismo enemigo",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Genio de las Estrellas Fulgurantes (4pz)",
        "en": "Genius of Brilliant Stars",
        "nota": "Cavernas: +Daño Imaginario e ignora parte de la DEF enemiga; set BiS",
        "best": true
      },
      {
        "es": "Vanguardia del Firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "Planar: +ATQ escalado con Velocidad (mejor con 135+ vel)",
        "best": true
      },
      {
        "es": "Reino Divino de Izumo y Takama (2pz)",
        "en": "Izumo Gensei and Takama Divine Realm",
        "nota": "Planar alt: +Prob. Crítico con aliado del mismo camino",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry FUA",
        "agentes": [
          "Dr. Ratio",
          "Robin",
          "Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "Sinergia de seguimiento",
        "agentes": [
          "Dr. Ratio",
          "Topaz y Conti",
          "Tingyun",
          "Aventurino"
        ],
        "best": false
      },
      {
        "nombre": "Debuffs",
        "agentes": [
          "Dr. Ratio",
          "Pela",
          "Ruan Mei",
          "Huohuo"
        ],
        "best": false
      }
    ],
    "consejo": "Mantén 4+ debuffs sobre el objetivo para maximizar los golpes de seguimiento y el daño del ultimate. No necesita mucha Velocidad porque su seguimiento depende de que aliados debuffen al enemigo.",
    "ficha": {
      "nombreCompleto": "Dr. Ratio (Verityn)",
      "faccion": "Gremio Intelligentsia / IPC",
      "desc": "Genio arrogante y erudito del Gremio de la Intelligentsia de la IPC. Menospreciado por la Sociedad de Genios, se dedica a resolver los problemas de la humanidad con su intelecto implacable.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/56/Character_Dr._Ratio_Splash_Art.png"
    }
  },
  {
    "id": "ruan-mei",
    "nombre": "Ruan Mei",
    "rareza": "5",
    "elemento": "Hielo",
    "camino": "Armonía",
    "version": "1.6",
    "estado": "ok",
    "cuerpo": {
      "principal": "PV% / DEF%",
      "alt": "Efecto de Ruptura si priorizas ruptura"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": ""
    },
    "esfera": {
      "principal": "PV% / DEF%",
      "alt": ""
    },
    "cuerda": {
      "principal": "Efecto de Ruptura",
      "alt": "Regeneración de Energía para ultimate más frecuente"
    },
    "substats": [
      "Velocidad",
      "Efecto de Ruptura",
      "PV%",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "El Reflejo del Pasado",
        "en": "Past Self in Mirror",
        "nota": "Cono de firma: +Efecto de Ruptura, regenera puntos de habilidad y da bono de daño al equipo",
        "best": true
      },
      {
        "es": "Pero la Batalla No Ha Terminado",
        "en": "But the Battle Isn't Over",
        "nota": "5★ tienda: regenera puntos de habilidad y da bono de daño a un aliado",
        "best": false
      },
      {
        "es": "¡Baila! ¡Baila! ¡Baila!",
        "en": "Dance! Dance! Dance!",
        "nota": "4★ F2P: adelanta la acción del equipo al usar el ultimate",
        "best": false
      },
      {
        "es": "Memorias del Pasado",
        "en": "Memories of the Past",
        "nota": "4★ F2P: batería de energía y ATQ; opción barata",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Relojero, Maestro de las Maquinaciones Oníricas (4pz)",
        "en": "Watchmaker, Master of Dream Machinations",
        "nota": "Cavernas: al usar ultimate sobre un aliado, +Efecto de Ruptura a todo el equipo; BiS para ruptura",
        "best": true
      },
      {
        "es": "Talia: Reino del Bandidaje (2pz)",
        "en": "Talia: Kingdom of Banditry",
        "nota": "Planar: +Efecto de Ruptura (y bono extra con 145+ Velocidad)",
        "best": true
      },
      {
        "es": "Flota de los Inmortales (2pz)",
        "en": "Fleet of the Ageless",
        "nota": "Planar alt: +PV% y +ATQ al equipo con 120+ Velocidad",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura (superrotura)",
        "agentes": [
          "Ruan Mei",
          "Firefly",
          "Trailblazer (Armonía)",
          "Gallagher"
        ],
        "best": true
      },
      {
        "nombre": "Soporte universal",
        "agentes": [
          "Ruan Mei",
          "Acheron",
          "Pela",
          "Aventurino"
        ],
        "best": false
      },
      {
        "nombre": "DoT / seguimiento",
        "agentes": [
          "Ruan Mei",
          "Kafka",
          "Black Swan",
          "Huohuo"
        ],
        "best": false
      }
    ],
    "consejo": "Soporte casi universal: sube el daño de todo el equipo y penetra resistencias. Alcanza al menos 134 de Velocidad para actuar dos veces por ciclo; en equipos de ruptura prioriza Efecto de Ruptura sobre estadísticas defensivas.",
    "ficha": {
      "nombreCompleto": "Ruan Mei",
      "faccion": "Sociedad de Genios",
      "desc": "Miembro n.º 81 de la Sociedad de Genios, experta en ciencias de la vida y creación de vida. Amable pero enigmática, ve el mundo como un experimento fascinante.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d5/Character_Ruan_Mei_Splash_Art.png"
    }
  },
  {
    "id": "argenti",
    "nombre": "Argenti",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Erudición",
    "version": "1.5",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": ""
    },
    "pies": {
      "principal": "ATQ%",
      "alt": "Velocidad si quieres más turnos"
    },
    "esfera": {
      "principal": "Daño Físico",
      "alt": "ATQ% si te falta Daño Físico"
    },
    "cuerda": {
      "principal": "Regeneración de Energía (build 180) / ATQ% (build 90)",
      "alt": ""
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Un Instante Antes de la Mirada",
        "en": "An Instant Before A Gaze",
        "nota": "Cono de firma: +Daño de ultimate escalado con la energía máxima; brilla en la build de 180 energía",
        "best": true
      },
      {
        "es": "Noche en la Vía Láctea",
        "en": "Night on the Milky Way",
        "nota": "5★ tienda: +ATQ por enemigo en campo y bono de daño al romper debilidad; excelente en oleadas",
        "best": false
      },
      {
        "es": "El Nacimiento del Ser",
        "en": "The Birth of the Self",
        "nota": "4★ evento: +Daño de habilidad/ultimate, más contra enemigos con poca vida",
        "best": false
      },
      {
        "es": "La Seriedad del Desayuno",
        "en": "The Seriousness of Breakfast",
        "nota": "4★ F2P: +Daño y apila ATQ al derrotar/dañar; opción sólida",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Erudito Perdido en la Erudición (4pz)",
        "en": "Scholar Lost in Erudition",
        "nota": "Cavernas: +Prob. Crítico y +Daño de habilidad/ultimate; BiS actual",
        "best": true
      },
      {
        "es": "Arena Rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "Planar: +Prob. Crítico y bono de daño con crítico alto (70%+)",
        "best": true
      },
      {
        "es": "Campeón del Boxeo Callejero (4pz)",
        "en": "Champion of Streetwise Boxing",
        "nota": "Cavernas alt: apila Daño Físico al golpear; muy fácil de conseguir",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry AoE",
        "agentes": [
          "Argenti",
          "Ruan Mei",
          "Sunday",
          "Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "Doble apoyo",
        "agentes": [
          "Argenti",
          "Robin",
          "Tingyun",
          "Huohuo"
        ],
        "best": false
      },
      {
        "nombre": "Energía rápida",
        "agentes": [
          "Argenti",
          "Sparkle",
          "Hanya",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Con la build de 180 energía su ultimate reforzado limpia oleadas enteras; usa cuerda de Regeneración de Energía y apoyos que le den energía (Tingyun, Robin). En objetivo único la build de 90 energía cicla más rápido.",
    "ficha": {
      "nombreCompleto": "Argenti",
      "faccion": "Caballeros de la Belleza de Idrila",
      "desc": "Caballero solitario de la Belleza de Idrila que recorre el cosmos honrando a su Aeón con actos de belleza y valor. Cortés, teatral y de corazón noble.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/90/Character_Argenti_Splash_Art.png"
    }
  },
  {
    "id": "topaz-numby",
    "nombre": "Topaz y Conti",
    "rareza": "5",
    "elemento": "Fuego",
    "camino": "Cacería",
    "version": "1.4",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": ""
    },
    "pies": {
      "principal": "ATQ%",
      "alt": "Velocidad si te falta acción"
    },
    "esfera": {
      "principal": "Daño de Fuego",
      "alt": "ATQ% si te falta Daño de Fuego"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Preocupante, Dichoso",
        "en": "Worrisome, Blissful",
        "nota": "Cono de firma: +Prob. Crítico y gran bono al daño de seguimiento; hecho para Topaz",
        "best": true
      },
      {
        "es": "Surcar el Mar Estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "4★ tienda de Herta: +Prob. Crítico y ATQ contra enemigos con poca vida",
        "best": false
      },
      {
        "es": "Esgrima",
        "en": "Swordplay",
        "nota": "4★ F2P: apila daño golpeando al mismo objetivo; ideal para objetivo único",
        "best": false
      },
      {
        "es": "Volver a la Oscuridad",
        "en": "Return to Darkness",
        "nota": "4★ F2P: +Prob. Crítico y posibilidad de disipar buffs al crítico",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "El Gran Duque de las Cenizas Ardientes (4pz)",
        "en": "The Ashblazing Grand Duke",
        "nota": "Cavernas: apila bono de daño de seguimiento; BiS para Topaz/Conti",
        "best": true
      },
      {
        "es": "Salsotto Inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "Planar: +Prob. Crítico y bono al daño de seguimiento/ultimate con crítico 50%+",
        "best": true
      },
      {
        "es": "Duke de... Sigonia, la Desolación Reclamada (2pz)",
        "en": "Sigonia, the Unclaimed Desolation",
        "nota": "Planar alt: +Prob. Crítico y Daño Crítico apilable al derrotar enemigos",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Seguimiento (FUA)",
        "agentes": [
          "Topaz y Conti",
          "Feixiao",
          "Robin",
          "Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "Dúo cazador",
        "agentes": [
          "Topaz y Conti",
          "Dr. Ratio",
          "Robin",
          "Aventurino"
        ],
        "best": false
      },
      {
        "nombre": "Fuego",
        "agentes": [
          "Topaz y Conti",
          "Himeko",
          "Tingyun",
          "Fu Xuan"
        ],
        "best": false
      }
    ],
    "consejo": "Marca al objetivo con su habilidad (Prueba de Deuda) para amplificar el daño y que Conti dispare seguimientos. Encaja perfecto en equipos de seguimiento con Robin y Aventurino; da energía a Conti para golpes extra.",
    "ficha": {
      "nombreCompleto": "Topaz y Conti",
      "faccion": "IPC",
      "desc": "Cobradora de deudas del Departamento de Conservación de la IPC, acompañada de Conti, su adorable warp trotter mascota. Eficiente, ambiciosa y leal a la corporación.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/9d/Character_Topaz_and_Conti_Splash_Art.png"
    }
  },
  {
    "id": "aventurine",
    "nombre": "Aventurino",
    "rareza": "5",
    "elemento": "Imaginario",
    "camino": "Conservación",
    "version": "2.1",
    "estado": "ok",
    "cuerpo": {
      "principal": "DEF% (sustain) / Prob. Crítico (sub-DPS)",
      "alt": ""
    },
    "pies": {
      "principal": "DEF%",
      "alt": "Velocidad para ciclar antes"
    },
    "esfera": {
      "principal": "DEF%",
      "alt": "Daño Imaginario en build de daño"
    },
    "cuerda": {
      "principal": "DEF%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "DEF%",
      "Prob. Crítico",
      "Velocidad",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Destino Inherentemente Injusto",
        "en": "Inherently Unjust Destiny",
        "nota": "Cono de firma: +Prob. Crítico, y al escudar a aliados sube su Daño Crítico; BiS",
        "best": true
      },
      {
        "es": "Tendencia del Mercado Universal",
        "en": "Trend of the Universal Market",
        "nota": "4★ F2P: +PV y escudo al ser atacado; opción defensiva sólida",
        "best": false
      },
      {
        "es": "Concierto para Dos",
        "en": "Concert for Two",
        "nota": "4★ F2P: +DEF y +escudo por aliado con barrera",
        "best": false
      },
      {
        "es": "Ámbar",
        "en": "Amber",
        "nota": "3★ F2P: +DEF (más con poca vida); relleno inicial",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Caballero del Palacio de la Pureza (4pz)",
        "en": "Knight of Purity Palace",
        "nota": "Cavernas: +DEF y eleva el tope de absorción del escudo; BiS de tanque",
        "best": true
      },
      {
        "es": "Quilla Rota (2pz)",
        "en": "Broken Keel",
        "nota": "Planar: +Resistencia a Efectos y, con 30+, +Daño Crítico a todo el equipo",
        "best": true
      },
      {
        "es": "Penacony, Tierra de los Sueños (2pz)",
        "en": "Penacony, Land of the Dreams",
        "nota": "Planar alt: +Regeneración de Energía y bono de daño a aliados del mismo elemento",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Sustain de seguimiento",
        "agentes": [
          "Aventurino",
          "Dr. Ratio",
          "Robin",
          "Topaz y Conti"
        ],
        "best": true
      },
      {
        "nombre": "Escudero de Acheron",
        "agentes": [
          "Aventurino",
          "Acheron",
          "Pela",
          "Jiaoqiu"
        ],
        "best": false
      },
      {
        "nombre": "Sub-DPS de escudo",
        "agentes": [
          "Aventurino",
          "Feixiao",
          "Robin",
          "Topaz y Conti"
        ],
        "best": false
      }
    ],
    "consejo": "Escala con DEF: prioriza DEF% en todas las piezas y busca ~140 Velocidad para reponer escudos a tiempo. Al escudar 7 veces activa su golpe de seguimiento, por lo que también aporta daño en equipos FUA.",
    "ficha": {
      "nombreCompleto": "Aventurino (Kakavasha)",
      "faccion": "IPC",
      "desc": "Único superviviente del clan Avgin, ahora estratega del Departamento de Estrategias de la IPC. Jugador nato que apuesta con su propia vida ocultando un pasado trágico tras su sonrisa.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a9/Character_Aventurino_Splash_Art.png"
    }
  },
  {
    "id": "jade",
    "nombre": "Jade",
    "rareza": "5",
    "elemento": "Cuántico",
    "camino": "Erudición",
    "version": "2.3",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": ""
    },
    "pies": {
      "principal": "ATQ%",
      "alt": "Velocidad"
    },
    "esfera": {
      "principal": "Daño Cuántico",
      "alt": "ATQ% si te falta Daño Cuántico"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Aun Así, la Esperanza No Tiene Precio",
        "en": "Yet Hope Is Priceless",
        "nota": "Cono de firma: +Prob. Crítico, Daño Crítico y bono de daño tras seguimiento; BiS",
        "best": true
      },
      {
        "es": "El Nacimiento del Ser",
        "en": "The Birth of the Self",
        "nota": "4★ evento: +Daño de habilidad/ultimate y de seguimiento; mejor 4★ para ella",
        "best": false
      },
      {
        "es": "Noche en la Vía Láctea",
        "en": "Night on the Milky Way",
        "nota": "5★ tienda: +ATQ por enemigo y bono al romper debilidad",
        "best": false
      },
      {
        "es": "La Seriedad del Desayuno",
        "en": "The Seriousness of Breakfast",
        "nota": "4★ F2P: +Daño y apila ATQ; alternativa accesible",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "El Gran Duque de las Cenizas Ardientes (4pz)",
        "en": "The Ashblazing Grand Duke",
        "nota": "Cavernas: apila bono de daño de seguimiento (Jade golpea muchas veces); BiS",
        "best": true
      },
      {
        "es": "Salsotto Inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "Planar: +Prob. Crítico y bono al daño de seguimiento/ultimate",
        "best": true
      },
      {
        "es": "Vanguardia del Firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "Planar alt: +ATQ escalado con Velocidad alta",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Seguimiento con Cobrador",
        "agentes": [
          "Jade",
          "Blade",
          "Robin",
          "Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "Erudición/FUA",
        "agentes": [
          "Jade",
          "Himeko",
          "Robin",
          "Huohuo"
        ],
        "best": false
      },
      {
        "nombre": "Memoria/Herta",
        "agentes": [
          "Jade",
          "The Herta",
          "Sunday",
          "Aventurino"
        ],
        "best": false
      }
    ],
    "consejo": "Designa a un aliado como Cobrador para generar cargas y disparar seguimientos constantes; consume vida de ese aliado, así que empareja con un buen sanador (Huohuo/Aventurino). Necesita crítico alto para el 4pz del Gran Duque.",
    "ficha": {
      "nombreCompleto": "Jade",
      "faccion": "IPC",
      "desc": "Una de los Diez Magnates de Piedra de la IPC, encargada de los préstamos y cobros. Elegante y despiadada en los negocios, comercia con las deudas (y las almas) de sus clientes.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/6d/Character_Jade_Splash_Art.png"
    }
  },
  {
    "id": "black-swan",
    "nombre": "Black Swan",
    "rareza": "5",
    "elemento": "Viento",
    "camino": "Nihilidad",
    "version": "2.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ% (o Prob. de Efecto hasta ~100%+)",
      "alt": ""
    },
    "pies": {
      "principal": "Velocidad",
      "alt": ""
    },
    "esfera": {
      "principal": "Daño de Viento",
      "alt": "ATQ% si te falta Daño de Viento"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. de Efecto",
      "ATQ%",
      "Velocidad",
      "PV%"
    ],
    "conos": [
      {
        "es": "Remembranza Reforjada",
        "en": "Reforged Remembrance",
        "nota": "Cono de firma: +Prob. de Efecto, +ATQ y bono de daño de DoT según debuffs; BiS",
        "best": true
      },
      {
        "es": "La Paciencia Es Todo Lo Que Necesitas",
        "en": "Patience Is All You Need",
        "nota": "5★ tienda: +Daño, apila velocidad y aplica erosión (DoT); excelente alt",
        "best": false
      },
      {
        "es": "Buenas Noches y Que Duermas Bien",
        "en": "Good Night and Sleep Well",
        "nota": "4★ F2P: +Daño por cada debuff del objetivo (hasta 3 acumulaciones)",
        "best": false
      },
      {
        "es": "Ojos de la Presa",
        "en": "Eyes of the Prey",
        "nota": "4★ F2P: +Prob. de Efecto y +Daño de DoT; opción barata",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Prisionero en el Confinamiento Profundo (4pz)",
        "en": "Prisoner in Deep Confinement",
        "nota": "Cavernas: +ATQ e ignora DEF por cada DoT sobre el enemigo; BiS para DoT",
        "best": true
      },
      {
        "es": "Empresa Comercial Pangaláctica (2pz)",
        "en": "Pan-Galactic Commercial Enterprise",
        "nota": "Planar: +Prob. de Efecto y +ATQ escalado con esa probabilidad",
        "best": true
      },
      {
        "es": "Vanguardia del Firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "Planar alt: +ATQ con Velocidad alta",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "DoT clásico",
        "agentes": [
          "Black Swan",
          "Kafka",
          "Ruan Mei",
          "Huohuo"
        ],
        "best": true
      },
      {
        "nombre": "DoT con Acheron",
        "agentes": [
          "Black Swan",
          "Acheron",
          "Pela",
          "Aventurino"
        ],
        "best": false
      },
      {
        "nombre": "Doble DoT",
        "agentes": [
          "Black Swan",
          "Kafka",
          "Sparkle",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Sube la Prob. de Efecto a ~100-120% para aplicar Epifanía de forma fiable (que hace crítico al DoT y reduce DEF). Brilla junto a Kafka, que detona sus DoT; da Regeneración de Energía para usar el ultimate seguido.",
    "ficha": {
      "nombreCompleto": "Black Swan",
      "faccion": "Jardín del Reminiscencia",
      "desc": "Memoriadora al servicio del Jardín del Reminiscencia y de la enigmática Familia. Lee el pasado y el destino de las personas a través de sus cartas y su percepción memoriada.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/f/fd/Character_Black_Swan_Splash_Art.png"
    }
  },
  {
    "id": "sparkle",
    "nombre": "Sparkle",
    "rareza": "5",
    "elemento": "Cuántico",
    "camino": "Armonía",
    "version": "2.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": ""
    },
    "pies": {
      "principal": "Velocidad",
      "alt": ""
    },
    "esfera": {
      "principal": "PV% / DEF%",
      "alt": ""
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV% si vas sobrado de energía"
    },
    "substats": [
      "Daño Crítico",
      "Velocidad",
      "PV%",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Escapada Terrenal",
        "en": "Earthly Escapade",
        "nota": "Cono de firma: da máscaras que suben el Daño Crítico del equipo; amplifica su papel de buffer; BiS",
        "best": true
      },
      {
        "es": "Pero la Batalla No Ha Terminado",
        "en": "But the Battle Isn't Over",
        "nota": "5★ tienda: regenera puntos de habilidad y da bono de daño a un aliado",
        "best": false
      },
      {
        "es": "Tallar la Luna, Tejer las Nubes",
        "en": "Carve the Moon, Weave the Clouds",
        "nota": "4★ F2P: buff rotatorio de ATQ/Daño Crítico/energía a todo el equipo",
        "best": false
      },
      {
        "es": "Pasado y Futuro",
        "en": "Past and Future",
        "nota": "4★ F2P: +Daño al siguiente aliado tras usar la habilidad",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Mensajera que Recorre el Ciberespacio (4pz)",
        "en": "Messenger Traversing Hackerspace",
        "nota": "Cavernas: +Velocidad y, al usar ultimate, adelanta la acción de todo el equipo; BiS",
        "best": true
      },
      {
        "es": "Quilla Rota (2pz)",
        "en": "Broken Keel",
        "nota": "Planar: con 30+ Resistencia a Efectos, +Daño Crítico a todo el equipo",
        "best": true
      },
      {
        "es": "Penacony, Tierra de los Sueños (2pz)",
        "en": "Penacony, Land of the Dreams",
        "nota": "Planar alt: +Regeneración de Energía y bono de daño del mismo elemento (equipo cuántico)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry cuántico",
        "agentes": [
          "Sparkle",
          "Seele",
          "Tingyun",
          "Fu Xuan"
        ],
        "best": true
      },
      {
        "nombre": "Apoyo de Acheron",
        "agentes": [
          "Sparkle",
          "Acheron",
          "Pela",
          "Aventurino"
        ],
        "best": false
      },
      {
        "nombre": "Concentración de habilidad",
        "agentes": [
          "Sparkle",
          "Imbibitor Lunae",
          "Tingyun",
          "Huohuo"
        ],
        "best": false
      }
    ],
    "consejo": "Su Daño Crítico propio escala el buff que reparte, así que prioriza Daño Crítico en el cuerpo. Genera puntos de habilidad para DPS hambrientos de ellos (DHIL, Qingque, Seele) y adelanta turnos con su ultimate.",
    "ficha": {
      "nombreCompleto": "Sparkle",
      "faccion": "Bufones Enmascarados",
      "desc": "Miembro de los Bufones Enmascarados de la Familia Fantasma y maestra del disfraz. Caótica, teatral y devota de Aha, disfruta sembrando el desorden como forma de arte.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Character_Sparkle_Splash_Art.png"
    }
  },
  {
    "id": "acheron",
    "nombre": "Acheron",
    "rareza": "5",
    "elemento": "Rayo",
    "camino": "Nihilidad",
    "version": "2.1",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": ""
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ% si ya tienes velocidad suficiente"
    },
    "esfera": {
      "principal": "Daño de Rayo",
      "alt": "ATQ% si te falta Daño de Rayo"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": ""
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "A lo Largo de la Orilla Pasajera",
        "en": "Along the Passing Shore",
        "nota": "Cono de firma: +Prob. Crítico y gran bono de daño al ultimate contra el objetivo marcado; BiS",
        "best": true
      },
      {
        "es": "En el Nombre del Mundo",
        "en": "In the Name of the World",
        "nota": "5★ tienda: +ATQ y bono de daño de habilidad contra enemigos con debuffs; gran alt F2P",
        "best": false
      },
      {
        "es": "Buenas Noches y Que Duermas Bien",
        "en": "Good Night and Sleep Well",
        "nota": "4★ F2P: +Daño por cada debuff del objetivo (hasta 3); muy efectivo con ella",
        "best": false
      },
      {
        "es": "La Resolución Brilla Como Perlas de Sudor",
        "en": "Resolution Shines As Pearls of Sweat",
        "nota": "4★ F2P: +Prob. de Efecto y bono de daño tras aplicar debuff",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Buceador Pionero de las Aguas Muertas (4pz)",
        "en": "Pioneer Diver of Dead Waters",
        "nota": "Cavernas: +Prob. Crítico y bono de daño escalado con el número de debuffs; BiS",
        "best": true
      },
      {
        "es": "Reino Divino de Izumo y Takama (2pz)",
        "en": "Izumo Gensei and Takama Divine Realm",
        "nota": "Planar: +Prob. Crítico al entrar en combate con aliado del mismo camino",
        "best": true
      },
      {
        "es": "Vanguardia del Firmamento: Glamoth (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "Planar alt: +ATQ con Velocidad alta",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Doble Nihilidad",
        "agentes": [
          "Acheron",
          "Jiaoqiu",
          "Pela",
          "Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "Debuff clásico",
        "agentes": [
          "Acheron",
          "Silver Wolf",
          "Pela",
          "Fu Xuan"
        ],
        "best": false
      },
      {
        "nombre": "Sparkle variante",
        "agentes": [
          "Acheron",
          "Sparkle",
          "Pela",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Necesita al menos 2 aliados de Nihilidad para cargar sus Cortes de Trueno; mantén 3+ debuffs constantes sobre el enemigo para el 4pz del Buceador. Su ultimate ignora energía y se carga con las Fauces del Trueno.",
    "ficha": {
      "nombreCompleto": "Acheron",
      "faccion": "Emanador errante",
      "desc": "Emanadora errante autoproclamada y espada de la Nihilidad. Espíritu Galáctico de origen incierto, viaja segando a los Emanadores mientras persigue el rastro de sus recuerdos perdidos.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/78/Character_Acheron_Splash_Art.png"
    }
  },
  {
    "id": "misha",
    "nombre": "Misha",
    "rareza": "4",
    "elemento": "Hielo",
    "camino": "Destrucción",
    "version": "2.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Prob. Crítico / Daño Crítico",
      "alt": ""
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Hielo",
      "alt": "ATQ% si te falta Daño de Hielo"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía para ciclar ultimates"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Tras la Caída de un Aeón",
        "en": "On the Fall of an Aeon",
        "nota": "4★ F2P (fabricable): apila ATQ al atacar y bono de daño al romper debilidad; BiS accesible",
        "best": true
      },
      {
        "es": "Hoy Es Otro Día Tranquilo",
        "en": "Today Is Another Peaceful Day",
        "nota": "4★ F2P: +Daño escalado con energía máxima; encaja con su ultimate cargado",
        "best": false
      },
      {
        "es": "Algo Irremplazable",
        "en": "Something Irreplaceable",
        "nota": "5★ estándar: +ATQ, cura y bono de daño tras derrotar o recibir golpe",
        "best": false
      },
      {
        "es": "El Buen Comienzo del Día",
        "en": "A Secret Vow",
        "nota": "5★ estándar: +Daño (y extra si el enemigo tiene más vida %); opción sólida",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Cazador del Bosque Glacial (4pz)",
        "en": "Hunter of Glacial Forest",
        "nota": "Cavernas: +Daño de Hielo y +Daño Crítico tras usar el ultimate; BiS para Misha",
        "best": true
      },
      {
        "es": "Arena Rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "Planar: +Prob. Crítico y bono de daño con crítico alto",
        "best": true
      },
      {
        "es": "Mosquetero del Trigo Silvestre (4pz)",
        "en": "Musketeer of Wild Wheat",
        "nota": "Cavernas alt: +ATQ, +Velocidad y +Daño de ataque básico; muy accesible",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry de ultimate",
        "agentes": [
          "Misha",
          "Sunday",
          "Tingyun",
          "Fu Xuan"
        ],
        "best": true
      },
      {
        "nombre": "Puntos de habilidad",
        "agentes": [
          "Misha",
          "Sparkle",
          "Pela",
          "Aventurino"
        ],
        "best": false
      },
      {
        "nombre": "Adelanto de turno",
        "agentes": [
          "Misha",
          "Bronya",
          "Robin",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Su ultimate golpea más veces cuantos más puntos de habilidad gastes antes, así que empareja con generadores de puntos (Sparkle, Tingyun) y sube Velocidad + Regeneración de Energía para lanzarlo seguido. Prioriza crítico con el 4pz del Cazador del Bosque Glacial.",
    "ficha": {
      "nombreCompleto": "Misha",
      "faccion": "Penacony",
      "desc": "Botones del Hotel Reverie de Penacony que sueña con convertirse en detective. Tímido y trabajador, se ve arrastrado a los misterios que envuelven la Tierra de los Sueños.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/5c/Character_Misha_Splash_Art.png"
    }
  },
  {
    "id": "gallagher",
    "nombre": "Gallagher",
    "rareza": "4",
    "elemento": "Fuego",
    "camino": "Abundancia",
    "version": "2.1",
    "estado": "ok",
    "cuerpo": {
      "principal": "Terapia",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "Efecto de Ruptura"
    },
    "substats": [
      "Efecto de Ruptura",
      "Velocidad",
      "PV%",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Solo el aroma permanece fiel",
        "en": "Scent Alone Stays True",
        "nota": "Cono de firma: +60% Efecto de Ruptura y aplica Vulnerabilidad al enemigo; maximiza su curación y utilidad de Ruptura",
        "best": true
      },
      {
        "es": "¿Qué es lo real?",
        "en": "What Is Real?",
        "nota": "Mejor F2P (Tienda Herta): +Efecto de Ruptura y cura al equipo con el Básico; muy sinérgico",
        "best": false
      },
      {
        "es": "Multiplicación",
        "en": "Multiplication",
        "nota": "Alternativa 4★ de Abundancia para mantener energía si falta el resto",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Ladrón de Meteoros Fugaces",
        "en": "Thief of Shooting Meteor",
        "nota": "4pz cavernas BiS: +Efecto de Ruptura y recupera energía al romper; núcleo de su build",
        "best": true
      },
      {
        "es": "Fragua de la Linterna Kalpagni",
        "en": "Forge of the Kalpagni Lantern",
        "nota": "2pz planar BiS: +Efecto de Ruptura y +SPD condicional; ideal en equipos de Fuego/Ruptura",
        "best": true
      },
      {
        "es": "Mensajero que Recorre el Ciberespacio",
        "en": "Messenger Traversing Hackerspace",
        "nota": "2pz planar alterno: +Velocidad para más turnos",
        "best": false
      },
      {
        "es": "Pasajero de las Nubes Errantes (2pz) + Mensajero (2pz)",
        "en": "Passerby of Wandering Cloud (2pc) + Messenger (2pc)",
        "nota": "Alternativa de cavernas si buscas más curación/velocidad",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Ruptura Firefly",
        "agentes": [
          "Firefly",
          "Ruan Mei",
          "Trailblazer (Armonía)/Fugue",
          "Gallagher"
        ],
        "best": true
      },
      {
        "nombre": "Ruptura Boothill",
        "agentes": [
          "Boothill",
          "Fugue",
          "Ruan Mei",
          "Gallagher"
        ],
        "best": false
      },
      {
        "nombre": "Sustain universal",
        "agentes": [
          "DPS principal",
          "Apoyo",
          "Sub-DPS/Buff",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Apunta a 150%+ de Efecto de Ruptura para maximizar el aumento de curación de su Talento, con Velocidad 134+ y Regeneración de Energía en la cuerda para lanzar el Ultimate seguido. Su debuff Besotted convierte parte del daño recibido por el enemigo en curación: brilla como sanador Break barato y flexible.",
    "ficha": {
      "nombreCompleto": "Gallagher",
      "faccion": "Penacony",
      "desc": "Bartender del Bar Reverie y miembro de la Familia de Penacony. Unidad de Abundancia de tipo Fuego que sana al equipo aplicando el debuff Besotted a los enemigos y aporta daño de Ruptura, siendo uno de los mejores sanadores 4★ para equipos de Ruptura.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/2/2d/Character_Gallagher_Splash_Art.png"
    }
  },
  {
    "id": "robin",
    "nombre": "Robin",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Armonía",
    "version": "2.2",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "ATQ%",
      "alt": "Daño Físico"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "ATQ%",
      "Velocidad",
      "Regeneración de Energía",
      "Prob. Crítico"
    ],
    "conos": [
      {
        "es": "Resplandor de la noche fluida",
        "en": "Flowing Nightglow",
        "nota": "Cono de firma: acumula Cantillación (+Regen Energía) y al lanzar Ultimate da +ATQ y +Daño al equipo; BiS absoluto",
        "best": true
      },
      {
        "es": "Pero la batalla no ha terminado",
        "en": "But the Battle Isn't Over",
        "nota": "Mejor alternativa (Pase de Batalla): +Regen Energía y buff de daño al siguiente aliado que actúe",
        "best": false
      },
      {
        "es": "Recuerdos del pasado",
        "en": "Memories of the Past",
        "nota": "Mejor F2P 4★: +Efecto de Ruptura y regenera energía al atacar",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Mosquetero del Trigo Salvaje (2pz) + Los Valientes que Surcan el Viento (2pz)",
        "en": "Musketeer of Wild Wheat (2pc) + The Wind-Soaring Valorous (2pc)",
        "nota": "Mejor combinación: doble +ATQ% que escala directo con su buff de equipo",
        "best": true
      },
      {
        "es": "Flota Eterna",
        "en": "Fleet of the Ageless",
        "nota": "2pz planar BiS: +PV y +ATQ a todo el equipo (requiere 120 Velocidad)",
        "best": true
      },
      {
        "es": "Penacony, Tierra de los Sueños",
        "en": "Penacony, Land of the Dreams",
        "nota": "2pz planar alterno: +Regen Energía y +Daño a aliados del mismo elemento",
        "best": false
      },
      {
        "es": "Mosquetero del Trigo Salvaje (2pz) + El Héroe del Canto Triunfal (2pz)",
        "en": "Musketeer of Wild Wheat (2pc) + Hero of Triumphant Song (2pc)",
        "nota": "Alternativa de cavernas con +ATQ%",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarga FUA",
        "agentes": [
          "Feixiao",
          "Robin",
          "Aventurino",
          "Topaz/March 7th (Caza)"
        ],
        "best": true
      },
      {
        "nombre": "Ratio / doble buff",
        "agentes": [
          "Dr. Ratio",
          "Robin",
          "Aventurino",
          "Topaz"
        ],
        "best": false
      },
      {
        "nombre": "DoT / universal",
        "agentes": [
          "Kafka",
          "Black Swan",
          "Robin",
          "Sustain"
        ],
        "best": false
      }
    ],
    "consejo": "Robin escala con ATQ%: prioriza ATQ% en cuerpo/esfera y suficiente Regeneración de Energía para lanzar su Ultimate Concierto cada 3 turnos. Busca 120 Velocidad para activar Flota Eterna. Su Ultimate da daño adicional partywide que escala con SU ATQ, así que también aprovecha algo de Crítico. Es de los mejores buffers para equipos de ataque directo y follow-up.",
    "ficha": {
      "nombreCompleto": "Robin",
      "faccion": "Penacony (La Familia)",
      "desc": "Célebre cantante de Penacony y hermana mayor de Sunday, miembro de la Familia. Unidad de Armonía de tipo Físico que amplifica masivamente el ATQ del equipo y añade daño adicional partywide durante su Ultimate Concierto, considerada una de las mejores amplificadoras del juego.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/92/Character_Robin_Splash_Art.png"
    }
  },
  {
    "id": "sunday",
    "nombre": "Sunday",
    "rareza": "5",
    "elemento": "Imaginario",
    "camino": "Armonía",
    "version": "2.7",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "Daño Crítico",
      "Velocidad",
      "Regeneración de Energía",
      "PV%"
    ],
    "conos": [
      {
        "es": "Un ascenso con los pies en la tierra",
        "en": "A Grounded Ascent",
        "nota": "Cono de firma: restaura energía por habilidad, acumula Himno (+Daño) y devuelve Puntos de Habilidad; BiS",
        "best": true
      },
      {
        "es": "Pero la batalla no ha terminado",
        "en": "But the Battle Isn't Over",
        "nota": "Mejor alternativa (Pase de Batalla): recupera PH, avanza acción y buffea al siguiente aliado",
        "best": false
      },
      {
        "es": "Recuerdos del pasado",
        "en": "Memories of the Past",
        "nota": "Opción F2P 4★: +Regen Energía para su rotación de Ultimate",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "El Sacerdote del Suplicio Revivido",
        "en": "Sacerdos' Relived Ordeal",
        "nota": "4pz cavernas BiS: +6% Velocidad y +18% Daño Crítico por acumulación al aliado objetivo (máx 2)",
        "best": true
      },
      {
        "es": "Lushaka, los Mares Hundidos",
        "en": "Lushaka, the Sunken Seas",
        "nota": "2pz planar BiS: +Regen Energía y +ATQ al equipo (aliado más veloz)",
        "best": true
      },
      {
        "es": "Quilla Rota",
        "en": "Broken Keel",
        "nota": "2pz planar alterno: +RES Efecto y +Daño Crítico al equipo si RES Efecto ≥ 30%",
        "best": false
      },
      {
        "es": "Mensajero que Recorre el Ciberespacio (2pz) + Sacerdos (2pz)",
        "en": "Messenger Traversing Hackerspace (2pc) + Sacerdos (2pc)",
        "nota": "Alternativa de cavernas por Velocidad si el set 4pz no está completo",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Invocación Aglaea",
        "agentes": [
          "Aglaea",
          "Sunday",
          "Robin",
          "Huohuo"
        ],
        "best": true
      },
      {
        "nombre": "Hipercarga Jing Yuan",
        "agentes": [
          "Jing Yuan",
          "Sunday",
          "Tingyun",
          "Sustain"
        ],
        "best": false
      },
      {
        "nombre": "Hipercarga Reminiscencia",
        "agentes": [
          "Mydei/The Herta",
          "Sunday",
          "Robin",
          "Sustain"
        ],
        "best": false
      }
    ],
    "consejo": "Apunta a 200%+ de Daño Crítico y una Velocidad ligeramente por debajo del DPS para actuar justo después de él. Su Ultimate avanza la acción del aliado y le entrega energía, y potencia especialmente a invocaciones (Jing Yuan, Aglaea, Yunli), sobre los que su buff de Crítico se multiplica. Lleva Regeneración de Energía en la cuerda y suficiente supervivencia (PV/DEF/RES).",
    "ficha": {
      "nombreCompleto": "Sunday",
      "faccion": "Penacony (La Familia)",
      "desc": "Cabeza de la Oak Family y jefe del Departamento de Conservación del Orden de Penacony, hermano de Robin. Unidad de Armonía de tipo Imaginario que avanza la acción, restaura energía y otorga uno de los mayores buffs de Daño Crítico del juego, siendo el mejor apoyo para DPS de invocación e hipercargas.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/2/21/Character_Sunday_Splash_Art.png"
    }
  },
  {
    "id": "boothill",
    "nombre": "Boothill",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Cacería",
    "version": "2.2",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Físico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Efecto de Ruptura",
      "alt": "ATQ%"
    },
    "substats": [
      "Efecto de Ruptura",
      "Velocidad",
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%"
    ],
    "conos": [
      {
        "es": "Navegando hacia una segunda vida",
        "en": "Sailing Towards a Second Life",
        "nota": "Cono de firma: +60% Efecto de Ruptura, +12% Velocidad y -20% DEF del enemigo; BiS por goleada",
        "best": true
      },
      {
        "es": "Crucero por el mar estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "Mejor F2P (Tienda Herta): +Prob. Crítico y +Daño incondicional para su Básico potenciado",
        "best": false
      },
      {
        "es": "Ensombrecido por la noche",
        "en": "Shadowed by Night",
        "nota": "Alternativa (Pase de Batalla): +Efecto de Ruptura y +Daño al usar Habilidad",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Caballería de Hierro contra el Azote",
        "en": "Iron Cavalry Against the Scourge",
        "nota": "4pz cavernas BiS: +Efecto de Ruptura y el Daño de Ruptura/Super Ruptura ignora DEF del enemigo",
        "best": true
      },
      {
        "es": "Talia: Reino del Bandolerismo",
        "en": "Talia: Kingdom of Banditry",
        "nota": "2pz planar BiS: +Efecto de Ruptura, con bonus extra al llegar a 145 Velocidad",
        "best": true
      },
      {
        "es": "Fragua de la Linterna Kalpagni",
        "en": "Forge of the Kalpagni Lantern",
        "nota": "2pz planar alterno: +Efecto de Ruptura y +Velocidad condicional",
        "best": false
      },
      {
        "es": "Ladrón de Meteoros Fugaces",
        "en": "Thief of Shooting Meteor",
        "nota": "Alternativa 4pz de cavernas con +Efecto de Ruptura y energía al romper",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Super Ruptura mono-objetivo",
        "agentes": [
          "Boothill",
          "Fugue",
          "Ruan Mei",
          "Lingsha"
        ],
        "best": true
      },
      {
        "nombre": "Ruptura con Sunday",
        "agentes": [
          "Boothill",
          "Ruan Mei",
          "Sunday",
          "Gallagher"
        ],
        "best": false
      },
      {
        "nombre": "F2P Ruptura",
        "agentes": [
          "Boothill",
          "Trailblazer (Armonía)",
          "Ruan Mei",
          "Natasha/Sustain"
        ],
        "best": false
      }
    ],
    "consejo": "Apunta a 200%+ de Efecto de Ruptura y el breakpoint de 145 (o 160) de Velocidad, que además activa Talia. Su Habilidad marca al enemigo en Standoff obligándole a duelo, y su Básico potenciado escala con Ruptura pero puede hacer crítico, así que equilibra algo de Prob./Daño Crítico. Depende de romper la Debilidad del objetivo: emparéjalo con habilitadores de Super Ruptura (Fugue, Trailblazer Armonía) y Ruan Mei.",
    "ficha": {
      "nombreCompleto": "Boothill",
      "faccion": "Guardaestrellas",
      "desc": "Galaxy Ranger justiciero con acento vaquero que persigue al Sindicato de la Belleza Interastral. Unidad de Cacería de tipo Físico centrada en Ruptura mono-objetivo: rompe la Debilidad del enemigo con su duelo Standoff y castiga con enormes golpes de Daño de Ruptura que ignoran DEF.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/b/bb/Character_Boothill_Splash_Art.png"
    }
  },
  {
    "id": "rappa",
    "nombre": "Rappa",
    "rareza": "5",
    "elemento": "Imaginario",
    "camino": "Erudición",
    "version": "2.6",
    "estado": "ok",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Efecto de Ruptura"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "ATQ%",
      "alt": "Daño Imaginario"
    },
    "cuerda": {
      "principal": "Efecto de Ruptura",
      "alt": "ATQ%"
    },
    "substats": [
      "Efecto de Ruptura",
      "Velocidad",
      "ATQ%",
      "PV%"
    ],
    "conos": [
      {
        "es": "Inscripción ninjutsu: deslumbrante rompemaldiciones",
        "en": "Ninjutsu Inscription: Dazzling Evilbreaker",
        "nota": "Cono de firma: +60% Efecto de Ruptura y regenera 30 energía al entrar en batalla; BiS",
        "best": true
      },
      {
        "es": "Tras la caída de Charmony",
        "en": "After the Charmony Fall",
        "nota": "Mejor F2P 4★ (Erudición): +Efecto de Ruptura y +Velocidad, perfecto para su rol",
        "best": false
      },
      {
        "es": "Noche en la Vía Láctea",
        "en": "Night on the Milky Way",
        "nota": "Alternativa 4★: +ATQ por enemigo y +Daño contra objetivos con Debilidad rota",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Caballería de Hierro contra el Azote",
        "en": "Iron Cavalry Against the Scourge",
        "nota": "4pz cavernas BiS: +Efecto de Ruptura y el Daño de Ruptura/Super Ruptura ignora DEF (mejor con 250%+ ER)",
        "best": true
      },
      {
        "es": "Talia: Reino del Bandolerismo",
        "en": "Talia: Kingdom of Banditry",
        "nota": "2pz planar BiS: hasta +36% Efecto de Ruptura con 145+ Velocidad",
        "best": true
      },
      {
        "es": "Fragua de la Linterna Kalpagni",
        "en": "Forge of the Kalpagni Lantern",
        "nota": "2pz planar alterno: +Efecto de Ruptura y +Velocidad",
        "best": false
      },
      {
        "es": "Ladrón de Meteoros Fugaces",
        "en": "Thief of Shooting Meteor",
        "nota": "Alternativa 4pz de cavernas con +Efecto de Ruptura y energía al romper",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Super Ruptura AoE",
        "agentes": [
          "Rappa",
          "Ruan Mei",
          "Fugue/Trailblazer (Armonía)",
          "Lingsha"
        ],
        "best": true
      },
      {
        "nombre": "Ruptura con TB Armonía",
        "agentes": [
          "Rappa",
          "Ruan Mei",
          "Trailblazer (Armonía)",
          "Gallagher"
        ],
        "best": false
      },
      {
        "nombre": "Ruptura doble amplificador",
        "agentes": [
          "Rappa",
          "Fugue",
          "Bronya",
          "Sustain"
        ],
        "best": false
      }
    ],
    "consejo": "Apunta a 250%+ de Efecto de Ruptura para el máximo del set Caballería de Hierro y al breakpoint de 160 de Velocidad para más turnos. Su Ultimate la pone en el estado Sesshou Sakura donde sus Básicos potenciados hacen Super Ruptura AoE ignorando peso de la barra de Debilidad. Necesita un habilitador de Super Ruptura (Fugue o Trailblazer de Armonía) para explotar su daño.",
    "ficha": {
      "nombreCompleto": "Rappa",
      "faccion": "Guardaestrellas",
      "desc": "Enigmática ninja de Wardance en peregrinación por el mar de estrellas. Unidad de Erudición de tipo Imaginario y principal exponente del arquetipo de Super Ruptura en área: durante su estado Sesshou Sakura sus ataques potenciados devastan a varios enemigos ignorando el peso de sus barras de Debilidad.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/1/1c/Character_Rappa_Splash_Art.png"
    }
  },
  {
    "id": "aglaea",
    "nombre": "Aglaea",
    "rareza": "5",
    "elemento": "Rayo",
    "camino": "Reminiscencia",
    "version": "3.0",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Rayo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "ATQ%"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "Velocidad",
      "ATQ%"
    ],
    "conos": [
      {
        "es": "Tiempo tejido en oro",
        "en": "Time Woven Into Gold",
        "nota": "Cono de firma: +12% Velocidad pasiva y fuertes buffs de Crítico/Daño ligados a sus acumulaciones; BiS",
        "best": true
      },
      {
        "es": "Suda ahora, llora menos",
        "en": "Sweat Now, Cry Less",
        "nota": "Mejor alternativa (Pase de Batalla, Reminiscencia): +Prob. Crítico y +Daño mientras la memosprite está en campo",
        "best": false
      },
      {
        "es": "Saludo de los genios",
        "en": "Geniuses' Greetings",
        "nota": "Opción de evento/promoción (Reminiscencia): +ATQ y +Daño de Básico tras el Ultimate; las opciones F2P del camino Reminiscencia son limitadas",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "El Héroe del Canto Triunfal",
        "en": "Hero of Triumphant Song",
        "nota": "4pz cavernas BiS: único set que buffea al invocador Y a la invocación a la vez; obligatorio para ella",
        "best": true
      },
      {
        "es": "Maravilloso Parque de Atracciones Banan",
        "en": "Wondrous BananAmusement Park",
        "nota": "2pz planar BiS: +Prob. Crítico en equipos con invocación",
        "best": true
      },
      {
        "es": "Arena Rutilante",
        "en": "Rutilant Arena",
        "nota": "2pz planar alterno: +Daño de Básico/Habilidad al superar 70% de Prob. Crítico",
        "best": false
      },
      {
        "es": "Banda del Trueno Chisporroteante",
        "en": "Band of Sizzling Thunder",
        "nota": "Alternativa 4pz de cavernas con +Daño de Rayo",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Invocación premium",
        "agentes": [
          "Aglaea",
          "Sunday",
          "Robin",
          "Huohuo"
        ],
        "best": true
      },
      {
        "nombre": "Chrysos Heir",
        "agentes": [
          "Aglaea",
          "Sunday",
          "Cyrene",
          "Sustain"
        ],
        "best": false
      },
      {
        "nombre": "F2P Reminiscencia",
        "agentes": [
          "Aglaea",
          "Trailblazer (Reminiscencia) E2",
          "Robin",
          "Huohuo"
        ],
        "best": false
      }
    ],
    "consejo": "Apunta a 70%+ de Prob. Crítico (activa Arena Rutilante) con 140%+ de Daño Crítico y el breakpoint de 134/160 de Velocidad. Lleva Regeneración de Energía en la cuerda para no perder el buff de su Ultimate. Su invocación Garmentmaker escala con SUS estadísticas, por lo que Sunday es su mejor apoyo gracias al avance de acción que también beneficia a la memosprite.",
    "ficha": {
      "nombreCompleto": "Aglaea",
      "faccion": "Amphoreus",
      "desc": "Chrysos Heir del Título de Romance y líder de la ciudad-estado de Okhema en Amphoreus. Unidad de Reminiscencia de tipo Rayo que invoca a su memosprite Garmentmaker para desatar potentes ataques críticos, siendo la primera DPS de invocación del camino de Reminiscencia.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/81/Character_Aglaea_Splash_Art.png"
    }
  },
  {
    "id": "tribbie",
    "nombre": "Tribbie",
    "rareza": "5",
    "elemento": "Cuántico",
    "camino": "Armonía",
    "version": "3.1",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "PV%",
      "alt": "Velocidad"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "Daño Cuántico"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "PV%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Si el tiempo fuera una flor",
        "en": "If Time Were a Flower",
        "nota": "Cono de firma: energía inicial + buff Presagio que da enorme +Daño Crítico a todo el equipo; BiS",
        "best": true
      },
      {
        "es": "Recuerdos del pasado",
        "en": "Memories of the Past",
        "nota": "Mejor F2P 4★: +Regen Energía para su rotación de Ultimate",
        "best": false
      },
      {
        "es": "¡Baila! ¡Baila! ¡Baila!",
        "en": "Dance! Dance! Dance!",
        "nota": "Alternativa 4★: avanza la acción del equipo tras el Ultimate",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "El Poeta del Ocaso Lamentado",
        "en": "Poet of Mourning Collapse",
        "nota": "4pz cavernas BiS: gran +Prob./Daño Crítico a cambio de reducir Velocidad (build lenta ~96 SPD)",
        "best": true
      },
      {
        "es": "La Serena Morada del Osario",
        "en": "Bone Collection's Serene Demesne",
        "nota": "2pz planar BiS: +PV máximo y +Daño Crítico si el PV es alto",
        "best": true
      },
      {
        "es": "Quilla Rota",
        "en": "Broken Keel",
        "nota": "2pz planar alterno: +RES Efecto y +Daño Crítico al equipo",
        "best": false
      },
      {
        "es": "Águila de la Línea Crepuscular",
        "en": "Eagle of Twilight Line",
        "nota": "Alternativa 4pz de cavernas para build rápida (120+ SPD, más Ultimates)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Reminiscencia Cuántico",
        "agentes": [
          "Castorice",
          "Tribbie",
          "Cyrene/Trailblazer (Reminiscencia)",
          "Hyacine"
        ],
        "best": true
      },
      {
        "nombre": "Erudición The Herta",
        "agentes": [
          "The Herta",
          "Tribbie",
          "Anaxa",
          "Sustain"
        ],
        "best": false
      },
      {
        "nombre": "DoT / universal",
        "agentes": [
          "Kafka",
          "Black Swan",
          "Tribbie",
          "Sustain"
        ],
        "best": false
      }
    ],
    "consejo": "Dos rutas: Tribbie lenta (set Poeta, ~96 Velocidad, máximo daño personal y buffs más largos) o rápida (Águila, 120+ Velocidad, más Ultimates por combate). Busca 80-90% de Prob. Crítico en combate y 150%+ de Daño Crítico; su daño escala con PV%, así que rellena PV en pies/esfera/subs. Su Ultimate reduce toda la resistencia del enemigo y golpea en área, haciéndola buffer híbrido + sub-DPS.",
    "ficha": {
      "nombreCompleto": "Tribbie (Trianne, Trinnon, Tristan)",
      "faccion": "Amphoreus",
      "desc": "Trío de hermanas Chrysos Heir del Título de la Muerte que comparten un mismo cuerpo, oráculos de Amphoreus. Unidad de Armonía de tipo Cuántico que escala con PV: reduce la resistencia de los enemigos, amplifica el Daño Crítico del equipo y aporta un contundente daño de área como sub-DPS.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/eb/Character_Tribbie_Splash_Art.png"
    }
  },
  {
    "id": "mydei",
    "nombre": "Mydei",
    "rareza": "5",
    "elemento": "Imaginario",
    "camino": "Destrucción",
    "version": "3.1",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "Daño Imaginario",
      "alt": "PV%"
    },
    "cuerda": {
      "principal": "PV%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "PV%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Llama de sangre, abrasa mi camino",
        "en": "Flame of Blood, Blaze My Path",
        "nota": "Cono de firma: +PV y +Daño de Habilidad/Ultimate al consumir PV, escalando con cuánto PV gasta; BiS",
        "best": true
      },
      {
        "es": "El lado inalcanzable",
        "en": "The Unreachable Side",
        "nota": "Alternativa 5★ limitada (Destrucción): +Prob. Crítico y +Daño tras recibir daño o gastar PV",
        "best": false
      },
      {
        "es": "Un voto secreto",
        "en": "A Secret Vow",
        "nota": "Mejor F2P 4★ (Destrucción): +Daño, sencillo e incondicional",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "El Sabio Perdido en la Erudición",
        "en": "Scholar Lost in Erudition",
        "nota": "4pz cavernas BiS: +Daño Crítico de Habilidad/Ultimate, de donde sale casi todo su daño",
        "best": true
      },
      {
        "es": "La Serena Morada del Osario",
        "en": "Bone Collection's Serene Demesne",
        "nota": "2pz planar BiS: +PV máximo y +28% Daño Crítico con 5000+ de PV",
        "best": true
      },
      {
        "es": "Salsotto Inerte",
        "en": "Inert Salsotto",
        "nota": "2pz planar alterno: +Prob. Crítico y +Daño de Ultimate/follow-up con 50%+ Crítico",
        "best": false
      },
      {
        "es": "Discípulo Longevo",
        "en": "Longevous Disciple",
        "nota": "Alternativa 4pz de cavernas con +PV y +Prob. Crítico al recibir daño",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarga premium",
        "agentes": [
          "Mydei",
          "Sunday",
          "Robin",
          "Hyacine"
        ],
        "best": true
      },
      {
        "nombre": "Chrysos Heir",
        "agentes": [
          "Mydei",
          "Cerydra",
          "Cyrene",
          "Hyacine"
        ],
        "best": false
      },
      {
        "nombre": "Hipercarga alterna",
        "agentes": [
          "Mydei",
          "Sparkle",
          "Robin",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Necesita 8000+ de PV fuera de combate para el máximo Prob. Crítico de su Talento; apunta a 90-100% de Prob. Crítico y Daño Crítico en el cuerpo. Consume su propio PV para potenciar Habilidad y Ultimate (con resurrección), por lo que exige un sanador que escale o aumente PV como Hyacine, Huohuo o Gallagher. Equilibra PV% en cuerda/esfera con supervivencia.",
    "ficha": {
      "nombreCompleto": "Mydei",
      "faccion": "Amphoreus",
      "desc": "Príncipe guerrero de la tribu Kremnos y Chrysos Heir del Título de Estrategia en Amphoreus, conocido por resucitar una y otra vez. Unidad de Destrucción de tipo Imaginario que escala con PV: sacrifica su propia vida para desatar golpes críticos devastadores y renace al caer, siendo un DPS autosuficiente y resistente.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/67/Character_Mydei_Splash_Art.png"
    }
  },
  {
    "id": "castorice",
    "nombre": "Castorice",
    "rareza": "5",
    "elemento": "Cuántico",
    "camino": "Reminiscencia",
    "version": "3.2",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "PV%",
      "alt": "Velocidad"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "Daño Cuántico"
    },
    "cuerda": {
      "principal": "PV%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "PV%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Haz las despedidas más hermosas",
        "en": "Make Farewells More Beautiful",
        "nota": "Cono de firma: eleva su techo de daño, suaviza rotaciones y potencia los turnos de la memosprite; BiS",
        "best": true
      },
      {
        "es": "Suda ahora, llora menos",
        "en": "Sweat Now, Cry Less",
        "nota": "Alternativa (Pase de Batalla, Reminiscencia): +Prob. Crítico y +Daño con la memosprite en campo",
        "best": false
      },
      {
        "es": "La flor recuerda",
        "en": "The Flower Remembers",
        "nota": "Opción F2P/Pase de Batalla; sirve cualquier cono de Reminiscencia con alto PV base",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "El Poeta del Ocaso Lamentado",
        "en": "Poet of Mourning Collapse",
        "nota": "4pz cavernas BiS: +Prob./Daño Crítico para ella y su memosprite",
        "best": true
      },
      {
        "es": "La Serena Morada del Osario",
        "en": "Bone Collection's Serene Demesne",
        "nota": "2pz planar BiS: +PV máximo y +Daño Crítico con PV alto",
        "best": true
      },
      {
        "es": "Salsotto Inerte",
        "en": "Inert Salsotto",
        "nota": "2pz planar alterno: +Prob. Crítico y +Daño de Ultimate/follow-up",
        "best": false
      },
      {
        "es": "Discípulo Longevo",
        "en": "Longevous Disciple",
        "nota": "Alternativa 4pz de cavernas con +PV y +Prob. Crítico",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Reminiscencia premium",
        "agentes": [
          "Castorice",
          "Tribbie",
          "Cyrene/Evernight",
          "Hyacine"
        ],
        "best": true
      },
      {
        "nombre": "F2P Reminiscencia",
        "agentes": [
          "Castorice",
          "Trailblazer (Reminiscencia) E1",
          "Tribbie",
          "Hyacine"
        ],
        "best": false
      },
      {
        "nombre": "Doble Armonía",
        "agentes": [
          "Castorice",
          "Sunday",
          "Ruan Mei",
          "Hyacine"
        ],
        "best": false
      }
    ],
    "consejo": "Casi todo su reparto escala con PV%: lleva Daño Crítico solo en el cuerpo y PV% en pies, esfera y cuerda. Apunta a cerca de 100% de Prob. Crítico (con el set Poeta) y 150%+ de Daño Crítico. No usa energía convencional: carga su barra de Newborn consumiendo PV del equipo para invocar a Pollux/Netherwing, por lo que Hyacine es la mejor sanadora al aumentar el PV máximo de todos.",
    "ficha": {
      "nombreCompleto": "Castorice",
      "faccion": "Amphoreus",
      "desc": "Chrysos Heir del Título de la Muerte en Amphoreus, una joven cuyo tacto es letal para los vivos. Unidad de Reminiscencia de tipo Cuántico que escala completamente con PV: gasta la vida del equipo para invocar a su colosal memosprite y desatar un daño de área masivo, con un ritmo de juego único basado en el PV en vez de la energía.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/94/Character_Castorice_Splash_Art.png"
    }
  },
  {
    "id": "anaxa",
    "nombre": "Anaxa",
    "rareza": "5",
    "elemento": "Viento",
    "camino": "Erudición",
    "version": "3.2",
    "estado": "ok",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Viento",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "Velocidad",
      "ATQ%"
    ],
    "conos": [
      {
        "es": "La vida debe arrojarse a las llamas",
        "en": "Life Should Be Cast to Flames",
        "nota": "Cono de firma: +10 energía por turno, +80% Daño a objetivos con Debilidad implantada y -DEF; BiS",
        "best": true
      },
      {
        "es": "Noche en la Vía Láctea",
        "en": "Night on the Milky Way",
        "nota": "Mejor F2P 4★ (Erudición): +ATQ por enemigo y +Daño contra objetivos con Debilidad rota",
        "best": false
      },
      {
        "es": "El nacimiento del yo",
        "en": "The Birth of the Self",
        "nota": "Alternativa 4★ (Erudición): +Daño de follow-up/área",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Águila de la Línea Crepuscular",
        "en": "Eagle of Twilight Line",
        "nota": "4pz cavernas BiS: avanza la acción tras el Ultimate, alimentando su encadenado de Habilidades gratis",
        "best": true
      },
      {
        "es": "Arena Rutilante",
        "en": "Rutilant Arena",
        "nota": "2pz planar BiS: +Daño de Básico/Habilidad al superar 70% de Prob. Crítico",
        "best": true
      },
      {
        "es": "Frente Celestial: Glamoth",
        "en": "Firmament Frontline: Glamoth",
        "nota": "2pz planar alterno: +Daño con 135+ Velocidad",
        "best": false
      },
      {
        "es": "El Sabio Perdido en la Erudición",
        "en": "Scholar Lost in Erudition",
        "nota": "Alternativa 4pz de cavernas para hipercarga (+Daño Crítico de Habilidad)",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Erudición premium",
        "agentes": [
          "Anaxa",
          "The Herta",
          "Tribbie",
          "Huohuo/Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "Burst Chrysos Heir",
        "agentes": [
          "Anaxa",
          "Cyrene",
          "Cerydra",
          "Trailblazer (Reminiscencia)"
        ],
        "best": false
      },
      {
        "nombre": "Erudición con Ruan Mei",
        "agentes": [
          "Anaxa",
          "Ruan Mei",
          "Tribbie",
          "Huohuo"
        ],
        "best": false
      }
    ],
    "consejo": "Su Habilidad implanta Debilidades de todos los elementos en los enemigos, permitiendo romperlos y encadenar Habilidades gratis (Quantum Detonation). Apunta a 70%+ de Prob. Crítico (activa Arena Rutilante) y Velocidad alta; su cono de firma permite llevar cuerda de ATQ% en vez de Regeneración de Energía. Es un hipercarry de Erudición que castiga a grupos de enemigos con debilidades cubiertas.",
    "ficha": {
      "nombreCompleto": "Anaxa (Anaxagoras)",
      "faccion": "Amphoreus",
      "desc": "Erudito y Chrysos Heir del Título de la Razón en Amphoreus, un genio de mente fría apodado el Doctor. Unidad de Erudición de tipo Viento que implanta Debilidades de todos los elementos en los enemigos para romperlos y encadenar Habilidades potenciadas gratis, funcionando como un hipercarry de área de altísimo techo de daño.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/73/Character_Anaxa_Splash_Art.png"
    }
  },
  {
    "id": "hyacine",
    "nombre": "Hyacine",
    "rareza": "5",
    "elemento": "Viento",
    "camino": "Reminiscencia",
    "version": "3.3",
    "estado": "completo",
    "cuerpo": {
      "principal": "Terapia",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "Daño de Viento"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "Velocidad",
      "PV%",
      "Daño Crítico",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Que el arcoíris adorne el cielo por siempre",
        "en": "Long May Rainbows Adorn the Sky",
        "nota": "Cono insignia: mucha Velocidad y aumenta el daño que reciben los enemigos.",
        "best": true
      },
      {
        "es": "El telón de la memoria nunca cae",
        "en": "Memory's Curtain Never Falls",
        "nota": "Mejor opción F2P (tienda de Herta): +Velocidad para llegar a 200 y buff de daño al equipo.",
        "best": false
      },
      {
        "es": "Victoria en un parpadeo",
        "en": "Victory in a Blink",
        "nota": "Relleno temprano hasta conseguir un cono de Reminiscencia mejor.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Diosa Guerrera de Sol y Trueno",
        "en": "Warrior Goddess of Sun and Thunder",
        "nota": "4pz: +Velocidad y estado Lluvia Suave (+6% VEL y +15% Daño Crítico al equipo al curar).",
        "best": true
      },
      {
        "es": "Árbol Gigante de Absorta Meditación",
        "en": "Giant Tree of Rapt Brooding",
        "nota": "2pz planar: +Velocidad y potencia la curación al superar cierto umbral de VEL.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Sanadora universal",
        "agentes": [
          "Hyacine",
          "Phainon",
          "Cerydra",
          "Sunday"
        ],
        "best": true
      },
      {
        "nombre": "Núcleo de Reminiscencia",
        "agentes": [
          "Hyacine",
          "Castorice",
          "Evernight",
          "Tribbie"
        ],
        "best": false
      }
    ],
    "consejo": "Prioriza superar los 200 de Velocidad en combate: cada punto por encima aumenta su curación (rasgo Tempestuous Halt). Con 100% Prob. Crítico innata, el resto va a Daño Crítico y PV%.",
    "ficha": {
      "nombreCompleto": "Hyacine",
      "faccion": "Amphoreus",
      "desc": "Heredera de Crisos de Anfóreo que porta la Coreflama de la Vida junto a su memosprite Little Ica. Sanadora del camino del Reminiscencia (Viento) que escala con PV y Velocidad.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/7/7d/Character_Hyacine_Splash_Art.png"
    }
  },
  {
    "id": "cipher",
    "nombre": "Cipher",
    "rareza": "5",
    "elemento": "Cuántico",
    "camino": "Nihilidad",
    "version": "3.3",
    "estado": "completo",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Cuántico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Velocidad",
      "Daño Crítico",
      "Prob. Crítico",
      "ATQ%"
    ],
    "conos": [
      {
        "es": "Las mentiras bailan en la brisa",
        "en": "Lies Dance on the Breeze",
        "nota": "Cono insignia: +18% Velocidad y reduce la DEF enemiga hasta 24%.",
        "best": true
      },
      {
        "es": "La resolución brilla como perlas de sudor",
        "en": "Resolution Shines As Pearls of Sweat",
        "nota": "Alternativa: Prob. de Efecto y daño extra mediante debuffs.",
        "best": false
      },
      {
        "es": "Antes del amanecer",
        "en": "Before Dawn",
        "nota": "Opción de daño para su Definitiva y ataques adicionales.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Buzo Pionero de Aguas Muertas",
        "en": "Pioneer Diver of Dead Waters",
        "nota": "4pz: daño y crítico contra enemigos con debuffs; encaja con sus propios debuffs.",
        "best": true
      },
      {
        "es": "Vanguardia del Firmamento: Glamoth",
        "en": "Firmament Frontline: Glamoth",
        "nota": "2pz planar: buff de daño a 135/160 VEL, ideal por su alta Velocidad.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Equipo Acheron",
        "agentes": [
          "Cipher",
          "Acheron",
          "Jiaoqiu",
          "Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "Nihilidad debuff",
        "agentes": [
          "Cipher",
          "Silver Wolf",
          "Kafka",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Constrúyela como Sub-DPS con Velocidad y Crítico; su +50% Prob. Crítico de rasgo (Empyrean Strides) permite Cuerpo de Daño Crítico. Apunta a 170 VEL. Encaja de lujo en equipos de Nihilidad con Acheron.",
    "ficha": {
      "nombreCompleto": "Cipher",
      "faccion": "Cazadores de Estelarones",
      "desc": "Ladrona de guante blanco de los Cazadores de Estelarones. Personaje Cuántico del camino de la Nihilidad que implanta sus propios debuffs y actúa como Sub-DPS veloz.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/0/0d/Character_Cipher_Splash_Art.png"
    }
  },
  {
    "id": "phainon",
    "nombre": "Phainon",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Destrucción",
    "version": "3.4",
    "estado": "completo",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Físico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Así arde el alba",
        "en": "Thus Burns the Dawn",
        "nota": "Cono insignia: mayor ATQ base del juego (687), 18% ignora DEF permanente y gran buff de daño tras la Definitiva.",
        "best": true
      },
      {
        "es": "Sobre la caída de un eón",
        "en": "On the Fall of an Aeon",
        "nota": "Alternativa accesible: ATQ escalable y penetración de DEF.",
        "best": false
      },
      {
        "es": "Un rastro de sangre pasada",
        "en": "A Trail of Bygone Blood",
        "nota": "Opción 4★ sólida para su fase potenciada.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Capitán Surcaolas",
        "en": "Wavestrider Captain",
        "nota": "4pz: +16% Daño Crítico y +48% ATQ un turno tras la Definitiva con 2 cargas de Ayuda.",
        "best": true
      },
      {
        "es": "Arcadia de Sueños Entretejidos",
        "en": "Arcadia of Woven Dreams",
        "nota": "2pz planar: buff de daño durante su Estado Potenciado.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Doble avance de turno",
        "agentes": [
          "Phainon",
          "Sunday",
          "Bronya",
          "Hyacine"
        ],
        "best": true
      },
      {
        "nombre": "Sinergia Anfóreo",
        "agentes": [
          "Phainon",
          "Cerydra",
          "Sunday",
          "Cyrene"
        ],
        "best": false
      }
    ],
    "consejo": "DPS de autosustento: en su Estado Potenciado los aliados salen de combate y no reciben daño, por lo que a menudo no necesita sanador hasta la 3.ª Definitiva. Cuerpo de Prob. Crítico (recibe Daño Crítico de rasgos y aliados); apunta a ~100% Prob. Crítico y 150%+ Daño Crítico sin buffs.",
    "ficha": {
      "nombreCompleto": "Phainon",
      "faccion": "Amphoreus",
      "desc": "Heredero de Crisos de Anfóreo, el 'Libertador' que porta la llama del Ocaso. DPS Físico del camino de la Destrucción con un devastador Estado Potenciado (Khaslana).",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/4/47/Character_Phainon_Splash_Art.png"
    }
  },
  {
    "id": "hysilens",
    "nombre": "Hysilens",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Nihilidad",
    "version": "3.5",
    "estado": "completo",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "Prob. de Efecto"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño Físico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. de Efecto",
      "ATQ%",
      "Velocidad",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "¿Por qué canta el océano?",
        "en": "Why Does the Ocean Sing",
        "nota": "Cono insignia: mucha Prob. de Efecto y aumenta el daño por DoT que reciben los enemigos.",
        "best": true
      },
      {
        "es": "Ojos de la presa",
        "en": "Eyes of the Prey",
        "nota": "Alternativa 4★: Prob. de Efecto y daño por efectos periódicos.",
        "best": false
      },
      {
        "es": "Buenas noches y que duermas bien",
        "en": "Good Night and Sleep Well",
        "nota": "Escala el daño según la cantidad de debuffs del enemigo.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Prisionero en Confinamiento Profundo",
        "en": "Prisoner in Deep Confinement",
        "nota": "4pz: +ATQ e ignora DEF por cada DoT activo en el enemigo.",
        "best": true
      },
      {
        "es": "Jolgorio junto al Mar",
        "en": "Revelry by the Sea",
        "nota": "2pz planar: gran buff de DoT al superar 3600 de ATQ.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "DoT clásico",
        "agentes": [
          "Hysilens",
          "Kafka",
          "Black Swan",
          "Aventurino"
        ],
        "best": true
      },
      {
        "nombre": "Nihilidad DoT",
        "agentes": [
          "Hysilens",
          "Kafka",
          "Ruan Mei",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "DPS de daño por efectos periódicos (DoT): alcanza 120% de Prob. de Efecto para activar su bono de daño y ~3600 de ATQ para el set planar. Con 135 VEL rinde mejor. Brilla junto a Kafka.",
    "ficha": {
      "nombreCompleto": "Hysilens",
      "faccion": "Amphoreus",
      "desc": "Personaje Físico del camino de la Nihilidad ligada a Anfóreo. DPS de daño por efectos periódicos (DoT) que amplifica las cadenas de daño de equipos como el de Kafka.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/60/Character_Hysilens_Splash_Art.png"
    }
  },
  {
    "id": "cerydra",
    "nombre": "Cerydra",
    "rareza": "5",
    "elemento": "Viento",
    "camino": "Armonía",
    "version": "3.5",
    "estado": "completo",
    "cuerpo": {
      "principal": "ATQ%",
      "alt": "PV%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "ATQ%",
      "alt": "Daño de Viento"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "ATQ%",
      "Velocidad",
      "Daño Crítico",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Época grabada en sangre dorada",
        "en": "Epoch Etched in Golden Blood",
        "nota": "Cono insignia: +ATQ propio y enorme buff de Daño de Habilidad al aliado potenciado.",
        "best": true
      },
      {
        "es": "Un ascenso con los pies en la tierra",
        "en": "A Grounded Ascent",
        "nota": "Alternativa: buff de daño al equipo.",
        "best": false
      },
      {
        "es": "El sustento eterno",
        "en": "The Forever Victual",
        "nota": "Cono gratuito 4★ funcional para arrancar.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Suplicio Revivido del Sacerdote",
        "en": "Sacerdos' Relived Ordeal",
        "nota": "4pz: otorga Daño Crítico al aliado que potencia.",
        "best": true
      },
      {
        "es": "Lushaka, los Mares Hundidos",
        "en": "Lushaka, the Sunken Seas",
        "nota": "2pz planar: bonus de ATQ al aliado en primera posición.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Buffo para Phainon",
        "agentes": [
          "Cerydra",
          "Phainon",
          "Sunday",
          "Hyacine"
        ],
        "best": true
      },
      {
        "nombre": "Amplificadora de DPS",
        "agentes": [
          "Cerydra",
          "Anaxa",
          "Tribbie",
          "Aventurino"
        ],
        "best": false
      }
    ],
    "consejo": "Apoyo (Armonía) que hace que un aliado use su Habilidad dos veces (Mérito Militar) y le transfiere Daño Crítico. Necesita ~4000 de ATQ para el bono completo; con 140 VEL alcanza el umbral de 160 en combate. Ideal para Phainon, Anaxa o Feixiao.",
    "ficha": {
      "nombreCompleto": "Cerydra",
      "faccion": "Amphoreus",
      "desc": "Personaje Viento del camino de la Armonía de Anfóreo. Apoyo que escala con ATQ, otorga Daño Crítico y permite a un aliado repetir su Habilidad.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/b/ba/Character_Cerydra_Splash_Art.png"
    }
  },
  {
    "id": "evernight",
    "nombre": "Evernight",
    "rareza": "5",
    "elemento": "Hielo",
    "camino": "Reminiscencia",
    "version": "3.6",
    "estado": "completo",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "Daño de Hielo"
    },
    "cuerda": {
      "principal": "PV%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Daño Crítico",
      "PV%",
      "Prob. Crítico",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Hacia las estrellas de Evernight",
        "en": "To Evernight's Stars",
        "nota": "Cono insignia: gran +PV% (escala todos sus multiplicadores y a Evey) y regenera Energía.",
        "best": true
      },
      {
        "es": "Que las despedidas sean más bellas",
        "en": "Make Farewells More Beautiful",
        "nota": "Alternativa (insignia de Castorice): +PV% y 30% ignora DEF para ella y su memosprite.",
        "best": false
      },
      {
        "es": "La flor recuerda",
        "en": "The Flower Remembers",
        "nota": "Mejor 4★ (pase de batalla): +24% Daño Crítico.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Libertador que Rehace el Mundo",
        "en": "World-Remaking Deliverer",
        "nota": "4pz: buff de daño a todo el equipo y estadísticas de PV.",
        "best": true
      },
      {
        "es": "Serena Heredad del Osario",
        "en": "Bone Collection's Serene Demesne",
        "nota": "2pz planar: potencia el daño al superar umbrales de PV (5000/7000).",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Núcleo de Reminiscencia",
        "agentes": [
          "Evernight",
          "Castorice",
          "Cyrene",
          "Hyacine"
        ],
        "best": true
      },
      {
        "nombre": "DPS autónoma",
        "agentes": [
          "Evernight",
          "Trailblazer (Reminiscencia)",
          "Tribbie",
          "Hyacine"
        ],
        "best": false
      }
    ],
    "consejo": "Cuerpo de Daño Crítico (obtiene ~35% Prob. Crítico de rasgo Dark the Night; apunta a 65% Prob. Crítico en relicarios) y mucho PV (7000+ para daño óptimo). Brilla en equipos mono-Reminiscencia, sobre todo con Castorice y Hyacine.",
    "ficha": {
      "nombreCompleto": "March 7th (Evernight)",
      "faccion": "Amphoreus",
      "desc": "Forma 'Evernight' de March 7th en Anfóreo. Personaje de Hielo del camino del Reminiscencia que escala con PV; DPS con memosprite (Evey) capaz de apoyar al equipo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/6/68/Character_Evernight_Splash_Art.png"
    }
  },
  {
    "id": "cyrene",
    "nombre": "Cyrene",
    "rareza": "5",
    "elemento": "Hielo",
    "camino": "Reminiscencia",
    "version": "3.7",
    "estado": "completo",
    "cuerpo": {
      "principal": "PV%",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "Daño de Hielo"
    },
    "cuerda": {
      "principal": "PV%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Velocidad",
      "PV%",
      "Daño Crítico",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Este amor, para siempre",
        "en": "This Love, Forever",
        "nota": "Cono insignia (BiS): fuerte escalado con Velocidad.",
        "best": true
      },
      {
        "es": "El telón de la memoria nunca cae",
        "en": "Memory's Curtain Never Falls",
        "nota": "Alternativa sólida si nadie más lo usa.",
        "best": false
      },
      {
        "es": "Las flores nunca olvidan",
        "en": "The Flower Remembers",
        "nota": "Cono 4★ del camino de la Reminiscencia obtenible gratis por evento; aporta Daño Crítico. Alternativa económica cuando no tienes conos 5★.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Mensajero que Cruza el Ciberespacio",
        "en": "Messenger Traversing Hackerspace",
        "nota": "4pz: +Velocidad al equipo tras la Definitiva; también se juega 2pz Mensajero + 2pz Suplicio del Sacerdote por VEL y Crítico.",
        "best": true
      },
      {
        "es": "Vonwacq Vivaz",
        "en": "Sprightly Vonwacq",
        "nota": "2pz planar: +Velocidad y avance de turno; alternativa Tierra Eterna de Anfóreo.",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Herederos de Crisos",
        "agentes": [
          "Cyrene",
          "Castorice",
          "Evernight",
          "Hyacine"
        ],
        "best": true
      },
      {
        "nombre": "Apoyo de Reminiscencia",
        "agentes": [
          "Cyrene",
          "Evernight",
          "Tribbie",
          "Aventurino"
        ],
        "best": false
      }
    ],
    "consejo": "Apoyo cuyo eje es la Velocidad: llega a 180 VEL para el +20% de daño a todo el equipo, y cada punto por encima suma penetración de RES de Hielo (hasta 120%). Rinde al máximo con otros Herederos de Crisos.",
    "ficha": {
      "nombreCompleto": "Cyrene",
      "faccion": "Amphoreus",
      "desc": "Personaje de Hielo del camino del Reminiscencia de Anfóreo. Apoyo que escala con Velocidad y otorga daño y penetración de RES de Hielo a todo el equipo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8b/Character_Cyrene_Splash_Art.png"
    }
  },
  {
    "id": "saber",
    "nombre": "Saber",
    "rareza": "5",
    "elemento": "Viento",
    "camino": "Destrucción",
    "version": "3.4",
    "estado": "completo",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "Prob. Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "ATQ%"
    },
    "esfera": {
      "principal": "Daño de Viento",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Velocidad",
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%"
    ],
    "conos": [
      {
        "es": "Coronación sin agradecimiento",
        "en": "A Thankless Coronation",
        "nota": "Cono de firma: crítico y grandes buffs de ATQ/daño ligados a su Definitiva; diseñado para su ciclo de 300 de energía.",
        "best": true
      },
      {
        "es": "Que arda el alba",
        "en": "Thus Burns the Dawn",
        "nota": "5★ de Phainon: ATQ base altísimo e ignora DEF; el mejor sustituto si lo tienes.",
        "best": false
      },
      {
        "es": "Sobre la caída de un Eón",
        "en": "On the Fall of an Aeon",
        "nota": "5★ gratuito del gremio: ATQ acumulable y buff de daño tras Ruptura; opción F2P sólida.",
        "best": false
      },
      {
        "es": "Sangre del pasado",
        "en": "A Trail of Bygone Blood",
        "nota": "4★ de battle pass de Destrucción: buena opción accesible orientada a la Definitiva.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Capitán del mar maldito (4pz)",
        "en": "Wavestrider Captain",
        "nota": "4pz cavernas: +16% Daño Crítico y +48% ATQ tras lanzar la Definitiva; encaja perfecto con su patrón de daño.",
        "best": true
      },
      {
        "es": "Salsotto inerte (2pz)",
        "en": "Inert Salsotto",
        "nota": "Adorno planar: +Prob. Crítico y +15% daño de Definitiva con 50%+ de crítico; su planar más consistente.",
        "best": true
      },
      {
        "es": "Glamoth, frente del firmamento (2pz)",
        "en": "Firmament Frontline: Glamoth",
        "nota": "Alternativa planar: +ATQ y +12% de daño si alcanzas 135+ de Velocidad.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry de Definitiva",
        "agentes": [
          "Saber",
          "Sunday",
          "Robin",
          "Huohuo"
        ],
        "best": true
      },
      {
        "nombre": "Energía F2P",
        "agentes": [
          "Saber",
          "Tingyun",
          "Trailblazer (Reminiscencia)",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Saber es una DPS de Definitiva: acumula 300 de energía y Resonancias de Núcleo para descargar Excalibur, fuerte tanto en un solo objetivo como en AoE. Prioriza aliados que le den energía y avance de turno (Sunday, Robin, Huohuo). Apunta a ~135 de Velocidad si usas Glamoth, 60-80% de Prob. Crítico (tiene crítico extra de rasgos) y 140%+ de Daño Crítico.",
    "ficha": {
      "nombreCompleto": "Saber (Artoria Pendragon)",
      "faccion": "Colaboración Fate/stay night [UBW]",
      "desc": "La Reina de los Caballeros, Artoria Pendragon, Servant de la clase Saber llegada con la colaboración de Fate/stay night [Unlimited Blade Works]. DPS de Viento del camino de la Destrucción cuyo plan de juego gira en torno a cargar y repetir su devastadora Definitiva.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/0/04/Character_Saber_Splash_Art.png"
    }
  },
  {
    "id": "archer",
    "nombre": "Archer",
    "rareza": "5",
    "elemento": "Cuántico",
    "camino": "Cacería",
    "version": "3.4",
    "estado": "completo",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "ATQ%",
      "alt": "Velocidad (no prioritaria en él)"
    },
    "esfera": {
      "principal": "Daño Cuántico",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "Infierno donde arden los ideales",
        "en": "The Hell Where Ideals Burn",
        "nota": "Cono de firma: crítico y daño amplificado al gastar puntos de habilidad; hecho para su estilo devorador de PH.",
        "best": true
      },
      {
        "es": "Crucero estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "5★ de la tienda de Herta: Prob. Crítico y ATQ contra enemigos con poca vida; gran opción accesible.",
        "best": false
      },
      {
        "es": "Juego de espadas",
        "en": "Swordplay",
        "nota": "4★: daño acumulable al golpear repetidamente al mismo objetivo; ideal para sus habilidades encadenadas.",
        "best": false
      },
      {
        "es": "Ganador final",
        "en": "Final Victor",
        "nota": "4★: ATQ y Daño Crítico acumulable con golpes críticos; alternativa gratuita sólida.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Genio de las estrellas relucientes (4pz)",
        "en": "Genius of Brilliant Stars",
        "nota": "4pz cavernas: +Daño Cuántico e ignora DEF (más contra débiles a Cuántico); su mejor set.",
        "best": true
      },
      {
        "es": "Arena rutilante (2pz)",
        "en": "Rutilant Arena",
        "nota": "Adorno planar: +Prob. Crítico y +daño de ataque básico y habilidad con 70%+ de crítico; perfecto para su spam de habilidad.",
        "best": true
      },
      {
        "es": "Poetisa del colapso elegíaco (4pz)",
        "en": "Poet of Mourning Collapse",
        "nota": "Alternativa cavernas: mucho crítico a cambio de Velocidad; viable porque Archer apenas la necesita.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Hipercarry de puntos de habilidad",
        "agentes": [
          "Archer",
          "Sparkle",
          "Robin",
          "Huohuo"
        ],
        "best": true
      },
      {
        "nombre": "Mono Cuántico",
        "agentes": [
          "Archer",
          "Silver Wolf",
          "Sparkle",
          "Fu Xuan"
        ],
        "best": false
      }
    ],
    "consejo": "Archer devora puntos de habilidad: puede lanzar Caladbolg II varias veces por turno acumulando buffs de daño, así que júntalo con generadores de PH (Sparkle es casi obligatoria). No inviertas en Velocidad: prioriza llegar a 80-100% de Prob. Crítico, 110%+ de Daño Crítico y 2800+ de ATQ.",
    "ficha": {
      "nombreCompleto": "Archer (EMIYA)",
      "faccion": "Colaboración Fate/stay night [UBW]",
      "desc": "El Servant de la clase Archer de Fate/stay night [Unlimited Blade Works]. DPS Cuántico del camino de Cacería que convierte los puntos de habilidad del equipo en ráfagas de espadas proyectadas, culminando en su Definitiva Unlimited Blade Works.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/2/25/Character_Archer_Splash_Art.png"
    }
  },
  {
    "id": "the-dahlia",
    "nombre": "La Dalia",
    "rareza": "5",
    "elemento": "Fuego",
    "camino": "Nihilidad",
    "version": "3.8",
    "estado": "completo",
    "cuerpo": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "cuerda": {
      "principal": "Efecto de Ruptura",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Velocidad",
      "Efecto de Ruptura",
      "PV%",
      "DEF%"
    ],
    "conos": [
      {
        "es": "No olvides su fuego",
        "en": "Never Forget Her Flame",
        "nota": "Cono de firma: +Efecto de Ruptura, aumenta el daño de Ruptura de ella y de un aliado y ayuda a recuperar puntos de habilidad.",
        "best": true
      },
      {
        "es": "El largo camino a casa",
        "en": "Long Road Leads Home",
        "nota": "5★ de Fugue: Efecto de Ruptura y vulnerabilidad al daño de Ruptura; excelente sustituto.",
        "best": false
      },
      {
        "es": "Calderón",
        "en": "Fermata",
        "nota": "Mejor 4★ accesible (battle pass): +Efecto de Ruptura constante.",
        "best": false
      },
      {
        "es": "Determinación reluciente",
        "en": "Resolution Shines As Pearls of Sweat",
        "nota": "4★ gratuito: implanta Ensnared (reduce DEF); opción de emergencia orientada a apoyo.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Caballería de hierro plaguicida (4pz)",
        "en": "Iron Cavalry Against the Scourge",
        "nota": "4pz cavernas: +Efecto de Ruptura y su Ruptura/Super Ruptura ignora DEF con 150/250%+; su mejor set.",
        "best": true
      },
      {
        "es": "Fragua de la linterna Kalpagni (2pz)",
        "en": "Forge of the Kalpagni Lantern",
        "nota": "Adorno planar: +Velocidad y +40% Efecto de Ruptura contra débiles a Fuego; ella misma implanta esa debilidad con su Definitiva.",
        "best": true
      },
      {
        "es": "Ladrón del rastro meteórico (4pz)",
        "en": "Thief of Shooting Meteor",
        "nota": "Alternativa cavernas: 32% de Efecto de Ruptura total y energía al romper; útil si te falta Ruptura.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Super Ruptura con Firefly",
        "agentes": [
          "Firefly",
          "La Dalia",
          "Ruan Mei",
          "Lingsha"
        ],
        "best": true
      },
      {
        "nombre": "Ruptura con Rappa",
        "agentes": [
          "Rappa",
          "La Dalia",
          "Fugue",
          "Lingsha"
        ],
        "best": false
      }
    ],
    "consejo": "La Dalia es la habilitadora de Super Ruptura definitiva: con su habilidad los aliados infligen daño de Super Ruptura aunque el enemigo no esté roto, y además sube la eficiencia de Ruptura del equipo. Su Definitiva implanta debilidad al Fuego. Apunta a 180%+ de Efecto de Ruptura y 140-160 de Velocidad; el resto, en PV/DEF para sobrevivir.",
    "ficha": {
      "nombreCompleto": "La Dalia (The Dahlia)",
      "faccion": "Banda de la Aniquilación",
      "desc": "Constance, 'La Dalia', figura de la Banda de la Aniquilación ligada a los Cremadores y a la Mansión de la Llama Eterna. Personaje de Fuego del camino de la Nihilidad que habilita la Super Ruptura de todo el equipo sin necesidad de romper al enemigo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/9/92/Character_The_Dahlia_Splash_Art.png"
    }
  },
  {
    "id": "yao-guang",
    "nombre": "Yao Guang",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Exultación",
    "version": "4.0",
    "estado": "completo",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "PV%"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "DEF%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "Velocidad",
      "Prob. Crítico",
      "Daño Crítico",
      "Regeneración de Energía"
    ],
    "conos": [
      {
        "es": "Cuando se decidió a ver",
        "en": "When She Decided to See",
        "nota": "Cono de firma: +Velocidad y Regeneración de Energía, y da Prob./Daño Crítico al usar su Definitiva sobre aliados.",
        "best": true
      },
      {
        "es": "Las aventuras de Champigaga",
        "en": "Mushy Shroomy's Adventures",
        "nota": "Mejor 4★ alternativo (tienda): +Exultación y vulnerabilidad al daño en los enemigos.",
        "best": false
      },
      {
        "es": "La buena suerte de hoy",
        "en": "Today's Good Luck",
        "nota": "4★ de battle pass: Prob. Crítico y Exultación acumulable.",
        "best": false
      },
      {
        "es": "Risita burlona",
        "en": "Sneering",
        "nota": "4★: +Exultación durante el Instante de Aha; opción de emergencia.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Adivino de alcance remoto (4pz)",
        "en": "Diviner of Distant Reach",
        "nota": "4pz cavernas: Velocidad y crítico, y con 160+ de Velocidad sube un 10% la Exultación de todo el equipo; su set dedicado.",
        "best": true
      },
      {
        "es": "Lushaka, sumergido bajo el mar (2pz)",
        "en": "Lushaka, the Sunken Seas",
        "nota": "Adorno planar: Regeneración de Energía y +ATQ al aliado de la primera posición (tu DPS).",
        "best": true
      },
      {
        "es": "Guerrera celestial del sol y el trueno (4pz)",
        "en": "Warrior Goddess of Sun and Thunder",
        "nota": "Alternativa cavernas: Velocidad y buff de Velocidad al equipo si aún no tienes el set de Exultación.",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Exultación 4.0",
        "agentes": [
          "Chispa",
          "Yao Guang",
          "Silver Wolf LV.999",
          "Huohuo"
        ],
        "best": true
      },
      {
        "nombre": "Exultación accesible",
        "agentes": [
          "Chispa",
          "Yao Guang",
          "Trailblazer (Exultación)",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Yao Guang es el apoyo central de la vía de la Exultación (Eón Aha): reparte daño, penetración de RES y buffs de zona, y su Definitiva concede acciones extra y dispara las habilidades de Exultación de sus aliados. Apunta a 160-180 de Velocidad (según cono) y ~70-80% de Prob. Crítico para su daño propio; la Regeneración de Energía es clave para ciclar su Definitiva.",
    "ficha": {
      "nombreCompleto": "Yao Guang",
      "faccion": "Xianzhou Yuque",
      "desc": "Generala árbitro de los Caballeros de las Nubes del Xianzhou Yuque, una de los Seis Aurigas. Apoyo Físico del nuevo camino de la Exultación que potencia la Exultación del equipo y genera turnos extra con su Definitiva.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/e1/Character_Yao_Guang_Splash_Art.png"
    }
  },
  {
    "id": "sparxie",
    "nombre": "Chispa",
    "rareza": "5",
    "elemento": "Fuego",
    "camino": "Exultación",
    "version": "4.0",
    "estado": "completo",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "ATQ%",
      "alt": "Velocidad"
    },
    "esfera": {
      "principal": "ATQ%",
      "alt": "Daño de Fuego"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "El cautivador mundochispa",
        "en": "Dazzled by a Flowery World",
        "nota": "Cono de firma: +Daño Crítico, amplía el máximo de puntos de habilidad y sube la Exultación del equipo al gastar 3+ PH en un turno.",
        "best": true
      },
      {
        "es": "La buena suerte de hoy",
        "en": "Today's Good Luck",
        "nota": "Mejor 4★ (battle pass): Prob. Crítico y Exultación acumulable; muy buen sustituto.",
        "best": false
      },
      {
        "es": "Las aventuras de Champigaga",
        "en": "Mushy Shroomy's Adventures",
        "nota": "4★ de tienda: +Exultación y vulnerabilidad al daño; opción accesible.",
        "best": false
      }
    ],
    "reliquias": [
      {
        "es": "Chica mágica de hazañas gloriosas (4pz)",
        "en": "Ever-Glorious Magical Girl",
        "nota": "4pz cavernas: +16% Daño Crítico y su daño de Exultación ignora un 10% de la DEF; su set dedicado.",
        "best": true
      },
      {
        "es": "Tengoku@sala de chat (2pz)",
        "en": "Tengoku@Livestream",
        "nota": "Adorno planar: +16% Daño Crítico, y +32% adicional si consume 3+ puntos de habilidad en el mismo turno; lo activa sin esfuerzo.",
        "best": true
      },
      {
        "es": "Izumo gensei y reino divino de Takama (2pz)",
        "en": "Izumo Gensei and Takama Divine Realm",
        "nota": "Alternativa planar: +ATQ y Prob. Crítico si va acompañada de otro personaje de Exultación (Yao Guang).",
        "best": false
      }
    ],
    "equipos": [
      {
        "nombre": "Exultación 4.0",
        "agentes": [
          "Chispa",
          "Yao Guang",
          "Silver Wolf LV.999",
          "Huohuo"
        ],
        "best": true
      },
      {
        "nombre": "Exultación accesible",
        "agentes": [
          "Chispa",
          "Yao Guang",
          "Trailblazer (Exultación)",
          "Gallagher"
        ],
        "best": false
      }
    ],
    "consejo": "Sparxie ('Chispa' en ES) es la DPS estrella de la Exultación: cada uso de su habilidad genera Remates (Punchlines) que los personajes de Exultación consumen para infligir daño de Exultación, así que devora puntos de habilidad. Apunta a ~3600 de ATQ para el máximo de su rasgo, 95-100% de Prob. Crítico y 140-180% de Daño Crítico; Yao Guang es su pareja casi obligatoria.",
    "ficha": {
      "nombreCompleto": "Chispa (Sparxie)",
      "faccion": "Bufones Enmascarados",
      "desc": "Bufona Enmascarada llegada desde Planarcadia con la v4.0. DPS de Fuego del camino de la Exultación que convierte los puntos de habilidad en Remates cómicos, repartiendo daño de Exultación y Daño Crítico a sus aliados exultantes.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/a/ab/Character_Sparxie_Splash_Art.png"
    }
  },
  {
    "id": "ashveil",
    "nombre": "Ashveil",
    "rareza": "5",
    "elemento": "Rayo",
    "camino": "Cacería",
    "version": "4.1",
    "estado": "completo",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "ATQ%",
      "alt": "Velocidad (como sub-DPS con Sunday/Bronya)"
    },
    "esfera": {
      "principal": "Daño de Rayo",
      "alt": "ATQ%"
    },
    "cuerda": {
      "principal": "ATQ%",
      "alt": "Regeneración de Energía"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "ATQ%",
      "Velocidad"
    ],
    "conos": [
      {
        "es": "El final de una mentira",
        "en": "The Finale of a Lie",
        "nota": "Cono de firma: +20% de vulnerabilidad al daño a todos los enemigos, Prob. Crítico y ATQ%; BiS",
        "best": true
      },
      {
        "es": "El bautismo del pensamiento puro",
        "en": "Baptism of Pure Thought",
        "nota": "Alt 5★ (firma de Dr. Ratio): Daño Crítico por debuffs e ignora DEF tras el definitivo; combina con su reducción de DEF del 40%"
      },
      {
        "es": "Preocupaciones y felicidad",
        "en": "Worrisome, Blissful",
        "nota": "Alt 5★ (firma de Topaz): Prob. Crítico y daño de ataque de seguimiento; como sub-DPS aumenta el Daño Crítico recibido por el objetivo"
      },
      {
        "es": "Crucero estelar",
        "en": "Cruising in the Stellar Sea",
        "nota": "Mejor F2P (tienda de Herta): Prob. Crítico contra enemigos al 50% de PV o menos y ATQ al rematar"
      }
    ],
    "reliquias": [
      {
        "es": "Gran duque incinerador (4pz)",
        "en": "The Ashblazing Grand Duke",
        "nota": "Sus ataques de seguimiento multigolpe acumulan el set al máximo; BiS para su daño personal",
        "best": true
      },
      {
        "es": "Duran, dinastía de lobos raudos (2pz)",
        "en": "Duran, Dynasty of Running Wolves",
        "nota": "Planar: +25% daño de ataque de seguimiento y +25% Daño Crítico; mejor opción como DPS principal"
      },
      {
        "es": "Ciudad de las mil estrellas (2pz)",
        "en": "City of Converging Stars",
        "nota": "Planar alt: +12% Daño Crítico al equipo tras rematar; mejor opción como sub-DPS"
      }
    ],
    "equipos": [
      {
        "nombre": "Seguimiento Feixiao",
        "agentes": "Feixiao · Ashveil · Robin · Aventurine",
        "best": true
      },
      {
        "nombre": "Doble seguimiento 4.x",
        "agentes": "Ashveil · Mortenax Blade · Tribbie · Hyacine"
      },
      {
        "nombre": "DPS principal",
        "agentes": "Ashveil · Sunday · Tribbie · Dan Heng • Permansor Terrae"
      }
    ],
    "consejo": "DPS/sub-DPS de ataques de seguimiento: reduce la DEF enemiga un 40% con la Habilidad y usa el Definitivo para lanzar ataques de seguimiento potenciados; sus cargas se alimentan de los ataques aliados, así que júntalo con equipos que ataquen mucho (Feixiao, Tribbie).",
    "ficha": {
      "nombreCompleto": "Ashveil",
      "faccion": "Guardaestrellas",
      "desc": "El 'Detective Inmortal' de Planarcadia (v4.1): cazador de Rayo centrado en ataques de seguimiento que reduce DEF y aumenta el Daño Crítico del equipo; pareja ideal de Feixiao y excelente DPS principal con debuffers.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/4/44/Character_Ashveil_Portrait.png"
    }
  },
  {
    "id": "trailblazer-exultacion",
    "nombre": "Trazacaminos (Exultación)",
    "rareza": "5",
    "elemento": "Rayo",
    "camino": "Exultación",
    "version": "4.2",
    "estado": "completo",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "PV% / DEF%"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "—"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "DEF% / ATQ%"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "—"
    },
    "substats": [
      "Velocidad",
      "Prob. Crítico",
      "Daño Crítico",
      "PV%"
    ],
    "conos": [
      {
        "es": "Cuando se decidió a ver",
        "en": "When She Decided to See",
        "nota": "El mejor (firma de Yao Guang): Velocidad, Regeneración de Energía y crítico al equipo; da energía al inicio de cada oleada",
        "best": true
      },
      {
        "es": "Exultación desbordante de bendiciones",
        "en": "Elation Brimming With Blessings",
        "nota": "F2P (tienda de Herta) y el más usado: buffs adicionales al objetivo de su Definitivo"
      },
      {
        "es": "Las aventuras de Champigaga",
        "en": "Mushy Shroomy's Adventures",
        "nota": "F2P (tienda del Salón Olvidado): aumenta el Daño de Exultación que reciben los enemigos; acumulable con más copias en el equipo"
      },
      {
        "es": "Juntos hacia el futuro",
        "en": "Tomorrow, Together",
        "nota": "Cono de evento: Daño Crítico propio y buff de Exultación al equipo de 1 turno"
      }
    ],
    "reliquias": [
      {
        "es": "Adivino de alcance remoto (4pz)",
        "en": "Diviner of Distant Reach",
        "nota": "Set de Exultación: buff de Exultación al equipo, Velocidad y Prob. Crítico; el más eficiente de farmear",
        "best": true
      },
      {
        "es": "Águila del crepúsculo (4pz)",
        "en": "Eagle of Twilight Line",
        "nota": "Alt min-max: 25% de avance de acción tras el Definitivo"
      },
      {
        "es": "Vonwacq el vivaz (2pz)",
        "en": "Sprightly Vonwacq",
        "nota": "Planar: Regeneración de Energía para ciclar antes su Definitivo",
        "best": true
      },
      {
        "es": "Ciudad de las mil estrellas (2pz)",
        "en": "City of Converging Stars",
        "nota": "Planar alt: +12% Daño Crítico al equipo tras rematar"
      }
    ],
    "equipos": [
      {
        "nombre": "Exultación Silver Wolf",
        "agentes": "Silver Wolf Niv. 999 · Trazacaminos (Exultación) · Yao Guang · Huohuo",
        "best": true
      },
      {
        "nombre": "Exultación Evanescia",
        "agentes": "Evanescia · Trazacaminos (Exultación) · Yao Guang · Huohuo"
      },
      {
        "nombre": "Triple DPS Exultación",
        "agentes": "Silver Wolf Niv. 999 · Sparxie · Trazacaminos (Exultación) · Huohuo"
      }
    ],
    "consejo": "Soporte de Exultación (5ª vía del protagonista, v4.2): aumenta el Daño Crítico de un aliado y le permite usar de inmediato una Habilidad de Exultación adicional; prioriza Velocidad (160+) y Regeneración de Energía para mantener el buff siempre activo.",
    "ficha": {
      "nombreCompleto": "Trazacaminos (Exultación)",
      "faccion": "Expreso Astral",
      "desc": "El Trazacaminos por la senda de la Exultación, de elemento Rayo: soporte que otorga Daño Crítico y Habilidades de Exultación extra a sus aliados, pieza central de los equipos de Exultación de la v4.x.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/e/ea/Character_Trailblazer_%28F%29_Elation_Portrait.png"
    }
  },
  {
    "id": "silver-wolf-lv999",
    "nombre": "Silver Wolf Niv. 999",
    "rareza": "5",
    "elemento": "Imaginario",
    "camino": "Exultación",
    "version": "4.2",
    "estado": "completo",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Daño Crítico"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "—"
    },
    "esfera": {
      "principal": "Cualquiera",
      "alt": "Prioriza substats críticos"
    },
    "cuerda": {
      "principal": "Cualquiera",
      "alt": "Prioriza substats críticos"
    },
    "substats": [
      "Velocidad",
      "Prob. Crítico",
      "Daño Crítico"
    ],
    "conos": [
      {
        "es": "Bienvenidos a la ciudad cósmica",
        "en": "Welcome to the Cosmic City",
        "nota": "Cono de firma: única opción DPS con Velocidad (se convierte en Exultación), su Daño de Exultación ignora 20% de DEF y gana Punchlines extra; BiS",
        "best": true
      },
      {
        "es": "La buena suerte de hoy",
        "en": "Today's Good Luck",
        "nota": "Pase de batalla: Prob. Crítico y Exultación, pero sin Velocidad cuesta llegar a los umbrales altos"
      },
      {
        "es": "Las aventuras de Champigaga",
        "en": "Mushy Shroomy's Adventures",
        "nota": "F2P: aumenta el Daño de Exultación que reciben los enemigos; acumulable con varias copias en el equipo"
      }
    ],
    "reliquias": [
      {
        "es": "Chica mágica de hazañas gloriosas (4pz)",
        "en": "Ever-Glorious Magical Girl",
        "nota": "BiS: su Daño de Exultación ignora 20% de DEF y el 2pz da Daño Crítico",
        "best": true
      },
      {
        "es": "Adivino de alcance remoto (4pz)",
        "en": "Diviner of Distant Reach",
        "nota": "Alt: la Velocidad extra puede darle un turno adicional en ciertos umbrales de valor de acción"
      },
      {
        "es": "Etapa cero de Punklorde (2pz)",
        "en": "Punklorde Stage Zero",
        "nota": "Planar BiS: 8% de Exultación y hasta 32% de Daño Crítico al alcanzar 80% de Exultación",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Exultación premium",
        "agentes": "Silver Wolf Niv. 999 · Sparxie · Yao Guang · Huohuo",
        "best": true
      },
      {
        "nombre": "Exultación alternativa",
        "agentes": "Silver Wolf Niv. 999 · Trazacaminos (Exultación) · Yao Guang · Huohuo"
      },
      {
        "nombre": "F2P",
        "agentes": "Silver Wolf Niv. 999 · Trazacaminos (Exultación) · Asta · Huohuo"
      }
    ],
    "consejo": "DPS Imaginario de Exultación e hipervelocidad: acumula Punchlines que se convierten en MMR oculto para su Definitivo (con E2 gana turnos extra); apunta a 160-200 de Velocidad y 84-92% de Prob. Crítico, el resto lo aporta su kit.",
    "ficha": {
      "nombreCompleto": "Silver Wolf Niv. 999 (Silver Wolf LV.999)",
      "faccion": "Cazadores de Estelarones",
      "desc": "La 'Jugadora en modo Dios', Emanadora de la Exultación (v4.2): versión definitiva de Silver Wolf, DPS Imaginario de Exultación que domina el meta gracias a su velocidad extrema y sus turnos extra.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/5/57/Character_Silver_Wolf_LV.999_Portrait.png"
    }
  },
  {
    "id": "evanescia",
    "nombre": "Evanescia",
    "rareza": "5",
    "elemento": "Físico",
    "camino": "Exultación",
    "version": "4.2",
    "estado": "completo",
    "cuerpo": {
      "principal": "Daño Crítico",
      "alt": "—"
    },
    "pies": {
      "principal": "Cualquiera",
      "alt": "Velocidad (opcional, con Velocidad base ya funciona)"
    },
    "esfera": {
      "principal": "Cualquiera",
      "alt": "PV% / DEF% (ATQ% y Daño Físico aportan muy poco)"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "—"
    },
    "substats": [
      "Prob. Crítico (hasta 100% en combate)",
      "Daño Crítico"
    ],
    "conos": [
      {
        "es": "Encuentro en la próxima primavera",
        "en": "Until the Flowers Bloom Again",
        "nota": "Cono de firma: +60% Daño Crítico, +20,8% Regeneración de Energía (más Certified Bangers) y +15% de daño recibido por enemigos; BiS con diferencia",
        "best": true
      },
      {
        "es": "La buena suerte de hoy",
        "en": "Today's Good Luck",
        "nota": "Pase de batalla: buena alternativa, aunque su alta Prob. Crítico base dificulta equilibrar substats"
      },
      {
        "es": "Las aventuras de Champigaga",
        "en": "Mushy Shroomy's Adventures",
        "nota": "F2P: sube su Exultación y el Daño de Exultación que reciben los enemigos; acumulable"
      },
      {
        "es": "Juntos hacia el futuro",
        "en": "Tomorrow, Together",
        "nota": "Cono de evento: buff de Exultación al equipo, de números bajos"
      }
    ],
    "reliquias": [
      {
        "es": "Chica mágica de hazañas gloriosas (4pz)",
        "en": "Ever-Glorious Magical Girl",
        "nota": "BiS: 16% de Daño Crítico y su Daño de Exultación ignora 20% de DEF",
        "best": true
      },
      {
        "es": "Etapa cero de Punklorde (2pz)",
        "en": "Punklorde Stage Zero",
        "nota": "Planar BiS: requiere 80% de Exultación, fácil con Yao Guang o Trazacaminos (Exultación) en el equipo",
        "best": true
      }
    ],
    "equipos": [
      {
        "nombre": "Exultación premium",
        "agentes": "Evanescia · Trazacaminos (Exultación) · Yao Guang · Huohuo",
        "best": true
      },
      {
        "nombre": "Sin Yao Guang",
        "agentes": "Evanescia · Trazacaminos (Exultación) · Sparkle · Huohuo"
      },
      {
        "nombre": "Doble DPS Exultación",
        "agentes": "Silver Wolf Niv. 999 · Evanescia · Yao Guang · Huohuo"
      }
    ],
    "consejo": "DPS Física de Exultación: casi todo su daño es Daño de Exultación (Punchlines y Certified Bangers generados fuera de su turno), así que prioriza crítico y Regeneración de Energía; la Velocidad base basta e incluso evita que expiren sus Certified Bangers.",
    "ficha": {
      "nombreCompleto": "Evanescia",
      "faccion": "Planarcadia",
      "desc": "La 'Hoja regente de las flores dispersas' de los Juegos Fabuluna (v4.2): DPS Física de Exultación y Emanadora que convierte la risa del público en Daño de Exultación masivo.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/3/3d/Character_Evanescia_Portrait.png"
    }
  },
  {
    "id": "mortenax-blade",
    "nombre": "Mortenax Blade",
    "rareza": "5",
    "elemento": "Fuego",
    "camino": "Nihilidad",
    "version": "4.3",
    "estado": "completo",
    "cuerpo": {
      "principal": "Prob. Crítico",
      "alt": "Prob. de Efecto (con conos de debuff)"
    },
    "pies": {
      "principal": "Velocidad",
      "alt": "—"
    },
    "esfera": {
      "principal": "PV%",
      "alt": "Daño de Fuego"
    },
    "cuerda": {
      "principal": "Regeneración de Energía",
      "alt": "PV%"
    },
    "substats": [
      "Prob. Crítico",
      "Daño Crítico",
      "Velocidad",
      "PV%"
    ],
    "conos": [
      {
        "es": "Reforged in Hellfire (aún sin nombre oficial en ES)",
        "en": "Reforged in Hellfire",
        "nota": "Cono de firma: PV máx., energía al inicio de cada oleada (Definitivo garantizado en el primer turno) y +30% de Daño Crítico recibido por los enemigos; BiS",
        "best": true
      },
      {
        "es": "Mentiras que vuelan en el viento",
        "en": "Lies Dance on the Breeze",
        "nota": "Alt 5★ (firma de Cipher) para soporte puro: reduce la DEF de todos los enemigos un 24%; requiere 170 de Velocidad y 40% de Prob. de Efecto"
      },
      {
        "es": "Antes de que comience la misión del tutorial",
        "en": "Before the Tutorial Mission Starts",
        "nota": "F2P: regeneración de energía para montar antes su zona o repetir el Definitivo"
      },
      {
        "es": "Determinación reluciente",
        "en": "Resolution Shines As Pearls of Sweat",
        "nota": "F2P: buen amplificador de daño si el equipo no está pasado de reducción de DEF; requiere 67%+ de Prob. de Efecto"
      }
    ],
    "reliquias": [
      {
        "es": "Divine-Querying Master Smith (4pz, aún sin nombre oficial en ES)",
        "en": "Divine-Querying Master Smith",
        "nota": "Set nuevo de la v4.3: PV y Daño Crítico, y +15% de daño al equipo; el mejor en todos sus estilos de juego",
        "best": true
      },
      {
        "es": "Águila del crepúsculo (4pz)",
        "en": "Eagle of Twilight Line",
        "nota": "Alt min-max: avance de acción con el Definitivo, aprovecha su rápida regeneración de energía"
      },
      {
        "es": "Vonwacq el vivaz (2pz)",
        "en": "Sprightly Vonwacq",
        "nota": "Planar: actúa primero para colocar la zona de su Definitivo y empezar a debuffear cuanto antes",
        "best": true
      },
      {
        "es": "Osario sereno (2pz)",
        "en": "Bone Collection's Serene Demesne",
        "nota": "Planar alt: la mejor opción para su daño personal (PV y Daño Crítico)"
      }
    ],
    "equipos": [
      {
        "nombre": "Acheron premium",
        "agentes": "Acheron · Mortenax Blade · Tribbie · Hyacine",
        "best": true
      },
      {
        "nombre": "Ataque de seguimiento",
        "agentes": "Ashveil · Mortenax Blade · Tribbie · Hyacine"
      },
      {
        "nombre": "Memosplit Castorice",
        "agentes": "Castorice · Mortenax Blade · Tribbie · Hyacine"
      }
    ],
    "consejo": "Debuffer de Nihilidad que escala con PV (nueva forma de Blade, v4.3): coloca la zona de su Definitivo cuanto antes (Vonwacq o su cono de firma), apunta a 134+ de Velocidad y 6000+ PV; sus ataques de seguimiento reducen DEF un 30% y amplifican a todo el equipo.",
    "ficha": {
      "nombreCompleto": "Mortenax Blade",
      "faccion": "Cazadores de Estelarones",
      "desc": "La 'Esencia templada' (v4.3): nueva encarnación de Blade como Nihilidad de Fuego que escala con PV; sub-DPS y debuffer de ataques de seguimiento, socio ideal de Acheron, Ashveil y Castorice.",
      "img": "https://static.wikia.nocookie.net/houkai-star-rail/images/c/c9/Character_Mortenax_Blade_Portrait.png"
    }
  }
];
