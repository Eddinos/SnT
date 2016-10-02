(function(){

  angular
       .module('authentication')
       .controller('CreateAccountController', CreateAccountController);

  CreateAccountController.$inject = ['$scope', 'CreateAccountApi', '$state', 'AuthService'];

  function CreateAccountController($scope, CreateAccountApi, AuthService, $state) {
    var vm = this;

    vm.create = create;

    function create(user) {
    	
    }

  }
})();