export default function PhotoList({ target, initialState, onScrollEnded }) {
  const photoListElement = document.createElement("ul");
  
  target.appendChild(photoListElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    photoListElement.innerHTML = `
      ${this.state.map(photo => {
        `
          <li>
            <img width ="15rem" src="${photo.imagePath}" />
          </li>
        `
      }).join("")}
    `
  };

  this.render();
};