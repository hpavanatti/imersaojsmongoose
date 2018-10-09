const mongoose = require('mongoose')

const outroitemSchema = new mongoose.Schema({
  documento: String,
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
})

mongoose.model('outroitens', outroitemSchema)

module.exports = app => {
  app.get('/outroitens', (req, resp) => {
    const model = mongoose.model('outroitens')
    model
      .find()
      .then(outroitem => {
        resp.json(outroitem)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.post('/outroitens', (req, resp) => {
    const model = mongoose.model('outroitens')
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

  app.get('/outroitens/:id', (req, resp) => {
    const model = mongoose.model('outroitens')
    model
      .findOne({ _id: req.params.id })
      .then(outroitem => {
        resp.json(outroitem)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.put('/outroitens/:id', (req, resp) => {
    const model = mongoose.model('outroitens')
    model
      .findOne({ _id: req.params.id })
      .then(outroitem => {
        if (!outroitem) {
          return Promise.reject(new Error('outroitem não existe'))
        }
        outroitem.set(req.body)
        return outroitem.save()
      })
      .then(atualizado => {
        resp.json(atualizado)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.delete('/outroitens/:id', (req, resp) => {
    const model = mongoose.model('outroitens')
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
