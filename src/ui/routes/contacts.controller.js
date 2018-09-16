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
						email: '',
						github: ''
					}
				},
				{
					name: 'Rafi',
					img: '',
					info: {
						email: '',
						github: ''
					}
				},
				{
					name: 'B',
					img: '',
					info: {
						email: '',
						github: ''
					}
				},
				{
					name: 'T',
					img: '',
					info: {
						email: '',
						github: ''
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
		}
	]);
