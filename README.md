# PROYECTO EXTRACT URLS

extractURLs es un módulo de Node.js que hace más fácil poder encontrar todas las url de un texto a partir de un string en formato Markdown.

Este módulo retornará los links encontrados en un arreglo de objetos.

### Dependencias NPM

+ Desarrollo:
  - NodeJS
  - ESlint
  - Mocha
  - Chai


### Instalación

  `npm install --save extractURLs`

### Modo de Uso

#### Comprobar texto en la Consola

/require(extractURLs)/

1. Ve a la terminal en la carpeta raíz de tu proyecto

2. Ejecuta:
  ` node input_readline.js`

3. Ingresa un texto en formato **Markdown**: _tu-texto_
  - Ejemplo: ` # Lorem ipsum  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com). Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.; 
    ` 

4. Obtendrás un arreglo de objetos con todas las urls encontradas.
  - Ejemplo:
  ` [
     { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
     { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
     { href: 'http://foo.com', text: 'foo' },
    ] `

#### Comprobar texto en fichero.js

1. Crear fichero en tu proyecto (ejemplo: **fichero.js**)

2. Llamar al módulo con la funcion require()
  `const extractUrls = require(./index.js);`

### Opciones

El modulo integra algunas configuraciones adicionales que permiten tener otros resultados de salida. Un ejemplo se detalla a continuación con las variantes que retorna el modulo para un mismo texto de entrada.

- Tipo: Array (Arreglo de Objetos)

- Ejemplo: 
  ```js 
  const str = '# Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com). Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'; 
  ```

#### Opción 1: extractUrls.MdLink()
- Retorna solo los enlaces escritos de las forma `[texto descriptivo](http://www.enlace.com)` 
  ```js 
  console.log(extractUrls.MdLink(str));
  // => [ 
    { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
    { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
    { href: 'http://foo.com', text: 'foo' },
    ] ```

#### Opción 2: extractUrls.url()
- Retorna solo los enlaces independiente de su estructura: 
  ```js 
  console.log(extractUrls.url(str));
  // => [ 'https://en.wiktionary.org/wiki/labore', 'https://en.wiktionary.org/wiki/dolore', 'http://foo.com' ] ```

#### Opción 3: extractUrls.text()
- Retorna solo los enlaces escritos de la forma `[texto descriptivo]`: 
  ```js 
  console.log(extractUrls.text(str));
  // => [ 'labore', 'dolore', 'foo' ] ```


  
