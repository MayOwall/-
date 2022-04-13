export default function Editor({
  target, 
  initialState = {
    title: "",
    content: ""
  },
  onEditing 
})
 {
  const editorElement = document.createElement("div");
  editorElement.classList.add("editor");
  

  target.appendChild(editorElement);

  let isInitialized = false;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    //처음 렌더시에만 innerhtml이 생성되도록 isinitialzed라는 조건값을 줌
    if(!isInitialized){
      editorElement.innerHTML = `
        <input type="text" name="title" value="${this.state.title}" style="width:20rem" />
        <textarea name="content" style="display:block; width:20rem; height:10rem">${this.state.content}</textarea>
      `
      isInitialized = true;
    };
  };
  //렌더 메서드 자체에는 의미가 없지만, 다른 컴포넌트와의 규격을 맞추기 위해 적시.
  //왜 다른 컴포넌트와의 규격을 맞추어야 하는가. 서로 엮여있지 않은데도..!!?
  this.render();

  editorElement.addEventListener("keyup", (e) => {
    //event의 target 구조분해할당
    const { target } = e;
    const nameValue = target.getAttribute("name");

    //name과 state의 key value가 같을 경우에만 동작하도록 하는 방어코드
    if(this.state[nameValue] !== undefined) {
      const nextState = {
        ...this.state,
        [nameValue]: target.value
      };

      this.setState(nextState);
      onEditing(this.state);
    };
  });
}