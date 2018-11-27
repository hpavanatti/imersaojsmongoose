const mongoose = require('mongoose')

const tipoMadeiraSchema = new mongoose.Schema(
  {
    cor: {
      type: String,
      required: true
    },
    tipo: {
      type: String
    },
    origem: String,
    qualidade: String
  },
  { timestamps: true }
)
const tipoMandeira = mongoose.model('tiposMadeiras', tipoMadeiraSchema)

module.exports = tipoMandeira
