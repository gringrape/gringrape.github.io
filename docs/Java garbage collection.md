---
slug    : /java/garbage-collection
title   : 자바에서 가비지 컬렉션은 어떻게 동작하는가?
description : 
date    : 2022-12-17 18:59:06 +0900
---

# 목차
- 가비지 컬렉션의 목적
- Mark - Sweep - Compaction
- Heap 메모리 영역 구분

## 가비지 컬렉션의 목적
> garbage collection (GC) is a form of automatic memory management. The garbage collector attempts to reclaim memory which was allocated by the program, but is no longer referenced; such memory is called garbage.

가비지 컬렉션은 자동화된 메모리 관리의 방법이다. 가비지 컬렉터는, 프로그램에 의해 할당되었지만, 더이상 사용하지 않는 메모리 영역을 회수한다. 

> Garbage collection relieves the programmer from doing manual memory management, where the programmer specifies what objects to de-allocate and return to the memory system and when to do so.

가비지 컬렉션의 의의는 프로그래머가 직접 메모리를 관리하는 부담에서 벗어나게 하고 그로 인해 퍼포먼스의 향상에도 기여하는 것이다. 

## Mark - Sweep - Compaction
### mark 
> The first stage is the mark stage which does a tree traversal of the entire 'root set' and marks each object that is pointed to by a root as being 'in-use'. All objects that those objects point to, and so on, are marked as well, so that every object that is reachable via the root set is marked.

`mark`는`root set`으로 부터 도달가능한 모든 객체를 사용 중이라고 표시하는 과정이다. 

### sweep
> In the second stage, the sweep stage, all memory is scanned from start to finish, examining all free or used blocks; those not marked as being 'in-use' are not reachable by any roots, and their memory is freed. For objects which were marked in-use, the in-use flag is cleared, preparing for the next cycle.

sweep 과정에서는 메모리 전역을 스캔하며, 사용 중으로 표시되지 않은 블록을 해제한다. 

### compaction
`sweep` 과정을 거친 후에 heap 메모리 영역은 파편화된다. 파편화의 문제점은 사용가능 한 공간이 작은 크기의 공간들로 나누어져 있어서, 일정 크기보다 작은 공간들은 버려지게 된다는 것이다. 이것을 막기 위해서 사용 중인 영역을 하나로 모으는 `compaction` 과정이 이뤄진다. 

## Heap 영역의 구성
### Young and Old 
`Young`과 `Old`로 메모리 영역을 나누어 놓는 설계에는 두가지 장점이 존재한다. 첫번째는, 가비지 컬렉션 속도이다. 전체 영역을 대상으로 할때와 비교해서, 다루는 공간의 크기가 훨씬 작아지기 때문에 더 빠른 속도로 연산을 할 수 있게 된다. 하지만, 여기에는 트레이드 오프가 존재한다. 영역이 작다는 말은 더 빠른속도로 공간이 가득 찬다는 뜻이기 때문에, 더욱 빈번하게 가비지 컬렉션을 해주어야 한다는 말이 된다. 가비지 컬렉션은 `stop the world` 연산이므로, 최대한 빠르게 수행하는 것이 전체적으로 이득이 된다. 

두번째 장점은, 영역이 바뀌는 과정에서 자연스럽게 `compaction`이 일어난다는 것이다. 살아남은 객체들은 다음 메모리 공간으로 복사되기 때문에 이 과정에서 파편화가 제거되게 된다. 

### Young generation 
Young generation 영역을 이해하기 위해서는 `minor GC`가 이루어지는 메커니즘을 알아야한다. `Young generation`은 `eden` 영역과 두개의 `survivor`영역으로 나누어지게 되는데, `survivor` 영역들의 역할은 `from` 과 `to`로 구분된다. `eden` 영역이 꽉 차면, `minor GC`가 이루어지고, `eden` 영역과 `from`의 객체 들 중 살아있는 것들이, 비어있는 `to` 영역으로 이동하게 된다. 다음번 GC에서는 `from`과 `to`의 역할을 교대하게 된다. 이런 과정을 몇 번 거쳐서 충분히 성숙한 객체들만이 `old` 영역에 도달하게 된다. 

이 과정에서도 복사는 항상 빈 영역에 이루어지게 되므로, `compaction`이 자동으로 이루어지게 되는 것을 확인해 볼 수 있다. 

## 참고
- 기본적인 알고리즘 - https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)
- Heap 영역의 구성 - Java Performance The Definitive Guide - 
- Young generation 영역의 구성 - https://plumbr.io/handbook/garbage-collection-in-java

