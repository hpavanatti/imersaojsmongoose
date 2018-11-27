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
      type: Date
    },
    precoUnidade: {
      type: Number,
      required: true
    },
    valorTotal: {
      type: Number,
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
