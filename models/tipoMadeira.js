const mongoose = require('mongoose')

const tipoMandeiraSchema = new mongoose.Schema(
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
const tipoMandeira = mongoose.model('tiposMandeiras', tipoMandeiraSchema)

module.exports = tipoMandeira
