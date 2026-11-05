# ICETEX al Día

App ciudadana (PWA) de **Vibras Positivas HM** de seguimiento al caso de los contratistas y contratos del ICETEX 2022–2026 (denuncia del 4 de noviembre de 2026).

- Repo: `haroldco45/icetex-al-dia`
- Sitio: https://icetex-al-dia.netlify.app

## Qué trae
- Sección **Hoy** (se actualiza cada vez que se entra) y botón **Actualizar**
- **Búsqueda en vivo** de noticias al abrir la app
- **Robot** de GitHub Actions que trae noticias y videos reales cada 30 minutos (`.github/workflows/noticias.yml`)
- Hallazgos, la plata en barras, calculadora de semestres, línea de tiempo, quiénes están y las dos versiones
- **Derecho de petición** que se envía de una sola vez a ICETEX, Contraloría, Procuraduría, Fiscalía, MinEducación, Superfinanciera y Presidencia
- Español e inglés
- Imagen de vista previa con foto real (`img/og.jpg`, la crea el robot en la primera corrida)

## Para actualizar el caso
Edite `data/contenido.js` → `ESTADO`, `TIMELINE` y `ROAD` (el paso actual lleva `now: true`).
