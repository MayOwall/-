export default function Header({
  target,
  initialState
}) {
  const h1Element = document.createElement("h1");

  target.appendChild(h1Element);

  this.state = initialState;

  this.render = () => {
    h1Element.innerHTML = `${this.state} 님의 할 일 목록`
  }
  this.render();
}