# 반응형 React공부 정리 -
#### navbar 
- icon : https://fontawesome.com/ <br>
- google Font :  https://fonts.google.com/ <br>
- @media를 통한 반응웹 구현 <br>
- ui.hashtages+.titleAndButton+.views <br>
-> ui 1개 div 2개 만들어진다<br>
-   (li>button)*5  : <li> <button></> </> 이렇게 5개 
-  .titleAndButton .title 이런처럼 css는 띄어쓰기를 해잘해야함
   ->.titleAndButton.title(작동 x ) <br>


## CSS 처음알게된것

-   position: sticky; top:0; 위에고정 시키고 아래움직임
-   margin-bottom: calc(var(--padding)/2);  지정된 padding변수의 절반만 들어감
-   .upNext > .title     // > 바로 앞에 자식만 



##### Demo
https://100dongwoo.github.io/Responsive-web-basic/

<br><br>

##### 편리한 사이트 
- css, html : https://developer.mozilla.org/ko/docs/Web/CSS/-webkit-line-clamp

## 깃헙 deploy하는법
1. npm i gh-pages
2.  "homepage": "http://100dongwoo.github.io/movie_react" <br>
3. npm run build <br>
4. 2번이랑 거의 동시에  "deploy": "gh-pages -d build" 수정 json파일(스크립트 안에) <br>
5. npm run deploy <br>
6. Published 뜨게되면  <br>


## 깃헙 deploy 되는거
"homepage": "http://100dongwoo.github.io/100dongwoo"
1. yarn build

2. yarn add --dev gh-pages

3.
"predeploy":"npm run build",
"deploy": "gh-pages -d build"

4. "deploy": "gh-pages -d build
