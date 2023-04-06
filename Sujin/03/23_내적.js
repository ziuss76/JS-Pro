function solution(a, b) {
  let answer = 0;

  a.forEach((value, idx) => {
    answer += value * b[idx];
  });

  return answer;
}
