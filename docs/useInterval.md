---
slug    : useinterval
title   : useInterval
description   : side effect를 이해하고 setInterval을 보다 선언적으로 만들기
date    : 2022-09-23 07:35:09 +0900
---

## side effect란?

> In computer science, an operation, function or expression is said to have a side effect if it modifies some state variable value(s) outside its local environment, which is to say if it has any observable effect other than its primary effect of returning a value to the invoker of the operation.

함수의 주된 작용(primary effect)은 결과값을 계산해서 호출자에게 반환하는 것이다.
만약, 함수가 실행될때 외부의 환경을 조작한다면, 이 함수는 side effect가 있다고 말한다. 

## React component에서의 side effect 

React의 함수형 컴포넌트는 `props`와 `state`를 이용해서, React element를 반환하는 것이 주된 작용이다. 이외에 외부 상태를 변경하는 작용들은 모두 부가 작용 (side effect) 라고 할 수 있다.

> Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.

Data fetching 이나 구독 설정, 수동으로 DOM을 조작하는 행위는 모두 side effect의 예시이다.

```javascript
import { useEffect } from 'react';

function Greet({ name }) {
  const message = `Hello, ${name}!`;
	
  useEffect(() => {
    document.title = `Greetings to ${name}`; // Side-effect!
  }, [name]);
	
  return <div>{message}</div>;         // Calculates output (Primary effect)
}
```
useEffect내에서 DOM을 직접 조작하는 행위를 하고 있다.

## setInterval을 활용하기
숫자가 1씩 올라가는 Counter를 예시로 만들어보자.
다음과 같이 초기화면을 생각해 볼 수 있다.
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  return <h1>{count}</h1>;
}
```
1초마다 count가 변화하게 하고 싶다면, 이것은 side effect에 해당한다.  
따라서, useEffect를 활용하고 콜백함수에 setInterval을 사용하자.

```javascript
function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  });

  return <h1>{count}</h1>;
}
```
이 경우 한가지 문제가 있다. useEffect는 컴포넌트가 렌더링 될때마다 실행되므로, setInterval 등록이 계속해서 일어나고 해제 되지 않는다. 즉, 메모리 누수가 발생하게 된다. 
등록한 interval 효과를 해제하는 로직을 추가해 주자.

```javascript
function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id); // cleanup
  });

  return <h1>{count}</h1>;
}
```
## 이상동작 1. 렌더링 주기가 interval 보다 짧은 경우 효과 실행 안됨.
useEffect는 렌더링마다 실행된다. 만약 렌더링 주기가 interval보다 짧다면 어떻게 될까?
이 경우 interval 효과에 의해 count가 증가하기도 전에 clearInterval이 실행된다. 따라서 효과 자체가 발생하지 않는 버그가 일어난다. 

렌더링 주기를 interval(1 s) 보다 짧은 100 ms로 설정해서 버그를 재현해볼 수 있다.

```javascript
setInterval(() => {
  ReactDOM.render(<Counter />, rootElement);
}, 100);
```

## 이상동작 2. count값 고정 현상.
useEffect가 렌더링 마다 실행되도록 하면 위와같은 이상동작이 생기므로,   
최초에 한번만 setInterval로 효과를 등록하고 컴포넌트 해제시에 효과도 같이 해제 하도록 
만들어 줄 수 있다. useEffect의 dependency array를 조정해 주자.

```javascript
function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1); // 콜백은 항상 같은 count 값을 참조한다.
    }, 1000);
    return () => clearInterval(id);
  }, []);  // mount 될때만 실행되도록.

  return <h1>{count}</h1>;
}
```
하지만, 이 경우에는 또다른 문제가 생긴다. setInterval의 콜백은 closure 효과에 의해 
콜백이 선언될때의 count값(즉, 0)을 항상 참조하게 된다. 
따라서, 화면의 숫자는 업데이트 되지 않는다. 

## 대안. setInterval의 콜백 함수를 렌더링마다 선언(업데이트).
closure 효과를 피하기 위해서, 콜백 함수 선언을 useEffect 밖으로 가져와서  
렌더링마다 다시 선언될 수 있도록 만들 수 있다. 이렇게 하면 콜백은 최신의 count 값을  
참조할 수 있게 된다. 부가적으로 컴포넌트의 props도 최신의 것을 사용할 수 있게 된다. 

setInterval에서도 새롭게 선언된 콜백을 사용해야 한다. 그러기 위해서 useRef를 활용할 수 있다.
useRef를 이용해 콜백을 저장해두고, 렌더링 마다 저장된 콜백을 교체해 준다. setInterval에서는 현재 저장된 콜백을 사용하면 된다. 

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  const savedCallback = useRef();

	// 콜백 선언을 매번 다시 함. closure를 피해 props와 state를 최신으로 사용.
  function callback() { 
    setCount(count + 1);
  }

  useEffect(() => {
    savedCallback.current = callback; // 렌더링 마다 콜백 업데이트
  });

  useEffect(() => {
    function tick() {
      savedCallback.current(); // 현재 저장된 콜백 사용
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
```

## 참고
- Side Effect란? - https://en.wikipedia.org/wiki/Side_effect_(computer_science)
- React Component 정의 - https://reactjs.org/docs/components-and-props.html
- useEffect 활용하기 - https://reactjs.org/docs/hooks-effect.html#gatsby-focus-wrapper
- useEffect for side effects - https://dmitripavlutin.com/react-useeffect-explanation/
- useInterval을 이용해 setInterval을 선언적으로 만들기  
	https://overreacted.io/making-setinterval-declarative-with-react-hooks/

