#### 휘뚜루마뚜루 클론코딩 DAY 31, CSS (3)

<br>

# transform 중 3D와 관련된 속성들

### transform-origin(a%, b%)

transform이 일어난 중심축을 지정할 수 있는 속성

- a : x축 기준 몇%에 중심축을 지정할 지
- b : y축 기준 몇%에 중심축을 저장할 지

- 예시 :
  - transform-origin : 100% 50%;
  - transform-origin : 100% 100%;

<br>

### perspective(a)

원근법이 적용되게 하는 함수

- a : 원근의 거리,
  크면 클수록 멀리서 보고 작으면 작을수록 가까이서 보도록 설정됨.
- x축 회전으로는 크게 변화가 보이지 않기에, y축을 사용할 것을 추천
- 예시 :
  > transform: perspective(300px) rotateY(45deg);
- 부모 요소에게 적용함으로서 함수가 아닌 속성으로도 사용할 수 있음
- 예시 :
  > perspective : 300px;

<br>

### perspective-origin(a%, b%)

부모 요소에게 적용된 perspective의 중심점을 바꿔주는 속성

- a : x축 기준 몇%에 중심축을 지정할 지
- b : y축 기준 몇%에 중심축을 저장할 지

<br>

### transform-style

원근법 중첩 적용을 위한 속성

- flat : 기본값, 원근법 중첩 적용을 막음.
- perserve-3d : 원근법 중첩 적용을 가능하게 해줌.
- ! **자식 요소에게만 영향을 미치기에, 손자들에게는 영향을 줄려면 계속해서 작성 해 주어야 함.**
- 예시 :
  > transform-style : flat;<br>
  > transform-style : perserve-3d;

<br>

### backface-visibility

요소의 뒷면(backface)가 보이게 할지 보이지 않게 할지 설정해 주는 속성

- visibility : 기본값, 뒷면이 보이게 함.
- hidden : 뒷면이 보이지 않게 함.
- **조금 응용하면 카드의 앞뒷면 같은 효과를 줄 수 있음 : )**
- 예시 :
  > backface-visibility : hidden;
