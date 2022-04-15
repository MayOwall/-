import { request } from "./api.js";
import LinkButton from "./LinkButton.js";
import PostList from "./PostList.js";

//PostsPage 컴포넌트 export (노션으로 치면 사이드바 역할...!!)
export default function PostsPage({ target }) {
  //postspage element 생성
  const postsPageElement = document.createElement("div");

  //postlist컴포넌트 호출
  const postList = new PostList({
    target : postsPageElement,
    //undefined에러를 막기 위한 방어코드 : []
    initialState : []
  });

  //LinkButton 컴포넌트 호출
  new LinkButton({
    target : postsPageElement,
    //new post를 생성하는 버튼 역할이므로, text와 link를 역할에 맞게 할당.
    initialState : {
      text : "New Post",
      link : "/posts/new"
    }
  });

  //setState 메서드 : postspage 내부 변화가 있을 때 마다 내부 변화 업로드를 위해 메서드
  this.setState = async() => {
    //서버에서 /posts의 DB를 비동기로 받아옴 (여기서는 Post들의 목록들)
    const posts = await request("/posts");
    //위에서 받아온 목록들로 postlist를 재구성
    postList.setState(posts);
    //postspage 다시 렌더
    this.render();
  };

  //render 메서드 : postspage element를 화면에 그리기 위한 메서드
  this.render = async () => {
    //랜더링 될 때만 target(여기선 App)에 postspage element가 appendchild되도록 render함수 안에 넣어둠.
    target.appendChild(postsPageElement);
  };

}