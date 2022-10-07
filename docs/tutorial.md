---
slug    : /chrome-extension/tutorial
title   : 크롬 익스텐션 Hello, world
description : 크롬 익스텐션 튜토리얼
date    : 2022-10-07 16:59:33 +0900
---

아래와 같은 `manifest.json` 파일을 추가한다. 
예제에서는 익스텐션에 간단한 팝업을 추가할 예정이기 때문에, 
팝업에 대한 html 문서를 추가해준다. 

```json
{
  "manifest_version": 3,
  "name": "Hello Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "action": {
    "default_popup": "hello.html"
  }
}
```

`manifest`의 기능을 간단하게 알아보자. 
> The manifest records important metadata, defines resources, declares permissions, and identifies which files to run in the background and on the page.

중요한 메타데이터, 권한 설정, 백그라운드에서 실행될 파일 등을 설정해 줄 수 있다.  

팝업으로 등록되어 있는 html 파일을 수정해준다. 

`hello.html`:
```html 
<html>
  <body>
    <h1>Hello Extensions</h1>
  </body>
</html>
```

## 참고
- https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/
- https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/

