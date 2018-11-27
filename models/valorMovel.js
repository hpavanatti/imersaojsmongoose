const mongoose = require('mongoose')

const valorMovelSchema = new mongoose.Schema(
  {
    valorMadeira: {
      type: Number,
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
      type: Number,
      required: true
    },
    quantidadeOutroItem: {
      type: Number,
      required: true
    },
    cliente: {
      type: String
    },
    valorTotal: Number
  },
  { timestamps: true }
)
const valorMovel = mongoose.model('valoresMoveis', valorMovelSchema)

module.exports = valorMovel
