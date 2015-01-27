'use strict';

Twilli.controller('CarouselController', ['$scope', '$famous',
    function ($scope, $famous) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];
        var Transform = $famous['famous/core/Transform'];
        var EventHandler = $famous['famous/core/EventHandler'];
        var self = this;

        $scope.carouselEvent = new EventHandler();
        $scope.list = [{content: "Scroll", color: "red"}, {content: "horizontally", color: "blue"}, {content: "yay!", color: "green"}, {content: "woo!", color: "yellow"}];

        $scope.layout = {
            carousel: {
                paginated: true,
                speedLimit: 5,
                //clipSize: 100,
                direction: 0
            }
        };
    }]);
