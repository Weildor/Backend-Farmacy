require('dotenv').config();

const express = require ('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//Tipo de servidor que realizaremos
const http = require('http');
//Iniciar y configurar express
const app = express();
//Log mostrar informacion en consola
app.use(logger('dev'));
//Parsear las entradas de solicitud de dastos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
//Configurar las rutas de bienvenida al servidor
app.get('/', (req, res)=>res.status(200).send({
    message: 'Biemnvenida a la API de Nuestra Farmacia.',
}))
// Importar y configurar las rutas de categoría
require('./routes/route_categoria')(app);
require('./routes/route_rol')(app);
require('./routes/route_usuarios')(app);
require('./routes/route_ventas')(app);
require('./routes/route_medicamento')(app);
require('./routes/route_detalle_venta')(app);
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;