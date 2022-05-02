#### 휘뚜루마뚜루 클론코딩 DAY 31, CSS (3)

<br>

# 다단이라는 개념에 대해 알아보기

### column-width

각 단의 넓이를 지정 가능

- **입력한 값 그대로 적용되지는 않고, 입력된 값을 참고하여 브라우저가 단의 넓이를 지정함.** <br> (이로 인해 단의 개수가 자동 조정되기도 함)
- auto : 기본값, 브라우저가 각 단의 넓이를 자동으로 지정
- 예시
  > column-width : 200px;

<br>

### column-count

단의 개수를 지정 해 줄 수 있는 속성

- 2 이상의 수 부터는 다단(multy column)을 지정 해 줄 수 있음
- 1 : 1단, 기본값
- 2 : 2단, 2개의 단을 구성
- 예시 :
  > column-count : 2;

<br>

### columns

column-width, column-count의 단축속성

- 예시
  > columns : 300px 3;

<br>

### column-rule

단과 단 사이의 선에 대해 지정 가능한 속성

- border 속성과 동일하게 사용 가능함
- column-rule-width, column-rule-style, column-rule-color의 개별속성으로 각기 독립하여 사용 가능
- 예시
  > column-rule : 4px solid;

<br>

### column-gap

단과 단 사이의 거리에 대한 속성

- normal : 기본값
- 앞의 "columns-"을 제하고 gap만 명시해도 사용 가능
- **최신 기술이므로 브라우저와의 호환성을 체크해야 할 필요 있음!!**
- 예시
  > column-gap : 40px;

<br>
