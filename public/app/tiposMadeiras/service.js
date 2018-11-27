(function () {
  angular.module('minhaApp').factory('TiposMadeirasService', TiposMadeirasService)

  TiposMadeirasService.$inject = ['$http']

  function TiposMadeirasService ($http) {
    var _URL = '/tiposMadeiras'

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

    function insert (tipoMadeira) {
      return $http.post(_URL, tipoMadeira).then(function (response) {
        return response.data
      })
    }

    function update (tipoMadeira) {
      return $http
        .put(_URL + '/' + tipoMadeira._id, tipoMadeira)
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
