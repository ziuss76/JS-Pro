// 1. arr 배열을 반복한다 이전 수와 현재 수가 같다면 넘어간다.
// 2. 이전 수와 현재 수가 다르다면 현재 수를 새로 만든 배열에 넣어준다.

function solution(arr) {
  var answer = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] === arr[i]) {
          continue
      }
      answer.push(arr[i])
  }
  
  return answer;
}