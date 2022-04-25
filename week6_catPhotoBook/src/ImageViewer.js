export default function ImageViewer({ target, onClose }) {
  const imageViewerElement = document.createElement("div");
  imageViewerElement.classList.add("ImageViewer");
  imageViewerElement.classList.add("Modal");
  target.appendChild(imageViewerElement);

  this.state = {
    selectedImageUrl : null
  };

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.selectedImageUrl) {
      imageViewerElement.style.display = this.state.selectedImageUrl ? "block" : "none";

      imageViewerElement.innerHTML = `
        <div class="content">
          <img src="${this.state.selectedImageUrl}" />
        </div>
      `;
    };
  };

  this.render();
}