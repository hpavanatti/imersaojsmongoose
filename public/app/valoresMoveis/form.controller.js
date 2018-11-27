(function () {
  angular
    .module('minhaApp')
    .controller('ValoresMoveisFormController', ValoresMoveisFormController)

  ValoresMoveisFormController.$inject = [
    'ValoresMoveisService',
    '$state',
    '$stateParams'
  ]

  function ValoresMoveisFormController (ValoresMoveisService, $state, $stateParams) {
    var vm = this
    vm.valorMovel = {}
    vm.titulo = 'Inserindo valor do Movel'

    if ($stateParams.id) {
      vm.titulo = 'Editando valor do Movel'
      ValoresMoveisService.findById($stateParams.id).then(function (valorMovel) {
        vm.valorMovel = valorMovel
      })
    }

    vm.salvar = function () {
      if (vm.valorMovel._id) {
        ValoresMoveisService.update(vm.valorMovel).then(function () {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'valor do Movel atualizado com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.valoresMoveis')
        })
      } else {
        ValoresMoveisService.insert(vm.valorMovel).then(function () {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'valor do Movel inserido com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.valoresMoveis')
        })
      }
    }
  }
})()
