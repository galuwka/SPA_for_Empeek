(function () {
    'use strict';


    function navItemController($location) {

        this.isActive = isActive;

        function isActive(viewLocation) {

            return $location.path().indexOf(viewLocation) === 1 ? true : false;
        }
    }

    angular
        .module('core')
        .component('navItem', {
            bindings: {
                navItem: '<'
            },

            controller: navItemController,
            templateUrl: 'core/navbar/nav-item/nav-item.tpl.html'

        });

    navItemController.$inject = ['$location'];
})();