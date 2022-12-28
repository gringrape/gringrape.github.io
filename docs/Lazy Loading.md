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
- Lazy Loading의 구현 예시

## 참고
- https://en.wikipedia.org/wiki/Lazy_loading
