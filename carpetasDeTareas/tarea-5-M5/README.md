# Generador de Números y Detector de Números Pares

## Objetivo

Practicar el uso del módulo `fs` para escribir y leer archivos, y aplicar una lógica sencilla para encontrar números pares.

## Descripción del Ejercicio

### Paso 1: Inicializar el Proyecto

Primero, crea un nuevo proyecto de Node.js:

````bash
npm init -y
````

## Paso 2: Configurar los Scripts en `package.json`
Abre tu archivo ``package.json`` y agrega los siguientes scripts:

## JSON

````
"scripts": {
    "generate-file": "node generator.js",
    "find-even-number": "node find.js"
}
````
## Paso 3: Crear `generator.js`
Crea un archivo llamado `generator.js` y agrega el siguiente código para generar el archivo `numeros.txt`:

````JavaScript

import fs from 'fs'; // Importa el módulo 'fs' para trabajar con el sistema de archivos

let numbers = ''; // Inicializa una cadena vacía para almacenar los números
for (let i = 1; i <= 1000; i++) { // Bucle que recorre los números del 1 al 1000
    numbers += i + '\n'; // Agrega cada número seguido de un salto de línea a la cadena 'numbers'
}

fs.writeFile('numeros.txt', numbers, (err) => { // Escribe la cadena 'numbers' en un archivo llamado 'numeros.txt'
    if (err) throw err; // Si ocurre un error, lanza una excepción
    console.log('El archivo numeros.txt ha sido generado.'); // Muestra un mensaje en la consola cuando el archivo se ha generado correctamente
});
````

### Paso 4: Crear `find.js`

Crea un archivo llamado `find.js` y agrega el siguiente código para leer `numeros.txt` y encontrar los números pares:

```javascript
import fs from 'fs'; // Importa el módulo 'fs' para trabajar con el sistema de archivos

fs.readFile('numeros.txt', 'utf8', (err, data) => { // Lee el archivo 'numeros.txt' en formato UTF-8
    if (err) throw err; // Si ocurre un error, lanza una excepción
    const numbers = data.split('\n'); // Divide el contenido del archivo en un array de números, separando por saltos de línea
    const evenNumbers = numbers.filter(numberString => { // Filtra los números pares
        const numero = parseInt(numberString); // parseInt convierte un string a número
        return numero % 2 === 0; // Retorna true si el número es par
    });
    console.log('Números pares:', evenNumbers.join(', ')); // Muestra los números pares en la consola
});
```

## Paso 5: Ejecutar los Scripts
Primero, genera el archivo numeros.txt:

`npm run generate-file`

Luego, encuentra los números pares:

`npm run find-even-number`

## Paso 6: (Opcional) Crear un Archivo con Números Pares
Si deseas que `find.js `también genere un archivo con los números pares, puedes modificar el código así:

````JavaScript

import fs from 'fs';

fs.readFile('numeros.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const numbers = data.split('\n');
    const evenNumbers = numbers.filter(number => {
        const num = parseInt(number);
        return num % 2 === 0;
    });
    fs.writeFile('numeros_pares.txt', evenNumbers.join('\n'), (err) => {
        if (err) throw err;
        console.log('El archivo numeros_pares.txt ha sido generado.');
    });
});
````

## Descripción del Código

`generator.js`

Este archivo tiene como objetivo generar un archivo llamado`numeros.txt` que contiene los números del 1 al 1000.

## Importación del módulo fs:
 Utilizamos` import fs from 'fs';` para importar el módulo de sistema de archivos de Node.js, que nos permite trabajar con archivos.
## Inicialización de la cadena `numbers`:
 Creamos una cadena vacía que almacenará los números del 1 al 1000.
## Bucle for:
 Recorremos los números del 1 al 1000 y los agregamos a la cadena `numbers`, cada uno seguido de un salto de línea`(\n)`.
## Escritura del archivo: 
Utilizamos `fs.writeFile` para escribir la cadena numbers en un archivo llamado `numeros.txt`. Si hay un error, se lanza una excepción. Si no, se muestra un mensaje en la consola indicando que el archivo se ha generado correctamente.

## `find.js`

Este archivo tiene como objetivo leer el archivo `numeros.txt` y encontrar los números pares.

## Importación del módulo fs:
 Utilizamos `import fs from 'fs';` para importar el módulo de sistema de archivos de Node.js.
## Lectura del archivo: 
Utilizamos `fs.readFile` para leer el archivo `numeros.txt` en formato UTF-8. Si hay un error, se lanza una excepción.
## División del contenido: 
Dividimos el contenido del archivo en un array de números utilizando ` split('\n') `, que separa los números por saltos de línea.
## Filtrado de números pares
 Utilizamos `filter` para crear un nuevo array que contiene solo los números pares. Convertimos cada número de cadena a entero con `parseInt` y verificamos si es par` (num % 2 === 0). `
## Mostrar números pares: 
Utilizamos console.log para mostrar los números pares en la consola, uniéndolos con comas.

## (Opcional) Generar un Archivo con Números Pares

Si deseas que `find.js` también genere un archivo con los números pares, puedes agregar el siguiente código:

## Escritura del archivo
`numeros_pares.txt}`: 
Después de filtrar los números pares, utilizamos `fs.writeFile` para escribir estos números en un nuevo archivo llamado `numeros_pares.txt` Si hay un error, se lanza una excepción. Si no, se muestra un mensaje en la consola indicando que el archivo se ha generado correctamente.