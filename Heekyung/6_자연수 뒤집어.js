// 자연수 뒤집어 배열로 만들기
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!

function solution(n) {
  var answer = [];
  answer = n.toString().split('').reverse('').map(Number);
  return answer;
}