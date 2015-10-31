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
    첫번째 인자인 이벤트 이름으로 하는 이벤트를 모든 하위 $scope에게 발생시킨다. 가령 ` $scope.$broadcast('popup:open',{title : "hello"}); ` 를 호출하면 $on 메서드를 이용해 해당 이벤트($popup:open)를 듣고 있는 $scope들에게 { title: "hello"}의 데이터를 전달할 수 있다. 잘 활용하면 $scope들 사이의 참조 관계를 매우 느슨하게 만들어 재활용할 수 있는 UI 컴포넌트 개발에 용이하다.

3. $destory()
    현재 $scope를 제거할 수 있다. 또한, 모든 자식 $scope까지 파괴된다.

4. $digest()
    $scope와 그 자식에 등록된 모든 $watch 리스너 함수를 실행시킨다. $watch 리스너 함수가 보는 표현식에 대하여 변화가 없다면 리스너 함수는 실행시키지 않는다.

5. $emit(이벤트명, 인자들....)
    해당 $scope를 기준으로 상위 계층 $scope에게 이벤트 명으로 인자를 전달한다. 물론 $on으로 이벤트 명을 듣고 상위 계층에 한하여 전파한다.

6. $eval(표현식, 로케일)
    주어진 표현식을 계산하고 그 결과를 반환한다. 물론 현재 $scope를 기준으로 표현식이 계산된다. 예를 들어, $scope의 b라는 속성에 3이라는 값이 있으면 ` $scope.$eval('b+3');` 결과는 6이 된다.

7. $evalAsync(표현식)
    $eval과 마찬가지나, 표현식의 결과값이 바로 반환되지 않고 나중에 어떠한 시점에서 그 결과가 반환된다. 하지만 적어도 한번의 $digest가 호출된다.

8. $new(독립여부)
    새로운 자식 $scope를 생성한다. 독립여부를 true, false로 전달하는데 true일 경우 프로토타입을 기반으로 상속하지 않게 된다.

9. $on(이벤트 이름, 리스너 함수)
    주어진 이벤트 이름으로 이벤트를 감지하다가 해당 이벤트가 발생하면 리스너 함수를 실행한다. 이벤트 리스너 함수는 첫 번째 인자로 이벤트 객체를 받고 다음으로 $emit이나 $broadcast에서 전달한 값을 인자로 받는다. 자세한 내용은 "$scope에서 사용자 정의 이벤트 처리" 절에서 다루겠다.

10. $watch(표현식, 리스너 함수, 동등성여부)
    대상 $scope에 특정 표현식을 감지하는 리스너 함수를 등록한다. 가령 $scope의 data 속성에 특정 객체가 할당되어 있다고 하자. 그리고 ` $scope.$watch("data", function(){...})`로 함수를 호출하면 $scope.data의 레퍼런스가 변경될 때 리스너 함수가 호출된다. 리스너 함수에는 인자로 새로운 값과 이전 값이 주어진다. 동등성 여부는 변경을 레퍼런스로 감지할 것인지 동등한 여부로 감지할 것인지를 정할 때 사용된다. 기본값은 false이며 레퍼런스 변경 시에만 리스너 함수가 호출된다.

11. $watchCollection(표현식 , 리스너 함수)
    기본적으로 $watch와 같은 기능을 하며 대신 배열이나 객체에 대한 변경을 감지할 때 사용한다. 배열일 경우 새로운 배열 요소가 추가되거나 배열 요소들 사이의 순서가 변경되거나 배열 요소가 삭제될 때마다 리스너 함수가 호출된다. 객체일 경우 속성에 변경이 있을 때마다 리스너 함수가 호출된다.

## watch를 직접 콜해줘야하는 경우

1. 사용자 정의 콜백
2. Third 파트 라이브러리 콜백
3. 네트워크 통신 비동기 콜백

## 스코프 생명 주기

 1. 생성단계 : ng-app 또는 부트 스트랩 API 를 이용해 최초 $rootScope 생성
 2. 감시자 등록 단계 : DOM , code 내역 해석하여 사용하고 있는 속성에 대해 $watch 등록
 3. 모델 변경 감지 단계 : 모델 변경 시, $apply 를 수행해 앵귤러 컨텍스트로 진입
 4. 모델 변경 수행 단계 : 앵큘러 컨텍스트에서 다이제스트 사이클을 통해 등록된 $ watch 목록 전체가 수행돼 변경 여부를 검사, 변경이 있을 시 callback 함수 수행
 5. 스코프 객체 제거 단계 : 자식 스코프 객체가 불필요 시, 자식 스코프 scope.$destory()를 호출하고 자식 스코프 객체를 $watch 목록에서 제거


## 의존성 주입

