let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

// console.log('titulo:',libros[1].titulo,'Autor:',libros[1].autor);

// libros.push(libros[0].paginas=350);
// console.log(libros[0]);

const newArray = libros.map((libro) => {
    return {

        titulo: libro.titulo,
        autor: libro.autor
    };
});
console.log(newArray);


// PUNTO 2

const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let sumaEdades = 0;

for (let i = 0; i < estudiantes.length; i++) {
    sumaEdades += estudiantes[i].edad;
}

const promedioEdades = sumaEdades / estudiantes.length;

console.log('Suma de las edades:',sumaEdades);
console.log('Promedio de edad:', promedioEdades.toFixed(2));


// PUNTO 3

let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

const productosRopa = productos.filter(producto => producto.categoria === 'Ropa');
console.log(productosRopa);


const preciosMayores = productos.filter(producto => producto.precio > 30);
console.log(preciosMayores);


// RETO
// const estudiantes2 = [
//     { nombre: "Pedro", edad: 29, promedio: 7.9 },
//     { nombre: "Ana", edad: 33, promedio: 8.9 },
//     { nombre: "Pablo", edad: 32, promedio: 9.5 },
//     { nombre: "Juan", edad: 25, promedio: 6.0 },
//     { nombre: "Maria", edad: 28, promedio: 7.3 },
//     { nombre: "Andres", edad: 45, promedio: 8.7 },
// ];

// let estudianteConMayorPromedio = estudiantes[0];

// for (let i = 1; i < estudiantes.length; i++) {
//     if (estudiantes[i].promedio > estudianteConMayorPromedio.promedio) {
//         estudianteConMayorPromedio = estudiantes[i];
//     }
// }

// console.log('El estudiante con el mayor promedio es:', estudianteConMayorPromedio.nombre, 'con un promedio de:', estudianteConMayorPromedio.promedio);

