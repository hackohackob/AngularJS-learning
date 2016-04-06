(function(){
    angular.module('NoteWrangler')
        .controller('NotesIndexController', function($scope){
            $scope.notes = [{
                name:'Note1',
                bio:'Note1Bio'
            },{
                name:'Note2',
                bio:'Note2Bio'
            }];
        });
}());