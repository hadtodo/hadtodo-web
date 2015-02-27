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

/*
 * Service that handles all the requests sent to API, as well as processes errors if they occur.
 */

angular.module('hadtodoApp').factory('RequestQueueService', function ($http) {
    return {
        queue: [],
        running: false,

        /**
         * Add request to the queue.
         *
         * If queue is not currently being processed, then {@link RequestQueueService.processQueue}
         * is also called and {@link RequestQueueService.running} is set to true.
         *
         * @param {Object} request Request to be passed to {@link $http}. Can also contain
         *  `onSuccess` and `onError` properties, which will be treated as callback functions
         *  whenever a success or error occurs. The functions may accept parameters:
         *  `data, status, headers, config`.
         */
        addRequest: function (request) {
            request.url = 'http://localhost:3000';
            this.queue.push(request);

            if (!this.running) {
                this.running = true;
                this.processQueue();
            }
        },

        /**
         * Process the first item in request queue and move to others if the first one has succeeded.
         */
        processQueue: function () {
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

        /**
         * Return whether the queue is currently being processed.
         *
         * That means, the function returns true if a request was sent, and neither success nor
         * error have occurred yet.
         *
         * @returns {boolean} `true` if the queue is currently being processed; `false` otherwise
         */
        isRunning: function () {
            return this.running;
        }
    };
});
