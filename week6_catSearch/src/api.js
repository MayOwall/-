const END_POINT = "https://kdt-frontend.cat-search-api.programmers.co.kr/api/cats";

export const request = async (url) => {
  try {
    const res = await fetch(`${END_POINT}${url}`);

    if(!res.ok) {
      throw new Error("API 호출에 실패하였습니다.");
    };
    return res.json();

  } catch (e) {
    //에러가 생기면 에러를 밖으로 던져서 경고 ui가 보이도록 하는 작업을 해 보는 것도 좋을지도..
    alert(e.message);
  }
}