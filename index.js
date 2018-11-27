const http = require('http');
const database = require('./config/database');
const app = require('./config/express');

database(process.env.MONGODB_URI || 'mongodb://localhost/pedidex');
require('./models');

const resources = require('./resources');
resources(app);

const port = process.env.PORT || 3000;
http.createServer(app).listen(port, () => {
    console.log('Servidor iniciado na porta', port);
});
