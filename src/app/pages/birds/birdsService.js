(function() {
	'use strict';

  	angular
		.module('iobirds.pages.birds')
		.factory('BirdsService', Birds);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Birds.$inject = ['$http'];

		function Birds ($http) {

		}

})();
