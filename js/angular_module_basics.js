/**
* myApp Module;
*
* Description
*/
app = angular.module('myApp', []);

app.run(function($rootScope){
	$rootScope.rootScopeVariable = 'This is Root scope';
	$rootScope.heading = 'Angular Service';
});