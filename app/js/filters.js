'use strict';

/**
 * http://usejsdoc.org/
 */
angular.module('booksAppFilters', []).filter('checkmark', function() {
	return function(input) {
		return input ? '\u2713' : 'u2718';
	};
});