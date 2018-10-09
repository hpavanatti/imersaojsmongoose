const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
  documento: String,
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String
  },
  contato: String,
  email: {
    type: String
  },
  endereco: {
    type: String,
    required: true
  },
  cpfCnpj: {
    type: String,
    required: true
  }
})

mongoose.model('clientes', clienteSchema)

module.exports = app => {
  app.get('/clientes', (req, resp) => {
    const model = mongoose.model('clientes')
    model
      .find()
      .then(cliente => {
        resp.json(cliente)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.post('/clientes', (req, resp) => {
    const model = mongoose.model('clientes')
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

  app.get('/clientes/:id', (req, resp) => {
    const model = mongoose.model('clientes')
    model
      .findOne({ _id: req.params.id })
      .then(cliente => {
        resp.json(cliente)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.put('/clientes/:id', (req, resp) => {
    const model = mongoose.model('clientes')
    model
      .findOne({ _id: req.params.id })
      .then(cliente => {
        if (!cliente) {
          return Promise.reject(new Error('cliente não existe'))
        }
        cliente.set(req.body)
        return cliente.save()
      })
      .then(atualizado => {
        resp.json(atualizado)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.delete('/clientes/:id', (req, resp) => {
    const model = mongoose.model('clientes')
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
