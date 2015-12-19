(function(){
    var app = angular.module('store-products', []);
    app.directive('reviewItem', function () {
        return {
            restrict: 'E',
            templateUrl: 'view-parts/product.html'
        };
    });
    app.directive('tabLabels', function(){
        return {
            restrict:'E',
            templateUrl:'view-parts/tab-labels.html'
        };
    });
}());