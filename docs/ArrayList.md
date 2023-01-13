---
slug    : /java/arraylist
title   : Java의 ArrayList
description : 
date    : 2022-12-27 22:06:06 +0900
---

## Amortized constant 시간복잡도

### 상세한 스펙 이야기

`ArrayList`는 내부적으로 배열을 이용해 구현된다. 원소가 배열에 차게 되면 배열의 크기를 늘린 새로운 배열을 생성하게 되고, 이 배열에 원소를 복사하는 방식으로 용량을 확장하게 된다. 

구현체를 참고해보자. OpenJDK 19 기준이다. 

```java
public void add(int index, E element) {
    rangeCheckForAdd(index);
    modCount++;
    final int s;
    Object[] elementData;
    if ((s = size) == (elementData = this.elementData).length)
        elementData = grow();
    System.arraycopy(elementData, index,
                     elementData, index + 1,
                     s - index);
    elementData[index] = element;
    size = s + 1;
}

```

내부적으로 `elementData`를 저장용 배열로 사용하고 있으며, 크기는 `size`로 따로 추적하고 있다. 

핵심은 크기 증가 로직이다. `elementData`가 가득찬 경우 새로운 배열을 생성해서 대입해주고 있다. `grow` 메서드에서 핵심적인 것은 새롭게 생성할 배열의 크기를 결정하는 부분이다. 

```java
private Object[] grow(int minCapacity) {
    int oldCapacity = elementData.length;
    if (oldCapacity > 0 || elementData != DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
        int newCapacity = ArraysSupport.newLength(oldCapacity,
                minCapacity - oldCapacity, /* minimum growth */
                oldCapacity >> 1           /* preferred growth */);
        return elementData = Arrays.copyOf(elementData, newCapacity);
    } else {
        return elementData = new Object[Math.max(DEFAULT_CAPACITY, minCapacity)];
    }
}
```

새로운 원소를 넣기 위해 증가시켜야할 크기와 기존 크기의 두배 크기를 고려하여 새로운 크기를 설정하고 있다. 새로운 크기의 배열을 만들고 그 곳에 기존 원소를 모두 복사하고 있다.

### amortized constant 의 의미

lazy initialization의 전략과 유사하다. 불필요한 초기화 보다 초기화 비용을 시간에 따라 분배하는 정책을 취한다. 쉽게 이야기하는 경우에는 필요할때 만든다라고 할 수 있겠다.

배열 크기를 증가 시킬때는 새로운 배열의 생성 및 원소 복사라는 큰 비용이 발생하지만, 크기 증가 연산은 원소가 가득 찼을 경우에만 일어나는 것이다. 따라서, 원소 개수로 비용을 나누어 보면 평균적으로 시간복잡도는 데이터 개수와 비례하지 않는 O(1) 임을 알 수 있다.

### 추가적인 최적화

필요한 원소의 개수가 많고, 확정적인 경우라면 굳이 단계적으로 크기를 늘려나갈 필요가 없다. 이 경우에 사용하기 위해서, `ensureCapacity`라는 메서드를 스펙에서 규정하고 있다.
  
## 참고
- ArrayList Specification - https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/util/ArrayList.html
