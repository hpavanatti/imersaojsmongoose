const trataErro = erro => {
  console.log('Erro na request', erro)
  resp.status(500).json(erro)
}

module.exports = trataErro
