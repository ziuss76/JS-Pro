// 1. 문자열을 배열로 변환한다.
// 2. 정렬 메서드를 이용해 값이 높은 순 으로 정렬한다.
// 3. 문자열로 변환 후 반환한다.


function solution(s) {
  var answer = s.split('').sort((a, b) => a > b ? -1 : 1).join('')
  return answer;
}