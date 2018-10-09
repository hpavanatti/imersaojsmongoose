const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const usuarioModule = require('./resources/usuario')
const clienteModule = require('./resources/cliente')
const fornecedorModule = require('./resources/fornecedor')
const outroItemModule = require('./resources/outroItem')
const tipoMadeiraModule = require('./resources/tipoMadeira')
const valorMadeiraModule = require('./resources/valorMadeira')
const valorMovelModule = require('./resources/valorMovel')

const mongoose = require('mongoose')

const uri = 'mongodb://localhost/pedidex'
mongoose.connect(uri)
mongoose.connection.on('connected', () => {
  console.log('MongoDB conectado em', uri)
})
mongoose.connection.on('error', erro => {
  console.log('Erro no MongoDB', erro)
})

const app = express()
app.use(express.static('./public'))
app.use(bodyParser.json())
usuarioModule(app)
clienteModule(app)
fornecedorModule(app)
outroItemModule(app)
tipoMadeiraModule(app)
valorMadeiraModule(app)
valorMovelModule(app)

const port = 3000
http.createServer(app).listen(port, () => {
  console.log('Porta', port)
})
