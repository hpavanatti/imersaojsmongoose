(function () {
  angular.module('minhaApp', ['ui.router'])

  angular.module('minhaApp').config(MinhaAppConfig)

  MinhaAppConfig.$inject = ['$stateProvider', '$urlRouterProvider']

  function MinhaAppConfig ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
    // Menu e Login
      .state({
        name: 'login',
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app',
        url: '/',
        templateUrl: '/views/menu.html'
      })
      // Clientes
      .state({
        name: 'app.clientes',
        url: 'clientes',
        template: '<ui-view></ui-view>',
        redirectTo: 'app.clientes.list'
      })
      .state({
        name: 'app.clientes.list',
        url: '/list',
        templateUrl: '/views/clientes/list.html',
        controller: 'ClientesListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.clientes.new',
        url: '/new',
        templateUrl: '/views/clientes/form.html',
        controller: 'ClientesFormController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.clientes.edit',
        url: '/:id',
        templateUrl: '/views/clientes/form.html',
        controller: 'ClientesFormController',
        controllerAs: 'vm'
      })
    // Fornecedores
      .state({
        name: 'app.fornecedores',
        url: 'fornecedores',
        template: '<ui-view></ui-view>',
        redirectTo: 'app.fornecedores.list'
      })
      .state({
        name: 'app.fornecedores.list',
        url: '/list',
        templateUrl: '/views/fornecedores/list.html',
        controller: 'FornecedoresListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.fornecedores.new',
        url: '/new',
        templateUrl: '/views/fornecedores/form.html',
        controller: 'FornecedoresFormController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.fornecedores.edit',
        url: '/:id',
        templateUrl: '/views/fornecedores/form.html',
        controller: 'FornecedoresFormController',
        controllerAs: 'vm'
      })
      // OutrosItens
      .state({
        name: 'app.outrosItens',
        url: 'outrosItens',
        template: '<ui-view></ui-view>',
        redirectTo: 'app.outrosItens.list'
      })
      .state({
        name: 'app.outrosItens.list',
        url: '/list',
        templateUrl: '/views/outrosItens/list.html',
        controller: 'OutrosItensListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.outrosItens.new',
        url: '/new',
        templateUrl: '/views/outrosItens/form.html',
        controller: 'OutrosItensFormController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.outrosItens.edit',
        url: '/:id',
        templateUrl: '/views/outrosItens/form.html',
        controller: 'OutrosItensFormController',
        controllerAs: 'vm'
      })
      // TiposMadeiras
      .state({
        name: 'app.tiposMadeiras',
        url: 'tiposMadeiras',
        template: '<ui-view></ui-view>',
        redirectTo: 'app.tiposMadeiras.list'
      })
      .state({
        name: 'app.tiposMadeiras.list',
        url: '/list',
        templateUrl: '/views/tiposMadeiras/list.html',
        controller: 'TiposMadeirasListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.tiposMadeiras.new',
        url: '/new',
        templateUrl: '/views/tiposMadeiras/form.html',
        controller: 'TiposMadeirasFormController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.tiposMadeiras.edit',
        url: '/:id',
        templateUrl: '/views/tiposMadeiras/form.html',
        controller: 'TiposMadeirasFormController',
        controllerAs: 'vm'
      })
      // ValoresMadeiras
      .state({
        name: 'app.valoresMadeiras',
        url: 'valoresMadeiras',
        template: '<ui-view></ui-view>',
        redirectTo: 'app.valoresMadeiras.list'
      })
      .state({
        name: 'app.valoresMadeiras.list',
        url: '/list',
        templateUrl: '/views/valoresMadeiras/list.html',
        controller: 'ValoresMadeirasListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.valoresMadeiras.new',
        url: '/new',
        templateUrl: '/views/valoresMadeiras/form.html',
        controller: 'ValoresMadeirasFormController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.valoresMadeiras.edit',
        url: '/:id',
        templateUrl: '/views/valoresMadeiras/form.html',
        controller: 'ValoresMadeirasFormController',
        controllerAs: 'vm'
      })
      // ValoresMoveis
      .state({
        name: 'app.valoresMoveis',
        url: 'valoresMoveis',
        template: '<ui-view></ui-view>',
        redirectTo: 'app.valoresMoveis.list'
      })
      .state({
        name: 'app.valoresMoveis.list',
        url: '/list',
        templateUrl: '/views/valoresMoveis/list.html',
        controller: 'ValoresMoveisListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.valoresMoveis.new',
        url: '/new',
        templateUrl: '/views/valoresMoveis/form.html',
        controller: 'ValoresMoveisFormController',
        controllerAs: 'vm'
      })
      .state({
        name: 'app.valoresMoveis.edit',
        url: '/:id',
        templateUrl: '/views/valoresMoveis/form.html',
        controller: 'ValoresMoveisFormController',
        controllerAs: 'vm'
      })
  }
})()
