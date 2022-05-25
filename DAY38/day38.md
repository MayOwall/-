# DAY 38 \_ Vue (5)

## 설치한 package 목록

### dependencies

- `vue` : vue 설치
- `html-webpack-plugin` : 번들된 js파일을 지정된 html header부분에 삽입 해 주는 플러그인

### devDependencies

vue

- `vue-loader` : vue sfc를 읽기 위한 webpack loader
- `vue-style-loader` : css-loader로 가져온 css파일을 html에 삽입 해 주는 로더

webpack

- `webpack` : webpack 프로그램
- `webpack-cli` : webpack명령을 실행하기 위해 필요한 npm
- `webpack-dev-server` : 로컬에서 webpack을 통한 개발 서버를 실행하기 위해 필요한 패키지
- `copy-webpack-plugin` : 특정한 디렉토리나 파일을 복사해 번들링 된 폴더 내에 경로로 삽입하는 플러그인. favicon등을 위해 사용

css

- `sass` : sass파일을 작성하기 위한 라이브러리
- `sass-loader` : sass/scss파일을 css파일로 불러오기 위한 로더.
- `css-loader` : js파일에서 css파일을 불러오기 위한 로더.

eslint

- `eslint`
- `eslint-plugin-vue`

## LEC 1 : 컴포넌트 등록

### 전역 컴포넌트 등록하기

특정 컴포넌트 내부에서 import할 필요없이,
모든 컴포넌트에서 자유롭게 사용할 수 있도록 컴포넌트를 전역에 등록 해 주는 것.
main.js에서 `app.component`를 통해 가능하다.

컴포넌트를 모두 전역화 해 버리면 불필요한 컴포넌트 로드를 발생시키기도 하고, 나중에 관리하기 어려워 질 수 있기 때문에, 자주 사용할 컴포넌트만 전역화 하고 나머지는 지역 컴포넌트로 사용하는 것을 추천한다.

> 한번에 여러 컴포넌트도 등록 할 수 있을까..? 궁금하다.

```js
const app = createApp(App);
app.component("Button", Button);
app.mount("#app");
```

### cf.지역 컴포넌트

지역 컴포넌트는 지역이 될 해당 컴포넌트 내부에서 import를 통해 등록 하면 된다.

```js
<script>
import Component from "./components/Component.js"
export default {
  components: {
    Component
  }
}
</script>
```

## LEC 2 : 컴포넌트 Props

### props의 역할

부모 컴포넌트의 데이터를 자식 컴포넌트가 쓸 수 있도록 전달 해 주는 역할.
단방향 데이터이다(즉 자식 컴포넌트는 부모 컴포넌트의 prop를 수정할 수 없고, 이는 데이터의 안전성을 증가시킨다)

<br>

하위 컴포넌트에서 props를 통해 받은 data를 갱신하고 싶다면, 본인 컴포넌트에서 새로운 data로 재선언하여 바꾸는 방법을 통해 가능하다.

```js
data() {
    return {
      newMessage: this.message,
    };
  },
```

<br>

props는 객체 타입으로 선언하여 각 데이터의 타입을 지정 해 줄 수도 있다.
다른 데이터가 들어오면 에러가 나게 된다.

```js
  props: {
    message : String,
    name : [String, Number  ]
  }
```

## LEC 3 : 컴포넌트 Non-Prop 속성

### 컴포넌트에 부여된 속성

컴포넌트에 속성을 부여했을 때 컴포넌트의 하위 요소가 2개 이상이면 속성은 제대로 하위 컴포넌트에 상속되지 않는다.

허나 각기 요소에 `$attrs`를 통해 부여를 해 주면 상속이 정상적으로 되는 것을 확인할 수 있다.

```html
<h1 :class="$attrs.class" :style="$attrs.style">Hello</h1>
<h2 @click="$attrs.onClick">HAHA</h2>
```

### slot

- 기본 컨텐츠 만들어 줄 수 있음 Fallback content
- slot은 각기 이름을 만들어 줄 수도 있다. `v-slot`
- `v-slot`은 `#`이라는 약어로 대신 사용할 수 있다.

## 동적 컴포넌트

필요에 따라 컴포넌트를 교체하여 사용할 수 있도록 하는 개념.

- keep-alive

## ref

document.querySelector에서 해방 해 주는 아주 착한 친구

컴포넌트 단위 내부에서 ref를 기준으로 요소를 찾을 수 있게 해 준다.

```html
<template>
  <h1 ref="hello">hello~</h1>
</template>
```

```js
export default {
  mounted {
    const h1El = this.$refs.hello;
    console.log(h1El.innerText); // hello~
  }
}
```

ref는 컴포넌트 단위에서도 사용 가능하다.

```html
<template>
  <Hello ref="hello" />
</template>

<script>

<script>
```
