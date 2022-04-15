//event명을 상수로 설정. => 오타로 인한 버그 방지
const ROUTE_CHANGE_EVENT_NAME ="route-change";

//initRouter : 얜 뭐하는 녀석일까. 지금부터 알아보자.
export const initRouter = (onRoute) => {
  //window에 ROUTE~~NAME 이벤트(커스텀이벤트) 설정
  window.addEventListener(ROUTE_CHANGE_EVENT_NAME, (e) => {
    //nextUrl을 custom event의 detail에서 꺼내옴.
    const { nextUrl } = e.detail;

    //nextUrl을 확인하는 조건문 방어코드
    if(nextUrl) {
      //window.history에 nextUrl을 pushState(로그 기록 쌓기)
      history.pushState(null, null, nextUrl);
      //인자로 받은 함수 onRoute 실행
      onRoute();
    }
  });
};

//처음 page가 로드 되었을 때,
export const push = (nextUrl) => {
  //new CustomEvent 생성 및 window에서 바로 실행되도록 하는 dispatchEvent()
  //customEvent를 생성하면 depth를 무시하고 global하게 사용할 수 있다.
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT_NAME, {
    //custom event의 정보로 nextUrl을 담는다.
    detail : {
      nextUrl
    }
  }));
};