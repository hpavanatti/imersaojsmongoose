(function () {
  angular.module('minhaApp').factory('ValoresMadeirasService', ValoresMadeirasService)

  ValoresMadeirasService.$inject = ['$http']

  function ValoresMadeirasService ($http) {
    var _URL = '/valoresMadeiras'

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

    function insert (valorMadeira) {
      return $http.post(_URL, valorMadeira).then(function (response) {
        return response.data
      })
    }

    function update (valorMadeira) {
      return $http
        .put(_URL + '/' + valorMadeira._id, valorMadeira)
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
