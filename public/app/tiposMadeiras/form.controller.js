(function () {
  angular
    .module('minhaApp')
    .controller('TiposMadeirasFormController', TiposMadeirasFormController)

  TiposMadeirasFormController.$inject = [
    'TiposMadeirasService',
    '$state',
    '$stateParams'
  ]

  function TiposMadeirasFormController (TiposMadeirasService, $state, $stateParams) {
    var vm = this
    vm.tipoMadeira = {}
    vm.titulo = 'Inserindo tipos de Madeiras'

    if ($stateParams.id) {
      vm.titulo = 'Editando tipos de Madeiras'
      TiposMadeirasService.findById($stateParams.id).then(function (tipoMadeira) {
        vm.tipoMadeira = tipoMadeira
      })
    }

    vm.salvar = function () {
      if (vm.tipoMadeira._id) {
        TiposMadeirasService.update(vm.tipoMadeira).then(function () {
          swal({
            position: 'center',
            type: 'success',
            title: 'Tipos de Madeiras atualizado com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.tiposMadeiras')
        })
      } else {
        TiposMadeirasService.insert(vm.tipoMadeira).then(function () {
          swal({
            position: 'center',
            type: 'success',
            title: 'Tipos de Madeiras inserido com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.tiposMadeiras')
        })
      }
    }
  }
})()
