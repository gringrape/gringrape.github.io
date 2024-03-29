---
slug    : /java/volatile-keyword
title   : 자바에서 volatile 키워드
description : 
date    : 2022-12-30 22:37:45 +0900
---

## Thread Safe의 의미
- Thread Safe하면 등장하는 것이 락, synchronized와 같은 것들이다. 하지만, 이것들은 메커니즘일 뿐 본질적인 문제 그 자체에 대해서 말해주지 않는다. 
- 본질적인 문제는 공유되고(shared), 가변적인(mutable) 상태 자체에 있다. 그리고 이 상태에 동시에 여러개의 접근이 이루어지는 상황에 있다.
- 그러므로, 스레드 안전성을 추구하는 방법은 단순해질 수 있다. 공유하지 않거나, 변하지 않는 데이터를 사용하거나(불변), 공유할 거라면 적절하게 조율 (synchronization) 할 것. 말로만 들어서는 단순하다. 

## volatile
- volatile 키워드는 동시성 문제중에서 가시성 문제를 해결하기 위한 메커니즘이다. 
- 가시성 문제란 하나의 스레드에서 일어난 update가 다른 스레드에서 행하는 read에 의해 보일지를 확신 할 수 없다는 문제이다. 보일수도 있고 안보일 수 도 있다.
- volatile은 visibility를 보장한다. 하지만 여러개의 state가 연관된 compound action의 원자적 연산을 보장하지는 못한다. 
- visibility가 어떤식으로 해결되는지에 대해 자세히 살펴보자. 먼저, 하나의 스레드에서 일어난 상태 변경이 다른 스레드에 전파되지 않는 경우를 생각해보자. 이 경우에 다른 스레드에서 참조하는 값은 fresh data가 아닌 stale data이다. id를 auto increment 방식으로 생성하는 경우를 생각해보면 이것이 유일성을 해치는 문제가 될 수 있음을 알 수 있다. 
- volatile 키워드가 붙은 변수에 대한 쓰기 연산은 연속적인 읽기 연산보다 언제나 먼저 일어나기 때문에, volatile 변수의 변화는 다른 스레드에 대해 가시성이 있다. 

## CAS 알고리즘
- non-blocking synchronization을 위해 사용되는 hardware mechanism 중의 하나이다. 
- 약자는 Compare and Swap으로 변경하고자 하는 state의 값이 기대하는 값과 같은 경우에 동작하는 메커니즘이다. 
- lock을 사용하지 않는 메커니즘으로 구현상의 복잡성이 있지만 finegrained synchronization에서 lock에 비해 무겁지 않은 메커니즘을 제공하는 등의 장점이 있다. 

## 참고
- 가시성에 대한 이해 - Java Concurrency In Practice, Brian Goetz
- 원자적 접근 - https://docs.oracle.com/javase/tutorial/essential/concurrency/atomic.html
