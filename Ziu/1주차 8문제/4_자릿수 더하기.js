// 자릿수 더하기
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!
function solution(n){
    let arr = [...String(n)].map(Number)
    return arr.reduce((a,c) => a + c)
}