---
slug    : /java/monetary
title   : 자바에서 화폐 계산은 어떻게 해야 할까?
description : 
date    : 2022-12-27 17:19:18 +0900
---

- float, double은 문제가 있음. 
  - 0.1 과 같은 수에 대해 정확한 이진 표현이 불가능함.
  - 반올림 처리를 통해서 해결할 수 있으나 여러번의 연산이 이뤄지는 상황에서는 사실상 정확성을 보장하기 힘들어짐. 
- BigDecimal 
  - 정확성을 보장해준다는 장점이 있음.
  - 사용하기 불편하고 퍼포먼스상의 단점이 존재함. 
- int, long
  - 대안으로 int, long을 사용할 수 있음. 
  - 단 유효숫자 이외에 소수점이 어디에 위치하는지는 추적하는 코드가 필요함. 
  - BigDecimal에 비해서 정확성은 떨어지나 사용하기 편하고, 퍼포먼스상의 이점이 있음.
  - int의 경우 유효숫자의 개수를 9개, long의 경우 18개 사용가능. 
- JSR 354 https://download.oracle.com/otn-pub/jcp/money_currency-1_0-fr-spec/JavaMoney_Specification_1.0-final.pdf?AuthParam=1672145163_40361b8a4976b56a126a2573189a6636

