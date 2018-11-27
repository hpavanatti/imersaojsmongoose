const fs = require('fs')
const path = require('path')

const basename = path.basename(__filename)

module.exports = function (app) {
  fs.readdirSync(__dirname)
    .filter(
      file =>
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
    .forEach(file => {
      const funcao = require(path.join(__dirname, file))
      funcao(app)
    })
}
