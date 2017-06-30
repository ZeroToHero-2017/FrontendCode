/**
 * Created by Ioana.Popescu on 6/28/2017.
 */
hr.controller('DescriptionController', ['$rootScope','$scope', function($rootScope, $scope) {
    $scope.title = 'Two Way Binding Demo';
    console.log($scope.title);
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function(){
        $scope.firstVariable = undefined;
    };

    $scope.setFirstVariable = function(val){
        $scope.firstVariable = val;
    };

    $scope.toggleDescriptionShow = function(){
        if ($scope.descriptionShow === true)
            $scope.descriptionShow = false;
        else
            $scope.descriptionShow = true;
    }
}]);

