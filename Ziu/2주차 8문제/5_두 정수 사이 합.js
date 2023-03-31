function solution(a, b) {
    let ans = 0;
    for (let i = Math.min(a,b); i <= (Math.max(a,b)); i++) ans += i;
    return ans;
}
// a,b 중 최솟값 ~ a,b 중 최대값 더하기