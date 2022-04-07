//명령형

const arr = [1, 3, 5, 7, 9];

// function double(arr) {
//   const doubleArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     doubleArr.push(arr[i] * 2);
//   };
//   return doubleArr;
// };

// console.log(double(arr));



function double(arr) {
  return arr.map(x => x * 2);
};

console.log(double(arr));