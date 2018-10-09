const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
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
    type: String,
    required: true
  }
})

mongoose.model('usuarios', usuarioSchema)

module.exports = app => {
  app.get('/usuarios', (req, resp) => {
    const model = mongoose.model('usuarios')
    model
      .find()
      .then(usuario => {
        resp.json(usuario)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.post('/usuarios', (req, resp) => {
    const model = mongoose.model('usuarios')
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

  app.get('/usuarios/:id', (req, resp) => {
    const model = mongoose.model('usuarios')
    model
      .findOne({ _id: req.params.id })
      .then(usuario => {
        resp.json(usuario)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.put('/usuarios/:id', (req, resp) => {
    const model = mongoose.model('usuarios')
    model
      .findOne({ _id: req.params.id })
      .then(usuario => {
        if (!usuario) {
          return Promise.reject(new Error('Usuario não existe'))
        }
        usuario.set(req.body)
        return usuario.save()
      })
      .then(atualizado => {
        resp.json(atualizado)
      })
      .catch(erro => {
        console.error('Erro na request', erro)
        resp.status(500).json(erro)
      })
  })

  app.delete('/usuarios/:id', (req, resp) => {
    const model = mongoose.model('usuarios')
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
