function solution(a, b) {
    return a.reduce((acc,c,i) => acc + (a[i] * b[i]), 0)
}
// a 길이만큼 누적 합
// a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]