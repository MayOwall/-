//history
  //length : history의 길이
  //scrollRestoration : 뒤로 돌아갔을 때 이전에 있던 스크롤로 돌아 갈 것인지.
  //state : pushState, replaceState의 첫번째 인자들이 기록되는 곳

history.pushState({
  productId : 1
}, null, "/product.1");
//url이 변경됨을 확인 할 수 있음과 동시에 history.length의 길이도 하나 는 것을 확인 할 수 있다.
//화면의 이동은 없는데도!!

history.replaceState(null, null, "/products/4");
//url이 변경되었음에도 history.length는 변경되지 않는다. 와우!