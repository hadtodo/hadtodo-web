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
