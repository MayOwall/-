const arr = [1, 2, 3, "hello", 5];

/*
//double2_명령형
function double(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number") {
      console.log(arr[i]);
    };
  };
};

double(arr);

*/

function double(arr) {
  return arr.filter(x => typeof x === "number")
            .map(x => x * 2);
};

console.log(double(arr));