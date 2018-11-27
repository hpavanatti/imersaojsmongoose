const mongoose = require('mongoose')

const fornecedorSchema = new mongoose.Schema(
  {
    nomeFantasia: {
      type: String,
      required: true
    },
    nomeResponsavel: {
      type: String,
      required: true
    },
    contato: String,
    email: String,
    endereco: {
      type: String,
      required: true
    },
    cpfCnpj: {
      type: String,
      required: true
    },
    horarioAtendimento: String
  },
  { timestamps: true }
)

const fornecedor = mongoose.model('fornecedores', fornecedorSchema)

module.exports = fornecedor
