const mongoose = require('mongoose')

const valorMadeiraSchema = new mongoose.Schema(
  {
    tipoMadeira: {
      type: String,
      required: true
    },
    quantidade: {
      type: Number,
      required: true
    },
    tamanhoChapa: String,
    fornecedor: {
      type: String
    },
    valorTotal: String
  },
  { timestamps: true }
)
const valorMadeira = mongoose.model('valoresMadeiras', valorMadeiraSchema)

module.exports = valorMadeira
