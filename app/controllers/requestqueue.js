angular.module('hadtodoApp').controller('RequestQueueCtrl', function ($scope, RequestQueueService) {
    $scope.isRunning = function() {
        return RequestQueueService.isRunning();
    };
});
