
app.controller('myController', function($scope){
	
	let sortDirection;

	var employees = [
						{name:'prashant', surname:'khatal', salary: 10000},
						{name:'sachin', surname:'wagh', salary: 50000},
						{name:'mohit', surname:'kogta', salary: 40000},
						{name:'Chinmay', surname:'waghmare', salary: 30000}
					];

	$scope.sortByField = function(sortField){
		sortDirection = ( sortDirection == 'asc' ) ? 'desc' : 'asc';
		employees.sort(function(emp1,emp2){
			return (sortDirection == 'asc') ? ( emp1[sortField] > emp2[sortField] ) : ( emp1[sortField] < emp2[sortField] );
		});
	}

	$scope.showCoordinate = function(event){
		$scope.x = event.clientX;
		$scope.y = event.clientY;
	}

	$scope.selectOptions = [{id:1, label:'Yes'}, {id:5, label:'No'}, {id:3, label:'Can\'t say'}];

	$scope.selectOptionsObject = { prashant:'Khatal',
								   Mohit: 'Maheshwari',
								   Sachin: 'Wagh',
								   Chinmay: 'WaghMare'
								}
 
	$scope.myVar = 'Click Me';
	$scope.employees = employees;

});

app.filter('addTitles', function(){
	return function(name, title){
		return title + name.charAt(0).toUpperCase() + name.slice(1);
	}
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