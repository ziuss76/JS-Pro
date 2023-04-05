// [20230405] 김영채

function solution(n, m) {
  // 최대공약수 구하기
  let gcd = 0;
  // n과 m이 모두 i로 나누어 떨어지면 gcd에 i 할당
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }
  // 최소공배수 구하기
  let lcm = 0;
  // i가 n과 m으로 모두 나누어 떨어지면 lcm에 i 할당, break
  for (let i = n; i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      lcm = i;
      break;
    }
  }
  return [gcd, lcm];
}