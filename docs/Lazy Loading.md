---
slug    : /lazy-loading
title   : Lazy Loading에 대해 알아보자
description : 
date    : 2022-12-29 01:33:20 +0900
---

## Lazy Loading이란?
자원의 로딩을 실제로 자원이 필요한 지점까지 늦추는 전략이다. 비동기적 로딩(asynchronous loading)이라고도 불린다.

### Lazy Loading의 의의
웹페이지에서 이미지 로딩을 처리하는데에 활용된다. 초기에 모든 이미지를 로드하지 않으므로 처음 응답속도가 개선되는 효과가 있다. 자원의 초기화를 필요시점까지 늦춰서 초기 속도를 개선시킨다는 아이디어는 매우 보편적인 것으로 다양한 영역에서 활용된다. 

## Lazy initialization
객체 초기화를 이와 같이 지연방식으로 해놓으면, 특정 경로를 테스트 하는 경우와 같이 모든 객체를 사용하지 않을때 초기화 비용이 사라져 속도가 향상 된다. 반면에, 지연 초기화가 기본으로 설정되어 있는 경우에는 초기화 비용을 미리 지불해서 응답속도를 높이기 위해 서버 시작시에 여러 경로에 대한 요청을 해서 프리 로딩을 하는 경우도 있다. 

## Lazy evaluation
표현이 실제로 사용될때까지 평가를 늦추는 전략이다. 지연 평가를 지원한 언어의 경우, 다음과 같은 표현이 주어진다면 해당 경로의 값만 평가한다. 

```
ifThenElse True b c = b
ifThenElse False b c = c
```

지연 평가는 개념적으로 무한 개수의 데이터 구조를 다룰 수 있게 해준다는 장점도 있다. Java에서는 지연평가를 지원하는 Stream을 활용해서 무한 Stream을 표현할 수 있다.

```java
// given
Stream<Integer> infiniteStream = Stream.iterate(0, i -> i + 2);

// when
List<Integer> collect = infiniteStream
  .limit(10)
  .collect(Collectors.toList());

// then
assertEquals(collect, Arrays.asList(0, 2, 4, 6, 8, 10, 12, 14, 16, 18));
```

지연 평가를 지원하는 데이터 구조의 경우에 결과를 얻기위한 종결연산이 존재하며, 종결연산이 실행되는 시점에서야 값에 대한 평가가 이루어진다. 

## 참고
- https://en.wikipedia.org/wiki/Lazy_loading
- 객체의 lazy initialization - https://en.wikipedia.org/wiki/Lazy_initialization
- 지연 평가 lazy evaluation - https://en.wikipedia.org/wiki/Lazy_evaluation

