export default function PhotoList({ target, initialState, onScrollEnded }) {
  const photoListElement = document.createElement("div");
  photoListElement.classList.add("PhotoList");
  
  target.appendChild(photoListElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  let isInitialized = false;

  this.render = () => {
    if(!isInitialized) {
      photoListElement.innerHTML = `
        <ul class="PhotoList__ul" style="list-style:none;">
        </ul>
        <button class="PhotoList__loadMore" style="width: 90vw; height: 3rem;">load more</button>
      `;
      isInitialized = true;
    };

     const photoUl = document.querySelector(".PhotoList__ul");
    this.state.photos.forEach(photo => {
      const newPhoto = document.createElement("li");
      newPhoto.setAttribute("data-id", photo.id);
      newPhoto.innerHTML = `
        <img width="300" src="${photo.imagePath}" />
      `
      photoUl.appendChild(newPhoto);
    });
  };

  this.render();

  photoListElement.addEventListener("click", (e) => {
    console.log(this.state.isLoading);
    if(e.target.classList.contains("PhotoList__loadMore") && !this.state.isLoading) {
      onScrollEnded();
    };
  });
};