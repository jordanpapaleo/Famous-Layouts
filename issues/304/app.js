var MyApp = angular.module('MyApp', [
    'famous.angular',
    'ui.router'
]);

MyApp.controller('AppCtrl', ['$scope', '$famous',
function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];
    var Transform = $famous['famous/core/Transform'];
    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.step = 0;
    $scope.steps = ["step1","step2", "step3","step4"];

    $scope.nextStep = function(evt) {
        $scope.step = ($scope.step+1) % $scope.steps.length;
    };

    $scope.getMessage = function() {
        var label = $scope.steps[$scope.step];

        if($scope.step != $scope.steps.length-1) {
            label += " pas fin";
        } else if($scope.step == $scope.steps.length-1){
            label += " fin";
        }

        return label;
    };
}]);
