'use strict';

var bookStoreControlers = angular.module('bookStoreControlers', []);

bookStoreControlers.controller('BookListCtrl' , ['$scope' , '$http' , function($scope, $http){
	$http.get('books/books.json').success(function(data){
		$scope.books = data;
		console.log(data)
	});	
}]);


bookStoreControlers.controller('BookDetailCtrl', ['$scope', '$routeParams',
		function($scope, $routeParams){
			$scope.bookId = $routeParams.bookId;
}]);