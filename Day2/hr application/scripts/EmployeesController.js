/**
 * Created by Ioana.Popescu on 6/28/2017.
 */
hrapp.controller('EmployeesController', ['$rootScope','$scope', function($rootScope, $scope) {
    $scope.demoActionList = [
        {
            label: "List Employees",
            url: "/listemployees.html"
        },
        {
            label: "Add Employee",
            url: "/listemployees.html"
        },
        {
            label: "Delete Employee",
            url: "/listemployees.html"
        }
    ];
}]);


