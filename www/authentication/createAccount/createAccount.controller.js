(function(){

  angular
       .module('authentication')
       .controller('CreateAccountController', CreateAccountController);

  CreateAccountController.$inject = ['$scope', 'CreateAccountApi', '$state', 'AuthService'];

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