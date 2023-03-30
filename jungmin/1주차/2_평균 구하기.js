// 평균 구하기
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!
function solution(arr) {
  let answer = 0;
  
  arr.forEach(num => answer += num); // 배열에 담긴 값을 모두 더하는 forEach 함수
  
  return answer / arr.length; // 모두 더한 값의 평균을 구하는 식
}