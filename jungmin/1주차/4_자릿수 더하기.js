// 자릿수 더하기
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!

// 1. n을 각 자릿수 별로 잘라준다.
// 2. 자른 값을 모두 더한다.

function solution(n) {
  let answer = 0;
  let nArr = String(n).split("")
  nArr.forEach(num => answer += Number(num))
  
  return answer;
}