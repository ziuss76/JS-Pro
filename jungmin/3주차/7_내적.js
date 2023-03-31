// 1. a와 b의 길이는 같기 때문에 a또는 b의 길이만큼 반복한다.
// 2. 반복하면서 a배열 과 b배열의 같은 인덱스의 값을 곱한다.
// 3. 곱한 값을 모두 더해서 반환한다.

function solution(a, b) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
      total += a[i] * b[i]
  }
  return total
}