export default function Keyword({ target, initialState,  onKeywordInput }){
  const keywordElement = document.createElement("input");
  keywordElement.className = "Keyword";

  target.appendChild(keywordElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    keywordElement.value = this.state.keyword;
  };

  keywordElement.addEventListener("keyup", e => {
    //화살표 등의 특정 키에는 눌리지 않도록 하는 기능을 추가 하는 것이 좋다.
    if(e.target.value.length > 1) {
      onKeywordInput(e.target.value);
    }
  });
}