export default function SuggestKeywords({
  target,
  initialState,
  onKeywordSelect,
}) {
  const suggestionsElement = document.createElement("div");
  suggestionsElement.className = "Keywords";
  target.appendChild(suggestionsElement);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    suggestionsElement.innerHTML = `
      ${this.state
        .map(
          (keyword) => `
        <ul>
          <li>${keyword}</li>
        <ul>
      `
        )
        .join("")}
    `;

    suggestionsElement.style.display = this.state.length > 0 ? "block" : "none";
  };

  this.render();

  suggestionsElement.addEventListener("click", (e) => {
    const liElement = e.target.closest("li");

    if (li) {
      onKeywordSelect(liElement.textContent);
    }
  });
}
