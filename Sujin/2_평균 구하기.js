// 평균 구하기
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!
function solution(arr) {
    var answer = 0;
    
    answer = arr.reduce((sum, curr) => sum += curr);
    answer /= arr.length;
    
    return answer;
}
