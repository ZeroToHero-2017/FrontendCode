/**
 * Created by Ioana.Popescu on 6/29/2017.
 */
hrApp.controller('UserController', ['$scope', '$location',
    function ($scope, $location) {

        $scope.user = {};
        $scope.userList = [];

        $scope.backk = function () {
            $location.path("main");
        };
        $scope.resett = function () {
            $scope.user = '';
        };
        $scope.savee = function () {
            $scope.userList.push($scope.user);
            alert("Saved!");
        };
        $scope.showhide = function(){
            $scope.descriptionShow = !$scope.descriptionShow;
        }
    }
]);