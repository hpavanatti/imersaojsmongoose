const mongoose = require('mongoose')

const valorMovelSchema = new mongoose.Schema(
  {
    valorMadeira: {
      type: String,
      required: true
    },
    quantidadeMadeira: {
      type: Number,
      required: true
    },
    outroItem: {
      type: String,
      required: true
    },
    valorOutroItem: {
      type: String,
      required: true
    },
    quantidadeOutroItem: {
      type: Number,
      required: true
    },
    cliente: {
      type: String
    },
    valorTotal: String
  },
  { timestamps: true }
)
const valorMovel = mongoose.model('valoresMoveis', valorMovelSchema)

module.exports = valorMovel
