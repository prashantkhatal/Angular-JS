app.controller('mySearchController', function($scope){
	$scope.list = [{id:1, content:'News from center with detailed version', image:'../images/featured.jpg'}];

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