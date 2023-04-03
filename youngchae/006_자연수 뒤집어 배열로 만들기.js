// [20230315] 김영채
function solution(n) {
  //n을 문자열로 변환해 각 요소들을 쪼개 배열에 담고 뒤집음 = strArr
  const strArr = n.toString().split('').reverse();
  //strArr의 모든 요소를 숫자형으로 바꿔줌
  return strArr.map(e => Number(e));
}