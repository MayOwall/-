export default function TodoList({ target, initialState, onToggle, onRemove }) {
  const todoElement = document.createElement("div");

  target.appendChild(todoElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    todoElement.innerHTML = `
      <ul>
        ${this.state.map(({ _id, content, isCompleted }) => `
          <li data-id="${_id}" class="todo-item">
            ${isCompleted ? `<s>${content}</s>` : content}
            <button class="remove">❎</button>
          </li>
        `).join("")}
      </ul>
    `
  }

  todoElement.addEventListener("click", (e) => {
    //실제 이벤트가 발생한 곳이 어딘지를 찾는 법 : event.target;
    //closest : 이벤트가 발생한 곳을 기준으로 상위 DOM에서 가장 가까운 () 반환..쩌...쩐다..!!
    const liElement = e.target.closest(".todo-item");
    if(liElement) {
      const { id } = liElement.dataset; 
      //e.target.className 비구조화...!!쩌..쩐다.
      const { className } = e.target; 
      //삭제 버튼을 클릭했을 때
      if(className === "remove") {
        onRemove(id);
      } else{
        onToggle(id);
      }
    }
  });

  this.render();
}