(function () {
  angular
    .module('minhaApp')
    .controller('OutrosItensFormController', OutrosItensFormController)

  OutrosItensFormController.$inject = [
    'OutrosItensService',
    '$state',
    '$stateParams'
  ]

  function OutrosItensFormController (OutrosItensService, $state, $stateParams) {
    var vm = this
    vm.outroItem = {}
    vm.titulo = 'Inserindo Outros Itens'

    if ($stateParams.id) {
      vm.titulo = 'Editando Outros Itens'
      OutrosItensService.findById($stateParams.id).then(function (outroItem) {
        vm.outroItem = outroItem
      })
    }

    vm.salvar = function () {
      if (vm.outroItem._id) {
        OutrosItensService.update(vm.outroItem).then(function () {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Outros Itens atualizados com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.outrosItens')
        })
      } else {
        OutrosItensService.insert(vm.outroItem).then(function () {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Outros Itens inseridos com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.outrosItens')
        })
      }
    }
  }
})()
