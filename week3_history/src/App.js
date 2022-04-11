import HomePage from "./pages/HomePage.js";
export default function App({ target }) {
  const homePage = new HomePage({ target });
  //pathname에 따라 page componenet 랜더링 처리를 다르게 해 주는 역할
  this.route = () => {
    const { pathname } = location;

    //기존에 로드되어 있던 렌더링을 지워주는 코드
    target.innerHTML = ``;

    if(pathname === "/") {
      //pathname이 /이므로 홈페이지 랜더링 해 주기
      homePage.render();
    } else if(pathname.indexOf("/products/") > -1) {
      //pathname에 products가 포함되므로 productpage 랜더링
      //url에서 productId 뽑기
      const productId = pathname.split("/products/")[1];
    } else {
      //일단 404처리..!!
      target.innerHTML = `<h1>404 not Found..!!`;
    }
  };

  this.init = () =>  {
    this.route();
  };

  window.addEventListener("click", e => {
    if(e.target.className === "link") {
      e.preventDefault();
      const { href } = e.target;
      history.pushState(null, null, href.replace(location.origin, ""));
      this.route();
    }
  })
  
  window.addEventListener("popstate", () => this.route());
  
  this.init();
}