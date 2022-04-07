class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  };

};

class Tri {
  constructor() {
    this.root = new Node();
  }

  insert(insertString) {
    let currentNode = this.root;
    for(const each of insertString) {
      if(!currentNode.children.has(each)) {
        currentNode.children.set(each, new Node(currentNode.value + each))
      };
      currentNode = currentNode.children.get(each);
    };

  };

  has(findString) {
    let currentNode = this.root;
    for(const each of findString) {
      if(!currentNode.children.has(each)) {
        return false;
      }
      currentNode = currentNode.children.get(each);
    };
    return true;
  };
};

const tri = new Tri();
console.log(tri);
tri.insert("hello");
console.log(tri);
console.log(tri.has("hello"));
console.log(tri.has("hollo"));
