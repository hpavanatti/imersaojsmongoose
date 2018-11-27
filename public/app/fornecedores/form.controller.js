(function () {
  angular
    .module('minhaApp')
    .controller('FornecedoresFormController', FornecedoresFormController)

  FornecedoresFormController.$inject = [
    'FornecedoresService',
    '$state',
    '$stateParams'
  ]

  function FornecedoresFormController (FornecedoresService, $state, $stateParams) {
    var vm = this
    vm.fornecedor = {}
    vm.titulo = 'Inserindo Fornecedores'

    if ($stateParams.id) {
      vm.titulo = 'Editando Fornecedores'
      FornecedoresService.findById($stateParams.id).then(function (fornecedor) {
        vm.fornecedor = fornecedor
      })
    }

    vm.salvar = function () {
      if (vm.fornecedor._id) {
        FornecedoresService.update(vm.fornecedor).then(function () {
          swal({
            position: 'center',
            type: 'success',
            title: 'Fornecedores atualizados com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.fornecedores')
        })
      } else {
        FornecedoresService.insert(vm.fornecedor).then(function () {
          swal({
            position: 'center',
            type: 'success',
            title: 'Fornecedores inseridos com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.fornecedores')
        })
      }
    }
  }
})()
