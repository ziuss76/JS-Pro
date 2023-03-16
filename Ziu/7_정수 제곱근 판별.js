// 정수 제곱근 판별
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!
function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n) + 1) ** 2 : -1
}