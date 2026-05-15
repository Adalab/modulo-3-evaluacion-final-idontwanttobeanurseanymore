# Informe de Errores y Mejoras Actualizado - Proyecto Harry Potter

Este documento ha sido actualizado tras revisar los cambios recientes. Se han eliminado los problemas resueltos y se han detallado nuevos errores introducidos, con un análisis específico de `App.scss`.

## 🐛 Errores Críticos (Bugs)

1.  **Filtro "Todos" no funciona (Nuevo Bug):**
    *   **Archivo:** `Filters.jsx`
    *   **Descripción:** Se ha añadido la opción `<option>Todos</option>`, pero al no tener un atributo `value=""`, el estado de React toma el texto "Todos" como valor. El filtro en `App.jsx` busca personajes con la casa "Todos", por lo que la lista se queda vacía.
    *   **Solución:** Cambiar a `<option value="">Todos</option>`.

2.  **Imágenes de Casa rotas en Detalle (Nuevo Bug):**
    *   **Archivo:** `CharacterDetailPage.jsx`
    *   **Descripción:** Se han intentado arreglar las imágenes con imports, pero se están asignando como objetos: `imgGryffindor: { GryffindorImport }`. Esto provoca que el `src` de la imagen sea `[object Object]`. Además, Ravenclaw y Hufflepuff siguen usando rutas de `./src/assets/` que no funcionarán en producción.

3.  **Referencia a variable inexistente (Nuevo Bug):**
    *   **Archivo:** `CharacterCard.jsx`
    *   **Descripción:** Se utiliza la variable `dummyCharacterImg` en el `src` de la imagen, pero la definición de esta constante ha sido eliminada del archivo. Aunque `App.jsx` ahora provee una imagen por defecto, el código fallará si intenta evaluar esa parte del ternario o simplemente por error de referencia al parsear.

4.  **Recarga de página al pulsar Enter:**
    *   **Archivo:** `App.jsx` / `Filters.jsx`
    *   **Descripción:** Se ha añadido `ev.preventDefault()` a los manejadores `onChange`, pero esto no evita que el formulario se envíe si el usuario pulsa "Enter" dentro de un input.
    *   **Solución:** Añadir `onSubmit={(ev) => ev.preventDefault()}` a la etiqueta `<form>` en `Filters.jsx`.

---

## 🛠️ Mejoras de Código y Lógica Pendientes

1.  **Falta de Ordenación Alfabética:**
    *   Los personajes siguen apareciendo en el orden aleatorio de la API. Se recomienda aplicar `.sort()` en `App.jsx` antes de renderizar.

2.  **Gestión de Carga (Loading) inexistente:**
    *   No hay feedback visual mientras se obtienen los datos de la API (pantalla en blanco inicial).

3.  **Limpieza de código:**
    *   Siguen apareciendo bloques de llaves vacías `{ }` al final de archivos como `CharacterDetailPage.jsx` y `CharacterCard.jsx`.

---

## 🎨 Análisis Específico de CSS (`App.scss`)

1.  **Selector Huérfano (Línea 41):**
    *   El selector `.house` está definido con estilos base pero no se utiliza en ningún componente. Los componentes usan clases específicas como `.houseGryffindor`.

2.  **Redundancia de Dimensiones en Media Queries:**
    *   **Líneas 217 y 232 (600px):** Se redefine `width: 100%` para `.filters`, `.filterInput` y `.filterSelect`. Esto es innecesario ya que ya está definido en la versión móvil (base) y se hereda.
    *   **Línea 275 (1024px):** Se vuelve a repetir `width: 100%` para los inputs. Reducir estas repeticiones hace el archivo un 15% más ligero y fácil de mantener.

3.  **Solapamiento de Padding (Línea 114):**
    *   `.filtersText` tiene un `padding: 15px`. Como este elemento es hijo de `.filters` (que ya tiene `padding: 15px`), se genera un espacio doble visualmente inconsistente.

4.  **Inconsistencia en Temas de Casas (Líneas 191-206):**
    *   La clase `.houseHufflepuff` es la única que sobreescribe el color del `span` interior. Si las otras casas tienen problemas de contraste similares, deberían seguir el mismo patrón para mantener la coherencia visual.

5.  **Gap sin contenedor (Línea 54):**
    *   El `header` tiene un `gap: 1rem` definido. Aunque tiene `display: flex`, solo tiene dos hijos principales que ya están separados por `justify-content: space-between`, por lo que el gap es actualmente invisible e innecesario.

---
*Este informe ha sido actualizado para reflejar el estado actual tras los últimos cambios parciales.*
