
app.controller('myServiceController', function($scope, $http, myService, myFactoryService){
	$scope.myService = myService;
	$scope.myFactoryService = myFactoryService;

	//will not work as no vhost defined
	$http({method:'GET',
			url:'https://docs.angularjs.org/guide/directive',
			datatype:'jsonp',
			headers: {'Access-Control-Allow-Origin':"*" },
		}).then(function(res){

		console.log(res);
	});

});


app.service('myService', function(){
	this.mixIt = function(string){
		return string + '! Hey this is service. @' + Date();
	}
});

app.factory('myFactoryService', function(){
	let factory = {};


	factory.addTitle = function(name){
		return 'Mr. ' + name.charAt(0).toUpperCase() + name.slice(1)
	}

	return factory;
});