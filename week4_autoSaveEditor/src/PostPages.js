import { request } from "./api.js";
import PostList from "./PostList.js";

export default function PostPages({ target }) {
  const postPagesElement = document.createElement("div");

  const postList = new PostList({
    target,
    initialState : []
  });

  const newPostButtonElement = document.createElement("button");
  newPostButtonElement.innerText = "New Post";
  postPagesElement.appendChild(newPostButtonElement);

  const fetchPosts = async () => {
    const posts = await request("/posts");
    postList.setState(posts);
  };

  this.render = async () => {
    await fetchPosts();
    target.appendChild(postPagesElement);
  }
}