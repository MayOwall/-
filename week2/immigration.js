const n = 6;
const times = [7, 10];

//숫자가 1,000,000,000...이렇게 올라가게 된다면, 풀이는 99% 이진탐색이다.

//구해야 할 것  : 시간(분)
//최소 시간 : 1;
//최대 시간 : 사람 수(n) * 심사하는데 가장 오래 걸리는 시간 / 심사관 수(times.length);

function immigration(n, times) {
  const sortTimes = times.sort((a, b) => a - b);

  let left = 1;
  let right = n * sortTimes[sortTimes.length - 1];

  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = sortTimes.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    if(sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    };
  };
  return left;
};

console.log(immigration(n, times));