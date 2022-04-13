import Editor from "./Editor.js";
import { setItem, getItem, removeItem } from "./storage.js";
import { request } from "./api.js";

export default function PostEditPage({ target, initialState }) {
  const postEditPageElement = document.createElement("div");
  postEditPageElement.classList.add("post-edit-page");
  
  this.state = initialState;

  //각 page별 temp post가 겹칠 수 있다는 문제 때문에 temp post 키값에 postid를 추가 해 주었다.
  let postLocalSaveKey = `temp-post-${this.state.postId}`;

  const post = getItem(postLocalSaveKey, {
    title : "우와 신나는 코딩의 세계",
    content : "재밌는 타이핑을 시작 해 볼까요~~"
  });

  let timer = null;

  const editor = new Editor({
    target : postEditPageElement,
    initialState :  {post},
    onEditing : (post) => {
      if(timer !== null) {
        //timer가 돌아가고 있는 상황이라면 기존의 timer를 날려버리는 역할.
        clearTimeout(timer);
      }
      timer = setTimeout( async () => {
        setItem(postLocalSaveKey, {
          ...post,
          //localstorage의 값이 저장된 시간과 서버 값이 저장된 시간을 비교하기 위한 파라미터
          tempSaveDate: new Date()
        })
        const isNew = (this.state.postId === "new");
        if(isNew) {
          const createdPost = await request("/posts/", {
            method : "POST",
            body : JSON.stringify(post)
          })
          history.replaceState(null, null, `/posts/${createdPost.id}`);
          removeItem(postLocalSaveKey);
        } else {
          await request(`/posts/${post.id}`, {
            method : "PUT",
            body : JSON.stringify(post)
          })
          removeItem(postLocalSaveKey);
        }
      }, 2000);
    }
  });

  //외부에서도 변경될 수 있기 때문에 setstate를 만들도록 하겠다.
  this.setState = async (nextState) => {
    if(this.state.postId !== nextState.postId) {
      postLocalSaveKey = `temp-post-${nextState.postId}`;
      this.state = nextState;
      await fetchPost();
      return
    }

    this.state = nextState;
    this.render();
    
    editor.setState(this.state.post ?? {
      title : "",
      content : ""
    });
  };

  this.render = () => {
    target.appendChild(postEditPageElement);
  };

  const fetchPost = async () => {
    const { postId } = this.state;

    //post id가 new, 즉 특정 Id 값이 있는 post라면 저장된 post를 불러오는 역할
    if(postId !== "new") {
      const post = await request(`/posts/${postId}`);

      const tempPost = getItem(postLocalSaveKey, {
        title : "",
        content : ""
      });

      if(tempPost.tempSaveDate && tempPost.tempSaveDate > post.updated_at) {
        if( confirm("저장되지 않은 임시데이터가 있습니다. 불러올까요?") ) {
          this.setState({
            ...this.state,
            post : tempPost
          })
          return;
        }

      }

      this.setState({
        ...this.state,
        post
      })
    }  
  };

  fetchPost();
}