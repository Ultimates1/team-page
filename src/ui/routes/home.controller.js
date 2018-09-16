var angular = require('angular');


//-------------------------
// Home controller
//-------------------------
angular
	.module('ultimates-ui')
	.controller('HomeController', [
		'$scope',
		function ($scope) {
			$scope.htmlReady = false;
			$scope.title = 'The Ultimates';
			$scope.productText = "Product";
			$scope.aboutText = "About";
			$scope.contactsText = "Contacts";

			$scope.ready = function () {
				return $scope.htmlReady;
			};

			// Fired when html ready
			$scope.htmlLoaded = function () {
				$scope.htmlReady = true;
			};
		}
	]);
