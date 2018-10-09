const mongoose = require('mongoose')

const valorMovelSchema = new mongoose.Schema({
  documento: String,
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
  quantidadeOutroItem: {
    type: Number,
    required: true
  },
  cliente: {
    type: String
  },
  valorTotal: String
})

mongoose.model('valorMoveis', valorMovelSchema)

module.exports = app => {
  app.get('/valorMoveis', (req, resp) => {
    const model = mongoose.model('valorMoveis')
    model
      .find()
      .then(valorMovel => {
        resp.json(valorMovel)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.post('/valorMoveis', (req, resp) => {
    const model = mongoose.model('valorMoveis')
    model
      .create(req.body)
      .then(atualizado => {
        resp.status(201).json(atualizado)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.get('/valorMoveis/:id', (req, resp) => {
    const model = mongoose.model('valorMoveis')
    model
      .findOne({ _id: req.params.id })
      .then(valorMovel => {
        resp.json(valorMovel)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.put('/valorMoveis/:id', (req, resp) => {
    const model = mongoose.model('valorMoveis')
    model
      .findOne({ _id: req.params.id })
      .then(valorMovel => {
        if (!valorMovel) {
          return Promise.reject(new Error('valorMovel não existe'))
        }
        valorMovel.set(req.body)
        return valorMovel.save()
      })
      .then(atualizado => {
        resp.json(atualizado)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.delete('/valorMoveis/:id', (req, resp) => {
    const model = mongoose.model('valorMoveis')
    model
      .remove({ _id: req.params.id })
      .then(() => {
        resp.sendStatus(204)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })
}
