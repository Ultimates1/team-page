var angular = require('angular');


//-------------------------
// Contacts controller
//-------------------------
angular
	.module('ultimates-ui')
	.controller('ContactsController', [
		'$scope',
		function ($scope) {
			$scope.htmlReady = false;
			$scope.contacts = [
				{
					name: 'Mi Nguyen',
					img: '../images/minguyen.png',
					info: {
						email: 'minguyen@cpp.edu',
						github: 'https://github.com/yamiryu'
					}
				},
				{
					name: 'Rafi Meguerdijian',
					img: '../images/rafi.jpg',
					info: {
						email: 'meguerdijian@cpp.edu',
						github: 'https://github.com/RMCS5800'
					}
				},
				{
					name: 'Bhargav Parekh',
					img: '../images/Bhargav.gif',
					info: {
						email: 'bparekh@cpp.edu',
						github: 'https://github.com/nambvp03'
					}
				},
				{
					name: 'Darsh Thumar',
					img: '../images/darsh.gif',
					info: {
						email: 'dvthumar@cpp.edu',
						github: 'https://github.com/dvthumar'
					}
				}
			];

			$scope.ready = function () {
				return $scope.htmlReady;
			};

			// Fired when html ready
			$scope.htmlLoaded = function () {
				$scope.htmlReady = true;
			};

			$scope.closePanel = function () {
				document.getElementById('contacts').className = 'fade-out grid-container-2-by-2 ng-scope';
				setTimeout(function() {
					$scope.$apply(function() {
						$scope.$parent.enterHome();
					});
				}, 1500);
			}
		}
	]);
