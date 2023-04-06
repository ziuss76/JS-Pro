function solution(n, m) {
    let gcd = 1; // greatest common divisor
    for (let i = 2; i <= +Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }

    let lcm = +Math.max(n, m); // Least common multiple
    while (1) {
        if (lcm % n === 0 && lcm % m === 0) {
            break;
        }
        lcm++;
    }

    return [gcd, lcm];
}
