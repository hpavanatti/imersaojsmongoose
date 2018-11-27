(function () {
  angular
    .module('minhaApp')
    .controller('ValoresMadeirasFormController', ValoresMadeirasFormController)

  ValoresMadeirasFormController.$inject = [
    'ValoresMadeirasService',
    '$state',
    '$stateParams'
  ]

  function ValoresMadeirasFormController (valoresMadeirasService, $state, $stateParams) {
    var vm = this
    vm.valorMadeira = {}
    vm.titulo = 'Inserindo valores de madeiras'

    if ($stateParams.id) {
      vm.titulo = 'Editando valores de madeiras'
      valoresMadeirasService.findById($stateParams.id).then(function (valorMadeira) {
        vm.valorMadeira = valorMadeira
      })
    }

    vm.salvar = function () {
      if (vm.valorMadeira._id) {
        valoresMadeirasService.update(vm.valorMadeira).then(function () {
          swal({
            position: 'center',
            type: 'success',
            title: 'Valores de madeiras atualizado com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.valoresMadeiras')
        })
      } else {
        valoresMadeirasService.insert(vm.valorMadeira).then(function () {
          swal({
            position: 'center',
            type: 'success',
            title: 'Valores de madeiras inserido com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
          $state.go('app.valoresMadeiras')
        })
      }
    }
  }
})()
