// ============================================================
//  NTE Guía rápida — datos de Espers (Neverness to Everness 1.3 · preliminar 1.4)
//  24 Espers. Auditado (17-sep-2026: v1.2 Iroi; v1.3 Zankou, Linko; v1.4 preliminar Blackbird, Akane Rin).
// ============================================================
const CHARACTERS = [
  {
    "id": "chaos",
    "nombre": "Chaos",
    "rango": "S",
    "elemento": "Lakshana",
    "rol": "Daño",
    "version": "1.1",
    "estado": "ok",
    "statPriority": [
      "Daño de Lakshana %",
      "ATQ%",
      "Daño CRÍ",
      "Prob. CRÍ",
      "Bono de Daño Universal"
    ],
    "discos": [
      {
        "es": "Lo que todos buscan",
        "en": "Lo que todos buscan",
        "nota": "Insignia · el mejor: +25% Daño Lakshana fijo y +40% Daño CRÍ al usar Redirección o la Definitiva",
        "best": true
      },
      {
        "es": "Sociedad de la camelia",
        "en": "Sociedad de la camelia",
        "nota": "Mejor F2P S: cae del jefe Serenetti. Gran ATQ% y Daño CRÍ"
      },
      {
        "es": "Pelusa feroz",
        "en": "Pelusa feroz",
        "nota": "Económica, del Pase de Batalla (serie Pelusa)"
      },
      {
        "es": "Llegará la hora",
        "en": "Llegará la hora",
        "nota": "Mejor disco gratis rango A si necesitas Prob. CRÍ"
      }
    ],
    "cartuchos": [
      {
        "es": "Combatiente de calle ×4",
        "en": "Combatiente de calle",
        "nota": "4 piezas (Leyenda): +14% Prob. CRÍ base, sube a 28% durante 20 s al activar Remora o Mancha",
        "best": true
      },
      {
        "es": "Combatiente de calle ×2",
        "en": "Combatiente de calle",
        "nota": "2 piezas (Épico): bono de Daño Lakshana / Prob. CRÍ"
      }
    ],
    "consola": "Módulos Tipo III con Daño de Lakshana % en el slot bonus por encima de todo; rellena con ATQ%. Subs: Daño Lakshana &gt; ATQ% &gt; Daño CRÍ &gt; Prob. CRÍ.",
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Chaos · Esper Zero · Hathor · Haniel",
        "best": true
      },
      {
        "nombre": "Alternativo (Lakshana/Discord)",
        "agentes": "Chaos · Zero · Haniel · flex que active Remora/Mancha"
      }
    ],
    "consejo": "Main DPS Lakshana muy F2P-friendly. Mantén Remora/Mancha con el equipo para el doble buff de crítico de Combatiente de calle y cicla Habilidad/Definitiva para conservar el 40% de Daño CRÍ de su disco. Sube Habilidad &gt; Definitiva."
  },
  {
    "id": "lacrimosa",
    "nombre": "Lacrimosa",
    "rango": "S",
    "elemento": "Chaos",
    "rol": "Daño",
    "version": "1.1",
    "estado": "ok",
    "statPriority": [
      "Daño de Chaos %",
      "Prob. CRÍ",
      "Daño CRÍ",
      "ATQ%",
      "Bono de Daño Universal"
    ],
    "discos": [
      {
        "es": "La última rosa",
        "en": "La última rosa",
        "nota": "Insignia · el mejor: alto ATQ y Prob. CRÍ + buff de Daño CRÍ que escala con sus DoT; alarga Roto 3 s",
        "best": true
      },
      {
        "es": "Fantasía juvenil",
        "en": "Fantasía juvenil",
        "nota": "Fuerte alternativa con perfil similar; gratis en New Herland"
      },
      {
        "es": "Pelusa ágil",
        "en": "Pelusa ágil",
        "nota": "Disco del Pase de Batalla; buen Daño Chaos y crítico"
      },
      {
        "es": "Días brillantes",
        "en": "Días brillantes",
        "nota": "Mejor opción F2P, buen escalado de Daño de Chaos"
      }
    ],
    "cartuchos": [
      {
        "es": "Diabolos ×4",
        "en": "Diabolos",
        "nota": "4 piezas (Leyenda): +10% Daño Chaos e ignora RES Chaos (12% + 24% tras Nova/Scorch). Ideal en equipos Discord",
        "best": true
      },
      {
        "es": "Credo de sombra ×2",
        "en": "Credo de sombra",
        "nota": "2 piezas alternativa: hasta +35% ATQ tras su Habilidad"
      }
    ],
    "consola": "Con La última rosa, main del cartucho en Daño de Chaos % (el disco ya da Prob. CRÍ). +10% Daño Chaos por cada módulo Tipo III: prioriza Tipo III. Su DoT tiene 50% Prob. CRÍ fijo, así que Daño de Chaos rinde más que crítico.",
    "equipos": [
      {
        "nombre": "Premium (Discord)",
        "agentes": "Lacrimosa · Daffodill · Sakiri · Haniel",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Lacrimosa · Sakiri (Scorch) · aliado Psyche (Nova) · Haniel"
      }
    ],
    "consejo": "DPS de Chaos basada en DoT (Nightmare) y Discord. El equipo existe para crear Discord sobre un enemigo Roto y disparar Tomato Banquet: necesita Encantamiento (Scorch) + Psyche (Nova) combinados con su Chaos. Sube Habilidad y Definitiva primero."
  },
  {
    "id": "hotori",
    "nombre": "Hotori",
    "rango": "S",
    "elemento": "Cosmos",
    "rol": "Apoyo",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "ATQ%",
      "Daño de Cosmos %",
      "Daño CRÍ",
      "Bono de Daño Universal",
      "PS%"
    ],
    "discos": [
      {
        "es": "Marchando más allá del tiempo",
        "en": "Marchando más allá del tiempo",
        "nota": "Insignia · el mejor: maximiza su Definitiva; 3 stacks de Wastetime → 24% Ignorar DEF con uptime casi permanente",
        "best": true
      },
      {
        "es": "Pelusa sin miedo",
        "en": "Pelusa sin miedo",
        "nota": "Sólida rango S del Pase: +ATQ y Prob. CRÍ tras la Definitiva"
      },
      {
        "es": "Los olvidados",
        "en": "Los olvidados",
        "nota": "Mejor opción fiable rango A / F2P: +ATQ estable sobre 50% PS"
      }
    ],
    "cartuchos": [
      {
        "es": "Resplandor perdido ×4",
        "en": "Resplandor perdido",
        "nota": "4 piezas (Leyenda): ignora buena parte de la DEF enemiga tras la Definitiva",
        "best": true
      },
      {
        "es": "Resplandor perdido ×2",
        "en": "Resplandor perdido",
        "nota": "2 piezas (Épico): +Daño de Cosmos %"
      }
    ],
    "consola": "Main: ATQ% &gt; Daño Cosmos &gt; Daño CRÍ &gt; PS%. Subs: ATQ% &gt; Daño universal &gt; Daño CRÍ &gt; ATQ plano &gt; PS plano. Prioriza módulos que sostengan su Definitiva.",
    "equipos": [
      {
        "nombre": "Premium (Blossom)",
        "agentes": "Hotori · Nanally · Esper Zero · Jiuyuan",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Hotori · Esper Zero · Jiuyuan · DPS Cosmos/Anima"
      }
    ],
    "consejo": "Buffer/Sub-DPS de Cosmos: para el tiempo (Time Stop) y replica las Habilidades usadas por el equipo en los últimos 5 s. Brilla en equipos Blossom con Zero y Jiuyuan. Sube Definitiva &gt; Habilidad; despierta 'Flourish' primero (hasta +36% daño en Time Stop)."
  },
  {
    "id": "nanally",
    "nombre": "Nanally",
    "rango": "S",
    "elemento": "Anima",
    "rol": "Daño",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "Daño CRÍ",
      "Prob. CRÍ",
      "Daño de Anima %",
      "ATQ%",
      "Bono de Daño Universal"
    ],
    "discos": [
      {
        "es": "Listo, listo",
        "en": "Listo, listo",
        "nota": "Insignia · el mejor: +15% ATQ y +15% daño de Básico/Riposte crítico 15 s al usar Redirección o Definitiva",
        "best": true
      },
      {
        "es": "Day Off",
        "en": "Day Off",
        "nota": "Mejor opción gratis (disco S del protagonista/anomalías)"
      },
      {
        "es": "¡Oraora!",
        "en": "Oraora!",
        "nota": "Opción F2P rango A: Disco Plasma que cae GRATIS del jefe Party Boxer (New Herland). Apila Daño de Básico (hasta ~+20%) y da ATQ%; potencia su daño de Básico/Riposte aunque no aporte Daño de Anima. Citada por game8 como alternativa a Listo, listo",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Las luciérnagas y el bosque ×4",
        "en": "Las luciérnagas y el bosque",
        "nota": "4 piezas (Leyenda): hasta +56% Daño CRÍ mientras siga atacando (uptime continuo)",
        "best": true
      },
      {
        "es": "Las luciérnagas y el bosque ×2",
        "en": "Las luciérnagas y el bosque",
        "nota": "2 piezas (Épico): +Daño de Anima"
      }
    ],
    "consola": "Completa el 4pz de Las luciérnagas y el bosque y rellena TODO lo demás con módulos Tipo II: gana 6% Prob. CRÍ por cada Tipo II. Main/Sub: Daño CRÍ = Prob. CRÍ &gt; Daño Anima = ATQ%.",
    "equipos": [
      {
        "nombre": "Premium (Blossom)",
        "agentes": "Nanally · Esper Zero · Sakiri · Adler",
        "best": true
      },
      {
        "nombre": "F2P/Alternativo",
        "agentes": "Nanally · Esper Zero · Daffodill · Haniel"
      }
    ],
    "consejo": "Main DPS de Anima (T0) y núcleo del equipo Blossom: Zero (Cosmos) crea Blossom con su Anima generando Genesis Buds que su pasiva potencia en explosiones AoE. Entra de última tras la rotación de los aliados. Añade a Adler como escudero."
  },
  {
    "id": "daffodill",
    "nombre": "Daffodill",
    "rango": "S",
    "elemento": "Chaos",
    "rol": "Daño",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "Intensidad de Ruptura",
      "Prob. CRÍ",
      "Daño CRÍ",
      "Daño de Chaos %",
      "ATQ%"
    ],
    "discos": [
      {
        "es": "Fantasía juvenil",
        "en": "Fantasía juvenil",
        "nota": "Insignia · el mejor y GRATIS: Black Tome tras 2 Habilidades de Apoyo (+20% Daño Chaos a marcados). De la Anomalía 'The Book of Post-Adolescence' en New Herland",
        "best": true
      },
      {
        "es": "Pelusa ágil",
        "en": "Pelusa ágil",
        "nota": "Alternativa del Pase con buen Chaos/crítico"
      },
      {
        "es": "Días brillantes",
        "en": "Shiny Days",
        "nota": "Mejor alternativa rango A: ATQ% + Intensidad de Ruptura y daño extra a enemigos Rotos, que ella dispara mejor que nadie. Encaja con su rol de Ruptura/Discord; accesible sin gastar en su firma",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Diabolos ×4",
        "en": "Diabolos",
        "nota": "4 piezas (Leyenda): +10% Daño Chaos e ignora RES Chaos (12% + 24% tras Nova/Scorch)",
        "best": true
      },
      {
        "es": "Diabolos ×2",
        "en": "Diabolos",
        "nota": "2 piezas (Épico): +Daño de Chaos %"
      }
    ],
    "consola": "Main del cartucho: Intensidad de Ruptura &gt; Crítico &gt; Daño de Chaos. Subs: Intensidad de Ruptura &gt; Crítico &gt; ATQ% &gt; Daño universal. Enfócala en romper barras rápido.",
    "equipos": [
      {
        "nombre": "Premium (Discord)",
        "agentes": "Daffodill · Baicang · Sakiri · Haniel",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Daffodill · Lacrimosa · Sakiri · Haniel"
      }
    ],
    "consejo": "Sub-DPS de Ruptura/Burst construida alrededor de Discord: entra, vacía la barra de Ruptura y sale. Emparéjala con Baicang (Encantamiento) para activar Scorch entre Chaos e Encantamiento. Prioridad: Habilidad &gt; Definitiva &gt; Básico &gt; Habilidad de Apoyo."
  },
  {
    "id": "baicang",
    "nombre": "Baicang",
    "rango": "S",
    "elemento": "Encantamiento",
    "rol": "Daño",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "ATQ%",
      "Prob. CRÍ",
      "Daño CRÍ",
      "Daño de Encantamiento %",
      "Bono de Daño Universal"
    ],
    "discos": [
      {
        "es": "Sociedad de la camelia",
        "en": "Sociedad de la camelia",
        "nota": "Insignia · el mejor por margen: alto ATQ y Prob. CRÍ; +Daño CRÍ cuando pierde PS sin daño externo (sinergia con su coste de PS)",
        "best": true
      },
      {
        "es": "Fantasía juvenil",
        "en": "Fantasía juvenil",
        "nota": "Alternativa sólida y accesible (disco gratis)"
      },
      {
        "es": "Pelusa ágil",
        "en": "Pelusa ágil",
        "nota": "Opción del Pase de Batalla (serie Pelusa)"
      }
    ],
    "cartuchos": [
      {
        "es": "Carmesí: Mariposas gemelas ×4",
        "en": "Carmesí: Mariposas gemelas",
        "nota": "4 piezas (Leyenda): +Daño de Encantamiento y buff de ATQ acumulable cada vez que un enemigo recibe daño Encantamiento",
        "best": true
      },
      {
        "es": "Carmesí: Mariposas gemelas ×2",
        "en": "Carmesí: Mariposas gemelas",
        "nota": "2 piezas (Épico): +Daño de Encantamiento %"
      }
    ],
    "consola": "Prioriza ATQ% y crítico; su daño escala por las Power Words de la Definitiva. Subs: ATQ% &gt; Prob. CRÍ &gt; Daño CRÍ &gt; Daño de Encantamiento.",
    "equipos": [
      {
        "nombre": "Premium (Discord/Scorch)",
        "agentes": "Baicang · Daffodill · Sakiri · Fadia (o Adler)",
        "best": true
      },
      {
        "nombre": "Alternativo (ETD-4)",
        "agentes": "Baicang · Sakiri · Skia · Fadia"
      }
    ],
    "consejo": "Main DPS de Encantamiento de alto riesgo: genera Power Words con Básicos y Redirección para cargar y suelta la Definitiva. Generar Power Words fuera de la Definitiva consume 3% de su PS actual, así que EMPARÉJALO SIEMPRE con supervivencia/curación (Fadia/Adler)."
  },
  {
    "id": "jiuyuan",
    "nombre": "Jiuyuan",
    "rango": "S",
    "elemento": "Anima",
    "rol": "Daño",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "Prob. CRÍ",
      "Daño CRÍ",
      "Daño de Anima %",
      "ATQ%",
      "Regeneración de energía"
    ],
    "discos": [
      {
        "es": "Refugio de la realidad",
        "en": "Refugio de la realidad",
        "nota": "Insignia · el mejor: +15% Daño Anima y +30% al daño de Attachment/Blossom",
        "best": true
      },
      {
        "es": "Disco Anima 4★ (F2P)",
        "en": "",
        "nota": "Sustituto gratis con ATQ%/Daño de Anima mientras consigues su firma"
      },
      {
        "es": "Los olvidados",
        "en": "The Forgotten",
        "nota": "Disco rango A generalista y F2P: buen ATQ% (con PS>50%) que le viene de perlas; sustituto sólido mientras consigue Refugio de la realidad. Recomendado por game8",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Las luciérnagas y el bosque ×4",
        "en": "Las luciérnagas y el bosque",
        "nota": "4 piezas (Leyenda): +10% Daño Anima y hasta +56% Daño CRÍ",
        "best": true
      },
      {
        "es": "Las luciérnagas y el bosque ×2",
        "en": "Las luciérnagas y el bosque",
        "nota": "2 piezas (Épico): bonus base de Anima"
      }
    ],
    "consola": "Su consola da +6% Prob. CRÍ por cada módulo Tipo II; llena con Tipo II de Prob. CRÍ buscando ~30% de crítico extra. Main de módulo: Prob./Daño CRÍ.",
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Jiuyuan · Nanally · Fadia (o buffer Anima)",
        "best": true
      },
      {
        "nombre": "Quickswap",
        "agentes": "Jiuyuan · Sakiri · sostén/escudo"
      }
    ],
    "consejo": "DPS de ráfaga (burst) Anima: entra solo con energía llena y balas especiales al máximo para su combo, aprovechando la Definitiva frontal y las mejoras Blossom. Prioridad: Definitiva &gt; Habilidad &gt; Básico."
  },
  {
    "id": "hathor",
    "nombre": "Hathor",
    "rango": "S",
    "elemento": "Lakshana",
    "rol": "Daño",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "Daño CRÍ",
      "Prob. CRÍ",
      "Daño de Lakshana %",
      "ATQ%"
    ],
    "discos": [
      {
        "es": "Llamas furiosas",
        "en": "Raging Flames",
        "nota": "Recomendado y GRATIS (jefe Jinete sin cabeza): sube Bono de Daño de Lakshana, Daño CRÍ y ATQ",
        "best": true
      },
      {
        "es": "Espada desenvainada",
        "en": "",
        "nota": "Otra opción vista en el juego para Hathor"
      },
      {
        "es": "¡Oraora!",
        "en": "Oraora!",
        "nota": "Disco Plasma (Lakshana) rango A y GRATIS del jefe Party Boxer: ATQ% + acumulación de Daño de Básico. Opción F2P de relleno recomendada por prydwen para el early game mientras farmeas Llamas furiosas",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Combatiente de calle ×4",
        "en": "Combatiente de calle",
        "nota": "4 piezas (Leyenda): +14% Prob. CRÍ, sube a 28% durante 20 s al activar Remora o Mancha",
        "best": true
      },
      {
        "es": "Credo de sombra ×2",
        "en": "Credo de sombra",
        "nota": "Alternativa: hasta +35% ATQ al usar la Habilidad"
      }
    ],
    "consola": "Prioriza módulos de Prob./Daño CRÍ. Sube subs de crítico hasta ~100% Prob. CRÍ en combate y luego pasa a Daño elemental y ATQ%.",
    "equipos": [
      {
        "nombre": "Premium (Cosmos/Lakshana)",
        "agentes": "Esper Zero · Nanally · Hathor · Fadia",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Chiz · Hathor · Fadia · Daffodill"
      }
    ],
    "consejo": "DPS de ráfaga Lakshana: acumula 'Express Delivery' para cargar la Definitiva rápido y encadena Definitiva + Habilidad potenciada en intervalos cortos. Prioridad: Definitiva &gt; Habilidad &gt; Básico."
  },
  {
    "id": "chiz",
    "nombre": "Chiz",
    "rango": "S",
    "elemento": "Cosmos",
    "rol": "Daño",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "Prob. CRÍ",
      "Daño CRÍ",
      "Daño de Cosmos %",
      "ATQ%"
    ],
    "discos": [
      {
        "es": "Gato contemplativo",
        "en": "Gato contemplativo",
        "nota": "Insignia · el mejor: hasta +25% Daño Cosmos. GRATIS vía City Tycoon",
        "best": true
      },
      {
        "es": "La lluvia que sacudió al mundo",
        "en": "La lluvia que sacudió al mundo",
        "nota": "Alternativa de gran valor: fuerte bonus de Daño Cosmos"
      },
      {
        "es": "Ensueño de Cosmos, fantasía salvaje",
        "en": "Cosmos Daze, Wild Reverie",
        "nota": "Mejor Disco rango A de Cosmos (nombre EN oficial; traducción tentativa): ATQ base/ATQ% y +18% de daño 10 s tras la Habilidad de Apoyo, que Chiz usa cada ~20 s. Alternativa F2P a su firma citada por game8",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Resplandor perdido ×4",
        "en": "Resplandor perdido",
        "nota": "4 piezas (Leyenda): ignora 25% de DEF enemiga durante 20 s tras la Definitiva",
        "best": true
      },
      {
        "es": "Resplandor perdido ×2",
        "en": "Resplandor perdido",
        "nota": "2 piezas (Épico): +10% Daño Cosmos"
      }
    ],
    "consola": "Gana hasta +50% Daño Cosmos de su módulo bonus: céntrate en Prob. CRÍ (consistencia) o Daño CRÍ. Consola: +10% Daño Cosmos por Tipo III; usa 4× Tipo III para +40% Cosmos.",
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Chiz · Hathor · Fadia · Daffodill",
        "best": true
      },
      {
        "nombre": "Cosmos",
        "agentes": "Chiz · buffer · sostén"
      }
    ],
    "consejo": "DPS Cosmos: rotación Definitiva primero, luego Habilidad + 2 básicos, repetido 3 veces (los básicos dan tiempo a recargar las barras dla Definitiva). Prioridad: Definitiva &gt; Habilidad &gt; Básico."
  },
  {
    "id": "zero",
    "nombre": "Esper Zero",
    "rango": "S",
    "elemento": "Cosmos",
    "rol": "Daño",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "Prob. CRÍ",
      "Daño CRÍ",
      "Daño de Cosmos %",
      "ATQ%"
    ],
    "discos": [
      {
        "es": "La lluvia que sacudió al mundo",
        "en": "La lluvia que sacudió al mundo",
        "nota": "Insignia · el mejor: +42% Daño Cosmos",
        "best": true
      },
      {
        "es": "Day Off",
        "en": "Day Off",
        "nota": "La mejor opción GRATIS (por misión) y competitiva en casi todo"
      },
      {
        "es": "Pelusa sin miedo",
        "en": "Fluff of Fearlessness",
        "nota": "Disco del Pase de Batalla (serie Pelusa): +Prob. CRÍ y +ATQ tras la Definitiva, ideal para sus ráfagas cortas de Cosmos. Alternativa accesible a Day Off recomendada por game8",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Resplandor perdido ×4",
        "en": "Resplandor perdido",
        "nota": "4 piezas (Leyenda): ignora 25% de DEF enemiga durante 20 s tras la Definitiva",
        "best": true
      },
      {
        "es": "Resplandor perdido ×2",
        "en": "Resplandor perdido",
        "nota": "2 piezas (Épico): +10% Daño Cosmos"
      }
    ],
    "consola": "Main de módulo: Prob. CRÍ (consistencia en sus ráfagas cortas). Gana +10% ATQ por cada Tipo III, hasta +40%: prioriza Tipo III siempre.",
    "equipos": [
      {
        "nombre": "Premium (equipo completo)",
        "agentes": "Esper Zero · Nanally · Hathor · Fadia",
        "best": true
      },
      {
        "nombre": "Carga",
        "agentes": "Esper Zero · Mint · Fadia"
      }
    ],
    "consejo": "DPS de ráfaga Cosmos: es el motor del equipo (Nanally potencia Blossom, Hathor potencia Remora, Fadia sostiene). Aprovecha enemigos en el aire tras recibir buffs. Prioridad: Definitiva &gt; Habilidad &gt; Básico."
  },
  {
    "id": "sakiri",
    "nombre": "Sakiri",
    "rango": "S",
    "elemento": "Encantamiento",
    "rol": "Apoyo",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "Eficiencia de carga / Regeneración de energía",
      "ATQ%",
      "Daño de Encantamiento %",
      "Prob. CRÍ"
    ],
    "discos": [
      {
        "es": "Gran aventura del buen chico",
        "en": "Gran aventura del buen chico",
        "nota": "Insignia · el mejor: mejora Eficiencia de carga y da +16% ATQ de equipo (su Suppress cuenta como control, +6% extra)",
        "best": true
      },
      {
        "es": "Lágrimas bajo la máscara",
        "en": "Lágrimas bajo la máscara",
        "nota": "Alternativa más segura: reduce daño recibido, mejor para contenido difícil"
      },
      {
        "es": "Ensueño de Cosmos, fantasía salvaje",
        "en": "Cosmos Daze, Wild Reverie",
        "nota": "Su mejor Disco rango A (nombre EN oficial; traducción tentativa): ATQ base/ATQ% y +18% de daño personal tras lanzar Habilidad de Apoyo. Opción F2P por debajo de Gran aventura del buen chico / Lágrimas bajo la máscara (game8)",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Erizo veloz ×4",
        "en": "Erizo veloz",
        "nota": "4 piezas (Leyenda): sube Eficiencia de carga y +ATQ de equipo tras la Definitiva (los buffs de ATQ apilan)",
        "best": true
      },
      {
        "es": "Erizo veloz ×2",
        "en": "Erizo veloz",
        "nota": "2 piezas (Épico): bonus de carga/ATQ"
      }
    ],
    "consola": "Erizo veloz pide 4× módulos Tipo III (cada Tipo III le da +9% Daño Encantamiento); añade 2 Tipo III más para su daño personal. Prioriza carga/energía sobre daño propio.",
    "equipos": [
      {
        "nombre": "Hexed (Anima)",
        "agentes": "Sakiri · Nanally · Esper Zero · Adler",
        "best": true
      },
      {
        "nombre": "Scorch/Discord (DoT)",
        "agentes": "Sakiri · Baicang · Lacrimosa · sostén"
      }
    ],
    "consejo": "Buffer universal de ATQ y control: entra a lanzar Definitiva + Suppress para bloquear enemigos y potenciar al DPS principal; sale tras aplicar buffs. Prioridad: Definitiva &gt; Habilidad de apoyo &gt; Habilidad."
  },
  {
    "id": "fadia",
    "nombre": "Fadia",
    "rango": "S",
    "elemento": "Psyche",
    "rol": "Supervivencia",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "PS%",
      "DEF%",
      "Regeneración de energía",
      "Prob. CRÍ"
    ],
    "discos": [
      {
        "es": "Vals eterno",
        "en": "Vals eterno",
        "nota": "Insignia · el mejor: sube mucho el PS máx., base de su daño y durabilidad",
        "best": true
      },
      {
        "es": "Disco de PS/soporte alternativo",
        "en": "",
        "nota": "Cualquier disco que escale PS máx. o dé energía sirve como respaldo"
      },
      {
        "es": "Llegará la hora",
        "en": "A Time Will Come",
        "nota": "Disco rango A: +ATQ/DEF/PS si el equipo tiene 3 tipos de Esper distintos. Refuerza su PS máx. (del que escala todo su kit); alternativa F2P a Vals eterno citada por game8",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Pequeña gran aventura ×4",
        "en": "Pequeña gran aventura",
        "nota": "4 piezas (Leyenda): apila buff de PS máx. (con la Definitiva llega al máx. al instante), potenciando su DPS y curación por PS",
        "best": true
      },
      {
        "es": "Pequeña gran aventura ×2",
        "en": "Pequeña gran aventura",
        "nota": "2 piezas (Épico): bonus de PS máx."
      }
    ],
    "consola": "Todo escala con PS máx.: persigue PS% por encima de todo (más PS = mayor tope de redirección, curas más grandes, más tanqueo). Módulos con PS%/DEF%.",
    "equipos": [
      {
        "nombre": "Discord (Premium)",
        "agentes": "Lacrimosa · Daffodill · Sakiri · Fadia",
        "best": true
      },
      {
        "nombre": "Carga",
        "agentes": "Fadia · Mint · Esper Zero"
      }
    ],
    "consejo": "Supervivencia/tanque Psyche: da +10% PS máx. de equipo (siempre activo) y redirige a sí misma parte del daño de aliados; con PS=1 reparte el daño recibido. Su Definitiva se dispara por pérdida de PS (forma Lilith) para curar y soltar daño Psyche frontal. Prioridad: Definitiva &gt; Habilidad &gt; Básico &gt; Habilidad de apoyo."
  },
  {
    "id": "skia",
    "nombre": "Skia",
    "rango": "A",
    "elemento": "Lakshana",
    "rol": "Daño",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "Prob. CRÍ",
      "Daño CRÍ",
      "ATQ%",
      "Daño de Lakshana %",
      "Penetración"
    ],
    "discos": [
      {
        "es": "¡Cuidado con la cabeza!",
        "en": "¡Cuidado con la cabeza!",
        "nota": "Insignia · el mejor y GRATIS (jefe-pájaro del mundo abierto): 475 ATQ base y 40% Daño CRÍ, compite con discos S",
        "best": true
      },
      {
        "es": "Gran aventura del buen chico",
        "en": "Gran aventura del buen chico",
        "nota": "Disco firma; el más fuerte como Sub-DPS, la Definitiva da buff de ATQ al equipo por ciclo"
      },
      {
        "es": "Fallándote, con pesar en mi corazón",
        "en": "Failing You, Heavy in My Heart",
        "nota": "Alternativa Lakshana (nombre EN oficial; traducción tentativa): cuenta sus Básicos y sube su daño al usar la Definitiva. Opción accesible por debajo de ¡Cuidado con la cabeza! citada por game8",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Combatiente de calle ×4",
        "en": "Combatiente de calle",
        "nota": "4 piezas (Leyenda): duplica el bono de Prob. CRÍ (hasta +28%) al activar Remora o Mancha",
        "best": true
      },
      {
        "es": "Combatiente de calle ×2",
        "en": "Combatiente de calle",
        "nota": "2 piezas (Épico): +10% Daño de Lakshana plano a cada Embestida de Colmillo"
      }
    ],
    "consola": "4 módulos Tipo III para maximizar el bono de consola (+10% ATQ por Tipo III); subs hacia Prob./Daño CRÍ y ATQ%.",
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Skia · Hathor · Haniel · Esper Zero",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Skia · Esper Zero · Hathor · buffer de energía"
      }
    ],
    "consejo": "Sub-DPS/DPS de Lakshana: usa su Redirección para disparar el buff de ATQ y aprovecha Remora/Mancha del equipo para duplicar su crítico. Prioriza Definitiva y Habilidad."
  },
  {
    "id": "mint",
    "nombre": "Mint",
    "rango": "A",
    "elemento": "Anima",
    "rol": "Daño",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "Daño de Anima %",
      "Prob. CRÍ",
      "Daño CRÍ",
      "ATQ%"
    ],
    "discos": [
      {
        "es": "Pelusa ágil",
        "en": "Pelusa ágil",
        "nota": "Insignia · el mejor (S, tipo Liquid): +44% Daño CRÍ y hasta 5 niveles de ATQ en campo",
        "best": true
      },
      {
        "es": "Cielos despejados",
        "en": "Cielos despejados",
        "nota": "Mejor F2P (A): +35% Daño de Anima a su Redirección y Definitiva"
      },
      {
        "es": "Reino mental",
        "en": "Mind Royale",
        "nota": "Disco rango A F2P: ayuda a cargar la Definitiva al usar la Habilidad (Intensidad de Ruptura + energía), manteniendo su rotación. Alternativa a Cielos despejados recomendada por game8",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Las luciérnagas y el bosque ×4",
        "en": "Las luciérnagas y el bosque",
        "nota": "4 piezas (Leyenda): +8% Daño CRÍ por acumulación (máx. 7 ≈ 56%) al infligir daño Anima",
        "best": true
      },
      {
        "es": "Las luciérnagas y el bosque ×2",
        "en": "Las luciérnagas y el bosque",
        "nota": "2 piezas (Épico): aumenta el Daño de Anima"
      }
    ],
    "consola": "4 módulos Tipo III (consola +30% Prob. CRÍ). Principales: Daño de Anima % &gt; Prob./Daño CRÍ &gt; ATQ%.",
    "equipos": [
      {
        "nombre": "Hipercarry",
        "agentes": "Mint · Esper Zero · Daffodill · Haniel",
        "best": true
      },
      {
        "nombre": "Ráfaga",
        "agentes": "Mint · Hathor · Esper Zero · Haniel/Fadia"
      }
    ],
    "consejo": "DPS principal en campo de un objetivo: encadena su Habilidad de bajo enfriamiento para hacer parry (Riposte crítico) y mantener daño constante. Prioriza Habilidad y Definitiva."
  },
  {
    "id": "aurelia",
    "nombre": "Aurelia",
    "rango": "A",
    "elemento": "Psyche",
    "rol": "Daño",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "ATQ%",
      "Prob. CRÍ",
      "Daño CRÍ",
      "Daño de Psyche %"
    ],
    "discos": [
      {
        "es": "Listo, listo",
        "en": "Listo, listo",
        "nota": "Insignia · el mejor (S): 570 ATQ, 24% Prob. CRÍ, +15% ATQ y daño extra a básicos/riposte",
        "best": true
      },
      {
        "es": "Velo Estelar",
        "en": "Velo Estelar",
        "nota": "Disco firma GRATIS muy competitivo: +12% Daño de Psyche y Daño CRÍ acumulable"
      },
      {
        "es": "Pelusa de la fortaleza",
        "en": "Fluff of Fortitude",
        "nota": "Disco de la serie Pelusa (Suministros de Caza de Élite): bonus de daño incondicional amplificado contra enemigos con poca vida. Alternativa accesible a Velo Estelar citada por game8",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Sangre demoniacal: Maldición ×4",
        "en": "Sangre demoniacal: Maldición",
        "nota": "4 piezas (Leyenda): +18% daño base (hasta +36% contra enemigos con Nova/Mancha)",
        "best": true
      },
      {
        "es": "Sangre demoniacal: Maldición ×2",
        "en": "Sangre demoniacal: Maldición",
        "nota": "2 piezas (Épico): Daño y Daño de Psyche (alt: Resplandor perdido)"
      }
    ],
    "consola": "Módulos Tipo III (consola +10% ATQ por pieza). El estado Cadenza (Despertar 1) da +15% Prob. CRÍ, así que ATQ/crítico son clave.",
    "equipos": [
      {
        "nombre": "Discord",
        "agentes": "Aurelia · Daffodill · Hathor · Haniel",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Aurelia · Daffodill · Hathor · Esper Zero (o Adler/Sakiri)"
      }
    ],
    "consejo": "DPS principal en campo: ataca con las medusas para acumular Daño CRÍ y aprovecha Nova/Mancha del equipo para el 4pz. Gestiona la resistencia y prioriza Habilidad y Definitiva."
  },
  {
    "id": "haniel",
    "nombre": "Haniel",
    "rango": "A",
    "elemento": "Psyche",
    "rol": "Apoyo",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "ATQ%",
      "Regeneración de energía",
      "Daño de Psyche %",
      "PS%"
    ],
    "discos": [
      {
        "es": "Impresionar al público",
        "en": "Impresionar al público",
        "nota": "Insignia · el mejor: 512 ATQ, +27,5% ATQ; buffea al personaje activo mientras Haniel está fuera de campo",
        "best": true
      },
      {
        "es": "Tu felicidad no tiene precio",
        "en": "Tu felicidad no tiene precio",
        "nota": "Alternativa: aplica un buff al equipo tras su Definitiva"
      },
      {
        "es": "Los olvidados",
        "en": "The Forgotten",
        "nota": "Disco rango A F2P: +20% ATQ con PS>50% (y +20% DEF si baja), reforzando su daño fuera de campo y su aguante. Alternativa a Impresionar al público recomendada por game8",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "Erizo veloz ×4",
        "en": "Erizo veloz",
        "nota": "4 piezas (Leyenda): carga rápido la Definitiva y da buff de ATQ; solo requiere módulos Tipo III (consola máx. +60% ATQ)",
        "best": true
      },
      {
        "es": "Erizo veloz ×2",
        "en": "Erizo veloz",
        "nota": "2 piezas (Épico): impulsa la carga de energía"
      }
    ],
    "consola": "4 módulos Tipo III (Erizo veloz los aprovecha) para el bono de consola +60% ATQ; subs hacia Regeneración de energía y ATQ%.",
    "equipos": [
      {
        "nombre": "Discord/Eclipse",
        "agentes": "Haniel · Daffodill · Adler/Sakiri · DPS (Hathor/Nanally/Baicang)",
        "best": true
      },
      {
        "nombre": "Alternativo",
        "agentes": "Haniel · Blossom · Mint · Esper Zero"
      }
    ],
    "consejo": "Apoyo/buffer fuera de campo: usa Hootie (altavoz) y su Definitiva para el buff de ATQ y activa ciclos Ensemble. Entra solo a lanzar Definitiva y sal; prioriza Definitiva y Habilidad."
  },
  {
    "id": "adler",
    "nombre": "Adler",
    "rango": "A",
    "elemento": "Encantamiento",
    "rol": "Supervivencia",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "DEF%",
      "PS%",
      "Daño de Encantamiento %",
      "Prob. CRÍ"
    ],
    "discos": [
      {
        "es": "Paraguas",
        "en": "Paraguas",
        "nota": "Insignia · el mejor para escudero: aumenta la potencia del escudo",
        "best": true
      },
      {
        "es": "La fuente de los estúpidos",
        "en": "La fuente de los estúpidos",
        "nota": "Gran DEF%: como su kit escala con DEF, sube también su daño"
      },
      {
        "es": "Carmesí: Mariposas gemelas",
        "en": "Carmesí: Mariposas gemelas",
        "nota": "Alternativa DoT: +ATQ mientras su daño en el tiempo está activo"
      }
    ],
    "cartuchos": [
      {
        "es": "Guardia del reino ×4",
        "en": "Guardia del reino",
        "nota": "4 piezas (Leyenda): más DEF y escudo (hasta +72% DEF); hecho para su rol de apoyo",
        "best": true
      },
      {
        "es": "Guardia del reino ×2",
        "en": "Guardia del reino",
        "nota": "2 piezas (Épico): DEF/escudo (alt DoT: Carmesí: Mariposas gemelas)"
      }
    ],
    "consola": "Módulos Tipo III junto a Guardia del reino para el bono de consola apilando DEF; subs todo a DEF% (su pasiva ya da +20% DEF).",
    "equipos": [
      {
        "nombre": "Scorch (recomendado)",
        "agentes": "Adler · DPS Chaos (Baicang) · Daffodill · Haniel",
        "best": true
      },
      {
        "nombre": "Hexed",
        "agentes": "Adler · Nanally/Lacrimosa · Jiuyuan · Sakiri"
      }
    ],
    "consejo": "Soporte de escudo que escala con DEF y aporta DoT de Encantamiento; encaja mejor en equipos Scorch. Construye todo a DEF, mantén el escudo activo y aplica su DoT. Prioriza Habilidad y Definitiva."
  },
  {
    "id": "edgar",
    "nombre": "Edgar",
    "rango": "A",
    "elemento": "Cosmos",
    "rol": "Supervivencia",
    "version": "1.0",
    "estado": "ok",
    "statPriority": [
      "PS%",
      "Bonif. de curación",
      "Regeneración de energía",
      "DEF%"
    ],
    "discos": [
      {
        "es": "Llamado de la Ciudad Retorcida",
        "en": "Llamado de la Ciudad Retorcida",
        "nota": "Insignia · el mejor (A): +PS y bono de curación al usar su Redirección",
        "best": true
      },
      {
        "es": "Reino mental",
        "en": "Reino mental",
        "nota": "Alternativa: ayuda a cargar la Definitiva al lanzar su Habilidad"
      },
      {
        "es": "Los olvidados",
        "en": "The Forgotten",
        "nota": "Opción de relleno F2P rango A: alto PS (main stat) y +DEF con PS bajo; como su curación escala con PS le da bulk. No hay una tercera firma de sanador documentada, así que se usa este Disco estándar de PS",
        "best": false
      }
    ],
    "cartuchos": [
      {
        "es": "La taberna nocturna de Thea ×4",
        "en": "La taberna nocturna de Thea",
        "nota": "4 piezas (Leyenda): +20% bono de curación y PS, maximiza su sanación",
        "best": true
      },
      {
        "es": "La taberna nocturna de Thea ×2",
        "en": "La taberna nocturna de Thea",
        "nota": "2 piezas (Épico): PS y curación (alt buffer: Erizo veloz)"
      }
    ],
    "consola": "4 módulos Tipo III (consola hasta +60% PS) porque su curación escala con PS; subs a PS% y Bonif. de curación.",
    "equipos": [
      {
        "nombre": "Charge / Cosmos",
        "agentes": "Nanally · Mint · Edgar · Haniel",
        "best": true
      },
      {
        "nombre": "F2P inicial",
        "agentes": "Esper Zero · Skia · Edgar · Haniel"
      }
    ],
    "consejo": "Sanador Cosmos de intercambio rápido: entra a curar con Habilidad/Definitiva y sal para no perder ofensiva. En equipos Charge aplica Remora para dar energía al personaje activo. Construye a PS; prioriza Habilidad y Definitiva."
  },
  {
    "id": "shinku",
    "nombre": "Shinku",
    "rango": "S",
    "elemento": "Cosmos",
    "rol": "Daño",
    "version": "1.2",
    "estado": "parcial",
    "statPriority": [
      "Prob. CRÍ",
      "Daño CRÍ",
      "Daño de Cosmos %",
      "ATQ%",
      "Bono de Daño Universal"
    ],
    "discos": [
      {
        "es": "Blushing Mirage",
        "en": "Blushing Mirage",
        "nota": "Insignia · el mejor: 570 ATQ base y +24% Prob. CRÍ; +20% ATQ permanente y, tras la Definitiva, +32% Daño Cosmos e ignora 12% de DEF enemiga durante 20 s",
        "best": true
      },
      {
        "es": "Pelusa feroz",
        "en": "Pelusa feroz",
        "nota": "Pase de Batalla (serie Pelusa): +4% Daño CRÍ por golpe crítico, hasta 10 cargas (+40% Daño CRÍ)"
      },
      {
        "es": "Sociedad de la camelia",
        "en": "Sociedad de la camelia",
        "nota": "Alternativa S F2P: cae del jefe Serenetti; ATQ base altísimo (666) y Daño CRÍ"
      },
      {
        "es": "Llegará la hora",
        "en": "Llegará la hora",
        "nota": "Opción gratis rango A citada por las primeras guías; su efecto exacto en Shinku varía según la fuente (por confirmar)"
      }
    ],
    "cartuchos": [
      {
        "es": "Resplandor perdido ×4",
        "en": "Resplandor perdido",
        "nota": "4 piezas (Leyenda): ignora 25% de DEF enemiga durante 20 s tras la Definitiva — sinergia total con su kit centrado en la Definitiva",
        "best": true
      },
      {
        "es": "Resplandor perdido ×2",
        "en": "Resplandor perdido",
        "nota": "2 piezas (Épico): +10% Daño Cosmos"
      }
    ],
    "consola": "Main del cartucho: Prob. CRÍ (o Daño CRÍ si ya vas sobrada de crítico con su Insignia). Consola con 4× módulos Tipo III: +16% Daño CRÍ por módulo (hasta +64%). Subs: Prob. CRÍ &gt; Daño CRÍ &gt; Daño de Cosmos % &gt; ATQ%.",
    "equipos": [
      {
        "nombre": "Premium",
        "agentes": "Shinku · Hathor · Esper Zero · Nanally",
        "best": true
      },
      {
        "nombre": "F2P / principiantes",
        "agentes": "Shinku · Esper Zero · Mint · Skia"
      }
    ],
    "consejo": "Main DPS Cosmos (Condensate, salida 8-jul-2026, banner 'Before the Dawn'). Doble postura y Definitiva 'Boiling Crimson Blood' que activa el estado Rising Crimson (~13 s) de ráfaga: abre con básicos/Habilidad para cargar, lanza la Definitiva y aprovecha la ventana de 20 s ignorando DEF de disco + Resplandor perdido ×4. Prioridad de subida (guías día 1): Pasiva &gt; Definitiva &gt; Básico &gt; Habilidad. Build recién salida: números y equipos aún en consenso."
  },
  {
    "id": "zankou",
    "nombre": "Zankou",
    "rango": "S",
    "elemento": "Encantamiento",
    "rol": "Daño",
    "version": "1.3",
    "estado": "ok",
    "statPriority": [
      "Daño CRÍ",
      "Prob. CRÍ",
      "Daño de Encantamiento %",
      "Intensidad de ciclo",
      "ATQ%"
    ],
    "discos": [
      {
        "es": "Ravenous Blade",
        "en": "Ravenous Blade",
        "nota": "Insignia · el mejor por margen (Gas, S): 570 ATQ base y 24% Prob. CRÍ; +16% Prob. CRÍ fijo y +9% Daño CRÍ por golpe de Encantamiento hasta 7 cargas (+63%). La wiki ES lo lista como «Hoja voraz»/«Hoja insaciable» sin página propia: nombre ES por confirmar",
        "best": true
      },
      {
        "es": "Gato contemplativo",
        "en": "Contemplative Cat",
        "nota": "Mejor alternativa S y gratis (City Tycoon): 512 ATQ base y 44% Daño CRÍ como bastón de estadísticas (~88% de la Insignia); rinde algo mejor si la usas como sub-DPS de DoT"
      },
      {
        "es": "Pelusa fina",
        "en": "Fluff of Finesse",
        "nota": "Pase de Batalla (serie Pelusa, tipo Gas): 512 ATQ base y +27,5% ATQ; +8% daño por Esquiva crítica hasta 3 cargas. Correcta, pero hay mejores usos del Pase"
      },
      {
        "es": "¡Cuidado con la cabeza!",
        "en": "Watch Your Heads!",
        "nota": "Mejor disco rango A y GRATIS (jefe-pájaro del mundo abierto): 475 ATQ base y 40% Daño CRÍ, casi iguala a Gato contemplativo. Para la build de Ruptura con Despertar 5, alternativa A: Fallándote, con pesar en mi corazón (+120 Intensidad de Ruptura)"
      }
    ],
    "cartuchos": [
      {
        "es": "Carmesí: Mariposas gemelas ×4",
        "en": "Crimson: Twin Butterflies",
        "nota": "4 piezas (Leyenda): +6% ATQ por cada vez que un enemigo cercano recibe daño de Encantamiento del equipo, hasta 6 cargas (+36%), activo incluso fuera de campo; sus DoT lo mantienen al 100%",
        "best": true
      },
      {
        "es": "Carmesí: Mariposas gemelas ×2",
        "en": "Crimson: Twin Butterflies",
        "nota": "2 piezas (Épico): +10% Daño de Encantamiento"
      },
      {
        "es": "Resplandor perdido ×4",
        "en": "Lost Radiance",
        "nota": "Alternativa (4 piezas): ignora 25% de DEF enemiga 20 s tras la Definitiva; con sus dos Definitivas encadenadas rinde igual (100%) cuando va de sub-DPS de DoT junto a Lacrimosa"
      }
    ],
    "consola": "Rasgo de consola: +16% Daño CRÍ por cada módulo Tipo III (hasta +64% con 4× Tipo III; rejilla Tipo 3, piezas II/III/III/IV). Main del cartucho: Daño CRÍ &gt; Intensidad de ciclo &gt; Daño de Encantamiento % &gt; Prob. CRÍ &gt; ATQ% (con la Insignia ya vas a ~60% de crítico). Subs: Daño CRÍ &gt; Intensidad de ciclo = Prob. CRÍ &gt; Bono de Daño Universal &gt; ATQ%; Intensidad de Ruptura solo en la build de Ruptura (A5). Meta endgame: ATQ 2000+, Prob. CRÍ 60%+, Daño CRÍ 200%+, Intensidad de ciclo 200+.",
    "equipos": [
      {
        "nombre": "Premium (Scorch / doble DPS de DoT)",
        "agentes": "Zankou · Lacrimosa · Sakiri · Haniel",
        "best": true
      },
      {
        "nombre": "Hipercarry Encantamiento",
        "agentes": "Zankou · Daffodill · Sakiri · Haniel (Iroi, aún fuera de la guía, ocupa el puesto de Haniel en la versión de Prydwen)"
      }
    ],
    "consejo": "Main DPS de Encantamiento (arma Gas) y DPS de ataques de seguimiento, salida 19-ago-2026 en la v1.3 Fase 1 (banner «Sombras seductoras»). Tiene dos formas: en Forma real carga con Fuego salvaje y usa la Habilidad Impulso sanguíneo para pasar a Forma ilusoria, donde todo cuenta como ataque de seguimiento y cada golpe aplica y propaga DoT (Tormento del corazón); en los últimos segundos de la Forma ilusoria lanza Cruce de almas para activar Olvido y la Definitiva Fantasía sangrienta, seguida gratis de Flamenco infernal potenciado. Su pasiva la mete en combate con 100 de Energía de ciclo (ciclo instantáneo) y hace apilable la Quemadura hasta 3: abre cambiando a un Esper de Chaos para aplicar Scorch y mantenlo con sus DoT. Evita cambiarla mientras está en Forma ilusoria (pierde Delirio); los huecos seguros son tras Cruce de almas y tras Fantasía sangrienta. Prioridad de subida: Definitiva = Básico &gt; Habilidad &gt; Apoyo (los DoT escalan con Básico y Definitiva). Despertares: A5 Floración sangrienta &gt; A1 Ojos del abismo &gt; A2 &gt; A4 &gt; A6 &gt; A3."
  },
  {
    "id": "linko",
    "nombre": "Linko",
    "rango": "S",
    "elemento": "Anima",
    "rol": "Daño",
    "version": "1.3",
    "estado": "parcial",
    "statPriority": [
      "Prob. CRÍ",
      "Daño CRÍ",
      "Daño de Anima %",
      "ATQ%",
      "Bono de Daño Universal"
    ],
    "discos": [
      {
        "es": "Voice of the Voyager",
        "en": "Voice of the Voyager",
        "nota": "Insignia · el mejor (Plasma, S): 570 ATQ base y 24% Prob. CRÍ; +24% ATQ, +66% Daño CRÍ de la Habilidad de apoyo y +22% Daño CRÍ de la Definitiva por cada apoyo activado (3 cargas): escrita para sus Golpes sincronizados. La wiki ES lo lista como «Voz del viajero»/«La voz del viajero» sin página propia: nombre ES por confirmar",
        "best": true
      },
      {
        "es": "Llamas furiosas",
        "en": "Raging Flames",
        "nota": "Mejor opción GRATIS (jefe Jinete sin cabeza): 666 ATQ base y 24% Daño CRÍ, más +10% daño de Redirección/Definitiva tras la Definitiva (~90%). Alternativa S de gacha: Listo, listo (570 ATQ, 24% Prob. CRÍ, ~92%)"
      },
      {
        "es": "Pelusa de la fortaleza",
        "en": "Fluff of Fortitude",
        "nota": "Pase de Batalla (serie Pelusa, tipo Plasma): 512 ATQ base y +27,5% ATQ; +22% daño (28% bajo 50% de PS). Buena si la juegas más en campo (~90–95%)"
      },
      {
        "es": "¡Oraora!",
        "en": "Oraora!",
        "nota": "Mejor rango A y GRATIS (jefe Party Boxer): 37,5% ATQ y daño de Básico apilable; sin crítico, así que su Definitiva y Apoyo sufren"
      }
    ],
    "cartuchos": [
      {
        "es": "Las luciérnagas y el bosque ×4",
        "en": "Fireflies and the Forest",
        "nota": "4 piezas (Leyenda): +8% Daño CRÍ por cada vez que un enemigo cercano recibe daño de Anima del equipo, hasta 7 cargas (+56%), activo fuera de campo; con otro Esper de Anima en el equipo se mantiene al máximo",
        "best": true
      },
      {
        "es": "Las luciérnagas y el bosque ×2",
        "en": "Fireflies and the Forest",
        "nota": "2 piezas (Épico): +10% Daño de Anima"
      },
      {
        "es": "Erizo veloz ×4",
        "en": "Speedy Hedgehog",
        "nota": "Alternativa de apoyo si nadie más lo lleva: +12% Eficiencia de carga y +15% ATQ de equipo tras la Definitiva; solo pide módulos Tipo III, así que llega a 6× Tipo III (+48% Prob. CRÍ de consola). Resplandor perdido ×4 rinde ~96%"
      }
    ],
    "consola": "Rasgo de consola: +8% Prob. CRÍ por cada módulo Tipo III (4× Tipo III = +32% con Las luciérnagas y el bosque, rejilla Tipo 3, piezas II/III/III/IV; 6× Tipo III = +48% con Erizo veloz). Main del cartucho: Prob. CRÍ hasta rozar el 100% (con la Insignia + consola casi no hace falta) &gt; Daño CRÍ &gt; Daño de Anima % &gt; ATQ%. Subs: Prob. CRÍ &gt; Daño CRÍ &gt; Bono de Daño Universal = ATQ% &gt; Intensidad de ciclo. Meta endgame: ATQ 2000+, Prob. CRÍ 90%+, Daño CRÍ 90%+ (antes del set).",
    "equipos": [
      {
        "nombre": "Hexed Premium (Anima + Encantamiento)",
        "agentes": "Linko · Zankou · Sakiri · Adler (Icy Veins usa a Iroi, aún fuera de la guía, en lugar de Adler)",
        "best": true
      },
      {
        "nombre": "Hexed con Nanally",
        "agentes": "Linko · Nanally · Sakiri · Adler"
      }
    ],
    "consejo": "Sub-DPS de ráfaga de Anima (arma Plasma) del Buró de Control de Anomalías (ETD-6), salida 9-sep-2026 en la v1.3 Fase 2 (banner «Surfing All Channels!»); combate junto a su Anomalía Xiaozhen. Poco tiempo en campo: entra, usa la Habilidad Full-Frequency Pulse (pausa el combate y abre una rueda para elegir al aliado que hará un Golpe sincronizado, que cuenta como ataque de seguimiento y escala con su Habilidad de apoyo) y sal. Cada Golpe sincronizado reduce 8% la resistencia del enemigo al elemento del aliado elegido durante 12 s (se acumulan elementos distintos): elige siempre al DPS principal. La Definitiva Oversync despliega un campo que convierte las Habilidades de apoyo de hasta 3 aliados en Golpes sincronizados y explota al terminar con daño que crece con el número de debuffs (hasta 5) sobre el objetivo. Su pasiva potencia Hexed (Anima + Encantamiento): 30% de daño base y +10% de daño de seguimiento recibido. Cada 8 s fuera de campo Xiaozhen marca al enemigo y responde a la Redirección de cualquier aliado. Prioridad de subida: Apoyo &gt; Definitiva &gt; Básico &gt; Habilidad (Prydwen antepone las pasivas: Apoyo &gt; Pasiva 2 &gt; Pasiva 1 &gt; Definitiva). Recién salida: números y equipos aún en consenso."
  },
  {
    "id": "blackbird",
    "nombre": "Blackbird",
    "rango": "S",
    "elemento": "Psyche",
    "rol": "Daño",
    "version": "1.4",
    "estado": "parcial",
    "statPriority": [
      "Por confirmar (PRELIMINAR: kit no publicado)"
    ],
    "discos": [
      {
        "es": "Gato contemplativo",
        "en": "Contemplative Cat",
        "nota": "PRELIMINAR: disco S de tipo Gas compatible (verificado en la wiki); recomendación por confirmar"
      },
      {
        "es": "Gran aventura del buen chico",
        "en": "Good Boy's Grand Adventure",
        "nota": "PRELIMINAR: disco S de tipo Gas compatible; recomendación por confirmar"
      },
      {
        "es": "Pelusa fina",
        "en": "Fluff of Finesse",
        "nota": "PRELIMINAR: disco Gas del Pase de Batalla; recomendación por confirmar"
      }
    ],
    "cartuchos": [
      {
        "es": "Sangre demoniacal: Maldición ×4",
        "en": "Demon Blood: Curse",
        "nota": "PRELIMINAR: único set de Psyche de la guía (+daño base, más contra Nova/Mancha); por confirmar hasta ver el kit"
      },
      {
        "es": "Sangre demoniacal: Maldición ×2",
        "en": "Demon Blood: Curse",
        "nota": "PRELIMINAR: 2 piezas Daño/Daño de Psyche; por confirmar"
      }
    ],
    "consola": "Por confirmar: el rasgo de consola no se ha publicado (wiki y Prydwen sin kit a 17-sep-2026).",
    "equipos": [
      {
        "nombre": "Por confirmar",
        "agentes": "Blackbird · Espers de Psyche/Chaos por confirmar (Aurelia · Haniel · Fadia como referencia de Psyche)"
      }
    ],
    "consejo": "PRELIMINAR. Esper S de Psyche con arma Gas, «La Bruja» de la Corte de Yggash, hoy NPC en la Casa de la Bruja de Bridge Crossings. Llega el 30-sep-2026 en la v1.4 Fase 1 (banner «Foretold Finale», junto al rerun de Lacrimosa). Kit, despertares y rol exactos no publicados: no subir ni tirar hasta ver el kit oficial."
  },
  {
    "id": "akane-rin",
    "nombre": "Akane Rin",
    "rango": "S",
    "elemento": "Lakshana",
    "rol": "Daño",
    "version": "1.4",
    "estado": "parcial",
    "statPriority": [
      "Por confirmar (PRELIMINAR: kit no publicado)"
    ],
    "discos": [
      {
        "es": "Pelusa ágil",
        "en": "Fluff of Fleetness",
        "nota": "PRELIMINAR: disco S de tipo Liquid del Pase de Batalla, compatible (verificado en la wiki); recomendación por confirmar"
      },
      {
        "es": "Fantasía juvenil",
        "en": "Youthful Fantasy",
        "nota": "PRELIMINAR: disco S Liquid gratis (New Herland); recomendación por confirmar"
      },
      {
        "es": "Cielos despejados",
        "en": "Clear Skies",
        "nota": "PRELIMINAR: disco A de tipo Liquid; recomendación por confirmar"
      }
    ],
    "cartuchos": [
      {
        "es": "Combatiente de calle ×4",
        "en": "Street Fighter",
        "nota": "PRELIMINAR: set de Lakshana de la guía (Prob. CRÍ con Remora/Mancha); por confirmar hasta ver el kit"
      },
      {
        "es": "Combatiente de calle ×2",
        "en": "Street Fighter",
        "nota": "PRELIMINAR: 2 piezas Daño de Lakshana/Prob. CRÍ; por confirmar"
      }
    ],
    "consola": "Por confirmar: el rasgo de consola no se ha publicado (wiki y Prydwen sin kit a 17-sep-2026).",
    "equipos": [
      {
        "nombre": "Por confirmar",
        "agentes": "Akane Rin · Espers de Lakshana por confirmar (Hathor · Skia · Esper Zero como referencia)"
      }
    ],
    "consejo": "PRELIMINAR. Esper S de Lakshana con arma Liquid; camarera de StarSign y exmiembro de LINES, banda y grupo de cazadoras de Anomalías junto a Aurelia y Suzuha. Según la wiki llega el 21-oct-2026 en la v1.4 Fase 2 (banner «Dazzling Star»), no el 30-sep. Kit y rol exactos no publicados: no subir ni tirar hasta ver el kit oficial."
  },
  {
    "id": "iroi",
    "nombre": "Iroi",
    "rango": "S",
    "elemento": "Anima",
    "rol": "Apoyo",
    "version": "1.2",
    "estado": "ok",
    "statPriority": [
      "Intensidad de ciclo",
      "ATQ%",
      "Daño de Anima %",
      "Daño CRÍ",
      "Bonif. de curación"
    ],
    "discos": [
      {
        "es": "La puerta equivocada",
        "en": "The Wrong Gate",
        "nota": "Insignia · el mejor (Liquid, S): 570 ATQ base y +30% ATQ; +16% ATQ y, cada vez que cura, +15% daño a todo el equipo y +30% Daño de Anima propio durante 20 s (único por equipo). Vale para cualquier equipo, no solo los que escalan con ATQ",
        "best": true
      },
      {
        "es": "Fantasía juvenil",
        "en": "Youthful Fantasy",
        "nota": "Mejor S gratis (New Herland, ~92–95%): 570 ATQ base y +30% ATQ como bastón de estadísticas; su Tomo Negro (Chaos) apenas le sirve. Alternativa S de gacha: La última rosa (570 ATQ, 24% Prob. CRÍ, ~93%) si la juegas como DPS"
      },
      {
        "es": "Pelusa ágil",
        "en": "Fluff of Fleetness",
        "nota": "Pase de Batalla (serie Pelusa, tipo Liquid): 512 ATQ base y 44% Daño CRÍ; su ATQ apilable exige tiempo en campo, que Iroi casi no tiene como apoyo (~92%). Hay mejores destinos para el Pase"
      },
      {
        "es": "Cielos despejados",
        "en": "Clear Skies",
        "nota": "Mejor rango A y F2P (~92–95%): 475 ATQ base, +25% ATQ y +20% Daño de Anima de Redirección y Definitiva; a M5 supera el bono Anima de la Insignia M1 pero solo en esas dos habilidades. Días brillantes (A, 25% ATQ) rinde igual"
      }
    ],
    "cartuchos": [
      {
        "es": "Erizo veloz ×4",
        "en": "Speedy Hedgehog",
        "nota": "4 piezas (Leyenda): +15% ATQ de equipo 20 s tras su Definitiva; el set universal de buffer y su mejor opción (si nadie más lo lleva). Solo pide Tipo III, así que cabe 6× Tipo III (+60% ATQ de consola)",
        "best": true
      },
      {
        "es": "Erizo veloz ×2",
        "en": "Speedy Hedgehog",
        "nota": "2 piezas (Épico): +12% Eficiencia de carga, más Definitivas y más curas/revives"
      },
      {
        "es": "La taberna nocturna de Thea ×4",
        "en": "Thea's Night Tavern",
        "nota": "Build de sanadora pura (4 piezas: +20% Bonif. de curación; 2 piezas +10% PS) cuando otro Esper (p. ej. Sakiri) ya lleva Erizo veloz; también solo Tipo III"
      },
      {
        "es": "Las luciérnagas y el bosque ×4",
        "en": "Fireflies and the Forest",
        "nota": "Build de daño (~96%): +10% Daño de Anima y hasta +56% Daño CRÍ; pide main de Prob. CRÍ y gana a Erizo veloz solo si la juegas como Main DPS con el equipo convertido en ovejas"
      }
    ],
    "consola": "Rasgo de consola: +10% ATQ por cada módulo Tipo III (Erizo veloz y Taberna nocturna de Thea solo piden Tipo III: 6× Tipo III = +60% ATQ; rejilla Tipo 1). OJO: su buff de ATQ al equipo (Habilidad y A5) escala solo con su ATQ base (personaje + ATQ plano del disco), no con consola ni módulos; estos solo suben su daño y curación propios. Main del cartucho: Intensidad de ciclo &gt; Daño de Anima % &gt; ATQ% (Bonif. de curación si vas de sanadora pura; Prob. CRÍ con Las luciérnagas). Subs: Intensidad de ciclo &gt; ATQ% &gt; Daño CRÍ &gt; Bono de Daño Universal. Meta endgame: ATQ 2900+, Intensidad de ciclo 150+, Daño CRÍ 70%+.",
    "equipos": [
      {
        "nombre": "Premium (Blossom)",
        "agentes": "Iroi · Nanally · Esper Zero · Jiuyuan",
        "best": true
      },
      {
        "nombre": "Carga (Charge)",
        "agentes": "Iroi · Shinku · Esper Zero · Hathor (variante Blossom/seguimiento: Iroi · Linko · Esper Zero · Shinku)"
      }
    ],
    "consejo": "Sanadora y buffer de Anima (arma Liquid) del Buró de Control de Anomalías (CSU-2), salida 29-jul-2026 en la v1.2 Fase 2 (banner «The Lifeline» = ES «Hilo de vida»). Poco tiempo en campo: entra, lanza la Habilidad (Extensión de identidad propia: cura al equipo, +ATQ según su ATQ base y agrupa enemigos) y la Definitiva Espejismo de 3800 millones de años (cura continua; con la Imaginación llena abre la Puerta de marfil, que además pulsa daño de Anima y permite revivir temporalmente a 1 aliado caído en Regresión) y sal. Su pasiva Nervios simpáticos da 5% de ignorar DEF al equipo con cada cura, y Imagen espejo duplica el Vita Bud del Blossom (≈1,5× el daño de un Blossom base durante 13 s): monta Blossom primero y luego el DPS principal. Su Definitiva NO cuenta como DoT para la pasiva de Sakiri. Con la Habilidad mantenida convierte a 3 aliados en ovejas para jugarla como Main DPS (meme a A0; viable con A4/A6). Prioridad de subida: Habilidad &gt; Definitiva &gt; Básico &gt; Apoyo (Prydwen antepone Pasiva 1 y 2). Despertares: A5 Transparente (buff de ATQ de equipo) &gt; A1 (Imaginación fuera de campo) &gt; resto."
  }
];
