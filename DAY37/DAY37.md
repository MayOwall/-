# lec4 : SFC 프로젝트 구성 w. Parcel

### package-lock.json과 package.json의 차이

- package-lock.json : 필요한 dependencies들의 버젼을 하나로 고정해 줌
- package.json : 필요한 dependencies들의 버전이 특정 버전 위로 자유롭게 사용할 수 있도록 풀어줌

둘은 항상 세트로 구성해야 함. 이를 통해 node_modules 폴더가 없어도 타 하드웨어에서 동일한 프로젝트를 로딩할 수 있기 때문.

### .vscode라는 숨김 폴더가 생성되는 이유

vs코드의 기본적인 정보들을 vscode라는 폴더에 저장을 해 놓기 때문.
이런 정보또한 굳이 github에 업로드 할 필요가 없는 정보이기 때문에, .gitignore에 추가해 두는 것이 좋다.

.DS_store또한 마찬가지

### sfc 프로젝트 구성

우리는 개발을 할 때 편리하게 개발을 하기 위해 vue, react와 같은 frameworks, library등을 사용한다.
보통 이러한 frameworks들은 본인들만의 확장자를 사용하게 되고 (App.vue 등), 이러한 확장자 파일은 브라우저에서는 정상적으로 인식되지 못한다.
(브라우저는 오직 html, css, js 확장자 파일만 이해할 수 있기 때문!)
따라서 타 확장자로 작성된 파일들을 브라우저가 읽을 수 있는 언어(html, css, js)로 변환 해 주는 컴파일 과정이 필요한데,
이러한 컴파일 과정에서 사용할 수 있는 번들러들은 다음과 같다 (Parcel, webpack)

### scripts 중 dev와 build의 차이

dev는 개발자 환경을 위한 명령어로, parcel의 진입점만 지정해 준다. 따라서 dev 명령어로 생성된 dist의 js 파일은 난독화가 되어 있지 않다.
하지만 build는 build명령어를 추가해 줌으로써 실제로 사용자가 사용할 환경에서 사용될 js 파일을 컴파일 해준다. 이 js파일은 기존의 dev를 통해 생성된 js파일과는 달리 난독화 상태로 컴파일이 되기에 보다 용량을 줄여 사용할 수 있게 된다.


### dist 폴더

distribution의 약어이다.
ㅇ또한 package.json으로 언제든 생성 가능하기 때문에 .gitignore에 이름을 넣어 두는 것을 추천한다.

### app.vue의 style

app.vue파일에서는 style태그를 통해 css를 작성할 수 있다.
이때 style 태그 옆에 속성으로 lang="scss"를 추가 해 주면, scss 언어 또한 인식할 수 있게 된다.
물론, sass package도 정상적으로 설치 된 상황이어야 한다.