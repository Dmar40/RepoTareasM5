import express from 'express';
import fs from 'fs/promises'
import { getstudents, getStudentsById, getStudentsByTitle } from './functions/getstudents.js';
import { deleteStudents } from './functions/deleteStudents.js';
import { postStudents } from './functions/postStudents.js';
import { putStudents } from './functions/putStudents.js';


const app = express()
const port = 3002

// get, put, post, delete

// Endpoint para obtener todos los estudiantes
app.get('/students', getstudents)
// Endpoint para obtener un estudiante por ID
app.get('/students/:id', getStudentsById)
app.get('/students/name/:name', getStudentsByTitle)
app.delete('/students/:id', deleteStudents )
app.post('/students', postStudents)
app.put('/students/:id', putStudents)

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

