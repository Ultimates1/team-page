var angular = require('angular');


//-------------------------
// About controller
//-------------------------
angular
	.module('ultimates-ui')
	.controller('AboutController', [
		'$scope',
		'$location',
		function ($scope, $window, $location) {
			$scope.htmlReady = false;
			$scope.title = 'About';

			$scope.ready = function () {
				return $scope.htmlReady;
			};

			// Fired when html ready
			$scope.htmlLoaded = function () {
				$scope.htmlReady = true;
			};
		}
	]);
