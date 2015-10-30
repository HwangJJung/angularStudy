'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should todos', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should addTodo', function () {
    scope.addTodo('hi');
    expect(scope.todos.length).toBe(1);
  });
  it('should removeTodo', function () {
    scope.addTodo('peter');
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});
