---
slug    : /network/tcp-udp
title   : TCP와 UDP 
description : 
date    : 2023-01-06 14:49:25 +0900
---

## 규약에 대해서 먼저 생각해보자
내가 알고 있는 protocol의 의미는 set of rules이다. 통신 규약이라면 통신을 하는데 필요한 약속들의 모음집이다. 여러가지 규약들이 존재하고 규약마다 이름이 붙어있다. 이걸 보면 법 조항의 이름을 떠올리게 된다. 장애인 차별 금지법, 이것은 장애인 차별을 막기 위한 목적으로 제정된 일련의 법조항들의 묶음일 것이다. 

즉, 규약마다 규칙들을 묶어주는 경계와 목적이 존재할 것 같다. 그 중에서도 목적에 집중하려고 한다. 그것이 가장 핵심적인 가치이고, 다른 것들을 설명하는 기준이 되기 때문이다. 

## UDP의 목적
RFC 768의 원문은 이렇다. 

> This protocol  provides  a procedure  for application  programs  to send
messages  to other programs  with a minimum  of protocol mechanism.  The
protocol  is transaction oriented, and delivery and duplicate protection
are not guaranteed.

목적 자체의 방점은 최소한의 전송 메커니즘을 활용해서 전달하겠다는 것이다. 배달사고나 중복에 대해서는 책임지지 않는다는 것이다. 이것을 `transaction oriented`protocol 이라는 이름으로 부르고 있다. 

## TCP 
TCP의 표준도 찾아보자. 
> The Transmission Control Protocol (TCP) is intended for use as a highly
reliable host-to-host protocol between hosts in packet-switched computer
communication networks, and in interconnected systems of such networks.

이미 알고 있는 대로, 신뢰할 수 있는 연결을 목적으로 하는 프로토콜임을 알 수 있다. Motivation에서는 `connection oriented`라는 단어로 정리하고 있다.

## 참고
- RFC 768, UDP - https://www.rfc-editor.org/rfc/rfc768
- RFC 793, TCP - https://www.ietf.org/rfc/rfc793.txt
