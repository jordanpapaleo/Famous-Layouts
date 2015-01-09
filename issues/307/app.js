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

        $scope.path = '//code.famo.us/famous-logo.png';
        $scope.one = {
            properties: {
                backfaceVisibility: 'visible',
                zIndex: "2",
                backgroundColor: "red"
            }
        };

        $scope.two = {
            properties: {
                backfaceVisibility: 'visible',
                zIndex: "3",
                backgroundColor: "yellow"
            }
        };
    }]);
