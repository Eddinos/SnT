(function(){

  angular
       .module('createAccount', [])
       .service('CreateAccountApi', CreateAccountApi);

  CreateAccountApi.$inject = ['$http'];

	function CreateAccountApi($http) {
		var service = {
        create: create
    };

    return service;

    function create() {
    	alert('Saucisse !');
    }
	}
})();
