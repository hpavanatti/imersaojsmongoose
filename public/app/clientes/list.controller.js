(function () {
  angular
    .module('minhaApp')
    .controller('ClientesListController', ClientesListController)

  ClientesListController.$inject = ['ClientesService']

  function ClientesListController (ClientesService) {
    var vm = this
    vm.registros = []

    vm.load = function () {
      ClientesService.findAll().then(function (registros) {
        vm.registros = registros
      })
    }

    vm.load()

    vm.excluir = function (id) {
      swal({
        title: 'Deseja realmente excluir o registro?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim!',
        cancelButtonText: 'Não tenho certeza'
      }).then(function (result) {
        if (result.value) {
          ClientesService.remove(id).then(function () {
            vm.load()
            swal({
              position: 'top-end',
              type: 'success',
              title: 'Cliente excluído com sucesso',
              showConfirmButton: false,
              timer: 1500
            })
          })
        }
      })
    }
  }
})()
