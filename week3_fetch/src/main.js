
import ProductPage from "./ProductPage.js";

const dummyData = [
  {
    optionId : 1,
    optionName : "이몸은 더미데이터1이로소다",
    optionPrice : 10000,
    stock : 10
  },
  {
    optionId : 2,
    optionName : "이몸은 더미데이터2이로소다",
    optionPrice : 20000,
    stock : 10
  },
  {
    optionId : 3,
    optionName : "이몸은 더미데이터3이로소다",
    optionPrice : 30000,
    stock : 0
  }
];

const root = document.querySelector("#root");


const DEFAULT_PRODUCT_ID = 1;


new ProductPage({
  target : root,
  initialState : {
    productId : 1
  }
})