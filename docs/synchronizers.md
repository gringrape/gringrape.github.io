---
slug    : /concurrent/synchronizers
title   : 동시성 관리 - Synchronizer
description : 
date    : 2023-01-04 10:40:03 +0900
---

## Synchronizer란?
> A synchronizer is any object that can control the flow of threads based on its state. 

추상적으로 정의하면, 핵심은 어떤 상태가 있고 그 상태에 따라서 쓰레드의 흐름을 컨트롤 하는 객체라는 것. 

> All synchronizers share certain structural properties: they encapsulate state that determines whether threads arriving at the synchronizer should be allowed to pass or forced to wait, provides method manipulate state.

상태는 캡슐화 되어서 외부에서 조작할 수 있는 퍼블릭 메서드를 제공한다. 예를 들어, 댐과 같은 걸 상상하면 되겠다. 물을 쓰레드에 비유할 수 있고, 댐 수문의 높이(상태)를 조절해서 유량을 조절하는 것을 상상해 볼 수 있다. 

## Synchronizer의 예시
수기신호라는 의미를 갖는 `Semaphore`가 있다. 자원에 접근 가능한 쓰레드 개수를 미리 할당해놓고, 할당량이 가득차면 더 이상 접근하지 못하도록 통제하는 방식이다. JDBC 커넥션 풀과 같은 것이 대표적인 예시이다. 

이 밖에도 `Latch`, `Barries` 유형이 있다. 

## 참고
- Chapter 5.5, Java Concurrency in Practice 1st Edition by Brian Goetz 
