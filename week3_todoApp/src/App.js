import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({
  target,

}) {
  this.state = {
    username : "owall",
    todos : []
  }

  new Header({
    target : root,
    initialState : this.state.username
  }); 

  new TodoForm({
    target : root,
    onSubmit : (content) => {
      alert(`${content} 추가 처리!!`);
    }
  });
  
  const todoList = new TodoList({
    target : root,
    initialState : this.state.todos,
    onToggle : (id) => {
      alert(`${id} 토글 예정`);
    },
    onRemove : (id) => {
      alert(`${id} 삭제 예정`);
    }
  });
}