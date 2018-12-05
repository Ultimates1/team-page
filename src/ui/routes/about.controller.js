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
					title: "Access different functionalities",
					image: 'assets/images/dashboard.png',
				},
				{
					title: "Manage your projects",
					image: 'assets/images/management.png',
				},
				{
					title: "Create new projects",
					image: 'assets/images/project_create.png'
				},
				{
					title: "Manage your leave requests",
					image: 'assets/images/leave.png'
				},
				{
					title: "Manage employees' leave requests",
					image: 'assets/images/workflow.png'
				},
				{
					title: "Generate documents with your templates",
					image: 'assets/images/documents.png'
				},
				{
					title: "Email notifications for new events",
					image: 'assets/images/email.png'
				}
			];
		}
	]);
