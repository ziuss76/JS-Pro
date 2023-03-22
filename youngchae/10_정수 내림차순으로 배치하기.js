// [20230320] 김영채
function solution(n) {
  // n을 문자열로 변환 후 한자리씩 배열로 변환
  const strArr = n.toString().split('');
  // 각 요소를 숫자로 변환
  let numArr = strArr.map(e => Number(e));
  // 내림차순으로 정렬
  numArr.sort((a, b) => b - a);
  // 다시 문자열로 join한 후 숫자형으로 변환 리턴
  return Number(numArr.join(''));
}