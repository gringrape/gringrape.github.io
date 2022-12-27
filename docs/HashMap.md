---
slug    : /java/hashMap
title   : 자바 HashMap은 어떻게 구현되어 있을까?
description : 
date    : 2022-12-27 16:02:16 +0900
---

## 주안점
- 사용에 있어서 control 할 수 있는 부분은 어떤 것들이 있는가?
- 해당 부분을 control 했을 때, tradeoff는 무엇인가?

## HashMap의 구현
- 시간 복잡도
  - `get`, `put` 연산에서 상수시간 복잡도를 가짐. 
  - `values` method와 같이 collection view에 대한 iteration의 경우에는 bucket size에 해당하는 시간 복잡도를 가지기 때문에, `load factor`를 너무 낮게 설정하거나, `capacity`를 너무 크게 설정하지 않아야 함. 
- load factor
  - 0.75가 기본값
  - 사용하는 공간과 lookup cost 사이의 trade off. collection view 연산의 경우는 load factor가 작고 공간을 많이 사용하면 느려짐. 
  - 많은 수의 자료를 다룰 거라면, capacity를 넉넉하게 설정하는 것이, 작게 설정해서 rehashing으로 인한 overhead가 일어나게 하는 것보다 낫다. 
- hash collision 해결
  - linked list 이용하는 방식 -> tree로 바뀌는 threshold가 존재함. 
  - bucket을 그대로 이용하는 방식 
  - bucket 자체의 사이즈를 늘리는 메커니즘 존재 -> load factor
- Collection view에 의해서 반환되는 iterator는 fail fast로 설계
  - fail fast iterator란 collection이 iterator를 통하지 않고 수정되었을때, 이를 감지해서 빠르게 예외를 던지며 실패하는 것. 

## 참고
- HashMap 스펙 - https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html
- The Java Programming Language 4/e - 21.2 Iteration - fail fast iterator에 관함.
