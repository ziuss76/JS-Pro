//권희경

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((c) => !isNaN(c)); // every를 사용
  }
  return false;
}

//오답코드

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((c) => !isNaN(c)); //숫자뒤 e가 붙을 경우 숫자로 인식
  }
  return false;
}
