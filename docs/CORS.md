---
slug    : /network/cors
title   : 교차 출처 자원 공유 (CORS)
description : 
date    : 2023-01-16 03:35:45 +0900
---

## 서로 다른 출처
핵심적 상황은 Cross-Origin 요청이다. CORS는 하나의 출처에서 요청과 응답이 이루어진 상황에서 다른 도메인으로 요청이 일어난다고 할 때, 이것을 허용할지 판단하는 정책이다. 

메커니즘은 preflight-request를 이용한다. 브라우저는 현재 출처에 새로운 요청이 신뢰 가능한지를 묻는다. 신뢰할 수 없는 경우라면 연결을 지속하지 않는다. 

preflight-request의 구성을 살펴보면 좋다.

### Preflight request
의미는 비행전 확인 요청이라는 뜻이다. `OPTION`메서드를 이용한다. `OPTION`은 통신의 여러가지 옵션을 확인하는 용도로 쓰이며,  응답은 기본적으로 non-cacheable이다.

## Same origin policy
`Alloy`를 사용해 SOP의 이해를 돕는 글이 소개되어 있다. 
https://github.com/aosabook/500lines/tree/master/same-origin-policy
책은 `500 lines or less`

## 참고
- OPTION method - https://www.rfc-editor.org/rfc/rfc2616#section-9.2
- https://github.com/aosabook/500lines/tree/master/same-origin-policy

