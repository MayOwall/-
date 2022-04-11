export default function TodoList({ target, initialState, onToggle, onRemove }) {
  const todoListElement = document.createElement("div");

  target.appendChild(todoListElement);

  this.state = initialState;
  
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if(this.state.length === 0) {
      todoListElement.innerHTML =  `
        <h2>todo 가 없습니다!</h2>
      `
      return
    };
    todoListElement.innerHTML = `
      <ul>
        ${this.state.map(({ _id, content, isCompleted }) =>  `
          <li data-id="${_id}" class="todo-item">
            ${isCompleted ? `<s>${content}</s>` : content }
            <button class="todo-remove-button">X</button>
          </li>
        `).join("")}
      </ul>
    `
  };
  
  todoListElement.addEventListener("click", (e) => {
    const clickedTodo = e.target.closest(".todo-item");
    const { className } = e.target;

    if(clickedTodo) {
      const { id } = clickedTodo.dataset;
      if(className === "todo-remove-button") {
        onRemove(id);
      } else {
        onToggle(id);
      }
    }
  })
  this.render();
}