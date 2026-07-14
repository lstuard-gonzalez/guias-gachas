// ============================================================
//  ZZZ Guía rápida — datos de agentes (Zenless Zone Zero 3.0)
//  56 agentes. Auditado (jul 2026).
// ============================================================
const CHARACTERS = [
  {
    "id": "ye-shunguang",
    "nombre": "Ye Shunguang",
    "rango": "S",
    "atributo": "Filo",
    "especialidad": "Atacante",
    "version": "2.5",
    "estado": "ok",
    "ranura4": {
      "principal": "Daño crítico",
      "alt": "Usa Prob. de crítico si tu total queda bajo ~70%."
    },
    "ranura5": {
      "principal": "Daño físico %",
      "alt": "Alternativas: Tasa de perforación o ATQ%."
    },
    "ranura6": {
      "principal": "ATQ %",
      "alt": "No necesita regeneración de energía."
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "PEN"
    ],
    "motoresW": [
      {
        "es": "Esplendor surcanimbos",
        "en": "Cloudcleave Radiance",
        "nota": "Insignia · la mejor",
        "best": true
      },
      {
        "es": "Petrazufre",
        "en": "The Brimstone"
      },
      {
        "es": "Inocencia sacrificada",
        "en": "Severed Innocence"
      },
      {
        "es": "Acordes del corazón nocturno",
        "en": "Heartstring Nocturne"
      },
      {
        "es": "Dispensador de fármacos zanshin",
        "en": "Zanshin Herb Case"
      },
      {
        "es": "Motor Estelar",
        "en": "Starlight Engine",
        "nota": "Opción F2P"
      }
    ],
    "discos": [
      {
        "es": "Balada de aguas blancas ×4",
        "en": "White Water Ballad",
        "nota": "+20% Prob. crít · +10% Daño fís. · +10% ATQ",
        "best": true
      },
      {
        "es": "Balada de la rama y la espada ×2",
        "en": "Branch & Blade Song",
        "nota": "Daño crítico"
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "Prob. de crítico"
      },
      {
        "es": "Punk hormonal ×2",
        "en": "Hormone Punk",
        "nota": "ATQ"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Ye Shunguang · Dialyn · Zhao",
        "best": true
      },
      {
        "nombre": "Hypercarry",
        "agentes": "Ye Shunguang · Astra Yao · Zhao"
      },
      {
        "nombre": "F2P",
        "agentes": "Ye Shunguang · Anby · Nicole"
      },
      {
        "nombre": "Bangbú",
        "agentes": "Pimpollo"
      }
    ],
    "consejo": "Apunta a un balance de crítico <b>1 : 2</b> (ej. 70% / 140%) contando el bono del set. Su núcleo y <i>Balada de aguas blancas</i> ya regalan mucha probabilidad de crítico, por eso la ranura IV suele ir con <b>Daño crítico</b>. Habilidades: Núcleo &gt; Ataque básico &gt; Cadena ≈ Especial &gt; Esquiva/Asistencia."
  },
  {
    "id": "grace-howard",
    "nombre": "Grace Howard",
    "rango": "S",
    "atributo": "Eléctrico",
    "especialidad": "Anómalo",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "ATQ% si vas corta de ataque"
    },
    "ranura5": {
      "principal": "Daño eléctrico %",
      "alt": "ATQ% o Tasa de perforación"
    },
    "ranura6": {
      "principal": "Regeneración de energía",
      "alt": "Dominio de anomalía o ATQ%"
    },
    "substats": [
      "Competencia de anomalía",
      "ATQ%",
      "Tasa de perforación",
      "ATQ"
    ],
    "motoresW": [
      {
        "es": "Urdidor del tiempo",
        "en": "Timeweaver",
        "nota": "La mejor: anomalía eléctrica y daño de Disorden con 375+ Comp. anomalía",
        "best": true
      },
      {
        "es": "Compilador quimérico",
        "en": "Fusion Compiler",
        "nota": "Insignia · ATQ% y Comp. anomalía con ataques especiales"
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A · acumula Comp. anomalía"
      },
      {
        "es": "Brillo labial electrizante",
        "en": "Electro-Lip Gloss",
        "nota": "Rango A tienda · F2P sólida"
      }
    ],
    "discos": [
      {
        "es": "Metal eléctrico ×4",
        "en": "Thunder Metal",
        "nota": "+10% daño eléctrico y +28% ATQ vs Electrochoque",
        "best": true
      },
      {
        "es": "Jazz caótico ×4",
        "en": "Chaos Jazz",
        "nota": "Alternativa si rotas fuera de campo (Disorden)"
      },
      {
        "es": "Blues libre ×2",
        "en": "Freedom Blues",
        "nota": "+30 Comp. anomalía"
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+20% Regeneración de energía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Yanagi · Grace · Rina",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Grace · Antón · Rina"
      },
      {
        "nombre": "F2P",
        "agentes": "Grace · Anby · Nicole"
      }
    ],
    "consejo": "Acumula cargas de Zap con básicos y consúmelas con el especial EX para aplicar Electrochoque; prioriza Competencia de anomalía por encima del crítico (sus anomalías no critean). Sube primero núcleo y especial."
  },
  {
    "id": "anton-ivanov",
    "nombre": "Antón",
    "rango": "A",
    "atributo": "Eléctrico",
    "especialidad": "Atacante",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico (busca ratio 1:2)"
    },
    "ranura5": {
      "principal": "Daño eléctrico %",
      "alt": "ATQ% o Tasa de perforación"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "—"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "Tasa de perforación",
      "ATQ"
    ],
    "motoresW": [
      {
        "es": "Taladradora giratoria - Eje rojo",
        "en": "Drill Rig - Red Axis",
        "nota": "Insignia · la mejor: +50% daño a básicos/embestida tras EX",
        "best": true
      },
      {
        "es": "Petrazufre",
        "en": "The Brimstone",
        "nota": "Rango S · gran ATQ base y ATQ acumulable"
      },
      {
        "es": "Motor Estelar",
        "en": "Starlight Engine",
        "nota": "Rango A · mejor F2P: +12% ATQ tras contraataque/asistencia"
      },
      {
        "es": "Rotor de cañón",
        "en": "Cannon Rotor",
        "nota": "Rango A · Prob. de crítico de principal"
      }
    ],
    "discos": [
      {
        "es": "Metal eléctrico ×4",
        "en": "Thunder Metal",
        "nota": "+10% daño eléctrico y +28% ATQ vs Electrochoque",
        "best": true
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+20% Regeneración de energía"
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "Alternativa: +8% Prob. de crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Antón · Grace · Rina",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Antón · Qingyi · Rina"
      },
      {
        "nombre": "F2P",
        "agentes": "Antón · Anby · Nicole"
      }
    ],
    "consejo": "Usa el especial EX para entrar en modo ráfaga (taladro eléctrico) y encadena básicos, contraataques y asistencias mientras dure; brilla contra enemigos con Electrochoque. Prioridad: núcleo &gt; básico &gt; especial EX."
  },
  {
    "id": "ben-bigger",
    "nombre": "Ben",
    "rango": "A",
    "atributo": "Ígneo",
    "especialidad": "Defensivo",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "DEF%",
      "alt": "Prob. de crítico si usas Cilindro neumático de Bigger"
    },
    "ranura5": {
      "principal": "DEF%",
      "alt": "Daño ígneo % si buscas más daño"
    },
    "ranura6": {
      "principal": "Regeneración de energía",
      "alt": "DEF% o Impacto"
    },
    "substats": [
      "DEF%",
      "DEF",
      "Prob. de crítico",
      "Daño crítico"
    ],
    "motoresW": [
      {
        "es": "Primavera termal",
        "en": "Spring Embrace",
        "nota": "La mejor: reduce daño recibido y sube regeneración; buff transferible",
        "best": true
      },
      {
        "es": "Cilindro neumático de Bigger",
        "en": "Big Cylinder",
        "nota": "Insignia · críticos que escalan con DEF tras bloquear"
      },
      {
        "es": "Transmorfer original",
        "en": "Original Transmorpher",
        "nota": "Rango A · PV máx. e Impacto"
      },
      {
        "es": "Cesta conejera",
        "en": "Bunny Band",
        "nota": "Rango A · PV máx. y +ATQ con escudo"
      }
    ],
    "discos": [
      {
        "es": "Jazz oscilante ×4",
        "en": "Swing Jazz",
        "nota": "+20% Regeneración y buff de daño al equipo con cadena/definitiva",
        "best": true
      },
      {
        "es": "Rock espiritual ×2",
        "en": "Soul Rock",
        "nota": "+16% DEF, refuerza escudos y conversión DEF→ATQ"
      },
      {
        "es": "Punk primitivo ×4",
        "en": "Proto Punk",
        "nota": "Alternativa de soporte: buff con parada/asistencia"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "N.º 11 · Koleda · Ben",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Koleda · Ben · Lucy"
      },
      {
        "nombre": "F2P",
        "agentes": "Billy · Nicole · Ben"
      }
    ],
    "consejo": "Sus escudos y ATQ escalan con la DEF (su núcleo convierte DEF en ATQ): apila DEF% y regeneración para mantener el escudo del EX siempre activo; bloquea y contraataca. Con Koleda gana sinergia Belobog."
  },
  {
    "id": "evelyn",
    "nombre": "Evelyn",
    "rango": "S",
    "atributo": "Ígneo",
    "especialidad": "Atacante",
    "version": "1.5",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico si con su insignia ya superas ~50% de prob."
    },
    "ranura5": {
      "principal": "Daño ígneo %",
      "alt": "ATQ% si ya tienes bono ígneo suficiente"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Sin alternativa real: ATQ% siempre"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "Tasa de perforación"
    ],
    "motoresW": [
      {
        "es": "Acordes del corazón nocturno",
        "en": "Heartstring Nocturne",
        "nota": "Insignia · la mejor: +Prob. crít y +50% Daño crít, ignora RES ígnea",
        "best": true
      },
      {
        "es": "Petrazufre",
        "en": "The Brimstone",
        "nota": "Alternativa S: ATQ acumulable al golpear"
      },
      {
        "es": "Anhelo marcato",
        "en": "Marcato Desire",
        "nota": "A/F2P: Prob. crít y +ATQ con EX/cadena"
      },
      {
        "es": "Motor Estelar",
        "en": "Starlight Engine",
        "nota": "Opción A genérica de ATQ"
      }
    ],
    "discos": [
      {
        "es": "Tecno pícido ×4",
        "en": "Woodpecker Electro",
        "nota": "+9% Prob. crít acumulable con básico, contra y EX",
        "best": true
      },
      {
        "es": "Metal infernal ×2",
        "en": "Inferno Metal",
        "nota": "+10% de daño ígneo"
      },
      {
        "es": "Balada de la rama y la espada ×4",
        "en": "Branch & Blade Song",
        "nota": "Alternativa 2.x centrada en Daño crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Evelyn · Lighter · Astra Yao",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Evelyn · Koleda · César"
      },
      {
        "nombre": "F2P",
        "agentes": "Evelyn · Anby · Lucy"
      }
    ],
    "consejo": "Atacante crítica ígnea: mantén balance de crítico ~1:2 y explota sus ataques encadenados y definitiva, donde su insignia perfora la RES ígnea. Prioriza especial EX y cadenas."
  },
  {
    "id": "astra-yao",
    "nombre": "Astra Yao",
    "rango": "S",
    "atributo": "Etéreo",
    "especialidad": "Auxiliar",
    "version": "1.5",
    "estado": "ok",
    "ranura4": {
      "principal": "ATQ%",
      "alt": "Sus buffs y curación escalan con su ATQ"
    },
    "ranura5": {
      "principal": "ATQ%",
      "alt": "Daño etéreo % solo si buscas daño propio (no recomendado)"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Regeneración de energía si no usas su insignia"
    },
    "substats": [
      "ATQ%",
      "Regeneración de energía",
      "Prob. de crítico",
      "Daño crítico"
    ],
    "motoresW": [
      {
        "es": "Envanecimiento primoroso",
        "en": "Elegant Vanity",
        "nota": "Insignia · la mejor: energía al cambiar y +daño al equipo",
        "best": true
      },
      {
        "es": "Cuna plañidera",
        "en": "Weeping Cradle",
        "nota": "Alternativa S: buff de daño al alternar (~95%)"
      },
      {
        "es": "Cañón bombástico",
        "en": "Kaboom the Cannon",
        "nota": "A/F2P: +ATQ% al equipo (~96%)"
      },
      {
        "es": "Demonio cohibido",
        "en": "Bashful Demon",
        "nota": "Opción A: buff de ATQ con EX"
      }
    ],
    "discos": [
      {
        "es": "Voz astral ×4",
        "en": "Astral Voice",
        "nota": "+daño al equipo tras asistencias; Astra lo mantiene indefinido",
        "best": true
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+20% de Regeneración de energía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Evelyn · Lighter · Astra Yao",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Miyabi · Yanagi · Astra Yao"
      },
      {
        "nombre": "F2P",
        "agentes": "Zhu Yuan · Qingyi · Astra Yao"
      }
    ],
    "consejo": "Apoyo universal y sanadora: acumula ATQ% al máximo porque sus buffs de ATQ/Daño crítico y su curación escalan con su ATQ. Mantén su Cadenza idílica y prioriza definitiva y habilidad de apoyo."
  },
  {
    "id": "koleda",
    "nombre": "Koleda",
    "rango": "S",
    "atributo": "Ígneo",
    "especialidad": "Aturdidor",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico si ya tienes ~50% de probabilidad"
    },
    "ranura5": {
      "principal": "Daño ígneo %",
      "alt": "ATQ% si no consigues pieza ígnea"
    },
    "ranura6": {
      "principal": "Impacto",
      "alt": "Sin alternativa: Impacto siempre"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "PEN"
    ],
    "motoresW": [
      {
        "es": "Engranaje infernal",
        "en": "Hellfire Gears",
        "nota": "Insignia · la mejor: energía fuera de campo y +Impacto con EX",
        "best": true
      },
      {
        "es": "El sometido",
        "en": "The Restrained",
        "nota": "Alternativa S: más daño y aturdimiento con básicos"
      },
      {
        "es": "Última cena",
        "en": "Steam Oven",
        "nota": "Rango A · F2P: +Impacto según energía"
      },
      {
        "es": "Barril giratorio",
        "en": "Six Shooter",
        "nota": "Rango A: cargas que suben el aturdimiento del EX"
      }
    ],
    "discos": [
      {
        "es": "Disco sacudestrellas ×4",
        "en": "Shockstar Disco",
        "nota": "+6% Impacto y +20% aturdimiento: base de aturdidores",
        "best": true
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+20% de energía para spamear el EX"
      },
      {
        "es": "Monarca del Pináculo ×2",
        "en": "King of the Summit",
        "nota": "Alternativa 2 piezas: +6% aturdimiento"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "N.º 11 · Koleda · Ben",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "N.º 11 · Koleda · Lucy"
      },
      {
        "nombre": "F2P",
        "agentes": "Billy · Koleda · Ben"
      }
    ],
    "consejo": "Prioriza su especial EX (activa Fuego de fragua) y luego el básico; con Ben gana mejoras extra por sinergia Belobog. Maximiza Impacto y usa el crítico como bonus para las cadenas."
  },
  {
    "id": "lighter",
    "nombre": "Lighter",
    "rango": "S",
    "atributo": "Ígneo",
    "especialidad": "Aturdidor",
    "version": "1.3",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico, según lo que falte para equilibrar"
    },
    "ranura5": {
      "principal": "Daño ígneo %",
      "alt": "ATQ% (escala bien con ataque por su Moral)"
    },
    "ranura6": {
      "principal": "Impacto",
      "alt": "Sin alternativa: Impacto siempre"
    },
    "substats": [
      "Daño crítico",
      "Prob. de crítico",
      "ATQ%",
      "PEN"
    ],
    "motoresW": [
      {
        "es": "Láurea ardiente",
        "en": "Blazing Laurel",
        "nota": "Insignia · la mejor: +25% Impacto con apoyos y +daño crít ígneo/glacial al enemigo",
        "best": true
      },
      {
        "es": "Engranaje infernal",
        "en": "Hellfire Gears",
        "nota": "Alternativa S: energía fuera de campo e Impacto con EX"
      },
      {
        "es": "El sometido",
        "en": "The Restrained",
        "nota": "Alternativa S: más daño y aturdimiento con básicos"
      },
      {
        "es": "Última cena",
        "en": "Steam Oven",
        "nota": "Rango A · F2P: +Impacto según energía"
      }
    ],
    "discos": [
      {
        "es": "Disco sacudestrellas ×4",
        "en": "Shockstar Disco",
        "nota": "+6% Impacto y +20% de aturdimiento",
        "best": true
      },
      {
        "es": "Metal infernal ×2",
        "en": "Inferno Metal",
        "nota": "+10% de daño ígneo propio"
      },
      {
        "es": "Monarca del Pináculo ×4",
        "en": "King of the Summit",
        "nota": "Alternativa: aturdimiento + 15% daño crít al equipo con ≥50% prob."
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "N.º 11 · Lighter · César",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Miyabi · Lighter · Lucy"
      },
      {
        "nombre": "F2P",
        "agentes": "N.º 11 · Lighter · Ben"
      }
    ],
    "consejo": "Acumula Moral con básicos cargados para potenciar Impacto y daño (escala con ATQ). Reduce la RES ígnea/glacial y amplifica ese daño, por lo que brilla junto a atacantes de fuego o hielo; prioriza núcleo y especial EX."
  },
  {
    "id": "ju-fufu",
    "nombre": "Ju Fufu",
    "rango": "S",
    "atributo": "Ígneo",
    "especialidad": "Aturdidor",
    "version": "2.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "ATQ% si ya alcanzas el 50% de crítico que pide su set"
    },
    "ranura5": {
      "principal": "ATQ%",
      "alt": "Daño ígneo % como alternativa"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Impacto si la usas como aturdidora principal en campo"
    },
    "substats": [
      "Prob. de crítico (hasta 50%)",
      "ATQ%",
      "ATQ",
      "Daño crítico",
      "PEN"
    ],
    "motoresW": [
      {
        "es": "Rugiente urna de la fortuna",
        "en": "Roaring Fur-nace",
        "nota": "Insignia · la mejor: +ATQ y daño ígneo para el equipo",
        "best": true
      },
      {
        "es": "Visión espectral",
        "en": "Spectral Gaze",
        "nota": "Alto ATQ base con Prob. de crítico"
      },
      {
        "es": "Engranaje infernal",
        "en": "Hellfire Gears",
        "nota": "Motor S estándar de aturdidor"
      },
      {
        "es": "Cúter",
        "en": "Box Cutter",
        "nota": "Rango A · F2P con el mayor ATQ base"
      }
    ],
    "discos": [
      {
        "es": "Monarca del Pináculo ×4",
        "en": "King of the Summit",
        "nota": "+15% daño crít al equipo; +15% extra con ≥50% prob.",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+8% de Prob. de crítico para llegar al 50%"
      },
      {
        "es": "Punk hormonal ×2",
        "en": "Hormone Punk",
        "nota": "Alternativa: +10% de ATQ (apunta a 3400)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Yixuan · Astra Yao · Ju Fufu",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Evelyn · Astra Yao · Ju Fufu"
      },
      {
        "nombre": "F2P",
        "agentes": "N.º 11 · Lucy · Ju Fufu"
      }
    ],
    "consejo": "Aturdidora fuera de campo: invoca a Hu Wei y busca 3400 de ATQ y 50% de crítico para maximizar su buff de daño crítico, cadena y definitiva. Prioriza núcleo &gt; especial EX &gt; cadena."
  },
  {
    "id": "pan-yinhu",
    "nombre": "Pan Yinhu",
    "rango": "A",
    "atributo": "Físico",
    "especialidad": "Defensivo",
    "version": "2.0",
    "estado": "ok",
    "ranura4": {
      "principal": "ATQ%",
      "alt": "Prob. de crítico solo si ya superas ~3000 de ATQ"
    },
    "ranura5": {
      "principal": "ATQ%",
      "alt": "Daño físico % para más daño propio"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Regeneración de energía para lanzar más su EX"
    },
    "substats": [
      "ATQ%",
      "ATQ (hasta ~3000)",
      "Prob. de crítico",
      "Daño crítico"
    ],
    "motoresW": [
      {
        "es": "Receptáculo de trigramas sísmico",
        "en": "Tremor Trigram Vessel",
        "nota": "Insignia · la mejor: potencia EX/definitiva y recupera energía",
        "best": true
      },
      {
        "es": "Primavera termal",
        "en": "Spring Embrace",
        "nota": "Reduce daño recibido y transfiere regeneración"
      },
      {
        "es": "Pacificador especializado",
        "en": "Peacekeeper - Specialized",
        "nota": "Rango A · F2P con regeneración de energía"
      }
    ],
    "discos": [
      {
        "es": "Voz astral ×4",
        "en": "Astral Voice",
        "nota": "+daño a todo el equipo tras asistencias rápidas",
        "best": true
      },
      {
        "es": "Punk hormonal ×2",
        "en": "Hormone Punk",
        "nota": "+10% de ATQ para aumentar la Fuerza pura"
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "Alternativa de energía (guía de Vandal)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Yixuan · Pan Yinhu · Astra Yao",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Yixuan · Pan Yinhu · Ju Fufu"
      }
    ],
    "consejo": "Soporte defensivo hecho para Yixuan: colócalo justo después de ella, spamea su EX de acupuntura para dar Fuerza pura, escudo y curación. Prioriza núcleo &gt; especial EX &gt; definitiva."
  },
  {
    "id": "hugo",
    "nombre": "Hugo Vlad",
    "rango": "S",
    "atributo": "Glacial",
    "especialidad": "Atacante",
    "version": "1.7",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico o Daño crítico",
      "alt": "Balancea substats: ~50% prob. con su insignia"
    },
    "ranura5": {
      "principal": "Daño glacial %",
      "alt": "ATQ% si no tienes buena pieza glacial"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Sin alternativa real: ATQ% siempre"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "PEN"
    ],
    "motoresW": [
      {
        "es": "Miríada de eclipses",
        "en": "Myriad Eclipse",
        "nota": "Insignia · la mejor: +45% Daño crít e ignora 25% DEF a aturdidos",
        "best": true
      },
      {
        "es": "Visitante de altamar",
        "en": "Deep Sea Visitor",
        "nota": "Insignia de Ellen · Daño glacial y Prob. de crítico"
      },
      {
        "es": "Acordes del corazón nocturno",
        "en": "Heartstring Nocturne",
        "nota": "Insignia de Evelyn · buena opción crítica S"
      },
      {
        "es": "Motor Estelar",
        "en": "Starlight Engine",
        "nota": "Rango A / F2P · ATQ y +Daño crítico"
      }
    ],
    "discos": [
      {
        "es": "Tecno pícido ×4",
        "en": "Woodpecker Electro",
        "nota": "+8% Prob. crít y ATQ acumulable al critear",
        "best": true
      },
      {
        "es": "Balada de la rama y la espada ×2",
        "en": "Branch & Blade Song",
        "nota": "+16% Daño crítico"
      },
      {
        "es": "Metal polar ×2",
        "en": "Polar Metal",
        "nota": "Alternativa: +10% Daño glacial"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Hugo · Lycaon · Lighter",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Hugo · Lighter · Gatillo"
      },
      {
        "nombre": "F2P",
        "agentes": "Hugo · Pulchra · Gatillo"
      }
    ],
    "consejo": "Hugo necesita dos aturdidores: su Balance total solo se dispara contra enemigos aturdidos y consume el aturdimiento para un golpe masivo con EX y definitiva. Prioriza especial y definitiva; mantén al enemigo aturdido."
  },
  {
    "id": "vivian",
    "nombre": "Vivian Banshee",
    "rango": "S",
    "atributo": "Etéreo",
    "especialidad": "Anómalo",
    "version": "1.7",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "Es su stat clave: no uses crítico"
    },
    "ranura5": {
      "principal": "Daño etéreo %",
      "alt": "Tasa de perforación como alternativa"
    },
    "ranura6": {
      "principal": "Dominio de anomalía",
      "alt": "ATQ% si juega más de daño directo"
    },
    "substats": [
      "Competencia de anomalía",
      "ATQ%",
      "PEN",
      "Dominio de anomalía"
    ],
    "motoresW": [
      {
        "es": "Revoloteo ensoñador",
        "en": "Flight of Fancy",
        "nota": "Insignia · la mejor: sube acumulación y Comp. de anomalía",
        "best": true
      },
      {
        "es": "Compilador quimérico",
        "en": "Fusion Compiler",
        "nota": "Rango S · ATQ% y Comp. anomalía acumulable"
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A / F2P · Comp. anomalía por cada anomalía del equipo"
      },
      {
        "es": "Brillo labial electrizante",
        "en": "Electro-Lip Gloss",
        "nota": "Rango A · respaldo con ATQ"
      }
    ],
    "discos": [
      {
        "es": "Melodía de Faetón ×4",
        "en": "Phaethon's Melody",
        "nota": "Ideal para anómalos fuera de campo: +45 Dominio y buff al equipo",
        "best": true
      },
      {
        "es": "Jazz caótico ×2",
        "en": "Chaos Jazz",
        "nota": "+30 Comp. de anomalía"
      },
      {
        "es": "Blues libre ×2",
        "en": "Freedom Blues",
        "nota": "Alternativa: +30 Comp. de anomalía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Miyabi o Yanagi · Vivian · Astra Yao",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Yanagi · Vivian · Rina"
      },
      {
        "nombre": "F2P",
        "agentes": "Piper o Grace · Vivian · Nicole"
      }
    ],
    "consejo": "Anómala semi-fuera de campo: entra para acumular plumas en su estado de dama, actívalas y cambia al DPS para que sus plumas hagan daño etéreo y disparen anomalías. Prioriza habilidad principal y básico; la esquiva es lo último."
  },
  {
    "id": "qingyi",
    "nombre": "Qingyi",
    "rango": "S",
    "atributo": "Eléctrico",
    "especialidad": "Aturdidor",
    "version": "1.1",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "ATQ% o Daño crítico; busca ~50% para su multiplicador de aturdimiento"
    },
    "ranura5": {
      "principal": "Daño eléctrico %",
      "alt": "Tasa de perforación o ATQ%"
    },
    "ranura6": {
      "principal": "Impacto",
      "alt": "Siempre Impacto: es su estadística clave"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "Tasa de perforación",
      "PEN"
    ],
    "motoresW": [
      {
        "es": "Tetera esmeraldina",
        "en": "Ice-Jade Teapot",
        "nota": "Insignia · la mejor: acumula Impacto y sube el daño del equipo",
        "best": true
      },
      {
        "es": "El sometido",
        "en": "The Restrained",
        "nota": "Rango S · más aturdimiento y daño de básico"
      },
      {
        "es": "Engranaje infernal",
        "en": "Hellfire Gears",
        "nota": "Rango S · energía e Impacto con EX"
      },
      {
        "es": "Fósil preciado",
        "en": "Precious Fossilized Core",
        "nota": "Rango A · mejor F2P"
      }
    ],
    "discos": [
      {
        "es": "Monarca del Pináculo ×4",
        "en": "King of the Summit",
        "nota": "Meta 2.x: +15% Daño crít al equipo con EX o cadena",
        "best": true
      },
      {
        "es": "Disco sacudestrellas ×4",
        "en": "Shockstar Disco",
        "nota": "Clásico: +6% Impacto y +20% aturdimiento"
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+20% de regeneración de energía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Zhu Yuan · Qingyi · Nicole",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Harumasa · Qingyi · Rina"
      },
      {
        "nombre": "F2P",
        "agentes": "Billy · Qingyi · Nicole"
      }
    ],
    "consejo": "Encadena básicos para acumular Voltaje y aturdir rápido; su núcleo es prioridad máxima porque sube el multiplicador de aturdimiento, seguida del básico. Con ~50% de prob. crít aprovechas sus subs ofensivas sin sacrificar Impacto."
  },
  {
    "id": "zhu-yuan",
    "nombre": "Zhu Yuan",
    "rango": "S",
    "atributo": "Etéreo",
    "especialidad": "Atacante",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico si su pasiva ya da mucha prob. contra aturdidos"
    },
    "ranura5": {
      "principal": "Daño etéreo %",
      "alt": "ATQ% si ya tienes el 2 piezas de daño etéreo"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Regeneración de energía si te falta para el EX (Vandal)"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "PEN",
      "Tasa de perforación"
    ],
    "motoresW": [
      {
        "es": "Antidisturbios (VI)",
        "en": "Riot Suppressor Mark VI",
        "nota": "Insignia · la mejor: Prob. crít y potencia sus cartuchos",
        "best": true
      },
      {
        "es": "Petrazufre",
        "en": "The Brimstone",
        "nota": "Rango S · ATQ acumulable, gran sustituto"
      },
      {
        "es": "Motor Estelar",
        "en": "Starlight Engine",
        "nota": "Rango A · mejor F2P"
      },
      {
        "es": "Rotor de cañón",
        "en": "Cannon Rotor",
        "nota": "Rango A · alternativa con Prob. de crítico"
      }
    ],
    "discos": [
      {
        "es": "Metal caótico ×4",
        "en": "Chaotic Metal",
        "nota": "+10% daño etéreo y Daño crít acumulable al infligir Corrupción",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+8% de Prob. de crítico"
      },
      {
        "es": "Balada de la rama y la espada ×2",
        "en": "Branch & Blade Song",
        "nota": "Alternativa: +16% de Daño crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Zhu Yuan · Qingyi · Nicole",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Zhu Yuan · Koleda · Nicole"
      },
      {
        "nombre": "F2P",
        "agentes": "Zhu Yuan · Anby · Nicole"
      }
    ],
    "consejo": "Guarda sus cartuchos reforzados para descargarlos sobre enemigos aturdidos, donde su núcleo multiplica el daño; Nicole activa su pasiva y baja la DEF. Prioriza básico/esquiva y núcleo; equilibra crítico con la prob. extra de su pasiva."
  },
  {
    "id": "yixuan",
    "nombre": "Yixuan",
    "rango": "S",
    "atributo": "Tinta áurica",
    "especialidad": "Disruptivo",
    "version": "2.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico según lo que falte (apunta a ~1:2)"
    },
    "ranura5": {
      "principal": "PV%",
      "alt": "Daño etéreo (su daño puro escala con PV; ambas valen)"
    },
    "ranura6": {
      "principal": "PV%",
      "alt": "Sin alternativa real: no uses ATQ%"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "PV%",
      "ATQ%",
      "PV"
    ],
    "motoresW": [
      {
        "es": "Nidal Qingming",
        "en": "Qingming Birdcage",
        "nota": "Insignia · la mejor: PV%, Prob. crít y +daño puro de definitiva/EX",
        "best": true
      },
      {
        "es": "Tránsito herciano",
        "en": "Radiowave Journey",
        "nota": "Rango A del Pase: potencia el daño puro con cadenas/definitiva"
      },
      {
        "es": "Rompecabezas ilusorio",
        "en": "Puzzle Sphere",
        "nota": "F2P rango A: Daño crít +25,6% al usar el EX"
      }
    ],
    "discos": [
      {
        "es": "Fábula Yunkui ×4",
        "en": "Yunkui Tales",
        "nota": "PV +10% y hasta +10% daño puro; único set con daño puro, obligatorio",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "Prob. crít +8% (o Balada de la rama y la espada ×2 para Daño crít)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Yixuan · Dialyn · Lucia",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Yixuan · Ju Fufu · Astra Yao"
      },
      {
        "nombre": "F2P",
        "agentes": "Yixuan · Pan Yinhu · Lucy"
      }
    ],
    "consejo": "Su daño puro (Sheer) ignora la DEF y escala con el PV máximo, por eso usa PV% en vez de ATQ%. Canaliza la EX bloqueando para generar adrenalina, gasta puntos de técnica y remata con la definitiva; prioriza la habilidad principal."
  },
  {
    "id": "alice-thymefield",
    "nombre": "Alice Thymefield",
    "rango": "S",
    "atributo": "Físico",
    "especialidad": "Anómalo",
    "version": "2.1",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "No usa crítico; ATQ% solo si no hay nada mejor"
    },
    "ranura5": {
      "principal": "Daño físico %",
      "alt": "Tasa de perforación o ATQ%"
    },
    "ranura6": {
      "principal": "Dominio de anomalía",
      "alt": "ATQ% si ya superas con holgura los 140 de Dominio"
    },
    "substats": [
      "Competencia de anomalía",
      "ATQ%",
      "ATQ",
      "PEN"
    ],
    "motoresW": [
      {
        "es": "Excelencia disciplinada",
        "en": "Practiced Perfection",
        "nota": "Insignia · la mejor: Dominio +60 y Daño físico +20% al infligir Embestida",
        "best": true
      },
      {
        "es": "Aguijón agudo",
        "en": "Sharpened Stinger",
        "nota": "Rango S: Comp. anomalía, daño físico y acumulación"
      },
      {
        "es": "Compilador quimérico",
        "en": "Fusion Compiler",
        "nota": "Rango S estándar: ATQ y Comp. anomalía con especiales"
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "F2P rango A: Comp. anomalía por cada anomalía del equipo"
      }
    ],
    "discos": [
      {
        "es": "Metal colmilludo ×4",
        "en": "Fanged Metal",
        "nota": "Daño físico +10% y +35% al infligir Embestida durante 12 s",
        "best": true
      },
      {
        "es": "Blues libre ×2",
        "en": "Freedom Blues",
        "nota": "Comp. anomalía +30 (o Jazz caótico ×2 / Melodía de Faetón ×2)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Alice · Vivian · Yuzuha",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Alice · Yanagi · César"
      },
      {
        "nombre": "F2P",
        "agentes": "Alice · Piper · Lucy"
      }
    ],
    "consejo": "Acumula 300 de Etiqueta de la espada provocando Embestidas y libérala con el básico cargado; usa la definitiva bajo 100. Llega a 140 de Dominio de anomalía: su núcleo convierte el exceso en Competencia. Prioriza su habilidad principal."
  },
  {
    "id": "orfia-y-magas",
    "nombre": "Orfia y Magas",
    "rango": "S",
    "atributo": "Ígneo",
    "especialidad": "Atacante",
    "version": "2.2",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "ATQ%",
      "alt": "Daño ígneo %"
    },
    "ranura6": {
      "principal": "Regeneración de energía",
      "alt": "ATQ%"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "Regeneración de energía"
    ],
    "motoresW": [
      {
        "es": "Fogonazo belicoso",
        "en": "Bellicose Blaze",
        "nota": "Insignia · la mejor: máxima regen. de energía y buffs de ataque para secuelas",
        "best": true
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A / F2P: ATQ% y buen relleno"
      },
      {
        "es": "Acordes del corazón nocturno",
        "en": "Heartstring Nocturne",
        "nota": "S alternativo de atacante crítico"
      }
    ],
    "discos": [
      {
        "es": "Armonía umbría ×4",
        "en": "Shadow Harmony",
        "nota": "potencia daño de secuela (Aftershock) y crítico",
        "best": true
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+regen. de energía para su rotación"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Orfia y Magas · N.º 0: Anby · Gatillo",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Orfia y Magas · N.º 0: Anby · Astra Yao"
      },
      {
        "nombre": "F2P",
        "agentes": "Orfia y Magas · Anby · Nicole"
      }
    ],
    "consejo": "DPS de secuela ígnea: prioriza Regeneración de energía (escala su buff de ATQ del núcleo) y luego crítico. Sube primero núcleo y Especial EX; júntala con otro agente de secuela (Anby/Gatillo) para que ambos ignoren DEF."
  },
  {
    "id": "seed",
    "nombre": "Sporos",
    "rango": "S",
    "atributo": "Eléctrico",
    "especialidad": "Atacante",
    "version": "2.2",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "Daño eléctrico %",
      "alt": "ATQ%"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Daño crítico"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Cordis germina",
        "en": "Cordis Germina",
        "nota": "Insignia · la mejor para su daño de perforación crítico",
        "best": true
      },
      {
        "es": "Brillo labial electrizante",
        "en": "Electro-Lip Gloss",
        "nota": "Rango A / F2P: ATQ% y bono de daño"
      },
      {
        "es": "Almohadillas férreas",
        "en": "Steel Cushion",
        "nota": "Rango A: Prob. de crítico alta"
      }
    ],
    "discos": [
      {
        "es": "Floración del alba ×4",
        "en": "Dawn's Bloom",
        "nota": "maximiza daño de básico y EX/definitiva",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+ATQ% al critear"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Sporos · N.º 0: Anby · Gatillo",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Sporos · Orfia y Magas · Astra Yao"
      },
      {
        "nombre": "F2P",
        "agentes": "Sporos · Anby · Nicole"
      }
    ],
    "consejo": "Diseñada para equipos de doble atacante: se empareja con el otro atacante (Vanguardia) y comparten ATQ, Daño crítico y % de daño. Apunta a ~50% Prob. de crítico y ~3000 de ataque; sube primero Especial EX y núcleo."
  },
  {
    "id": "gatillo",
    "nombre": "Gatillo",
    "rango": "S",
    "atributo": "Eléctrico",
    "especialidad": "Aturdidor",
    "version": "1.6",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "Daño eléctrico %",
      "alt": "ATQ%"
    },
    "ranura6": {
      "principal": "Impacto",
      "alt": "ATQ%"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "Impacto",
      "Regeneración de energía",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Visión espectral",
        "en": "Spectral Gaze",
        "nota": "Insignia · la mejor: reduce DEF y da acumulaciones de Impacto al equipo",
        "best": true
      },
      {
        "es": "El sometido",
        "en": "The Restrained",
        "nota": "S de aturdidor: +daño e Impacto de básicos"
      },
      {
        "es": "Fósil preciado",
        "en": "Precious Fossilized Core",
        "nota": "Rango A / F2P para aturdidores"
      }
    ],
    "discos": [
      {
        "es": "Disco sacudestrellas ×4",
        "en": "Shockstar Disco",
        "nota": "+Impacto / Aturdimiento",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+Prob. de crítico para llegar al ~90%"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "N.º 0: Anby · Astra Yao · Gatillo",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "N.º 0: Anby · Gatillo · Nicole"
      },
      {
        "nombre": "F2P",
        "agentes": "Anby · Gatillo · Nicole"
      }
    ],
    "consejo": "Aturdidora eléctrica: ranura 6 = Impacto, pero necesita ~90% Prob. de crítico para el bono completo de aturdimiento de su habilidad adicional. Aplica aturdimiento con secuelas fuera de campo mientras N.º 0: Anby mantiene el campo."
  },
  {
    "id": "n-0-anby",
    "nombre": "N.º 0: Anby",
    "rango": "S",
    "atributo": "Eléctrico",
    "especialidad": "Atacante",
    "version": "1.6",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "Daño eléctrico %",
      "alt": "ATQ%"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Daño crítico"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "Tasa de perforación"
    ],
    "motoresW": [
      {
        "es": "Inocencia sacrificada",
        "en": "Severed Innocence",
        "nota": "Insignia · la mejor: gran Daño crítico",
        "best": true
      },
      {
        "es": "Almohadillas férreas",
        "en": "Steel Cushion",
        "nota": "Rango A / F2P: Prob. de crítico"
      },
      {
        "es": "Visitante de altamar",
        "en": "Deep Sea Visitor",
        "nota": "S alternativo de crítico"
      }
    ],
    "discos": [
      {
        "es": "Armonía umbría ×4",
        "en": "Shadow Harmony",
        "nota": "hecho a medida: +daño de secuela y Prob. de crítico",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+ATQ% al critear"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "N.º 0: Anby · Astra Yao · Pulchra",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "N.º 0: Anby · Astra Yao · Gatillo"
      },
      {
        "nombre": "F2P",
        "agentes": "N.º 0: Anby · Nicole · Pulchra"
      }
    ],
    "consejo": "DPS de secuela crítica: prioriza Prob. de crítico en subestadísticas (su núcleo ya aporta Daño crítico). Sube primero núcleo y Especial; permanece en campo con un aturdidor que lance secuelas fuera de campo (Pulchra/Gatillo)."
  },
  {
    "id": "n-11",
    "nombre": "N.º 11",
    "rango": "S",
    "atributo": "Ígneo",
    "especialidad": "Atacante",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "Daño ígneo %",
      "alt": "ATQ%"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Daño crítico"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Petrazufre",
        "en": "The Brimstone",
        "nota": "Insignia · la mejor: ATQ% acumulable con básicos/contras",
        "best": true
      },
      {
        "es": "Acordes del corazón nocturno",
        "en": "Heartstring Nocturne",
        "nota": "S alternativo: gran Prob. de crítico"
      },
      {
        "es": "Almohadillas férreas",
        "en": "Steel Cushion",
        "nota": "Rango A / F2P: Prob. de crítico"
      }
    ],
    "discos": [
      {
        "es": "Metal infernal ×4",
        "en": "Inferno Metal",
        "nota": "+Prob. de crítico contra enemigos incendiados",
        "best": true
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+regen. de energía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "N.º 11 · Koleda · Ben",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "N.º 11 · Lighter · Astra Yao"
      },
      {
        "nombre": "F2P",
        "agentes": "N.º 11 · Koleda · Ben"
      }
    ],
    "consejo": "Atacante ígnea sencilla: maximiza ATQ, Prob. de crítico y Daño crítico. Sube primero el pasivo de núcleo Ola de calor (hasta +70% con Supresión ígnea) y mantén los cargos para ignorar 25% de RES ígnea."
  },
  {
    "id": "burnice-white",
    "nombre": "Burnice",
    "rango": "S",
    "atributo": "Ígneo",
    "especialidad": "Anómalo",
    "version": "1.2",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño ígneo %",
      "alt": "Tasa de perforación"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Dominio de anomalía"
    },
    "substats": [
      "Competencia de anomalía",
      "ATQ%",
      "Tasa de perforación",
      "Regeneración de energía"
    ],
    "motoresW": [
      {
        "es": "Coctelera incandescente",
        "en": "Flamemaker Shaker",
        "nota": "Insignia · la mejor: +ATQ y regen. de energía",
        "best": true
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A fabricable · gran Comp. de anomalía · F2P"
      },
      {
        "es": "Compilador quimérico",
        "en": "Fusion Compiler",
        "nota": "Comp. de anomalía acumulable"
      }
    ],
    "discos": [
      {
        "es": "Jazz caótico ×4",
        "en": "Chaos Jazz",
        "nota": "+30 Comp. anomalía, +15% daño ígneo y +20% fuera de campo",
        "best": true
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+energía para usar más el EX"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Miyabi · Burnice · Soukaku",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "N.º 11 · Burnice · Lucy"
      },
      {
        "nombre": "F2P",
        "agentes": "Burnice · Piper · Lucy"
      }
    ],
    "consejo": "Anómala fuera de campo: aplica Abrasión con su poscombustión mientras el equipo golpea. Prioriza EX &gt; Asistencia ≥ Definitiva; sube regen. de energía para mantener el nitrocóctel. Se juega por anomalía, no por crítico."
  },
  {
    "id": "caesar-king",
    "nombre": "César",
    "rango": "S",
    "atributo": "Físico",
    "especialidad": "Defensivo",
    "version": "1.2",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "DEF% si buscas pura supervivencia"
    },
    "ranura5": {
      "principal": "Daño físico %",
      "alt": "Tasa de perforación"
    },
    "ranura6": {
      "principal": "Impacto",
      "alt": "DEF%"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "Tasa de perforación",
      "Impacto"
    ],
    "motoresW": [
      {
        "es": "Colmillos furibundos",
        "en": "Tusks of Fury",
        "nota": "Insignia · la mejor: +30% escudo, +daño y aturdimiento tras esquiva/parada",
        "best": true
      },
      {
        "es": "Transmorfer original",
        "en": "Original Transmorpher",
        "nota": "Motor de defensivo · escala con DEF · F2P"
      },
      {
        "es": "Engranaje infernal",
        "en": "Hellfire Gears",
        "nota": "Rango A · F2P · +18% Impacto de estadística principal. César puede equipar motores de aturdidor con Impacto (aunque no active su efecto por ser Defensivo) para sumar Impacto y aturdimiento",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Punk primitivo ×4",
        "en": "Proto Punk",
        "nota": "+escudo y +15% daño al equipo con Apoyo Defensivo/Evasivo",
        "best": true
      },
      {
        "es": "Disco sacudestrellas ×2",
        "en": "Shockstar Disco",
        "nota": "+6% Impacto"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Jane Doe · César · Seth",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Piper · Lucy · César"
      },
      {
        "nombre": "F2P",
        "agentes": "Corin · Nicole · César"
      }
    ],
    "consejo": "Defensora versátil de tercer puesto: da escudos resistentes (escalan con DEF/PV), buffea el ATQ del equipo y aturde por su alto Impacto. Sube primero su núcleo (escudo), luego Especial y Asistencia. Si buscas pura supervivencia usa DEF% en ranuras 4 y 6."
  },
  {
    "id": "pulchra-fellini",
    "nombre": "Pulchra",
    "rango": "A",
    "atributo": "Físico",
    "especialidad": "Aturdidor",
    "version": "1.6",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño físico %",
      "alt": "Tasa de perforación"
    },
    "ranura6": {
      "principal": "Impacto",
      "alt": "ATQ%"
    },
    "substats": [
      "Impacto",
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Cúter",
        "en": "Box Cutter",
        "nota": "Insignia · la mejor: +daño físico y aturdimiento tras Poscarga",
        "best": true
      },
      {
        "es": "Engranaje infernal",
        "en": "Hellfire Gears",
        "nota": "Rango A · motor de aturdidor · Impacto · F2P"
      },
      {
        "es": "Última cena",
        "en": "Steam Oven",
        "nota": "Rango A · el mejor F2P: +20% (hasta 32% a R5) Impacto acumulable y 50% Regen. de energía para tener siempre el EX",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Armonía umbría ×4",
        "en": "Shadow Harmony",
        "nota": "+daño de Carga/Poscarga, +ATQ y +Prob. crít acumulables",
        "best": true
      },
      {
        "es": "Disco sacudestrellas ×2",
        "en": "Shockstar Disco",
        "nota": "+6% Impacto"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "N.º 0: Anby · Astra Yao · Pulchra",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Zhu Yuan · Nicole · Pulchra"
      },
      {
        "nombre": "F2P",
        "agentes": "Corin · Nicole · Pulchra"
      }
    ],
    "consejo": "Aturdidora física fuera de campo con Poscarga: acumula aturdimiento sin estar activa. Necesita todo el Impacto posible y luego stats ofensivas. Sube antes núcleo y Especial; su Cadena da bonus al usar la Definitiva."
  },
  {
    "id": "lucy-de-montefio",
    "nombre": "Lucy",
    "rango": "A",
    "atributo": "Ígneo",
    "especialidad": "Auxiliar",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "ATQ%",
      "alt": "Daño ígneo %"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Regeneración de energía"
    },
    "substats": [
      "ATQ%",
      "Regeneración de energía",
      "Prob. de crítico",
      "Daño crítico",
      "Impacto"
    ],
    "motoresW": [
      {
        "es": "Cañón bombástico",
        "en": "Kaboom the Cannon",
        "nota": "Insignia rango A · +ATQ a todo el equipo · claramente la mejor",
        "best": true
      },
      {
        "es": "Lapso de tiempo",
        "en": "Slice of Time",
        "nota": "Regen. de energía · alternativa"
      },
      {
        "es": "Repercusión - Modelo II",
        "en": "[Reverb] Mark II",
        "nota": "Rango B · F2P de la tienda: 40% Regen. de energía. Como Lucy ya da su propio buff de ATQ, solo necesita energía y stats en bruto",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Jazz oscilante ×4",
        "en": "Swing Jazz",
        "nota": "+energía para activar ¡Ánimo! y su EX más rápido",
        "best": true
      },
      {
        "es": "Punk hormonal ×2",
        "en": "Hormone Punk",
        "nota": "+ATQ% al entrar en combate"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "N.º 11 · Burnice · Lucy",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Nekomata · Piper · Lucy"
      },
      {
        "nombre": "F2P",
        "agentes": "Piper · Burnice · Lucy"
      }
    ],
    "consejo": "Auxiliar ígnea de buffs: invoca jabalíes de la guardia que golpean fuera de campo y dan +ATQ al equipo. Sus jabalíes heredan su Impacto, así que algo de Impacto ayuda; el resto en ATQ y crítico. Sube Especial y Básico por igual, luego núcleo."
  },
  {
    "id": "piper-wheel",
    "nombre": "Piper",
    "rango": "A",
    "atributo": "Físico",
    "especialidad": "Anómalo",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño físico %",
      "alt": "Tasa de perforación"
    },
    "ranura6": {
      "principal": "Dominio de anomalía",
      "alt": "ATQ%"
    },
    "substats": [
      "Competencia de anomalía",
      "ATQ%",
      "Tasa de perforación",
      "Dominio de anomalía"
    ],
    "motoresW": [
      {
        "es": "Viaje estruendoso",
        "en": "Roaring Ride",
        "nota": "Insignia · la mejor: +Comp. anomalía y tasa de acumulación física",
        "best": true
      },
      {
        "es": "Compilador quimérico",
        "en": "Fusion Compiler",
        "nota": "Comp. de anomalía acumulable"
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A fabricable · anomalía · F2P"
      }
    ],
    "discos": [
      {
        "es": "Metal colmilludo ×4",
        "en": "Fanged Metal",
        "nota": "+35% daño 12 s al aplicar Asalto",
        "best": true
      },
      {
        "es": "Jazz caótico ×2",
        "en": "Chaos Jazz",
        "nota": "+30 Comp. de anomalía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Yanagi · Piper · Nicole",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Nekomata · Piper · Lucy"
      },
      {
        "nombre": "F2P",
        "agentes": "Piper · Burnice · Lucy"
      }
    ],
    "consejo": "Anómala física (Asalto) que gira sin parar generando acumulación; sirve como Sub-DPS o DPS principal, ideal para provocar Desorden con un anómalo de otro atributo (Yanagi/Burnice). Prioriza su Especial para acumular Poder; no busques crítico."
  },
  {
    "id": "nekomata",
    "nombre": "Nekomata",
    "rango": "S",
    "atributo": "Físico",
    "especialidad": "Atacante",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico o Daño crítico",
      "alt": "Balancea a ~1:2"
    },
    "ranura5": {
      "principal": "Daño físico %",
      "alt": "Tasa de perforación"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "—"
    },
    "substats": [
      "Daño crítico",
      "Prob. de crítico",
      "ATQ%",
      "Tasa de perforación"
    ],
    "motoresW": [
      {
        "es": "Almohadillas férreas",
        "en": "Steel Cushion",
        "nota": "Insignia · la mejor: +20% daño físico y +25% extra por la espalda",
        "best": true
      },
      {
        "es": "Rotor de cañón",
        "en": "Cannon Rotor",
        "nota": "Rango A F2P · Prob. de crítico y ATQ"
      },
      {
        "es": "Motor Estelar",
        "en": "Starlight Engine",
        "nota": "Pase de batalla · daño a distancia"
      }
    ],
    "discos": [
      {
        "es": "Metal colmilludo ×4",
        "en": "Fanged Metal",
        "nota": "+10% daño físico y +35% tras Embestida",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+8% Prob. de crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Nekomata · Nicole · Lycaon",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Nekomata · Rina · Lycaon"
      },
      {
        "nombre": "F2P",
        "agentes": "Nekomata · Nicole · Anby"
      }
    ],
    "consejo": "Build 100% crítico (ATQ/CRIT); posiciónate por la espalda para el +25% de las Almohadillas férreas y encadena Embestidas. Sube primero Núcleo, Definitiva y Especial EX."
  },
  {
    "id": "billy-kid",
    "nombre": "Billy Kid",
    "rango": "A",
    "atributo": "Físico",
    "especialidad": "Atacante",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico o Daño crítico",
      "alt": "Balancea a ~1:2"
    },
    "ranura5": {
      "principal": "Daño físico %",
      "alt": "ATQ%"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "—"
    },
    "substats": [
      "Daño crítico",
      "Prob. de crítico",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Réplica de motor estelar",
        "en": "Starlight Engine Replica",
        "nota": "Insignia (rango A) · la mejor: +daño físico a distancia",
        "best": true
      },
      {
        "es": "Rotor de cañón",
        "en": "Cannon Rotor",
        "nota": "Rango A F2P · Prob. de crítico y ATQ"
      },
      {
        "es": "Estrella callejera",
        "en": "Street Superstar",
        "nota": "Rango A · F2P (canal estándar): +ATQ acumulable al golpear; motor de atacante accesible",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Tecno tetraodóntido ×4",
        "en": "Puffer Electro",
        "nota": "+ATQ y +daño del EX/Definitiva",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+8% Prob. de crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Billy · Nicole · Lycaon",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Billy · Rina · Lycaon"
      },
      {
        "nombre": "F2P",
        "agentes": "Billy · Nicole · Anby"
      }
    ],
    "consejo": "Crítico ante todo; dispara a distancia con seguridad y suelta la Definitiva tras el Ataque Encadenado para el pico de daño. Prioriza Núcleo y Ataque Básico."
  },
  {
    "id": "nicole-demara",
    "nombre": "Nicole Demara",
    "rango": "A",
    "atributo": "Etéreo",
    "especialidad": "Auxiliar",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño etéreo %",
      "alt": "—"
    },
    "ranura6": {
      "principal": "Regeneración de energía",
      "alt": "ATQ%"
    },
    "substats": [
      "Regeneración de energía",
      "Competencia de anomalía",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Cámara acorazada",
        "en": "The Vault",
        "nota": "Insignia · la mejor: +24% daño de todo el equipo al objetivo y +regen",
        "best": true
      },
      {
        "es": "Bola de juego desenfrenada",
        "en": "Unfettered Game Ball",
        "nota": "Rango A F2P · gran motor de soporte"
      },
      {
        "es": "Gastrónomo selvático",
        "en": "Rainforest Gourmet",
        "nota": "Rango A · F2P: Regen. de energía de estadística principal y buff de ATQ al siguiente agente tras su EX, ideal para su rol de soporte",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Jazz oscilante ×4",
        "en": "Swing Jazz",
        "nota": "+regeneración de energía y buff de daño al equipo",
        "best": true
      },
      {
        "es": "Metal caótico ×2",
        "en": "Chaotic Metal",
        "nota": "+10% daño etéreo"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Zhu Yuan · Nicole · Lycaon",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Zhu Yuan · Nicole · Qingyi"
      },
      {
        "nombre": "F2P",
        "agentes": "Nekomata · Nicole · Anby"
      }
    ],
    "consejo": "No busca daño propio: rompe defensa con el Básico mejorado y el EX (agujero negro) y aporta regen. Prioriza Regeneración de energía y Competencia de anomalía; sube Núcleo y Especial EX."
  },
  {
    "id": "anby-demara",
    "nombre": "Anby Demara",
    "rango": "A",
    "atributo": "Eléctrico",
    "especialidad": "Aturdidor",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Daño crítico o Prob. de crítico",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño eléctrico %",
      "alt": "—"
    },
    "ranura6": {
      "principal": "Impacto",
      "alt": "—"
    },
    "substats": [
      "Impacto",
      "Daño crítico",
      "Prob. de crítico",
      "ATQ%",
      "Regeneración de energía"
    ],
    "motoresW": [
      {
        "es": "El sometido",
        "en": "The Restrained",
        "nota": "S · el mejor para aturdidores: +daño y aturdimiento de básicos",
        "best": true
      },
      {
        "es": "Batería de Demara (II)",
        "en": "Demara Battery Mark II",
        "nota": "Insignia (rango A) F2P · +daño eléctrico y regen"
      },
      {
        "es": "Repercusión - Modelo III",
        "en": "[Reverb] Mark III",
        "nota": "Rango A fabricable · Impacto"
      }
    ],
    "discos": [
      {
        "es": "Disco sacudestrellas ×4",
        "en": "Shockstar Disco",
        "nota": "+6% Impacto y +20% de daño de aturdimiento",
        "best": true
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+regeneración de energía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Antón · Grace · Anby",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Zhu Yuan · Nicole · Anby"
      },
      {
        "nombre": "F2P",
        "agentes": "Ellen · Soukaku · Anby"
      }
    ],
    "consejo": "Ranura 6 = Impacto. Mantén cargado el Básico tras el 3.er golpe (o el Especial tras el 3.er básico) para máximo aturdimiento y usa la Definitiva a menudo. Sube Básico y Especial; algo de crítico para la Definitiva."
  },
  {
    "id": "ellen-joe",
    "nombre": "Ellen Joe",
    "rango": "S",
    "atributo": "Glacial",
    "especialidad": "Atacante",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico o Daño crítico",
      "alt": "Balancea a ~1:2"
    },
    "ranura5": {
      "principal": "Daño glacial %",
      "alt": "—"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "—"
    },
    "substats": [
      "Daño crítico",
      "Prob. de crítico",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Visitante de altamar",
        "en": "Deep Sea Visitor",
        "nota": "Insignia · la mejor: +daño glacial y +Prob. crít al hacer Ataque en carrera",
        "best": true
      },
      {
        "es": "Rotor de cañón",
        "en": "Cannon Rotor",
        "nota": "Rango A F2P · Prob. de crítico y ATQ"
      },
      {
        "es": "Estrella callejera",
        "en": "Street Superstar",
        "nota": "Rango A · F2P (canal estándar): +ATQ al golpear; alternativa de atacante accesible si no tienes S ni el Rotor de cañón del Pase",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Metal polar ×4",
        "en": "Polar Metal",
        "nota": "+10% daño glacial y +daño de básicos/dash",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+8% Prob. de crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Ellen · Soukaku · Lycaon",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Ellen · Astra Yao · Lycaon"
      },
      {
        "nombre": "F2P",
        "agentes": "Ellen · Soukaku · Anby"
      }
    ],
    "consejo": "Crítico puro; su daño sale de Básicos, Especiales y Ataques en carrera, así que súbelos primero. Soukaku le da ATQ y daño glacial, y Lycaon rompe la RES de hielo del enemigo aturdido."
  },
  {
    "id": "von-lycaon",
    "nombre": "Von Lycaon",
    "rango": "S",
    "atributo": "Glacial",
    "especialidad": "Aturdidor",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico o Daño crítico",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño glacial %",
      "alt": "—"
    },
    "ranura6": {
      "principal": "Impacto",
      "alt": "—"
    },
    "substats": [
      "Impacto",
      "Regeneración de energía",
      "Daño crítico",
      "Prob. de crítico"
    ],
    "motoresW": [
      {
        "es": "El sometido",
        "en": "The Restrained",
        "nota": "Insignia · la mejor: +daño y aturdimiento de los básicos",
        "best": true
      },
      {
        "es": "Tetera esmeraldina",
        "en": "Ice-Jade Teapot",
        "nota": "Generalista S · hasta +20% daño acumulando cargas"
      },
      {
        "es": "Repercusión - Modelo III",
        "en": "[Reverb] Mark III",
        "nota": "Rango A fabricable F2P · Impacto"
      }
    ],
    "discos": [
      {
        "es": "Monarca del Pináculo ×4",
        "en": "King of the Summit",
        "nota": "Set de aturdidores: +daño de aturdimiento y +daño crítico al equipo (requiere >50% Prob. crít)",
        "best": true
      },
      {
        "es": "Disco sacudestrellas ×2",
        "en": "Shockstar Disco",
        "nota": "+6% Impacto (alt F2P: Disco sacudestrellas ×4 + Jazz oscilante ×2)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Ellen · Soukaku · Lycaon",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Corin · Rina · Lycaon"
      },
      {
        "nombre": "F2P",
        "agentes": "Corin · Soukaku · Lycaon"
      }
    ],
    "consejo": "Ranura 6 = Impacto. Sube primero el Ataque Básico (su principal fuente de aturdimiento) y luego el Núcleo; prioriza Impacto y Regeneración de energía. Brilla en equipos de hielo (Ellen) rompiendo RES."
  },
  {
    "id": "rina",
    "nombre": "Rina",
    "rango": "S",
    "atributo": "Eléctrico",
    "especialidad": "Auxiliar",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Tasa de perforación",
      "alt": "Daño eléctrico %"
    },
    "ranura6": {
      "principal": "Regeneración de energía",
      "alt": "Dominio de anomalía"
    },
    "substats": [
      "Tasa de perforación",
      "Regeneración de energía",
      "Competencia de anomalía",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Cuna plañidera",
        "en": "Weeping Cradle",
        "nota": "Insignia · la mejor: único S con Tasa de perforación, que amplifica su buff",
        "best": true
      },
      {
        "es": "Lapso de tiempo",
        "en": "Slice of Time",
        "nota": "Rango A fabricable F2P · Tasa de perforación (solo 4% menos)"
      },
      {
        "es": "Bola de juego desenfrenada",
        "en": "Unfettered Game Ball",
        "nota": "Rango A · F2P: alta Regen. de energía y +Prob. de crítico a todo el equipo contra el objetivo golpeado; buen soporte si no tienes motor con PEN",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Blues libre ×4",
        "en": "Freedom Blues",
        "nota": "+Competencia de anomalía",
        "best": true
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+regeneración de energía (alt: Metal eléctrico ×2)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Antón · Grace · Rina",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Corin · Rina · Lycaon"
      },
      {
        "nombre": "F2P",
        "agentes": "Antón · Rina · Anby"
      }
    ],
    "consejo": "Auxiliar de perforación: sus marionetas mantienen en cancha el buff de Tasa de perforación para todo el equipo. Sube Núcleo y Especial; construye Regeneración de energía con algo de anomalía. Cuanta más PEN tenga ella, mayor el buff."
  },
  {
    "id": "corin-wickes",
    "nombre": "Corin Wickes",
    "rango": "A",
    "atributo": "Físico",
    "especialidad": "Atacante",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico o Daño crítico",
      "alt": "Balancea a ~1:2"
    },
    "ranura5": {
      "principal": "Daño físico %",
      "alt": "—"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "—"
    },
    "substats": [
      "Daño crítico",
      "Prob. de crítico",
      "ATQ%",
      "Regeneración de energía"
    ],
    "motoresW": [
      {
        "es": "Almohadillas férreas",
        "en": "Steel Cushion",
        "nota": "S · máximo daño (insignia de Nekomata): +daño físico",
        "best": true
      },
      {
        "es": "Amo de llaves",
        "en": "Housekeeper",
        "nota": "Rango A · mejor F2P a R5: regen y hasta +45% daño físico acumulable"
      },
      {
        "es": "Motor estelar",
        "en": "Starlight Engine",
        "nota": "Rango A · el mejor F2P (canal estándar) para Corin: +ATQ acumulable al golpear, sin condiciones",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Metal colmilludo ×4",
        "en": "Fanged Metal",
        "nota": "+10% daño físico y +35% tras Embestida",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+8% Prob. de crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Corin · Rina · Lycaon",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Corin · Nicole · Lycaon"
      },
      {
        "nombre": "F2P",
        "agentes": "Corin · Soukaku · Lycaon"
      }
    ],
    "consejo": "Crítico y ATQ; mantén pulsado el Básico para alargar el corte de motosierra y golpea a enemigos aturdidos (su Núcleo pega más con un aliado Físico o de Victoria, como Lycaon). Sube Básico y Especial EX."
  },
  {
    "id": "miyabi",
    "nombre": "Miyabi",
    "rango": "S",
    "atributo": "Gélido",
    "especialidad": "Anómalo",
    "version": "1.4",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Competencia de anomalía"
    },
    "ranura5": {
      "principal": "Daño glacial %",
      "alt": "ATQ%"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Dominio de anomalía"
    },
    "substats": [
      "Daño crítico",
      "Prob. de crítico",
      "ATQ%",
      "PEN",
      "Competencia de anomalía"
    ],
    "motoresW": [
      {
        "es": "Templo a la granizada estelífera",
        "en": "Hailstorm Shrine",
        "nota": "Insignia · la mejor: único motor anómalo que da crítico",
        "best": true
      },
      {
        "es": "Compilador quimérico",
        "en": "Fusion Compiler",
        "nota": "S alternativo · ATQ + Comp. de anomalía"
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A / Pase (F2P) · ATQ y acumulación de anomalía"
      }
    ],
    "discos": [
      {
        "es": "Balada de la rama y la espada ×4",
        "en": "Branch & Blade Song",
        "nota": "potencia daño de perturbación/anomalía y crítico",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+8% Prob. de crítico (alt: Metal polar ×2)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium (Perturbación)",
        "agentes": "Miyabi · Yanagi · Rina",
        "best": true
      },
      {
        "nombre": "Alternativo (Monogélido)",
        "agentes": "Miyabi · Soukaku · Lycaon"
      },
      {
        "nombre": "F2P",
        "agentes": "Miyabi · Soukaku · Anby"
      }
    ],
    "consejo": "Anómala híbrida que escala con crítico: apunta a ~80% de Prob. de crítico sin descuidar la Competencia de anomalía para maximizar la Escarcha y la Perturbación. Sube primero Básico = Especial &gt; Cadena &gt; Esquiva &gt; Asistencia."
  },
  {
    "id": "harumasa",
    "nombre": "Harumasa",
    "rango": "S",
    "atributo": "Eléctrico",
    "especialidad": "Atacante",
    "version": "1.4",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "Daño eléctrico %",
      "alt": "ATQ%"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "—"
    },
    "substats": [
      "Daño crítico",
      "Prob. de crítico",
      "ATQ%",
      "Tasa de perforación"
    ],
    "motoresW": [
      {
        "es": "Dispensador de fármacos zanshin",
        "en": "Zanshin Herb Case",
        "nota": "Insignia · crítico y daño eléctrico en el ataque de carrera",
        "best": true
      },
      {
        "es": "Petrazufre",
        "en": "The Brimstone",
        "nota": "S alternativo · ATQ% al golpear con básicos"
      },
      {
        "es": "Brillo labial electrizante",
        "en": "Electro-Lip Gloss",
        "nota": "Rango A (F2P) · daño eléctrico"
      }
    ],
    "discos": [
      {
        "es": "Metal eléctrico ×4",
        "en": "Thunder Metal",
        "nota": "daño eléctrico y ATQ al aplicar Descarga",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+8% Prob. de crítico (o Tecno pícido ×4 puro crítico)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Harumasa · Qingyi · Astra Yao",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Harumasa · Rina · Qingyi"
      },
      {
        "nombre": "F2P",
        "agentes": "Harumasa · Anby · Nicole"
      }
    ],
    "consejo": "Atacante técnico: casi todo su daño sale del Ataque de carrera (dash), así que prioriza Habilidad esencial (crítico) y luego el dash. Equipo 100% crítico con aturdidor eléctrico (Qingyi) para maximizar ventanas de aturdimiento."
  },
  {
    "id": "yanagi",
    "nombre": "Yanagi",
    "rango": "S",
    "atributo": "Eléctrico",
    "especialidad": "Anómalo",
    "version": "1.3",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño eléctrico %",
      "alt": "Tasa de perforación"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Dominio de anomalía"
    },
    "substats": [
      "Competencia de anomalía",
      "ATQ%",
      "Tasa de perforación",
      "Prob. de crítico"
    ],
    "motoresW": [
      {
        "es": "Urdidor del tiempo",
        "en": "Timeweaver",
        "nota": "Insignia · acumulación de anomalía, Comp. de anomalía y daño de Perturbación",
        "best": true
      },
      {
        "es": "Compilador quimérico",
        "en": "Fusion Compiler",
        "nota": "S alternativo · ATQ + Comp. de anomalía"
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A / Pase (F2P) · ATQ y anomalía"
      }
    ],
    "discos": [
      {
        "es": "Metal eléctrico ×4",
        "en": "Thunder Metal",
        "nota": "daño eléctrico y sinergia con Descarga",
        "best": true
      },
      {
        "es": "Jazz caótico ×2",
        "en": "Chaos Jazz",
        "nota": "+daño de anomalía y de EX/asistencia fuera de campo"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium (Perturbación)",
        "agentes": "Yanagi · Burnice · Astra Yao",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Yanagi · Miyabi · Soukaku"
      },
      {
        "nombre": "F2P",
        "agentes": "Yanagi · Piper · Lucy"
      }
    ],
    "consejo": "Anómala de acumulación pura: alterna posturas con su Especial para lanzar el EX y disparar Perturbación junto a un anómalo de otro atributo (Ígneo/Gélido). Sube Habilidad esencial y luego Especial; balancea hacia Comp. de anomalía y ATQ, el crítico es secundario."
  },
  {
    "id": "soukaku",
    "nombre": "Soukaku",
    "rango": "A",
    "atributo": "Glacial",
    "especialidad": "Auxiliar",
    "version": "1.0",
    "estado": "ok",
    "ranura4": {
      "principal": "ATQ%",
      "alt": "—"
    },
    "ranura5": {
      "principal": "ATQ%",
      "alt": "Daño glacial %"
    },
    "ranura6": {
      "principal": "Regeneración de energía",
      "alt": "ATQ%"
    },
    "substats": [
      "ATQ%",
      "Regeneración de energía",
      "PEN"
    ],
    "motoresW": [
      {
        "es": "Demonio cohibido",
        "en": "Bashful Demon",
        "nota": "Insignia (rango A) · ATQ para amplificar su transferencia; la mejor y accesible",
        "best": true
      },
      {
        "es": "Gastrónomo selvático",
        "en": "Rainforest Gourmet",
        "nota": "Alt de soporte · regeneración de energía"
      },
      {
        "es": "Lapso de tiempo",
        "en": "Slice of Time",
        "nota": "Rango A · F2P fabricable: Regen. de energía y PEN; opción de soporte accesible desde la tienda de la 6.ª Calle",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Jazz oscilante ×4",
        "en": "Swing Jazz",
        "nota": "+regeneración de energía y buff de daño a todo el equipo",
        "best": true
      },
      {
        "es": "Punk hormonal ×2",
        "en": "Hormone Punk",
        "nota": "+10% ATQ para potenciar su buff"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium (Monogélido)",
        "agentes": "Ellen · Soukaku · Lycaon",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Miyabi · Yanagi · Soukaku"
      },
      {
        "nombre": "F2P",
        "agentes": "Ellen · Soukaku · Anby"
      }
    ],
    "consejo": "Auxiliar de motor: acumula sus cargas de Vórtice con el Especial ('Iza la bandera') antes de pasar al DPS, transfiriendo un gran % de su ATQ y dando bonus de daño Glacial. Prioriza Especial y Habilidad esencial; mucho ATQ y suficiente regeneración."
  },
  {
    "id": "jane-doe",
    "nombre": "Jane Doe",
    "rango": "S",
    "atributo": "Físico",
    "especialidad": "Anómalo",
    "version": "1.1",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño físico %",
      "alt": "Tasa de perforación"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Dominio de anomalía"
    },
    "substats": [
      "Competencia de anomalía",
      "Prob. de crítico",
      "ATQ%",
      "Tasa de perforación"
    ],
    "motoresW": [
      {
        "es": "Aguijón agudo",
        "en": "Sharpened Stinger",
        "nota": "Insignia · Comp. de anomalía y crítico en estado Pasión",
        "best": true
      },
      {
        "es": "Compilador quimérico",
        "en": "Fusion Compiler",
        "nota": "S alternativo · ATQ + Comp. de anomalía"
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A / Pase (F2P) · ATQ y anomalía"
      }
    ],
    "discos": [
      {
        "es": "Metal colmilludo ×4",
        "en": "Fanged Metal",
        "nota": "+35% daño físico contra enemigos con anomalía",
        "best": true
      },
      {
        "es": "Blues libre ×2",
        "en": "Freedom Blues",
        "nota": "+8% Competencia de anomalía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Jane Doe · Seth · César",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Jane Doe · Seth · Qingyi"
      },
      {
        "nombre": "F2P",
        "agentes": "Jane Doe · Seth · Nicole"
      }
    ],
    "consejo": "Anómala de Asalto: en estado Pasión su daño puede critear, por eso a diferencia de otros anómalos sí valora la Prob. de crítico además de la Competencia de anomalía. Acumula Físico para disparar Asalto; sube Especial y Habilidad esencial. Seth le da −20% RES de anomalía."
  },
  {
    "id": "seth",
    "nombre": "Seth",
    "rango": "A",
    "atributo": "Eléctrico",
    "especialidad": "Defensivo",
    "version": "1.1",
    "estado": "ok",
    "ranura4": {
      "principal": "ATQ%",
      "alt": "Competencia de anomalía"
    },
    "ranura5": {
      "principal": "ATQ%",
      "alt": "Daño eléctrico %"
    },
    "ranura6": {
      "principal": "Dominio de anomalía",
      "alt": "Regeneración de energía"
    },
    "substats": [
      "ATQ%",
      "Competencia de anomalía",
      "Regeneración de energía",
      "PEN"
    ],
    "motoresW": [
      {
        "es": "Pacificador especializado",
        "en": "Peacekeeper - Specialized",
        "nota": "Insignia (rango A) · refuerza escudo y acumulación de anomalía al estar escudado",
        "best": true
      },
      {
        "es": "Compilador quimérico",
        "en": "Fusion Compiler",
        "nota": "Alt ofensivo · ATQ + Comp. de anomalía"
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A / Pase (F2P) · ATQ y anomalía"
      }
    ],
    "discos": [
      {
        "es": "Jazz oscilante ×4",
        "en": "Swing Jazz",
        "nota": "+regeneración de energía y buff de daño al equipo",
        "best": true
      },
      {
        "es": "Blues libre ×2",
        "en": "Freedom Blues",
        "nota": "+8% Comp. de anomalía (alt: Punk hormonal ×2 por ATQ)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Jane Doe · Seth · César",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Grace · Seth · Rina"
      },
      {
        "nombre": "F2P",
        "agentes": "Yanagi · Seth · Nicole"
      }
    ],
    "consejo": "Aunque es Defensivo, se construye con ATQ (no DEF%): tanto su escudo como su aporte de acumulación de anomalía escalan con ATQ. Batería/soporte anómalo: mantén el escudo activo y usa el EX para aplicar Descarga y su −20% RES de anomalía; regeneración suficiente para reciclar el EX."
  },
  {
    "id": "yidhari",
    "nombre": "Yidhari",
    "rango": "S",
    "atributo": "Glacial",
    "especialidad": "Disruptivo",
    "version": "2.3",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "PV%",
      "alt": "Daño glacial %"
    },
    "ranura6": {
      "principal": "PV%",
      "alt": "—"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "PV%",
      "PV",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Cuna del kraken",
        "en": "Kraken's Cradle",
        "nota": "Insignia · la mejor: +Daño glacial puro y Prob. crít al bajar PV",
        "best": true
      },
      {
        "es": "Caldero de la claridad",
        "en": "Cauldron of Clarity",
        "nota": "Alternativa S: +Daño y Prob. crít acumulable"
      },
      {
        "es": "Rompecabezas ilusorio",
        "en": "Puzzle Sphere",
        "nota": "Rango A/F2P: +Daño crítico"
      }
    ],
    "discos": [
      {
        "es": "Fábula Yunkui ×4",
        "en": "Yunkui Tales",
        "nota": "+PV%, Prob. crít acumulable y +Daño puro",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+8% Prob. de crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Yidhari · Lucía · Lycaon",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Yidhari · Lucía · Ju Fufu"
      },
      {
        "nombre": "F2P",
        "agentes": "Yidhari · Soukaku · Anby"
      }
    ],
    "consejo": "Escala con daño puro (Sheer) desde PV, no con ATQ; su Daño glacial es puro, así que prioriza PV% en ranuras 5 y 6 y Prob./Daño crítico en la 4."
  },
  {
    "id": "lucia",
    "nombre": "Lucía",
    "rango": "S",
    "atributo": "Etéreo",
    "especialidad": "Auxiliar",
    "version": "2.3",
    "estado": "ok",
    "ranura4": {
      "principal": "PV%",
      "alt": "Prob. de crítico"
    },
    "ranura5": {
      "principal": "PV%",
      "alt": "—"
    },
    "ranura6": {
      "principal": "PV%",
      "alt": "Regeneración de energía"
    },
    "substats": [
      "PV%",
      "Regeneración de energía",
      "Prob. de crítico",
      "PV"
    ],
    "motoresW": [
      {
        "es": "Hogar de ensueño",
        "en": "Dreamlit Hearth",
        "nota": "Insignia · la mejor: +Regen. energía y +daño/PV al equipo",
        "best": true
      },
      {
        "es": "Cuna plañidera",
        "en": "Weeping Cradle",
        "nota": "Alternativa S fuera de campo"
      },
      {
        "es": "Cámara acorazada",
        "en": "The Vault",
        "nota": "Rango A/F2P: +Regen. energía y daño de equipo"
      }
    ],
    "discos": [
      {
        "es": "Nana a la luz cenicienta ×4",
        "en": "Moonlight Lullaby",
        "nota": "+18% daño al equipo tras EX/Definitiva",
        "best": true
      },
      {
        "es": "Fábula Yunkui ×2",
        "en": "Yunkui Tales",
        "nota": "+PV% (alt: Jazz oscilante ×2 por Regen. energía)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Yidhari · Lucía · Lycaon",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Yixuan · Lucía · Ju Fufu"
      },
      {
        "nombre": "F2P",
        "agentes": "Komano Manato · Lucía · Anby"
      }
    ],
    "consejo": "Auxiliar de equipos disruptivos: escala con PV (busca ~24.000 PV) y luego Regeneración de energía; no necesita ATQ. Sus buffs de Fuerza pura potencian a Yidhari/Manato."
  },
  {
    "id": "ukinami-yuzuha",
    "nombre": "Ukinami Yuzuha",
    "rango": "S",
    "atributo": "Físico",
    "especialidad": "Auxiliar",
    "version": "2.1",
    "estado": "ok",
    "ranura4": {
      "principal": "ATQ%",
      "alt": "Competencia de anomalía"
    },
    "ranura5": {
      "principal": "ATQ%",
      "alt": "—"
    },
    "ranura6": {
      "principal": "Dominio de anomalía",
      "alt": "ATQ%"
    },
    "substats": [
      "ATQ%",
      "Competencia de anomalía",
      "ATQ",
      "Prob. de crítico"
    ],
    "motoresW": [
      {
        "es": "Metanukimorfosis",
        "en": "Metanukimorphosis",
        "nota": "Insignia · la mejor: ayuda a alcanzar 200 Dominio de anomalía",
        "best": true
      },
      {
        "es": "Envanecimiento primoroso",
        "en": "Elegant Vanity",
        "nota": "Alternativa S: convierte energía en daño de equipo"
      },
      {
        "es": "Cañón bombástico",
        "en": "Kaboom the Cannon",
        "nota": "Rango A: +ATQ del grupo"
      }
    ],
    "discos": [
      {
        "es": "Jazz oscilante ×4",
        "en": "Swing Jazz",
        "nota": "+Regen. energía y +daño a todo el equipo",
        "best": true
      },
      {
        "es": "Melodía de Faetón ×2",
        "en": "Phaethon's Melody",
        "nota": "+Comp. de anomalía (alt 4 piezas: Voz astral)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Miyabi · Ukinami Yuzuha · Vivian",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Jane Doe · Ukinami Yuzuha · Yanagi"
      },
      {
        "nombre": "F2P",
        "agentes": "Piper · Ukinami Yuzuha · Burnice"
      }
    ],
    "consejo": "Auxiliar de anomalía: escala con ATQ (mínimo ~3000) y luego Competencia/Dominio de anomalía; NO con Regeneración. Brilla con dos unidades anómalas para maximizar el Daño de desorden."
  },
  {
    "id": "komano-manato",
    "nombre": "Komano Manato",
    "rango": "A",
    "atributo": "Ígneo",
    "especialidad": "Disruptivo",
    "version": "2.3",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "PV%",
      "alt": "Daño ígneo %"
    },
    "ranura6": {
      "principal": "PV%",
      "alt": "—"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "PV%",
      "PV",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Ignición fatua",
        "en": "Grill O'Wisp",
        "nota": "Insignia · la mejor: +Daño ígneo y Prob. crít ligados a su kit",
        "best": true
      },
      {
        "es": "Vajra iracundo",
        "en": "Wrathful Vajra",
        "nota": "Alternativa S: +Prob. crít y Daño ígneo puro"
      },
      {
        "es": "Rompecabezas ilusorio",
        "en": "Puzzle Sphere",
        "nota": "Rango A/F2P: +Daño crítico"
      }
    ],
    "discos": [
      {
        "es": "Fábula Yunkui ×4",
        "en": "Yunkui Tales",
        "nota": "+PV%, Prob. crít acumulable y +Daño puro",
        "best": true
      },
      {
        "es": "Balada de la rama y la espada ×2",
        "en": "Branch & Blade Song",
        "nota": "+Daño crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Komano Manato · Lucía · Ju Fufu",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Komano Manato · Lucía · Lycaon"
      },
      {
        "nombre": "F2P",
        "agentes": "Komano Manato · Soukaku · Anby"
      }
    ],
    "consejo": "Disruptivo ígneo A-rank: todo su Daño ígneo es puro (Sheer) y escala con PV, no con ATQ; prioriza PV% + doble crítico. Empareja con otra unidad de Fuego/Ruptura para activar su habilidad extra."
  },
  {
    "id": "zhao",
    "nombre": "Zhao",
    "rango": "S",
    "atributo": "Glacial",
    "especialidad": "Defensivo",
    "version": "2.5",
    "estado": "ok",
    "ranura4": {
      "principal": "PV%",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "PV%",
      "alt": "Daño glacial %"
    },
    "ranura6": {
      "principal": "PV%",
      "alt": "Regeneración de energía"
    },
    "substats": [
      "PV%",
      "Regeneración de energía",
      "Prob. de crítico",
      "Daño crítico"
    ],
    "motoresW": [
      {
        "es": "Conejita semiazucarada",
        "en": "Half-Sugar Bunny",
        "nota": "Insignia · la mejor",
        "best": true
      },
      {
        "es": "Transmorfer original",
        "en": "Original Transmorpher",
        "nota": "F2P · defensivo · escala con PV"
      },
      {
        "es": "Cañón bombástico",
        "en": "Kaboom the Cannon",
        "nota": "Rango A · apoyo"
      }
    ],
    "discos": [
      {
        "es": "Voz astral ×4",
        "en": "Astral Voice",
        "nota": "+6/8/10% daño del escuadrón tras Asistencia rápida",
        "best": true
      },
      {
        "es": "Fábula Yunkui ×2",
        "en": "Yunkui Tales",
        "nota": "+PV%"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Ye Shunguang · Dialyn · Zhao",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Ye Shunguang · Nangong Yu · Zhao"
      },
      {
        "nombre": "F2P",
        "agentes": "Ye Shunguang · Anby · Zhao"
      }
    ],
    "consejo": "Apila PV% en las tres ranuras; su objetivo es ~27.000 de PV máx. para maximizar el buff de daño (+40%) y la curación. Suma algo de Regeneración de energía para acumular Puntos de escarcha."
  },
  {
    "id": "dialyn",
    "nombre": "Dialyn",
    "rango": "S",
    "atributo": "Físico",
    "especialidad": "Aturdidor",
    "version": "2.4",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "ATQ%",
      "alt": "Daño físico %"
    },
    "ranura6": {
      "principal": "Impacto",
      "alt": "Regeneración de energía"
    },
    "substats": [
      "Daño crítico",
      "Prob. de crítico",
      "Impacto",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Llamada del ayer",
        "en": "Yesterday Calls",
        "nota": "Insignia · la mejor: Prob. crít y Aturdimiento",
        "best": true
      },
      {
        "es": "Batería de Demara (II)",
        "en": "Demara Battery Mark II",
        "nota": "Rango A · F2P · energía"
      },
      {
        "es": "Engranaje infernal",
        "en": "Hellfire Gears",
        "nota": "Rango A · F2P: +Impacto acumulable con el EX; el mejor motor de aturdidor accesible si buscas puro Aturdimiento en vez de crítico",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Monarca del Pináculo ×4",
        "en": "King of the Summit",
        "nota": "Aturdir con EX/Cadena da +15/30% Daño crít al escuadrón (con ≥50% crít)",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+Prob. de crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Ye Shunguang · Dialyn · Zhao",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Banyue · Dialyn · Lucía"
      },
      {
        "nombre": "F2P",
        "agentes": "Antón · Dialyn · Nicole"
      }
    ],
    "consejo": "Busca ~50-65% Prob. de crítico e Impacto 400+. Su EX sigue Piedra→Tijera→Papel; el golpe Papel aplica Queja maliciosa para extender el aturdimiento."
  },
  {
    "id": "sunna",
    "nombre": "Sunna",
    "rango": "S",
    "atributo": "Físico",
    "especialidad": "Auxiliar",
    "version": "2.6",
    "estado": "ok",
    "ranura4": {
      "principal": "ATQ%",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "ATQ%",
      "alt": "Daño físico %"
    },
    "ranura6": {
      "principal": "Regeneración de energía",
      "alt": "ATQ%"
    },
    "substats": [
      "ATQ%",
      "Regeneración de energía",
      "Daño crítico",
      "Prob. de crítico"
    ],
    "motoresW": [
      {
        "es": "Pensamientos hechos canción",
        "en": "Thoughtbop",
        "nota": "Insignia · la mejor: energía fuera de campo y buff de daño al escuadrón",
        "best": true
      },
      {
        "es": "Cuna plañidera",
        "en": "Weeping Cradle",
        "nota": "Hasta +20,7% bonif. de daño de escuadrón"
      },
      {
        "es": "Cañón bombástico",
        "en": "Kaboom the Cannon",
        "nota": "Rango A · F2P · apila ATQ"
      }
    ],
    "discos": [
      {
        "es": "Nana a la luz cenicienta ×4",
        "en": "Moonlight Lullaby",
        "nota": "+20% Regen. energía; +18% daño escuadrón 25 s al usar EX/Definitiva",
        "best": true
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "+Regeneración de energía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Aria · Nangong Yu · Sunna",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Ye Shunguang · Nangong Yu · Sunna"
      },
      {
        "nombre": "F2P",
        "agentes": "Billy · Anby · Sunna"
      }
    ],
    "consejo": "Alcanza ~3.500 de ATQ para activar sus buffs y la regeneración; luego prioriza Regeneración de energía para repetir el EX. Da ATQ, mult. de desequilibrio y Daño crítico (a atacantes) o Dominio de anomalía (a anómalos)."
  },
  {
    "id": "promeia",
    "nombre": "Promeia",
    "rango": "S",
    "atributo": "Glacial",
    "especialidad": "Anómalo",
    "version": "2.8",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño glacial %",
      "alt": "ATQ%"
    },
    "ranura6": {
      "principal": "Dominio de anomalía",
      "alt": "Dominio de anomalía"
    },
    "substats": [
      "Competencia de anomalía",
      "Dominio de anomalía",
      "ATQ%",
      "Daño glacial %"
    ],
    "motoresW": [
      {
        "es": "Falce escarchada",
        "en": "Frostfall Sickle",
        "nota": "Insignia · la mejor: Dominio de anomalía y buffs de daño",
        "best": true
      },
      {
        "es": "Aluvión de datos",
        "en": "Data Flood",
        "nota": "Rango A · F2P · +ATQ y Comp. anomalía al usar Especial/EX · nombre no oficial aún"
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A · alternativa de anomalía"
      }
    ],
    "discos": [
      {
        "es": "Diario de una prisionera ×4",
        "en": "Notes from the Chained",
        "nota": "~48 Comp. de anomalía y +16% Daño de anomalía/Desorden",
        "best": true
      },
      {
        "es": "Blues libre ×2",
        "en": "Freedom Blues",
        "nota": "+Competencia de anomalía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Promeia · Nangong Yu · Yuzuha",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Promeia · Vivian · Yuzuha"
      },
      {
        "nombre": "F2P",
        "agentes": "Promeia · Nangong Yu · Soukaku"
      }
    ],
    "consejo": "DPS principal de anomalía glacial: acumula Congelación corrosiva → Prueba de frío para detonar Abloom. Con Dominio de anomalía inicial &gt;150, cada punto extra da +1,5 Competencia y +0,35% Daño Abloom al escuadrón."
  },
  {
    "id": "banyue",
    "nombre": "Banyue",
    "rango": "S",
    "atributo": "Ígneo",
    "especialidad": "Disruptivo",
    "version": "2.4",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "Daño ígneo %",
      "alt": "PV%"
    },
    "ranura6": {
      "principal": "PV%",
      "alt": "Daño ígneo %"
    },
    "substats": [
      "Daño crítico",
      "Prob. de crítico",
      "PV%",
      "ATQ%"
    ],
    "motoresW": [
      {
        "es": "Vajra iracundo",
        "en": "Wrathful Vajra",
        "nota": "Insignia · la mejor: PV alto, Prob. crít y apila Daño penetrante ígneo",
        "best": true
      },
      {
        "es": "Caldero de la claridad",
        "en": "Cauldron of Clarity",
        "nota": "Rango A · F2P · bonif. daño, PV% y Prob. crítico"
      },
      {
        "es": "Rompecabezas ilusorio",
        "en": "Puzzle Sphere",
        "nota": "Rango A · F2P (canal estándar), motor de Disruptivo: +16% Daño crítico tras el EX y +20% daño de EX contra enemigos por debajo del 50% de PV",
        "best": false
      }
    ],
    "discos": [
      {
        "es": "Fábula Yunkui ×4",
        "en": "Yunkui Tales",
        "nota": "escala con PV para su Fuerza penetrante",
        "best": true
      },
      {
        "es": "Balada de la rama y la espada ×2",
        "en": "Branch & Blade Song",
        "nota": "+Daño crítico (alt: Tecno pícido ×2)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Banyue · Dialyn · Lucía",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Banyue · Ju Fufu · Astra Yao"
      },
      {
        "nombre": "F2P",
        "agentes": "Banyue · Gatillo · Ben"
      }
    ],
    "consejo": "Convierte PV máx. en Fuerza penetrante, así que PV es su estadística nº1 junto a Prob. de crítico (apunta a ~100% en combate). Permanece en campo para acumular Fuegos de ira y entrar en Semblante de furia."
  },
  {
    "id": "nangong-yu",
    "nombre": "Nangong Yu",
    "rango": "S",
    "atributo": "Etéreo",
    "especialidad": "Aturdidor",
    "version": "2.7",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño etéreo %",
      "alt": "ATQ%"
    },
    "ranura6": {
      "principal": "Dominio de anomalía",
      "alt": "Impacto"
    },
    "substats": [
      "Competencia de anomalía",
      "Dominio de anomalía",
      "ATQ%",
      "Impacto"
    ],
    "motoresW": [
      {
        "es": "Delusiones de neón",
        "en": "Neon Fantasies",
        "nota": "Insignia · la mejor: único motor de aturdimiento con estadísticas de anomalía",
        "best": true
      },
      {
        "es": "Disco sacudestrellas",
        "en": "Shockstar Disco",
        "nota": "Rango A · F2P · aturdimiento puro"
      },
      {
        "es": "Construcción apasionada",
        "en": "Passionate Construction",
        "nota": "Impacto% y energía · nombre no oficial aún"
      }
    ],
    "discos": [
      {
        "es": "Melodía de Faetón ×4",
        "en": "Phaethon's Melody",
        "nota": "amplifica la anomalía del escuadrón",
        "best": true
      },
      {
        "es": "Blues libre ×2",
        "en": "Freedom Blues",
        "nota": "+Competencia de anomalía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Aria · Nangong Yu · Sunna",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Promeia · Nangong Yu · Yuzuha"
      },
      {
        "nombre": "F2P",
        "agentes": "Nangong Yu · Piper · Lucy"
      }
    ],
    "consejo": "Aturdidora atípica: se construye con anomalía, NO con Impacto (ranura 6 = Dominio de anomalía). Con Dominio de anomalía &gt;100, cada punto extra da +0,8 Impacto. Convierte Competencia en Impacto para habilitar DPS anómalos."
  },
  {
    "id": "aria",
    "nombre": "Aria",
    "rango": "S",
    "atributo": "Etéreo",
    "especialidad": "Anómalo",
    "version": "2.6",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "ATQ%"
    },
    "ranura5": {
      "principal": "Daño etéreo %",
      "alt": "Tasa de perforación"
    },
    "ranura6": {
      "principal": "Dominio de anomalía",
      "alt": "Dominio de anomalía"
    },
    "substats": [
      "Competencia de anomalía",
      "Dominio de anomalía",
      "ATQ%",
      "Daño etéreo %"
    ],
    "motoresW": [
      {
        "es": "El ángel en la carcasa",
        "en": "Angel in the Shell",
        "nota": "Insignia · la mejor: +Dominio y +90 Comp. de anomalía, +daño",
        "best": true
      },
      {
        "es": "Compilador quimérico",
        "en": "Fusion Compiler",
        "nota": "Rango S · alternativa de anomalía (ATQ)"
      },
      {
        "es": "Llanto mielgo",
        "en": "Weeping Gemini",
        "nota": "Rango A · F2P · Competencia de anomalía"
      }
    ],
    "discos": [
      {
        "es": "Aria radiante ×4",
        "en": "Shining Aria",
        "nota": "+Daño etéreo, Comp. de anomalía y DPS",
        "best": true
      },
      {
        "es": "Melodía de Faetón ×2",
        "en": "Phaethon's Melody",
        "nota": "+Comp. de anomalía (alt: Jazz caótico ×2 / Blues libre ×2)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Aria · Nangong Yu · Sunna",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Aria · Promeia · Nangong Yu"
      },
      {
        "nombre": "F2P",
        "agentes": "Aria · Anby · Soukaku"
      }
    ],
    "consejo": "Especialista en anomalía etérea con Ataques cargados que detonan Abloom; escala con Competencia y Dominio de anomalía, no con crítico. Máximo rendimiento en el equipo Ángeles del Engaño."
  },
  {
    "id": "cissia",
    "nombre": "Cissia",
    "rango": "S",
    "atributo": "Eléctrico",
    "especialidad": "Atacante",
    "version": "2.7",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico"
    },
    "ranura5": {
      "principal": "Daño eléctrico %",
      "alt": "ATQ%"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Regeneración de energía"
    },
    "substats": [
      "Daño crítico",
      "Prob. de crítico",
      "ATQ%",
      "Regeneración de energía"
    ],
    "motoresW": [
      {
        "es": "Rastreador serpentino",
        "en": "Serpentine Seeker",
        "nota": "Insignia · la mejor: Regen. energía y buffs de daño apilables",
        "best": true
      },
      {
        "es": "Fogonazo belicoso",
        "en": "Bellicose Blaze",
        "nota": "Rango S · alternativa con Regeneración de energía"
      },
      {
        "es": "Estrella callejera",
        "en": "Street Superstar",
        "nota": "Rango A · F2P · atacante"
      }
    ],
    "discos": [
      {
        "es": "Metal eléctrico ×4",
        "en": "Thunder Metal",
        "nota": "+Daño eléctrico en equipos eléctricos",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+Prob. de crítico (alt: Floración del alba ×4 para básico)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Cissia · N.º 0: Anby · Astra Yao",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Cissia · Sporos · Nicole"
      },
      {
        "nombre": "F2P",
        "agentes": "Cissia · Harumasa · Anby"
      }
    ],
    "consejo": "Sub-DPS eléctrica: apunta a ~76% Prob. de crítico y algo de Regeneración de energía. Su Beso de serpiente y Corroe hueso cuentan como Ataque básico; reduce DEF eléctrica y da Daño crítico al escuadrón eléctrico."
  },
  {
    "id": "billy-estelar",
    "nombre": "Billy Estelar",
    "rango": "S",
    "atributo": "Físico",
    "especialidad": "Disruptivo",
    "version": "2.8",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico según lo que te falte (apunta a ~1:2 contando el +20% de su insignia)"
    },
    "ranura5": {
      "principal": "PV%",
      "alt": "Daño físico % también vale; nunca ATQ%"
    },
    "ranura6": {
      "principal": "PV%",
      "alt": "Sin alternativa real: su Fuerza bruta escala con los PV máx."
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "PV%",
      "ATQ%",
      "PV"
    ],
    "motoresW": [
      {
        "es": "Yelmo de motorista estelar",
        "en": "Starlight Rider Faceplate",
        "nota": "Insignia · la mejor: +30% PV, +20% Prob. crít y +daño bruto físico acumulable con especiales",
        "best": true
      },
      {
        "es": "Tránsito herciano",
        "en": "Radiowave Journey",
        "nota": "Rango A del Pase: +Fuerza bruta acumulable con cadenas/definitiva"
      },
      {
        "es": "Caldero de la claridad",
        "en": "Cauldron of Clarity",
        "nota": "Rango A: PV%, +daño acumulable con EX y Prob. de crítico a 3 cargas"
      },
      {
        "es": "Rompecabezas ilusorio",
        "en": "Puzzle Sphere",
        "nota": "Rango A · F2P: Daño crít +25,6% al usar el EX"
      }
    ],
    "discos": [
      {
        "es": "Fábula Yunkui ×4",
        "en": "Yunkui Tales",
        "nota": "PV +10%, Prob. crít acumulable y +10% de daño bruto: único set con daño bruto, obligatorio",
        "best": true
      },
      {
        "es": "Balada de la rama y la espada ×2",
        "en": "Branch & Blade Song",
        "nota": "+16% de Daño crítico"
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "Alternativa: +8% de Prob. de crítico"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Billy Estelar · Dialyn · Lucía",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Billy Estelar · Norma · Lucía"
      },
      {
        "nombre": "F2P",
        "agentes": "Billy Estelar · Pulchra · Pan Yinhu"
      }
    ],
    "consejo": "Disruptivo como Yixuan: su <b>daño bruto</b> ignora la DEF y escala con los PV máx. (1 PV = 0,1 de Fuerza bruta), así que apila <b>PV%</b> y crítico, nada de ATQ%. Cicla su Especial (consume un 16% de PV, solo usable sobre el 25%) y recupérate con su robo de vida; los buffs genéricos de ATQ no le sirven, por eso quiere apoyos de Fuerza bruta como <i>Lucía</i> o <i>Pan Yinhu</i>, y Dialyn convierte su Fuerza bruta en daño extra. Prioridad: Núcleo &gt; Especial &gt; Cadena &gt; Definitiva &gt; Básico."
  },
  {
    "id": "pyrois",
    "nombre": "Pyrois",
    "rango": "I",
    "atributo": "Etéreo",
    "especialidad": "Atacante",
    "version": "3.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Daño crítico; en combate ya acumula hasta +110% de Daño crít entre facción, definitiva y set"
    },
    "ranura5": {
      "principal": "Tasa de perforación",
      "alt": "Daño etéreo % o ATQ% con buenas substats (diferencia mínima)"
    },
    "ranura6": {
      "principal": "ATQ%",
      "alt": "Sin alternativa real: ATQ% siempre"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "Tasa de perforación",
      "ATQ"
    ],
    "motoresW": [
      {
        "es": "Sol exuvia",
        "en": "Sol Exuvia",
        "nota": "Insignia · gratis con él en la historia de Roscaelifer: +30% ATQ, +20% Prob. crít e ignora RES etérea 45 s con la definitiva",
        "best": true
      },
      {
        "es": "Antidisturbios (VI)",
        "en": "Riot Suppressor Mark VI",
        "nota": "Insignia de Zhu Yuan · alternativa S cercana en rendimiento"
      },
      {
        "es": "Cordis germina",
        "en": "Cordis Germina",
        "nota": "Alternativa S de crítico"
      },
      {
        "es": "Acordes del corazón nocturno",
        "en": "Heartstring Nocturne",
        "nota": "Alternativa S: Prob. de crítico"
      }
    ],
    "discos": [
      {
        "es": "Firmamento llameante ×4",
        "en": "The Sky Ablaze",
        "nota": "+10% daño etéreo; para etéreos +30% Daño crít y +10% ATQ con EX/definitiva · se farmea junto a Salón huracanado",
        "best": true
      },
      {
        "es": "Tecno tetraodóntido ×4",
        "en": "Puffer Electro",
        "nota": "Alternativa casi igual: +8% Tasa de perforación y +20% daño de definitiva"
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "2 piezas flexibles: Prob. crít (o Metal caótico ×2 / Voz astral ×2)"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Pyrois · Dialyn · Astra Yao",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Pyrois · Norma · Astra Yao"
      },
      {
        "nombre": "F2P",
        "agentes": "Pyrois · Anby · Nicole"
      }
    ],
    "consejo": "Agente <b>gratuito</b> de rango especial <b>I</b>: se obtiene con su motor avanzando la historia de 3.0 en Roscaelifer. Atacante etéreo de definitivas: acumula decibelios y encadena hasta cuatro definitivas distintas en la ventana de aturdimiento; su técnica adicional <i>Legión gloriosa</i> da +40% de Daño crít con un aturdidor o auxiliar en el equipo. Apunta a ~72% de Prob. de crítico en ficha (Sol exuvia suma +20% solo en combate). Prioriza el núcleo por encima de todo."
  },
  {
    "id": "velina-airgid",
    "nombre": "Velina Airgid",
    "rango": "S",
    "atributo": "Aéreo",
    "especialidad": "Anómalo",
    "version": "3.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Competencia de anomalía",
      "alt": "Es su stat clave junto al ATQ%; no busques crítico"
    },
    "ranura5": {
      "principal": "Daño aéreo %",
      "alt": "ATQ% o Tasa de perforación con mejores substats"
    },
    "ranura6": {
      "principal": "Regeneración de energía",
      "alt": "Casi obligatoria: su núcleo convierte la regen. en daño y Dominio"
    },
    "substats": [
      "Competencia de anomalía",
      "ATQ%",
      "PEN",
      "ATQ"
    ],
    "motoresW": [
      {
        "es": "Joyau doré",
        "en": "Joyau Dore",
        "nota": "Insignia · la mejor: +110 Comp. anomalía, +daño de Vórtice y Comp. anomalía para todo el equipo, con hasta 60% de regen.",
        "best": true
      },
      {
        "es": "Pensamientos hechos canción",
        "en": "Thoughtbop",
        "nota": "Rango S de regen. de energía (también Metanukimorfosis o Rastreador serpentino)"
      },
      {
        "es": "Coctelera incandescente",
        "en": "Flamemaker Shaker",
        "nota": "Insignia de Burnice · regen. fuera de campo y +daño acumulable"
      },
      {
        "es": "Ecos bulliciosos",
        "en": "Boisterous Echoes",
        "nota": "Rango A · gratis en el evento de 3.0: energía al provocar Vórtice · gran opción F2P a P5"
      }
    ],
    "discos": [
      {
        "es": "Salón huracanado ×4",
        "en": "Wuthering Salon",
        "nota": "+10% daño aéreo, +Comp. anomalía con el EX y +18% de daño al provocar la anomalía de Viento",
        "best": true
      },
      {
        "es": "Nana a la luz cenicienta ×2",
        "en": "Moonlight Lullaby",
        "nota": "+Regeneración de energía (set nuevo de 3.0)"
      },
      {
        "es": "Jazz oscilante ×2",
        "en": "Swing Jazz",
        "nota": "Alternativa: +20% de Regeneración de energía"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Promeia · Velina · Yuzuha",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Jane Doe · Velina · Yuzuha"
      },
      {
        "nombre": "F2P",
        "agentes": "Piper · Velina · Lucy"
      }
    ],
    "consejo": "Primera agente de <b>Aéreo</b> (Viento): sub-DPS anómala fuera de campo y pseudoaturdidora. Aplica la anomalía aérea, deja que otro atributo la contamine y en vez de Desorden provoca <b>Vórtice</b>, un ciclón que agrupa enemigos y remata con su Floración. Su núcleo convierte cada 0,01 de Regeneración de energía sobre 1,2 en +0,21% de daño (tope 35%) y +0,5 de Dominio: la ranura VI de regen. es casi obligatoria incluso con motor de regen. Prioridad: Núcleo &gt; Especial EX &gt; Básico."
  },
  {
    "id": "norma-hollowell",
    "nombre": "Norma Hollowell",
    "rango": "S",
    "atributo": "Ígneo",
    "especialidad": "Aturdidor",
    "version": "3.0",
    "estado": "ok",
    "ranura4": {
      "principal": "Prob. de crítico",
      "alt": "Su Daño crít y su aturdimiento escalan con la probabilidad: apunta a 80-100%"
    },
    "ranura5": {
      "principal": "Daño ígneo %",
      "alt": "ATQ% si no consigues buena pieza ígnea"
    },
    "ranura6": {
      "principal": "Impacto",
      "alt": "Regeneración de energía como alternativa"
    },
    "substats": [
      "Prob. de crítico",
      "Daño crítico",
      "ATQ%",
      "PEN"
    ],
    "motoresW": [
      {
        "es": "Subalterno jefe",
        "en": "Chief Sidekick",
        "nota": "Insignia · la mejor: 24% Prob. crít, +30 Impacto, ignora 15% de RES ígnea y +daño al equipo con su EX",
        "best": true
      },
      {
        "es": "Engranaje infernal",
        "en": "Hellfire Gears",
        "nota": "Alternativa S: regen. fuera de campo e Impacto con EX"
      },
      {
        "es": "Rugiente urna de la fortuna",
        "en": "Roaring Fur-nace",
        "nota": "Insignia de Ju Fufu: +aturdimiento y daño al equipo con cadena/definitiva ígneas"
      },
      {
        "es": "Última cena",
        "en": "Steam Oven",
        "nota": "Rango A · F2P: +Impacto según energía"
      }
    ],
    "discos": [
      {
        "es": "Monarca del Pináculo ×4",
        "en": "King of the Summit",
        "nota": "+6% aturdimiento y +15% Daño crít al equipo (+15% extra con ≥50% de prob.): el set de aturdidor meta",
        "best": true
      },
      {
        "es": "Tecno pícido ×2",
        "en": "Woodpecker Electro",
        "nota": "+8% Prob. de crítico si aún no llegas al umbral"
      },
      {
        "es": "Disco sacudestrellas ×2",
        "en": "Shockstar Disco",
        "nota": "Alternativa: +6% de Impacto para más aturdimiento"
      }
    ],
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Yixuan · Norma · Lucía",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Evelyn · Norma · Astra Yao"
      },
      {
        "nombre": "F2P",
        "agentes": "Pyrois · Norma · Nicole"
      }
    ],
    "consejo": "Aturdidora ígnea fuera de campo: su núcleo convierte cada 1% de Prob. crít en +0,9% de Daño crít y +0,6% de aturdimiento (topes +81%/+54%), por eso la Prob. de crítico manda sobre todo. Lanza su <i>sombrero de copa acompañante</i> para seguir acumulando <b>precalentamiento de cámara</b> fuera de campo y, tras un aturdimiento, sus torretas Ehn Na bombardean con misiles durante 6 s. Es una Ju Fufu mejorada: encaja en casi cualquier equipo de Atacante o Disruptivo (alarga el aturdimiento y buffea al equipo). Prioridad: Núcleo &gt; Especial EX &gt; Cadena."
  }
];
