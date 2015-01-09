var MyApp = angular.module('MyApp', [
    'famous.angular',
    'ui.router'
]);

angular.module('MyApp').controller('AppCtrl', ['$scope', '$famous',
    function($scope, $famous) {
        // var Transitionable = $famous['famous/transitions/Transitionable'];
        // var Easing = $famous['famous/transitions/Easing'];
        // var Transform = $famous['famous/core/Transform'];
        var EventHandler = $famous['famous/core/EventHandler'];

        /*$scope.myGridLayoutOptions = {
            dimensions: [2,2] // specifies number of columns and rows
        };

        $scope.views = [{color: 'red'}, {color: 'blue'}, {color: 'green'}, {color: 'yellow'}, {color: 'orange'}];
        $scope.myEventHandler = new EventHandler();

        $scope.views2 = [{color: 'orange'}, {color: 'purple'}, {color: 'blue'}, {color: 'red'}, {color: 'green'}];
        $scope.myEventHandler2 = new EventHandler();*/

        $scope.eventHandler = new EventHandler();
        $scope.list = [
            {
                content: "Awesome content"
            },{
                content: "Scroll vertically to see more awesome content"
            },{
                content: "Famo.us/angular rocks!"
            },{
                content: "Famo.us/angular rocks!"
            },{
                content: "Famo.us/angular rocks!"
            },{
                content: "Famo.us/angular rocks!"
            }
        ];

        $scope.options = {
            scrollViewOuter: {
                direction: 0,
                paginated: true
            },
            scrollViewInner :{
                direction: 1
            }
        };

    }]);
