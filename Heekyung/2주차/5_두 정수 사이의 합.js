function solution(a, b) {
  var answer = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    answer += i;
  }

  // answer= (Math.abs(max-min)+1) * (max+min) / 2
  // 등차수열의 합 공식 활용
  return answer;
}
