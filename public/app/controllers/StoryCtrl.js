angular.module('storyCtrl',['storyService'])

.controller('StoryController', function(Story,socketIo){

	var vm = this;
	vm.stories =[];

	Story.allStory()
		.success(function(data){
			vm.stories=data;
		});


	vm.create  = function(){
		vm.message = '';
		//vm.stories =[];
		Story.create(vm.storyData)
			.success(function(data){

				//clear up the form
				vm.storyData = '';

				vm.message = data.message;
				
			});
	};
	socketIo.on('story',function(data){
		vm.stories.push(data);
	});

})

.controller('AllStoriesController',function(Story,socketIo){

	var vm = this;
    //console.log('inside AllStoriesController');
	Story.allStories()
		.success(function(data){
			vm.stories=data;
		})
		.error(function() {
                deferred.reject('failed to get stories.');
            });

	//vm.stories=stories.data

	socketIo.on('story',function(data){
		vm.stories.push(data);

	});


});