export default function Keyword({ target, onKeywordInput }){
  const keywordElement = document.createElement("input");
  keywordElement.className = "Keyword";

  target.appendChild(keywordElement);

  keywordElement.addEventListener("keyup", e => {
    //화살표 등의 특정 키에는 눌리지 않도록 하는 기능을 추가 하는 것이 좋다.
    if(keyword.trim().length > 2) {
      onKeywordInput(e.target.value);
    }
  });
}