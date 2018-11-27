(function () {
  angular
    .module('minhaApp')
    .controller('ValoresMoveisListController', ValoresMoveisListController)

  ValoresMoveisListController.$inject = ['ValoresMoveisService']

  function ValoresMoveisListController (ValoresMoveisService) {
    var vm = this
    vm.registros = []

    vm.load = function () {
      ValoresMoveisService.findAll().then(function (registros) {
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
          ValoresMoveisService.remove(id).then(function () {
            vm.load()
            swal({
              position: 'center',
              type: 'success',
              title: 'Valores de Moveis excluídos com sucesso',
              showConfirmButton: false,
              timer: 1500
            })
          })
        }
      })
    }
  }
})()
