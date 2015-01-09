var MyApp = angular.module('MyApp', [
    'famous.angular',
    'ui.router',
    'ngAnimate'
]).config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('a');
    $stateProvider
        .state("home",{
            url: "home",
            template: faSurf("1")
        })
        .state("a", {
            url: "/a",
            template: faSurf("2")
        })
});

MyApp.controller('AppCtrl', ['$scope', '$famous',
    function ($scope, $famous) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];
        var Transform = $famous['famous/core/Transform'];
        var EventHandler = $famous['famous/core/EventHandler'];
    }]);


function faSurf(html){
    return "" +
        "<fa-flexible-layout fa-options=\"{direction: 1,ratios:[1,1]}\">" +
            "<fa-modifier>" +
                "<fa-surface class=\"page"+html+"\">" +
                    "<a ui-sref=\"home\">Click Me</a>" +
                "</fa-surface>" +
            "</fa-modifier>" +
            "<fa-modifier>" +
                "<fa-surface class=\"\">2</fa-surface>" +
            "</fa-modifier>" +
        "</fa-flexible-layout>";
}
