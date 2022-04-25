export default function PhotoList({ target, initialState, onScrollEnded }) {
  const photoListElement = document.createElement("div");
  photoListElement.classList.add("PhotoList");
  
  target.appendChild(photoListElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       if(entry.isIntersecting) {
         console.log("화면 끝 : ", entry);
       }
     })
  }, {
    root : null,
    threshold : 0
  })

  let isInitialized = false;
  let lastPhotoElement = null;

  this.render = () => {
    if(!isInitialized) {
      photoListElement.innerHTML = `
        <ul class="PhotoList__ul" style="list-style:none;">
        </ul>
      `;
      isInitialized = true;
    };

    const photoUl = document.querySelector(".PhotoList__ul");

    this.state.photos.forEach(photo => {
      const newPhoto = document.createElement("li");
      newPhoto.setAttribute("data-id", photo.id);
      newPhoto.style.minHeight = "50px";
      newPhoto.innerHTML = `
        <img width="300" src="${photo.imagePath}" />
      `
      photoUl.appendChild(newPhoto);
    });

    lastPhotoElement = photoUl.querySelector("li:last-child");

    if(lastPhotoElement !== null) {
      observer.observe(lastPhotoElement);
    };
  };

  this.render();


  window.addEventListener("scroll", () => {
    const { isLoading, totalCount } = this.state;
    const isScrollEnded = (window.innerHeight + window.scrollY) + 100 >= document.body.offsetHeight;
    const isTotalLoaded = totalCount <= document.querySelectorAll(".PhotoList__ul li").length;
    
    if(isScrollEnded && !isLoading && !isTotalLoaded) {
      onScrollEnded();
    }
    
  })
};