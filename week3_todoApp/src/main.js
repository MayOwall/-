import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

const DUMMY_DATA = [
  {
    _id : 1,
    content: "todo app 강의 맛깔나게 조져주기",
    isCompleted : true
  },
  {
    _id : 2,
    content: "김치찜 기깔나게 먹어주기",
    isCompleted : false
  },
];

const rootElement = document.querySelector("#root");

new TodoForm({
  target : rootElement,
  onSubmit : (content) => {
    alert(content);
  }
})
new TodoList({
  target : rootElement,
  initialState : DUMMY_DATA,
  onToggle : (id) => {
    alert(`${id} 토글 예정`)
  },
  onRemove : (id) => {
    alert(`${id} 삭제   예정`)
  }
});