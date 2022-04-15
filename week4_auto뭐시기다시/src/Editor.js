export default function Editor({
  target, 
  initialState = {
    title : "",
    content : ""
  },
  onEditing
}) {
  //editor 컴포넌트의 기본 틀 생성
  const editorElement = document.createElement("div");
  //editor 내부 구조 형성
  editorElement.innerHTML = `
        <input name="title" type="text" style"width:500px;" />
        <div name="content" contentEditable="true" style="width:600px; height:300px;"></div>
      `;
  //target(여기선 postEditPage가 될 것임!)에 컴포넌트 할당
  target.appendChild(editorElement);

  //초기화 확인을 위한 변수 선언 & 할당

  //매개변수로 받은 initialState를 this.state에 할당.
  this.state = initialState;

  this.setState = (nextState) => {
    //this.state를 인자로 받은 nextState로 할당.
    this.state = nextState;
    //새로 업데이트된 값들로 다시 render
    this.render();
  };

  this.render = () => {
    const richContent = this.state.content.split("\n").map(line => {
      if(line.indexOf("# ") === 0) {
        return `<h1>${line.substr(2)}</h1>`;
      } else if(line.indexOf("## ") === 0) {
        return `<h2>${line.substr(3)}</h2>`;
      } else if(line.indexOf("### ") === 0) {
        return `<h3>${line.substr(4)}</h3>`;
      }
      return line;
    }).join("");

    editorElement.querySelector("[name=title]").value = this.state.title;
    editorElement.querySelector("[name=content]").innerHTML = richContent;
    
  };
  //처음 컴포넌트 생성시 무조건 랜더되도록 실행
  this.render();

  //title input eventlistener
  editorElement.querySelector("[name=title]").addEventListener("keyup", (event) => {
    const nextState = {
      //기존의 this.state를 풀어주고
      ...this.state,
      //event가 발생했던 target에 맞추어 해당 값 새로 할당 (title)
      title : e.target.value
    };
    //새로만들어진 nextState를 this.State에 재할당하고 다시 render ( = setState())
    this.setState(nextState);
    //nextState로 재할당된 this.state를 onEditing함수 매개변수로 보내기
    onEditing(this.state);
  });

  editorElement.querySelector("[name=content]").addEventListener("input", (event) => {
    const nextState = {
      ...this.state,
      content : e.target.innerHTML
    };
    this.setState(nextState);
    onEditing(this.state);
  });
};