import PostPages from "./Postpages.js";

export default function App({ target }) {
  const postPages = new PostPages({ target });

  postPages.render();
};