// [20230329] 김영채

function solution(s) {
  // center는 가운데 수
  let center = Math.ceil(s.length / 2) - 1;
  if (s.length % 2 === 0) {
      // 문자열 길이가 짝수일 경우 center부터 총 2자리 slice
      return s.slice(center, center + 2);
  } else {
      // 홀수일 경우 s[center] 리턴
      return s[center];
  }
}