export default function Header({
  target,
  initialState
}) {
  const headerElement = document.createElement("h1");
  target.appendChild(headerElement);

  this.state = initialState;

  this.render = () => {
    headerElement.innerHTML = `${this.state} 님의 할일 목록`;
  };

  this.render();
}