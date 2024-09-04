import esperarSegundos from './async.js'; 


esperarSegundos(2).then((resultado) => {
    console.log(`Han pasado`, resultado[0].milisegundos / 1000, `segundos.`);
});

esperarSegundos(5).then((resultado) => {
    console.log(`Han pasado`, resultado[0].milisegundos / 1000, `segundos.`);
});

esperarSegundos(10).then((resultado) => {
    console.log(`Han pasado`, resultado[0].milisegundos / 1000, `segundos.`);
});
