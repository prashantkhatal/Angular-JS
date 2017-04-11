app.controller('mySearchController', function($scope){
	$scope.list = [{id:1, content:'News from center with detailed version', image:'../images/featured.jpg'}];
	$scope.searchItemName = '';
	$scope.addItem = function(){

		$scope.isBlankContent = false;
		
		if($scope.contentStr) {
			$scope.list.push({id:1, content: $scope.contentStr, image:'../images/featured.jpg'});
			$scope.contentStr = '';
		}else{
			$scope.isBlankContent = true;
		}
	};

});

app.filter('customSearchFilter', function(){
	return function(arr, searchItem){
		return arr.filter(function(item){
			return item.content.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1;
		})
	}
});