const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    sobrenome: {
      type: String
    },
    contato: String,
    email: {
      type: String
    },
    endereco: {
      type: String,
      required: true
    },
    cpfCnpj: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
const cliente = mongoose.model('clientes', clienteSchema)

module.exports = cliente
