var MyApp = angular.module('MyApp', [
    'famous.angular'
]);

MyApp.controller('AppCtrl', ['$scope', '$famous',
    function ($scope, $famous) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];
        var Transform = $famous['famous/core/Transform'];
        var EventHandler = $famous['famous/core/EventHandler'];

        $scope.eventHandler = new EventHandler();
        $scope.boxTransitionable = new Transitionable([0, 0, 0]);
        $scope.views = [{color: 'red'}, {color: 'blue'}, {color: 'green'}, {color: 'yellow'}, {color: 'orange'}];

        $scope.layout = {
            mainScroll: {
                paginated: true,
                speedLimit: 1
            },
            grid: {
                dimensions: [2,1]
            }
        };
    }]);
