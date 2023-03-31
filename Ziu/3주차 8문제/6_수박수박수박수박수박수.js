function solution(n) {
    let s = "수박".repeat(n);
    return s.slice(0,n)
}
// n = 3 이면 (수박수박수박 => 수박수)
// n = 4 이면 (수박수박수박수박 => 수박수박)
