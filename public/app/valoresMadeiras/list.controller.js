(function () {
  angular
    .module('minhaApp')
    .controller('ValoresMadeirasListController', ValoresMadeirasListController)

  ValoresMadeirasListController.$inject = ['ValoresMadeirasService']

  function ValoresMadeirasListController (ValoresMadeirasService) {
    var vm = this
    vm.registros = []

    vm.load = function () {
      ValoresMadeirasService.findAll().then(function (registros) {
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
          ValoresMadeirasService.remove(id).then(function () {
            vm.load()
            swal({
              position: 'top-end',
              type: 'success',
              title: 'Valores de madeiras excluído com sucesso',
              showConfirmButton: false,
              timer: 1500
            })
          })
        }
      })
    }
  }
})()
