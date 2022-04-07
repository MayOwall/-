export default function ProductOptions( {target, initialState, onSelect }) {
  const selectElement = document.createElement("select");

  target.appendChild(selectElement);

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if(this.state && Array.isArray(this.state)) {
      selectElement.innerHTML = `
        ${this.state.map(option => `<option value="${option.id}">${option.optionName}</option>`).join("")}
      `;
    } 
  };
  this.render();
}