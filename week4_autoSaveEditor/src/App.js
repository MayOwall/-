import PostPages from "./PostPages.js";
import PostEditPage from "./PostEditPage.js";

/*
URL 규칙

루트 : postpages 그리기
루트 외 : 
/posts/{id} - id에 해당하는 포스트 생성
/posts/new - 새 포스트 생성

*/

export default function App({ target }) {
  const postPages = new PostPages({ 
    target, 
    
  });

  const postEditPage = new PostEditPage({
    target : root,
    initialState : {
      postId : "new",
      title: "",
      content : ""
    }
  });

  this.route = () => {
    target.innerHTML = "";
    //history 꺼내오기
    const { pathname } = window.location;
    console.log(pathname);
    
    //패스가 루트일 경우 메인페이지 랜더링
    if(pathname === "/") {
      postPages.render();
      //pathname이 /posts/로 시작하는 경우
    } else if(pathname.includes("/posts/")) {
      //pathname을 슬래시(/)로 쪼개어서 postid 알아내기
      const [, , postId] = pathname.split("/");
      postEditPage.setState({postId});
    }
  };

  this.route();

  window.addEventListener("route-change", (e) => {
    history.pushState(null, null, nextUrl);
  });
};