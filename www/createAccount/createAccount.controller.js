(function(){

  angular
       .module('createAccount')
       .controller('CreateAccountController', CreateAccountController);

  CreateAccountController.$inject = ['$scope', 'CreateAccountApi'];

  function CreateAccountController($scope, CreateAccountApi) {
    var vm = this;

    vm.create = create;

    $scope.patrick = function() {
      CreateAccountApi.create();
    }

    function create() {
    	CreateAccountApi.create();
    }

  }
})();