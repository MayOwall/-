const API_END_POINT = "https://kdt.roto.codes";

export const request = async (url) => {
  try {
    const response = fetch(`${API_END_POINT}${url}`);
    if(response.ok) {
      return (await response).json();
    } else if (!response.ok) {
      throw new Error(`${url} request 도중 400,500대의 에러가 발생하였습니다.`);
    }
  } catch (e) {
    alert(e.message);
  }
}