(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {


            $urlRouterProvider.otherwise("/home");

            $stateProvider
                .state('home', {

                    url: '/home'
                })

                .state('menuItem', {

                    url: "/:name",

                    templateUrl: "assets/views/menu-item.html"

                })

                .state('menuItem.data', {

                    url: "/item/:id",

                    templateUrl: "assets/views/comments.html"

                });
        });

})();

