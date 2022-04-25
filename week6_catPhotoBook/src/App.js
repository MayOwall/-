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
  const nodes = new Nodes({
    target,
    initialState : {
      isRoot : false,
      nodes : DUMMY_DATA
    },
    onClick : () => {}
  });

};