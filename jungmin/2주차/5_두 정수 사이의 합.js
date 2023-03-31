// 1. a 혹은 b중 낮은 수와 높은 수를 찾는다.
// 2. 낮은 수 부터 높은 수로 반복하며 더한다.

function solution(a, b) {
  if (a <= b) {
      let sum = 0;
      for (let i = a; i <= b; i++) {
          sum += i
      }
      return sum
  }
  
  if (a >= b) {
      let sum = 0;
      for (let i = b; i <= a; i++) {
          sum += i
      }
      return sum
  }
}