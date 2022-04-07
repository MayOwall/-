//인접 행렬을 통한 구현
// const graph1 = Array.from(Array(5), () => Array(5).fill(false));

// graph1[0][1] = true;
// graph1[0][3] = true;
// graph1[1][2] = true;
// graph1[2][0] = true;
// graph1[2][4] = true;
// graph1[3][2] = true;
// graph1[4][0] = true;


// for(let i = 0; i < graph1.length; i++) {
//   let value = [];
//   for(let j = 0; j < graph1[i].length; j++) {
//     (graph1[i][j] === true) ? value.push("O") : value.push("X");
//   };
//   console.log(value.join(" "));
// };

//인접 리스트를 통한 구현
// const graph2 = Array.from(Array(5), () => []);

// graph2[0].push(1);
// graph2[0].push(3);
// graph2[1].push(2);
// graph2[2].push(0);
// graph2[2].push(4);
// graph2[3].push(2);
// graph2[4].push(0);

const n = 6;
const edge = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];


function solution(n, edge) {
  //그래프 틀 짜기
  const graph = Array.from(Array(n + 1).fill([]));
  console.log(graph);
  
  //그래프에 간선 넣어주기
  
  for(let i = 0; i < edge.length; i++) {
      console.log(edge[i]);
      const fromNode = edge[i][0];
      const toNode = edge[i][1];
      console.log(fromNode, toNode);
      graph[fromNode].push(toNode);
  }
}

solution(n, edge);