'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:todo
 * @description
 * # todo
 */
angular.module('angularApp')
  .directive('todo', function () {
    return {
      restrict: 'E',
      scope: false,
      templateUrl:'scripts/directives/todo-list.html',
      link: function postLink(scope, element, attrs) {}
    };
  });
