'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/tensehello.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/tfsession.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/tftensor.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/variables.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/add.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/linear_regression.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/basics_operations.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/logistic_regression.html'});
		
       $routeProvider.when('/view9',{templateUrl:'partials/kmeans.html'});
	   $routeProvider.when("/view10",{templateUrl:'partials/random_forest.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/nearest_neighbor.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/autoencoder.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/bidirectional_rnn.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/tensorflow_dataset_api.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/Untitled19.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/Untitled20.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/Untitled21.html'});
	   
	   
	  $routeProvider.when("/view20",{templateUrl:'partials/Untitled22.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/Untitled23.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/Untitled24.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/Untitled25.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/principal_component_analysis.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/support_vector_machine.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/random_forest3.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/k_nearest_neighbors.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/adaboost.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/recurrent_neural_network.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/particle_swarm_optimization.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/logistic_regression1.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/demo.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/naive_bayes.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/partitioning_around_medoids.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/restricted_boltzmann_machine.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/multi_class_lda.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/xgboost.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/linear_regression1.html'});
		$routeProvider.when("/view41",{templateUrl:'partials/linear_discriminant_analysis.html'});
		$routeProvider.otherwise({redirectTo: '/'});
  }]);
  
  
  
myApp.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);

