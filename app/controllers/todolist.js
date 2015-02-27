/*
 * hadtodo is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * hadtodo is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with hadtodo.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

angular.module('hadtodoApp').controller('TodoListCtrl', function ($scope, RequestQueueService) {
    $scope.isDone = function(item) {
        return item.done;
    };

    $scope.toggleDone = function($event, item) {
        item.done = $event.currentTarget.checked;
    };

    $scope.addTodo = function() {
        $scope.items.push({
            text: 'Brand new todo!'
        });

        var req = {
            method: 'PUT',
            data: { test: 'test' }
        };
        RequestQueueService.addRequest(req);
    };

    $scope.items = [
        {
            done: true,
            text: 'Todo item!'
        },
        {
            text: 'Wow, another todo item!'
        },
        {
            text: 'One more?'
        }
    ];

});
