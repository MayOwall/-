# DAY 35

## Computed

> computed들의 특성에 대해 알아보면서 vue.js의 최적화에 대해 알아보자.

<br>

### **methods와 computed**

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

### **JSON placeholder**

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

### **created**

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

### **computed를 통해 API 데이터 바꾸기**

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

### **computed내부 값의 의존성**

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

<br>
<br>

### **computed의 불변성**

<br>

computed 중 함수를 통해 생성된 값은 외부에서 변경할 수 없다.
(getter기능만 가지고 있기 때문)

getter와 setter 기능을 모두 가지고 있게 하기 위해선
기존의 computed 함수를 객체로 만들어 주어야 한다.

```js
fullName: {
            get() {
              return `${this.firstName} ${this.lastName}`;
            },
            set(newValue) {
              console.log(newValue);
            },
          },
```

<br>

setter의 첫번째 인자는 본인이 받는 값을 의미한다.<br>
인자를 통해 기존의 data값을 다시 할당하는 방식을 통해 data 값 변환이 가능 해 진다.<br>
(이때 비로소 의존성이 양방향이 된다.)

```JS
fullName: {
            get() {
              return `${this.firstName} ${this.lastName}`;
            },
            set(newValue) {
              const nameArr = newValue.split(" ");
              this.firstName = nameArr[0];
              this.lastName = nameArr[1];
            },
          },
```

<br>
<br>
<br>

---

<br>

## watch

<br>

### **watch**

데이터에 변경사항을 감시하는 역할<br>
반응형 데이터에서만 사용할 수 있다.<br>
변경사항을 감시할 데이터와 같은 이름의 함수를 만들어주어 사용할 수 있다.

> watch는 함수가 아닌 객체형태이다

```js
watch: {
          firstName() {
            console.log("watch", this.firstName);
          },
        },
```

<br>

watch에서 선언된 함수들은 2개의 매개변수를 가진다.
첫번째 매개변수는 새로이 바뀐 값, 두번째 매개변수는 기존의 값을 나타낸다.

```js
watch: {
          firstName(newValue, oldValue) {
            console.log("watch", newValue, oldValue);
          },
        },
```

<br>

data 중 데이터타입이 참조형인 데이터들(객체, 배열 등)은 <br>
데이터의 속성을 통해 데이터 값을 바꿀 땐 watch가 정상적으로 동작하지 않는다.

```js
data() {
          return {
            user: {
              name: "Owall",
              age: 22,
            },
          };
        },
watch: {
          user(newValue, oldValue) {
            console.log(newValue, oldValue); //작동 X
          },
        },
```

<br>

이같은 참조형 데이터들을 깊게 watch하기 위해서<br>
handler와 deep이라는 옵션을 사용할 수 있다.

```js
watch: {
          user: {
            //handler라는 식별자명은 바꿔선 안된다.
            handler(newValue, oldValue) {
              console.log(newValue, oldValue);
            },
            //깊은 감시를 위한 옵션, true를 통한 활성화
            deep: true,
          },
        },
```

<br>

immediate라는 옵션을 통해<br>
데이터 변경 뿐만 아니라, 데이터 초기화 상황도 감지할 수 있게 된다.

```js
fruits: {
            hander() {
              console.log(this.fruits);
            },
            deep: true,
            immediate: true,
          },
```
