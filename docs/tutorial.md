---
slug    : /chrome-extension/tutorial
title   : 크롬 익스텐션 Hello, world
description : 크롬 익스텐션 튜토리얼
date    : 2022-10-07 16:59:33 +0900
---

## Hello world

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

## 간단한 알람 만들기
### 목표
현재 남은 시간이 배지에 표시되도록 만들고 싶다. 

### ServiceWorker 등록
`manifest.json`:
```
{
	// ...
  "background": {
    "service_worker": "background.js"
  },
	// ...
}
```

### 간단한 타이머
```javascript
class Time {
  constructor({ minute, second }) {
    this.minute = minute;
    this.second = second;
  }

  tick() {
    if (this.minute === 0 && this.second === 0) {
      return this;
    }

    if (this.second === 0) {
      return new Time({
        minute: this.minute - 1,
        second: 59,
      });
    }

    return new Time({
      minute: this.minute,
      second: this.second - 1,
    });
  }

  toString() {
    const minutePart = this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
    const secondPart = this.second < 10 ? `0${this.second}` : `${this.second}`;

    return `${minutePart}:${secondPart}`;
  }
}

const state = {
  time: new Time({
    minute: 3,
    second: 0,
  }),

  setTime(time) {
    this.time = time;
  },
};

function showTime(time) {
  chrome.action.setBadgeText({
    text: time.toString(),
  });
}

chrome.runtime.onInstalled.addListener(() => {
  showTime(state.time.toString());

  setInterval(() => {
    const newTime = state.time.tick();
    state.setTime(
      newTime,
    );
    showTime(newTime.toString());
  }, 1000);
});

```

## 참고
- https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/
- https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/
- https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/
