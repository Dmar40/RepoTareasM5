const esperarSegundos = (segundos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { milisegundos: segundos * 1000 },
            ]);
        }, segundos * 1000);
    });
};

export default esperarSegundos;
