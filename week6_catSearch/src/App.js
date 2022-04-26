import Header from "./Header.js";

export default function App({ target }){

  const header = new Header({
    target, 
    onKeywordInput : (keyword) => {
      console.log(keyword);
    }
  });


}

