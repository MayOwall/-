import ProductOptions from "./ProductOption.js";
import { request } from "./api.js";

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
const FetchOptionData = (productId) => {
  return request(`/products/${productId}`)
    .then(product => {
      return request(`/product-options?product.id=${product.id}`);
    })
    .then(productOptions => {
      return Promise.all([
        Promise.resolve(productOptions),
        Promise.all(
          productOptions.map(productOption => productOption.id).map(id => {
            return request(`/product-option-stocks?productOption.id=${id}`)
          })
        )
      ])
    })
    .then(data => {
      const [ productOptions, stocks ] = data;
      const optionData = productOptions.map(( productOption, i ) => {
        const stock = stocks[i][0].stock
        return {
          optionId : productOption.id,
          optionName : productOption.optionName,
          optionPrice : productOption.optionPrice,
          stock
        }
      });
      productOptionsComponent.setState(optionData)
    })
};
FetchOptionData(DEFAULT_PRODUCT_ID);

const productOptionsComponent = new ProductOptions({
  target : root,
  initialState : [],
  onSelect : (option) => {
    alert(`${option.optionName}. 현재 재고는 ${option.stock}개 이소이다.`);
  }
});