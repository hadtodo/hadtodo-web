var app = angular.module('hadtodoApp', ['satellizer']);

app.controller('AppCtrl', ['$scope', function ($scope) {
}]);

app.config(function($authProvider) {
    $authProvider.facebook({
        clientId: 'CLIENTID'
    });

    $authProvider.google({
        clientId: 'CLIENTID'
    });
});