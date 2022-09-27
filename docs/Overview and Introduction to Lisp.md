---
slug    : /sicp/1986-lecture-01 
title   : Overview and introduction to Lisp
description : 개론 및 Lisp 언어의 소개
date    : 2022-09-27 18:44:33 +0900
---

# 주제
- 이 강의에서 배우는 것 - computer science? -> procedure
- 복잡성을 다루는 기술
- 컴퓨터 언어를 이해하는 프레임워크
- Lisp 언어의 기본
- 재귀적 정의 - SQRT

## 이 강의에서 배우는 것
### Computer에 관한 것이 아니다
물리학이 곧 입자가속기가 아니 듯이.  
화학이 곧 피펫이나 비커가 아니 듯이.  

배워야 할 것도 도구 그 자체라고 할 수 없다.  

## 복잡성을 다루는 기술
복잡한 절차들을 어떻게 다룰 것인가?

### black box
내부작용을 몰라도 사용할 수 있다.

### conventional interface 
외부와 효과적으로 상호작용할 수 있는 인터페이스를 만든다.

### metalinguistic ~~
DSL과 같은 언어 요소를 정의한다. (잘 이해했는지 추가적으로 조사)

## 컴퓨터 언어를 이해하는 프레임워크
### Primitive element
가장 기본이 되는 요소가 무엇인지 파악한다. 
### Means of Combination
기본이 되는 요소들을 어떻게 조합할 수 있는지 파악한다.
### Means of Abstraction
combination 들을 어떻게 추상화해서 복잡한 것을 표현할 수 있는지 파악한다. 

## Lisp 언어의 기본
### Combination
- (* 5 5) -> parenthesis, operator, operands
### Abstraction
- (DEFINE A (* 5 5))
### Abstraction of procedure
- (DEFINE (times5 x) (* 5 x))

## 재귀적 정의
`for` 와 `while` 같이 반복을 처리하는 도구가 없어도 될까?  
그런 도구들이 필수적이지는 않다. 그리고 이 강의에서는 사용하지 않을 예정이다.  

SQRT 를 구하는 과정의 예를 들어보자.  
- 추측값을 정한다. 
- 추측이 충분히 정확한 경우, 값을 반환한다. 
- 추측이 충분히 정확하지 않은 경우-> 추측을 개선한다.
	- 값을 추측값으로 나눈다. 
	- 추측값과 위의 값의 평균을 새로운 추측으로 사용한다. (그림을 그려서 수렴하는지 확인하자.)
