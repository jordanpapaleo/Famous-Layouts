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

        var self = this;

        this.init = function () {
            this.setScope();
            this.load();
        };

        this.load = function () {
            this.setScopeEvents();
        };

        this.setScope = function () {
            $scope.myEventHandler = new EventHandler();
            $scope.backgroundImage = "../assets/bg1.jpg";

            $scope.layout = {
                mainScroll: {
                    paginated: true,
                    speedLimit: 5
                }
            };
        };


        this.setScopeEvents = function () {
            $scope.getPageHeight = function() {
              return window.innerHeight;
            };

            $scope.getPageWidth = function() {
              return window.innerWidth * .6;
            };

            $scope.setBackgroundImage = function(img) {
                $scope.backgroundImage = img;
            }
        };

        this.init();
    }]);
