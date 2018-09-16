var angular = require('angular');


//-------------------------
// Product controller
//-------------------------
angular
	.module('ultimates-ui')
	.controller('ProductController', [
		'$scope',
		'$location',
		function ($scope, $window, $location) {
			$scope.htmlReady = false;
			$scope.title = 'Product';

			$scope.ready = function () {
				return $scope.htmlReady;
			};

			// Fired when html ready
			$scope.htmlLoaded = function () {
				$scope.htmlReady = true;
			};
		}
	]);
