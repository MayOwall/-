export default function TodoForm({ target, onSubmit }) {
  const formElement = document.createElement("form");

  target.appendChild(formElement);

  this.render = () => {
    formElement.innerHTML = `
      <input type="text" placehoder="할일을 입력하세요">
      <button>추가하기</button>
    `
  };

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputElement = formElement.querySelector("input");
    const content = inputElement.value;

    onSubmit(content);
    inputElement.value = ``;
  });

  this.render();
}