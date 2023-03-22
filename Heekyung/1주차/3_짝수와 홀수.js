// 짝수와 홀수
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!

function solution(num) {
  var answer = '';
  if(num%2 === 0) {
      answer = 'Even'
  } else {
      answer = 'Odd'
  }
  return answer;
}