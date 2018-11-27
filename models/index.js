const fs = require('fs')
const path = require('path')

const basename = path.basename(__filename)
const models = {}

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    const item = require(path.join(__dirname, file))
    models[file.slice(0, -3)] = item
  })

module.exports = models
