hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, CommonResourcesFactory) {

        $scope.employee = {};


        // TODO #HR6 get employee by id
        $http.get(CommonResourcesFactory.findOneEmployeeUrl + $routeParams.id)
            .success(function(data, status, headers, config) {
                $scope.employee = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });


        $scope.back = function() {
            // TODO back to Employee List page
            $location.path("employeeslist");
        }

    }]);