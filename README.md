Price Calculator for WordPress
Este proyecto es un componente de calculadora de precios en React integrado con WordPress. Utiliza Vite para la construcción y desarrollo del proyecto, y Tailwind CSS para los estilos.

Descripción
La aplicación es un componente React que calcula precios y se integra con un sitio WordPress. La integración con WordPress permite el manejo de datos dinámicos y proporciona la base para un sistema de precios interactivo y funcional. Además, se utiliza SweetAlert2 para mostrar mensajes interactivos y atractivos al usuario.

Tecnologías utilizadas
React (v18.2.0): Librería de JavaScript para construir interfaces de usuario.

WordPress: CMS utilizado para integrar el componente.

Vite (v5.0.0): Herramienta de construcción para desarrollo rápido y optimizado.

Tailwind CSS (v3.4.17): Framework de CSS para diseño responsivo y estilizado rápido.

SweetAlert2 (v11.19.1): Librería para alertas modales interactivas.

Requerimientos
Antes de comenzar, asegúrate de tener instalado lo siguiente:

Node.js (v16 o superior)

WordPress (con REST API habilitada)

Vite para el entorno de desarrollo.

Instalación
Clona este repositorio en tu máquina local:

bash
Copiar
Editar
git clone https://github.com/tu-usuario/price-calculator.git
cd price-calculator
Instala las dependencias:

bash
Copiar
Editar
npm install
Inicia el servidor de desarrollo:

bash
Copiar
Editar
npm run dev
Esto iniciará el proyecto en modo desarrollo. Puedes acceder a la aplicación en http://localhost:3000.

Uso
El componente de calculadora está diseñado para ser integrado en un sitio de WordPress. Debes incluir el componente en tu tema o plugin de WordPress y configurarlo adecuadamente para interactuar con los datos de la API REST de WordPress.

Estructura de carpetas
src: Contiene todos los archivos fuente de React.

components: Componente principal de la calculadora de precios.

context: Contexto de React para manejar el estado global.

styles: Archivos de estilo con Tailwind CSS.

public: Archivos públicos como index.html.

Contribuciones
Las contribuciones son bienvenidas. Si deseas colaborar, por favor sigue estos pasos:

Haz un fork de este repositorio.

Crea una rama con tus cambios (git checkout -b feature/nueva-funcionalidad).

Realiza los cambios y haz un commit (git commit -am 'Agrega nueva funcionalidad').

Envía tus cambios al repositorio remoto (git push origin feature/nueva-funcionalidad).

Abre un pull request en GitHub.
