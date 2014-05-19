var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$http.get('/data/data.json').success(function(data, status) {
		$scope.data = data;
	});
}]);
