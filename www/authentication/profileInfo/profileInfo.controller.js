(function() {
	angular
       .module('authentication')
       .controller('ProfileInfoController', ProfileInfoController);

    ProfileInfoController.$inject = ['$scope', '$state', 'AuthService', '$ionicPopup', 'ProfileInfoApi', '$timeout'];

    function ProfileInfoController($scope, $state, AuthService, $ionicPopup, ProfileInfoApi, $timeout)
    {
    	vm = this;

    	vm.currentUser = {
    		name: '',
    		email: 'no e-mail registered for this account'
    	}

    	vm.message = 'You should not be there';

    	vm.getInfo = getInfo;
    	vm.destroySession = destroySession;
    	vm.logout = logout;

    	init();

    	function init() {
    		getInfo().then(function(){
    			vm.message = "Yo " + vm.currentUser.name;
    		});
    	}

    	function getInfo() {
	    	return ProfileInfoApi.getMemberInfo()
	    		.then(function(data){
	    			vm.currentUser = data;
	    		});
		  };

		  function destroySession() {
		    AuthService.logout();

		  };

		  function logout() {
		    AuthService.logout();
		    $state.go('outside.login');
		    
		  };
    }
})();