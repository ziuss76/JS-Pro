// [20230313] 김영채
function solution(n) {
  // answer 초기값은 0
  let answer = 0;
  // 1부터 n까지의 숫자들 중 n을 나누어떨어지게 하는 수를 answer에 더함
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}