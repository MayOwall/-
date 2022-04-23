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
    nextStart : 0,
    totalCount : 0, 
    photos : [],
    isLoading : false
  };

  const photoListComponent = new PhotoList({
    target : appElement,
    initialState : {
      isLoading : this.state.isLoading,
      photos : this.state.photos,
      totalCount : this.state.totalCount
    },
    onScrollEnded : async () => {
      await fetchPhotos(); 
    }
  });

  this.setState = (nextState) => {
    this.state = nextState;
    photoListComponent.setState({
      isLoading : this.state.isLoading,
      photos : this.state.photos,
      totalCount : this.state.totalCount
    });
  };

  
  const fetchPhotos = async () => {
    this.state.isLoading = true;
    
    const { limit, nextStart } = this.state;
    const photos = await request(`/cat-photos?_limit=${limit}&_start=${nextStart}`);
    
    this.setState({
      ...this.state,
      nextStart : nextStart + limit,
      photos,
      isLoading : false
    });
    
  };
  
  const initialize = async () => {
    const totalCount = await request("/cat-photos/count");
    
    this.setState({
      ...this.state,
      totalCount
    });

    await fetchPhotos(); 
  };

  initialize();
};