---
slug    : /network/load-balancing
title   : Load balancing에 대해 알아보자
description : 
date    : 2023-01-19 10:49:05 +0900
---

## OSI 7계층 로드밸런싱
로드 밸런싱은 OSI 계층 중 여러 층위에서 실행 될 수 있다. 4계층, 7계층에서 수행되는데, 핵심적인 차이는 메시지의 검사여부다.

메시지 내용을 검사해서 요청과 가장 적합한 곳으로 보내는 것이다. 예를들어, 멀티미디어 컨텐츠를 제공하는 서버 군에서 동영상 요청이 들어오는 경우, 임의로 보내기보다 해당 요청을 가장 잘 처리할 수 있도록 최적화 된 곳으로 보낼 수 있게 된다. 

HTTP 메시지를 해석하고 내용에 따라 라우팅하는 비용을 로드밸런서에서 부담하게 된다. 이 비용과 라우팅으로 인한 이득을 비교해야 할 것이다. Nginx 문서에서는 큰 성능저하가 관찰되지 않는다고 나온다. 

> Layer 7 load balancing is more CPU‑intensive than packet‑based Layer 4 load balancing, but rarely causes degraded performance on a modern server. 
https://www.nginx.com/resources/glossary/layer-7-load-balancing/

## 참고
- 4계층 - [https://www.nginx.com/resources/glossary/layer-4-load-balancing/](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)
- 7계층 - [https://www.nginx.com/resources/glossary/layer-7-load-balancing/](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)
- 기본적인 기능 이외에 벤더에 따라 어떤 추가기능을 제공하고 있는지 - [https://en.wikipedia.org/wiki/Load_balancing_(computing)](https://en.wikipedia.org/wiki/Load_balancing_(computing))
