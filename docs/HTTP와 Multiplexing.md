---
slug    : /http/multiplexing
title   : HTTP에서의 multiflexing
description : 
date    : 2023-01-03 00:17:07 +0900
---

## HTTP/1.1 pipelining
### Persistent connection 
- HTTP/1.1 의 표준은 persistent connection이다. 
- persitent connection은 하나의 연결에 여러번의 요청과 응답을 주고받을 수 있다.
- 명시적 close를 활용해서 연결을 닫을 수 잇다.
### Pipelining
- Pipelining의 의미는 응답을 기다리지 않고 여러개의 응답을 연속해서 보낼 수 있다는 것이다. 
- pipeline이라는 말은 응답을 기다리지 않고 요청을 '연속'(pipeline)해서 보낼 수 있다는 것을 뜻한다.
- 목적: pipelining의 목적은 요청/응답 처리시간 단축에 있다. 응답까지의 대기시간동안 요청을 보낼수 있게 되기 때문에 전체적인 처리 속도가 증가한다.
- 하지만 HTTP/1.1의 한계로 응답이 반드시 요청을 보낸 순대로 도착해야 한다는 제약이 존재한다. 따라서, 요청과 응답을 동시에 생각하면 first in first out이다. 그리고 broadband 연결이 아니다. 
- 많은 HTTP 서버에서 pipelining requests의 처리를 제대로 구현되지 않았고, 따라서 클라이언트도 그에 따라 지원할 수 없게 되었다. 

## HTTP/2 streams
stream으로 인해 broadband multiflexing 이 가능해진다. stream의 정의는 RFC 문서에 다음과 같이 소개되어 있다. 
> A "stream" is an independent, bidirectional sequence of frames exchanged between the client and server within an HTTP/2 connection.

즉, 하나의 stream 내에서 양방형적으로 frame이 이동하게 된다. 하나의 연결에는 여러개의 stream이 동시적으로 열릴 수 있다.(broadband)


## 참고
- HTTP/1.1 pipelining - https://www.rfc-editor.org/rfc/rfc7230
- HTTP/2 Stream - https://www.rfc-editor.org/rfc/rfc7540#section-5
