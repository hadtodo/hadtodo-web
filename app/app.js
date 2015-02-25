var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppController', ['$scope', '$mdSidenav', '$mdDialog',
    function ($scope, $mdSidenav, $mdDialog) {
        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };
        $scope.addTodo = function (event) {
            $mdDialog.show({
                controller: AddTodoDialogController,
                templateUrl: 'dialogs/addtodo.tmpl.html',
                targetEvent: event
            });
        }
    }]);

function AddTodoDialogController($scope, $mdDialog) {
    $scope.cancel = function () {
        $mdDialog.cancel();
        console.log('Add todo dialog: cancel');
    };
    $scope.add = function () {
        $mdDialog.hide();
        console.log('Add todo dialog: add');
    };
}
