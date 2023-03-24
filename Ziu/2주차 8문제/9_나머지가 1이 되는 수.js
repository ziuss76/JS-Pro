function solution(n) {
    for (let i = 2; i < n; i++){
       if (n % i === 1) return i
    }
}
// n이 3보다 크므로 2로 나누기 시작