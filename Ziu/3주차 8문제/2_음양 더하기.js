function solution(abs, signs) {
    let ans = 0;
    for (let i = 0; i < abs.length; i++){
        if (signs[i]) ans += abs[i]
        else ans -= abs[i]
    }
    return ans;
}
// signs i 번째가 참 => ans 에 abs i 번째 더하기
// 거짓이면 빼기