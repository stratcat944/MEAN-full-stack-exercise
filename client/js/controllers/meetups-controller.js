app.controller('meetupsController', [ '$scope', '$resource', function($scope, $resource){
	var Meetup = $resource('/api/meetups');
	$scope.meetups = [
		{ name: "MEAN SF Developers" },
		{ name: "Some other meetups" }
	]

	$scope.createMeetup = function(){
		var meetup = newMeetup();
		meetup.name = $scope.meetupName;
		meetup.$save();
	}
}]);