# Proyecto 1: PáginaWeb

## Requerimientos del proyecto
* Deben escoger una página web que admiren y crear una copia idéntica del estilo del sitio.
* Pueden cambiar los iconos, imágenes y hasta el texto si quieren, pero es importante que le pongan mucha atención a los detalles como colores, border-radius, fuentes y estética en general.
* No pueden haber utilizado ninguna herramienta que cree ambientes (como create-react-app). 
* Si necesitan inspiración para escoger un sitio, les dejo este link: https://www.awwwards.com/
* Para los sitios que tengan más de una página, solo necesitan implementar una.
* * Pueden dejar links y botones dummy a otras páginas.

> La pagina que elegí replicar es la siguiente: https://www.apple.com/la/iphone/


***

## Instalación

Para lograr correr el proyecto se requiere tener instalado node.js https://nodejs.dev/

1. Primero instalamos todas las dependencias y paquetes, esto nos creara la carpeta node_moduls 

`npm install`

2. Inicializamos la pagina

`npm start`

**Y listo! :)**

***

## Tecnología utilizada

### React
https://es.reactjs.org/docs/getting-started.html

Esta es una librería que facilita el desarrollo de aplicaciones en una sola página

_Instalación de react y react Dom_

`npm i react react-dom`

### Webpack
https://webpack.js.org/

Este es un paquete que nos ayuda a hacer bundles de nuestros contenidos, como html, css, jpg, entre otros.

_Instalación de webpack y webpack cli_

`npm i --save-dev webpack webpack-cli`

_Instalación de loaders para babel y css_

`npm i --save-dev html-webpack-plugin babel-loader css-loader`

_Instalación del servidor_

`npm i webpack-dev-server`

_Instalación de file loader para cargar archivos_

`npm install --save file-loader`

### Babel
https://babeljs.io/

Este es un transcompilador que ayuda a convertir el código ECMAScript 2015+ en una versión de JavaScript compatible con versiones anteriores

_Instalación de babel para react y babel core_

`npm i @babel/core @babel/preset-env @babel/preset-react`

