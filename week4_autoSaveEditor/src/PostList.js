export default function PostList({ target, initialState, onPostClick }) {
  const postListElement = document.createElement("div");
  target.appendChild(postListElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    postListElement.innerHTML = `
      <ul>
        ${this.state.map(post => `
          <li data-id="${post.id}">${post.title}</li>
        `).join("")}
      </ul>
    `
  };

  this.render();
};