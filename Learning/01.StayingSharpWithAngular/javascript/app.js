(function(){
    var app =  angular.module('NoteWrangler',['ngMaterial', 'ngRoute']);

    var sidebarController =
        angular.module('NoteWrangler')
        .controller('ToolbarController', function($scope, $mdSidenav){
        $scope.openSidebar = function(){
            $mdSidenav('left').toggle();
        };
    });
}());