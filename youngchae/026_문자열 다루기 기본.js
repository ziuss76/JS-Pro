// [20230403] 김영채

function solution(s) {
  // 문자열의 길이가 4 또는 6일 때
  if (s.length === 4 || s.length === 6) {
    // s의 모든 요소가 Number로 바꿨을 때 10보다 작다면 return true
    if (s.split('').every(e => Number(e) < 10)) return true;
    // 하나라도 숫자가 아니라면 return false
    else return false;
  }
  // 문자열의 길이가 4 또는 6이 아닐때
  return false;
}