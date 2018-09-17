var angular = require('angular');

//---------------
// Config
//---------------
angular
	.module('ultimates-ui')
	.config([
		'$routeProvider',
		function config($routeProvider) {
			// Configure routes
			$routeProvider
				.when('/product', {
					templateUrl: 'src/ui/routes/product.template.html',
					controller: 'ProductController'
				})
				.when('/about', {
					templateUrl: 'src/ui/routes/about.template.html',
					controller: 'AboutController'
				})
				.when('/contacts', {
					templateUrl: 'src/ui/routes/contacts.template.html',
					controller: 'ContactsController'
				})
				.when('/', {
					templateUrl: 'src/ui/routes/home.template.html',
					controller: 'HomeController'
				})
				.otherwise('/');
		}
	]);

