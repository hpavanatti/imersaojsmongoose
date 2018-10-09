const mongoose = require('mongoose')

const fornecedorSchema = new mongoose.Schema({
  documento: String,
  nomeFantasia: {
    type: String,
    required: true
  },
  nomeResponsavel: {
    type: String,
    required: true
  },
  contato: String,
  email: String,
  endereco: {
    type: String,
    required: true
  },
  cpfCnpj: {
    type: String,
    required: true
  },
  horarioAtendimento: String
})

mongoose.model('fornecedores', fornecedorSchema)

module.exports = app => {
  app.get('/fornecedores', (req, resp) => {
    const model = mongoose.model('fornecedores')
    model
      .find()
      .then(fornecedor => {
        resp.json(fornecedor)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.post('/fornecedores', (req, resp) => {
    const model = mongoose.model('fornecedores')
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

  app.get('/fornecedores/:id', (req, resp) => {
    const model = mongoose.model('fornecedores')
    model
      .findOne({ _id: req.params.id })
      .then(fornecedor => {
        resp.json(fornecedor)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.put('/fornecedores/:id', (req, resp) => {
    const model = mongoose.model('fornecedores')
    model
      .findOne({ _id: req.params.id })
      .then(fornecedor => {
        if (!fornecedor) {
          return Promise.reject(new Error('fornecedor não existe'))
        }
        fornecedor.set(req.body)
        return fornecedor.save()
      })
      .then(atualizado => {
        resp.json(atualizado)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.delete('/fornecedores/:id', (req, resp) => {
    const model = mongoose.model('fornecedores')
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
