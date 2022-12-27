---
slug    : /java/arraylist
title   : Java의 ArrayList
description : 
date    : 2022-12-27 22:06:06 +0900
---

- Resizable Array 를 통해서 List 인터페이스를 구현한 구현체.
- capacity를 지정할 수 있음. 
- 대량의 데이터를 넣는 경우에 미리 공간을 `ensureCapacity`를 통해서 공간확보를 할 수 있음. 이를 통해서 점진적인 공간확보와 복사에 걸리는 연산을 단축시킬 수 있음. 
- `add` 연산의 경우 시간 복잡도가 amortized constant. Resizing을 하면서 걸리는 시간을 포함해서 평균적인 시간복잡도가 상수인 것을 의미. 
  
## 참고
- ArrayList Specification - https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/util/ArrayList.html
