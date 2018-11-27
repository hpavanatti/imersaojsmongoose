(function () {
  angular.module('minhaApp').factory('OutrosItensService', OutrosItensService)

  OutrosItensService.$inject = ['$http']

  function OutrosItensService ($http) {
    var _URL = '/outrosItens'

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

    function insert (outroItem) {
      return $http.post(_URL, outroItem).then(function (response) {
        return response.data
      })
    }

    function update (outroItem) {
      return $http
        .put(_URL + '/' + outroItem._id, outroItem)
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
