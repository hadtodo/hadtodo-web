var app = angular.module('hadtodoApp', ['satellizer']);

app.controller('AppCtrl', ['$scope', function ($scope) {
}]);

app.config(function($authProvider) {
    $authProvider.facebook({
        clientId: 'client id here'
    });

    $authProvider.google({
        clientId: 'client id here'
    });
});