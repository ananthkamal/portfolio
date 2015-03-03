
var app = angular.module('testApp', []);

app.controller('FirstController', function($scope){
	$scope.age = 10;
	$scope.testFunction = function(){
		alert("Test Directive - Working");
	};
});

app.directive('testDir', function(){
	return {
		restrict: 'AE',
		scope: {
			passedVal: "@"
		},
		template: "<div><h2>Test Directive!!!</h2></div>",
		link: function(scope, element, attrs){
			console.log(scope);
			console.log('Yeah Inside directive '+ scope.passedVal);
		}
	}
});