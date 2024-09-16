# API de Gestión de Estudiantes

Esta es una pequeña API creada con Node.js y Express para gestionar una lista de estudiantes. La API permite obtener la lista completa de estudiantes y los detalles de un estudiante específico basado en su ID.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Uso

Para iniciar el servidor, ejecuta:

```bash
node mi-api.js
```

El servidor se ejecutará en ```http://localhost:3002.```

## Endpoints
GET /students: Retorna la lista de todos los estudiantes en formato JSON.
GET /students/:id: Retorna los detalles de un estudiante específico basado en el ID.
Código del Servidor

```JavaScript

// Importa la librería express
import express from 'express';

// Crea una instancia de la aplicación express
const app = express();

// Define el puerto en el que correrá el servidor
const port = 3002;

// Base de datos de estudiantes (array de objetos)
const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

// Endpoint para obtener todos los estudiantes
app.get('/students', (req, res) => {
    // Responde con la lista de estudiantes en formato JSON
    res.json(students);
});

// Endpoint para obtener un estudiante por ID
app.get('/students/:id', (req, res) => {
    // Convierte el parámetro id de la URL a un número entero
    const studentId = parseInt(req.params.id);

    // Busca el estudiante en el array por su ID
    const student = students.find(s => s.id === studentId);

    // Si el estudiante existe, responde con sus datos
    if (student) {
        res.json(student);
    } else {
        // Si el estudiante no existe, responde con un mensaje de error
        res.status(404).send({ error: 'Estudiante no encontrado' });
    }
});


// utilizamos delete para eliminar un estudiante por medio del id
app.delete('/students/:id', (req, res) => {
    const id = req.params.id
    const result = students.findIndex((student) => student.id === parseInt(id))
    if(result !== -1){
        students.splice(result,1)
        res.send(`se ha eliminado el estudiante con el id ${id}`)
    }else{
        res.status(404)
        res.send('estudiante no encontrado')
    }
})

// post y put son para enviar datos al servidor --> body, utilizamos post para agregar un nuevo estudiante.
app.post('/students', (req, res) => {
    students.push(req.body)
    res.send(`Se ha agregado el estudiante ${req.body.id}`)
})

// put es para actualizar un recurso, usa params para identificar el recurso y body para enviar los datos a actualizar
app.put('/students/:id',(req, res) => {
    const id = req.params.id
    const index = students.findIndex((student) => student.id === parseInt(id))
    students[index] = req.body
    res.send('se han actualizado los estudiantes')
})

// Inicia el servidor y escucha en el puerto definido
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
```

## Desglose del Código

## Importar la librería express:

```JavaScript

import express from 'express';
```


## Propósito:
 Importa la librería express para poder usarla en la creación del servidor.
## Uso de import:
 Es una forma moderna de importar módulos en JavaScript.

## Crear una instancia de la aplicación express:

```JavaScript

const app = express();
```

## Propósito:
 Crea una instancia de la aplicación Express que se usará para definir rutas y manejar solicitudes.
## Uso de const:
 Declara una constante que no cambiará su valor.

## Definir el puerto:

```JavaScript

const port = 3002;
```

## Propósito:
 Define el puerto en el que el servidor escuchará las solicitudes.
## Uso de const:
 Declara una constante para el puerto.
Base de datos de estudiantes:

```JavaScript

const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];
```

## Propósito:
 Define un array de objetos que representa la base de datos de estudiantes.
## Uso de const:
 Declara una constante para la base de datos que no cambiará su referencia.
Endpoint para obtener todos los estudiantes:

```JavaScript

app.get('/students', (req, res) => {
    res.json(students);
});
```

## Propósito:
 Define una ruta GET que responde con la lista de todos los estudiantes en formato JSON.
## Uso de app.get: 
Define una ruta y su manejador de solicitudes.

## Endpoint para obtener un estudiante por ID:

```JavaScript

app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send({ error: 'Estudiante no encontrado' });
    }
});
```

## Propósito:
 Define una ruta GET que responde con los detalles de un estudiante específico basado en su ID.
## Uso de const:
 Declara constantes studentId y student para almacenar el ID del estudiante y el objeto estudiante encontrado.

## Uso de if y else:
## if (student):
 Verifica si el estudiante existe.
## else: 
Si el estudiante no existe, responde con un mensaje de error.
Iniciar el servidor:

```JavaScript

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
```

## Propósito: 
Inicia el servidor y lo pone a escuchar en el puerto definido.
## Uso de app.listen:
 Método de Express para iniciar el servidor.