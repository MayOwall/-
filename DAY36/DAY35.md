### DAY 35 조건부 렌더링

<br>

# v-if & v-else

<br>

## v-if

<br>

v-if와 v-else는 if else 조건문 처럼 사용할 수 있다.<br>
이때, if속성이 들어간 요소와 else속성이 들어간 요소는 바로 옆에 위치해야 한다.

```html
<h1 v-if="isShow">Hello Vue!</h1>
<h2 v-else>Goodbye Vue!</h2>
```

<br>

div/ template로 감싸는 방법을 통해 여러개의 요소를 한꺼번에 컨트롤 할 수 있다.

> template를 통해 v-for와 v-if가 동시에 작성되는 상황을 방지할 수도 있다.

```html
<h1 v-if="isShow">Hello if</h1>
<template v-else-if="[]">
  <h2>Hello elseIf 1</h2>
  <h2>Hello elseIf 2</h2>
</template>
<h2 v-else>Hello else</h2>
```

<br>

## v-show

v-if는 falsy한 값에서 html요소를 생성 자체를 안하게 하는 반면에,<br>
v-show는 falsy값에서도 일단 html 요소가 렌더링 되게 하되, css의 display를 통해 화면에만 보이지 않게 한다.

```html
<h1 v-show="isShow2">Hello isShow2</h1>
```

이중 중괄호의 값(data값)을 사용하여 렌더링 해야 할때,<br>
렌더링 문제를 방지하기 위해 v-cloak이라는 디렉티브와 함께 사용하는 것이 좋다.<br>
(특히 ssr를 할 때!)

```html
<h1 v-show="isShow2" v-cloak>{{ msg }}</h1>
```

<br>

## v-if와 v-show의 차이점

- v-if : 초기 렌더링 비용이 낮되, 전환 비용이 높다.
- v-show : 초기 렌더링 비용이 높되, 전환 비용이 높다.
  > 강사님은 일반적으로 v-if를 먼저 사용하되,<br>
  > 전환비용이 극적으로 높아지면 그때 v-show를 사용하는 편
