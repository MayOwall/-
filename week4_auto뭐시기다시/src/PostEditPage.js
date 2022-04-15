import { request } from "./api.js";
import Editor from "./Editor.js";
import LinkButton from "./LinkButton.js";
import { getItem, removeItem, setItem } from "./storage.js";

//PostEditPage 컴포넌트 export (매개변수 : target, initialState)
export default function PostEditPage({ target, initialState }) {

  //posteditpage의 틀(element) 생성
  const postEditPageElement  = document.createElement("div");

  //매개변수로 받은 initialstate를 this.state에 할당.
  this.state = initialState;

  //틩겼을 경우를 대비해 page의 정보들을 localStorage에 임시로 저장할 key값을 상수로 선언.(오타로 인한 버그 방지용)
  //page마다 다른 localstorage를 주기 위해 postid값 추가.
  let postLocalSaveKey = `temp-post-${this.state.postId}`;

  //localstorage에 이미 해당 page에 대한 값 가져오고, 없다면 빈배열로 가져오기
  const post = getItem(postLocalSaveKey, {
    //없을 경우(즉 new이거나 server에 온전히 저장되었을 때)를 대비한 기본값
    title : "",
    content : ""
  });

  //디바운스를 위한 상수
  let timer = null;

  //Editor 컴포넌트 호출
  //✅ 왜 editor를 상수로 따로 빼 두셨지..?? 다른 곳에 쓰이는 일도 없는데...이유가 있나.
  const editor = new Editor({
    //editor컴포넌트를 posteditpage에 랜더링
    target : postEditPageElement,
    //initialState를 localstorage에서 불러온 page 값들(여기선 post)로 설정.
    initialState : post,
    //입력이 생길 때 마다 서버에 자동저장하는 콜백함수가 실행되게 하는 메서드
    onEditing : (post) => {
      //디바운스 효과
      if(timer !== null) {
        //2초 내에서는 timer함수의 타이머가 초기화 되도록 함.
        clearTimeout(timer);
      }
      timer = setTimeout( async () => {
        setItem(postLocalSaveKey, {
          ...post,
          tempSaveDate : new Date()
        });

        //이 문서가 newpost인지 구분해주는 상수 : isNew, 가시성을 위해 따로 빼 둠
        const isNew = (this.state.postId === "new");
        //만약 이 문서가 new라면
        if(isNew) {
          //새로 작성되고 있는 new post를 서버에 POST
          const createdPost = await request("/posts", {
            method : "POST",
            body : JSON.stringify(post)
          });
          //✅ createdPost가 어떤 형태로 오는지 모르겠네!! console.log해 보기!!
          //현재 new post인 url을 새로운 id를 가진 url로 history에 replaceState해주기
          //뒤로갈 때 newpage로 뒤로가지 않고 root로 뒤로가기 위해 putState가 아닌 replaceState 사용
          history.replaceState(null, null, `/posts/${createdPost.id}`);
          //localStorage에서 해당 postlocalSaveKey 삭제. (서버에 올렸으니까!)
          removeItem(postLocalSaveKey);
        //new post가 아니라면
        } else {
          //서버에 현재 post데이터를 put(수정)
          await request(`/posts/${post.id}`, {
            method : "PUT",
            body : JSON.stringify(post)
          });
        }
      //해당 settimeout 함수를 2초마다 실행. 즉 2초에 한번씩 비동기로 서버에 저장되도록 설정.
      }, 2000);
    }
  });

  new LinkButton({
    target : postEditPageElement,
    initialState : {
      text : "목록으로 이동",
      link : "/"
    }
  });
};