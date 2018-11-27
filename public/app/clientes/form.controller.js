(function () {
  angular
    .module('minhaApp')
    .controller('ClientesFormController', ClientesFormController)

  ClientesFormController.$inject = [
    'ClientesService',
    '$state',
    '$stateParams'
  ]

  function ClientesFormController (ClientesService, $state, $stateParams) {
    var vm = this
    vm.cliente = {}
    vm.titulo = 'Inserindo cliente'

    if ($stateParams.id) {
      vm.titulo = 'Editando cliente'
      ClientesService.findById($stateParams.id).then(function (cliente) {
        vm.cliente = cliente
      })
    }

    vm.salvar = function () {
      if (vm.cliente._id) {
        ClientesService.update(vm.cliente).then(function () {
          swal({
            position: 'center',
            type: 'success',
            title: 'Cliente atualizado com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.clientes')
        })
      } else {
        ClientesService.insert(vm.cliente).then(function () {
          swal({
            position: 'center',
            type: 'success',
            title: 'Cliente inserido com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.clientes')
        })
      }
    }
  }
})()
