// 1. 주어진 배열 absolutes의 길이만큼 반복문을 반복한다.
// 2. absolutes와 같은 인덱스에 있는 signs가 true일 경우 양수를 false일 경우 음수를 더한다.

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
      answer += signs[i] ? absolutes[i] : -absolutes[i]
  }
  return answer;
}