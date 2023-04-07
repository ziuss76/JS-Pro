// 1. 문자열이 4 혹은 6인지 확인한다.
// 2. 1번 조건이 맞을 경우 문자열 s에 replace 메서드를 사용해 알파벳을 지워준다.
// 3. 기존 문자열 s와 알파벳을 제거한 문자열s 에 길이가 같을경우 true를 다를경우 false를 반환한다. 

function solution(s) {
  if (s.length === 4 || s.length === 6) {
      return s.length === s.replace(/[a-z]|[A-Z]/, '').length
  }
  return false
}