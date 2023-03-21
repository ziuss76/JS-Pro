// 자릿수 더하기
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!
function solution(n)
{
    arr = n.toString().split('').map(Number); //n은 숫자, 문자열로 변환 후 배열로 만든뒤 다시 숫자로 변환
    let answer = arr.reduce((a,b)=>a+b); // for 문 대신 reduce를 사용하여 합을 구함

    return answer;
}