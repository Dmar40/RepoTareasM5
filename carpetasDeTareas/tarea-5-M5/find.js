
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
