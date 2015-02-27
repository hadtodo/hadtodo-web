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
