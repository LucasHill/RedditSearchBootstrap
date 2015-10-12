angular.module('redditSearchApp', [])
  .controller('resultsController', ['$scope', '$http', function($scope, $http) {
 
    $scope.query = function() {
      let textValue = $('#searchInput').val();
      $http.post('search/', {query: textValue}).success((response) =>
      	{
      		$scope.results = response;
      	});
    };
  }]	
  );