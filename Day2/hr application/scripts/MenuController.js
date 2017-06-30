/**
 * Created by Ioana.Popescu on 6/28/2017.
 */
hrapp.controller('MenuController', ['$rootScope','$scope', function($rootScope, $scope) {
    $scope.demoActionList = [
        {
            label: "Demo actions",
            url: "views/shoppingcart.html"
        }
    ];
}]);
