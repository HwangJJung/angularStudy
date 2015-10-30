'use strict';

describe('Directive: todo', function () {

  // load the directive's module
  beforeEach(module('angularApp'));
  beforeEach(module('templates'));


  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should todo list', inject(function ($compile) {
    // 1) 샘플 데이터 스코프에 설정.
    scope.todo='hi';
    // 2) 지시자 컴파일 DOM 적용
    element = angular.element('<todo></todo>');
    element = $compile(element)(scope);
    // 3) 값 적용을 위해 $digest() 직접호출
    scope.$digest();

    expect(element.find('input').val()).toEqual('hi');
  }));
});
