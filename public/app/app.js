angular.module('app',[
	'appRoutes',
	'mainCtrl',
	'userCtrl',
	'userService',
	'authService',
	'storyService',
	'storyCtrl',
	'reverseDirective'
	])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');

});

/*.config(function($httpProvider,$urlRouteProvider,$locationProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');

});*/