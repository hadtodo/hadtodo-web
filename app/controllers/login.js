/*
 * Login controller
 */

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
    });