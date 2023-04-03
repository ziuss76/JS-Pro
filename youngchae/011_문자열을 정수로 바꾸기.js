// [20230321] 김영채
function solution(s) {
  // [1]번째 요소부터의 숫자부분들만 numStr에 할당
  let numStr = '';
  for (let i = 1; i < s.length; i++) {
      numStr += s[i];
  }
  // s[0]이 '+'이면 numStr만 숫자로 반환해 리턴
  // '-'이면 numStr을 숫자로 반환해 음수로 리턴
  // +도 -도 아니라면 s를 숫자로 반환해 리턴
  if (s[0] === '+') return Number(numStr);
  else if (s[0] === '-') return -Number(numStr);
  else return Number(s);
}