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
				document.getElementById('about').className = 'fade-out ng-scope';
				setTimeout(function () {
					$scope.$apply(function () {
						$scope.$parent.enterHome();
					});
				}, 1500);
			};

			$scope.slides = [
				{
					title: "1 title",
					image: 'https://images.unsplash.com/photo-1540205082-e56e180508e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
				},
				{
					title: "2 title",
					image: 'https://images.unsplash.com/photo-1524275804141-5e9f2bc5a71d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
				}
			];
		}
	]);
