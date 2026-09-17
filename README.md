# Guías Gacha · Portal de builds

Portal de consulta rápida de builds para 5 juegos gacha, con nombres oficiales en español y datos verificados contra las wikis oficiales.

| Juego | Personajes | Sistema |
|-------|-----------|---------|
| **Genshin Impact** (v7.0) | 127 | Artefactos por ranura, sets, armas, equipos · Viajero ×7 variantes |
| **Honkai: Star Rail** (v4.5) | 93 | Reliquias, Conos de Luz, equipos · Trazacaminos ×5 vías |
| **Zenless Zone Zero** (v3.2) | 59 | Discos de partición, motores W, sets, equipos |
| **Wuthering Waves** (v3.6) | 57 | Ecos por costo, sets Sonata, armas, equipos |
| **Neverness to Everness** (v1.3) | 24 | Discos, Consola (Cartuchos/Módulos), equipos |

## Uso local

Doble clic en **`Abrir Guias.bat`** (requiere Python) y abre <http://localhost:8080>.
O sirve la carpeta con cualquier servidor estático.

## Estructura

- `index.html` — portada con las 5 tarjetas.
- `genshin/`, `hsr/`, `zzz/`, `wuwa/`, `nte/` — cada guía (`index.html` + `data.js` [+ `fichas.js`]).

Cada guía es HTML/CSS/JS puro, sin dependencias externas salvo las imágenes enlazadas de las wikis.

---

Guías no oficiales, sin ánimo de lucro. Todas las marcas y personajes pertenecen a sus respectivos estudios (HoYoverse, Kuro Games, Hotta Studio).
