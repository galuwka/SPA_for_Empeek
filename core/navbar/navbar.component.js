(function () {
    'use strict';


    function navbarController(coreService) {

        this.navItems = coreService.getStore().navItems;

    }

    angular
        .module('navbar')
        .component('navbar', {
            bindings: {},
            controller: navbarController,
            templateUrl: 'core/navbar/navbar.tpl.html'

        });
    navbarController.$inject = ['coreService'];
})();