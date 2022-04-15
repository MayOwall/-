const storage = window.localStorage;

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch(event) {
    return defaultValue;
  };
};

export const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key) => {
  if(!storage.getItem(key)) console.log("localstorage remove과정 중 오류가 발생하였습니다.");
  storage.removeItem(key);
};