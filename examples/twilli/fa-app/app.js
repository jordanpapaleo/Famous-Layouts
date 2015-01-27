var Twilli = angular.module('Twilli', [
    'famous.angular',
    'ui.router'
]);

Twilli.controller('AppController', ['$scope', '$famous',
    function ($scope, $famous) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];
        var Transform = $famous['famous/core/Transform'];
        var EventHandler = $famous['famous/core/EventHandler'];

        $scope.mainScroll = new EventHandler();
        $scope.backgroundImage = "../assets/bg1.jpg";

        $scope.layout = {
            mainScroll: {
                paginated: true,
                speedLimit: 5
            }
        };

        $scope.getMainViewDimensions = function() {
            return [window.innerWidth * .6, window.innerHeight]
        };

        $scope.setBackgroundImage = function(img) {
            $scope.backgroundImage = img;
        };

    }]);
