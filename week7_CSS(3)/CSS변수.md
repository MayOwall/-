#### 휘뚜루마뚜루 클론코딩 DAY 31, CSS (3)

<br>

# CSS 변수

### **CSS에서 전역에서 사용 가능한 변수 선언하기**

전역에서 변수를 선언하면 CSS 문서 어디에서든 해당 변수를 사용할 수 있게 됨

- 전역에서의 선언 : `:root`
- 변수 선언 : `--`

```
:root {
  --color-primary : royalblue;
  --color-danger : red;
  --color-success : yellowgreen;
}
```

#### **cf. html과 :root의 차이점**

둘은 명시도 점수에 있어 차이가 있다.<br>
명시도 점수가 높을수록 코드 우선순위에서 더 안전하기 때문에,<br>
필요에 맞게 잘 사용하는 것이 좋다.

- html : 명시도 1
- :root : 명시도 10

<br>
<br>

### **선언된 변수 사용하기**

선언된 변수는 **스코프**에 따라 var()를 통해 불러 올 수 있게 됨

- 변수를 불러오는 함수 : `var(함수이름)`
- 함수의 두번째 인수를 설정함으로써 <br>
  해당 변수가 없을 때의 초기값을 지정 해 줄 수 있다.

```
.primary {
  background-color: var(--color-primary);
}
.danger {
  background-color: var(--color-danger);
}
.success {
  background-color: var(--color-success, orange); //기본값 설정
}
```

<br>

### **변수의 재할당**

하위 스코프에서 중복된 변수가 선언될 시, 해당 변수는 재할당된다.

```
:root {
  --color-primary : royalblue;
}

.primary {
  --color-primary : hotpink; //재할당이 이뤄짐
}

```

<br>
<br>
