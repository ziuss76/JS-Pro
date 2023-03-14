// [20230314] 김영채
function solution(n) {
  // numArr는 n을 문자열로 변환하고, 각 자릿수별로 쪼갠 후 각 원소를 숫자로 바꾼 배열
  const numArr = n.toString().split('').map(e => Number(e));
  let answer = 0;
  // numArr의 모든 요소를 합한다
  for (let i = 0; i < numArr.length; i++) {
      answer += numArr[i];
  }
  
  return answer;
}