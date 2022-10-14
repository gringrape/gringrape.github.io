---
slug    : /vim/startify
title   : vimstartify 화면을 정리해보자
description : 
date    : 2022-10-15 03:26:19 +0900
---

# 목차
- 문제 상황
- 해결 방안
- 커스텀 방법 확인
- 해결
- 회고

## 문제 상황
vim-startify의 기본 메뉴가 복잡해 보인다. 복잡한 이유는 다음 두가지이다.

- 자주 사용하는 링크들의 위치가 계속 바뀐다. 
- 자주 사용하는 링크들의 위치가 자주 사용하지 않는 것들에 가려져 있다.

## 해결 방안
자주 사용하는 링크들을 한군데로 모으고 싶다.   
그리고 사용하지 않는 것들은 가리고 싶다.  

## 커스텀 방법 확인
`g:startify_lists`라는 변수를 이용해보자. 

다음 명령을 통해 설명을 확인할 수 있다. 

```bash
:h g:startify_lists
```

```
[let](let) g:startify_lists = [
        \ { 'type': 'files',     'header': ['   MRU']            },
        \ { 'type': 'dir',       'header': ['   MRU '. getcwd()] },
        \ { 'type': 'sessions',  'header': ['   Sessions']       },
        \ { 'type': 'bookmarks', 'header': ['   Bookmarks']      },
        \ { 'type': function('s:gitModified'),  'header': ['   git modified']},
        \ { 'type': function('s:gitUntracked'), 'header': ['   git untracked']},
        \ { 'type': 'commands',  'header': ['   Commands']       },
        \ ]
```

bookmarks 타입을 손보면 될 것 같다. bookmarks 를 어떻게 편집하는지 기능의 설명을 확인해보자. 

```
let g:startify_bookmarks = [ {'c': '~/.vimrc'}, '~/.zshrc' ]
```

## 문제 해결
### 불필요한 항목을 노출 시키고 싶지 않다. 
북마크를 제외한 나머지를 모두 없애자. 

`vimrc`:
```
let g:startify_lists = [{ 'type': 'bookmarks', 'header': ['   Bookmarks'] }]
```

### 자주쓰는 것을 북마크로 설정하자. 
사실 하나밖에 없긴하다. 

```
let g:startify_bookmarks = [ {'a': '~/study/blog/docs/index.md'} ]
```

## 회고
> 왜 이제까지 안고쳤을까?

이런 문제는 정말 사소하지만, 매일 같이 접하는 문제이므로 빠르게 해결하는 것이 좋다. 파고들다 보면 정말 쉬운 문제인데, 유지하고 고치는 일에 유난히 인색한 것 같다. 적극적으로 고쳐보자. 

> 더 원하는 기능은 없을까?

사실 북마크를 바꾸면서, 북마크에 임의로 설정한 타이틀이 보였으면 좋겠다는 생각을 했다. 그리고, 나와 같은 생각을 하는 사람은 또 있었다. 

https://github.com/mhinz/vim-startify/issues/441

나는 오픈소스에 한해서는 철저하게 사용자 입장으로만 있었던것 같다. 이제 어느정도 다룰 수 있는 정도가 되었으니, 기여를 통해서 내가 사용하는 툴들을 더 좋게 만들어가자!
