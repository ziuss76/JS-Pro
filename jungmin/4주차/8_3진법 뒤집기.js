// 1. toString 메서드를 통해 3진수로 변환한다.
// 2. 값의 순서를 반전 시켜준다.
// 3. parseInt를 사용해 다시 10진수로 변환한다.

function solution(n) {

  return parseInt(n.toString(3).split('').reverse().join(''), 3)
}