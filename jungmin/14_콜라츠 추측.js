// 1. 입력된 수가 짝수라면 2로 나누고 count를 1 증가한다.
// 2. 입력된 수가 홀수라면 3을 곱하고 1을 더하고 count를 1 증가한다.
// 3. 결과가 1이 나올때까지 반복하고 count를 리턴한다.
// 4. count가 500이 넘으면 -1을 리턴한다.

function solution(num) { 
  let count = 0;
  while (num > 1) {
      if (num % 2 === 0) {
          num = num / 2
          count++
      } else if (num % 2 !== 0) {
          num = num * 3 + 1
          count++
      }
      
      if (count >= 500) return -1
  }
  return count
}