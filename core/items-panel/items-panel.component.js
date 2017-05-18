(function () {
    'use strict';


    function itemsPanelController(coreService) {

        var $ctrl = this;

        $ctrl.addItem = addItem;
        $ctrl.coreService = coreService;
        $ctrl.items = coreService.getStore().items;


        $ctrl.tempItem = {

            itemName: '',
            commentCount: 0,
            comments: []

        };

        function addItem() {

            coreService.setItem($ctrl.tempItem);
            $ctrl.tempItem = {

                itemName: '',
                commentCount: 0,
                comments: []

            };
        }

    }

    angular
        .module('itemsPanel')
        .component('itemsPanel', {
            bindings: {},
            controller: itemsPanelController,
            templateUrl: 'core/items-panel/items-panel.tpl.html'

        });

    itemsPanelController.$inject = ['coreService'];
})();