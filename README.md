# 🪄 Buscador de Personajes de Harry Potter

Este proyecto es el resultado de la evaluación final del **Módulo 3: React** del bootcamp de desarrollo web Full Stack de **Adalab**.

El objetivo principal ha sido poner en práctica los conocimientos adquiridos sobre React para construir una aplicación web funcional, interactiva y responsive que consume una API externa.

Si quieres acceder al proyecto: https://beta.adalab.es/modulo-3-evaluacion-final-idontwanttobeanurseanymore/

**¡Expecto Patronum!**

---

## 📲 ¿En qué consiste el proyecto?

El proyecto consiste en una aplicación de búsqueda y visualización de personajes de la saga Harry Potter. Sus funcionalidades principales incluyen:

- **Listado de personajes**: Se recupera una lista inicial de personajes desde una API externa.
- **Filtrado dinámico**: Los usuarios pueden buscar personajes por nombre y filtrar por su casa de Hogwarts (Gryffindor, Slytherin, etc.).
- **Detalle de personaje**: Al hacer clic en un personaje, se accede a una página de detalle con información extendida (estado, género, especie, ascendencia, etc.).
- **Diseño Responsive**: La interfaz se adapta a diferentes tamaños de pantalla (móvil, tablet y escritorio).
- **Gestión de errores**: Incluye una página 404 para rutas no existentes.

---

## 🛠️ Tecnologías Utilizadas

Para el desarrollo de esta aplicación se han empleado las siguientes tecnologías y herramientas:

- **React 19**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción (build tool) rápida para proyectos modernos.
- **Sass (SCSS)**: Preprocesador CSS para una gestión de estilos más eficiente y organizada.
- **React Router 7**: Librería para la gestión de rutas y navegación en aplicaciones Single Page (SPA).
- **Prettier**: Herramienta para asegurar la calidad y el formato consistente del código.
- **Fetch API**: Para la realización de peticiones asíncronas a la API de Harry Potter.

---

## 🤖 Asistencia de Inteligencia Artificial

En este proyecto se ha integrado el uso de **Gemini en VSCode** como herramienta de apoyo al desarrollo, lo cual ha permitido:

- **Corrección de errores**: Identificación y resolución rápida de bugs y problemas de sintaxis.
- **Mejora del código**: Optimización de la lógica en los componentes y sugerencias de refactorización para un código más limpio y eficiente.
- **Documentación y Comentarios**: Ayuda en la generación de descripciones técnicas y aclaración de conceptos complejos de React.

---

## 📦Estructura del Proyecto

La organización del código sigue una estructura clara para facilitar su escalabilidad y mantenimiento:

```text
├── docs/               # Archivos para el despluegue en GitHub Pages
├── public/             # Archivos estáticos
└── src/
    ├── assets/         # Imágenes, iconos y recursos multimedia
    ├── components/     # Componentes de React
    │   ├── CharacterCard.jsx
    │   ├── CharacterDetailPage.jsx
    │   ├── CharacterList.jsx
    │   ├── Filters.jsx
    |   ├── LandingPage.jsx
    │   └── ...
    ├── App.jsx         # Componente principal
    ├── App.scss        # Estilos globales y específicos
    └── main.jsx        # Punto de entrada de la aplicación
```

---

## 🔄 Conceptos Clave sobre React

Durante el desarrollo se han implementado conceptos fundamentales de React:

- **Componentes Funcionales**: Toda la aplicación está construida utilizando componentes funcionales modernos.
- **Hooks**:
  - `useState`: Para gestionar el estado de los personajes, los filtros y la carga de datos.
  - `useEffect`: Para realizar la petición a la API al cargar la aplicación y manejar efectos secundarios (como cambiar clases del body).
  - `useParams`: Para capturar parámetros dinámicos de la URL en la página de detalle.
- **Paso de Props**: Comunicación entre componentes mediante la transferencia de datos y funciones de callback.
- **Levantamiento de Estado (Lifting State Up)**: Los filtros y la lista de personajes se gestionan en el componente `App` para compartir la información entre los filtros y el listado.
- **Rutas (SPA)**: Uso de `Routes` y `Route` para navegar entre la página principal y la de detalle sin recargar el navegador.
- **Listas y Keys**: Renderizado dinámico de arrays utilizando `.map()` y asignando `keys` únicas para optimizar el rendimiento de React.
- **Peticiones Asíncronas**: Consumo de datos mediante `fetch` dentro de un ciclo de vida controlado.

---

## ⚡ Instalación

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Arranca el proyecto en desarrollo: `npm run dev`
   - Para generar una versión para producción: `npm run build`
   - Para previsualizar la versión final: `npm run preview`

---

## 💡 Posibles mejoras

---

## 👩‍💻 Autora
