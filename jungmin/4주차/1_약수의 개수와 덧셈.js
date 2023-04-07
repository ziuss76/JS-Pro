// 1. 주어진 수 left 부터 right 까지 반복하면서 약수를 구한다.
// 2. 약수의 개수가 짝수일 경우 값을 더하고 홀수일 경우 값을 뺀다.

function solution(left, right) {
  let result = 0;
  
  const divisor = (num) => {
      let count = 0;
      for (let i = 1; i <= num; i++) {
          if (num % i === 0) count++
      }
      return count % 2 === 0 ? num : -num
  }
  
  for (let i = left; i <= right; i++) {
      result += divisor(i)
  }

  return result
}