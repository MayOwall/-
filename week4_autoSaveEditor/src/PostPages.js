import PostList from "./PostList.js";
import { request } from "./api.js";

export default function PostPages({ target }) {
  //postlist 불러오기
  const postList = new PostList({
    target,
    initialState : []
  });
  //postpage생성
  const postPagesElement = document.createElement("div");
  postPagesElement.classList.add("post-pages");
  //new post를 위한 버튼 생성 & appendChild
  const newPostButtonElement = document.createElement("button");
  newPostButtonElement.innerText = "New Post";
  postPagesElement.appendChild(newPostButtonElement);
  //postlist를 업데이트 해주는 비동기 함수
  const fetchPosts = async () => {
    const posts = await request("/posts");
    postList.setState(posts);
  };
  //바로 렌더가 되지 않게 하는 이유는...??! App.js에서 페이지를 랜더링하겠다라고 결정되는 순간 렌더가 되도록 할 것이기 때문에.
  this.render = async () => {
    await fetchPosts();
    target.appendChild(postPagesElement);
  }
}