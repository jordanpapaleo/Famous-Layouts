var MyApp = angular.module('MyApp', [
    'famous.angular'
]);

MyApp.controller('AppCtrl', ['$scope', '$famous',
    function ($scope, $famous) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];
        var Transform = $famous['famous/core/Transform'];
        var EventHandler = $famous['famous/core/EventHandler'];

        $scope.goNextStep = function() {
            console.info('goNextStep');
        };
    }]);
