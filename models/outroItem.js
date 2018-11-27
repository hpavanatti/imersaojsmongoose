const mongoose = require('mongoose')

const outroItemSchema = new mongoose.Schema(
  {
    nomeItem: {
      type: String,
      required: true
    },
    quantidadeEstoque: {
      type: Number
    },
    fornecedor: String,
    dataUltimaCompra: {
      type: String
    },
    precoUnidade: {
      type: String,
      required: true
    },
    valorTotal: {
      type: String,
      required: true
    },
    marcaItem: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
const outroItem = mongoose.model('outrosItens', outroItemSchema)

module.exports = outroItem
