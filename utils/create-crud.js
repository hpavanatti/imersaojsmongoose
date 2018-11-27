const mongoose = require('mongoose')
const trataErro = require('./trata-erro')

module.exports = function (app, name) {
  const model = mongoose.model(name)

  app.get(`/${name}`, (req, resp) => {
    model
      .find()
      .then(registros => {
        resp.json(registros)
      })
      .catch(trataErro)
  })
  app.post(`/${name}`, (req, resp) => {
    model
      .create(req.body)
      .then(atualizado => {
        resp.status(201).json(atualizado)
      })
      .catch(trataErro)
  })
  app.get(`/${name}/:id`, (req, resp) => {
    model
      .findOne({
        _id: req.params.id
      })
      .then(registro => {
        resp.json(registro)
      })
      .catch(trataErro)
  })
  app.put(`/${name}/:id`, (req, resp) => {
    model
      .findOne({
        _id: req.params.id
      })
      .then(registro => {
        if (!registro) {
          return Promise
            .reject({
             msg: 'Informação não existe'
            })
        }
        registro.set(req.body)
        return registro.save()
      })
      .then(atualizado => {
        resp.json(atualizado)
      })
      .catch(trataErro)
  })
  app.delete(`/${name}/:id`, (req, resp) => {
    model
      .remove({
        _id: req.params.id
      })
      .then(() => {
        resp.sendStatus(204)
      })
      .catch(trataErro)
  })
}
