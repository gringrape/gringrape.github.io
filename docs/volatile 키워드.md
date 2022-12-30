---
slug    : /java/volatile-keyword
title   : 자바에서 volatile 키워드
description : 
date    : 2022-12-30 22:37:45 +0900
---

- volatile 키워드는 원자적 접근을 가능하게 해준다. 
- 원자적 접근은 쪼개질 수 없다. 
- volatile 키워드를 붙이는 것만이 모든 해결을 해주지는 않는다. 메모리 불일치의 문제가 일어날 수 있다. 
- volatile 키워드가 붙은 변수에 대한 쓰기 연산은 연속적인 읽기 연산보다 언제나 먼저 일어나기 때문에, volatile 변수의 변화는 다른 스레드에 대해 가시성이 있다. 

## 참고
- 원자적 접근 - https://docs.oracle.com/javase/tutorial/essential/concurrency/atomic.html
