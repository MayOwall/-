export default function BreadCrumb({
  target,
  initialState,
  onClick
}){
  const breadCrumbElement = document.createElement("div");
  breadCrumbElement.classList.add("BreadCrumb");

  target.appendChild(breadCrumbElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    breadCrumbElement.innerHTML = `
      <div class="BreadCrumb__item">Root</div>
      ${this.state.map(({ id, name }) => `
        <div class="BreadCrumb__item" data-id="${id}">${name}</div>
      `).join("")}
    `;
  }

  this.render();

  breadCrumbElement.addEventListener("click", (e) => {
    const clickedBreadCrumb = e.target.closest(".BreadCrumb__item");

    const { id } = clickedBreadCrumb.dataset;
    onClick(id);
  })
}