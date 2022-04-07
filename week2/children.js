const children = [
  {
    name : "오월",
    age : "25",
    type : "programmer",
  },
  {
    name : "구월",
    age : "24",
    type : "student",
  },
  {
    name : "십일월",
    age : "23",
    type : "soldier",
  },
  {
    name : "삼월",
    age : "2",
    type : "cat"
  }
];

/*
//명령형
function ageFilter(arr) {
  const resultArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].age > 20 &&
       arr[i].name) {
         resultArr.push(arr[i]);
       };
    };
    return resultArr;
};

console.log(ageFilter(children));
*/

//선언형
function filter(arr) {
  return arr.filter(x => (x.name) && (Number(x.age) > 20))
            .map(x => x.type);
}

console.log(filter(children));