(function () {
  angular.module('minhaApp').factory('ClientesService', ClientesService)

  ClientesService.$inject = ['$http']

  function ClientesService ($http) {
    var _URL = '/clientes'

    function findAll () {
      return $http.get(_URL).then(function (response) {
        return response.data
      })
    }

    function findById (id) {
      return $http.get(_URL + '/' + id).then(function (response) {
        return response.data
      })
    }

    function insert (cliente) {
      return $http.post(_URL, cliente).then(function (response) {
        return response.data
      })
    }

    function update (cliente) {
      return $http
        .put(_URL + '/' + cliente._id, cliente)
        .then(function (response) {
          return response.data
        })
    }

    function remove (id) {
      return $http.delete(_URL + '/' + id)
    }

    return {
      findAll: findAll,
      findById: findById,
      insert: insert,
      update: update,
      remove: remove
    }
  }
})()
