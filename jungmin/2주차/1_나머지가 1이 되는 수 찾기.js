// 1. 주어진 값 n의 - 1 까지 반복문을 돈다.
// 2. n 나누기 i의 나머지가 1이면 리턴한다.

function solution(n) {
  for (let i = 0; i < n; i++) {
      if (n % i === 1) return i
  }
}