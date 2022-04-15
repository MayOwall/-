export const API_END_POINT = "https://kdt.roto.codes";

export const request = async (url, options = {}) => {
  try {
    //비동기 res, request이므로 option에 header만 넣음
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      //request이므로 option에 header만 넣음
      headers : {
        "Content-Type" : "application/json",
      }
    });
    //통신이 ok가 났을 경우에만 (즉 200/300응답일때만)
    if(res.ok) {
      //res의 json return
      return await res.json();
    }
    //통신이 ok가 아니면 에러 투척
    throw new Error("400/500대의 에러가 발생하였습니다.");
  } catch(event) {
    alert(event.message);
  };
};