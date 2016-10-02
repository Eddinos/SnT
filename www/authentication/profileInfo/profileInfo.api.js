(function(){

  angular
       .module('authentication')
       .service('ProfileInfoApi', ProfileInfoApi);

  ProfileInfoApi.$inject = ['$http', 'API_ENDPOINT'];

	function ProfileInfoApi($http, API_ENDPOINT) {
		var service = {
        getMemberInfo: getMemberInfo
    };

    return service;

    function getMemberInfo() {
    	return $http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
          return {
            name: result.data.user.name,
            email: result.data.user.email
          }
        });
    }
	}
})();
