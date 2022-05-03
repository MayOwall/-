#### 휘뚜루마뚜루 클론코딩 DAY 31, CSS (4)

<br>

# SCSS - 주석, 중첩

### **주석**

주석의 종류는 2가지

1. `/_.... _/` : 컴파일 되어 결과로 나타남,

- SaSS는 여러 줄을 주석처리 하려면 속성의 들여쓰기를 잘 맞춰주어야 함.
- SCSS는 들여쓰기 상관없이 여러 줄 주석이 잘 적용됨.

2. `//` : 컴파일시 결과로 나타나지 않음<br>
   cf. 강사님은 일반적으로 //를 사용하나, 필요시 `/* */`을 사용

<br>

### **중첩 Nesting**

SCSS는 요소 중첩이 가능하다.

```SCSS
.container {
  display: flex;
  .item {
    flex-grow : 1;
  }
}
```

위의 코드는 아래의 CSS 코드와 동일하다.

```SCSS
.container {
  display : flex;
}
.container .item {
  flex-grow : 1;
}
```

<br>

### **중첩의 장점**

중첩을 통해

- 보다 빠르게 코드를 작성하고
- 보다 빠르게 코드를 찾을 수 있다.

<br>

### **중첩 응용**

```SCSS
.container {
  display: flex;
  .item {
    flex-grow :1;
    > span {
      color: red;
      &:hover {
        color: blue;
      }
    }
  }
}
```

- &(엠퍼세더) : 자신이 포함된 범위의 상위 선택자를 참조하는 기능

```SCSS
.fs {
  &-sm { font-size :12px;}
  &-m { font-size :14px;}
  &-xl { font-size :16px;}
}
```

<br>

### **SCSS 변수**

SCSS는 각 요소 내부에서 변수를 사용할 수 있다.

```SCSS
.container {
  .item {
    $size: 100px; //변수
    width : $size;
    height : $size;
    margin : $size;
    position : absolute;
  }
}
```

- Q. 과연 하위 스코프에서도 사용할 수 있을까??,,<br>
  => 음 가능하군

<br>

스코프를 벗어나서 변수를 사용하는 방법 : @at-root

```SCSS
.container {
  .item {
    $size: 100px; //변수
    width : $size;
    height : $size;
    margin : $size;
    position : absolute;
    @at-root .box {
      width: $size;
    }
  }
}

```

<br>

### **SCSS 중첩된 속성**

SCSS를 작성할 때 중첩된 속성이 있다면 중괄호를 통해 일괄적으로 작성할 수 있다.

```SCSS
.container {
  display: flex;
  .item {
    flex : { //중첩된 속성을 중괄호를 통해 한꺼번에 관리
      grow: 1;
      shrink: 0;
      basis: auto;
    };
    margin: { //중첩 속성
      top: 10px;
      left: 20px;
    };
    font: { //중첩 속성
      size: 20px;
      weight: bold;
      family: san-serif;
    }
  }
}
```

<br>

### **다중 선택자에서의 중첩된 속성 작성**

다중 선택자 : <br>
선택자 간 쉼표`,`를 통해 작성 가능

```SCSS
ul, ol { // = ul li, ol li {}
  li {
    width: 100px;
    color: red;
  }
}
```
