angular.module('mainCtrl',[])

//.controller('MainController',function($rootScope,$location,Auth){
.controller('MainController', ['$rootScope','$location','Auth', function($rootScope,$location,Auth){
	console.log("inside MainController");
	
	var vm = this;

	vm.loggedIn = Auth.isLoggedIn();

	$rootScope.$on('$routeChangeStart',function(){
		vm.loggedIn = Auth.isLoggedIn();

		Auth.getUser()
			.then(function(data){
				vm.user = data.data;
			});
	});

	vm.doLogin = function(){

		vm.processing = true;
		vm.error = '';
		console.log('inside doLogin()')
		Auth.login(vm.loginData.username,vm.loginData.password)
			.success(function(data){
				vm.processing = false;

				Auth.getUser()
					.then(function(data){
						vm.user = data.data;
					});

				if (data.success)
					$location.path ('/');
				else
					vm.error = data.message;

			});
	}

	vm.doLogout = function(){
		Auth.logout();
		$location.path('/logout');
	}


}]);