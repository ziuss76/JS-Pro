// 1. 0부터 n과 m중 작은 수까지 반복하며 n과 m이 나머지 값이 0이 되는 최대값을 구한다.
// 2. 1부터 증가하며 n과 m 어떤 수로 나눠도 나머지가 0이되는 최소값을 구한다. 

function solution(n, m) {
  let a = 0;
  let b = 1;
  
  for (let i = 1; i <= Math.min(n, m); i++) {
      if (n % i === 0 && m % i === 0) {
          a = i
      }
  }
  
  while(true) {
      if (b % n === 0 && b % m === 0) {
          break;
      }
      b++
  }

  return  [a, b]
}