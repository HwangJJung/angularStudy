# angular

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

# 앵귤러 공부

## scope 의 프로토타입 메서드들

1. $apply(표현식 혹은 함수)
    주로 외부 환경에서 angularJS 표현식을 실행할 때 사용한다. 즉, 외부 라이브러리로 이벤트를 처리할 때나 SetTimeOut 메서드를 사용할 때 사용한다. 인자로는 표현식이나 함수를 전달할 수 있다. 표현식을 전달하면 해당 표현식을 계산하고 함수를 전달하면 함수를 실행시킨다. 그리고 내부적으로 $rootScopre의 $digest를 실행해 등록된 모든 $watch를 실행하게 된다.

2. $broadcast(이벤트 이름, 인자들 ...)
    첫번째 인자인 이벤트 이름으로 하는 이벤트를 모든 하위 $scope에게 발생시킨다. 가령 ''' $scope.$broadcast('popup:open',{title : "hello"}); ''' 를 호출하면 $on 메서드를 이용해 해당 이벤트($popup:open)를 듣고 있는 $scope들에게 { title: "hello"}의 데이터를 전달할 수 있다. 잘 활용하면 $scope들 사이의 참조 관계를 매우 느슨하게 만들어 재활용할 수 있는 UI 컴포넌트 개발에 용이하다.

3. $destory()
    현재 $scope를 제거할 수 있다. 또한, 모든 자식 $scope까지 파괴된다.

4. $digest()
    $scope와 그 자식에 등록된 모든 $watch 리스너 함수를 실행시킨다. $watch 리스너 함수가 보는 표현식에 대하여 변화가 없다면 리스너 함수는 실행시키지 않는다.

5. $emit(이벤트명, 인자들....)
    해당 $scope를 기준으로 상위 계층 $scope에게 이벤트 명으로 인자를 전달한다. 물론 $on으로 이벤트 명을 듣고 상위 계층에 한하여 전파한다.

6. $eval(표현식, 로케일)
    주어진 표현식을 계산하고 그 결과를 반환한다. 물론 현재 $scope를 기준으로 표현식이 계산된다. 예를 들어, $scope의 b라는 속성에 3이라는 값이 있으면 ''' $scope.$eval('b+3');''' 결과는 6이 된다.

7. $evalAsync(표현식)
    $eval과 마찬가지나, 표현식의 결과값이 바로 반환되지 않고 나중에 어떠한 시점에서 그 결과가 반환된다. 하지만 적어도 한번의 $digest가 호출된다.

8. $new(독립여부)
    새로운 자식 $scope를 생성한다. 독립여부를 true, false로 전달하는데 true일 경우 프로토타입을 기반으로 상속하지 않게 된다.

9. $on(이벤트 이름, 리스너 함수)
    주어진 이벤트 이름으로 이벤트를 감지하다가 해당 이벤트가 발생하면 리스너 함수를 실행한다. 이벤트 리스너 함수는 첫 번째 인자로 이벤트 객체를 받고 다음으로 $emit이나 $broadcast에서 전달한 값을 인자로 받는다. 자세한 내용은 "$scope에서 사용자 정의 이벤트 처리" 절에서 다루겠다.

10. $watch(표현식, 리스너 함수, 동등성여부)
    대상 $scope에 특정 표현식을 감지하는 리스너 함수를 등록한다. 가령 $scope의 data 속성에 특정 객체가 할당되어 있다고 하자. 그리고 ''' $scope.$watch("data", function(){...})'''로 함수를 호출하면 $scope.data의 레퍼런스가 변경될 때 리스너 함수가 호출된다. 리스너 함수에는 인자로 새로운 값과 이전 값이 주어진다. 동등성 여부는 변경을 레퍼런스로 감지할 것인지 동등한 여부로 감지할 것인지를 정할 때 사용된다. 기본값은 false이며 레퍼런스 변경 시에만 리스너 함수가 호출된다.

11. $watchCollection(표현식 , 리스너 함수)
    기본적으로 $watch와 같은 기능을 하며 대신 배열이나 객체에 대한 변경을 감지할 때 사용한다. 배열일 경우 새로운 배열 요소가 추가되거나 배열 요소들 사이의 순서가 변경되거나 배열 요소가 삭제될 때마다 리스너 함수가 호출된다. 객체일 경우 속성에 변경이 있을 때마다 리스너 함수가 호출된다.

## watch를 직접 콜해줘야하는 경우

1. 사용자 정의 콜백
2. Third 파트 라이브러리 콜백
3. 네트워크 통신 비동기 콜백
