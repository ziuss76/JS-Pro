// 1. 주어진 자연수 n을 배열로 변환한다.
// 2. sort() 메서드를 이용해서 내림차순으로 정렬한다.

function solution(n) {
  return Number((n + '').split('').sort((a, b) => b - a).join(''))
}