---
slug    : /container/security
title   : Container 격리 
description : 컨테이너 보안 내용 정리
date    : 2022-10-15 00:10:32 +0900
---

# 목차
- 주요 리눅스 메커니즘
- 이름 공간
- chroot
- cgroups

## 주요 리눅스 메커니즘
컨테이너는 호스트와 격리된 상태로 작동한다. 컨테이너는 자신만의 네트워크 스택과파일 시스템을 갖고 있고, 사용가능한 자원도 제한되어 있다.

이런 기능들은 리눅스의 메커니즘들로 이루어진다. 그것들은 이름공간, chroot, cgroups 이다. 

## 이름공간
이름공간은 프로세스가 볼 수 있는 것들을 제한한다. 이름공간에 프로세스를 할당하면, 할당된 프로세스에서는 이름공간에서 정의된 것만을 볼 수 있게 된다. 

네트워크 이름공간을 이용하면 컨테이너가 볼 수 있는 네트워크 인터페이스들과 라우팅 테이블을 설정할 수 있다. 

## chroot
컨테이너에서 볼 수 있는 호스트의 파일 시스템 범위를 제한 할 수 있다. 리눅스의 메커니즘 중 `chroot`를 이용하면, 프로세스의 루트 디렉토리를 변경 할 수 있게 된다. 컨테이너의 루트 디렉토리를 변경해서, 그 이상을 볼 수 없게 제한 할 수 있다. 

## cgroups
`cgroups`의 기능은 프로세스가 사용가능한 자원을 제한하는 것이다. 자원제한 규칙을 group 단위로 지정하는 것이 특징이다. 이 group에 속한 프로세스들에는 동일한 자원 제한 규칙이 적용된다. 

## 실습 참고
- Containers from scratch, Liz Rice - https://www.youtube.com/watch?v=8fi7uSYlOdc
- Containers from scratch, GitHub repository - https://github.com/lizrice/containers-from-scratch

## 실습
- https://github.com/gringrape/coding-life/pull/20
