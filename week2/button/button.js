function lineThrough(event) {
  event.target.classList.toggle("line-through");
  console.dir(event.target);
};


function ButtonMaker({text, parent}) {
  const $button = document.createElement("button");
  let clickedCount = 0;
  $button.innerText = text;

  this.toggle = () => {
    clickedCount++;
    $button.addEventListener("mousedown", lineThrough);
  };
  this.toggle();

  this.render = () => parent.appendChild($button);
  this.render();
};

const main = document.querySelector("main");

new ButtonMaker( {text : "우왕 내가", parent : main});
new ButtonMaker( {text : "버튼을", parent : main});
new ButtonMaker( {text : "만들다니!!", parent : main});