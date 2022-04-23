const API_END_POINT = "https://kdt.roto.codes";

export const request = async (url) => {
  try {
    const response = await fetch(`${API_END_POINT}${url}`);
    if(response.ok) {
      return await response.json();
    }
  } catch (e) {
    alert(e.message);
  }
}