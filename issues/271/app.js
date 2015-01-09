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

    var elHeight = {};
    $scope.getIndexHeight = function($index){
        return elHeight[$index];

    };

    $scope.setIndexHeight = function($index){
        var el = angular.element( document.querySelector( '#content-' + $index ) );
        var h = el[0].clientHeight;
        elHeight[$index] = h;
        return false;
    };

    $scope.linkEnter = function(t, $index, $done){
        t.set(1, {duration: 333, curve: 'easeOut'}, function(){
            $done;
        });

        setTimeout(function(){
            $scope.setIndexHeight($index);
        }, 1)
    }; // linkEnter
}]);
