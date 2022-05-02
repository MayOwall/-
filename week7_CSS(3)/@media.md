#### 휘뚜루마뚜루 클론코딩 DAY 31, CSS (3)

<br>

# @media

### @media를 이용하여 viewport 넓이별 CSS 디자인 하기

<br>

#### **@media 사용방법** :

> @media 타입 and (기능) { 스타일 }

```
@media screen and (max-width: 700px) {
  .box {
    width: 200px;
    background-color: royalblue;
  }
}
```

<br>

#### **타입의 종류**

- all : 기본값 모든 미디어 타입에 대한 스타일, 생락 가능
- screen : 스크린
- print : 인쇄를 고려할 때
- 이 외에도 여러가지 media type이 있으나 잘 사용하진 않음(tv 등)

- 쉼표 `,`를 통해 여러개의 media query를 나열 할 수도 있다

  ```
  @media screen and (max-width: 700px),
  tv and (display-mode :fullscreen) {
    //screen의 최대 width가 700이하이거나, tv에서 full-screen모드일 때
    //줄바꿈 처리를 통해 코드의 가독성을 높일 수 있음
  }
  ```

<br>

#### **media 기능들**

- 기능은 and 연산자를 통하여 2개 이상 작성 가능

  ```
  @media (max-width: 700px) and (min-width: 400px) {
    //400px보다 크고 700px 작을 때
  }
  ```

- not 키워드를 사용하여 반전 가능

  ```
  @media not all and (max-width:700px) and (min-width: 400px) {
    //not 연산자를 사용 할 때는 반드시 media type이 명시되어 있어야 함
    //400보다 작거나 700보다 큰 경우
  }
  ```

- orientation

  - media의 주요 기능 중 하나
  - portrait : 화면의 세로가 가로보다 더 길 때 (세로방향)
  - landscape : 화면의 가로가 세로보다 더 길 때 (가로방향)

  ```
  @media (orientation: portrait) {
    ...
  }
  @media (orientation: landscape) {
    ...
  }
  ```

<br>

#### **html link에서의 @media 속성 작성**

- @media는 html link 태그에서도 지정 해 줄 수 있다.

  ```
  <link rel="stylesheet" href="./css/main-md.css" media="(max-width: 700px) and (min-width: 400px)">
  ```
