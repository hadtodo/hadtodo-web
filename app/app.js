var app = angular.module('hadtodoApp', ['satellizer']);

app.controller('AppCtrl', ['$scope', function ($scope) {
    $scope.initNavbar = function () {
        $('.dropdown').dropdown({
            action: 'hide'
        });
    }
}]);

app.config(function($authProvider) {
    $authProvider.facebook({
        clientId: 'CLIENTID'
    });

    $authProvider.google({
        clientId: 'CLIENTID'
    });
});
