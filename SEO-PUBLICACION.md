# Publicación y SEO — Santiago Alvarado

## Dominio y ubicación

Este paquete se prepara para `https://www.santiagoalvarado.com.mx/`, publicado en la raíz. Las URLs canónicas, el sitemap y los datos estructurados apuntan a ese dominio. Si lo publicas en otro dominio o subcarpeta, debes actualizar esos valores antes de permitir su indexación.

## Aplicado

- Títulos y descripciones únicos, orientados a cada servicio.
- Canonicals absolutos consistentes con el sitemap.
- Open Graph y metadatos de compartir, sin imágenes ficticias.
- Datos estructurados JSON-LD de Organization, Person, WebSite, WebPage, Service y BreadcrumbList, según cada página.
- Contenido local coherente con Celaya y la cobertura real. No se inventaron dirección, horarios ni reseñas.
- Texto y enlaces disponibles en el HTML; las animaciones solo mejoran la interacción.
- Scripts con defer, fuentes con display=swap y estilos responsive existentes.
- sitemap.xml con las seis páginas principales; el alias escrito incorrectamente queda fuera del sitemap y conserva el destino canónico correcto.

## Después de subir al hosting

1. Copia todos los archivos a la raíz pública y comprueba que las seis páginas responden HTTP 200.
2. Comprueba HTTPS y elige una sola versión del dominio. Configura en tu hosting redirección 301/308 desde HTTP y desde el dominio sin www hacia HTTPS con www. Se debe preservar la ruta solicitada.
3. Configura, si tu hosting lo permite, una redirección permanente de `/index.html` a `/` y de `/asisitenteIA.html` a `/asistenteIA.html`. El paquete conserva compatibilidad HTML para el segundo caso, pero no puede configurar respuestas HTTP de tu proveedor.
4. Verifica la propiedad de dominio en Google Search Console y envía `https://www.santiagoalvarado.com.mx/sitemap.xml`.
5. Inspecciona las páginas publicadas en Search Console y valida sus datos estructurados con Rich Results Test y Schema Markup Validator.
6. Ejecuta PageSpeed Insights en móvil y escritorio para medir Core Web Vitals en el dominio real. Estas métricas no se han medido en este paquete.
7. Actualiza el enlace al sitio y los datos de contacto en tu perfil de Google Business para mantener coherencia con la web. El archivo no cambia tu perfil de Google.

## Alcance de la verificación

Se validaron localmente metadatos, estructura JSON-LD, URLs del sitemap y enlaces. No se enviaron solicitudes de indexación, no se configuró Search Console y no se verificó el hosting externo. Las mejoras técnicas facilitan rastreo y comprensión del contenido; no garantizan una posición específica en Google.

Las fechas `lastmod` representan esta actualización real. Actualízalas cuando cambie de forma relevante el contenido de cada página; no las renueves automáticamente sin cambios.

Referencias: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls ; https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap ; https://developers.google.com/search/docs/appearance/structured-data/organization ; https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
