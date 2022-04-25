import { request } from "./api.js";
import ImageViewer from "./ImageViewer.js";
import Nodes from "./Nodes.js"
const DUMMY_DATA = [{
 "id" : "1",
 "name" : "회색고양이",
 "type" : "DIRECTORY",
 "filePath" : null,
 "parent" : null
},
{
  "id" : "2",
  "name" : "노란고양이",
  "type" : "DIRECTORY",
  "filePath" : null,
  "parent" : null
 },
];

export default function App({ target }){
  const appElement = document.createElement("div");
  appElement.classList.add("app");
  target.appendChild(appElement);

  this.state = {
    isRoot : true,
    nodes : []
  };

  const nodes = new Nodes({
    target : appElement,
    initialState : {
      isRoot : this.state.isRoot,
      nodes : this.state.nodes
    },
    onClick : async (node) => {
      if (node.type === "DIRECTORY") {
        await fetchNodes(node.id);
      }
    }
  });

  const imageViewer = new ImageViewer({
    target : appElement,
  })

  this.setState = (nextState) => {
    this.state = nextState;

    nodes.setState({
      isRoot : this.state.isRoot,
      nodes : this.state.nodes
    })
  };

  const fetchNodes = async (id) => {
    const nodes = await request(id ? `/${id}` : "/");
    
    this.setState({
      ...this.state,
      nodes,
      isRoot: id ? false : true
    });

  };

  fetchNodes();
};