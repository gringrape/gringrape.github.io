---
slug    : /container/security 
title   : container의 정체와 보안
description : 
date    : 2022-09-28 07:49:37 +0900
---

## 컨테이너의 정체
컨테이너는 시야가 제한된 리눅스 프로세스이다. 커널은 이름공간, cgroups, 루트 디렉터리 변경이라는 세 가지 메커니즘을 이용해서 프로세스들을 격리한다. 

컨테이너는 가상 머신(Virtual Machine)과는 차이가 있다. 가상 머신의 경우, 운영체제의 복사본을 실행하는 반면에, 컨테이너들끼리는 호스트 컴퓨터의 커널을 공유하는 형태로 실행된다. 

## 참고
- Container Security (O'Reilly) 
