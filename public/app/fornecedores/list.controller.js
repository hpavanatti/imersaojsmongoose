(function () {
  angular
    .module('minhaApp')
    .controller('FornecedoresListController', FornecedoresListController)

  FornecedoresListController.$inject = ['FornecedoresService']

  function FornecedoresListController (FornecedoresService) {
    var vm = this
    vm.registros = []

    vm.load = function () {
      FornecedoresService.findAll().then(function (registros) {
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
          FornecedoresService.remove(id).then(function () {
            vm.load()
            swal({
              position: 'center',
              type: 'success',
              title: 'Fornecedores excluídos com sucesso',
              showConfirmButton: false,
              timer: 1500
            })
          })
        }
      })
    }
  }
})()
