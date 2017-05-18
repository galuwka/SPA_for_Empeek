(function () {
    'use strict';

    angular
        .module('comment')
        .component('comment', {
            bindings: {
                comment: '<'
            },
            templateUrl: 'core/comments-panel/comment/comment.tpl.html'

        });

})();