import App from "./App.js";
import Editor from "./Editor.js";
import { setItem, getItem } from "./storage.js";

const root = document.querySelector("#root");

// new App({
//   target : root
// });

const TEMP_POST_SAVE_KEY = "temp-post";

const post = getItem(TEMP_POST_SAVE_KEY, {
  title : "우와 신나는 코딩의 세계",
  content : "재밌는 타이핑을 시작 해 볼까요~~"
});

new Editor({
  target : root,
  initialState : post,
  onEditing : (post) => {
    setItem("temp-post", {
      ...post,
      //localstorage의 값이 저장된 시간과 서버 값이 저장된 시간을 비교하기 위한 파라미터
      tempSaveDate: new Date()
    }) 
  }
}); 