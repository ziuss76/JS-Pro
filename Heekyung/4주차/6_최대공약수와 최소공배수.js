//권희경
//권희경

function solution(n, m) {
  let num = n < m ? [n, m] : [m, n];

  let gcd = 1; // 최대공약수
  for (let i = 2; i <= num[0]; i++) {
    if (num[0] % i === 0 && num[1] % i === 0) {
      gcd = i;
    }
  }

  let lcm = (n * m) / gcd; // 최소공배수; 두 수의 곱에 최대공약수를 나누면 최소공배수!

  return [gcd, lcm];
}
