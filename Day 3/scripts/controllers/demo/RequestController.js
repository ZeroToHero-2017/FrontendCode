hrApp.controller('RequestController', ['$scope','$http', function($scope, $http){


//    TODO #10 - make AJAX call
    $http.get("http://10.16.8.77:8181/hrapp/jobs/findAll ")
        .success(function() {
            $scope.serverData = $scope.jobList;
        })
        .error (function(status){
            alert("Error: " + status);
        });


}]);
