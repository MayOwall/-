const API_END_POINT = "https://kdt-frontend.cat-api.programmers.co.kr";

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if(!res.ok) {
      throw new Error("API calling failed");
    };

    return await res.json();
  } catch(e) {
    alert(e.message);
  }
}