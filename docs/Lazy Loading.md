---
slug    : /lazy-loading
title   : Lazy Loading에 대해 알아보자
description : 
date    : 2022-12-29 01:33:20 +0900
---

- Lazy Loading이란?
  - 객체가 실제로 사용될때까지 초기화를 미루는 전략. 
  - 반대 개념은 eager loading이 있다.
- Lazy Loading의 의의
  - 초기화 비용이 큰 경우에 사용. 
  - 초기 시작 속도를 줄이기 위해서 사용. 
- Lazy Laoding의 예시
  - 예를 들어, 웹 페이지의 초기 반응 속도를 높이기 위해 이미지 등을 실제 사용시점에 로드하는 경우가 있을 수 있음. 
  - 서버에서 Lazy Loading이 많이 걸려있는 경우에는 초기화를 위해 주요 URL들을 호출하는 방식 프리로딩을 하기도 함. 

- Lazy inialization 
  - 객체 생성을 실제로 필요할 때까지 늦추는 전략.
  - 잘 쓰이지 않는 객체, 생성 비용이 큰 객체의 경우는 전체적인 초기화 속도를 빠르게 해주는 효과가 있다. 
  - 객체 생성의 임팩트를 시간상으로 넓게 분포시킨(amortized, average) 것으로 이해해도 좋다. 초기화 비용 자체가 넓은 시간 범위로 분산되기 때문에 평균적인 응답속도가 올라가는 효과가 있다. 

- Lazy evaluation 
  - 표현이 실제로 사용될때까지 평가를 늦추는 전략. 
  - 실제로 무한 길이의 선형 데이터 구조를 가능하게 해준다. 
  - 몇개의 데이터에 오류가 있는 경우에도 전체 구조를 허용하게 해준다. 

## 참고
- https://en.wikipedia.org/wiki/Lazy_loading
- 객체의 lazy initialization - https://en.wikipedia.org/wiki/Lazy_initialization
- 지연 평가 lazy evaluation - https://en.wikipedia.org/wiki/Lazy_evaluation

