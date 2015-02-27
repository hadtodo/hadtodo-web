angular.module('hadtodoApp').factory('RequestQueueService', function ($http) {
    return {
        queue: [],
        running: false,

        addRequest: function (request) {
            request.url = 'http://localhost:3000';
            this.queue.push(request);

            if (!this.running) {
                this.running = true;
                this.processQueue();
            }
        },

        processQueue: function() {
            var that = this;
            var request = this.queue[0];

            $http(request).success(function (data, status, headers, config) {
                that.queue.shift();
                if (typeof(request.onSuccess) !== 'undefined') {
                    request.onSuccess(data, status, headers, config);
                }

                if (that.queue.length) {
                    that.processQueue();
                } else {
                    that.running = false;
                }
            }).error(function (data, status, headers, config) {
                // TODO Better error handling (displaying them?)
                if (typeof(request.onError) !== 'undefined') {
                    request.onError(data, status, headers, config);
                }
                that.running = false;
            });
        },

        isRunning: function () {
            return this.running;
        }
    };
});
