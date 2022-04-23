import PhotoList from "./PhotoList.js";
import { request } from "./api.js";

const DUMMY_DATA = [
  {
    "id" : 1,
    "imagePath" : "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
    "cats" : 1,
    "created_at" : "2021-08-22T12:14:07.188z",
    "updated_at" : "2021-08-22T12:16:03.066z",
    "photo_in_cats" : [
      {
        "id" : 1,
        "name" : "나나",
        "colors" : "yellow, white",
        "birthday" : null,
        "profileImage" : "https://~~~.jpg",
        "published_at" : "2021-08-22T12:09:21.753z",
        "created_at" : "2021-08-22T12:14:07.188z",
        "updated_at" : "2021-08-22T12:16:03.066z"
      }
    ]
  }
];

export default function App({ target }) {
  const appElement = document.createElement("div");
  appElement.classList.add("App");
  target.appendChild(appElement);

  this.state = {
    limit : 5,
    start : 0,
    photos : []
  };

  const photoListComponent = new PhotoList({
    target : appElement,
    initialState : this.state.photos
  });

  this.setState = (nextState) => {
    this.state = nextState;
    photoListComponent.setState(this.state.photos);
  };

  const fetchPhotos = async () => {
    const photos = await request(`/cat-photos?_limit=5&start=0`);
    this.setState({
      ...this.state,
      photos
    });
  };

  fetchPhotos();
};