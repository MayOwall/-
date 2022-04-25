export default function ImageViewer({ target }) {
  const imageViewerElement = document.createElement("div");
  imageViewerElement.classList.add("ImageViewer");

  this.state = {
    imageUrl : null
  };

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.imageUrl) {
      imageViewerElement.style.display = this.state.imageUrl ? "block" : "none";

      imageViewerElement.innerHTML = `
        <div class="content">
          <img src="${this.state.imageUrl}" />
        </div>
      `;
    };
  };

  this.render();
}