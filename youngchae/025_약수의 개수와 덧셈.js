// [20230403] 김영채

function solution(left, right) {
  let answer = 0;
  // i의 범위는 left부터 right까지 
  for (let i = left; i <= right; i++) {
    // 자기 자신은 무조건 약수에 포함되므로 cnt는 1에서 시작
    let divisorCnt = 1;
    // 1부터 i / 2 까지의 수로 나누어떨어지면 cnt++
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) divisorCnt++;
    }
    // cnt가 짝수면 answer에 더하고, 홀수면 빼준다.
    if (divisorCnt % 2 === 0) answer += i;
    else answer -= i;
  }
  return answer;
}