(function () {
    var app = angular.module('store', ['ngMaterial', 'store-products']);
    app.controller('StoreController', ['$http', function ($http) {
        var storeController = this;

        storeController.products = [];
        $http({
            method: 'GET',
            url: './products.json'
        })
            .success(function (result) {
                storeController.products = result;
            });
    }]);
    app.controller('CardController', function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };

        this.range = function (count) {
            var ratings = [];
            for (var i = 0; i < count; i++) {
                ratings.push(i)
            }

            return ratings;
        };
    });
    app.controller('ReviewController', function () {
        this.reviewN = {};
        this.addReview = function (product) {
            var reviewCopy = JSON.parse(JSON.stringify(this.reviewN));
            this.reviewN = {};
            reviewCopy.stars = countToArray(reviewCopy.stars);
            product.reviews.push(reviewCopy);
        };

        function countToArray(count) {
            var ratings = [];
            for (var i = 0; i < count; i++) {
                ratings.push(i)
            }

            return ratings;
        }
    });


}());
