'use strict';

/**
 * @ngdoc service
 * @name angularApp.todoService
 * @description
 * # todoService
 * Service in the angularApp.
 */
angular.module('angularApp')
  .service('todoService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var todos= [];

    this.getTodo = function() {
      return todos;
    };

    this.addTodo = function (todo) {
      todos.push(todo);
    };

    this.removeTodo = function (index) {
      todos.splice(index,1);
    };
  });
