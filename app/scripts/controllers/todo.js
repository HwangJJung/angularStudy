'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.todos = ['Item1','hataeho', 'babo 3'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index,1);
    };
  });
