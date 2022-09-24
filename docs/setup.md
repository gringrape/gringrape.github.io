---
slug: "/blog/blog-setup"
date: "2022-09-17"
description: "자주 수정할 수 있는 지식저장소 만들기"
title: "VimWiki + Gatsby 블로그 만들기"
---

# 블로그 만들기 

## 왜 블로그를 만들어야 할까?
* 공개되는 형태로 지식을 정리하고 싶다.
* 이미 블로그를 운영하고 있지만, 정말 외부용이다. 일상적인 지식 습득에도 도움이 되는 것을 만들고 싶다.
* 지식 습득은 정리 + 수정이다. 특히나 수정이 엄청 중요하다. 그래서 수정에 드는 노력을 최대한 줄여줄 수 있는 도구를 만들면 좋다.

## 왜 직접 만들어야 할까?
* 결국 내가 원하는 것은 지식의 수정이 용이한 도구다.
* 이것을 어떻게 만들지는 정해져있지 않다. 즉, 커스텀이 필요하다.
* 다행히 나는 프론트엔드 작업에 꽤 익숙하다. 구성비용이 엄청 크지 않다. 

## 기술 구성
VimWiki + Gatsby

### VimWiki

개인 위키이기 때문에 문서 생성과 링크가 용이하다. 
지금 원하는 것도 지식의 정리와 연결이기 때문에 적격인 도구다.

### Gatsby
Jekyll 도 괜찮지만, 
liquid 문법이 마음에 들지 않았고,
React를 기반으로 하고 있는 Gatsby 를 사용하기로 했다.

## 필요한 기능
* 글 목록, 작성 시간순으로 정렬 된 것. 
* 글 랜덤으로 5개 보여주기.
* 글 수정 기능(수정하기 말도 안되게 편해야 함)
* 인덱스

## 설치 작업
### VimWiki 설치
https://github.com/vimwiki/vimwiki
`vim-plug`
```
Plug 'vimwiki/vimwiki'
```

### vim-startify 설치
https://github.com/mhinz/vim-startify
`vim-plug`
```
Plug 'mhinz/vim-startify'
```

### Gatsby 프로젝트 생성 
https://www.npmjs.com/package/gatsby
```
npm install -g gatsby-cli
gatsby new
```

`jsx-runtime` 설정
https://www.gatsbyjs.com/docs/reference/release-notes/v4.1/#jsx-runtime-options-in-gatsby-configjs

참고:
https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

## 글 목록 보여주기
- render markdown file
- 생성 날짜 순으로 정렬
- 글 간의 링크 처리

### markdown page 표시하기
https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/

1. 플러그인 설치
{{{bash
npm install gatsby-source-filesystem
}}}

`gatsby.config.js`:
```javascript
module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
  ],
}
```

다음과 같은 쿼리를 작성하면 페이지 폴더의 마크다운 파일 목록을 볼 수 있다.

```graphql
query AllFiles {
  allFile {
    nodes {
      ctime
      absolutePath
    }
  }
}
```

- 마크다운 파일의 내용또한 올바르게 들어오는지 확인해야 함. 

2. VimWiki 에서 markdown 문법 사용
- 일단은 syntax 를 markdown 으로 지정해 놓았다. 
- 이것이 싫은 경우는 syntax high-ligting을 custom 하게 줄 수 있다. 
	=> 지금은 복잡도가 좀 높다 -> 하나씩 건드려 보아야 한다. 

3. Markdown => html transformer 지정
- transformer 를 활용한다. 
- markdown 데이터 확인

4. 목록 보기
- 글을 가져오기
```graphql
query GetPosts {
  allMarkdownRemark {
    nodes {
      id
      frontmatter {
				title
        slug
      }
    }
  }
}
```
- 글 제목을 보여 주기
페이지에서 graphQL API로 데이터 쿼리하기
https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/

- index 파일이 제외되도록 처리

5. 목록 보기 - 작성 날짜 별로 정렬

date 값을 비교해서 정렬한다.

6. 메타데이터 입력 자동화
- 메타데이터가 자동으로 입력되도록 하기. 
- 메타데이터를 자동으로 작성하도록 설정.
- 메타데이터(지금은 작성 날짜)가 작성시에 자동으로 기록되도록 하기.

6-1. Vimscript 배우기 - https://learnvimscriptthehardway.stevelosh.com/

- calling function
- expression function 

6-2. URL을 얻기 위해 Vimscript 를 통해서 현재 경로 얻기
https://vim.fandom.com/wiki/Get_the_name_of_the_current_file

6-3. 글 작성 시점에 함수가 실행되도록 해주기.

```vimscript
autocmd BufRead,BufNewFile *blog/docs/*.md call NewTemplate()
```

BufRead
BufNewFile

- 질문 참고 - BufRead 이벤트는 무엇인가요?
https://stackoverflow.com/questions/15129517/what-is-the-difference-between-bufread-and-bufenter#:~:text=The%20BufRead%20event%20is%20triggered,buffer%20the%20cursor%20is%20in.

Buffer 란 메모리 상의 하나의 파일을 뜻한다고 한다. 
즉, 하나의 파일을 Vim 에서 읽어왔을때 BufRead 이벤트가 발생.
BufNewFile은 새로운 파일을 생성하는 시점인지, 아니면 새로운 파일을 젖아하는 시점인지 그것이 헷갈린다.

7. 상세 보기
https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#create-a-collection-route-for-the-markdown-files

8. 랜덤 목록 보기

9. link 처리를 위한 transformer customize
- 어떻게 커스텀 할 수 있을까?
- 문법을 바구는 과정에서 "\[\[\]\]"와 같은 기호들을 링크로 변환해야 함.

기본적인 transformer 지정- https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#transform-markdown-to-html-and-frontmatter-to-data-using-gatsby-transformer-remark

custom 방법 - 
https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/

10. 인덱스


## 글을 올릴때마다 재배포를 해야하는 불편함
리모트의 데이터 저장소를 활용할 수 있도록 함. 
- https://www.gatsbyjs.com/plugins/gatsby-source-git/

## 기타 수정 사항 기록
### description 항목이 메타데이터 항목에 추가되도록 함. 
글 생성시 템플릿에 자동으로 들어가도록 반영함.

```vimscript
call add(l:template, 'description : ')
```

