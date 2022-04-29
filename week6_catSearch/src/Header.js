import Keyword from "./Keyword.js";

export default function Header({ target, initialState, onKeywordInput }){
  const headerElement = document.createElement("header");
  headerElement.className = "Header";

  target.appendChild(headerElement);

  this.state = initialState;
  
  this.setState = (nextState) => {
    this.state = nextState;

    keyword.setState({
      value : this.state.keyword
    })
  }

  const headerTitleElement = document.createElement("h1");
  headerTitleElement.innerText = "🐈 고양이 검색기 🔍"
  headerElement.appendChild(headerTitleElement);

  const keyword = new Keyword({
    target : headerElement,
    initialState : {
      keyword : this.state.keyword
    },
    onKeywordInput,
  });


}