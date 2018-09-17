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

			$scope.closePanel = function () {
				document.getElementById('about').className = 'fade-out grid-container-2-cols ng-scope';
				setTimeout(function() {
					$scope.$apply(function() {
						$scope.$parent.enterHome();
					});
				}, 1500);
			}
		}
	]);
