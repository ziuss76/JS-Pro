// 약수의 합
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!
function solution(n) {
    let ans = 0;
    for (let i = 1; i <= Math.sqrt(n); i++){
        if (n % i === 0) ans += i + n / i;
        else if (i === Math.sqrt(n)) ans += i;
    }
    return ans;
}

// 루트 n 까지만 반복문 돌리면 됨
// 나누어 떨어지면 n 과 n/i 더하기
// 루트 n 이라면 그것만 더하기