const mongoose = require('mongoose')

const valorMadeiraSchema = new mongoose.Schema({
  documento: String,
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
})

mongoose.model('valorMadeiras', valorMadeiraSchema)

module.exports = app => {
  app.get('/valorMadeiras', (req, resp) => {
    const model = mongoose.model('valorMadeiras')
    model
      .find()
      .then(valorMadeira => {
        resp.json(valorMadeira)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.post('/valorMadeiras', (req, resp) => {
    const model = mongoose.model('valorMadeiras')
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

  app.get('/valorMadeiras/:id', (req, resp) => {
    const model = mongoose.model('valorMadeiras')
    model
      .findOne({ _id: req.params.id })
      .then(valorMadeira => {
        resp.json(valorMadeira)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.put('/valorMadeiras/:id', (req, resp) => {
    const model = mongoose.model('valorMadeiras')
    model
      .findOne({ _id: req.params.id })
      .then(valorMadeira => {
        if (!valorMadeira) {
          return Promise.reject(new Error('valorMadeira não existe'))
        }
        valorMadeira.set(req.body)
        return valorMadeira.save()
      })
      .then(atualizado => {
        resp.json(atualizado)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.delete('/valorMadeiras/:id', (req, resp) => {
    const model = mongoose.model('valorMadeiras')
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
