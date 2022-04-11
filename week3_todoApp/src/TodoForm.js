export default function TodoForm({ target, onSubmit }) {
  const todoFormElement = document.createElement("form");

  target.appendChild(todoFormElement);

  this.render = () => {
    todoFormElement.innerHTML = `
      <input type="text" placehodler="입력, 이곳에." />
      <button>ADD</button>
    `
  }

  todoFormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoInputElement = todoFormElement.querySelector("input");
    const content = todoInputElement.value;
    
    onSubmit(content);
    todoInputElement.value = "";
  })

  this.render();
}