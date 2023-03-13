// 약수의 합
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!

function solution(n) {
    var answer = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0)
            answer += i;
    }
    
    return answer;
}
