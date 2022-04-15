//import 목록 : PostsPage, PostEditPage, initRouter
import PostsPage from "./PostsPage.js";
import PostEditPage from "./PostEditPage.js";
import { initRouter } from "./router.js";

//export 목록 : App
//App 컴포넌트
//매개변수 : target
export default function App({ target }) {

  //====[ imported 컴포넌트 설정 ]================================//

  //PostsPage 컴포넌트 호출(매개변수 : target)
  const postsPage = new PostsPage({
    target : target,
  });
  //PostEditPage 컴포넌트 호출 (매개변수 : target, initialState(postId, post))
  const postEditPage = new PostEditPage({
    target : target,
    //postEditPage를 처음 생성할 때 기본적으로 new로 하기 위해 initialState을 아래와 같이 할당.
    initialState : {
      postId : "new",
      post : {
        title : "",
        content : ""
      }
    }
  });

  //====[ route 설정 ]=========================================//

  this.route = () => {
    //target(여기선 root)의 페이지 비워주기
    target.innerHTML = "";
    //window.location에서 pathname 파라미터 꺼내오기
    const { pathname } = window.location;

    //pathname에 따라 렌더링 될 요소를 다르게 지정해주는 조건문
    //pathname이 "/"일때...즉 루트일때
    if(pathname === "/") {
      //postsPage 렌더링 해주기
      postsPage.setState();
    //pathname이 /posts/로 시작되면...즉 posts url이면  
    } else if (pathname.indexOf("/posts/") === 0) {
      //pathname을 "/"로 나눠주기 (이러면 아래 배열의 3번째에는 url의 postid가 들어가게 됨)
      const [, , postId] = pathname.split("/");
      //얻은 postId로 해당 post의 postEditpage로 이동하기
      postEditPage.setState({ postId });
    }
  };
  //위에서 정의한 route App이 호출될 때 마다 기본 실행되도록 설정.
  this.route();


  //====[ custom event를 통한 router 설정 ]=====================//

  initRouter(() => this.route());
}
