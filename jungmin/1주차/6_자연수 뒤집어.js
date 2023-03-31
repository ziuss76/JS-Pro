// 자연수 뒤집어 배열로 만들기
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!

// 1. n을 문자열로 변환 후 배열로 다시 변환 시켜준다.
// 2. reverse() 메서드를 통해서 배열을 뒤집어 준다.
// 3. 배열을 반복하며 값들을 숫자로 변환 시켜준다.

function solution(n) {

  return String(n).split('').reverse().map(num => Number(num))
}