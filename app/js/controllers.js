'use strict';

var bookstoreApp = angular.module('bookstoreApp', []);

bookstoreApp.controller('BookListCtrl' , ['$scope' , '$http' , function($scope, $http){
	$http.get('books/books.json').success(function(data){
		$scope.books = data;
		console.log(data)
	});	
}]);


