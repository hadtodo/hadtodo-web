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

/*
 * Login controller
 */

'use strict';

angular.module('hadtodoApp')
    .controller('LoginCtrl', function($scope, $auth) {
        $scope.login = function() {
            $auth.login({ email: $scope.email, password: $scope.password })
                .then(function() {
                    console.log("You have been sucessfully logged in");
                })
                .catch(function(response) {
                    console.log(
                        "Login err: %s",
                        response.data ? response.data.message : response
                    );
                });
        };
        $scope.authenticate = function(provider) {
            $auth.authenticate(provider)
                .then(function() {
                    console.log("You have been sucessfully logged in");
                })
                .catch(function(response) {
                    console.log(
                        "Login err: %s",
                        response.data ? response.data.message : response
                    );
                });
        };

        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };
    });
