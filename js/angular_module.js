/**
* myApp Module;
*
* Description
*/
app = angular.module('myApp', []).controller('myController', function($scope){
	$scope.myVar = 'Yehhh Worked';

	let employees = [	{name:'prashant', surname:'khatal'},
						{name:'sachin', surname:'wagh'},
						{name:'mohit', surname:'kogta'},
						{name:'Chinmay', surname:'waghmare'}
					];

	$scope.employees = employees;
});

app.run(function($rootScope){
	$rootScope.rootScopeVariable = 'This is Root scope';
});


app.directive('myDirective', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		template: function() {
			return '<marquee>This is My Own Directive</marquee>';
		}
	};
});