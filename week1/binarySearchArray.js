const array = [1, 2, 3, 4, 5, 7, 8, 9, 10];

function binarySearchForArray(array, value) {
  let first = 0;
  let last = array.length - 1;
  let min = Math.floor((last + first) / 2);
  while(first < last) {
    if(array[min] === value) {
      return true;
    };

    if(array[min] < value) {
      first = min + 1;
      min = Math.floor((first + last) / 2)
    }
    else{
      last = min - 1;
      min = Math.floor((first + last) / 2);
    };
  };
  return false;
};

console.log(binarySearchForArray(array, 6));