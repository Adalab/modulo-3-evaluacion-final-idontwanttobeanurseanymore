# Informe de Errores y Mejoras - Proyecto Harry Potter

Este documento detalla los fallos encontrados, posibles problemas técnicos y áreas de mejora identificadas en el proyecto, con especial atención a `Filters.jsx` y `App.scss`.

## 🐛 Errores (Bugs)

1.  **Filtro de Casas incompleto:**
    *   **Archivo:** `Filters.jsx` / `App.jsx`
    *   **Descripción:** El componente `Filters` genera las opciones basándose únicamente en las casas presentes en los datos. No existe una opción "Todas" o "Seleccionar casa", por lo que una vez que el usuario elige una casa, no puede volver a ver todos los personajes sin recargar la página.
    *   **Impacto:** Bloquea la usabilidad del filtrado global.

2.  **Rutas de imágenes rotas en Producción:**
    *   **Archivo:** `CharacterDetailPage.jsx`
    *   **Descripción:** Los escudos de las casas usan rutas como `./src/assets/harry-potter-gryffindor.avif`. Las carpetas `src` no existen en el build de producción; estas imágenes deberían importarse con `import` o moverse a la carpeta `public`.
    *   **Impacto:** Las imágenes no se verán cuando el proyecto se despliegue.

3.  **Recarga de página al pulsar Enter:**
    *   **Archivo:** `Filters.jsx`
    *   **Descripción:** El formulario (`<form>`) no tiene un manejador para el evento `onSubmit` que prevenga el comportamiento por defecto (`event.preventDefault()`). 
    *   **Impacto:** Si el usuario pulsa "Enter" en el input de búsqueda, la página se recarga y se pierden los estados.

---

## 🛠️ Mejoras de Código y Lógica

1.  **Falta de Ordenación:**
    *   Los personajes aparecen en el orden que devuelve la API. Sería recomendable ordenarlos alfabéticamente por nombre para facilitar la búsqueda visual.

2.  **Código "Sucio" y Comentado:**
    *   **Archivos:** `CharacterCard.jsx`, `CharacterDetailPage.jsx`.
    *   Existen bloques de llaves vacías `{}` al final de los archivos y fragmentos de código comentados que deberían eliminarse para mantener la limpieza del proyecto.

3.  **Propiedades no utilizadas:**
    *   En `CharacterCard.jsx`, se recibe la prop `findCharacter` pero no se utiliza para nada.
    *   En `CharacterDetailPage.jsx`, se recibe `characters` pero no se usa. También hay un estado `changeBg` y una función `changingBg` declarados que no tienen ninguna utilidad.

4.  **Gestión de Carga (Loading):**
    *   La aplicación no muestra ningún indicador de carga mientras espera la respuesta de la API de Harry Potter.

5.  **Duplicidad de constantes (DRY):**
    *   La constante `dummyCharacterImg` (imagen de placeholder) está duplicada en varios componentes. Debería centralizarse en un archivo de constantes o en `App.js`.

---

## 🎨 Estilos y CSS (`App.scss`)

1.  **Propiedades Redundantes:**
    *   En `.filterInput` y `.filterSelect`, la propiedad `padding` está definida dos veces (primero `10px 12px` y luego `0.5rem`), lo que genera confusión y sobreescrituras innecesarias.

2.  **Uso incorrecto de `gap`:**
    *   La clase `.filtersText` tiene un `gap: 10px`, pero al no ser un contenedor `flex` o `grid`, esta propiedad no tiene ningún efecto.

3.  **Organización de Media Queries:**
    *   Hay código comentado dentro de las media queries (ej. `@media screen and (min-width: 600px)`) y selectores que se repiten innecesariamente.

4.  **Accesibilidad en el Enlace "Volver":**
    *   El enlace de "Volver" en la página de detalle tiene un estilo que podría ser más prominente y claro para usuarios con visión reducida.

---

## 🏗️ Arquitectura y Rendimiento

1.  **Memoización:**
    *   El cálculo de `houses` y el filtrado de personajes se ejecuta en cada renderizado de `App`. Aunque la lista es pequeña, en aplicaciones mayores esto debería optimizarse con `useMemo`.

2.  **Traducciones inconsistentes:**
    *   En `CharacterDetailPage`, se usa un objeto `translation` para el estatus y género, pero también había lógica previa con `if/else`. Sería mejor unificar toda la lógica de traducción en una utilidad externa.

---
*Este análisis ha sido generado automáticamente por Gemini CLI para ayudar en la mejora de la calidad del código.*
