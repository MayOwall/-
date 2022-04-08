import TodoList from "./TodoList.js";

const DUMMY_DATA = [
  {
    _id : 1,
    content : "JavaScript 학습하기",
    isCompleted : true
  },
  {
    _id : 2,
    content : "JavaScript 복습하기",
    isCompleted : false
  }
];

const root = document.querySelector("#root");

new TodoList({
  target : root,
  initialState : DUMMY_DATA,
  onToggle : (id) => {
    alert(`${id} 토글 예정`)
  },
  onRemove : (id) => {
    alert(`${id} 삭제 예정`)
  }
});