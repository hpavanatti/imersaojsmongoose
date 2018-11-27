(function () {
  angular.module('minhaApp').factory('ValoresMoveisService', ValoresMoveisService)

  ValoresMoveisService.$inject = ['$http']

  function ValoresMoveisService ($http) {
    var _URL = '/valoresMoveis'

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

    function insert (valorMovel) {
      return $http.post(_URL, valorMovel).then(function (response) {
        return response.data
      })
    }

    function update (valorMovel) {
      return $http
        .put(_URL + '/' + valorMovel._id, valorMovel)
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
