// [20230323] 김영채
function solution(arr, divisor) {
  let answer = [];
  // arr의 요소들 중 divisor로 나누어 떨어지는 요소를 answer에 push
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % divisor === 0) answer.push(arr[i]);
  }
  // answer에 요소가 없으면 -1 push
  if (answer.length === 0) answer.push(-1);
  // answer배열 오름차순 정렬
  return answer.sort((a, b) => a - b);
}