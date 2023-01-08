---
slug    : /concurrency/cas
title   : Compare and swap 알고리즘
description : 
date    : 2023-01-03 12:00:05 +0900
---

## Non blocking synchronization의 필요성
## 락의 기본개념
락으로 보호하는 객체에 대한 접근을 한번에 하나의 스레드로 제한하는 것. 락을 획득하여 수행한 모든 결과가 이후에 동일한 락을 얻은 스레드에 코드에 의도된 순서대로 보이는 기능이 있다. 

## 락 방식의 단점
- 활동성 장애가 생길 수 있다. 
- 경쟁적으로 락을 획득하는 상황에서 다른 스레드를 중지시키는 것에 대한 비용이 크다.
- 한번에 하나의 스레드만 해당 연산을 수행할 수 있기 때문에, 성능적 문제가 있다. 

## CAS(Comaper and swap) 알고리즘
값을 1씩 증가시키는 카운터를 예시로 들어보자.

```java
class Counter {
  private int count = 0;
  
  public int increment() {
    count = count + 1;
    return count;
  }
}

```

여러개의 스레드가 한번에 Counter 객체의 increment 를 사용하게 된다면, count를 읽고 다시 쓰는 연산은 원자적이지 않기 때문에 동일한 값으로 업데이트 되는 등의 문제가 발생한다. 

### 락 - 비관적 동시성 제어
`synchronized` 키워드를 이용해서 한번에 하나의 스레드가 이 객체의 락을 획득하도록 하는 방법이 있을 수 있다.

```java
class Counter {
  private int count = 0;

  public synchronized int increment() {
    count = count + 1;
    return count;
  }
}

```

락을 사용하면 count 연산의 원자성이 확보가 되어서 동시성 문제가 해결된다. 하지만 활동성 장애와 퍼포먼스의 문제가 발생할 수 있다. 

### 낙관적 제어
CAS를 이용해서 낙관적인 방식으로 진행할 수도 있다. 낙관적 제어의 핵심은 접근은 허용하되 문제가 생길경우 작업을 취소하는 `error detection`을 갖추고 있는 것이다. CAS 알고리즘의 경우 비교(compare)하는 대상과 같을 경우에만 작업(swap)이 이루어지고, 그렇지 않은 경우 실패한다. 비교 연산이 `error detection` 역할을 한다.

구체적 적용 코드는 다음과 같다. 

```java
class Counter {
  private CAS count;
  
  public int getValue() {
    return count.get();
  }

  public int increment() {
    int v;
    
    do {
      v = getValue();  
    } while(v != count.compareAndSwap(v, v + 1));
    
    return count;
  }
}

```
값 업데이트에 실패한 스레드는 락 획득에 실패한 스레드와 같이 배제(blocking)되거나 락을 재획득할때까지대기(suspend)하지 않는다. 다시 시도할 수 있고, 다른 작업을 할 수 도 있다. 코드 예시와 같은 경우는 값을 다시 읽어와서 다시 업데이트를 시도하는 것을 볼 수 있다.  

## Java - AtomicInteger
원자적인 업데이트를 지원하는 클래스이다. 주요 인터페이스 중에서 `compareAndSet`을 살펴보면 CAS 알고리즘을 사용하는 것을 알 수 있다. 유사한 클래스들을 `java.util.concurrent.atomic` 패키지에서 찾아볼 수 있다.

> compareAndSet(int expect, int update)
> Atomically sets the value to the given updated value if the current value == the expected value.


## 출처
- Java Concurrency In Practice, Brian Goetz
- https://howtodoinjava.com/java/multi-threading/compare-and-swap-cas-algorithm/
- AtomicInteger - https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/atomic/AtomicInteger.html#weakCompareAndSet-int-int-
