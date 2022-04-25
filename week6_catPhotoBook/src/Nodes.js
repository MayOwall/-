export default function Nodes({
  target,
  initialState,
  onClick,
  onPrevClick
}) {
  const nodesElement = document.createElement("div");
  nodesElement.classList.add("nodes");
  target.appendChild(nodesElement);
 
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
    
  };

  this.render = () => {
    const { isRoot, nodes } = this.state;
    nodesElement.innerHTML = `
      ${isRoot ? `` : `
        <div class="Node">
          <img src="https://cdn.roto.codes/images/prev.png" />
        </div>
      `}
      ${nodes.map(node => `
        <div class="Node" data-id="${node.id}">
        ${node.type === "DIRECTORY" 
        ? `<img src="https://cdn.roto.codes/images/directory.png">`
        : `<img src="https://cdn.roto.codes/images/folder.png">`}
        ${node.name}
        </div>
      `).join("")}
    `;
  };

  this.render();

  nodesElement.addEventListener("click", (e) => {
    const clickedNodeElement = e.target.closest(".Node");

    const { id } = clickedNodeElement.dataset;
    //뒤로가기를 눌렀을 경우
    if(!id) {

    }
    
    const node = this.state.nodes.find(node => node.id === id);

    if(node) {
      onClick(node);
    } else {
      onPrevClick();
    }
  })
}