// 1. 수박이라는 문자를 n만큼 반복해서 더한다.
// 2. 0부터 n 까지 길이 만큼 자른다.

function solution(n) {
  return '수박'.repeat(n).slice(0, n)
}