angular.module('reverseDirective',[])

.filter('reverse',function(){

	console.log('reversing objects in array');
	return function(items){
		if (!angular.isArray(items)) 
			return false;

		return items.slice().reverse(); //built in reverse the order of array.
	}
});