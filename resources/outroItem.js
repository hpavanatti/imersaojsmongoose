const createCrud = require('../utils/create-crud')

module.exports = function (app) {
  createCrud(app, 'outrosItens')
}
