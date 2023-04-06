// [20230406] 김영채

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    // i번째 요소가 다음 요소와 같지 않을 때만 answer에 push
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}