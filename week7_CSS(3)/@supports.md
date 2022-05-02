#### 휘뚜루마뚜루 클론코딩 DAY 31, CSS (3)

<br>

# @supports

mdn : https://developer.mozilla.org/ko/docs/Web/CSS/@supports

### **@supports**

브라우저에 지원 여부에 따라 적용할 코드를 다르게 지정할 수 있게 하는 방법<br>
(a.k.a 기능 쿼리(feature query))

- @support 키워드를 통해 사용 가능

  ```
  @supports (display: grid) {
    div {
      display: grid; //grid기능이 지원되면 grid 적용
    }
  }
  ```

- not 키워드를 추가하여 지원하지 않는 경우에 따른 설정도 가능

  ```

  @supports not (display: grid) {
    div {
      float :right; //grid기능이 지원되지 않으면 float 적용
    }
  }

  ```

- 소괄호에 작성할 기능들은 and, or를 통해 여러개를 명시할 수도 있음

  ```
  @supports (기능 1) and (기능 2) {
    //기능 1, 2모두가 지원되어야만 사용 가능
  }

  @supports (기능 1) or (기능 2) {
    //기능 1, 2 둘 중 하나만 지원되어도 사용 가능
  }
  @supports not ((기능 1) or (기능 2)) {
    //기능 1, 2 둘 다 지원되지 않을 경우 적용될 속성
  }
  ```

- 기능 대신 선택자를 명시하고 싶을 경우 selector()라는 함수를 사용해야 함

  ```
  @supports (selector(.container)) {

  }
  ```
