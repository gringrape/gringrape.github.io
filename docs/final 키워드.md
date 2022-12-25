---
slug    : /java/final-keyword
title   : Java final keyword의 의의
description : 
date    : 2022-12-25 17:39:23 +0900
---

- 기능
  - final 이 붙은 클래스는 확장 할 수 없다.
  - final 이 붙은 메서드는 상속에서 재정의 될 수 없다.
- 의도
  - 원래 정의된 규약을 깨뜨리지 않게 해준다. 
  - 클래스 전체를 final로 규정한다면, 전체 거동이 고정되고, 새로운 기능도 추가할 수 없다.
  - 메서드 단위에 final을 붙이면 해당 메서드는 원래 구현 상세에 안정적으로 의존할 수 있게 된다. class에 붙이는 것과 다르게 기능을 추가할 수 있는 유연성을 확보할 수 있다.
- 성능상의 이점
  - final을 class 단위에 붙였을 때, 알려진 성능상의 이점은 없다.
- 실무 
  - 의도하지 않은 변경을 막는 역할을 한다.
  - final이 붙는 것을 기본으로 하고, 변경되는 경우를 예외로 하는 경우도 많다. 

## 참고
- The Java Programming Language, 4th Edition - https://amazon.com/Java-Programming-Language-4th/dp/0321349806
- final 키워드의 성능상의 이점 - https://www.baeldung.com/java-final-performance
