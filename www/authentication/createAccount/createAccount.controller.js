(function(){

  angular
       .module('authentication')
       .controller('CreateAccountController', CreateAccountController);

  CreateAccountController.$inject = ['$scope', 'CreateAccountApi', '$state', 'AuthService', '$ionicPopup'];

  function CreateAccountController($scope, CreateAccountApi, $state, AuthService, $ionicPopup) {
    var vm = this;

    vm.create = create;

    function create(user) {
    	AuthService.register(user).then(function(msg) {
          $state.go('outside.login');
          var alertPopup = $ionicPopup.alert({
            title: 'Register success!',
            template: msg
          });
        }, 
        function(errMsg) {
          var alertPopup = $ionicPopup.alert({
            title: 'Register failed!',
            template: errMsg
          });
        });
    };
    

  }
})();