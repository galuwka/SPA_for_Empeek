(function () {
    'use strict';


    function itemController(coreService, $timeout, $location) {

        var $ctrl = this;

        $ctrl.isActive = isActive;
        $ctrl.deleteItem = deleteItem;

        $timeout(function () {

            $ctrl.itemId = coreService.getItemIndex($ctrl.item) + 1;

        }, 0);


        function deleteItem(item) {

            $ctrl.onDelete(item);

        }

        function isActive() {

            return $location.path().indexOf($ctrl.itemId) === 15 ? true : false;

        }
    }

    angular
        .module('item')
        .component('item', {
            bindings: {
                onDelete: '&',
                item: '<'
            },
            controller: itemController,
            templateUrl: 'core/items-panel/item/item.tpl.html'

        });
    itemController.$inject = ['coreService', '$timeout', '$location'];
})();