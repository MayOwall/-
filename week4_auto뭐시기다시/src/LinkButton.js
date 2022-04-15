import { push } from "./router.js";

export default function LinkButton({
  target,
  initialState
}) {
  this.state = initialState;
  const linkButtonElement = document.createElement("button");
  target.appendChild(linkButtonElement);

  this.render = () => {
    linkButtonElement.textContent = this.state.text;
  };

  this.render();

  linkButtonElement.addEventListener("click", () => {
    push(this.state.link);
  });
};