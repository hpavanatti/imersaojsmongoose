(function () {
  angular.module('minhaApp').factory('FornecedoresService', FornecedoresService)

  FornecedoresService.$inject = ['$http']

  function FornecedoresService ($http) {
    var _URL = '/fornecedores'

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

    function insert (fornecedor) {
      return $http.post(_URL, fornecedor).then(function (response) {
        return response.data
      })
    }

    function update (fornecedor) {
      return $http
        .put(_URL + '/' + fornecedor._id, fornecedor)
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
