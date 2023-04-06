function solution(s) {
  return s.search(/[^0-9]/g) === -1 && (s.length === 4 || s.length === 6);
}

// /[0-9]/g : '숫자0~9'를 모두
// /^0/ : 0으로 시작하는 것 /0$/ : 0으로 끝나는 것
// /[^0-9]/ : 0~9 를 제외한 문자열, 즉 a-zA-Z