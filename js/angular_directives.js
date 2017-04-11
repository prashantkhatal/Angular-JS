app.controller('myDirectiveController', function($scope){
	$scope.heading = 'Angular Directive';
	$scope.customer =  {fname:'Prashant', lname:'Khatal'};
});

app.directive('myCustomer', function(){
	// Runs during compile
	return {
		restrict: 'A',
		scope: {
			currentScope: '=param'
		},
		template: 'My Customer <br/> First Name = {{currentScope.fname}} and last Name = {{currentScope.lname}}'
	};
});