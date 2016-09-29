(function(){

  angular
       .module('authentication')
       .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$state', 'AuthService', '$ionicPopup'];

  function LoginController($scope, $state, AuthService, $ionicPopup) {
    var vm = this;

    vm.login = login;

    function login(user) {
      AuthService.login(user).then( function(msg) {
        $state.go('app.profile');
      }, function(errMsg) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: errMsg
        });
      });

    	//CreateAccountApi.login();
    }

  }
})();