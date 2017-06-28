/**
 * Created by Ioana.Popescu on 6/28/2017.
 */
hr.controller('ImagesController', ['$scope', function($scope){
    $scope.images = [
        {
            label: "Bread",
            url: "images/bread.jpg",
            price: 4000
        },
        {
            label: "Doughnut",
            url: "images/doughnut.jpg",
            price: 1
        },
        {
            label: "Hamburger",
            url: "images/hamburger.PNG",
            price: 123
        },
        {
            label: "Pizza",
            url: "images/pizza.jpg",
            price: 1000
        }
    ]
    $scope.hoverIn = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    };
}

]);
