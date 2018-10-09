const mongoose = require('mongoose')

const tipoMandeiraSchema = new mongoose.Schema({
  documento: String,
  cor: {
    type: String,
    required: true
  },
  tipo: {
    type: String
  },
  origem: String,
  qualidade: String
})

mongoose.model('tipoMandeiras', tipoMandeiraSchema)

module.exports = app => {
  app.get('/tipoMandeiras', (req, resp) => {
    const model = mongoose.model('tipoMandeiras')
    model
      .find()
      .then(tipoMandeira => {
        resp.json(tipoMandeira)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.post('/tipoMandeiras', (req, resp) => {
    const model = mongoose.model('tipoMandeiras')
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

  app.get('/tipoMandeiras/:id', (req, resp) => {
    const model = mongoose.model('tipoMandeiras')
    model
      .findOne({ _id: req.params.id })
      .then(tipoMandeira => {
        resp.json(tipoMandeira)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.put('/tipoMandeiras/:id', (req, resp) => {
    const model = mongoose.model('tipoMandeiras')
    model
      .findOne({ _id: req.params.id })
      .then(tipoMandeira => {
        if (!tipoMandeira) {
          return Promise.reject(new Error('tipoMandeira não existe'))
        }
        tipoMandeira.set(req.body)
        return tipoMandeira.save()
      })
      .then(atualizado => {
        resp.json(atualizado)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.delete('/tipoMandeiras/:id', (req, resp) => {
    const model = mongoose.model('tipoMandeiras')
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
