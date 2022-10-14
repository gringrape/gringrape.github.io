---
slug    : /sicp/lecture-1b
title   : Procedures and Processes; Substitution model
description : SICP 강의 정리. 2탄
date    : 2022-10-14 23:21:59 +0900
---

## 마술을 조합하자
개발자가 하는 일은 Procedure 를 설계하는 일이다. 설계란, 구성요소들을 생각하고 배치하는 활동을 말한다. Procedure 의 구성요소는 무엇일까? 구성요소는 바로 Spell 이다. 즉, 특정한 커맨드이다.

## Substitution rule 
Spell 을 하위 수준의 Spell 로 번역할 수 있다. 이 과정을 Substituion 이라고 한다. 언제까지 대체 해야 할까? 그 한계는 우리가 알 필요가 있는 것 까지라고 할 수 있다. 흔히 기본적인 구성요소라고 불리는 primitive 타입도 그 경계가 될 수 있을 것이다.

## Iteration vs Recursion
동일한 기능을 하는 두개의 덧셈 procedure 예시. 하지만, 어떻게 구성하느냐에 따라서 완전히 다른 형식으로 동작한다. iterative process 혹은 recursive process 로. 
