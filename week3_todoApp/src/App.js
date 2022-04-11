import { request } from "./api.js";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({target}) {

  this.state = {
    username : "owall",
    todos : []
  };
  
  new Header({
    target,
    initialState : this.state.username
  });

  new TodoForm({
    target,
    onSubmit : async (content) => {
      const todo = {
        content,
        isCompleted : false
      };
      this.setState({
        ...this.state,
        todos: [
          ...this.state.todos,
          todo
        ]
      });

      await request(`/${this.state.username}`, {
        method: "POST",
        body: JSON.stringify(todo)
      });
      console.log(content);
    }
  });

  const todoList = new TodoList({
    target,
    initialState : this.state.todos,
    onToggle : (id) => {
      alert(`${id} 토글 예정`)
    },
    onRemove : (id) => {
      alert(`${id} 삭제 예정`)
    }
  });

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state.todos);  
  };

  const fetchTodo = async () => {
    const { username } = this.state;
    if(username) {
      const todos = await request(`/${username}`);
      this.setState({
        ...this.state,
        todos
      });
    }
  };
  fetchTodo();
};