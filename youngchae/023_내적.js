// [20230330] 김영채

function solution(a, b) {
  let n = a.length;
  let answer = 0;
  // 0부터 n-1까지 계산해 합하기
  for (let i = 0; i < n; i++) {
      answer += a[i] * b[i];
  }
  return answer;
}