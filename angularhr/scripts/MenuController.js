/**
 * Created by Ioana.Popescu on 6/28/2017.
 */
hr.controller('MenuController', ['$scope', function($scope){
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        },
        {
            label: "Demo Actions",
            url: "/shoppingcart.html"
        }
    ];
}

]);