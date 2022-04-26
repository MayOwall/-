import Keyword from "./Keyword.js";

export default function Header({ target, onKeywordInput }){
  const headerElement = document.createElement("header");
  headerElement.className = "Header";

  target.appendChild(headerElement);

  const headerTitleElement = document.createElement("h1");
  headerTitleElement.innerText = "🐈 고양이 검색기 🔍"
  headerElement.appendChild(headerTitleElement);

  const keyword = new Keyword({
    target : headerElement,
    onKeywordInput,
  });


}