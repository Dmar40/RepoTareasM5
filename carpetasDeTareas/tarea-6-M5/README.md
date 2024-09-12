## Product API
Esta es una pequeña API que gestiona una lista de productos. La API está construida con Node.js y utiliza la librería http para crear el servidor. La API corre en el puerto 3002.Uso

## Inicia el servidor:

npm start

La API estará disponible en `http://localhost:3002.`

## Endpoints
GET /products
Retorna la lista de todos los productos en formato JSON.


## Ejemplo de respuesta:

````JSON
[
  { "id": 1, "name": "Producto 1", "price": 100 },
  { "id": 2, "name": "Producto 2", "price": 200 },
  { "id": 3, "name": "Producto 3", "price": 300 }
]
````
Retorna los detalles de un producto específico basado en el ID.

Parámetros:

id (número): El ID del producto.
Ejemplo de respuesta:

```JSON

{ "id": 1, "name": "Producto 1", "price": 100 }
```

## Ejemplo de respuesta de error:

```JSON

{ "error": "Producto no encontrado" }
```

## descripcion del codigo
server.js
```javascript

// Importamos los módulos necesarios para crear el servidor HTTP
import http from 'http'; 
import { parse } from 'url'; //Importamos la función parse del Módulo para analizar las URLs.


// Definimos un array de objetos 'products' que contiene una lista de productos con id, name y price.
const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
];


// Creamos el servidor HTTP  usando http.createServer.
const server = http.createServer((req, res) => {//req y res son los objetos de solicitud y respuesta.

    // Analizamos la URL de la solicitud
    const parsedUrl = parse(req.url, true);
    const path = parsedUrl.pathname; // Obtenemos la ruta de la URL  (path)
    const method = req.method; // Obtenemos el método HTTP de la solicitud (method).

    // Verificamos si la solicitud es para obtener todos los productos,  si el método es GET y la ruta es /products. Si es así, respondemos con la lista de productos en formato JSON.
    if (method === 'GET' && path === '/products') {
        res.writeHead(200, { 'Content-Type': 'application/json' }); // Configuramos la cabecera de la respuesta
        res.end(JSON.stringify(products)); // Enviamos la lista de productos en formato JSON
    } 
    // Verificamos si la solicitud es para obtener un producto específico por ID
    else if (method === 'GET' && path.startsWith('/products/')) {
        const id = parseInt(path.split('/')[2]); // Extraemos el ID de la URL
        const product = products.find(p => p.id === id); // Buscamos el producto por ID
        //Verificamos si el método es GET y la ruta comienza con /products/. Si es así, extraemos el id de la URL y buscamos el producto correspondiente en el array products.

        if (product) {
            res.writeHead(200, { 'Content-Type': 'application/json' }); // Configuramos la cabecera de la respuesta
            res.end(JSON.stringify(product)); // Enviamos el producto en formato JSON
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' }); // Configuramos la cabecera de la respuesta
            res.end(JSON.stringify({ error: 'Producto no encontrado' })); // Enviamos un mensaje de error
        }
    } 
    // Si la ruta no coincide con ninguna de las anteriores
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' }); // Configuramos la cabecera de la respuesta
        res.end(JSON.stringify({ error: 'Ruta no encontrada' })); // Enviamos un mensaje de error
    }
});

// Iniciamos el servidor en el puerto 3002
server.listen(3002, () => {
    console.log('Servidor corriendo en el puerto 3002'); // Imprimimos un mensaje en la consola
});

````