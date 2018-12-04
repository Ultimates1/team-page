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

			// Fired when html ready
			$scope.htmlLoaded = function () {
				$scope.htmlReady = true;
			};

			$scope.ready = function () {
				return $scope.htmlReady;
			};

			// Home
			$scope.enterHome = function () {
				$location.path('/');
			};

			// About
			$scope.enterAbout = function () {
				document.body.className = 'fade-out ng-scope';
				setTimeout(function () {
					$scope.$apply(function () {
						$location.path('/about');
					});
				}, 1500);
			};

			// Contacts info
			$scope.enterContacts = function () {
				document.body.className = 'fade-out ng-scope';
				setTimeout(function () {
					$scope.$apply(function () {
						$location.path('/contacts');
					});
				}, 1500);
			};
		}
	]);
