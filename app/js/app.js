'use strict';
/**
 * http://usejsdoc.org/
 */

var bookStoreApp = angular.module('bookStoreApp', [
                                'ngRoute',
                                 'bookStoreControlers',
                                 'booksAppFilters']);

bookStoreApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/books', {
		templateUrl: 'partials/book-list.html',
		controller: 'BookListCtrl'		
	}).when('/books/:bookId', {
		templateUrl: 'partials/book-detail.html',
		controller: 'BookDetailCtrl'		
	}).otherwise({
		redirectTo: '/books'		
	});
	
}]);