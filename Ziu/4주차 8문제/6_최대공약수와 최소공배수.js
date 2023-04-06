function solution(n, m) {
    const gcd = (a,b) => b === 0 ? a : gcd(b, a%b),
          lcm = (a,b) => (a * b) / gcd(a,b);
    return [gcd(n,m), lcm(n,m)]
}
// 외우는게 편하다