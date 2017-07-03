hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'ManagerService',
    function($scope, $http, $location, CommonResourcesFactory, ManagerService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        ManagerService.findDepartments().then(function(resolve){
            $scope.departments = resolve.data;
        });

        ManagerService.findManagers().then(function(resolve){
            $scope.managers = resolve.data;
        });

        ManagerService.findJobs().then(function(resolve){
            $scope.jobs = resolve.data;
        });
        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function () {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: $scope.employee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);