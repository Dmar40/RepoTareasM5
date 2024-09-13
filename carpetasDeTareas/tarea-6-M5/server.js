import http from 'http';
import { parse } from 'url';

const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
];

const server = http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    if (method === 'GET' && path === '/products') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } else if (method === 'GET' && path.startsWith('/products/')) {
        const id = parseInt(path.split('/')[2]);
        const product = products.find(p => p.id === id);

        if (product) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Producto no encontrado' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
});

server.listen(3002, () => {
    console.log('Servidor corriendo en el puerto 3002');
});
