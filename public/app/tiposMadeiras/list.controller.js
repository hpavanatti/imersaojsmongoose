(function () {
  angular
    .module('minhaApp')
    .controller('TiposMadeirasListController', TiposMadeirasListController)

  TiposMadeirasListController.$inject = ['TiposMadeirasService']

  function TiposMadeirasListController (TiposMadeirasService) {
    var vm = this
    vm.registros = []

    vm.load = function () {
      TiposMadeirasService.findAll().then(function (registros) {
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
          TiposMadeirasService.remove(id).then(function () {
            vm.load()
            swal({
              position: 'center',
              type: 'success',
              title: 'Tipos de Madeiras excluídos com sucesso',
              showConfirmButton: false,
              timer: 1500
            })
          })
        }
      })
    }
  }
})()
