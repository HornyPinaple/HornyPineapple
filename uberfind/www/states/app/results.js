(function(){

	function ResultsController($scope, $state){

		$scope.rs = {};

		$scope.rs.query = $state.params.query;

		$scope.rs.source = "Current Location"

	}

	ResultsController.$inject = ['$scope', '$state'];


	angular.module('uberfind').controller('ResultsController', ResultsController)

})();