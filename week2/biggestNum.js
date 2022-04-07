function solution(number, k) {
//stack을 이용해서, 큰 값이 들어오면 스택을 다 빼 주기.
  const stack = [];  
  let count = 0;
  for(const each of number) {
    while(count < k && stack[stack.length - 1] < each) {
      stack.pop();
      count += 1;
    };
    stack.push(each);
  };

  while(count < k) {
    stack.pop();
    count += 1;
  };
};

const number = "4177252841";
const k = 4;

function solution(number, k);
