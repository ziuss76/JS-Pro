// x만큼 간격이 있는 n개의 숫자
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!

function solution(x, n) {
  var answer = [];
  for(let i = 1; i <= n; i++) {
      answer.push(x*i)
  }
  return answer;
}