---
slug    : /clean-code/args-example
title   : 클린코드- Args 예제
description : Command-line의 인수 분석기를 만들어보자
date    : 2022-10-14 13:58:40 +0900
---

## 목표
> 인수분석기의 리팩토링과정을 관찰하며 변경의 이유를 배우자. 

리팩토링 과정을 관찰하기 위해서는 TDD로 진행하는 것이 필요하다. 

하지만, 책에는 테스트까지 실려있지는 않다. 다음 저장소에서 해당 내용을 참고 할 수 있도록 하자. 

https://github.com/ludwiggj/CleanCode

## 초안
Boolean 인수를 처리하는 초안을 만들기. 

### 하나의 인수를 입력
인수를 설정했을 경우와 하지 않았을 경우의 테스트를 작성할 수 있다.

`ArgsTest.java`:
```java
@Test
void singleBooleanArgumentSet() {
    Args args = new Args("x", new String[]{"-x"});
    assertThat(args.getBoolean('x')).isTrue();
}

@Test
void singleBooleanArgumentUnset() {
    Args args = new Args("x", new String[]{""});
    assertThat(args.getBoolean('x')).isFalse();
}

```

구현에서는 스키마와 인수목록을 입력받아 각각을 해석하는 것이 큰 흐름이다.

`Args.java`:
```java
public Args(String schema, String[] args) {
    booleanArgs = new HashMap<>();

    this.schema = schema;
    this.args = args;

    parse();
}

private void parse() {
    parseSchema();
    parseArguments();
}
```

여러 인수들에 대한 테스트도 추가해주자. 이 때, cardinality 개념도 이용할 수 있는데, 이것은 수학적으로 원소의 개수를 뜻하는 개념이다. 

https://en.wikipedia.org/wiki/Cardinality

`ArgsTest.java`:
```java
@Test
void multipleBooleanArguments() {
    Args args = new Args("x,y,z", new String[]{"-xy"});

    assertThat(args.getBoolean('x')).isTrue();
    assertThat(args.getBoolean('y')).isTrue();
    assertThat(args.getBoolean('z')).isFalse();

    assertThat(args.cardinality()).isEqualTo(3);
}
```

구현은 다음과 같이 해줄 수 있다. `cardinality`는 개념적으로 총 인수의 개수를 나타내지만 현재는 boolean 타입의 인수만을 지원하므로, 다음과 같이 작성하도록 한다.  

`Args.java`:
```java
public int cardinality() {
    return booleanArgs.size();
}
```

이제 오류인 경우를 추가해보자. 오류의 유형과 처리 방법을 결정해야 한다.
책에서는 오류 유형을 다음과 같이 정의했다.

> 기대하지 않은 인수가 입력되었다. 

기대하지 않았다는 것은 해당 인수가 스키마에 정의되어있지 않다는 뜻이다. 
다음과 같은 테스트를 작성할 수 있다. 

```java
@Test
void validArguments() {
    Args args = new Args("x", new String[]{"-x"});

    assertThat(args.isValid()).isTrue();

    assertThat(args.errorMessage()).isEqualTo("");
}

@Test
void invalidArguments() {
    Args args = new Args("", new String[]{"-xy"});

    assertThat(args.isValid()).isFalse();

    assertThat(args.errorMessage()).isEqualTo("Argument(s) -xy unexpected.");
}

```

구현은 다음과 같이 해 줄수 있다. 기대하지 않은 인수를 포함해서 오류메시지를 작성한다. 

```java
public String errorMessage() {
    if (unexpectedArguments.isEmpty()) {
        return "";
    }

    StringBuilder arguments = new StringBuilder();
    for (char unexpectedArgument : unexpectedArguments) {
        arguments.append(unexpectedArgument);
    }
    return "Argument(s) -" + arguments + " unexpected.";
}

```

## 코드
### Boolean 인수 분석 초안
https://github.com/gringrape/coding-life/tree/main/20221014/clean-code-args-example
