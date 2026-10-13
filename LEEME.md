# Santiago Alvarado — Studio Digital & Engineering

Sitio estático listo para cargar a tu hosting. Los HTML, CSS y JavaScript deben conservar esta estructura en la misma carpeta.

## Páginas

- `index.html`: inicio de la marca, con acceso a todos los servicios y las dos vertientes.
- `studioWeb.html`: diseño y desarrollo web / Studio Digital. Conserva el diseño previamente elegido; solo se adaptaron la marca y los enlaces para integrarlo al sitio.
- `asistenteIA.html`: llamadas y chat web, con planes separados.
- `consultoriaEmpresarial.html`: diagnósticos, automatización e implementación / Engineering.
- `servicioTecnico.html`: backend, APIs REST, SQL Server, legacy y QA / Engineering.
- `soporteTecnicoInformatico.html`: computadoras para personas y empresas / Engineering.
- `asisitenteIA.html`: compatibilidad con la escritura anterior; dirige a `asistenteIA.html`.

## Archivos compartidos

- `style.css`: sistema visual del diseño original.
- `site.css`: estilos de las cinco páginas rediseñadas.
- `script.js`: interacciones del portafolio y navegación de la página web.
- `site.js`: navegación común de las páginas nuevas.

## Publicación

1. Guarda una copia del sitio actual antes de sustituir archivos.
2. Sube el contenido de este ZIP a la carpeta pública de tu sitio, manteniendo los nombres.
3. Revisa que los enlaces a WhatsApp, correo y cada servicio funcionen.
4. Para revisar los enlaces de inicio y las transiciones, utiliza un servidor HTTP local o tu hosting. Las fuentes Inter necesitan conexión; si no está disponible, el sitio utiliza las fuentes de respaldo.

Los precios y alcances se basan en los HTML compartidos. Se corrigieron los textos del chat que mencionaban funciones telefónicas. El plan telefónico Negocio conserva la cancelación y reprogramación de citas incluidas en el archivo actual. Las conversaciones del Asistente IA son ejemplos ilustrativos, no un agente activo.

El menú permanece disponible al desplazarte. En pantallas pequeñas se abre con el botón Menú. Los enlaces entre páginas y secciones están comprobados.

## Microanimaciones

`motion.css` habilita View Transitions entre páginas del mismo dominio. `motion.js` anima filtros del portafolio, acordeones y menú. Ambos se comparten en las seis páginas. Las actualizaciones siguen funcionando sin soporte de la API y con movimiento reducido. Para comprobar las transiciones entre páginas utiliza un servidor HTTP o tu hosting; abrir con `file://` no reproduce esa navegación del mismo dominio.

## SEO

Consulta `SEO-PUBLICACION.md` antes de publicar. El paquete está configurado para la raíz de `https://www.santiagoalvarado.com.mx/`. Incluye `robots.txt`, `sitemap.xml`, metadatos y datos estructurados por página. Conserva el diseño y las microanimaciones.
