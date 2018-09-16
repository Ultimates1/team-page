var angular = require('angular');

//----------------
// Application controller
//----------------
angular
	.module('ultimates-ui')
	.controller('ApplicationController', [
		'$scope',
		'$window',
		'$location',
		function ($scope, $window, $location) {
			$scope.htmlReady = false;

			// On resize
			angular.element($window).bind('resize', function () {
				var width = parseInt($window.innerWidth / 6);
				// Ensure we can divide by 2
				if (width % 2 != 0) {
					width += 1;
				}
			});

			$scope.ready = function () {
				return $scope.htmlReady;
			};

			// Fired when html ready
			$scope.htmlLoaded = function () {
				$scope.htmlReady = true;
			};

			// Project info
			$scope.enterProduct = function () {
				$location.path('/product');
			};

			// About
			$scope.enterAbout = function () {
				$location.path('/about');
			};

			// Contacts info
			$scope.enterContacts = function () {
				$location.path('/contacts');
			};
		}
	]);
