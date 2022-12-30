---
slug    : /thread-process
title   : Thread와 Process의 차이
description : 
date    : 2022-12-30 22:08:54 +0900
---

- Thread를 사용하는 이유
  - 하나의 프로세스에서 여러개의 프로세서를 동시에 활용할수 있도록 하기 위해서. (병렬 실행해주기 위해서)
  - 프로세스의 작업들 중 I/O와 같은 blocking 작업을 다른 작업과 함께 실행해주기 위해서. 
  - 작업들을 각각 독립적인 스레드에 할당하는 경우, I/O가 일어나는 작업들을 다른 작업들을 overlap 시키는 것이 가능해진다.
  - 병렬실행은 스레드를 이용하는 것 이외에 이벤트 기반으로 하는 방법도 있다. 

- Thread와 Process의 차이
  - Thread는 경량 프로세스라고 불릴 정도로 유사점이 많음. 
  - 첫번째 차이점은 context swithching이 일어날때, Thread의 경우 address space가 바뀌지 않는 다는 점이다.
  - 두번째는 multi thread의 프로세스는 thread 마다 별도의 스택을 가진다는 점이다. 

## 참고
- Operating Systems: Three Easy Pieces, Chapter 26 Concurrency, Chapter 33 Event based concurrency
