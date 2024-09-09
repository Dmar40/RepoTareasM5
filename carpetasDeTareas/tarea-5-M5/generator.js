import fs from 'fs';

let numbers = '';
for (let i = 1; i <= 1000; i++) {
    numbers += i + '\n';
}

fs.writeFile('numeros.txt', numbers, (err) => {
    if (err) throw err;
    console.log('El archivo numeros.txt ha sido generado.');
});
