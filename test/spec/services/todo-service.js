'use strict';

describe('Service: todoService', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var todoService;
  beforeEach(inject(function (_todoService_) {
    todoService = _todoService_;
  }));

  it('should do todos', function () {
    expect(todoService.getTodo().length).toBe(0);
  });

  it('should addTodo', function () {
    todoService.addTodo('hi');
    expect(todoService.getTodo().length).toBe(1);
  });

  it('should removeTodo', function () {
    todoService.addTodo('hi');
    todoService.removeTodo(0);
    expect(todoService.getTodo().length).toBe(0);
  });


});
