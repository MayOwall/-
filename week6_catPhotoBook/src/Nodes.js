export default function Nodes({
  target,
  initialState,
  onClick
}) {
  const nodesElement = document.createElement("div");
  nodesElement.classList.add("nodes");

  target.appendChild(nodeElement);

  this.state = initialState;

  this.setState = () => {

    
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
        <div class="Node">
        ${node.type === "DIRECTORY" 
        ? `<img src="https://cdn.roto.codes/images/directory.png">`
        : `<img src="https://cdn.roto.codes/images/folder.png">`}
        ${node.name}
        </div>
      `).join("")}
    `;
  };

  this.render();
}