(function () {
    'use strict';

    function commentsPanelController(coreService, $stateParams) {
        var $ctrl = this;
        $ctrl.id = $stateParams.id - 1;
        $ctrl.addComment = addComment;
        $ctrl.tempComment = '';
        $ctrl.comments = coreService.getStore().items[$ctrl.id].comments;

        function addComment($event) {
            if ($event.keyCode === 13) {
                coreService.addComment($ctrl.id, $ctrl.tempComment);

                $event.target.value = '';
            }
        }

    }

    angular
        .module('commentsPanel')
        .component('commentsPanel', {
            bindings: {},
            controller: commentsPanelController,
            templateUrl: 'core/comments-panel/comments-panel.tpl.html'

        });
    commentsPanelController.$inject = ['coreService', '$stateParams'];
})();