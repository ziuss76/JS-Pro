// 1. 문자열의 길이를 확인해 짝수인지 홀수인지 확인한다.
// 2. 홀수일 경우 가운데 한 글자를 짝수일 경우 가운데 두글자를 반환한다.

function solution(s) {
  return s.length % 2 !== 0 ? s[Math.floor(s.length / 2)] : s[(s.length / 2) - 1] + s[s.length / 2] 
}