앵귤러는 다른 모듈의 주입을 받아 사용하기 위해 모듈간의 의존성만 설정하면 언제든 모듈 안에 객체를 주입받아 사용할 수 있다.
앵귤러의 의존성 주입 방식은 3가지가 있다.

1. 함수의 파라미터 주입방식
2. $inject를 사용한 주입 방식
3. 요소의 파라미터에 배열로 의존성 객체를 주입하는 방식.

이 때, 1번째 방식은 minify 를 하면 $scope, $rootScope 같은 이미 정의 된 객체들의 이름이 변하면서 오류가 날 수 있다. 따라서 2,3 번째 방식을 사용하면 좋다.
앵귤러는 이렇게 관심의 분리를 통해 서로의 역할을 분리할 수 있고, 관심의 분리는 컴포넌트화를 가능하게 하고, 단위 테스트를 쉽게 만들어줌으로써 점진적인 개발 및 코드 리팩터링에 수월하다.


## 지시자의 해석

1. HTML을 DOM으로 해석한다.
2. 해석한 DOM에서 지시자를 찾아 우선순위에 따라 지시자 목록에 정렬해 첨부한다. 그리고 지시자의 compile 함수를 수행해 지시자를 적합한 DOM으로 변환하고 지시자에 정의된 link함수를 반환한다.
3. link 함수에 스코프 객체를 주입한 후 1회 호출하면서 '양방향 데이터 바인딩'을 위한 데이터 변경 감시를 위해 콜백 함수를 $digest 사이클에서 수행하도록 $watch 목록에 등록한다.
4. 앵귤러 컨텍스트에 등록된 최종 해석된 DOM을 브라우저에 렌더링한다.

```javascript
// ng-bind 지시자가 포함된 HTML 템플릿
var html = '<div ng-bind="exp"></div>';

// 1 단계) HTML 을 DOM으로 변환
var template = angular.element(html);

// 2 단계) 템플릿 컴파일하기
var linkFn = $compile(template);

// 3 단계) 컴파일된 템플릿과 스코프 객체를 연결
var element = linkFn(scope);

// 4단계) 부모 DOM에 추가
parent.appendChild(element);

```
compile은 지시자 안의 전체 DOM 구조를 해석하는 것이고, link는 스코프와 $watch의 리스너를 등록해 양방향 데이터 바인딩을 연결하는 역할을 한다.

## 지시자의 스코프 객체의 범위 종류

1. scope: false = 부모 스코프를 그대로 주입받음.
2. scope: true = 부모 스코프를 상속한 자식 스코프를 생성. 단 이 때, 자식 스코프에서 상속받은 원시타입 속성을 변경하면 부모 스코프와는 다른 새로운 속성을 만들어 자신한테만 반영한다.
3. scope: {} = 부모와 상관없는 독립적인 스코프를 생성. 지시자를 모듈화해 컴포넌트를 만들 때, 이 방법을 사용한다.

## 독립 스코프의 심볼 문자를 이용한 객체연동

1. @ 단방향 연동 : 부모 스코프 객체 > 자식 스코프 객체 ( text / one-way binding)
2. = 양방향 연동 : 부모 스코프 객체 <-> 자식 스코프 객체 (direct model / two-way binding)
3. & 단방향 메서드 연동: 부모 함수 <- 자식 함수 ( behavior / method binding)

## 앵귤러 코딩 전략

1. 한 파일엔 하나의 컴포넌트만 사용한다.
2. IIFE를 모든 앵귤러 컴포넌트에 활용한다. 콜백을 익명에서 밖으로 꺼내서 내부함수로 사용한다.
3. get,set을 정의할 때, 모듈 객체를 변수에 할당해 사용하지 않는다. 이는 가독성을 높여주고 모듈 변수의 충돌을 방지할 수 있다.
4. 도메인 요건에 부합하는 적절한 이름의 함수를 사용하고 $scope에 바인딩 되는 변수나 함수는 컴포넌트 정의 맨 위에 놓는다.
5. 컨트롤러는 화면의 이벤트 처리를 담당하고 업무 로직은 앵귤러 서비스로 정의하며 해당 서비스를 컨트롤러에서 주입받아 사용한다.
6. 컨트롤러에서는 $scope.vm = {}와 같이 자바스크립트 객체 리터럴을 사용해 앵귤러 스코프 객체에 바인딩 내역을 처리한다.
  

 '''
 참고
 1. angularJS 시작하기, 위키북스, 2013
 2. 실전 프로젝트로 배우는 AngularJS, 윤영식 지음, 위키북스, 2015
 3. AngularJS 반응형 웹앱 개발과 성능 최적화, 아미트 가랏, 마티아스 넬센 지음, 조효성 옮김, 에이콘, 2015
