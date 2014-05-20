var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	var url;
	if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
		url = '/data/data.json';
	} else {
		url = '/data-visualization-methods/data/data.json';
	}
	$http.get(url).success(function(data, status) {
		$scope.data = data;
	});
}]);
