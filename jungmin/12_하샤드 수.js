// 1. 주어지는 x의 각 자릿수의 합을 구한다.
// 2. x를 합으로 나누었을 때 0으로 떨어지면 true 아니면 false 를 반환한다.

function solution(x) {
  let y = x
  let sum = 0;
  
  while(y > 0) {
      sum += y % 10
      y = Math.floor(y / 10)
  }
  
  return x % sum === 0
}