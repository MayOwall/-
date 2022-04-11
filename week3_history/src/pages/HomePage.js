import { request } from "../api.js";
export default function HomePage({ target }) {
  const homePageElement = document.createElement("div");
  //기존에는 컴포넌트를 createElement하자마자 target에 appendChild했지만, 여기서는 그러지 않을 것이다.
  //왜냐하면 라우트 페이지에서 어떤것을 랜더링할지 정하지, 여기서는 아직 미정상태이기 때문.

  this.render = () => {
    request("/products").then(products => {
      homePageElement.innerHTML = `
        <h1>이것이...홈페이지..?</h1>
        <ul>
          ${products.map(product => `
            <li>
              <a class="link" href="/products/${product.id}">
                ${product.name}
              </a>
            </li>
          `).join("")}
        </ul>
      `

      target.appendChild(homePageElement);
    })
  }
}