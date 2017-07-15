const app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/recipes', {
			templateUrl: 'recipes.html',
			controller: 'StudentController'
		})
		.when('/recipe-detail', {
			templateUrl: 'recipe-detail.html',
			controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

app.service('dataService', function($http) {
	this.recipes = $http.get('http://localhost:5000/api/recipes').then(function(res) {
		console.log(res.data);
		return res.data
	})

	this.categories = $http.get('http://localhost:5000/api/categories').then(function(res) {
		console.log(res.data);
		return res.data
	})

	this.foodItems = $http.get('http://localhost:5000/api/foodItems').then(function(res) {
		console.log(res.data);
		return res.data
	})

	this.filterRecipes = $http.get('http://localhost:5000/api/recipes?category={category}').then(function(res) {
		console.log(res.data);
		return res.data
	})

	this.getRecipeById = $http.get('http://localhost:5000/api/recipes/{id}').then(function(res) {
		console.log(res.data);
		return res.data
	})

	this.updateRecipeById = $http.put('http://localhost:5000/api/recipes/{id}'/*, data*/).then(function(res) {
		console.log(res.data);
		return res.data
	})

	this.newRecipe = $http.post('http://localhost:5000/api/recipes' /*, data*/).then(function(res) {
		console.log(res.data);
		return res.data
	})

	this.deleteRecipe = $http.delete('http://localhost:5000/api/recipes').then(function(res) {
		console.log(res.data);
		return res.data
	})
});

app.controller('RecipesController', function($scope) {
	console.log('clicked')
	
	
});

