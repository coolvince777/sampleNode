angular.module('appRoutes',['ngRoute'])

//.config(function($routeProvider, $locationProvider){
.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/',{
			templateUrl:'app/views/pages/home.html',
			controller:'MainController',
			controllerAs:'main'
			
		})
		.when('/login',{
			templateUrl:'app/views/pages/login.html',
			controller:'MainController',
			controllerAs:'login'
		})

		.when('/signup',{
			templateUrl:'app/views/pages/signup.html',
			controller:'UserController',
			controllerAs:'user'
		})

		.when('/allStories',{
			templateUrl:'app/views/pages/allStories.html',
			controller:'AllStoriesController',
			contollerAs:'story',
			/*resolve:{ //this allows for faster loading
				stories:function(Story){
					return Story.allStories();
				}
			}*/


		});

		/*.otherwise({
			redirectTo: '/'
		});*/


		$locationProvider.html5Mode({enabled:true,
									requireBase:false});//How the linking paths are stored.
		

});