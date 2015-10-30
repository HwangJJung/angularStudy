'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('TodoCtrl', function ($scope, todoService) {
    $scope.todos = todoService.getTodo();

    $scope.addTodo = function () {
      todoService.addTodo($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      todoService.removeTodo(index);
    };
  });
