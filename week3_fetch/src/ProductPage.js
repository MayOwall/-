import ProductOptions from "./ProductOption.js";
import Cart from "./Cart.js";
import { request } from "./api.js";

export default function ProductPage({ target, initialState }) {
  const productElement = document.createElement("div");
  target.appendChild(productElement);
  this.state = initialState;

  const DEFAULT_PRODUCT_ID = 1;

  const productOptions = new ProductOptions({
    target : productElement,
    initialState : [],
    onSelect : (option) => {
      console.log(option);
    }
  });

  const cart = new Cart({
    target : productElement,
    initialState: {
      productName : "ㅇㅇㅇ",
      basePrice : 10000,
      selectedOptions: {}
    },
    onRemove : () => {

    }
  })
  this.setState = nextState => {
    if(nextState.productId !== this.state.productId) {
      FetchOptionData(nextState.productId);
      return;
    };
    this.state = nextState;
    productOptions.setState(this.state.optionData);
    // cart.setState({
    //   basePrice : product.basePrice,
    //   selectedProduct : this.state.selectedProduct
    // });
  };

  this.render = () => {
  };
  this.render();

  const FetchOptionData = (productId) => {
    return request(`/products/${productId}`)
      .then(product => {
        this.setState({
          ...this.state,
          product,
          optionData : []
        })
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
        this.setState({
          ...this.state,
          optionData
        })
        })
  };
  FetchOptionData(this.state.productId);

};