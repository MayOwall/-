# DAY 35

## Computed

> computed들의 특성에 대해 알아보면서 vue.js의 최적화에 대해 알아보자.

<br>

### methods와 computed

<br>

반복적인 표현식 작성을 최소화하기 위해 methods를 사용할 수 있다.

```html
<h1>{{ double() }}</h1>
```

```JS
methods: {
          double() {
            return this.count * 2;
          },
        },
```

<br>

반복되는 표현식의 값 작성을 최소화 하기 위해 computed를 사용할 수 있다.

```html
<h1>{{ double() }}</h1>
```

```JS
computed: {
          double() {
            return this.count * 2;
          },
        },
```

<br>

computed의 장점 : <br>
computed는 methods에 비해 함수 실행 자체는 최초 한번만 이루어진다.<br> **(a.k.a 캐싱)**<br>
따라서 메모리에 있어 보다 효율적인 모습을 보여준다.

<br>
<br>

### JSON placeholder

<br>

설명 : <br>
JSON데이터를 사용할 수 있는 페이지.<br>
다양한 종류의 JSON데이터를 사용할 수 있다.<br>
테스트하기 좋은 페이지이다.<br>

<br>

사이트 주소 :

https://jsonplaceholder.typicode.com/

<br>
<br>

### created

컴포넌트가 생성되고 DOM과 mount되기전을 시간대로 갖는 lifecycle

```HTML
<ul>
  <li v-for="todo in todos">{{ todo.title }}</li>
</ul>
```

```Js
created() {
          fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((res) => {
              this.todos = res;
            });
        },
```

<br>
<br>

### computed를 통해 API 데이터 바꾸기

API는 FE에서 뿐만 아니라 어딘가에서도 범용적으로 사용될 가능성이 높기 때문에,<br>
API에 대한 변환이 필요할 때는<br>
API를 직접 바꾸는 것이 아닌 FE측에서 받은 API를 임의로 바꾸어 사용해야 해야한다.<br>

<br>

```html
<ul>
  <li v-for="todo in upperTodos">{{ todo.title }}</li>
</ul>
```

```js
upperTodos() {
            //궁금증 : vue에서는 validation을 사용해야 할까?
            return this.todos.map((todo) => ({
              ...todo,
              title: todo.title.toUpperCase(),
            }));
          },
```

<br>
<br>

### computed내부 값의 의존성

<br>

computed 내부 값을 작성하면서 data의 값을 사용하게 되면,<br>
computed는 data에 대하여 의존성을 지니게 된다.

```html
<h1>{{ user.name }}</h1>
<h2>age {{ user.age }}</h2>
<h2>double age {{ doubleAge }}</h2>
```

```js
data() {
        return {
          user: {
            name: "Owall",
            age: 25,
            email: "naver@naver.com",
          },
        };
      },
doubleAge() {
            console.log("Doubled!")
            return this.user.age * 2;
          },
```

<br>

이때 의존성은 일방향성이다.<br>
즉, data의 값이 바뀐다고 computed의 값이 다시 연산되는 일은 없다.
