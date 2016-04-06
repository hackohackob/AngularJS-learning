angular.module('NoteWrangler')
.config(function($routeProvider){
    $routeProvider.when('/notes', {
        templateUrl: './templates/pages/notes/index.html',
        controller:'NotesIndexController'
    })
    .when('/users', {
        templateUrl: './templates/pages/users/index.html'
    })
    .when('/', {
        templateUrl: './templates/pages/notes/index.html'
    });
});