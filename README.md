# React + Vite

# OpenAI API를 활용한 기사 요약 프로그램 만들기

## Demo

summarizer-gazero.netlify.app

## stack

- React + Vite
- Redux-toolkit
- tailwindcss

## 주요기능

![iShot_2023-09-20_21 15 03](https://github.com/adrianhajdin/project_ai_summarizer/assets/98731537/c40dffc5-57aa-43ff-888f-c5f0f6a6f128)

1. 기사 url을 검색창에 입력하고 버튼을 누름
2. 기사를 한 문단, 한국어로 요약해서 보여줌
3. 입력했던 주소는 기록에 남음
4. 주소 복사 버튼을 이용한 복사기능

## OpenAI API사용 (Rapid api: Article Extractor and Summarizer)

```
https://rapidapi.com/restyler/api/article-extractor-and-summarizer
```

![iShot_2023-09-20_21 14 05](https://github.com/adrianhajdin/project_ai_summarizer/assets/98731537/49085076-3d4a-41b3-8e56-b2dc499d6d96)

### settings

```
npm create vite@latest
```

![iShot_2023-09-20_16 00 19](https://github.com/gayoung106/openai-articles/assets/98731537/d78f3c36-a796-4774-a50e-7efa268468f8)

### 실행

```
npm run dev
```

### library

```
npm install @reduxjs/toolkit
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-redux
```
